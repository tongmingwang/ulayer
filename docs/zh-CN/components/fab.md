# Fab 悬浮按钮

悬浮操作按钮（Floating Action Button）是一个特殊的圆形按钮，用于表示应用程序中最重要的操作。它通常固定在屏幕的某个位置，带有阴影和悬浮动画效果，类似于 Material Design 中的 FAB 组件。

## 基础用法

最基本的悬浮按钮形式，支持不同的颜色主题。

<div class="fab-group">
  <u-fab>+</u-fab>
  <u-fab color="success">+</u-fab>
  <u-fab color="warning">+</u-fab>
  <u-fab color="error">+</u-fab>
  <u-fab color="info">+</u-fab>
</div>

```vue
<template>
  <u-fab>+</u-fab>
  <u-fab color="success">+</u-fab>
  <u-fab color="warning">+</u-fab>
  <u-fab color="error">+</u-fab>
  <u-fab color="info">+</u-fab>
</template>
```

## 不同尺寸

悬浮按钮支持四种不同的尺寸：small、medium、large，以及 extended 扩展样式。

<div class="fab-group">
  <u-fab size="small">+</u-fab>
  <u-fab size="medium">+</u-fab>
  <u-fab size="large">+</u-fab>
</div>

```vue
<template>
  <u-fab size="small">+</u-fab>
  <u-fab size="medium">+</u-fab>
  <u-fab size="large">+</u-fab>
</template>
```

## 扩展按钮

Extended FAB 支持显示文字，可以选择是否同时显示图标。

<div class="fab-group">
  <u-fab size="extended" color="primary">
    <template #icon>+</template>
    新建
  </u-fab>
  <u-fab size="extended" color="success" label="创建"></u-fab>
  <u-fab size="extended" color="error">
    <template #icon>🗑</template>
    删除
  </u-fab>
</div>

```vue
<template>
  <u-fab size="extended" color="primary">
    <template #icon>+</template>
    新建
  </u-fab>
  
  <u-fab size="extended" color="success" label="创建"></u-fab>
  
  <u-fab size="extended" color="error">
    <template #icon>🗑</template>
    删除
  </u-fab>
</template>
```

## 按钮状态

悬浮按钮支持禁用、加载和无阴影状态。

<div class="fab-group">
  <u-fab disabled color="primary">×</u-fab>
  <u-fab loading color="primary"></u-fab>
  <u-fab :shadow="false" color="primary">+</u-fab>
</div>

```vue
<template>
  <u-fab disabled color="primary">×</u-fab>
  <u-fab loading color="primary"></u-fab>
  <u-fab :shadow="false" color="primary">+</u-fab>
</template>
```

## 固定定位

通过 `fixed` 属性开启固定定位，并通过 `top`/`right`/`bottom`/`left` 调整位置。

```vue
<template>
  <u-fab 
    fixed 
    bottom="24px" 
    right="24px" 
    color="primary"
  >
    +
  </u-fab>
</template>
```

## API

| 属性 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| color | 按钮颜色 | `primary \| success \| warning \| error \| info` | `primary` |
| size | 按钮尺寸 | `small \| medium \| large \| extended` | `medium` |
| disabled | 是否禁用 | `boolean` | `false` |
| loading | 是否加载中 | `boolean` | `false` |
| fixed | 是否固定定位 | `boolean` | `false` |
| top | 固定时的上边距 | `string` | - |
| right | 固定时的右边距 | `string` | - |
| bottom | 固定时的下边距 | `string` | - |
| left | 固定时的左边距 | `string` | - |
| shadow | 是否显示阴影 | `boolean` | `true` |
| ripple | 是否开启水波纹 | `boolean` | `true` |
| width | 自定义宽度 | `string` | - |
| height | 自定义高度 | `string` | - |
| label | 按钮标签文本 | `string` | - |

## 插槽

| 插槽名 | 说明 |
|--------|------|
| default | 按钮内容 |
| icon | 图标内容 |

<style scoped>
  .fab-group {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    align-items: center;
    margin-bottom: 24px;
  }
</style>
