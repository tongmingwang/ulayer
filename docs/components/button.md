# Button

Buttons are used to trigger actions or behaviors, supporting various styles, sizes and states.

## Basic Usage

Simplest form of button that can have different colors, shapes, sizes and other properties.

<div class="button-group">
  <u-button>Default</u-button>
  <u-button color="primary">Primary</u-button>
  <u-button color="success">Success</u-button>
  <u-button color="warning">Warning</u-button>
  <u-button color="error">Error</u-button>
</div>

```vue
<template>
  <u-button>Default</u-button>
  <u-button color="primary">Primary</u-button>
  <u-button color="success">Success</u-button>
  <u-button color="warning">Warning</u-button>
  <u-button color="error">Error</u-button>
</template>
```

## Different Variants

Buttons support different variant styles including contained, outlined, text, and tonal.

<div class="button-group">
  <u-button variant="contained">Contained</u-button>
  <u-button variant="outlined">Outlined</u-button>
  <u-button variant="text">Text</u-button>
  <u-button variant="tonal">Tonal</u-button>
</div>

```vue
<template>
  <u-button variant="contained">Contained</u-button>
  <u-button variant="outlined">Outlined</u-button>
  <u-button variant="text">Text</u-button>
  <u-button variant="tonal">Tonal</u-button>
</template>
```

## Different Sizes

Buttons have three sizes: small, medium, large.

<div class="button-group">
  <u-button size="small">Small</u-button>
  <u-button size="medium">Medium</u-button>
  <u-button size="large">Large</u-button>
</div>

```vue
<template>
  <u-button size="small">Small</u-button>
  <u-button size="medium">Medium</u-button>
  <u-button size="large">Large</u-button>
</template>
```

## Different Shapes

Buttons support round and circle special shapes.

<div class="button-group">
  <u-button shape="round">Round</u-button>
  <u-button shape="circle">C</u-button>
  <u-button shape="circle" icon>
    <i>+</i>
  </u-button>
</div>

```vue
<template>
  <u-button shape="round">Round</u-button>
  <u-button shape="circle">C</u-button>
  <u-button shape="circle" icon>
    <i>+</i>
  </u-button>
</template>
```

## Disabled State

Disable button via the `disabled` attribute.

<div class="button-group">
  <u-button disabled>Disabled</u-button>
  <u-button color="primary" disabled>Disabled</u-button>
</div>

```vue
<template>
  <u-button disabled>Disabled</u-button>
  <u-button color="primary" disabled>Disabled</u-button>
</template>
```

## Loading State

Show loading state via the `loading` attribute.

<div class="button-group">
  <u-button loading>Loading...</u-button>
  <u-button color="primary" loading>Loading...</u-button>
</div>

```vue
<template>
  <u-button loading>Loading...</u-button>
  <u-button color="primary" loading>Loading...</u-button>
</template>
```

## Custom Size

Customize button size via `width` and `height` attributes.

<div class="button-group">
  <u-button width="120px" height="60px">Custom Size</u-button>
</div>

```vue
<template>
  <u-button width="120px" height="60px">Custom Size</u-button>
</template>
```

## API

| Attribute | Description | Type | Default |
|-----------|-------------|------|---------|
| color | Button color | `default \| primary \| success \| warning \| error` | `default` |
| variant | Button variant | `contained \| outlined \| text \| tonal` | `contained` |
| size | Button size | `small \| medium \| large` | `medium` |
| shape | Button shape | `default \| round \| circle` | `default` |
| disabled | Whether disabled | `boolean` | `false` |
| loading | Whether loading | `boolean` | `false` |
| width | Custom width | `string` | - |
| height | Custom height | `string` | - |
| icon | Whether icon mode | `boolean` | `false` |

<style scoped>
  .button-group {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    margin-bottom: 16px;
  }
</style>
