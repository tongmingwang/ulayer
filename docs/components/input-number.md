# InputNumber

Number input component for entering and adjusting numeric values within a range, supporting increment/decrement buttons, range limits, and prefix/suffix.

## Basic Usage

Basic number input with two-way data binding via `v-model`.

<div class="demo-row">
  <u-input type="number" v-model="value1" placeholder="Enter number"></u-input>
  <div class="demo-value">Current value: {{ value1 }}</div>
</div>

```vue
<template>
  <u-input type="number" v-model="value" placeholder="Enter number"></u-input>
  <div>Current value: {{ value }}</div>
</template>

<script setup>
  import { ref } from 'vue';
  const value = ref(0);
</script>
```

## Value Range

Limit the input value range using `min` and `max` attributes.

<div class="demo-row">
  <u-input type="number" v-model="value2" :min="0" :max="10" placeholder="0 - 10"></u-input>
  <div class="demo-value">Current value: {{ value2 }}</div>
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

## Sizes

Three sizes available: small, medium, large.

<div class="demo-row">
  <u-input type="number" size="small" v-model="value3" placeholder="Small"></u-input>
  <u-input type="number" size="medium" v-model="value4" placeholder="Medium"></u-input>
  <u-input type="number" size="large" v-model="value5" placeholder="Large"></u-input>
</div>

```vue
<template>
  <u-input type="number" size="small" v-model="value1" placeholder="Small"></u-input>
  <u-input type="number" size="medium" v-model="value2" placeholder="Medium"></u-input>
  <u-input type="number" size="large" v-model="value3" placeholder="Large"></u-input>
</template>

<script setup>
  import { ref } from 'vue';
  const value1 = ref(10);
  const value2 = ref(10);
  const value3 = ref(10);
</script>
```

## Prefix & Suffix

Add prefix and suffix content via `prefix` and `suffix` attributes.

<div class="demo-row">
  <u-input type="number" prefix="NO:" v-model="value6" placeholder="Number"></u-input>
  <u-input type="number" suffix="M" v-model="value7" placeholder="Amount"></u-input>
  <u-input type="number" prefix="$" suffix=".00" v-model="value8" placeholder="Price"></u-input>
</div>

```vue
<template>
  <u-input type="number" prefix="NO:" v-model="value1" placeholder="Number"></u-input>
  <u-input type="number" suffix="M" v-model="value2" placeholder="Amount"></u-input>
  <u-input type="number" prefix="$" suffix=".00" v-model="value3" placeholder="Price"></u-input>
</template>

<script setup>
  import { ref } from 'vue';
  const value1 = ref(1);
  const value2 = ref(100);
  const value3 = ref(99);
</script>
```

## Disabled & Readonly

<div class="demo-row">
  <u-input type="number" disabled v-model="value9" placeholder="Disabled"></u-input>
  <u-input type="number" readonly v-model="value10" placeholder="Readonly"></u-input>
</div>

```vue
<template>
  <u-input type="number" disabled v-model="value1" placeholder="Disabled"></u-input>
  <u-input type="number" readonly v-model="value2" placeholder="Readonly"></u-input>
</template>

<script setup>
  import { ref } from 'vue';
  const value1 = ref(50);
  const value2 = ref(50);
</script>
```

## API

| Attribute | Description | Type | Default |
|-----------|-------------|------|---------|
| modelValue | Binding value | `number` | `0` |
| type | Set to number | `string` | Required `'number'` |
| placeholder | Placeholder text | `string` | - |
| min | Minimum value | `number \| string` | - |
| max | Maximum value | `number \| string` | - |
| step | Step increment | `number \| string` | `1` |
| size | Input size | `small \| medium \| large` | `medium` |
| prefix | Prefix content | `string` | - |
| suffix | Suffix content | `string` | - |
| disabled | Whether disabled | `boolean` | `false` |
| readonly | Whether readonly | `boolean` | `false` |

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
