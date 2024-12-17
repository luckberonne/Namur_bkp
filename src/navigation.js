import { getLocalizedPermalink } from './utils/permalinks';
import { useTranslations } from '~/i18n/translator';

export const getHeaderData = (locale) => {
  const { t } = useTranslations(locale);
  return {
    links: [
      {
        text: t('header.home'),
        href: getLocalizedPermalink(locale, '/'),
      },
      {
        text: t('header.aboutUs'),
        href: getLocalizedPermalink(locale, '/about'),
      },
      {
        text: t('header.products'),
        href: getLocalizedPermalink(locale, '/products'),
      },
      {
        text: t('header.contact'),
        href: getLocalizedPermalink(locale, '/contact'),
      },
    ],
    actions: [],
  };
};

export const getFooterData = (locale) => {
  const { t } = useTranslations(locale);
  
  return {
    links: [
      {
        title: t('footer.product.title'),
        links: [
          { text: t('footer.product.alimenticios'), href: '#' },
          { text: t('footer.product.agroquimicos'), href: '#' },
        ],
      },
      {
        title: t('footer.contact.title'),
        links: [
          { text: t('footer.contact.information'), href: '#' },
          { text: t('footer.contact.rrhh'), href: '#' },
        ],
      },
    ],
    secondaryLinks: [
      { 
        text: t('footer.creators.lucas'), 
        href: 'https://github.com/luckberonne'
      },
      { 
        text: t('footer.creators.nico'), 
        href: 'https://github.com/Nicolas-Perez-Costa'
      },
    ],
    
  };
};
