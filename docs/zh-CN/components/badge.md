# Badge 徽标

Badge 用于在元素上显示通知或计数。

## 基础用法

基础徽标显示计数。

<div class="demo-badge">
  <u-badge :count="5">
    <u-button variant="contained">消息</u-button>
  </u-badge>
</div>

```vue
<template>
  <u-badge :count="5">
    <u-button variant="contained">消息</u-button>
  </u-badge>
</template>
```

## 颜色变体

徽标支持四种颜色变体。

<div class="demo-badge">
  <u-badge :count="5" color="primary">
    <u-button variant="contained">主要</u-button>
  </u-badge>
  <u-badge :count="5" color="success">
    <u-button variant="contained">成功</u-button>
  </u-badge>
  <u-badge :count="5" color="warning">
    <u-button variant="contained">警告</u-button>
  </u-badge>
  <u-badge :count="5" color="error">
    <u-button variant="contained">错误</u-button>
  </u-badge>
</div>

```vue
<template>
  <u-badge :count="5" color="primary">
    <u-button variant="contained">主要</u-button>
  </u-badge>
  <u-badge :count="5" color="success">
    <u-button variant="contained">成功</u-button>
  </u-badge>
  <u-badge :count="5" color="warning">
    <u-button variant="contained">警告</u-button>
  </u-badge>
  <u-badge :count="5" color="error">
    <u-button variant="contained">错误</u-button>
  </u-badge>
</template>
```

## 圆点变体

显示圆点而非计数。

<div class="demo-badge">
  <u-badge variant="dot">
    <u-button variant="contained">通知</u-button>
  </u-badge>
</div>

```vue
<template>
  <u-badge variant="dot">
    <u-button variant="contained">通知</u-button>
  </u-badge>
</template>
```

## 最大计数

设置最大计数值。

<div class="demo-badge">
  <u-badge :count="120" :max="99">
    <u-button variant="contained">消息</u-button>
  </u-badge>
</div>

```vue
<template>
  <u-badge :count="120" :max="99">
    <u-button variant="contained">消息</u-button>
  </u-badge>
</template>
```

## 隐藏徽标

控制徽标的可见性。

<div class="demo-badge">
  <u-badge :count="0" :show-badge="false">
    <u-button variant="contained">无徽标</u-button>
  </u-badge>
  <u-badge :count="5" :show-badge="true">
    <u-button variant="contained">有徽标</u-button>
  </u-badge>
</div>

```vue
<template>
  <u-badge :count="0" :show-badge="false">
    <u-button variant="contained">无徽标</u-button>
  </u-badge>
  <u-badge :count="5" :show-badge="true">
    <u-button variant="contained">有徽标</u-button>
  </u-badge>
</template>
```

## API

| 属性      | 说明         | 类型                                     | 默认值  |
| --------- | ------------ | ---------------------------------------- | ------- |
| color     | 徽标颜色     | `primary \| success \| warning \| error` | `error` |
| variant   | 徽标变体     | `dot \| text`                            | `text`  |
| showBadge | 是否显示徽标 | `boolean`                                | `true`  |
| count     | 徽标计数     | `number`                                 | `0`     |
| max       | 最大计数值   | `number`                                 | `99`    |

## 插槽

| 名称    | 说明     |
| ------- | -------- |
| default | 徽标内容 |

<style scoped>
  .demo-badge {
    margin-bottom: 16px;
    display: flex;
    gap: 16px;
    align-items: center;
  }
</style>
