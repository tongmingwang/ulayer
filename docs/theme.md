# Theme Customization

ulayer component library provides flexible theme customization capabilities, allowing developers to customize the appearance and style of components.

## Using Predefined Themes

ulayer provides some predefined themes by default, which you can use directly:

```js
import { createApp } from 'vue'
import ULayers from 'ulayer'
import 'ulayer/dist/style.css'

// Use default theme
const app = createApp(App)
app.use(ULayers)
app.mount('#app')
```

## Customizing Theme Variables

You can customize themes using CSS variables:

```css
:root {
  /* Button related variables */
  --u-button-primary-color: #409eff;
  --u-button-success-color: #67c23a;
  --u-button-warning-color: #e6a23c;
  --u-button-danger-color: #f56c6c;
  --u-button-info-color: #909399;
  
  /* Input related variables */
  --u-input-border-color: #dcdfe6;
  --u-input-focus-color: #409eff;
  --u-input-disabled-color: #f5f7fa;
  
  /* Global color variables */
  --u-color-primary: #409eff;
  --u-color-success: #67c23a;
  --u-color-warning: #e6a23c;
  --u-color-danger: #f56c6c;
  --u-color-info: #909399;
}
```

## Dark Theme

ulayer supports dark theme, simply add the [dark](file:///d:\github\ulayer\packages\ulayer\global\var.css#L1-L1) class to the root element:

```html
<html class="dark">
  <!-- Content -->
</html>
```

Or toggle dynamically:

```js
// Switch to dark theme
document.documentElement.classList.add('dark')

// Switch back to light theme
document.documentElement.classList.remove('dark')
```

## Customizing Component Styles

If you need to deeply customize component styles, you can override the component's CSS classes:

```css
/* Custom button styles */
.u-button.my-custom-button {
  border-radius: 20px;
  font-weight: bold;
}

/* Custom input styles */
.u-input.my-custom-input {
  border-radius: 10px;
}
```

Then use them in your template:

```vue
<template>
  <u-button class="my-custom-button">Custom Button</u-button>
  <u-input class="my-custom-input" v-model="value" />
</template>
```

## Theme Configuration Example

Here's a complete theme configuration example:

```css
/* Custom theme variables */
:root {
  --u-color-primary: #626aef;
  --u-color-success: #51cf66;
  --u-color-warning: #fcc419;
  --u-color-danger: #ff6b6b;
  --u-button-border-radius: 6px;
  --u-input-border-radius: 6px;
  --u-font-size-base: 14px;
}

/* Dark theme variables */
.dark:root {
  --u-color-primary: #818cf8;
  --u-input-bg-color: #374151;
  --u-input-text-color: #f9fafb;
}
```