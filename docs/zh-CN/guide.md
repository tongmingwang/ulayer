---
outline: deep
---

# 开始使用 ulayer

ulayer 是一个 Vue 3 组件库，旨在帮助开发者使用可重用的 UI 组件快速构建现代化的 Web 应用程序。

## 安装

您可以使用任何流行的包管理器来安装 ulayer：

### 使用 npm
```bash
npm install ulayer
```

### 使用 pnpm
```bash
pnpm add ulayer
```

### 使用 yarn
```bash
yarn add ulayer
```

### 使用 cnpm (中国镜像)
```bash
cnpm install ulayer
```

## 使用方法

有几种方式可以在项目中使用 ulayer：

### 全局引入

全局引入使所有组件在整个应用程序中可用，而无需在每个组件中单独导入它们。

```js
// main.js 或 main.ts
import { createApp } from 'vue'
import App from './App.vue'
import ULayers from 'ulayer'
import 'ulayer/dist/style.css' // 引入 CSS

const app = createApp(App)

app.use(ULayers)
app.mount('#app')
```

然后您可以在应用程序中的任何位置使用任何 ulayer 组件：

```vue
<template>
  <u-button color="primary">你好世界</u-button>
</template>
```

### 按需引入 (Tree Shaking)

只导入您需要的组件以减小打包体积：

```vue
<template>
  <u-button color="primary">点击我</u-button>
  <u-input v-model="inputValue" placeholder="输入文本" />
</template>

<script setup>
import { UButton, UInput } from 'ulayer'
import 'ulayer/dist/button/index.css'  // 导入组件特定的样式
import 'ulayer/dist/input/index.css'
</script>
```

或者直接导入单个组件：

```vue
<template>
  <Button color="primary">点击我</Button>
</template>

<script setup>
import Button from 'ulayer/button'
import 'ulayer/dist/button/index.css'
</script>
```

### UMD 方式 (直接在浏览器中使用)

在 HTML 中直接使用 CDN 引入库：

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>UlLayer 示例</title>
  <!-- 引入 Vue -->
  <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
  <!-- 引入 UlLayer 样式 -->
  <link rel="stylesheet" href="https://unpkg.com/ulayer/dist/style.css">
</head>
<body>
  <div id="app">
    <u-button color="primary" @click="count++">{{ count }}</u-button>
  </div>

  <!-- 引入 UlLayer -->
  <script src="https://unpkg.com/ulayer/dist/ulayer.umd.js"></script>
  
  <script>
    const { createApp, ref } = Vue
    
    const App = {
      setup() {
        const count = ref(0)
        
        return {
          count
        }
      },
      template: `
        <u-button color="primary" @click="count++">{{ count }}</u-button>
      `
    }
    
    createApp(App).use(UlLayer.default).mount('#app')
  </script>
</body>
</html>
```

## 支持的组件

目前，ulayer 包含以下组件：

- [Button](/zh-CN/components/button) - 多种变体的多功能按钮组件
- [Input](/zh-CN/components/input) - 具有各种选项的输入字段组件

更多组件将在未来版本中添加。

## 下一步

- 查看我们的 [Button 组件文档](/zh-CN/components/button) 了解更多功能
- 探索 [Input 组件文档](/zh-CN/components/input) 了解输入处理
- 访问 GitHub 仓库: [https://github.com/tongmingwang/ulayer](https://github.com/tongmingwang/ulayer)