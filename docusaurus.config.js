/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  title: 'Script Hub',
  tagline: 'Programación de bots con Discord en español.',
  url: 'https://scripthubteam.github.io',
  baseUrl: '/',
  favicon: '',
  organizationName: 'Script Hub', // Usually your GitHub org/user name.
  projectName: 'Script Hub', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Script Hub',
      logo: {
        alt: 'Script Hub',
        src: 'img/logo.svg',
      },
      links: [
        {to: 'docs/home', label: 'Documentación', position: 'left'},
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/scripthubteam/scripthubteam.github.io',
          label: 'GitHub',
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
        alt: 'Facebook Open Source Logo',
        src: 'https://docusaurus.io/img/oss_logo.png',
      },
      copyright: `Copyright © ${new Date().getFullYear()} Facebook, Inc. Built with Docusaurus.`,
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
