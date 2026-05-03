import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'ULayer',
  description: 'A ui for vue3',
  appearance: true,
  base: '/ulayer/',
  lastUpdated: true,
  themeConfig: {
    logo: '/logo.svg',
  },
  locales: {
    root: {
      label: 'English',
      lang: 'en-US',
      title: 'ulayer',
      description: 'A ui for vue3',
      themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Guide', link: '/guide' },
          { text: 'Components', link: '/components/button' },
        ],

        sidebar: [
          {
            text: 'Getting Started',
            items: [
              { text: 'Guide', link: '/guide' },
              { text: 'Theme', link: '/guide/theme' },
            ],
          },
          {
            text: 'Components',
            items: [
              { text: 'Button', link: '/components/button' },
              { text: 'Input', link: '/components/input' },
            ],
          },
          {
            text: 'Directives',
            items: [
              { text: 'Overview', link: '/guide/directive' },
              { text: 'Ripple', link: '/directives/ripple' },
            ],
          },
        ],

        socialLinks: [
          { icon: 'github', link: 'https://github.com/tongmingwang/ulayer' },
        ],
      },
    },
    'zh-CN': {
      label: '中文',
      lang: 'zh-CN',
      title: 'ulayer',
      description: '一个基于Vue3的UI库',

      themeConfig: {
        nav: [
          { text: '首页', link: '/zh-CN/' },
          { text: '指南', link: '/zh-CN/guide' },
          { text: '组件', link: '/zh-CN/components/button' },
        ],

        sidebar: [
          {
            text: '开始使用',
            items: [
              { text: '指南', link: '/zh-CN/guide' },
              { text: '主题', link: '/zh-CN/guide/theme' },
            ],
          },
          {
            text: '组件',
            items: [
              { text: '按钮', link: '/zh-CN/components/button' },
              { text: '输入框', link: '/zh-CN/components/input' },
            ],
          },
          {
            text: '指令',
            items: [
              { text: '概览', link: '/zh-CN/guide/directive' },
              { text: 'Ripple 水波纹', link: '/zh-CN/directives/ripple' },
            ],
          },
        ],

        socialLinks: [
          { icon: 'github', link: 'https://github.com/tongmingwang/ulayer' },
        ],
      },
    },
  },
});
