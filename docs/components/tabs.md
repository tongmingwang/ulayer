# Tabs

Used to switch between different content areas, supporting both line and card styles with directional slide animation.

## Basic Usage

The simplest usage of tabs, binding the currently active tab name via `v-model`.

<u-tabs v-model="activeTab1">
  <u-tab-pane name="tab1" label="Tab One">
    <p>This is the content of Tab One</p>
  </u-tab-pane>
  <u-tab-pane name="tab2" label="Tab Two">
    <p>This is the content of Tab Two</p>
  </u-tab-pane>
  <u-tab-pane name="tab3" label="Tab Three">
    <p>This is the content of Tab Three</p>
  </u-tab-pane>
</u-tabs>

```vue
<template>
  <u-tabs v-model="activeTab">
    <u-tab-pane name="tab1" label="Tab One">
      <p>This is the content of Tab One</p>
    </u-tab-pane>
    <u-tab-pane name="tab2" label="Tab Two">
      <p>This is the content of Tab Two</p>
    </u-tab-pane>
    <u-tab-pane name="tab3" label="Tab Three">
      <p>This is the content of Tab Three</p>
    </u-tab-pane>
  </u-tabs>
</template>

<script setup>
import { ref } from 'vue';
const activeTab = ref('tab1');
</script>
```

## Card Type

Set `type` to `card` to use the card style tabs.

<u-tabs v-model="activeTab2" type="card">
  <u-tab-pane name="tab1" label="Tab One">
    <p>This is the content of Tab One</p>
  </u-tab-pane>
  <u-tab-pane name="tab2" label="Tab Two">
    <p>This is the content of Tab Two</p>
  </u-tab-pane>
  <u-tab-pane name="tab3" label="Tab Three">
    <p>This is the content of Tab Three</p>
  </u-tab-pane>
</u-tabs>

```vue
<template>
  <u-tabs v-model="activeTab" type="card">
    <u-tab-pane name="tab1" label="Tab One">
      <p>This is the content of Tab One</p>
    </u-tab-pane>
    <u-tab-pane name="tab2" label="Tab Two">
      <p>This is the content of Tab Two</p>
    </u-tab-pane>
    <u-tab-pane name="tab3" label="Tab Three">
      <p>This is the content of Tab Three</p>
    </u-tab-pane>
  </u-tabs>
</template>

<script setup>
import { ref } from 'vue';
const activeTab = ref('tab1');
</script>
```

## Disabled Tab

Disable a specific tab via the `disabled` attribute. Disabled tabs cannot be clicked to switch.

<u-tabs v-model="activeTab3">
  <u-tab-pane name="tab1" label="Tab One">
    <p>This is the content of Tab One</p>
  </u-tab-pane>
  <u-tab-pane name="tab2" label="Disabled" disabled>
    <p>This content is not accessible</p>
  </u-tab-pane>
  <u-tab-pane name="tab3" label="Tab Three">
    <p>This is the content of Tab Three</p>
  </u-tab-pane>
</u-tabs>

```vue
<template>
  <u-tabs v-model="activeTab">
    <u-tab-pane name="tab1" label="Tab One">
      <p>This is the content of Tab One</p>
    </u-tab-pane>
    <u-tab-pane name="tab2" label="Disabled" disabled>
      <p>This content is not accessible</p>
    </u-tab-pane>
    <u-tab-pane name="tab3" label="Tab Three">
      <p>This is the content of Tab Three</p>
    </u-tab-pane>
  </u-tabs>
</template>

<script setup>
import { ref } from 'vue';
const activeTab = ref('tab1');
</script>
```

## Disable Animation

Set `animated` to `false` to disable the switching animation.

<u-tabs v-model="activeTab4" :animated="false">
  <u-tab-pane name="tab1" label="Tab One">
    <p>This is the content of Tab One (no animation)</p>
  </u-tab-pane>
  <u-tab-pane name="tab2" label="Tab Two">
    <p>This is the content of Tab Two (no animation)</p>
  </u-tab-pane>
  <u-tab-pane name="tab3" label="Tab Three">
    <p>This is the content of Tab Three (no animation)</p>
  </u-tab-pane>
</u-tabs>

```vue
<template>
  <u-tabs v-model="activeTab" :animated="false">
    <u-tab-pane name="tab1" label="Tab One">
      <p>This is the content of Tab One (no animation)</p>
    </u-tab-pane>
    <u-tab-pane name="tab2" label="Tab Two">
      <p>This is the content of Tab Two (no animation)</p>
    </u-tab-pane>
    <u-tab-pane name="tab3" label="Tab Three">
      <p>This is the content of Tab Three (no animation)</p>
    </u-tab-pane>
  </u-tabs>
</template>

<script setup>
import { ref } from 'vue';
const activeTab = ref('tab1');
</script>
```

## UTabs API

| Attribute  | Description              | Type           | Default |
| ---------- | ------------------------ | -------------- | ------- |
| modelValue | Currently active tab     | `string`       | -       |
| type       | Tab type                 | `line \| card` | `line`  |
| animated   | Whether to enable animation | `boolean`   | `true`  |

| Event  | Description                | Callback Params  |
| ------ | -------------------------- | ---------------- |
| change | Triggered when tab changes | `(name: string)` |

## UTabPane API

| Attribute | Description     | Type      | Default |
| --------- | --------------- | --------- | ------- |
| name      | Tab identifier  | `string`  | -       |
| label     | Tab title       | `string`  | -       |
| disabled  | Whether disabled| `boolean` | `false` |

<script setup>
import { ref } from 'vue';
const activeTab1 = ref('tab1');
const activeTab2 = ref('tab1');
const activeTab3 = ref('tab1');
const activeTab4 = ref('tab1');
</script>
