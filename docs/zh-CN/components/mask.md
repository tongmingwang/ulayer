# Mask 遮罩层

模态遮罩层组件，用于阻止用户交互。

## 基础用法

最简单的用法，使用默认背景颜色。

<div class="demo-section">
  <u-button @click="visible1 = true" color="primary">打开遮罩</u-button>
  <u-mask :visible="visible1" @update:visible="visible1 = false">
    <div class="mask-content">
      <h3>遮罩内容</h3>
      <p>这是一个带有内容的遮罩层。</p>
      <u-button @click="visible1 = false" color="primary">关闭</u-button>
    </div>
  </u-mask>
</div>

```vue
<template>
  <u-button @click="visible = true" color="primary">打开遮罩</u-button>
  <u-mask :visible="visible" @update:visible="visible = false">
    <div class="mask-content">
      <h3>遮罩内容</h3>
      <p>这是一个带有内容的遮罩层。</p>
      <u-button @click="visible = false" color="primary">关闭</u-button>
    </div>
  </u-mask>
</template>

<script setup>
  import { ref } from 'vue';
  const visible = ref(false);
</script>
```

## 自定义背景颜色

通过 `bg` 属性设置自定义背景颜色。

<div class="demo-section">
  <u-button @click="visible2 = true" color="success">打开自定义遮罩</u-button>
  <u-mask :visible="visible2" bg="rgba(0, 0, 0, 0.8)" @update:visible="visible2 = false">
    <div class="mask-content">
      <h3>自定义背景</h3>
      <p>这个遮罩有更深的背景色。</p>
      <u-button @click="visible2 = false" color="primary">关闭</u-button>
    </div>
  </u-mask>
</div>

```vue
<template>
  <u-button @click="visible = true" color="success">打开自定义遮罩</u-button>
  <u-mask
    :visible="visible"
    bg="rgba(0, 0, 0, 0.8)"
    @update:visible="visible = false">
    <div class="mask-content">
      <h3>自定义背景</h3>
      <p>这个遮罩有更深的背景色。</p>
      <u-button @click="visible = false" color="primary">关闭</u-button>
    </div>
  </u-mask>
</template>

<script setup>
  import { ref } from 'vue';
  const visible = ref(false);
</script>
```

## 点击关闭

通过 `closeOnClick` 属性设置点击遮罩层时关闭。

<div class="demo-section">
  <u-button @click="visible3 = true" color="warning">点击遮罩关闭</u-button>
  <u-mask :visible="visible3" close-on-click @update:visible="visible3 = false">
    <div class="mask-content">
      <h3>点击外部关闭</h3>
      <p>点击遮罩区域即可关闭。</p>
    </div>
  </u-mask>
</div>

```vue
<template>
  <u-button @click="visible = true" color="warning">点击遮罩关闭</u-button>
  <u-mask :visible="visible" close-on-click @update:visible="visible = false">
    <div class="mask-content">
      <h3>点击外部关闭</h3>
      <p>点击遮罩区域即可关闭。</p>
    </div>
  </u-mask>
</template>

<script setup>
  import { ref } from 'vue';
  const visible = ref(false);
</script>
```

## ESC 键关闭

通过 `closeOnEsc` 属性设置按 ESC 键时关闭。

<div class="demo-section">
  <u-button @click="visible4 = true" color="error">按 ESC 关闭</u-button>
  <u-mask :visible="visible4" close-on-esc @update:visible="visible4 = false">
    <div class="mask-content">
      <h3>按 ESC 关闭</h3>
      <p>按 Escape 键关闭此遮罩。</p>
      <u-button @click="visible4 = false" color="primary">关闭</u-button>
    </div>
  </u-mask>
</div>

```vue
<template>
  <u-button @click="visible = true" color="error">按 ESC 关闭</u-button>
  <u-mask :visible="visible" close-on-esc @update:visible="visible = false">
    <div class="mask-content">
      <h3>按 ESC 关闭</h3>
      <p>按 Escape 键关闭此遮罩。</p>
      <u-button @click="visible = false" color="primary">关闭</u-button>
    </div>
  </u-mask>
</template>

<script setup>
  import { ref } from 'vue';
  const visible = ref(false);
</script>
```

## UMask API

| 属性         | 说明              | 类型      | 默认值             |
| ------------ | ----------------- | --------- | ------------------ |
| visible      | 是否显示          | `boolean` | `false`            |
| closeOnClick | 是否点击遮罩关闭  | `boolean` | `true`             |
| closeOnEsc   | 是否按 ESC 键关闭 | `boolean` | `true`             |
| bg           | 自定义背景颜色    | `string`  | `var(--u-mask-bg)` |

## UMask 插槽

| 插槽名  | 说明             |
| ------- | ---------------- |
| default | 遮罩内显示的内容 |

<script setup>
  import { ref } from 'vue';
  const visible1 = ref(false);
  const visible2 = ref(false);
  const visible3 = ref(false);
  const visible4 = ref(false);
</script>

<style scoped>
  .demo-section {
    margin-bottom: 16px;
  }

  .mask-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    padding: 32px;
    border-radius: 12px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
    text-align: center;
  }

  .mask-content h3 {
    margin-top: 0;
    margin-bottom: 12px;
    color: #262626;
  }

  .mask-content p {
    margin-bottom: 20px;
    color: #595959;
  }
</style>
