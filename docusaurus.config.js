// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "ESX",
  tagline: "The Leading FiveM Framework",
  url: "https://docs.esx-framework.org",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "esx-framework", // Usually your GitHub org/user name.
  projectName: "Infinity", // Usually your repo name.

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/esx-framework/esx-docs.github.io/tree/develop"
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/esx-framework/esx-docs.github.io/tree/develop/"
        },
        theme: {
          customCss: require.resolve("./src/css/custom.scss")
        }
      })
    ]
  ],
  plugins: ["docusaurus-plugin-sass"],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "ESX Framework",
        logo: {
          alt: "ESX Logo",
          src:
            "https://cdn.discordapp.com/attachments/936727454087806987/937875927717785660/30593074.png"
        },
        items: [
          {
            type: "doc",
            docId: "legacy/installation",
            position: "left",
            label: "ESX Legacy"
          },
          {
            type: "doc",
            docId: "infinity/installation",
            position: "left",
            label: "ESX Infinity"
          },
          {
            to: "/docs/infinity/installation",
            label: "Blog",
            position: "left"
          },
          {
            href: "https://github.com/esx-framework",
            label: "GitHub",
            position: "right"
          }
        ]
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "ESX Legacy",
                to: "/docs/legacy/installation"
              },
              {
                label: "ESX Infinity",
                to: "/docs/infinity/installation"
              }
            ]
          },
          {
            title: "Community",
            items: [
              {
                label: "Discord",
                href: "https://discord.gg/ztzKWAF"
              }
            ]
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/docs/infinity/installation"
              },
              {
                label: "GitHub",
                href: "https://github.com/esx-framework"
              }
            ]
          }
        ],
        copyright: `Copyright © ${new Date().getFullYear()} ESX Framework.`
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme
      }
    })
};

module.exports = config;
