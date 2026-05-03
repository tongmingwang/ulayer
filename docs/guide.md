---
outline: deep
---

# Getting Started with ume-ui

ume-ui is a Vue 3 component library designed to help developers quickly build modern web applications with reusable UI components.

## Installation

You can install ume-ui using any of the popular package managers:

### Using npm

```bash
npm install ume-ui
```

### Using pnpm

```bash
pnpm add ume-ui
```

### Using yarn

```bash
yarn add ume-ui
```

### Using cnpm (China mirror)

```bash
cnpm install ume-ui
```

## Usage Methods

There are several ways to use ume-ui in your project:

### Global Import

Global import makes all components available throughout your application without having to import them individually in each component.

```js
// main.js or main.ts
import { createApp } from 'vue';
import App from './App.vue';
import UmeUi from 'ume-ui';
import 'ume-ui/dist/color.css'; // Import the CSS colors
import 'ume-ui/dist/index.css'; // Import the CSS

const app = createApp(App);

app.use(UmeUi);
app.mount('#app');
```

Then you can use any ume-ui component anywhere in your application:

```vue
<template>
  <u-button color="primary">Hello World</u-button>
</template>
```

### On-Demand Import (Tree Shaking)

Import only the components you need to reduce bundle size:

```vue
<template>
  <u-button color="primary">Click me</u-button>
  <u-input v-model="inputValue" placeholder="Enter text" />
</template>

<script setup>
  import { UButton, UInput } from 'ume-ui';
  import 'ume-ui/dist/button/index.css'; // Import component-specific styles
  import 'ume-ui/dist/input/index.css';
</script>
```

Or import individual components directly:

```vue
<template>
  <Button color="primary">Click me</Button>
</template>

<script setup>
  import Button from 'ume-ui/button';
  import 'ume-ui/dist/button/index.css';
</script>
```

### UMD Usage (Direct Browser Usage)

Include the library directly in HTML using CDN:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>UlLayer Example</title>
    <!-- Import Vue -->
    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
    <!-- Import UlLayer styles -->
    <link rel="stylesheet" href="https://unpkg.com/ume-ui/dist/style.css" />
  </head>
  <body>
    <div id="app">
      <u-button color="primary" @click="count++">{{ count }}</u-button>
    </div>

    <!-- Import UlLayer -->
    <script src="https://unpkg.com/ume-ui/dist/ume-ui.umd.js"></script>

    <script>
      const { createApp, ref } = Vue;

      const App = {
        setup() {
          const count = ref(0);

          return {
            count,
          };
        },
        template: `
        <u-button color="primary" @click="count++">{{ count }}</u-button>
      `,
      };

      createApp(App).use(UlLayer.default).mount('#app');
    </script>
  </body>
</html>
```

## Supported Components

Currently, ume-ui includes the following components:

- [Button](/components/button) - A versatile button component with multiple variants
- [Input](/components/input) - An input field component with various options

More components will be added in future releases.

## Next Steps

- Check out our [Button component documentation](/components/button) to learn more about its features
- Explore the [Input component documentation](/components/input) for input handling
- Visit the GitHub repository: [https://github.com/tongmingwang/ume-ui](https://github.com/tongmingwang/ume-ui)
