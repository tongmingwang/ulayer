# Divider

Divider is a thin line that separates content areas.

## Basic Usage

Basic horizontal divider.

<div class="demo-divider">
  <p>Above content</p>
  <u-divider></u-divider>
  <p>Below content</p>
</div>

```vue
<template>
  <p>Above content</p>
  <u-divider></u-divider>
  <p>Below content</p>
</template>
```

## Color

Customize divider color.

<div class="demo-divider">
  <u-divider color="#ff5252"></u-divider>
</div>

```vue
<template>
  <u-divider color="#ff5252"></u-divider>
</template>
```

## Vertical Divider

Use vertical divider to separate inline elements.

<div class="demo-divider-vertical">
  <span>Left</span>
  <u-divider vertical></u-divider>
  <span>Right</span>
</div>

```vue
<template>
  <div style="display: flex; align-items: center; gap: 16px;">
    <span>Left</span>
    <u-divider vertical></u-divider>
    <span>Right</span>
  </div>
</template>
```

## API

| Attribute | Description      | Type      | Default                   |
| --------- | ---------------- | --------- | ------------------------- |
| vertical  | Vertical divider | `boolean` | `false`                   |
| color     | Divider color    | `string`  | `rgba(var(--u-rgb), 0.2)` |

<style scoped>
  .demo-divider {
    margin-bottom: 16px;
  }
  .demo-divider p {
    margin: 12px 0;
  }
  .demo-divider-vertical {
    display: flex;
    align-items: center;
    gap: 16px;
    height: 40px;
  }
</style>
