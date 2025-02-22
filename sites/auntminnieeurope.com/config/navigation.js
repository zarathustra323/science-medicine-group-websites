const sortNavItems = require('@science-medicine-group/package-global/utils/sort-nav-items');

const subscribe = require('./subscribe');
const privacyPolicy = require('./privacy-policy');

const topics = [
  { href: '/advanced-visualization', label: 'Advanced Visualization' },
  { href: '/artificial-intelligence', label: 'Artificial Intelligence' },
  { href: '/ct', label: 'CT' },
  { href: '/digital-x-ray', label: 'Digital X-Ray' },
  { href: '/enterprise-imaging', label: 'Enterprise Imaging' },
];

const secondary = [
  { href: '#', label: 'Videos' },
  // { href: '/resources/conferences', label: 'Conferences' },
];

const mobileMenu = {
  primary: sortNavItems([
    ...topics,
  ]),
  secondary: sortNavItems([
    ...secondary,
    subscribe,
  ]),
};

module.exports = {
  type: 'navbar-c',
  promos: [
    {
      title: subscribe.label,
      callToAction: subscribe.label,
      link: subscribe.href,
    },
  ],
  user: {
    items: [],
  },
  mobileMenu,
  topics,
  primary: {
    items: secondary,
  },
  secondary: {
    items: topics,
  },
  tertiary: {
    items: [],
  },
  toggleMenu: {
    col1: {
      label: 'Topic 1',
      items: [
        { href: '#', label: 'Subtopic 1' },
        // ...sortNavItems(businessInsights),
        // { href: '/business-insites', label: 'View all &raquo;' },
      ],
    },
    col2: {
      label: 'Topic 2',
      items: [
        { href: '#', label: 'Subtopic 1' },
        // ...sortNavItems(diagnosticTechnologies).slice(0, 10),
        // { href: '/diagnostic-technologies', label: 'View all &raquo;' },
      ],
    },
    col3: {
      label: 'Topic 3',
      items: [
        { href: '#', label: 'Subtopic 1' },
        // ...sortNavItems(diseases).slice(0, 10),
        // { href: '/diseases', label: 'View all &raquo;' },
      ],
    },
    col4: {
      label: 'Topic 4',
      items: [
        { href: '#', label: 'Subtopic 1' },
        // ...resources,
        // ...pointOfCareTesting,
      ],
    },
  },
  footer: {
    col1: {
      label: 'Topics',
      items: topics,
    },
    col2: {
      label: 'Resources',
      items: [
        { href: '#', label: 'Resource 1' },
        // ...resources,
        // { href: '#', label: 'TBD' },
        // { href: '#', label: 'TBD' },
      ],
    },
    col3: {
      label: 'More',
      items: [
        { href: '#', label: 'More Item 1' },
        // { href: '#', label: 'TBD' },
        // { href: '#', label: 'TBD' },
      ],
    },
    items: [
      privacyPolicy,
      { href: '/page/copyright-information', label: 'Copyright Information' },
      { href: '/page/contact-us', label: 'Contact Us' },
      { href: '/site-map', label: 'Site Map' },
    ],
  },
};
