import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Sobre nosotros',
      href: getPermalink('/about'),
    },
    {
      text: 'Productos',
      href: getPermalink('/productos')
    },
    {
      text: 'Contacto',
      href: getPermalink('/contact')
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
      title: 'Contacto',
      links: [
        { text: 'Quiero Información', href: '#' },
        { text: 'RRHH', href: '#' }
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ]
};
