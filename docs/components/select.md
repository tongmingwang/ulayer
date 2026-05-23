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

Set the color of selected state via `color` prop on `u-option`.

<div class="demo-section">
  <div class="select-row">
    <u-select v-model="value2">
      <template #content>
        <u-option v-for="item in colorOptions" :key="item" :value="item" color="primary">{{ item }}</u-option>
      </template>
    </u-select>
    <u-select v-model="value2a">
      <template #content>
        <u-option v-for="item in colorOptions" :key="item" :value="item" color="success">{{ item }}</u-option>
      </template>
    </u-select>
    <u-select v-model="value2b">
      <template #content>
        <u-option v-for="item in colorOptions" :key="item" :value="item" color="warning">{{ item }}</u-option>
      </template>
    </u-select>
    <u-select v-model="value2c">
      <template #content>
        <u-option v-for="item in colorOptions" :key="item" :value="item" color="error">{{ item }}</u-option>
      </template>
    </u-select>
  </div>
</div>

```vue
<template>
  <u-select v-model="value">
    <template #content>
      <u-option
        v-for="item in options"
        :key="item"
        :value="item"
        color="success">
        {{ item }}
      </u-option>
    </template>
  </u-select>
</template>

<script setup>
  import { ref } from 'vue';
  const value = ref('Option 1');
  const options = ['Option 1', 'Option 2', 'Option 3'];
</script>
```

## Align Dropdown

Set dropdown alignment via `align` prop. Options include `left`, and `right`.

<u-select v-model="value3" align="right" style="width: 200px;" placeholder="Select a city"> 
  <template #content>
  <u-option style="width: 280px;" :value="item" v-for="item in ['Beijing', 'Shanghai', 'Guangzhou']" :key="item">{{ item }}</u-option>
  </template>
</u-select>

```vue
<template>
  <u-select
    v-model="value"
    align="right"
    style="width: 200px;"
    placeholder="Select a city">
    <template #content>
      <u-option
        style="width: 280px;"
        :value="item"
        v-for="item in ['Beijing', 'Shanghai', 'Guangzhou']"
        :key="item">
        {{ item }}
      </u-option>
    </template>
  </u-select>
</template>

<script setup>
  import { ref } from 'vue';
  const value = ref('');
</script>
```

## Custom Trigger Content

Customize trigger display content via default slot.

<div class="demo-section">
  <u-select v-model="value4" :items="['Beijing', 'Shanghai', 'Guangzhou', 'Shenzhen', 'Hangzhou']">
    <span class="custom-trigger">
      <u-svg icon="chevronDown" />
      <span>Selected: {{ value4 || 'Please Select' }}</span>
    </span>
  </u-select>
</div>

```vue
<template>
  <u-select v-model="value" :items="['Beijing', 'Shanghai', 'Guangzhou']">
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

Use `u-option` component via `content` slot to customize dropdown options.

<div class="demo-section">
  <u-select v-model="value6">
    <span>Selected: {{ value6 || 'Please Select' }}</span>
    <template #content>
      <u-option :value="item.value" v-for="item in options1" :key="item.value">{{ item.label }}</u-option>
    </template>
  </u-select>
</div>

```vue
<template>
  <u-select v-model="value">
    <span>Selected: {{ value || 'Please Select' }}</span>
    <template #content>
      <u-option :value="item.value" v-for="item in options" :key="item.value">
        {{ item.label }}
      </u-option>
    </template>
  </u-select>
</template>

<script setup>
  import { ref } from 'vue';
  const value = ref('');
  const options = [
    { value: 'beijing', label: 'Beijing' },
    { value: 'shanghai', label: 'Shanghai' },
    { value: 'guangzhou', label: 'Guangzhou' },
    { value: 'shenzhen', label: 'Shenzhen' },
  ];
</script>
```

### Disabled Option

Set `disabled` prop on `u-option` to disable a specific option.

<div class="demo-section">
  <u-select v-model="value7">
    <span>Selected: {{ value7 || 'Please Select' }}</span>
    <template #content>
      <u-option :value="item.value" v-for="item in options2" :key="item.value" :disabled="item.disabled">{{ item.label }}</u-option>
    </template>
  </u-select>
</div>

```vue
<template>
  <u-select v-model="value">
    <span>Selected: {{ value || 'Please Select' }}</span>
    <template #content>
      <u-option
        :value="item.value"
        v-for="item in options"
        :key="item.value"
        :disabled="item.disabled">
        {{ item.label }}
      </u-option>
    </template>
  </u-select>
</template>

<script setup>
  import { ref } from 'vue';
  const value = ref('');
  const options = [
    { value: 'a', label: 'Option A', disabled: false },
    { value: 'b', label: 'Option B', disabled: true },
    { value: 'c', label: 'Option C', disabled: false },
  ];
</script>
```

### Custom Option Style

Customize option style via `height` and `radius` props on `u-option`.

<div class="demo-section">
  <u-select v-model="value8">
    <span>Selected: {{ value8 || 'Please Select' }}</span>
    <template #content>
      <u-option height="48px" :value="i" v-for="i in 5">Option {{ i }}</u-option>
    </template>
  </u-select>
</div>

```vue
<template>
  <u-select v-model="value">
    <span>Selected: {{ value || 'Please Select' }}</span>
    <template #content>
      <u-option height="48px" :value="i" v-for="i in 5">
        Option {{ i }}
      </u-option>
    </template>
  </u-select>
</template>

<script setup>
  import { ref } from 'vue';
  const value = ref(1);
</script>
```

## USelect API

| Property    | Description                   | Type                      | Default |
| ----------- | ----------------------------- | ------------------------- | ------- |
| modelValue  | Current selected value        | `string \| number`        | -       |
| disabled    | Whether to disable the select | `boolean`                 | `false` |
| items       | Options list                  | `Array<string \| number>` | -       |
| placeholder | Placeholder text              | `string`                  | -       |

## USelect Events

| Event  | Description                  | Type                                |
| ------ | ---------------------------- | ----------------------------------- |
| change | Triggered when value changes | `(value: string \| number) => void` |

## USelect Slots

| Slot    | Description      |
| ------- | ---------------- |
| default | Trigger content  |
| content | Dropdown content |

## UOption API

| Property | Description           | Type                                                       | Default |
| -------- | --------------------- | ---------------------------------------------------------- | ------- |
| value    | Option value          | `string \| number`                                         | -       |
| disabled | Whether to disable    | `boolean`                                                  | `false` |
| color    | Color of active state | `'primary' \| 'success' \| 'warning' \| 'error' \| 'info'` | -       |
| radius   | Border radius         | `string`                                                   | -       |
| height   | Option height         | `string`                                                   | -       |

## UOption Slots

| Slot    | Description    |
| ------- | -------------- |
| default | Option content |

<script setup>
  import { ref } from 'vue';
  const value1 = ref('Option 1');
  const value2 = ref('Option 1');
  const value2a = ref('Option 1');
  const value2b = ref('Option 1');
  const value2c = ref('Option 1');
  const colorOptions = ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5'];
  const value4 = ref('');
  const value5 = ref('Option 1');
  const value6 = ref('');
  const value7 = ref('');
  const value8 = ref(1);
  const options1 = [
    { value: 'beijing', label: 'Beijing' },
    { value: 'shanghai', label: 'Shanghai' },
    { value: 'guangzhou', label: 'Guangzhou' },
    { value: 'shenzhen', label: 'Shenzhen' },
  ];
  const options2 = [
    { value: 'a', label: 'Option A', disabled: false },
    { value: 'b', label: 'Option B', disabled: true },
    { value: 'c', label: 'Option C', disabled: false },
  ];
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
