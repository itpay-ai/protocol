/// <reference types="@docusaurus/plugin-content-docs" />
/// <reference types="@docusaurus/types" />

import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'ItPay Protocol',
  tagline: 'Open-source specification for AI-native, QR-based payment aggregation',
  favicon: 'img/logo.png',

  url: 'https://docs.itpay.ai',
  baseUrl: '/',

  organizationName: 'itpay-ai',
  projectName: 'protocol',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: () => {},
    },
  },

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
          editUrl: 'https://github.com/itpay-ai/protocol/tree/main/docs/',
          routeBasePath: '/',
        },
        blog: false,
        pages: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/logo.png',
    colorMode: {
      respectPrefersColorScheme: true,
      defaultMode: 'dark',
    },
    navbar: {
      title: 'ItPay Protocol',
      logo: {
        alt: 'ItPay',
        src: 'img/logo.png',
        srcDark: 'img/logo.png',
        height: 36,
        width: 36,
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'protocolSidebar',
          position: 'left',
          label: 'Specification',
        },
        {
          to: '/reference/api/payments',
          position: 'left',
          label: 'API Reference',
        },
        {
          href: 'https://github.com/itpay-ai/protocol',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub',
        },
        {
          href: 'https://itpay.ai',
          position: 'right',
          className: 'header-itpay-link',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Specification',
          items: [
            { label: 'Overview', to: '/' },
            { label: 'Architecture', to: '/specification/architecture' },
            { label: 'Core Objects', to: '/specification/core-objects' },
            { label: 'Payment Lifecycle', to: '/specification/payment-lifecycle' },
          ],
        },
        {
          title: 'Guides',
          items: [
            { label: 'Implementing a Platform', to: '/guides/implementing-a-platform' },
            { label: 'Writing a Channel Adapter', to: '/guides/writing-a-channel-adapter' },
          ],
        },
        {
          title: 'Reference',
          items: [
            { label: 'Payments API', to: '/reference/api/payments' },
            { label: 'Error Codes', to: '/reference/error-codes' },
            { label: 'Glossary', to: '/resources/glossary' },
            { label: 'llms.txt', to: '/resources/llms-txt' },
          ],
        },
        {
          title: 'Community',
          items: [
            { label: 'GitHub →', href: 'https://github.com/itpay-ai/protocol' },
            { label: 'PaaS Docs →', href: 'https://docs.itpay.ai/paas/paas-overview' },
            { label: 'ItPay.ai →', href: 'https://itpay.ai' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} ItPay. Open source under Apache 2.0.`,
    },
    prism: {
      theme: prismThemes.oneDark,
      darkTheme: prismThemes.oneDark,
      additionalLanguages: ['json', 'go', 'bash', 'python', 'http', 'typescript'],
    },
    docs: {
      sidebar: {
        hideable: false,
        autoCollapseCategories: false,
      },
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
