# Drawer

A slide-in panel component that slides in from the edge of the screen, ideal for navigation menus, filters, or additional content that doesn't need to be always visible.

## Basic Usage

The simplest drawer usage, slides in from the left by default.

<div class="demo-section">
  <u-button @click="visible1 = true" color="primary">Open Left Drawer</u-button>
  <u-drawer v-model="visible1">
    <div class="drawer-content">
      <h3>Navigation</h3>
      <u-list>
        <u-list-item>Home</u-list-item>
        <u-list-item>Profile</u-list-item>
        <u-list-item>Settings</u-list-item>
        <u-list-item>Help</u-list-item>
      </u-list>
    </div>
  </u-drawer>
</div>

```vue
<template>
  <u-button @click="visible = true" color="primary">Open Drawer</u-button>
  <u-drawer v-model="visible">
    <div>
      <h3>Navigation</h3>
      <u-list>
        <u-list-item>Home</u-list-item>
        <u-list-item>Profile</u-list-item>
      </u-list>
    </div>
  </u-drawer>
</template>

<script setup>
  import { ref } from 'vue';
  const visible = ref(false);
</script>
```

## Custom Size

Set drawer size via `size` prop, supports percentage or pixel values.

<div class="demo-section">
  <u-button @click="visible2 = true" color="success">30% Width Drawer</u-button>
  <u-drawer v-model="visible2" size="30%">
    <div class="drawer-content">
      <h3>30% Width</h3>
      <p>This drawer takes up 30% of the viewport width.</p>
    </div>
  </u-drawer>
</div>

```vue
<template>
  <u-button @click="visible = true" color="success">30% Width Drawer</u-button>
  <u-drawer v-model="visible" size="30%">
    <div>
      <h3>30% Width</h3>
      <p>This drawer takes up 30% of the viewport width.</p>
    </div>
  </u-drawer>
</template>

<script setup>
  import { ref } from 'vue';
  const visible = ref(false);
</script>
```

## Different Positions

Drawer can slide in from four different positions: left, right, top, or bottom.

<div class="demo-section">
  <u-button @click="visible3 = true" color="warning">Right Drawer</u-button>
  <u-button @click="visible4 = true" color="info">Top Drawer</u-button>
  <u-button @click="visible5 = true" color="error">Bottom Drawer</u-button>
  
  <u-drawer v-model="visible3" location="right" size="25%">
    <div class="drawer-content">
      <h3>Right Drawer</h3>
      <p>Slides in from the right side.</p>
    </div>
  </u-drawer>
  
  <u-drawer v-model="visible4" location="top" size="20%">
    <div class="drawer-content">
      <h3>Top Drawer</h3>
      <p>Slides down from the top.</p>
    </div>
  </u-drawer>
  
  <u-drawer v-model="visible5" location="bottom" size="25%">
    <div class="drawer-content">
      <h3>Bottom Drawer</h3>
      <p>Slides up from the bottom.</p>
    </div>
  </u-drawer>
</div>

```vue
<template>
  <u-button @click="rightVisible = true">Right Drawer</u-button>
  <u-button @click="topVisible = true">Top Drawer</u-button>
  <u-button @click="bottomVisible = true">Bottom Drawer</u-button>

  <u-drawer v-model="rightVisible" location="right">
    <div>Right Drawer Content</div>
  </u-drawer>

  <u-drawer v-model="topVisible" location="top">
    <div>Top Drawer Content</div>
  </u-drawer>

  <u-drawer v-model="bottomVisible" location="bottom">
    <div>Bottom Drawer Content</div>
  </u-drawer>
</template>

<script setup>
  import { ref } from 'vue';
  const rightVisible = ref(false);
  const topVisible = ref(false);
  const bottomVisible = ref(false);
</script>
```

## Disable Close on Mask Click

Prevent drawer from closing when clicking the mask layer.

<div class="demo-section">
  <u-button @click="visible6 = true" color="primary">Disable Mask Close</u-button>
  <u-drawer v-model="visible6" :close-on-click-mask="false">
    <div class="drawer-content">
      <h3>Mask Click Disabled</h3>
      <p>Clicking the mask won't close this drawer. Use the button below to close.</p>
      <u-button @click="visible6 = false" color="primary">Close Drawer</u-button>
    </div>
  </u-drawer>
</div>

```vue
<template>
  <u-button @click="visible = true" color="primary">Open Drawer</u-button>
  <u-drawer v-model="visible" :close-on-click-mask="false">
    <div>
      <h3>Mask Click Disabled</h3>
      <p>Clicking the mask won't close this drawer.</p>
      <u-button @click="visible = false" color="primary">Close Drawer</u-button>
    </div>
  </u-drawer>
</template>

<script setup>
  import { ref } from 'vue';
  const visible = ref(false);
</script>
```

## UDrawer API

| Property         | Description                    | Type                                     | Default  |
| ---------------- | ------------------------------ | ---------------------------------------- | -------- |
| modelValue       | Whether to show the drawer     | `boolean`                                | `false`  |
| size             | Drawer size                    | `string`                                 | `240px`  |
| location         | Drawer position                | `'left' \| 'right' \| 'top' \| 'bottom'` | `'left'` |
| zIndex           | Drawer z-index                 | `number`                                 | `1000`   |
| closeOnClickMask | Whether to close on mask click | `boolean`                                | `true`   |

## UDrawer Slots

| Slot    | Description    |
| ------- | -------------- |
| default | Drawer content |

## UDrawer Events

| Event             | Description                     |
| ----------------- | ------------------------------- |
| update:modelValue | Emitted when visibility changes |

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
