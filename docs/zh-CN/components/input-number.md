# InputNumber 数字输入框

数字输入框用于输入和调整数字范围的值，支持加减按钮、范围限制、前后缀等功能。

## 基础用法

最基本的数字输入框，通过 `v-model` 双向绑定数据。

<div class="demo-row">
  <u-input type="number" v-model="value1" placeholder="请输入数字"></u-input>
  <div class="demo-value">当前值: {{ value1 }}</div>
</div>

```vue
<template>
  <u-input type="number" v-model="value" placeholder="请输入数字"></u-input>
  <div>当前值: {{ value }}</div>
</template>

<script setup>
  import { ref } from 'vue';
  const value = ref(0);
</script>
```

## 数值范围

通过 `min` 和 `max` 属性限制输入的数值范围。

<div class="demo-row">
  <u-input type="number" v-model="value2" :min="0" :max="10" placeholder="0 - 10"></u-input>
  <div class="demo-value">当前值: {{ value2 }}</div>
</div>

```vue
<template>
  <u-input type="number" v-model="value" :min="0" :max="10" placeholder="0 - 10"></u-input>
</template>

<script setup>
  import { ref } from 'vue';
  const value = ref(5);
</script>
```

## 不同尺寸

支持三种不同的尺寸：small、medium、large。

<div class="demo-row">
  <u-input type="number" size="small" v-model="value3" placeholder="小号"></u-input>
  <u-input type="number" size="medium" v-model="value4" placeholder="中号"></u-input>
  <u-input type="number" size="large" v-model="value5" placeholder="大号"></u-input>
</div>

```vue
<template>
  <u-input type="number" size="small" v-model="value1" placeholder="小号"></u-input>
  <u-input type="number" size="medium" v-model="value2" placeholder="中号"></u-input>
  <u-input type="number" size="large" v-model="value3" placeholder="大号"></u-input>
</template>

<script setup>
  import { ref } from 'vue';
  const value1 = ref(10);
  const value2 = ref(10);
  const value3 = ref(10);
</script>
```

## 前后缀

通过 `prefix` 和 `suffix` 属性添加前后缀内容。

<div class="demo-row">
  <u-input type="number" prefix="NO:" v-model="value6" placeholder="序号"></u-input>
  <u-input type="number" suffix="亿" v-model="value7" placeholder="金额"></u-input>
  <u-input type="number" prefix="$" suffix=".00" v-model="value8" placeholder="价格"></u-input>
</div>

```vue
<template>
  <u-input type="number" prefix="NO:" v-model="value1" placeholder="序号"></u-input>
  <u-input type="number" suffix="亿" v-model="value2" placeholder="金额"></u-input>
  <u-input type="number" prefix="$" suffix=".00" v-model="value3" placeholder="价格"></u-input>
</template>

<script setup>
  import { ref } from 'vue';
  const value1 = ref(1);
  const value2 = ref(100);
  const value3 = ref(99);
</script>
```

## 禁用和只读

<div class="demo-row">
  <u-input type="number" disabled v-model="value9" placeholder="禁用状态"></u-input>
  <u-input type="number" readonly v-model="value10" placeholder="只读状态"></u-input>
</div>

```vue
<template>
  <u-input type="number" disabled v-model="value1" placeholder="禁用状态"></u-input>
  <u-input type="number" readonly v-model="value2" placeholder="只读状态"></u-input>
</template>

<script setup>
  import { ref } from 'vue';
  const value1 = ref(50);
  const value2 = ref(50);
</script>
```

## API

| 属性 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| modelValue | 绑定值 | `number` | `0` |
| type | 设置为 number | `string` | 必填 `'number'` |
| placeholder | 占位文本 | `string` | - |
| min | 最小值 | `number \| string` | - |
| max | 最大值 | `number \| string` | - |
| step | 步长 | `number \| string` | `1` |
| size | 尺寸 | `small \| medium \| large` | `medium` |
| prefix | 前缀内容 | `string` | - |
| suffix | 后缀内容 | `string` | - |
| disabled | 是否禁用 | `boolean` | `false` |
| readonly | 是否只读 | `boolean` | `false` |

<script setup>
  import { ref } from 'vue';
  const value1 = ref(0);
  const value2 = ref(5);
  const value3 = ref(10);
  const value4 = ref(10);
  const value5 = ref(10);
  const value6 = ref(1);
  const value7 = ref(100);
  const value8 = ref(99);
  const value9 = ref(50);
  const value10 = ref(50);
</script>

<style scoped>
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
