# Input 输入框

输入框组件用于收集用户输入或允许用户录入数据，支持多种类型和状态。

## 语言切换 / Language Switching

在中英文文档间切换:
- 英文版: [docs/components/input.md](../../../docs/components/input.md)
- 中文版: [docs/zh-CN/components/input.md](../../../docs/zh-CN/components/input.md)

## 基础用法 / Basic Usage

最简单的输入框形式，可以设置不同类型、尺寸和其他属性。

:::demo

```vue
<template>
  <div class="input-group">
    <u-input v-model="input1" placeholder="基本输入框" />
    <u-input v-model="input2" placeholder="禁用输入框" :disabled="true" />
    <u-input v-model="input3" placeholder="只读输入框" :readonly="true" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import UInput from '@/ulayer/input';

const input1 = ref('');
const input2 = ref('');
const input3 = ref('');
</script>

<style scoped>
.input-group {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
```

:::

## 不同类型 / Different Types

输入框支持不同类型，如文本、密码、邮箱等。

:::demo

```vue
<template>
  <div class="input-group">
    <u-input v-model="input1" type="text" placeholder="文本输入框" />
    <u-input v-model="input2" type="password" placeholder="密码输入框" />
    <u-input v-model="input3" type="email" placeholder="邮箱输入框" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import UInput from '@/ulayer/input';

const input1 = ref('');
const input2 = ref('');
const input3 = ref('');
</script>

<style scoped>
.input-group {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
```

:::

## 输入框尺寸 / Input Sizes

输入框有三种尺寸：小号([small](file:///d:\github\ulayer\packages\ulayer\input\src\types.ts#L8-L8))、中号([medium](file:///d:\github\ulayer\packages\ulayer\input\src\types.ts#L9-L9))、大号([large](file:///d:\github\ulayer\packages\ulayer\input\src\types.ts#L10-L10))。

:::demo

```vue
<template>
  <div class="input-group">
    <u-input v-model="input1" size="small" placeholder="小号输入框" />
    <u-input v-model="input2" size="medium" placeholder="中号输入框" />
    <u-input v-model="input3" size="large" placeholder="大号输入框" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import UInput from '@/ulayer/input';

const input1 = ref('');
const input2 = ref('');
const input3 = ref('');
</script>

<style scoped>
.input-group {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
```

:::

## 可清除输入框 / Clearable Input

通过 [clearable](file:///d:\github\ulayer\packages\ulayer\input\src\types.ts#L6-L6) 属性启用清除按钮。

:::demo

```vue
<template>
  <div class="input-group">
    <u-input v-model="input1" placeholder="可清除输入框" clearable />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import UInput from '@/ulayer/input';

const input1 = ref('');
</script>

<style scoped>
.input-group {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
```

:::

## 带图标输入框 / Input with Icon

给输入框添加前后缀图标。

:::demo

```vue
<template>
  <div class="input-group">
    <u-input v-model="input1" placeholder="带前缀图标的输入框" prefix-icon="🔍" />
    <u-input v-model="input2" placeholder="带后缀图标的输入框" suffix-icon="🔒" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import UInput from '@/ulayer/input';

const input1 = ref('');
const input2 = ref('');
</script>

<style scoped>
.input-group {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
```

:::