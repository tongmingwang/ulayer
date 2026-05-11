# Badge

Badge is used to display notifications or counts on elements.

## Basic Usage

Basic badge with count.

<div class="demo-badge">
  <u-badge :count="5">
    <u-button variant="contained">Messages</u-button>
  </u-badge>
</div>

```vue
<template>
  <u-badge :count="5">
    <u-button variant="contained">Messages</u-button>
  </u-badge>
</template>
```

## Color Variants

Badge supports four color variants.

<div class="demo-badge">
  <u-badge :count="5" color="primary">
    <u-button variant="contained">Primary</u-button>
  </u-badge>
  <u-badge :count="5" color="success">
    <u-button variant="contained">Success</u-button>
  </u-badge>
  <u-badge :count="5" color="warning">
    <u-button variant="contained">Warning</u-button>
  </u-badge>
  <u-badge :count="5" color="error">
    <u-button variant="contained">Error</u-button>
  </u-badge>
</div>

```vue
<template>
  <u-badge :count="5" color="primary">
    <u-button variant="contained">Primary</u-button>
  </u-badge>
  <u-badge :count="5" color="success">
    <u-button variant="contained">Success</u-button>
  </u-badge>
  <u-badge :count="5" color="warning">
    <u-button variant="contained">Warning</u-button>
  </u-badge>
  <u-badge :count="5" color="error">
    <u-button variant="contained">Error</u-button>
  </u-badge>
</template>
```

## Dot Variant

Display a dot instead of a count.

<div class="demo-badge">
  <u-badge variant="dot">
    <u-button variant="contained">Notifications</u-button>
  </u-badge>
</div>

```vue
<template>
  <u-badge variant="dot">
    <u-button variant="contained">Notifications</u-button>
  </u-badge>
</template>
```

## Max Count

Set a maximum count value.

<div class="demo-badge">
  <u-badge :count="120" :max="99">
    <u-button variant="contained">Messages</u-button>
  </u-badge>
</div>

```vue
<template>
  <u-badge :count="120" :max="99">
    <u-button variant="contained">Messages</u-button>
  </u-badge>
</template>
```

## Hide Badge

Control badge visibility.

<div class="demo-badge">
  <u-badge :count="0" :show-badge="false">
    <u-button variant="contained">No Badge</u-button>
  </u-badge>
  <u-badge :count="5" :show-badge="true">
    <u-button variant="contained">With Badge</u-button>
  </u-badge>
</div>

```vue
<template>
  <u-badge :count="0" :show-badge="false">
    <u-button variant="contained">No Badge</u-button>
  </u-badge>
  <u-badge :count="5" :show-badge="true">
    <u-button variant="contained">With Badge</u-button>
  </u-badge>
</template>
```

## API

| Attribute | Description           | Type                                     | Default |
| --------- | --------------------- | ---------------------------------------- | ------- |
| color     | Badge color           | `primary \| success \| warning \| error` | `error` |
| variant   | Badge variant         | `dot \| text`                            | `text`  |
| showBadge | Whether to show badge | `boolean`                                | `true`  |
| count     | Badge count           | `number`                                 | `0`     |
| max       | Maximum count display | `number`                                 | `99`    |

## Slots

| Name    | Description      |
| ------- | ---------------- |
| default | Content to badge |

<style scoped>
  .demo-badge {
    margin-bottom: 16px;
    display: flex;
    gap: 16px;
    align-items: center;
  }
</style>
