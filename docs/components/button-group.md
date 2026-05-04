# ButtonGroup

ButtonGroup is used to group a series of buttons together, supporting horizontal and vertical layouts, and can uniformly set the size, color and variant of all buttons in the group.

<style scoped>
.button-group-demo {
  margin-bottom: 16px;
}
</style>

## Basic Usage

The simplest button group, used to combine a series of related operations.

<div class="button-group-demo">
  <u-button-group>
    <u-button color="primary">Left</u-button>
    <u-button color="primary">Middle</u-button>
    <u-button color="primary">Right</u-button>
  </u-button-group>
</div>

```vue
<template>
  <u-button-group>
    <u-button color="primary">Left</u-button>
    <u-button color="primary">Middle</u-button>
    <u-button color="primary">Right</u-button>
  </u-button-group>
</template>
```

## Uniform Size

Uniformly set the size of all buttons in the group through the `size` property.

<div class="button-group-demo">
  <u-button-group size="small">
    <u-button color="primary">Small</u-button>
    <u-button color="primary">Small</u-button>
    <u-button color="primary">Small</u-button>
  </u-button-group>
</div>
<div class="button-group-demo">
  <u-button-group size="medium">
    <u-button color="primary">Medium</u-button>
    <u-button color="primary">Medium</u-button>
    <u-button color="primary">Medium</u-button>
  </u-button-group>
</div>
<div class="button-group-demo">
  <u-button-group size="large">
    <u-button color="primary">Large</u-button>
    <u-button color="primary">Large</u-button>
    <u-button color="primary">Large</u-button>
  </u-button-group>
</div>

```vue
<template>
  <u-button-group size="small">
    <u-button color="primary">Small</u-button>
    <u-button color="primary">Small</u-button>
    <u-button color="primary">Small</u-button>
  </u-button-group>

  <u-button-group size="medium">
    <u-button color="primary">Medium</u-button>
    <u-button color="primary">Medium</u-button>
    <u-button color="primary">Medium</u-button>
  </u-button-group>

  <u-button-group size="large">
    <u-button color="primary">Large</u-button>
    <u-button color="primary">Large</u-button>
    <u-button color="primary">Large</u-button>
  </u-button-group>
</template>
```

## Uniform Color

Uniformly set the color of all buttons in the group through the `color` property.

<div class="button-group-demo">
  <u-button-group color="primary">
    <u-button>Primary</u-button>
    <u-button>Primary</u-button>
    <u-button>Primary</u-button>
  </u-button-group>
</div>
<div class="button-group-demo">
  <u-button-group color="success">
    <u-button>Success</u-button>
    <u-button>Success</u-button>
    <u-button>Success</u-button>
  </u-button-group>
</div>
<div class="button-group-demo">
  <u-button-group color="warning">
    <u-button>Warning</u-button>
    <u-button>Warning</u-button>
    <u-button>Warning</u-button>
  </u-button-group>
</div>
<div class="button-group-demo">
  <u-button-group color="error">
    <u-button>Error</u-button>
    <u-button>Error</u-button>
    <u-button>Error</u-button>
  </u-button-group>
</div>

```vue
<template>
  <u-button-group color="primary">
    <u-button>Primary</u-button>
    <u-button>Primary</u-button>
    <u-button>Primary</u-button>
  </u-button-group>

  <u-button-group color="success">
    <u-button>Success</u-button>
    <u-button>Success</u-button>
    <u-button>Success</u-button>
  </u-button-group>

  <u-button-group color="warning">
    <u-button>Warning</u-button>
    <u-button>Warning</u-button>
    <u-button>Warning</u-button>
  </u-button-group>

  <u-button-group color="error">
    <u-button>Error</u-button>
    <u-button>Error</u-button>
    <u-button>Error</u-button>
  </u-button-group>
</template>
```

## Uniform Variant

Uniformly set the variant style of all buttons in the group through the `variant` property.

<div class="button-group-demo">
  <u-button-group variant="outlined" color="primary">
    <u-button>Outlined</u-button>
    <u-button>Outlined</u-button>
    <u-button>Outlined</u-button>
  </u-button-group>
</div>
<div class="button-group-demo">
  <u-button-group variant="text" color="primary">
    <u-button>Text</u-button>
    <u-button>Text</u-button>
    <u-button>Text</u-button>
  </u-button-group>
</div>
<div class="button-group-demo">
  <u-button-group variant="tonal" color="primary">
    <u-button>Tonal</u-button>
    <u-button>Tonal</u-button>
    <u-button>Tonal</u-button>
  </u-button-group>
</div>

```vue
<template>
  <u-button-group variant="outlined" color="primary">
    <u-button>Outlined</u-button>
    <u-button>Outlined</u-button>
    <u-button>Outlined</u-button>
  </u-button-group>

  <u-button-group variant="text" color="primary">
    <u-button>Text</u-button>
    <u-button>Text</u-button>
    <u-button>Text</u-button>
  </u-button-group>

  <u-button-group variant="tonal" color="primary">
    <u-button>Tonal</u-button>
    <u-button>Tonal</u-button>
    <u-button>Tonal</u-button>
  </u-button-group>
</template>
```

## Vertical Layout

Set the button group to vertical layout through the `vertical` property.

<div class="button-group-demo">
  <u-button-group vertical color="primary">
    <u-button>Top</u-button>
    <u-button>Middle</u-button>
    <u-button>Bottom</u-button>
  </u-button-group>
</div>

<div class="button-group-demo">
  <u-button-group vertical variant="outlined" color="primary">
    <u-button>Top</u-button>
    <u-button>Middle</u-button>
    <u-button>Bottom</u-button>
  </u-button-group>
</div>

```vue
<template>
  <u-button-group vertical color="primary">
    <u-button>Top</u-button>
    <u-button>Middle</u-button>
    <u-button>Bottom</u-button>
  </u-button-group>

  <u-button-group vertical variant="outlined" color="primary">
    <u-button>Top</u-button>
    <u-button>Middle</u-button>
    <u-button>Bottom</u-button>
  </u-button-group>
</template>
```

## Props

| Prop     | Description                                | Type    | Default | Accepted Values                            |
| -------- | ------------------------------------------ | ------- | ------- | ------------------------------------------ |
| size     | Uniform size setting for buttons in group  | string  | -       | small / medium / large                     |
| color    | Uniform color setting for buttons in group | string  | -       | primary / success / warning / error / info |
| variant  | Uniform variant for buttons in group       | string  | -       | contained / outlined / text / tonal        |
| vertical | Whether to arrange vertically              | boolean | false   | -                                          |

## Slots

| Slot    | Description                                    |
| ------- | ---------------------------------------------- |
| default | Button group content, place UButton components |
