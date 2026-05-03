# Input

Input components are used to collect user input or allow users to enter data, supporting various types and states.

## Basic Usage

The simplest form of input that can have different types, sizes and other properties.

:::demo

```vue
<template>
  <div class="input-group">
    <u-input v-model="input1" placeholder="Basic input" />
    <u-input v-model="input2" placeholder="Disabled input" :disabled="true" />
    <u-input v-model="input3" placeholder="Readonly input" :readonly="true" />
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

## Different Types

Input supports different types such as text, password, email, etc.

:::demo

```vue
<template>
  <div class="input-group">
    <u-input v-model="input1" type="text" placeholder="Text input" />
    <u-input v-model="input2" type="password" placeholder="Password input" />
    <u-input v-model="input3" type="email" placeholder="Email input" />
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

## Input Sizes

Input fields have three sizes: small, medium, and large.

:::demo

```vue
<template>
  <div class="input-group">
    <u-input v-model="input1" size="small" placeholder="Small input" />
    <u-input v-model="input2" size="medium" placeholder="Medium input" />
    <u-input v-model="input3" size="large" placeholder="Large input" />
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

## Clearable Input

Enable the clear button using the [clearable](file:///d:\github\ulayer\packages\ulayer\input/src/types.ts#L6-L6) property.

:::demo

```vue
<template>
  <div class="input-group">
    <u-input v-model="input1" placeholder="Clearable input" clearable />
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

## Input with Icon

Add icons to the input field.

:::demo

```vue
<template>
  <div class="input-group">
    <u-input v-model="input1" placeholder="Input with prefix icon" prefix-icon="🔍" />
    <u-input v-model="input2" placeholder="Input with suffix icon" suffix-icon="🔒" />
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