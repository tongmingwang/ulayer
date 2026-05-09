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

通过 `color` 属性设置选中状态的颜色。

<div class="demo-section">
  <div class="select-row">
    <u-select v-model="value2" color="primary" :items="['选项 1', '选项 2', '选项 3', '选项 4', '选项 5']" />
    <u-select v-model="value2a" color="success" :items="['选项 1', '选项 2', '选项 3', '选项 4', '选项 5']" />
    <u-select v-model="value2b" color="warning" :items="['选项 1', '选项 2', '选项 3', '选项 4', '选项 5']" />
    <u-select v-model="value2c" color="error" :items="['选项 1', '选项 2', '选项 3', '选项 4', '选项 5']" />
  </div>
</div>

```vue
<template>
  <u-select
    v-model="value"
    color="success"
    :items="['选项 1', '选项 2', '选项 3']" />
</template>

<script setup>
  import { ref } from 'vue';
  const value = ref('选项 1');
</script>
```

## 自定义触发器内容

通过默认插槽自定义触发器显示内容。

<div class="demo-section">
  <u-select v-model="value4" color="primary" :items="['北京', '上海', '广州', '深圳', '杭州']">
    <span class="custom-trigger">
      <u-svg icon="chevronDown" />
      <span>当前选择: {{ value4 || '请选择' }}</span>
    </span>
  </u-select>
</div>

```vue
<template>
  <u-select
    v-model="value"
    color="primary"
    :items="['北京', '上海', '广州', '深圳']">
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

通过 `content` 插槽自定义下拉列表项的内容和样式。

<div class="demo-section">
  <u-select v-model="value6">
    <span>当前选择: {{ value6 || '请选择' }}</span>
    <template #content>
      <u-list-item :value="i" v-for="i in 5">选项 {{ i }}</u-list-item>
    </template>
  </u-select>
</div>

```vue
<template>
  <u-select v-model="value">
    <span>当前选择: {{ value || '请选择' }}</span>
    <template #content>
      <u-list-item :value="i" v-for="i in 5">选项 {{ i }}</u-list-item>
    </template>
  </u-select>
</template>

<script setup>
  import { ref } from 'vue';
  const value = ref(1);
</script>
```

### 自定义列表项样式

通过 `radius` 和 `height` 属性自定义列表项样式。

<div class="demo-section">
  <u-select v-model="value7">
    <span>当前选择: {{ value7 || '请选择' }}</span>
    <template #content>
      <u-list-item height="48px" :value="i" v-for="i in 5">选项 {{ i }}</u-list-item>
    </template>
  </u-select>
</div>

```vue
<template>
  <u-select v-model="value">
    <span>当前选择: {{ value || '请选择' }}</span>
    <template #content>
      <u-list-item height="48px" :value="i" v-for="i in 5">
        选项 {{ i }}
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

| 属性       | 说明         | 类型                                                       | 默认值  |
| ---------- | ------------ | ---------------------------------------------------------- | ------- |
| modelValue | 当前选中值   | `string \| number`                                         | -       |
| disabled   | 是否禁用     | `boolean`                                                  | `false` |
| color      | 选中状态颜色 | `'primary' \| 'success' \| 'warning' \| 'error' \| 'info'` | -       |
| items      | 选项列表     | `Array<string>`                                            | -       |

## USelect 插槽

| 插槽名  | 说明       |
| ------- | ---------- |
| default | 触发器内容 |
| content | 下拉内容   |

<script setup>
  import { ref } from 'vue';
  const value1 = ref('选项 1');
  const value2 = ref('选项 1');
  const value2a = ref('选项 1');
  const value2b = ref('选项 1');
  const value2c = ref('选项 1');
  const value4 = ref('');
  const value5 = ref('选项 1');
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
