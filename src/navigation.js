import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Inicio',
      links: [
        {
          text: 'Sobre Nosotros',
          href: getPermalink('/about'),
        },
        {
          text: 'Nuestros Valores',
          href: getPermalink('/terms'),
        },
      ],
    },
    {
      text: 'Productos',
      links: [
        {
          text: 'Alimenticios',
          href: getPermalink('/services'),
        },
        {
          text: 'Agroquimicos',
          href: getPermalink('/services'),
        },
        {
          text: 'Contact',
          href: getPermalink('/contact'),
        },
      ],
    },
    {
      text: 'Servicios',
      links: [
        {
          text: 'Consultoría en aspectos regulatorios',
          href: getPermalink('/pricing'),
        },
        {
          text: 'Registro de agroquímicos',
          href: getPermalink('/pricing'),
        },
        {
          text: 'Representación legal y comercial',
          href: getPermalink('/pricing'),
        },
      ],
    },
    {
      text: 'Contacto',
      links: [
        {
          text: 'Quiero Información',
          href: getPermalink('/contact'),
        },
        {
          text: 'RRHH',
          href: getPermalink('/contact'),
        },
      ],
    },
  ],
  actions: [{ text: 'Download', href: 'https://github.com/onwidget/namur', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Product',
      links: [
        { text: 'Alimenticios', href: '#' },
        { text: 'Agroquimicos', href: '#' }
      ],
    },
    {
      title: 'Servicios',
      links: [
        { text: 'Consultoría en aspectos regulatorios', href: '#' },
        { text: 'Registro de agroquímicos', href: '#' },
        { text: 'Representación legal y comercial', href: '#' }
      ],
    },
    {
      title: 'Contacto',
      links: [
        { text: 'Quiero Información', href: '#' },
        { text: 'RRHH', href: '#' }
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: '#' },
        { text: 'Blog', href: '#' },
        { text: 'Careers', href: '#' },
        { text: 'Press', href: '#' },
        { text: 'Inclusion', href: '#' },
        { text: 'Social Impact', href: '#' },
        { text: 'Shop', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
  ],
  footNote: `
    <img class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm" src="https://onwidget.com/favicon/favicon-32x32.png" alt="onWidget logo" loading="lazy"></img>
    Made by <a class="text-blue-600 underline dark:text-muted" href="https://github.com/luckberonne"> Lucas Beronne</a> y <a class="text-blue-600 underline dark:text-muted" href="https://github.com/Nicolas-Perez-Costa"> Nicolas Costa</a> · All rights reserved.
  `,
};
