# Select

Dropdown select component with customizable content and elegant expand animation.

## Basic Usage

The simplest select usage with options list via `items` prop.

<div class="demo-section">
  <u-select v-model="value1" :items="['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5']" />
</div>

```vue
<template>
  <u-select
    v-model="value"
    :items="['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5']" />
</template>

<script setup>
  import { ref } from 'vue';
  const value = ref('Option 1');
</script>
```

## Set Color

Set the color of selected state via `color` prop.

<div class="demo-section">
  <div class="select-row">
    <u-select v-model="value2" color="primary" :items="['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5']" />
    <u-select v-model="value2a" color="success" :items="['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5']" />
    <u-select v-model="value2b" color="warning" :items="['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5']" />
    <u-select v-model="value2c" color="error" :items="['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5']" />
  </div>
</div>

```vue
<template>
  <u-select
    v-model="value"
    color="success"
    :items="['Option 1', 'Option 2', 'Option 3']" />
</template>

<script setup>
  import { ref } from 'vue';
  const value = ref('Option 1');
</script>
```

## Custom Trigger Content

Customize trigger display content via default slot.

<div class="demo-section">
  <u-select v-model="value4" color="primary" :items="['Beijing', 'Shanghai', 'Guangzhou', 'Shenzhen', 'Hangzhou']">
    <span class="custom-trigger">
      <u-svg icon="chevronDown" />
      <span>Selected: {{ value4 || 'Please Select' }}</span>
    </span>
  </u-select>
</div>

```vue
<template>
  <u-select
    v-model="value"
    color="primary"
    :items="['Beijing', 'Shanghai', 'Guangzhou']">
    <span>Selected: {{ value || 'Please Select' }}</span>
  </u-select>
</template>

<script setup>
  import { ref } from 'vue';
  const value = ref('');
</script>
```

## Disabled State

Disable the select via `disabled` prop.

<div class="demo-section">
  <u-select v-model="value5" disabled :items="['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5']" />
</div>

```vue
<template>
  <u-select
    v-model="value"
    disabled
    :items="['Option 1', 'Option 2', 'Option 3']" />
</template>

<script setup>
  import { ref } from 'vue';
  const value = ref('Option 1');
</script>
```

## Custom Dropdown Content

Customize dropdown content and style via `content` slot.

<div class="demo-section">
  <u-select v-model="value6">
    <span>Selected: {{ value6 || 'Please Select' }}</span>
    <template #content>
      <u-list-item :value="i" v-for="i in 5">Option {{ i }}</u-list-item>
    </template>
  </u-select>
</div>

```vue
<template>
  <u-select v-model="value">
    <span>Selected: {{ value || 'Please Select' }}</span>
    <template #content>
      <u-list-item :value="i" v-for="i in 5">Option {{ i }}</u-list-item>
    </template>
  </u-select>
</template>

<script setup>
  import { ref } from 'vue';
  const value = ref(1);
</script>
```

### Custom List Item Style

Customize list item style via `radius` and `height` props.

<div class="demo-section">
  <u-select v-model="value7">
    <span>Selected: {{ value7 || 'Please Select' }}</span>
    <template #content>
      <u-list-item height="48px" :value="i" v-for="i in 5">Option {{ i }}</u-list-item>
    </template>
  </u-select>
</div>

```vue
<template>
  <u-select v-model="value">
    <span>Selected: {{ value || 'Please Select' }}</span>
    <template #content>
      <u-list-item height="48px" :value="i" v-for="i in 5">
        Option {{ i }}
      </u-list-item>
    </template>
  </u-select>
</template>

<script setup>
  import { ref } from 'vue';
  const value = ref(1);
</script>
```

## USelect API

| Property   | Description                   | Type                                                       | Default |
| ---------- | ----------------------------- | ---------------------------------------------------------- | ------- |
| modelValue | Current selected value        | `string \| number`                                         | -       |
| disabled   | Whether to disable the select | `boolean`                                                  | `false` |
| color      | Color of selected state       | `'primary' \| 'success' \| 'warning' \| 'error' \| 'info'` | -       |
| items      | Options list                  | `Array<string>`                                            | -       |

## USelect Slots

| Slot    | Description      |
| ------- | ---------------- |
| default | Trigger content  |
| content | Dropdown content |

<script setup>
  import { ref } from 'vue';
  const value1 = ref('Option 1');
  const value2 = ref('Option 1');
  const value2a = ref('Option 1');
  const value2b = ref('Option 1');
  const value2c = ref('Option 1');
  const value4 = ref('');
  const value5 = ref('Option 1');
  const value6 = ref(1);
  const value7 = ref(1);
</script>

<style scoped>
  .demo-section {
    margin-bottom: 24px;
  }

  .select-row {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 12px;
  }

  .custom-trigger {
    display: flex;
    align-items: center;
    gap: 8px;
    color: var(--u-primary-600);
    font-weight: 500;
  }

  .custom-item {
    display: flex;
    align-items: center;
    gap: 12px;
    color: var(--u-info-900);
  }

  .custom-item u-svg {
    width: 20px;
    height: 20px;
    color: var(--u-warning-500);
  }
</style>
