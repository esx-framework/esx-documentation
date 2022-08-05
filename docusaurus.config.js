// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "ESX Documentation",
  tagline: "The Leading FiveM Framework",
  url: "https://docs.esx-framework.org",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "https://cdn.discordapp.com/attachments/999497215955451944/1003495386511577119/imageedit_1_2564956129.png",
  organizationName: "esx-framework",
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: "legacy",
          routeBasePath: "legacy"
        },
        theme: {
          customCss: require.resolve("./src/css/custom.scss")
        }
      })
    ]
  ],
  plugins: ["docusaurus-plugin-sass", [
    "@docusaurus/plugin-content-docs",
    {
      id: "infinity",
      path: "infinity",
      routeBasePath: "infinity"
    },
  ],
  [
    "@docusaurus/plugin-content-docs",
    {
      id: "tutorials",
      path: "tutorials",
      routeBasePath: "tutorials"
    },
  ],
  [
    "@docusaurus/plugin-content-docs",
    {
      id: "addons",
      path: "addons",
      routeBasePath: "addons"
    },
  ],
],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: "dark"
      },
      navbar: {
        title: "Home Page",
        logo: {
          alt: "ESX Logo",
          src: "https://cdn.discordapp.com/attachments/944789399852417096/1005183899455983707/aaaaaa.png"
        },
        items: [
          {
            type: "doc",
            docId: "installation",
            position: "left",
            label: "Legacy"
          },
          {
            type: "doc",
            docId: "menu_defualt/create_menu",
            docsPluginId: "addons",
            position: "left",
            label: "Legacy Addons"
          },
          {
            type: "doc",
            docId: "installation",
            docsPluginId: "infinity",
            position: "left",
            label: "Infinity"
          },
          {
            type: "doc",
            docId: "database",
            docsPluginId: "tutorials",
            position: "left",
            label: "Tutorials"
          },
          {
            href: "https://github.com/esx-framework",
            label: "GitHub",
            position: "right"
          },
          {
            href: "https://guilded.gg/ESX-Framework-OFFICIAL",
            label: "Guilded",
            position: "right"
          },
          {
            href: "https://discord.esx-framework.org/",
            label: "Discord",
            position: "right"
          }
        ]
      },
      footer: {
        style: "dark",
        copyright: `Copyright &copy; ${new Date().getFullYear()} ESX-Framework - All rights reserved.`
      },
      prism: {
        darkTheme: require("prism-react-renderer/themes/vsDark"),
        theme: require("prism-react-renderer/themes/github"),
        additionalLanguages: ["lua"]
      },
      algolia: {
        appId: 'GNDCWAKF4K',
        apiKey: 'efdbb4c666d4c00582bc14a621519410',
        indexName: 'esx-framework',
        contextualSearch: false
      },
    })
};

module.exports = config;
