# Checkbox 复选框

复选框用于在一组选项中进行多项选择，支持基础选中、禁用、半选等状态。

## 基础用法

最简单的复选框形式，通过 `v-model` 进行双向绑定。

<div class="checkbox-group">
  <u-checkbox v-model="checked1">基础复选框</u-checkbox>
  <u-checkbox v-model="checked2">已选中</u-checkbox>
</div>

```vue
<template>
  <u-checkbox v-model="checked1">基础复选框</u-checkbox>
  <u-checkbox v-model="checked2">已选中</u-checkbox>
</template>

<script setup>
  import { ref } from 'vue';
  const checked1 = ref(false);
  const checked2 = ref(true);
</script>
```

## 不同颜色

复选框支持多种主题颜色：primary、success、warning、error、info。

<div class="checkbox-group">
  <u-checkbox v-model="colorChecked1" color="primary">Primary</u-checkbox>
  <u-checkbox v-model="colorChecked2" color="success">Success</u-checkbox>
  <u-checkbox v-model="colorChecked3" color="warning">Warning</u-checkbox>
  <u-checkbox v-model="colorChecked4" color="error">Error</u-checkbox>
  <u-checkbox v-model="colorChecked5" color="info">Info</u-checkbox>
</div>

```vue
<template>
  <u-checkbox v-model="checked1" color="primary">Primary</u-checkbox>
  <u-checkbox v-model="checked2" color="success">Success</u-checkbox>
  <u-checkbox v-model="checked3" color="warning">Warning</u-checkbox>
  <u-checkbox v-model="checked4" color="error">Error</u-checkbox>
  <u-checkbox v-model="checked5" color="info">Info</u-checkbox>
</template>

<script setup>
  import { ref } from 'vue';
  const checked1 = ref(true);
  const checked2 = ref(true);
  const checked3 = ref(true);
  const checked4 = ref(true);
  const checked5 = ref(true);
</script>
```

## 禁用状态

通过 [disabled](file:///d:\github\ume-ui\packages\ume-ui\checkbox\src\types.ts#L3-L3) 属性禁用复选框。

<div class="checkbox-group">
  <u-checkbox disabled>未选中禁用</u-checkbox>
  <u-checkbox v-model="disabledChecked" disabled>已选中禁用</u-checkbox>
</div>

```vue
<template>
  <u-checkbox disabled>未选中禁用</u-checkbox>
  <u-checkbox v-model="checked" disabled>已选中禁用</u-checkbox>
</template>

<script setup>
  import { ref } from 'vue';
  const checked = ref(true);
</script>
```

## 半选状态

通过 [indeterminate](file:///d:\github\ume-ui\packages\ume-ui\checkbox\src\types.ts#L4-L4) 属性设置半选状态，用于实现全选/反选功能。

<div class="checkbox-block">
  <u-checkbox v-model="checkAll" :indeterminate="isIndeterminate" @change="handleCheckAll">全选</u-checkbox>
  <div class="checkbox-group">
    <u-checkbox v-model="checkedList[0]">选项 1</u-checkbox>
    <u-checkbox v-model="checkedList[1]">选项 2</u-checkbox>
    <u-checkbox v-model="checkedList[2]">选项 3</u-checkbox>
  </div>
</div>

```vue
<template>
  <u-checkbox v-model="checkAll" :indeterminate="isIndeterminate" @change="handleCheckAll">全选</u-checkbox>
  <u-checkbox v-model="checkedList[0]">选项 1</u-checkbox>
  <u-checkbox v-model="checkedList[1]">选项 2</u-checkbox>
  <u-checkbox v-model="checkedList[2]">选项 3</u-checkbox>
</template>

<script setup>
  import { ref, computed } from 'vue';
  
  const checkedList = ref([true, false, false]);
  
  const checkAll = ref(false);
  const isIndeterminate = computed(() => {
    const checkedCount = checkedList.value.filter(Boolean).length;
    return checkedCount > 0 && checkedCount < checkedList.value.length;
  });
  
  const handleCheckAll = (val) => {
    checkedList.value = [val, val, val];
  };
</script>
```

## API

| 属性 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| modelValue | 绑定值 | `boolean` | `false` |
| color | 主题颜色 | `primary \| success \| warning \| error \| info` | `primary` |
| disabled | 是否禁用 | `boolean` | `false` |
| checked | 是否选中 | `boolean` | `false` |
| indeterminate | 是否半选 | `boolean` | `false` |
| label | 标签文本 | `string` | - |
| name | name 属性 | `string` | - |

<script setup>
  import { ref, computed } from 'vue';
  
  const checked1 = ref(false);
  const checked2 = ref(true);
  const colorChecked1 = ref(true);
  const colorChecked2 = ref(true);
  const colorChecked3 = ref(true);
  const colorChecked4 = ref(true);
  const colorChecked5 = ref(true);
  const disabledChecked = ref(true);
  
  const checkedList = ref([true, false, false]);
  const checkAll = ref(false);
  const isIndeterminate = computed(() => {
    const checkedCount = checkedList.value.filter(Boolean).length;
    return checkedCount > 0 && checkedCount < checkedList.value.length;
  });
  
  const handleCheckAll = (val) => {
    checkedList.value = [val, val, val];
  };
</script>

<style scoped>
  .checkbox-group {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    margin-bottom: 16px;
  }
  .checkbox-block {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
</style>
