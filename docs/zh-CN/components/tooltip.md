# Tooltip 文字提示

常用于展示鼠标 hover 时的提示信息。

## 基础用法

在最简单的情况下，只需要在 `content` 属性中设置需要展示的提示文字。

<div class="demo-section">
  <u-tooltip content="这是提示文字">
    <u-button>鼠标悬停此处</u-button>
  </u-tooltip>
</div>

```vue
<template>
  <u-tooltip content="这是提示文字">
    <u-button>鼠标悬停此处</u-button>
  </u-tooltip>
</template>
```

## 位置

通过 `location` 属性设置提示框的位置，支持 `top`、`bottom`、`left`、`right` 四个方向。

<div class="demo-section">
  <div class="tooltip-row">
    <u-tooltip content="顶部提示" location="top">
      <u-button variant="text">Top</u-button>
    </u-tooltip>
  </div>
  <div class="tooltip-row">
    <u-tooltip content="底部提示" location="bottom">
      <u-button variant="text">Bottom</u-button>
    </u-tooltip>
  </div>
  <div class="tooltip-row">
    <u-tooltip content="左侧提示" location="left">
      <u-button variant="text">Left</u-button>
    </u-tooltip>
    <u-tooltip content="右侧提示" location="right">
      <u-button variant="text">Right</u-button>
    </u-tooltip>
  </div>
</div>

```vue
<template>
  <u-tooltip content="顶部提示" location="top">
    <u-button variant="text">Top</u-button>
  </u-tooltip>
  <u-tooltip content="底部提示" location="bottom">
    <u-button variant="text">Bottom</u-button>
  </u-tooltip>
  <u-tooltip content="左侧提示" location="left">
    <u-button variant="text">Left</u-button>
  </u-tooltip>
  <u-tooltip content="右侧提示" location="right">
    <u-button variant="text">Right</u-button>
  </u-tooltip>
</template>
```

## 触发方式

通过 `trigger` 属性设置触发方式，支持 `hover`（默认）和 `click` 两种模式。

<div class="demo-section">
  <u-tooltip content="点击触发提示" trigger="click">
    <u-button color="primary">点击我</u-button>
  </u-tooltip>
</div>

```vue
<template>
  <u-tooltip content="点击触发提示" trigger="click">
    <u-button color="primary">点击我</u-button>
  </u-tooltip>
</template>
```

## 自定义内容

通过默认插槽可以自定义提示框的内容。

<div class="demo-section">
  <u-tooltip location="top">
    <template #content>
      <div>这是自定义内容</div>
      <div style="color: var(--u-primary);">可以包含多种样式</div>
    </template>
    <u-button color="success">自定义内容</u-button>
  </u-tooltip>
</div>

```vue
<template>
  <u-tooltip location="top">
    <template #content>
      <div>这是自定义内容</div>
      <div style="color: var(--u-primary);">可以包含多种样式</div>
    </template>
    <u-button color="success">自定义内容</u-button>
  </u-tooltip>
</template>
```

## v-model 控制

可以通过 `v-model` 双向绑定控制提示框的显示状态。

<div class="demo-section">
  <u-tooltip v-model="visible" content="受控的提示框">
    <u-button color="warning" @click="visible = !visible">
      {{ visible ? '隐藏' : '显示' }}提示
    </u-button>
  </u-tooltip>
</div>

```vue
<template>
  <u-tooltip v-model="visible" content="受控的提示框">
    <u-button color="warning" @click="visible = !visible">
      {{ visible ? '隐藏' : '显示' }}提示
    </u-button>
  </u-tooltip>
</template>

<script setup>
  import { ref } from 'vue';
  const visible = ref(false);
</script>
```

## UTooltip API

| 属性      | 说明           | 类型                        | 默认值    |
| --------- | -------------- | --------------------------- | --------- |
| modelValue | 是否显示提示框 | `boolean`                   | `false`   |
| content   | 提示文字内容   | `string`                    | -         |
| location  | 提示框位置     | `'top' \| 'bottom' \| 'left' \| 'right'` | `'bottom'` |
| trigger   | 触发方式       | `'hover' \| 'click'`        | `'hover'` |

## UTooltip 插槽

| 插槽    | 说明           |
| ------- | -------------- |
| default | 触发器元素     |
| content | 提示框自定义内容 |

## UTooltip 事件

| 事件              | 说明               | 回调参数      |
| ----------------- | ------------------ | ------------- |
| update:modelValue | 显示状态改变时触发 | `(value: boolean)` |

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
