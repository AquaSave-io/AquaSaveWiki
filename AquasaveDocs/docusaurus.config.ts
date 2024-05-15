import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Aquasave documentation',
  tagline: 'Aquasave docs',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.aquasave.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Aquasave', // Usually your GitHub org/user name.
  projectName: 'AquaSaveWiki', // Usually your repo name.

  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
         // editUrl:
       //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: false,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
         // editUrl:
        //    'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Aquasave',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'gettingStarted',
          position: 'left',
          label: 'Getting started',
        },
        {
          type: 'docSidebar',
          sidebarId: 'depin',
          position: 'left',
          label: 'DEPIN',
        },
        {
          type: 'docSidebar',
          sidebarId: 'economy',
          position: 'left',
          label: 'Economy',
        },
        {
          type: 'docSidebar',
          sidebarId: 'roadmap',
          position: 'left',
          label: 'Roadmap',
        },
        {
          href: 'https://github.com/AquaSave-io/',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://aquasave.io/',
          label: 'Website',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting started',
              to: '/docs/getting-started',
            },
            {
              label: 'DePin',
              to: '/docs/aquabank-revolution-depin/revolution-depin',
            },
            {
              label: 'Economy',
              to: '/docs/category/token-economy',
            },
            {
              label: 'Roadmap',
              to: '/docs/future-water/roadmap',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Instagram',
              href: 'https://www.instagram.com/aquasave.io/',
            },
            {
              label: 'Medium',
              href: 'https://medium.com/@aquabanknetwork',
            },
            {
              label: 'YouTube',
              href: 'https://www.youtube.com/channel/UC6rBKDof8qy-kJv5wGRkLBg',
            },
            {
              label: 'Discord',
              href: 'https://discord.com/invite/gQSmUGsUtB',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/AquaSaveCrypto',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Website',
              href: 'https://aquasave.io/',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/AquaSave-io/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Aquasave, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
