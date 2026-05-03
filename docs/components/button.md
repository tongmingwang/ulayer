# Button

Buttons are used to trigger actions or behaviors, supporting various styles, sizes and states.

<style scoped>
.button-group {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
</style>

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
  <div class="button-group">
    <u-button>Default</u-button>
    <u-button color="primary">Primary</u-button>
    <u-button color="success">Success</u-button>
    <u-button color="warning">Warning</u-button>
    <u-button color="error">Error</u-button>
  </div>
</template>

<style scoped>
  .button-group {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
  }
</style>
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
  <div class="button-group">
    <u-button variant="contained">Contained</u-button>
    <u-button variant="outlined">Outlined</u-button>
    <u-button variant="text">Text</u-button>
    <u-button variant="tonal">Tonal</u-button>
  </div>
</template>

<style scoped>
  .button-group {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
  }
</style>
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
  <div class="button-group">
    <u-button size="small">Small</u-button>
    <u-button size="medium">Medium</u-button>
    <u-button size="large">Large</u-button>
  </div>
</template>

<style scoped>
  .button-group {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
  }
</style>
```

## Different Shapes

Buttons support two special shapes: round and circle.

<div class="button-group">
  <u-button shape="round">Round</u-button>
  <u-button shape="circle">C</u-button>
  <u-button shape="circle" icon>
    <i>+</i>
  </u-button>
</div>

```vue
<template>
  <div class="button-group">
    <u-button shape="round">Round</u-button>
    <u-button shape="circle">C</u-button>
    <u-button shape="circle" icon>
      <i>+</i>
    </u-button>
  </div>
</template>

<style scoped>
  .button-group {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
  }
</style>
```

## Disabled State

Disable the button using the [disabled](file:///d:\github\ulayer\packages\ulayer\button/src/types.ts#L4-L4) property.

<div class="button-group">
  <u-button disabled>Disabled</u-button>
  <u-button color="primary" disabled>Disabled Primary</u-button>
</div>

```vue
<template>
  <div class="button-group">
    <u-button disabled>Disabled</u-button>
    <u-button color="primary" disabled>Disabled Primary</u-button>
  </div>
</template>

<style scoped>
  .button-group {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
  }
</style>
```

## Loading State

Show loading state using the [loading](file:///d:\github\ulayer\packages\ulayer\button/src/types.ts#L5-L5) property.

<div class="button-group">
  <u-button loading>Loading...</u-button>
  <u-button color="primary" loading>Loading...</u-button>
</div>

```vue
<template>
  <div class="button-group">
    <u-button loading>Loading...</u-button>
    <u-button color="primary" loading>Loading...</u-button>
  </div>
</template>

<style scoped>
  .button-group {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
  }
</style>
```

## Custom Size

Customize button dimensions using the [width](file:///d:\github\ulayer\packages\ulayer\button/src/types.ts#L8-L8) and [height](file:///d:\github\ulayer\packages\ulayer\button/src/types.ts#L7-L7) properties.

<div class="button-group">
  <u-button width="120px" height="60px">Custom Size</u-button>
</div>

```vue
<template>
  <div class="button-group">
    <u-button width="120px" height="60px">Custom Size</u-button>
  </div>
</template>

<style scoped>
  .button-group {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
  }
</style>
```

## Events

| Event | Description                      | Callback Parameters |
| ----- | -------------------------------- | ------------------- |
| click | Triggered when button is clicked | (event: MouseEvent) |

## Props

| Prop     | Description                   | Type    | Default | Accepted Values                            |
| -------- | ----------------------------- | ------- | ------- | ------------------------------------------ |
| color    | Button color                  | string  | ''      | primary / success / warning / error / info |
| size     | Button size                   | string  | medium  | small / medium / large                     |
| variant  | Button variant                | string  | ''      | contained / outlined / text / tonal        |
| shape    | Button shape                  | string  | ''      | round / circle                             |
| disabled | Whether disabled              | boolean | false   | -                                          |
| loading  | Whether showing loading state | boolean | false   | -                                          |
| width    | Button width                  | string  | -       | -                                          |
| height   | Button height                 | string  | -       | -                                          |

## Methods

| Method | Description      | Parameters |
| ------ | ---------------- | ---------- |
| focus  | Focus the button | -          |
| blur   | Blur the button  | -          |

## Slots

| Slot    | Description  |
| ------- | ------------ |
| default | Content slot |
