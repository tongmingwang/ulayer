---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: 'Ume UI'
  text: 'Vue 3 Component Library'
  tagline: Lightweight, elegant, and themeable — built for the modern web
  image:
    dark: /logo.svg
    light: /dark.svg
    alt: ume-ui
  actions:
    - theme: brand
      text: Get Started
      link: /guide
    - theme: alt
      text: Components
      link: /components/button
    - theme: alt
      text: GitHub
      link: https://github.com/tongmingwang/ume-ui

features:
  - icon: 🚀
    title: Lightweight & Tree-shakeable
    details: Minimal bundle size with on-demand imports. Only ship the components you actually use.
  - icon: ⚡️
    title: Vue 3 + TypeScript
    details: Built from the ground up with Composition API and full TypeScript support for type-safe development.
  - icon: 🎨
    title: MUI-based Theming
    details: Complete CSS variable theming system with light/dark mode. 6-level color palette for precise customization.
  - icon: 📱
    title: Responsive Design
    details: Components adapt seamlessly across all device sizes, from mobile to desktop.
  - icon: 🔧
    title: Developer Experience
    details: Intuitive APIs, auto-documented props, and rich interactive examples for rapid development.
  - icon: 🌙
    title: Dark Mode Ready
    details: Built-in dark mode with smooth transitions. Automatic system preference detection out of the box.
---

```bash
pnpm add ume-ui
```
