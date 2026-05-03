# Directives Overview

Directives are special attributes with the `v-` prefix that provide declarative DOM manipulation capabilities. In ulayer, we provide several built-in directives to enhance user experience.

## Available Directives

Here is a list of all available directives in ulayer:

| Directive | Description |
| --- | --- |
| [v-ripple](/directives/ripple) | Adds Material Design ripple effects to interactive elements |

## Usage

All directives can be used in two ways:

### 1. Global Registration (Recommended)

When you import and install the entire ulayer library, all directives are automatically registered globally:

```js
import { createApp } from 'vue';
import ULayer from 'ulayer';

const app = createApp(App);
app.use(ULayer);
```

Then you can use directives directly in your templates:

```vue
<template>
  <button v-ripple>Click Me</button>
</template>
```

### 2. Individual Import

You can also import individual directives and register them manually:

```js
import { ripple } from 'ulayer';

// Register globally
app.directive('ripple', ripple);

// Or use in a single component
export default {
  directives: {
    ripple,
  },
};
```

## Adding More Directives

We are continuously adding more useful directives to ulayer. If you have a suggestion for a useful directive, please feel free to contribute or open an issue on our GitHub repository.

## Next Steps

Explore the individual directive documentation to learn about their specific usage and features:

- [Ripple Directive](/directives/ripple) - Learn how to use the ripple effect directive
