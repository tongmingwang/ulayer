<div align="center">
  <h1>UmeUI</h1>
  <p>A modern Vue 3 UI library built with TypeScript</p>
  <p>一个基于 Vue 3 + TypeScript 构建的现代化 UI 组件库</p>
  <p>
    <a href="https://tongmingwang.github.io/ume-ui/">📖 Documentation | 文档</a>
  </p>
</div>

---

## ✨ Features | 特性

### English

- 🎨 **Modern Design** - Built with Material Design principles
- 🚀 **Vue 3 + TypeScript** - Fully typed with excellent IDE support
- 📦 **Tree Shakeable** - Import only what you need
- 🎯 **Directives Included** - Built-in utility directives like Ripple effect
- 💅 **SCSS Styling** - Easy to customize and theme
- 📚 **VitePress Docs** - Comprehensive documentation with live demos
- 🌍 **i18n Support** - Documentation in both Chinese and English

### 中文

- 🎨 **现代设计** - 基于 Material Design 设计规范构建
- 🚀 **Vue 3 + TypeScript** - 完整的类型定义，极佳的 IDE 支持
- 📦 **Tree Shakeable** - 按需引入，只使用你需要的组件
- 🎯 **内置指令** - 包含水波纹等实用指令
- 💅 **SCSS 样式** - 轻松定制主题和样式
- 📚 **VitePress 文档** - 完善的文档，包含在线演示
- 🌍 **国际化支持** - 中英文双语文档

---

## 📦 Installation | 安装

```bash
# npm
npm install ume-ui

# pnpm
pnpm add ume-ui
```

---

## 🚀 Quick Start | 快速开始

### Full Import | 完整引入

```ts
import { createApp } from 'vue';
import ume from 'ume-ui';
import 'ume-ui/dist/color.css';
import 'ume-ui/dist/index.css';

const app = createApp(App);
app.use(ume);
```

### On-demand Import | 按需引入

```ts
import { UButton, UInput, UIcon, ripple } from 'ume-ui';
import 'ume-ui/dist/color.css';
import 'ume-ui/dist/button/index.css';
import 'ume-ui/dist/input/index.css';
import 'ume-ui/dist/icon/index.css';

// Register component
app.component('UButton', UButton);
app.component('UInput', UInput);
app.component('UIcon', UIcon);

// Register directive
app.directive('ripple', ripple);
```

### Use in Component | 组件中使用

```vue
<template>
  <u-button v-ripple color="primary">Click Me</u-button>
  <u-input v-model="value" placeholder="Enter text" />
  <u-icon name="search" size="20" />
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import { UButton, UInput, UIcon } from 'ume-ui';

  const value = ref('');
</script>
```

---

## 🧩 Available Components | 可用组件

### Basic Components | 基础组件

| Component    | Status | Docs                                                                         | Description            |
| ------------ | ------ | ---------------------------------------------------------------------------- | ---------------------- |
| UButton      | ✅     | [Button](https://tongmingwang.github.io/ume-ui/components/button)            | Basic button component |
| UButtonGroup | ✅     | [ButtonGroup](https://tongmingwang.github.io/ume-ui/components/button-group) | Button group component |
| UFab         | ✅     | [Fab](https://tongmingwang.github.io/ume-ui/components/fab)                  | Floating action button |
| UIcon        | ✅     | [Icon](https://tongmingwang.github.io/ume-ui/components/icon)                | Icon library           |

### Form Components | 表单组件

| Component | Status | Docs                                                                  | Description           |
| --------- | ------ | --------------------------------------------------------------------- | --------------------- |
| UInput    | ✅     | [Input](https://tongmingwang.github.io/ume-ui/components/input)       | Input field component |
| UCheckbox | ✅     | [Checkbox](https://tongmingwang.github.io/ume-ui/components/checkbox) | Checkbox component    |

## 📐 Available Directives | 可用指令

| Directive | Status | Docs                                                              | Description                   |
| --------- | ------ | ----------------------------------------------------------------- | ----------------------------- |
| v-ripple  | ✅     | [Ripple](https://tongmingwang.github.io/ume-ui/directives/ripple) | Material Design ripple effect |

---

## 🔧 Development | 开发

```bash
# Install dependencies | 安装依赖
pnpm install

# Start dev server | 启动开发服务
pnpm dev

# Start docs dev server | 启动文档开发服务
pnpm docs:dev

# Build library | 构建库
pnpm build

# Build docs | 构建文档
pnpm docs:build
```

---

## 📄 License

MIT © [wangtongming](https://github.com/tongmingwang)

---

<div align="center">
  <p>Made with ❤️ by UmeUi Team</p>
</div>
