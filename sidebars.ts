import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  protocolSidebar: [
    {
      type: 'category',
      label: 'Introduction',
      collapsible: false,
      link: {type: 'doc', id: 'index'},
      items: [
        'specification/architecture',
      ],
    },
    {
      type: 'category',
      label: '📘 Specification',
      collapsible: false,
      link: {type: 'doc', id: 'specification/index'},
      items: [
        'specification/core-objects',
        'specification/payment-lifecycle',
        'specification/security',
        'specification/webhooks',
        'specification/errors',
        'specification/versioning',
      ],
    },
    {
      type: 'category',
      label: '📖 Guides',
      collapsible: false,
      items: [
        'guides/implementing-a-platform',
        'guides/writing-a-channel-adapter',
      ],
    },
    {
      type: 'category',
      label: '📚 API Reference',
      collapsible: false,
      link: {type: 'doc', id: 'reference/api/payments'},
      items: [
        'reference/api/subscriptions',
        'reference/api/refunds',
        'reference/api/manifests',
        'reference/api/webhooks',
        'reference/error-codes',
      ],
    },
    {
      type: 'category',
      label: '📎 Resources',
      collapsible: true,
      items: [
        'resources/glossary',
        'resources/llms-txt',
      ],
    },
  ],
};

export default sidebars;
