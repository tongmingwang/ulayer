# Textarea 文本域

文本域用于输入多行文本，支持自定义高度、行数和自动调整高度。

## 基础用法

最基本的文本域，通过 `v-model` 双向绑定数据。

<div class="demo-section">
  <u-input type="textarea" v-model="value1" placeholder="请输入内容"></u-input>
  <div class="demo-value">当前值: {{ value1 || '(空)' }}</div>
</div>

```vue
<template>
  <u-input type="textarea" v-model="value" placeholder="请输入内容"></u-input>
  <div>当前值: {{ value || '(空)' }}</div>
</template>

<script setup>
  import { ref } from 'vue';
  const value = ref('');
</script>
```

## 自定义行数

通过 `rows` 属性设置文本域的默认行数。

<div class="demo-section">
  <u-input type="textarea" :rows="2" v-model="value2" placeholder="2 行"></u-input>
</div>
<div class="demo-section">
  <u-input type="textarea" :rows="4" v-model="value3" placeholder="4 行"></u-input>
</div>
<div class="demo-section">
  <u-input type="textarea" :rows="6" v-model="value4" placeholder="6 行"></u-input>
</div>

```vue
<template>
  <u-input type="textarea" :rows="2" v-model="value1" placeholder="2 行"></u-input>
  <u-input type="textarea" :rows="4" v-model="value2" placeholder="4 行"></u-input>
  <u-input type="textarea" :rows="6" v-model="value3" placeholder="6 行"></u-input>
</template>

<script setup>
  import { ref } from 'vue';
  const value1 = ref('');
  const value2 = ref('');
  const value3 = ref('');
</script>
```

## 最大长度

通过 `maxlength` 属性限制输入的最大字符数。

<div class="demo-section">
  <u-input type="textarea" :maxlength="100" v-model="value5" placeholder="最多输入 100 个字符"></u-input>
</div>

```vue
<template>
  <u-input type="textarea" :maxlength="100" v-model="value" placeholder="最多输入 100 个字符"></u-input>
</template>

<script setup>
  import { ref } from 'vue';
  const value = ref('');
</script>
```

## 禁用和只读

<div class="demo-section">
  <u-input type="textarea" disabled v-model="value6" placeholder="禁用状态"></u-input>
</div>
<div class="demo-section">
  <u-input type="textarea" readonly v-model="value7" placeholder="只读状态"></u-input>
</div>

```vue
<template>
  <u-input type="textarea" disabled v-model="value1" placeholder="禁用状态"></u-input>
  <u-input type="textarea" readonly v-model="value2" placeholder="只读状态"></u-input>
</template>

<script setup>
  import { ref } from 'vue';
  const value1 = ref('这是禁用状态的文本');
  const value2 = ref('这是只读状态的文本');
</script>
```

## API

| 属性 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| modelValue | 绑定值 | `string` | `''` |
| type | 设置为 textarea | `string` | 必填 `'textarea'` |
| placeholder | 占位文本 | `string` | - |
| rows | 行数 | `number \| string` | `3` |
| maxlength | 最大长度 | `number \| string` | - |
| disabled | 是否禁用 | `boolean` | `false` |
| readonly | 是否只读 | `boolean` | `false` |

<script setup>
  import { ref } from 'vue';
  const value1 = ref('');
  const value2 = ref('');
  const value3 = ref('');
  const value4 = ref('');
  const value5 = ref('');
  const value6 = ref('这是禁用状态的文本');
  const value7 = ref('这是只读状态的文本');
</script>

<style scoped>
  .demo-section {
    margin-bottom: 16px;
  }
  .demo-value {
    padding: 8px 0;
    color: #666;
    font-size: 14px;
  }
</style>
