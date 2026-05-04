# ButtonGroup 按钮组

按钮组用于将一系列按钮组合在一起，支持水平和垂直布局，并可以统一设置组内所有按钮的尺寸、颜色和变体。

<style scoped>
.button-group-demo {
  margin-bottom: 16px;
}
</style>

## 基础用法

最简单的按钮组，用于组合一系列相关的操作。

<div class="button-group-demo">
  <u-button-group>
    <u-button color="primary">左</u-button>
    <u-button color="primary">中</u-button>
    <u-button color="primary">右</u-button>
  </u-button-group>
</div>

```vue
<template>
  <u-button-group>
    <u-button color="primary">左</u-button>
    <u-button color="primary">中</u-button>
    <u-button color="primary">右</u-button>
  </u-button-group>
</template>
```

## 统一尺寸

通过 `size` 属性统一设置组内所有按钮的尺寸。

<div class="button-group-demo">
  <u-button-group size="small">
    <u-button color="primary">小号</u-button>
    <u-button color="primary">小号</u-button>
    <u-button color="primary">小号</u-button>
  </u-button-group>
</div>
<div class="button-group-demo">
  <u-button-group size="medium">
    <u-button color="primary">中号</u-button>
    <u-button color="primary">中号</u-button>
    <u-button color="primary">中号</u-button>
  </u-button-group>
</div>
<div class="button-group-demo">
  <u-button-group size="large">
    <u-button color="primary">大号</u-button>
    <u-button color="primary">大号</u-button>
    <u-button color="primary">大号</u-button>
  </u-button-group>
</div>

```vue
<template>
  <u-button-group size="small">
    <u-button color="primary">小号</u-button>
    <u-button color="primary">小号</u-button>
    <u-button color="primary">小号</u-button>
  </u-button-group>

  <u-button-group size="medium">
    <u-button color="primary">中号</u-button>
    <u-button color="primary">中号</u-button>
    <u-button color="primary">中号</u-button>
  </u-button-group>

  <u-button-group size="large">
    <u-button color="primary">大号</u-button>
    <u-button color="primary">大号</u-button>
    <u-button color="primary">大号</u-button>
  </u-button-group>
</template>
```

## 统一颜色

通过 `color` 属性统一设置组内所有按钮的颜色。

<div class="button-group-demo">
  <u-button-group color="primary">
    <u-button>主要</u-button>
    <u-button>主要</u-button>
    <u-button>主要</u-button>
  </u-button-group>
</div>
<div class="button-group-demo">
  <u-button-group color="success">
    <u-button>成功</u-button>
    <u-button>成功</u-button>
    <u-button>成功</u-button>
  </u-button-group>
</div>
<div class="button-group-demo">
  <u-button-group color="warning">
    <u-button>警告</u-button>
    <u-button>警告</u-button>
    <u-button>警告</u-button>
  </u-button-group>
</div>
<div class="button-group-demo">
  <u-button-group color="error">
    <u-button>错误</u-button>
    <u-button>错误</u-button>
    <u-button>错误</u-button>
  </u-button-group>
</div>

```vue
<template>
  <u-button-group color="primary">
    <u-button>主要</u-button>
    <u-button>主要</u-button>
    <u-button>主要</u-button>
  </u-button-group>

  <u-button-group color="success">
    <u-button>成功</u-button>
    <u-button>成功</u-button>
    <u-button>成功</u-button>
  </u-button-group>

  <u-button-group color="warning">
    <u-button>警告</u-button>
    <u-button>警告</u-button>
    <u-button>警告</u-button>
  </u-button-group>

  <u-button-group color="error">
    <u-button>错误</u-button>
    <u-button>错误</u-button>
    <u-button>错误</u-button>
  </u-button-group>
</template>
```

## 统一样式

通过 `variant` 属性统一设置组内所有按钮的变体样式。

<div class="button-group-demo">
  <u-button-group variant="outlined" color="primary">
    <u-button>描边</u-button>
    <u-button>描边</u-button>
    <u-button>描边</u-button>
  </u-button-group>
</div>
<div class="button-group-demo">
  <u-button-group variant="text" color="primary">
    <u-button>文本</u-button>
    <u-button>文本</u-button>
    <u-button>文本</u-button>
  </u-button-group>
</div>
<div class="button-group-demo">
  <u-button-group variant="tonal" color="primary">
    <u-button>调性</u-button>
    <u-button>调性</u-button>
    <u-button>调性</u-button>
  </u-button-group>
</div>

```vue
<template>
  <u-button-group variant="outlined" color="primary">
    <u-button>描边</u-button>
    <u-button>描边</u-button>
    <u-button>描边</u-button>
  </u-button-group>

  <u-button-group variant="text" color="primary">
    <u-button>文本</u-button>
    <u-button>文本</u-button>
    <u-button>文本</u-button>
  </u-button-group>

  <u-button-group variant="tonal" color="primary">
    <u-button>调性</u-button>
    <u-button>调性</u-button>
    <u-button>调性</u-button>
  </u-button-group>
</template>
```

## 垂直排列

通过 `vertical` 属性设置按钮组为垂直布局。

<div class="button-group-demo">
  <u-button-group vertical color="primary">
    <u-button>上</u-button>
    <u-button>中</u-button>
    <u-button>下</u-button>
  </u-button-group>
</div>

<div class="button-group-demo">
  <u-button-group vertical variant="outlined" color="primary">
    <u-button>上</u-button>
    <u-button>中</u-button>
    <u-button>下</u-button>
  </u-button-group>
</div>

```vue
<template>
  <u-button-group vertical color="primary">
    <u-button>上</u-button>
    <u-button>中</u-button>
    <u-button>下</u-button>
  </u-button-group>

  <u-button-group vertical variant="outlined" color="primary">
    <u-button>上</u-button>
    <u-button>中</u-button>
    <u-button>下</u-button>
  </u-button-group>
</template>
```

## Props 属性

| 属性     | 说明               | 类型    | 默认值 | 可选值                                     |
| -------- | ------------------ | ------- | ------ | ------------------------------------------ |
| size     | 组内按钮的统一尺寸 | string  | -      | small / medium / large                     |
| color    | 组内按钮的统一颜色 | string  | -      | primary / success / warning / error / info |
| variant  | 组内按钮的统一样式 | string  | -      | contained / outlined / text / tonal        |
| vertical | 是否垂直排列       | boolean | false  | -                                          |

## Slots 插槽

| 插槽名  | 说明                          |
| ------- | ----------------------------- |
| default | 按钮组内容，放置 UButton 组件 |
