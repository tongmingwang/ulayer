# 指令概览 / Directives Overview

指令是带有 `v-` 前缀的特殊属性，提供声明式的 DOM 操作能力。在 ulayer 中，我们提供了一些内置指令来增强用户体验。

## 可用指令 / Available Directives

以下是 ulayer 中所有可用的指令列表：

| 指令 | 说明 |
| --- | --- |
| [v-ripple](/zh-CN/directives/ripple) | 为交互元素添加 Material Design 水波纹效果 |

## 使用方式 / Usage

所有指令都可以通过两种方式使用：

### 1. 全局注册（推荐）

当你导入并安装整个 ulayer 库时，所有指令会自动全局注册：

```js
import { createApp } from 'vue';
import ULayer from 'ulayer';

const app = createApp(App);
app.use(ULayer);
```

然后你可以在模板中直接使用指令：

```vue
<template>
  <button v-ripple>点击我</button>
</template>
```

### 2. 单独导入

你也可以单独导入指令并手动注册：

```js
import { ripple } from 'ulayer';

// 全局注册
app.directive('ripple', ripple);

// 或者在单个组件中使用
export default {
  directives: {
    ripple,
  },
};
```

## 添加更多指令 / Adding More Directives

我们正在持续为 ulayer 添加更多实用的指令。如果你对新的指令有建议，欢迎在我们的 GitHub 仓库贡献或提交 issue。

## 下一步 / Next Steps

查看各个指令的详细文档来了解它们的具体用法和特性：

- [Ripple 水波纹指令](/zh-CN/directives/ripple) - 了解如何使用水波纹效果指令
