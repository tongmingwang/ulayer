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
    search: {
      provider: 'local',
    },
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
            text: 'Basic Components',
            items: [
              { text: 'Button', link: '/components/button' },
              { text: 'Button Group', link: '/components/button-group' },
              { text: 'Fab', link: '/components/fab' },
              { text: 'Icon', link: '/components/icon' },
            ],
          },
          {
            text: 'Feedback Components',
            items: [
              { text: 'Alert', link: '/components/alert' },
              { text: 'Mask', link: '/components/mask' },
              { text: 'Dialog', link: '/components/dialog' },
              { text: 'Drawer', link: '/components/drawer' },
            ],
          },
          {
            text: 'Form Components',
            items: [
              { text: 'Input', link: '/components/input' },
              { text: 'InputNumber', link: '/components/input-number' },
              { text: 'Textarea', link: '/components/textarea' },
              { text: 'Checkbox', link: '/components/checkbox' },
              { text: 'Radio', link: '/components/radio' },
              { text: 'Select', link: '/components/select' },
              { text: 'Switch', link: '/components/switch' },
              { text: 'Slider', link: '/components/slider' },
              { text: 'Form', link: '/components/form' },
            ],
          },
          {
            text: 'Data Components',
            items: [
              { text: 'List', link: '/components/list' },
              { text: 'Card', link: '/components/card' },
              { text: 'Badge', link: '/components/badge' },
              { text: 'Divider', link: '/components/divider' },
            ],
          },
          {
            text: 'Navigation Components',
            items: [
              { text: 'Dropdown', link: '/components/dropdown' },
              { text: 'Tabs', link: '/components/tabs' },
              { text: 'Tooltip', link: '/components/tooltip' },
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
            text: '基础组件',
            items: [
              { text: '按钮', link: '/zh-CN/components/button' },
              { text: '按钮组', link: '/zh-CN/components/button-group' },
              { text: '悬浮按钮', link: '/zh-CN/components/fab' },
              { text: '图标', link: '/zh-CN/components/icon' },
            ],
          },
          {
            text: '反馈组件',
            items: [
              { text: '警告提示', link: '/zh-CN/components/alert' },
              { text: '遮罩层', link: '/zh-CN/components/mask' },
              { text: '对话框', link: '/zh-CN/components/dialog' },
              { text: '抽屉', link: '/zh-CN/components/drawer' },
            ],
          },
          {
            text: '表单组件',
            items: [
              { text: '输入框', link: '/zh-CN/components/input' },
              { text: '数字输入框', link: '/zh-CN/components/input-number' },
              { text: '文本域', link: '/zh-CN/components/textarea' },
              { text: '复选框', link: '/zh-CN/components/checkbox' },
              { text: '单选框', link: '/zh-CN/components/radio' },
              { text: '选择器', link: '/zh-CN/components/select' },
              { text: '开关', link: '/zh-CN/components/switch' },
              { text: '滑块', link: '/zh-CN/components/slider' },
              { text: '表单', link: '/zh-CN/components/form' },
            ],
          },
          {
            text: '数据组件',
            items: [
              { text: '列表', link: '/zh-CN/components/list' },
              { text: '卡片', link: '/zh-CN/components/card' },
              { text: '徽标', link: '/zh-CN/components/badge' },
              { text: '分隔线', link: '/zh-CN/components/divider' },
            ],
          },
          {
            text: '导航组件',
            items: [
              { text: '下拉菜单', link: '/zh-CN/components/dropdown' },
              { text: '标签页', link: '/zh-CN/components/tabs' },
              { text: '文字提示', link: '/zh-CN/components/tooltip' },
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
