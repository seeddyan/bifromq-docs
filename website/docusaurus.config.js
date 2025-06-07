// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const {themes} = require('prism-react-renderer');
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;
const tailwindPlugin = require('./plugins/tailwind-plugin.cjs')

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Apache BifroMQ (Incubating) - Open source MQTT Broker',
  tagline: 'High-performance, multi-tenant MQTT broker for enterprise IoT infrastructure - Apache Incubator Project',
  favicon: 'img/favicon.ico',
  url: 'https://bifromq.io/',
  baseUrl: '/',
  organizationName: 'baidu',
  projectName: 'bifromq',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  trailingSlash: true,
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh-Hans'],
    localeConfigs: {
      en: {
        label: 'English',
      },
      'zh-Hans': {
        label: '简体中文',
      },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: ({locale, versionDocsDirPath, docPath}) => {
            if (locale !== config.i18n.defaultLocale) {
              return `https://github.com/bifromqio/bifromq-docs/tree/master/website/i18n/zh-Hans/docusaurus-plugin-content-docs/`;
            }
            return `https://github.com/bifromqio/bifromq-docs/tree/master/website/${versionDocsDirPath}/${docPath}`;
          },
          lastVersion: 'current',
          versions: {
            current: {
              label: '3.3.x',
              path: '',
            },
          },
        },
        blog: {
          showReadingTime: true,
          blogSidebarCount: 10,
          editUrl: ({locale}) => {
            if (locale !== config.i18n.defaultLocale) {
              return "https://github.com/bifromqio/bifromq-docs/blob/master/website/i18n/zh-Hans/docusaurus-plugin-content-blog";
            }
            return "https://github.com/bifromqio/bifromq-docs/tree/master/website/blog";
          },
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  plugins: [tailwindPlugin, require.resolve('docusaurus-plugin-image-zoom')],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'light',
        respectPrefersColorScheme: true,
      },
      zoom: {
        selector: '.markdown :not(em) > img',
        background: {
          light: 'rgb(255, 255, 255)',
          dark: 'rgb(50, 50, 50)'
        },
        config: {
          // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
        }
      },
      navbar: {
        title: 'Apache BifroMQ (Incubating)',
        hideOnScroll: false,
        logo: {
          alt: 'BifroMQ Logo',
          src: 'img/logo.svg',
          srcDark: 'img/logo_dark.svg',
          className: 'bifromq-navbar-logo-class',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'right',
            label: 'Docs',
          },
          {
            to: '/blog',
            label: 'Blog',
            position: 'right'
          },
          {
            href: 'https://github.com/bifromqio/bifromq',
            label: 'GitHub',
            position: 'right',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),

  scripts: [
      '/js/baiduHM.js',
  ],
};

module.exports = config;
