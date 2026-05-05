# Input 输入框

输入框组件用于收集用户输入或允许用户录入数据。

> 数字输入框请查看 [InputNumber](./input-number.md) 组件
> 多行文本请查看 [Textarea](./textarea.md) 组件

## 基础用法

最简单的输入框形式，可以通过 `v-model` 双向绑定数据。

<div class="demo-section">
  <u-input v-model="value1" placeholder="请输入内容"></u-input>
  <div class="demo-value">当前值: {{ value1 || '(空)' }}</div>
</div>

```vue
<template>
  <u-input v-model="value1" placeholder="请输入内容"></u-input>
  <div>当前值: {{ value1 || '(空)' }}</div>
</template>

<script setup>
  import { ref } from 'vue';
  const value1 = ref('');
</script>
```

## 最大长度

通过 `maxlength` 属性限制输入的最大字符数。

<div class="demo-section">
  <u-input :maxlength="6" placeholder="最多输入6个字符"></u-input>
</div>

```vue
<template>
  <u-input :maxlength="6" placeholder="最多输入6个字符"></u-input>
</template>
```

## 前后缀

通过 `prefix` 和 `suffix` 属性添加前后缀内容，也支持通过插槽自定义。

<div class="demo-row">
  <u-input placeholder="请输入内容" suffix=".com">
    <template #prefix>
      <u-icon name="search"></u-icon>
    </template>
  </u-input>
</div>

```vue
<template>
  <u-input placeholder="请输入内容" suffix=".com">
    <template #prefix>
      <u-icon name="search"></u-icon>
    </template>
  </u-input>
</template>

<script setup>
  import { UIcon } from 'ume-ui';
</script>
```

## 密码输入框

设置 `type="password"` 开启密码输入模式，支持切换显示密码。

<div class="demo-row">
  <u-input placeholder="请输入密码" type="password"></u-input>
  <u-input placeholder="带前缀" type="password" prefix="password"></u-input>
  <u-input placeholder="带后缀" type="password" suffix="hi"></u-input>
</div>

```vue
<template>
  <u-input placeholder="请输入密码" type="password"></u-input>
  <u-input placeholder="带前缀" type="password" prefix="password"></u-input>
  <u-input placeholder="带后缀" type="password" suffix="hi"></u-input>
</template>
```

## 不同尺寸

输入框有三种尺寸：小号([small](file:///d:\github\ume-ui\packages\ume-ui\input\src\types.ts#L8-L8))、中号([medium](file:///d:\github\ume-ui\packages\ume-ui\input\src\types.ts#L9-L9))、大号([large](file:///d:\github\ume-ui\packages\ume-ui\input\src\types.ts#L10-L10))。

<div class="demo-row">
  <u-input placeholder="Small" size="small"></u-input>
  <u-input placeholder="Medium" size="medium"></u-input>
  <u-input placeholder="Large" size="large"></u-input>
</div>

```vue
<template>
  <u-input placeholder="Small" size="small"></u-input>
  <u-input placeholder="Medium" size="medium"></u-input>
  <u-input placeholder="Large" size="large"></u-input>
</template>
```

## 禁用和只读状态

通过 `disabled` 设置禁用状态，`readonly` 设置只读状态。

<div class="demo-row">
  <u-input placeholder="禁用状态" disabled></u-input>
  <u-input placeholder="只读状态" readonly></u-input>
</div>

```vue
<template>
  <u-input placeholder="禁用状态" disabled></u-input>
  <u-input placeholder="只读状态" readonly></u-input>
</template>
```

## API

| 属性        | 说明       | 类型                       | 默认值   |
| ----------- | ---------- | -------------------------- | -------- |
| modelValue  | 绑定值     | `string \| number`         | -        |
| type        | 输入框类型 | `text \| password`         | `text`   |
| placeholder | 占位文本   | `string`                   | -        |
| disabled    | 是否禁用   | `boolean`                  | `false`  |
| readonly    | 是否只读   | `boolean`                  | `false`  |
| clearable   | 是否可清除 | `boolean`                  | `false`  |
| size        | 尺寸       | `large \| medium \| small` | `medium` |
| prefix      | 前缀内容   | `string`                   | -        |
| suffix      | 后缀内容   | `string`                   | -        |
| maxlength   | 最大长度   | `number \| string`         | -        |
| minlength   | 最小长度   | `number \| string`         | -        |

## 插槽

| 插槽名 | 说明     |
| ------ | -------- |
| prefix | 前缀内容 |
| suffix | 后缀内容 |

## 相关组件

- [InputNumber 数字输入框](./input-number.md)
- [Textarea 文本域](./textarea.md)

<script setup>
  import { ref } from 'vue';
  const value1 = ref('');
</script>

<style scoped>
  .demo-section {
    margin-bottom: 16px;
  }
  .demo-row {
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
    align-items: center;
    margin-bottom: 16px;
  }
  .demo-value {
    padding: 8px 0;
    color: #666;
    font-size: 14px;
  }
</style>
