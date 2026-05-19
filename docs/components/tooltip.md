# Tooltip

Tooltips are commonly used to display hint information when hovering over an element.

## Basic Usage

In the simplest case, just set the text to display in the `content` attribute.

<div class="demo-section">
  <u-tooltip content="This is a tooltip">
    <u-button>Hover over me</u-button>
  </u-tooltip>
</div>

```vue
<template>
  <u-tooltip content="This is a tooltip">
    <u-button>Hover over me</u-button>
  </u-tooltip>
</template>
```

## Location

Set the tooltip position via the `location` attribute, supporting `top`, `bottom`, `left`, and `right` directions.

<div class="demo-section">
  <div class="tooltip-row">
    <u-tooltip content="Top tooltip" location="top">
      <u-button variant="text">Top</u-button>
    </u-tooltip>
  </div>
  <div class="tooltip-row">
    <u-tooltip content="Bottom tooltip" location="bottom">
      <u-button variant="text">Bottom</u-button>
    </u-tooltip>
  </div>
  <div class="tooltip-row">
    <u-tooltip content="Left tooltip" location="left">
      <u-button variant="text">Left</u-button>
    </u-tooltip>
    <u-tooltip content="Right tooltip" location="right">
      <u-button variant="text">Right</u-button>
    </u-tooltip>
  </div>
</div>

```vue
<template>
  <u-tooltip content="Top tooltip" location="top">
    <u-button variant="text">Top</u-button>
  </u-tooltip>
  <u-tooltip content="Bottom tooltip" location="bottom">
    <u-button variant="text">Bottom</u-button>
  </u-tooltip>
  <u-tooltip content="Left tooltip" location="left">
    <u-button variant="text">Left</u-button>
  </u-tooltip>
  <u-tooltip content="Right tooltip" location="right">
    <u-button variant="text">Right</u-button>
  </u-tooltip>
</template>
```

## Trigger Mode

Set the trigger mode via the `trigger` attribute, supporting `hover` (default) and `click`.

<div class="demo-section">
  <u-tooltip content="Click to show tooltip" trigger="click">
    <u-button color="primary">Click me</u-button>
  </u-tooltip>
</div>

```vue
<template>
  <u-tooltip content="Click to show tooltip" trigger="click">
    <u-button color="primary">Click me</u-button>
  </u-tooltip>
</template>
```

## Custom Content

You can customize the tooltip content through the default slot.

<div class="demo-section">
  <u-tooltip location="top">
    <template #content>
      <div>This is custom content</div>
      <div style="color: var(--u-primary);">Can contain multiple styles</div>
    </template>
    <u-button color="success">Custom Content</u-button>
  </u-tooltip>
</div>

```vue
<template>
  <u-tooltip location="top">
    <template #content>
      <div>This is custom content</div>
      <div style="color: var(--u-primary);">Can contain multiple styles</div>
    </template>
    <u-button color="success">Custom Content</u-button>
  </u-tooltip>
</template>
```

## v-model Control

You can use `v-model` to control the visibility of the tooltip.

<div class="demo-section">
  <u-tooltip v-model="visible" content="Controlled tooltip">
    <u-button color="warning" @click="visible = !visible">
      {{ visible ? 'Hide' : 'Show' }} Tooltip
    </u-button>
  </u-tooltip>
</div>

```vue
<template>
  <u-tooltip v-model="visible" content="Controlled tooltip">
    <u-button color="warning" @click="visible = !visible">
      {{ visible ? 'Hide' : 'Show' }} Tooltip
    </u-button>
  </u-tooltip>
</template>

<script setup>
  import { ref } from 'vue';
  const visible = ref(false);
</script>
```

## UTooltip API

| Attribute   | Description          | Type                                    | Default      |
| ----------- | -------------------- | --------------------------------------- | ------------ |
| modelValue  | Whether to show tooltip | `boolean`                            | `false`     |
| content     | Tooltip text content | `string`                                | -            |
| location    | Tooltip position     | `'top' \| 'bottom' \| 'left' \| 'right'` | `'bottom'` |
| trigger     | Trigger mode         | `'hover' \| 'click'`                     | `'hover'`    |

## UTooltip Slots

| Slot     | Description           |
| -------- | -------------------- |
| default  | Trigger element      |
| content  | Custom tooltip content |

## UTooltip Events

| Event             | Description                | Callback Params     |
| ----------------- | -------------------------- | ------------------ |
| update:modelValue | Emitted when visibility changes | `(value: boolean)` |

<script setup>
  import { ref } from 'vue';
  const visible = ref(false);
</script>

<style scoped>
  .demo-section {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .tooltip-row {
    display: flex;
    gap: 16px;
    justify-content: center;
  }
</style>
