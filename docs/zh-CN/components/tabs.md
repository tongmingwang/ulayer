# Tabs 标签页

用于在不同内容区域之间进行切换，支持线型和卡片两种样式，并带有方向感知滑动动画。

## 基础用法

最简单的标签页用法，通过 `v-model` 绑定当前激活的标签页名称。

<u-tabs v-model="activeTab1">
  <u-tab-pane name="tab1" label="标签一">
    <p>这是标签一的内容</p>
  </u-tab-pane>
  <u-tab-pane name="tab2" label="标签二">
    <p>这是标签二的内容</p>
  </u-tab-pane>
  <u-tab-pane name="tab3" label="标签三">
    <p>这是标签三的内容</p>
  </u-tab-pane>
</u-tabs>

```vue
<template>
  <u-tabs v-model="activeTab">
    <u-tab-pane name="tab1" label="标签一">
      <p>这是标签一的内容</p>
    </u-tab-pane>
    <u-tab-pane name="tab2" label="标签二">
      <p>这是标签二的内容</p>
    </u-tab-pane>
    <u-tab-pane name="tab3" label="标签三">
      <p>这是标签三的内容</p>
    </u-tab-pane>
  </u-tabs>
</template>

<script setup>
import { ref } from 'vue';
const activeTab = ref('tab1');
</script>
```

## 卡片类型

将 `type` 设置为 `card` 可使用卡片样式标签页。

<u-tabs v-model="activeTab2" type="card">
  <u-tab-pane name="tab1" label="标签一">
    <p>这是标签一的内容</p>
  </u-tab-pane>
  <u-tab-pane name="tab2" label="标签二">
    <p>这是标签二的内容</p>
  </u-tab-pane>
  <u-tab-pane name="tab3" label="标签三">
    <p>这是标签三的内容</p>
  </u-tab-pane>
</u-tabs>

```vue
<template>
  <u-tabs v-model="activeTab" type="card">
    <u-tab-pane name="tab1" label="标签一">
      <p>这是标签一的内容</p>
    </u-tab-pane>
    <u-tab-pane name="tab2" label="标签二">
      <p>这是标签二的内容</p>
    </u-tab-pane>
    <u-tab-pane name="tab3" label="标签三">
      <p>这是标签三的内容</p>
    </u-tab-pane>
  </u-tabs>
</template>

<script setup>
import { ref } from 'vue';
const activeTab = ref('tab1');
</script>
```

## 禁用标签页

通过 `disabled` 属性禁用某个标签页，被禁用的标签页无法点击切换。

<u-tabs v-model="activeTab3">
  <u-tab-pane name="tab1" label="标签一">
    <p>这是标签一的内容</p>
  </u-tab-pane>
  <u-tab-pane name="tab2" label="禁用标签" disabled>
    <p>此内容无法访问</p>
  </u-tab-pane>
  <u-tab-pane name="tab3" label="标签三">
    <p>这是标签三的内容</p>
  </u-tab-pane>
</u-tabs>

```vue
<template>
  <u-tabs v-model="activeTab">
    <u-tab-pane name="tab1" label="标签一">
      <p>这是标签一的内容</p>
    </u-tab-pane>
    <u-tab-pane name="tab2" label="禁用标签" disabled>
      <p>此内容无法访问</p>
    </u-tab-pane>
    <u-tab-pane name="tab3" label="标签三">
      <p>这是标签三的内容</p>
    </u-tab-pane>
  </u-tabs>
</template>

<script setup>
import { ref } from 'vue';
const activeTab = ref('tab1');
</script>
```

## 关闭动画

将 `animated` 设置为 `false` 可关闭切换动画。

<u-tabs v-model="activeTab4" :animated="false">
  <u-tab-pane name="tab1" label="标签一">
    <p>这是标签一的内容（无动画）</p>
  </u-tab-pane>
  <u-tab-pane name="tab2" label="标签二">
    <p>这是标签二的内容（无动画）</p>
  </u-tab-pane>
  <u-tab-pane name="tab3" label="标签三">
    <p>这是标签三的内容（无动画）</p>
  </u-tab-pane>
</u-tabs>

```vue
<template>
  <u-tabs v-model="activeTab" :animated="false">
    <u-tab-pane name="tab1" label="标签一">
      <p>这是标签一的内容（无动画）</p>
    </u-tab-pane>
    <u-tab-pane name="tab2" label="标签二">
      <p>这是标签二的内容（无动画）</p>
    </u-tab-pane>
    <u-tab-pane name="tab3" label="标签三">
      <p>这是标签三的内容（无动画）</p>
    </u-tab-pane>
  </u-tabs>
</template>

<script setup>
import { ref } from 'vue';
const activeTab = ref('tab1');
</script>
```

## UTabs API

| 属性       | 说明           | 类型              | 默认值  |
| ---------- | -------------- | ----------------- | ------- |
| modelValue | 当前激活的标签 | `string`          | -       |
| type       | 标签页类型     | `line \| card`    | `line`  |
| animated   | 是否开启动画   | `boolean`         | `true`  |

| 事件   | 说明                 | 回调参数         |
| ------ | -------------------- | ---------------- |
| change | 切换标签时触发       | `(name: string)` |

## UTabPane API

| 属性     | 说明         | 类型      | 默认值  |
| -------- | ------------ | --------- | ------- |
| name     | 标签页标识   | `string`  | -       |
| label    | 标签页标题   | `string`  | -       |
| disabled | 是否禁用     | `boolean` | `false` |

<script setup>
import { ref } from 'vue';
const activeTab1 = ref('tab1');
const activeTab2 = ref('tab1');
const activeTab3 = ref('tab1');
const activeTab4 = ref('tab1');
</script>
