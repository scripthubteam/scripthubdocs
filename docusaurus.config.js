/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  title: 'Inicio',
  tagline: 'Script Hub es una comunidad amplia de programadores y aficionados de todo el mundo que comparten sus propias experiencias.',
  url: 'https://scripthubdocs.github.io',
  baseUrl: '/',
  favicon: 'img/favicon/favico.ico',
  organizationName: 'scripthubteam', // Usually your GitHub org/user name.
  projectName: 'scripthubdocs', // Usually your repo name.
  themeConfig: {
    //navbar
    navbar: {
      title: '',
      logo: {
        alt: 'Script Hub',
        src: 'img/logonavbar.png',
      },
      //links
      links: [
        {to: 'docs/home', label: 'Documentación', position: 'left'},
        {to: 'blog', label: 'Blog', position: 'left'},
        {to: 'equipo', label: 'Equipo', position: 'left'},
        {
          href: 'https://github.com/scripthubteam/',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://www.patreon.com/scripthubteam',
          label: 'Patreon',
          position: 'right',
        },
        {
          href: 'https://discord.gg/se6Ncjr',
          label: 'Discord',
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
              label: 'Documentación',
              to: 'docs/home',
            },
          ],
        },
        {
          title: 'Comunidad',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/se6Ncjr',
            },
          ],
        },
        {
          title: 'Artículos',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
          ],
        },
      ],
      logo: {
        alt: 'Script Hub',
        src: '',
      },
      copyright: `Copyright © ${new Date().getFullYear()} Script Hub.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
