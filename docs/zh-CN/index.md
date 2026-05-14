---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: 'Ume UI'
  text: 'Vue 3 组件库'
  tagline: 轻量、优雅、可定制 — 为现代 Web 而生
  image:
    dark: /logo.svg
    light: /dark.svg
    alt: ume-ui
  actions:
    - theme: brand
      text: 开始使用
      link: /zh-CN/guide
    - theme: alt
      text: 组件列表
      link: /zh-CN/components/button
    - theme: alt
      text: GitHub
      link: https://github.com/tongmingwang/ume-ui

features:
  - icon: 🚀
    title: 轻量 & 按需引入
    details: 极小的打包体积，支持 tree-shaking 按需加载，只引入你实际使用的组件。
  - icon: ⚡️
    title: Vue 3 + TypeScript
    details: 基于 Composition API 从零构建，完整的 TypeScript 支持，实现类型安全的开发体验。
  - icon: 🎨
    title: MUI 风格主题
    details: 完整的 CSS 变量主题系统，支持明暗模式切换。6 级色彩体系，精确自定义每个细节。
  - icon: 📱
    title: 响应式设计
    details: 组件自适应各种设备尺寸，从移动端到桌面端完美呈现。
  - icon: 🔧
    title: 开发体验
    details: 直观的 API 设计、完整的属性文档和丰富的交互示例，助力快速开发。
  - icon: 🌙
    title: 暗黑模式
    details: 内置暗黑模式，平滑过渡动画，自动检测系统主题偏好，开箱即用。
---

```bash
pnpm add ume-ui
```
