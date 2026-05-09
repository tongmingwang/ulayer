# Mask 遮罩层

模态遮罩层组件，用于阻止用户交互，支持自定义背景颜色和过渡动画。

## 基础用法

最简单的用法，使用默认背景颜色。

<div class="demo-section">
  <u-button @click="visible1 = true" color="primary">打开遮罩</u-button>
  <div class="mask-container">
    <u-mask v-model="visible1">
      <div class="mask-center-content">
        <u-card class="mask-card">
          <u-card-title>遮罩内容</u-card-title>
          <u-card-text>
            <p>这是一个带有内容的遮罩层，点击遮罩区域或按钮可以关闭。</p>
          </u-card-text>
          <div class="mask-actions">
            <u-button @click="visible1 = false" color="primary">关闭</u-button>
          </div>
        </u-card>
      </div>
    </u-mask>
  </div>
</div>

```vue
<template>
  <u-button @click="visible = true" color="primary">打开遮罩</u-button>
  <div class="mask-container">
    <u-mask v-model="visible">
      <div class="mask-center-content">
        <u-card>
          <u-card-title>遮罩内容</u-card-title>
          <u-card-text>
            <p>这是一个带有内容的遮罩层。</p>
          </u-card-text>
          <div class="mask-actions">
            <u-button @click="visible = false" color="primary">关闭</u-button>
          </div>
        </u-card>
      </div>
    </u-mask>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  const visible = ref(false);
</script>
```

## 自定义背景颜色

通过 `bg` 属性设置自定义背景颜色。

<div class="demo-section">
  <u-button @click="visible2 = true" color="success">打开深色遮罩</u-button>
  <div class="mask-container">
    <u-mask v-model="visible2" bg="rgba(0, 0, 0, 0.85)">
      <div class="mask-center-content">
        <u-card class="mask-card">
          <u-card-title>深色背景</u-card-title>
          <u-card-text>
            <p>这个遮罩有更深的背景色，提供更强的视觉遮挡效果。</p>
          </u-card-text>
          <div class="mask-actions">
            <u-button @click="visible2 = false" color="primary">关闭</u-button>
          </div>
        </u-card>
      </div>
    </u-mask>
  </div>
</div>

```vue
<template>
  <u-button @click="visible = true" color="success">打开深色遮罩</u-button>
  <div class="mask-container">
    <u-mask v-model="visible" bg="rgba(0, 0, 0, 0.85)">
      <div class="mask-center-content">
        <u-card>
          <u-card-title>深色背景</u-card-title>
          <u-card-text>
            <p>这个遮罩有更深的背景色。</p>
          </u-card-text>
          <div class="mask-actions">
            <u-button @click="visible = false" color="primary">关闭</u-button>
          </div>
        </u-card>
      </div>
    </u-mask>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  const visible = ref(false);
</script>
```

## 禁止点击遮罩关闭

通过 `closeOnClick` 属性设置点击遮罩层时是否关闭。

<div class="demo-section">
  <u-button @click="visible3 = true" color="warning">禁止点击关闭</u-button>
  <div class="mask-container">
    <u-mask v-model="visible3" :close-on-click="false">
      <div class="mask-center-content">
        <u-card class="mask-card">
          <u-card-title>禁止点击外部关闭</u-card-title>
          <u-card-text>
            <p>点击遮罩区域不会关闭，只能通过按钮关闭此遮罩。</p>
          </u-card-text>
          <div class="mask-actions">
            <u-button @click="visible3 = false" color="primary">关闭</u-button>
          </div>
        </u-card>
      </div>
    </u-mask>
  </div>
</div>

```vue
<template>
  <u-button @click="visible = true" color="warning">禁止点击关闭</u-button>
  <div class="mask-container">
    <u-mask v-model="visible" :close-on-click="false">
      <div class="mask-center-content">
        <u-card>
          <u-card-title>禁止点击外部关闭</u-card-title>
          <u-card-text>
            <p>点击遮罩区域不会关闭。</p>
          </u-card-text>
          <div class="mask-actions">
            <u-button @click="visible = false" color="primary">关闭</u-button>
          </div>
        </u-card>
      </div>
    </u-mask>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  const visible = ref(false);
</script>
```

## 配合 Dialog 使用

遮罩层通常与对话框组件配合使用。

<div class="demo-section">
  <u-button @click="visible4 = true" color="error">打开对话框</u-button>
  <div class="mask-container">
    <u-mask v-model="visible4">
      <div class="mask-center-content">
        <u-card class="mask-card dialog-example">
          <u-card-title>用户设置</u-card-title>
          <u-card-text>
            <p>这是一个配合遮罩层使用的对话框示例，展示了组件之间的协作方式。</p>
          </u-card-text>
          <div class="mask-actions">
            <u-button @click="visible4 = false">取消</u-button>
            <u-button @click="visible4 = false" color="primary">保存</u-button>
          </div>
        </u-card>
      </div>
    </u-mask>
  </div>
</div>

```vue
<template>
  <u-button @click="visible = true" color="error">打开对话框</u-button>
  <div class="mask-container">
    <u-mask v-model="visible">
      <div class="mask-center-content">
        <u-card>
          <u-card-title>用户设置</u-card-title>
          <u-card-text>
            <p>这是一个配合遮罩层使用的对话框示例。</p>
          </u-card-text>
          <div class="mask-actions">
            <u-button @click="visible = false">取消</u-button>
            <u-button @click="visible = false" color="primary">保存</u-button>
          </div>
        </u-card>
      </div>
    </u-mask>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  const visible = ref(false);
</script>
```

## UMask API

| 属性         | 说明             | 类型      | 默认值             |
| ------------ | ---------------- | --------- | ------------------ |
| modelValue   | 是否显示         | `boolean` | `false`            |
| closeOnClick | 是否点击遮罩关闭 | `boolean` | `true`             |
| bg           | 自定义背景颜色   | `string`  | `var(--u-mask-bg)` |

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
    margin-bottom: 24px;
  }

  .mask-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 999;
  }

  .mask-container u-mask {
    position: fixed;
    pointer-events: auto;
  }

  .mask-center-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
    max-width: 400px;
  }

  .mask-card {
    animation: cardScaleIn 0.3s ease;
  }

  @keyframes cardScaleIn {
    from {
      opacity: 0;
      transform: scale(0.9);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  .mask-actions {
    display: flex;
    justify-content: flex-end;
    gap: 12px;
    padding: 12px 16px 16px;
  }

  .mask-actions u-button:last-child {
    margin-left: auto;
  }

  .dialog-example {
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.2);
  }
</style>
