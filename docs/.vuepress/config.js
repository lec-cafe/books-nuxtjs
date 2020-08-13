const { description } = require('../../package')
const sidebar = require("./nav.js")

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Nuxt.js Note',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: "Nuxt.js を利用した Web サイト / Web アプリ開発のための教材を作成しています。",

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],
  markdown: {
    anchor: {
      level: [1, 2, 3],
      slugify: (s) => encodeURIComponent(String(s).trim().toLowerCase().replace(/\s+/g, '-')),
      permalink: true,
      permalinkBefore: true,
      permalinkSymbol: '#'
    },
    config: md => {
      md.use(require('markdown-it-playground'))
    },
    linkify: true
  },
  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: 'lec-cafe/books-nuxtjs',
    editLinks: true,
    docsDir: 'docs',
    editLinkText: 'ページに不明点や誤字等があれば、Github にて修正を提案してください！',
    lastUpdated: false,
    nav: [
      {text: 'Lec Café', link: 'https://leccafe.connpass.com/'},
    ],
    sidebar: {
      ...require('../lessons/todolist/sidebar'),
      ...require('../lessons/chatapp/sidebar'),
      "/lessons/website/": [
        {
          title: 'Nuxt.js を利用したWebサイト制作',
          collapsable: false,
          path: "/lessons/website/",
          children: [
            '1.setup',
            '2.page',
            '3.subpage',
            '4.css',
            '5.image',
            '6.build',
          ]
        },
        "/lessons/",
        "/tips/nuxtjs/",
      ],
      ...require('../lessons/sidebar'),
      ...require('../tips/nuxtjs/sidebar'),
      ...require('../tips/vuejs/sidebar'),
      ...require('../tips/firebase/sidebar'),
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    ['disqus',{
      'shortname': "leccafe-nuxtjs-tips"
    }]

  ]
}
