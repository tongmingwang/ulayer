# Slider 滑块

滑块组件，用于在给定范围内选择数值，支持拖拽交互、步长间隔和垂直方向。

## 基础用法

最简单的滑块用法，通过 `v-model` 双向绑定数值。

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

## 设置颜色

通过 `color` 属性设置滑块颜色。可选颜色：`primary`、`success`、`warning`、`error`。

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

## 范围与步长

通过 `min` 和 `max` 属性设置范围，通过 `step` 属性设置步长间隔。

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

## 垂直模式

设置 `vertical` 属性启用垂直滑块模式。

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

## 禁用状态

通过 `disabled` 属性禁用滑块。

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

## 自定义尺寸

通过 `thumbSize` 和 `trackSize` 属性自定义手柄和滑轨尺寸。

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

| 属性        | 说明           | 类型                                            | 默认值   |
| ----------- | -------------- | ----------------------------------------------- | -------- |
| modelValue  | 当前值         | `number`                                        | `0`      |
| min         | 最小值         | `number`                                        | `0`      |
| max         | 最大值         | `number`                                        | `100`    |
| step        | 步长间隔       | `number`                                        | `1`      |
| disabled    | 是否禁用       | `boolean`                                       | `false`  |
| color       | 滑块颜色       | `'primary' \| 'success' \| 'warning' \| 'error'` | -        |
| vertical    | 是否垂直模式   | `boolean`                                       | `false`  |
| thumbSize   | 手柄尺寸       | `string`                                        | `'20px'` |
| trackSize   | 滑轨尺寸       | `string`                                        | `'6px'`  |

## USlider 事件

| 事件名 | 说明                 | 类型                        |
| ------ | -------------------- | --------------------------- |
| change | 值变化时触发（拖拽结束后触发） | `(value: number) => void` |

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
