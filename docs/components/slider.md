# Slider

Slider component for selecting a value within a given range, supporting drag interaction, step intervals, and vertical orientation.

## Basic Usage

The simplest slider with two-way data binding via `v-model`.

<div class="demo-section">
  <u-slider v-model="value1" />
</div>

```vue
<template>
  <u-slider v-model="value" />
</template>

<script setup>
  import { ref } from 'vue';
  const value = ref(0);
</script>
```

## Set Color

Set the slider color via `color` prop. Available colors: `primary`, `success`, `warning`, `error`.

<div class="demo-section">
  <div class="slider-row">
    <u-slider v-model="value2" color="primary" />
    <u-slider v-model="value2" color="success" />
    <u-slider v-model="value2" color="error" />
    <u-slider v-model="value2" color="warning" />
  </div>
</div>

```vue
<template>
  <u-slider v-model="value" color="success" />
</template>

<script setup>
  import { ref } from 'vue';
  const value = ref(30);
</script>
```

## Range & Step

Set the range via `min` and `max` props, and the step interval via `step` prop.

<div class="demo-section">
  <u-slider v-model="value3" :min="0" :max="200" />
  <u-slider v-model="value4" :step="10" />
  <u-slider v-model="value5" :step="0.1" />
</div>

```vue
<template>
  <u-slider v-model="value1" :max="200" />
  <u-slider v-model="value2" :step="10" />
  <u-slider v-model="value3" :step="0.1" />
</template>

<script setup>
  import { ref } from 'vue';
  const value1 = ref(50);
  const value2 = ref(30);
  const value3 = ref(0);
</script>
```

## Vertical Mode

Set `vertical` prop to enable vertical slider mode.

<div class="demo-section">
  <div class="slider-vertical-row">
    <u-slider v-model="value6" vertical />
    <u-slider v-model="value6" vertical color="success" />
  </div>
</div>

```vue
<template>
  <u-slider v-model="value" vertical />
</template>

<script setup>
  import { ref } from 'vue';
  const value = ref(30);
</script>
```

## Disabled State

Disable the slider via `disabled` prop.

<div class="demo-section">
  <u-slider v-model="value7" disabled />
</div>

```vue
<template>
  <u-slider v-model="value" disabled />
</template>

<script setup>
  import { ref } from 'vue';
  const value = ref(30);
</script>
```

## Custom Size

Customize the thumb and track size via `thumbSize` and `trackSize` props.

<div class="demo-section">
  <u-slider v-model="value8" thumbSize="28px" trackSize="10px" />
  <u-slider v-model="value9" thumbSize="14px" trackSize="4px" />
</div>

```vue
<template>
  <u-slider v-model="value1" thumbSize="28px" trackSize="10px" />
  <u-slider v-model="value2" thumbSize="14px" trackSize="4px" />
</template>

<script setup>
  import { ref } from 'vue';
  const value1 = ref(30);
  const value2 = ref(60);
</script>
```

## USlider API

| Property    | Description              | Type                                       | Default |
| ----------- | ------------------------ | ------------------------------------------ | ------- |
| modelValue  | Current value            | `number`                                   | `0`     |
| min         | Minimum value            | `number`                                   | `0`     |
| max         | Maximum value            | `number`                                   | `100`   |
| step        | Step interval            | `number`                                   | `1`     |
| disabled    | Whether to disable       | `boolean`                                  | `false` |
| color       | Slider color             | `'primary' \| 'success' \| 'warning' \| 'error'` | -       |
| vertical    | Whether vertical mode    | `boolean`                                  | `false` |
| thumbSize   | Size of the thumb handle | `string`                                   | `'20px'`|
| trackSize   | Size of the track bar    | `string`                                   | `'6px'` |

## USlider Events

| Event  | Description                        | Type                        |
| ------ | ---------------------------------- | --------------------------- |
| change | Triggered when value changes (after drag ends) | `(value: number) => void` |

<script setup>
  import { ref } from 'vue';
  const value1 = ref(0);
  const value2 = ref(30);
  const value3 = ref(50);
  const value4 = ref(30);
  const value5 = ref(0);
  const value6 = ref(30);
  const value7 = ref(30);
  const value8 = ref(30);
  const value9 = ref(60);
</script>

<style scoped>
  .demo-section {
    margin-bottom: 24px;
  }

  .slider-row {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .slider-vertical-row {
    display: flex;
    gap: 32px;
    height: 200px;
  }
</style>
