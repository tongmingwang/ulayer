# Button 按钮

按钮用于触发一个操作或行为，支持多种样式、尺寸和状态。

## 基础用法

最简单的按钮形式，可以设置不同颜色、形状、尺寸等属性。

<div class="button-group">
  <u-button>默认按钮</u-button>
  <u-button color="primary">主要按钮</u-button>
  <u-button color="success">成功按钮</u-button>
  <u-button color="warning">警告按钮</u-button>
  <u-button color="error">错误按钮</u-button>
</div>

```vue
<template>
  <div class="button-group">
    <u-button>默认按钮</u-button>
    <u-button color="primary">主要按钮</u-button>
    <u-button color="success">成功按钮</u-button>
    <u-button color="warning">警告按钮</u-button>
    <u-button color="error">错误按钮</u-button>
  </div>
</template>
```

<style scoped>
.button-group {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
</style>

## 不同样式

按钮支持不同的变体样式，包括填充、描边、文本、调性等。

<div class="button-group">
  <u-button variant="contained">填充按钮</u-button>
  <u-button variant="outlined">描边按钮</u-button>
  <u-button variant="text">文本按钮</u-button>
  <u-button variant="tonal">调性按钮</u-button>
</div>

```vue
<template>
  <div class="button-group">
    <u-button variant="contained">填充按钮</u-button>
    <u-button variant="outlined">描边按钮</u-button>
    <u-button variant="text">文本按钮</u-button>
    <u-button variant="tonal">调性按钮</u-button>
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

## 不同尺寸

按钮有三种尺寸：小号([small](file:///d:\github\ulayer\packages\ulayer\input\src\types.ts#L8-L8))、中号([medium](file:///d:\github\ulayer\packages\ulayer\input\src\types.ts#L9-L9))、大号([large](file:///d:\github\ulayer\packages\ulayer\input\src\types.ts#L10-L10))。

<div class="button-group">
  <u-button size="small">小号按钮</u-button>
  <u-button size="medium">中号按钮</u-button>
  <u-button size="large">大号按钮</u-button>
</div>

```vue
<template>
  <div class="button-group">
    <u-button size="small">小号按钮</u-button>
    <u-button size="medium">中号按钮</u-button>
    <u-button size="large">大号按钮</u-button>
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

## 不同形状

按钮支持圆形和圆角两种特殊形状。

<div class="button-group">
  <u-button shape="round">圆角按钮</u-button>
  <u-button shape="circle">圆</u-button>
  <u-button shape="circle" icon>
    <i>+</i>
  </u-button>
</div>

```vue
<template>
  <div class="button-group">
    <u-button shape="round">圆角按钮</u-button>
    <u-button shape="circle">圆</u-button>
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

## 禁用状态

通过 [disabled](file:///d:\github\ulayer\packages\ulayer\button/src/types.ts#L4-L4) 属性禁用按钮。

<div class="button-group">
  <u-button disabled>禁用按钮</u-button>
  <u-button color="primary" disabled>禁用按钮</u-button>
</div>

```vue
<template>
  <div class="button-group">
    <u-button disabled>禁用按钮</u-button>
    <u-button color="primary" disabled>禁用按钮</u-button>
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

## 加载状态

通过 [loading](file:///d:\github\ulayer\packages\ulayer\button/src/types.ts#L5-L5) 属性显示加载状态。

<div class="button-group">
  <u-button loading>加载中...</u-button>
  <u-button color="primary" loading>加载中...</u-button>
</div>

```vue
<template>
  <div class="button-group">
    <u-button loading>加载中...</u-button>
    <u-button color="primary" loading>加载中...</u-button>
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

## 自定义尺寸

可以通过 [width](file:///d:\github\ulayer\packages\ulayer\button/src/types.ts#L8-L8) 和 [height](file:///d:\github\ulayer\packages\ulayer\button/src/types.ts#L7-L7) 属性自定义按钮尺寸。

<div class="button-group">
  <u-button width="120px" height="60px">自定义尺寸</u-button>
</div>

```vue
<template>
  <div class="button-group">
    <u-button width="120px" height="60px">自定义尺寸</u-button>
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

## 事件

| 事件名 | 说明           | 回调参数            |
| ------ | -------------- | ------------------- |
| click  | 点击按钮时触发 | (event: MouseEvent) |

## 属性

| 属性     | 说明             | 类型    | 默认值 | 可选值                                     |
| -------- | ---------------- | ------- | ------ | ------------------------------------------ |
| color    | 按钮颜色         | string  | ''     | primary / success / warning / error / info |
| size     | 按钮尺寸         | string  | medium | small / medium / large                     |
| variant  | 按钮变体         | string  | ''     | contained / outlined / text / tonal        |
| shape    | 按钮形状         | string  | ''     | round / circle                             |
| disabled | 是否禁用         | boolean | false  | -                                          |
| loading  | 是否显示加载状态 | boolean | false  | -                                          |
| width    | 按钮宽度         | string  | -      | -                                          |
| height   | 按钮高度         | string  | -      | -                                          |

## 方法

| 方法名 | 说明           | 参数 |
| ------ | -------------- | ---- |
| focus  | 让按钮获得焦点 | -    |
| blur   | 让按钮失去焦点 | -    |

## 插槽

| 插槽名  | 说明     |
| ------- | -------- |
| default | 内容插槽 |
