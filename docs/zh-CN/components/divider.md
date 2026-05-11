# Divider 分隔线

Divider 是用于分隔内容区域的细线条。

## 基础用法

基础水平分隔线。

<div class="demo-divider">
  <p>上方内容</p>
  <u-divider></u-divider>
  <p>下方内容</p>
</div>

```vue
<template>
  <p>上方内容</p>
  <u-divider></u-divider>
  <p>下方内容</p>
</template>
```

## 颜色

自定义分隔线颜色。

<div class="demo-divider">
  <u-divider color="#ff5252"></u-divider>
</div>

```vue
<template>
  <u-divider color="#ff5252"></u-divider>
</template>
```

## 垂直分隔线

使用垂直分隔线分隔行内元素。

<div class="demo-divider-vertical">
  <span>左侧</span>
  <u-divider vertical></u-divider>
  <span>右侧</span>
</div>

```vue
<template>
  <div style="display: flex; align-items: center; gap: 16px;">
    <span>左侧</span>
    <u-divider vertical></u-divider>
    <span>右侧</span>
  </div>
</template>
```

## API

| 属性     | 说明           | 类型      | 默认值                    |
| -------- | -------------- | --------- | ------------------------- |
| vertical | 是否垂直分隔线 | `boolean` | `false`                   |
| color    | 分隔线颜色     | `string`  | `rgba(var(--u-rgb), 0.2)` |

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
