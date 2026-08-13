import path from 'path';
import { fileURLToPath } from 'url';

import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import tailwindPlugin from 'tailwindcss';
import autoprefixerPlugin from 'autoprefixer';
import partytown from '@astrojs/partytown';
import compress from 'astro-compress';
import icon from 'astro-icon';
import tasks from "./src/utils/tasks";

import { readingTimeRemarkPlugin } from './src/utils/frontmatter.mjs';

import { ANALYTICS, SITE, I18N } from './src/utils/config.ts';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const whenExternalScripts = (items = []) =>
  ANALYTICS.vendors.googleAnalytics.id && ANALYTICS.vendors.googleAnalytics.partytown
    ? Array.isArray(items)
      ? items.map((item) => item())
      : [items()]
    : [];

export default defineConfig({
  site: SITE.site,
  base: SITE.base,
  trailingSlash: SITE.trailingSlash ? 'always' : 'never',
  
  build: {
    format: SITE.trailingSlash ? "directory" : "file"
  },

  output: 'static',

  // Locale URLs are hand-rolled under src/pages/es/* (default locale 'en' stays unprefixed).
  // This `i18n` block only drives astro:i18n helpers (getRelativeLocaleUrl, etc.), not
  // routing/rewrites.
  i18n: I18N.isEnabled
    ? {
        defaultLocale: I18N.defaultLocale,
        locales: Object.keys(I18N.locales),
        routing: {
          prefixDefaultLocale: false,
        },
      }
    : undefined,

  // BasicScripts.astro's language switcher always builds a `/${lang}/...` URL, even for the
  // default locale, so redirect that alias to the canonical unprefixed page instead of
  // duplicating it under src/pages/en/*.
  redirects: I18N.isEnabled
    ? {
        [`/${I18N.defaultLocale}`]: '/',
        [`/${I18N.defaultLocale}/about`]: '/about',
        [`/${I18N.defaultLocale}/contact`]: '/contact',
        [`/${I18N.defaultLocale}/products`]: '/products',
        [`/${I18N.defaultLocale}/landing/lead-generation`]: '/landing/lead-generation',
        [`/${I18N.defaultLocale}/landing/product`]: '/landing/product',
      }
    : undefined,

  integrations: [
    // Conditionally add sitemap i18n alternates based on I18N.isEnabled
    I18N.isEnabled
      ? sitemap({
          i18n: {
            locales: I18N.locales,
            defaultLocale: I18N.defaultLocale,
          },
          // Exclude the /en/* alias routes (see the i18n comment above) so the default
          // locale isn't listed twice under two different URLs.
          filter: (page) => !new URL(page).pathname.startsWith(`/${I18N.defaultLocale}/`),
        })
      : sitemap({}),

    mdx(),
    icon({
      include: {
        tabler: ['*'],
        'flat-color-icons': [
          'template',
          'gallery',
          'approval',
          'document',
          'advertising',
          'currency-exchange',
          'voice-presentation',
          'business-contact',
          'database',
        ],
      },
    }),

    ...whenExternalScripts(() =>
      partytown({
        config: { forward: ['dataLayer.push'] },
      })
    ),

    tasks(),

    compress({
      CSS: true,
      HTML: {
        removeAttributeQuotes: false,
      },
      Image: false,
      JavaScript: true,
      SVG: true,
      Logger: 1,
    }),
  ],

  markdown: {
    remarkPlugins: [readingTimeRemarkPlugin],
  },

  vite: {
    resolve: {
      alias: {
        '~': path.resolve(__dirname, './src'),
      },
    },
    css: {
      postcss: {
        plugins: [tailwindPlugin(), autoprefixerPlugin()],
      },
    },
  },
});
