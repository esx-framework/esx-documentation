// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "ESX Documentation",
  tagline: "Industry Leading FiveM Framework",
  url: "https://docs.esx-framework.org",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "https://cdn.discordapp.com/attachments/936727454087806987/937875927717785660/30593074.png",
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
  plugins: ["docusaurus-plugin-sass", "docusaurus-plugin-google-adsense", [
    "@docusaurus/plugin-content-docs",
    {
      id: "infinity",
      path: "infinity",
      routeBasePath: "infinity"
    }
  ]],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: "dark"
      },
      googleAdsense: {
        dataAdClient: "ca-pub-9580213111363531"
      },
      navbar: {
        title: "ESX Framework",
        logo: {
          alt: "ESX Logo",
          src: "https://cdn.discordapp.com/attachments/936727454087806987/937875927717785660/30593074.png"
        },
        items: [
          {
            type: "doc",
            docId: "installation",
            position: "left",
            label: "ESX Legacy"
          },
          {
            type: "doc",
            docId: "installation",
            docsPluginId: "infinity",
            position: "left",
            label: "ESX Infinity"
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
            href: "https://discord.gg/ztzKWAF",
            label: "Discord",
            position: "right"
          }
        ]
      },
      footer: {
        style: "dark",
        copyright: `Copyright &copy; ${new Date().getFullYear()} ESX Framework`
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme
      }
    })
};

module.exports = config;
