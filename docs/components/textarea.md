# Textarea

Textarea component for multi-line text input, supporting custom height, rows, and auto-resizing.

## Basic Usage

Basic textarea with two-way data binding via `v-model`.

<div class="demo-section">
  <u-input type="textarea" v-model="value1" placeholder="Enter content"></u-input>
  <div class="demo-value">Current value: {{ value1 || '(empty)' }}</div>
</div>

```vue
<template>
  <u-input type="textarea" v-model="value" placeholder="Enter content"></u-input>
  <div>Current value: {{ value || '(empty)' }}</div>
</template>

<script setup>
  import { ref } from 'vue';
  const value = ref('');
</script>
```

## Custom Rows

Set the default number of rows using the `rows` attribute.

<div class="demo-section">
  <u-input type="textarea" :rows="2" v-model="value2" placeholder="2 rows"></u-input>
</div>
<div class="demo-section">
  <u-input type="textarea" :rows="4" v-model="value3" placeholder="4 rows"></u-input>
</div>
<div class="demo-section">
  <u-input type="textarea" :rows="6" v-model="value4" placeholder="6 rows"></u-input>
</div>

```vue
<template>
  <u-input type="textarea" :rows="2" v-model="value1" placeholder="2 rows"></u-input>
  <u-input type="textarea" :rows="4" v-model="value2" placeholder="4 rows"></u-input>
  <u-input type="textarea" :rows="6" v-model="value3" placeholder="6 rows"></u-input>
</template>

<script setup>
  import { ref } from 'vue';
  const value1 = ref('');
  const value2 = ref('');
  const value3 = ref('');
</script>
```

## Max Length

Limit the maximum number of characters using the `maxlength` attribute.

<div class="demo-section">
  <u-input type="textarea" :maxlength="100" v-model="value5" placeholder="Max 100 characters"></u-input>
</div>

```vue
<template>
  <u-input type="textarea" :maxlength="100" v-model="value" placeholder="Max 100 characters"></u-input>
</template>

<script setup>
  import { ref } from 'vue';
  const value = ref('');
</script>
```

## Disabled & Readonly

<div class="demo-section">
  <u-input type="textarea" disabled v-model="value6" placeholder="Disabled state"></u-input>
</div>
<div class="demo-section">
  <u-input type="textarea" readonly v-model="value7" placeholder="Readonly state"></u-input>
</div>

```vue
<template>
  <u-input type="textarea" disabled v-model="value1" placeholder="Disabled state"></u-input>
  <u-input type="textarea" readonly v-model="value2" placeholder="Readonly state"></u-input>
</template>

<script setup>
  import { ref } from 'vue';
  const value1 = ref('This is disabled text');
  const value2 = ref('This is readonly text');
</script>
```

## API

| Attribute | Description | Type | Default |
|-----------|-------------|------|---------|
| modelValue | Binding value | `string` | `''` |
| type | Set to textarea | `string` | Required `'textarea'` |
| placeholder | Placeholder text | `string` | - |
| rows | Number of rows | `number \| string` | `3` |
| maxlength | Maximum length | `number \| string` | - |
| disabled | Whether disabled | `boolean` | `false` |
| readonly | Whether readonly | `boolean` | `false` |

<script setup>
  import { ref } from 'vue';
  const value1 = ref('');
  const value2 = ref('');
  const value3 = ref('');
  const value4 = ref('');
  const value5 = ref('');
  const value6 = ref('This is disabled text');
  const value7 = ref('This is readonly text');
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
