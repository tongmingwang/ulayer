# 主题定制 / Theme Customization

ulayer 组件库提供了灵活的主题定制能力，允许开发者自定义组件的外观和风格。

## 使用预设主题 / Using Predefined Themes

ulayer 默认提供了一些预设主题，您可以直接使用：

```js
import { createApp } from 'vue'
import ULayers from 'ulayer'
import 'ulayer/dist/style.css'

// 使用默认主题
const app = createApp(App)
app.use(ULayers)
app.mount('#app')
```

## 自定义主题变量 / Customizing Theme Variables

您可以通过 CSS 变量来自定义主题：

```css
:root {
  /* 按钮相关变量 */
  --u-button-primary-color: #409eff;
  --u-button-success-color: #67c23a;
  --u-button-warning-color: #e6a23c;
  --u-button-danger-color: #f56c6c;
  --u-button-info-color: #909399;
  
  /* 输入框相关变量 */
  --u-input-border-color: #dcdfe6;
  --u-input-focus-color: #409eff;
  --u-input-disabled-color: #f5f7fa;
  
  /* 全局颜色变量 */
  --u-color-primary: #409eff;
  --u-color-success: #67c23a;
  --u-color-warning: #e6a23c;
  --u-color-danger: #f56c6c;
  --u-color-info: #909399;
}
```

## 深色主题 / Dark Theme

ulayer 支持深色主题，只需在根元素上添加 [dark](file:///d:\github\ulayer\packages\ulayer\global\var.css#L1-L1) 类即可：

```html
<html class="dark">
  <!-- 页面内容 -->
</html>
```

或者动态切换：

```js
// 切换到深色主题
document.documentElement.classList.add('dark')

// 切换回浅色主题
document.documentElement.classList.remove('dark')
```

## 定制组件样式 / Customizing Component Styles

如果需要深度定制组件样式，可以覆盖组件的 CSS 类：

```css
/* 自定义按钮样式 */
.u-button.my-custom-button {
  border-radius: 20px;
  font-weight: bold;
}

/* 自定义输入框样式 */
.u-input.my-custom-input {
  border-radius: 10px;
}
```

然后在模板中使用：

```vue
<template>
  <u-button class="my-custom-button">自定义按钮</u-button>
  <u-input class="my-custom-input" v-model="value" />
</template>
```

## 主题配置示例 / Theme Configuration Example

这是一个完整的主题配置示例：

```css
/* 定制主题变量 */
:root {
  --u-color-primary: #626aef;
  --u-color-success: #51cf66;
  --u-color-warning: #fcc419;
  --u-color-danger: #ff6b6b;
  --u-button-border-radius: 6px;
  --u-input-border-radius: 6px;
  --u-font-size-base: 14px;
}

/* 深色主题变量 */
.dark:root {
  --u-color-primary: #818cf8;
  --u-input-bg-color: #374151;
  --u-input-text-color: #f9fafb;
}
```