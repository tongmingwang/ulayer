# Drawer 抽屉

一个从屏幕边缘滑入的面板组件，非常适合用于导航菜单、过滤器或不需要始终可见的附加内容。

## 基本用法

最简单的抽屉用法，默认从左侧滑入。

<div class="demo-section">
  <u-button @click="visible1 = true" color="primary">打开左侧抽屉</u-button>
  <u-drawer v-model="visible1">
    <div class="drawer-content">
      <h3>导航菜单</h3>
      <u-list>
        <u-list-item>首页</u-list-item>
        <u-list-item>个人中心</u-list-item>
        <u-list-item>设置</u-list-item>
        <u-list-item>帮助</u-list-item>
      </u-list>
    </div>
  </u-drawer>
</div>

```vue
<template>
  <u-button @click="visible = true" color="primary">打开抽屉</u-button>
  <u-drawer v-model="visible">
    <div>
      <h3>导航菜单</h3>
      <u-list>
        <u-list-item>首页</u-list-item>
        <u-list-item>个人中心</u-list-item>
      </u-list>
    </div>
  </u-drawer>
</template>

<script setup>
  import { ref } from 'vue';
  const visible = ref(false);
</script>
```

## 自定义尺寸

通过 `size` 属性设置抽屉尺寸，支持百分比或像素值。

<div class="demo-section">
  <u-button @click="visible2 = true" color="success">30% 宽度抽屉</u-button>
  <u-drawer v-model="visible2" size="30%">
    <div class="drawer-content">
      <h3>30% 宽度</h3>
      <p>此抽屉占视口宽度的 30%。</p>
    </div>
  </u-drawer>
</div>

```vue
<template>
  <u-button @click="visible = true" color="success">30% 宽度抽屉</u-button>
  <u-drawer v-model="visible" size="30%">
    <div>
      <h3>30% 宽度</h3>
      <p>此抽屉占视口宽度的 30%。</p>
    </div>
  </u-drawer>
</template>

<script setup>
  import { ref } from 'vue';
  const visible = ref(false);
</script>
```

## 不同位置

抽屉可以从四个不同位置滑入：左、右、上、下。

<div class="demo-section">
  <u-button @click="visible3 = true" color="warning">右侧抽屉</u-button>
  <u-button @click="visible4 = true" color="info">顶部抽屉</u-button>
  <u-button @click="visible5 = true" color="error">底部抽屉</u-button>
  
  <u-drawer v-model="visible3" location="right" size="25%">
    <div class="drawer-content">
      <h3>右侧抽屉</h3>
      <p>从右侧滑入。</p>
    </div>
  </u-drawer>
  
  <u-drawer v-model="visible4" location="top" size="20%">
    <div class="drawer-content">
      <h3>顶部抽屉</h3>
      <p>从顶部滑下。</p>
    </div>
  </u-drawer>
  
  <u-drawer v-model="visible5" location="bottom" size="25%">
    <div class="drawer-content">
      <h3>底部抽屉</h3>
      <p>从底部滑上。</p>
    </div>
  </u-drawer>
</div>

```vue
<template>
  <u-button @click="rightVisible = true">右侧抽屉</u-button>
  <u-button @click="topVisible = true">顶部抽屉</u-button>
  <u-button @click="bottomVisible = true">底部抽屉</u-button>
  
  <u-drawer v-model="rightVisible" location="right">
    <div>右侧抽屉内容</div>
  </u-drawer>
  
  <u-drawer v-model="topVisible" location="top">
    <div>顶部抽屉内容</div>
  </u-drawer>
  
  <u-drawer v-model="bottomVisible" location="bottom">
    <div>底部抽屉内容</div>
  </u-drawer>
</template>

<script setup>
  import { ref } from 'vue';
  const rightVisible = ref(false);
  const topVisible = ref(false);
  const bottomVisible = ref(false);
</script>
```

## 禁用点击遮罩关闭

禁止点击遮罩层关闭抽屉。

<div class="demo-section">
  <u-button @click="visible6 = true" color="primary">禁用遮罩关闭</u-button>
  <u-drawer v-model="visible6" :close-on-click-mask="false">
    <div class="drawer-content">
      <h3>遮罩点击已禁用</h3>
      <p>点击遮罩不会关闭此抽屉，请使用下方按钮关闭。</p>
      <u-button @click="visible6 = false" color="primary">关闭抽屉</u-button>
    </div>
  </u-drawer>
</div>

```vue
<template>
  <u-button @click="visible = true" color="primary">打开抽屉</u-button>
  <u-drawer v-model="visible" :close-on-click-mask="false">
    <div>
      <h3>遮罩点击已禁用</h3>
      <p>点击遮罩不会关闭此抽屉。</p>
      <u-button @click="visible = false" color="primary">关闭抽屉</u-button>
    </div>
  </u-drawer>
</template>

<script setup>
  import { ref } from 'vue';
  const visible = ref(false);
</script>
```

## UDrawer API

| 属性名            | 描述              | 类型                          | 默认值  |
| ----------------- | ----------------- | ----------------------------- | ------- |
| modelValue        | 是否显示抽屉      | `boolean`                     | `false` |
| size              | 抽屉尺寸          | `string`                      | `20%`   |
| location          | 抽屉位置          | `'left' \| 'right' \| 'top' \| 'bottom'` | `'left'` |
| zIndex            | 抽屉层级          | `number`                      | `1000`  |
| closeOnClickMask  | 点击遮罩是否关闭  | `boolean`                     | `true`  |

## UDrawer 插槽

| 插槽名  | 描述      |
| ------- | --------- |
| default | 抽屉内容  |

## UDrawer 事件

| 事件名            | 描述              |
| ----------------- | ----------------- |
| update:modelValue | 可见性改变时触发  |

<script setup>
  import { ref } from 'vue';
  const visible1 = ref(false);
  const visible2 = ref(false);
  const visible3 = ref(false);
  const visible4 = ref(false);
  const visible5 = ref(false);
  const visible6 = ref(false);
</script>

<style scoped>
  .demo-section {
    margin-bottom: 24px;
  }

  .drawer-content {
    padding: 16px;
    min-height: 100%;
  }

  .drawer-content h3 {
    margin: 0 0 16px 0;
    padding-bottom: 12px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }

  .drawer-content p {
    margin: 0 0 16px 0;
  }
</style>