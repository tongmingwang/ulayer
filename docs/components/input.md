# Input

Input component for collecting user input data.

> For number input, see [InputNumber](./input-number.md) component
> For multi-line text, see [Textarea](./textarea.md) component

## Basic Usage

The simplest input form with two-way data binding via `v-model`.

<div class="demo-section">
  <u-input v-model="value1" placeholder="Please enter content"></u-input>
  <div class="demo-value">Current value: {{ value1 || '(empty)' }}</div>
</div>

```vue
<template>
  <u-input v-model="value1" placeholder="Please enter content"></u-input>
  <div>Current value: {{ value1 || '(empty)' }}</div>
</template>

<script setup>
  import { ref } from 'vue';
  const value1 = ref('');
</script>
```

## Max Length

Limit the maximum number of characters with the `maxlength` attribute.

<div class="demo-section">
  <u-input :maxlength="6" placeholder="Max 6 characters"></u-input>
</div>

```vue
<template>
  <u-input :maxlength="6" placeholder="Max 6 characters"></u-input>
</template>
```

## Prefix & Suffix

Add prefix and suffix content via `prefix` and `suffix` attributes, or customize through slots.

<div class="demo-row">
  <u-input placeholder="Please enter content" suffix=".com">
    <template #prefix>
      <u-icon name="search"></u-icon>
    </template>
  </u-input>
</div>

```vue
<template>
  <u-input placeholder="Please enter content" suffix=".com">
    <template #prefix>
      <u-icon name="search"></u-icon>
    </template>
  </u-input>
</template>

<script setup>
  import { UIcon } from 'ume-ui';
</script>
```

## Password Input

Set `type="password"` to enable password input mode with toggle visibility support.

<div class="demo-row">
  <u-input placeholder="Enter password" type="password"></u-input>
  <u-input placeholder="With prefix" type="password" prefix="password"></u-input>
  <u-input placeholder="With suffix" type="password" suffix="hi"></u-input>
</div>

```vue
<template>
  <u-input placeholder="Enter password" type="password"></u-input>
  <u-input placeholder="With prefix" type="password" prefix="password"></u-input>
  <u-input placeholder="With suffix" type="password" suffix="hi"></u-input>
</template>
```

## Sizes

Three input sizes available: small, medium, large.

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

## Disabled & Readonly

Set disabled state via `disabled`, readonly state via `readonly`.

<div class="demo-row">
  <u-input placeholder="Disabled state" disabled></u-input>
  <u-input placeholder="Readonly state" readonly></u-input>
</div>

```vue
<template>
  <u-input placeholder="Disabled state" disabled></u-input>
  <u-input placeholder="Readonly state" readonly></u-input>
</template>
```

## API

| Attribute | Description | Type | Default |
|-----------|-------------|------|---------|
| modelValue | Binding value | `string \| number` | - |
| type | Input type | `text \| password` | `text` |
| placeholder | Placeholder text | `string` | - |
| disabled | Whether disabled | `boolean` | `false` |
| readonly | Whether readonly | `boolean` | `false` |
| clearable | Whether clearable | `boolean` | `false` |
| size | Input size | `large \| medium \| small` | `medium` |
| prefix | Prefix content | `string` | - |
| suffix | Suffix content | `string` | - |
| maxlength | Maximum length | `number \| string` | - |
| minlength | Minimum length | `number \| string` | - |

## Slots

| Slot Name | Description |
|-----------|-------------|
| prefix | Prefix content |
| suffix | Suffix content |

## Related Components

- [InputNumber](./input-number.md)
- [Textarea](./textarea.md)

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
