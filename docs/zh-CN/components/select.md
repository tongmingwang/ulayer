# Select 选择器

下拉选择器组件，支持自定义内容和优雅的展开动画效果。

## 基础用法

最简单的选择器用法，通过 `items` 属性快速创建选项列表。

<div class="demo-section">
  <u-select v-model="value1" :items="['选项 1', '选项 2', '选项 3', '选项 4', '选项 5']" />
</div>

```vue
<template>
  <u-select
    v-model="value"
    :items="['选项 1', '选项 2', '选项 3', '选项 4', '选项 5']" />
</template>

<script setup>
  import { ref } from 'vue';
  const value = ref('选项 1');
</script>
```

## 设置选中颜色

通过 `u-option` 上的 `color` 属性设置选中状态的颜色。

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
  const value = ref('选项 1');
  const options = ['选项 1', '选项 2', '选项 3'];
</script>
```

## 设置下拉对齐方式

通过 `align` 属性设置下拉菜单的对齐方式。可选值包括 `left` 和 `right`。

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

## 自定义触发器内容

通过默认插槽自定义触发器显示内容。

<div class="demo-section">
  <u-select v-model="value4" :items="['北京', '上海', '广州', '深圳', '杭州']">
    <span class="custom-trigger">
      <u-svg icon="chevronDown" />
      <span>当前选择: {{ value4 || '请选择' }}</span>
    </span>
  </u-select>
</div>

```vue
<template>
  <u-select v-model="value" :items="['北京', '上海', '广州', '深圳']">
    <span>当前选择: {{ value || '请选择' }}</span>
  </u-select>
</template>

<script setup>
  import { ref } from 'vue';
  const value = ref('');
</script>
```

## 禁用状态

通过 `disabled` 属性禁用选择器。

<div class="demo-section">
  <u-select v-model="value5" disabled :items="['选项 1', '选项 2', '选项 3', '选项 4', '选项 5']" />
</div>

```vue
<template>
  <u-select v-model="value" disabled :items="['选项 1', '选项 2', '选项 3']" />
</template>

<script setup>
  import { ref } from 'vue';
  const value = ref('选项 1');
</script>
```

## 自定义下拉内容

通过 `content` 插槽使用 `u-option` 组件自定义下拉选项。

<div class="demo-section">
  <u-select v-model="value6">
    <span>当前选择: {{ value6 || '请选择' }}</span>
    <template #content>
      <u-option :value="item.value" v-for="item in options1" :key="item.value">{{ item.label }}</u-option>
    </template>
  </u-select>
</div>

```vue
<template>
  <u-select v-model="value">
    <span>当前选择: {{ value || '请选择' }}</span>
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
    { value: 'beijing', label: '北京' },
    { value: 'shanghai', label: '上海' },
    { value: 'guangzhou', label: '广州' },
    { value: 'shenzhen', label: '深圳' },
  ];
</script>
```

### 禁用选项

在 `u-option` 上设置 `disabled` 属性可以禁用特定选项。

<div class="demo-section">
  <u-select v-model="value7">
    <span>当前选择: {{ value7 || '请选择' }}</span>
    <template #content>
      <u-option :value="item.value" v-for="item in options2" :key="item.value" :disabled="item.disabled">{{ item.label }}</u-option>
    </template>
  </u-select>
</div>

```vue
<template>
  <u-select v-model="value">
    <span>当前选择: {{ value || '请选择' }}</span>
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
    { value: 'a', label: '选项 A', disabled: false },
    { value: 'b', label: '选项 B', disabled: true },
    { value: 'c', label: '选项 C', disabled: false },
  ];
</script>
```

### 自定义选项样式

通过 `u-option` 上的 `height` 和 `radius` 属性自定义选项样式。

<div class="demo-section">
  <u-select v-model="value8">
    <span>当前选择: {{ value8 || '请选择' }}</span>
    <template #content>
      <u-option height="48px" :value="i" v-for="i in 5">选项 {{ i }}</u-option>
    </template>
  </u-select>
</div>

```vue
<template>
  <u-select v-model="value">
    <span>当前选择: {{ value || '请选择' }}</span>
    <template #content>
      <u-option height="48px" :value="i" v-for="i in 5">选项 {{ i }}</u-option>
    </template>
  </u-select>
</template>

<script setup>
  import { ref } from 'vue';
  const value = ref(1);
</script>
```

## USelect API

| 属性        | 说明       | 类型                      | 默认值  |
| ----------- | ---------- | ------------------------- | ------- |
| modelValue  | 当前选中值 | `string \| number`        | -       |
| disabled    | 是否禁用   | `boolean`                 | `false` |
| items       | 选项列表   | `Array<string \| number>` | -       |
| placeholder | 占位文本   | `string`                  | -       |

## USelect 事件

| 事件名 | 说明         | 类型                                |
| ------ | ------------ | ----------------------------------- |
| change | 值变化时触发 | `(value: string \| number) => void` |

## USelect 插槽

| 插槽名  | 说明       |
| ------- | ---------- |
| default | 触发器内容 |
| content | 下拉内容   |

## UOption API

| 属性     | 说明         | 类型                                                       | 默认值  |
| -------- | ------------ | ---------------------------------------------------------- | ------- |
| value    | 选项值       | `string \| number`                                         | -       |
| disabled | 是否禁用     | `boolean`                                                  | `false` |
| color    | 选中状态颜色 | `'primary' \| 'success' \| 'warning' \| 'error' \| 'info'` | -       |
| radius   | 圆角         | `string`                                                   | -       |
| height   | 选项高度     | `string`                                                   | -       |

## UOption 插槽

| 插槽名  | 说明     |
| ------- | -------- |
| default | 选项内容 |

<script setup>
  import { ref } from 'vue';
  const value1 = ref('选项 1');
  const value2 = ref('选项 1');
  const value2a = ref('选项 1');
  const value2b = ref('选项 1');
  const value2c = ref('选项 1');
  const colorOptions = ['选项 1', '选项 2', '选项 3', '选项 4', '选项 5'];
  const value4 = ref('');
  const value5 = ref('选项 1');
  const value6 = ref('');
  const value7 = ref('');
  const value8 = ref(1);
  const options1 = [
    { value: 'beijing', label: '北京' },
    { value: 'shanghai', label: '上海' },
    { value: 'guangzhou', label: '广州' },
    { value: 'shenzhen', label: '深圳' },
  ];
  const options2 = [
    { value: 'a', label: '选项 A', disabled: false },
    { value: 'b', label: '选项 B', disabled: true },
    { value: 'c', label: '选项 C', disabled: false },
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
