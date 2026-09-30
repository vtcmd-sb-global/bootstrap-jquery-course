import {themes as prismThemes} from 'prism-react-renderer';
const config = {
  title: 'Bootstrap and JQuery Guide',
  tagline: 'Bootstrap JQuery Course from Beginner to Advanced',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  url: 'https://vtcmd-sb-global.github.io',
  baseUrl: '/bootstrap-jquery-course/',
  
  // GitHub pages deployment config.
  organizationName: 'vtcmd-sb-global', // GitHub org/user name.
  projectName: 'bootstrap-jquery-course', // repo name.
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with project's social card
      image: 'img/social-card.jpg',
      metadata: [
        {
          name: 'description',
          content:
            'Free Bootstrap JQuery course for beginners. Learn Bootstrap JQuery fundamentals and advanced database concepts.'
        },
        {
          name: 'keywords',
          content:
            'boot, boot strap, jquery, bootstrap tutorial, jquery tutorial, learn bootstrap, learn jquery, bootstrap beginners, jquery programming'
        }
      ],
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },     
      navbar: {
        title: 'Bootstrap JQuery Guide',
        logo: {
          alt: 'Bootstrap JQuery Course Logo',
          src: 'img/logo.jpg', // optional – remove if you don’t have a logo
        },
        items: [
          {
            to: '/',
            label: 'Home',
            position: 'left',
          },
          {
            to: '/sessions/session-01',
            label: 'Sessions',
            position: 'left',
          },
          //{
          //  to: '/exercises/session-01',
          //  label: 'Exercises',
          //  position: 'left',
          //},
        ],
      },
      footer: {
        style: 'dark',
        links: [],
        copyright: `Copyright © ${new Date().getFullYear()} Student's Guide for Bootstrap & JQuery, Sir Aousaja.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
