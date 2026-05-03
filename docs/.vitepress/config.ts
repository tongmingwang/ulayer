import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'UmeUi',
  description: 'A ui for vue3',
  appearance: true,
  base: '/ume-ui/',
  lastUpdated: true,
  themeConfig: {
    logo: '/logo.png',
  },
  locales: {
    root: {
      label: 'English',
      lang: 'en-US',
      title: 'ume-ui',
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

        search: {
          provider: 'local',
          options: {
            translations: {
              button: {
                buttonText: 'Search Docs',
                buttonAriaLabel: 'Search Docs',
              },
              modal: {
                noResultsText: 'No results found',
                resetButtonTitle: 'Reset search',
                footer: {
                  selectText: 'Select',
                  navigateText: 'Navigate',
                  closeText: 'Close',
                },
              },
            },
          },
        },

        socialLinks: [
          { icon: 'github', link: 'https://github.com/tongmingwang/ume-ui' },
        ],
      },
    },
    'zh-CN': {
      label: '中文',
      lang: 'zh-CN',
      title: 'ume-ui',
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
        // 搜索功能
        search: {
          provider: 'local',
          options: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档',
              },
              modal: {
                noResultsText: '暂无相关结果',
                resetButtonTitle: '清空搜索',
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                  closeText: '关闭',
                },
              },
            },
          },
        },
        socialLinks: [
          { icon: 'github', link: 'https://github.com/tongmingwang/ume-ui' },
        ],
      },
    },
  },
});
