# Mask

A modal overlay component for blocking user interactions.

## Basic Usage

The simplest usage with default background color.

<div class="demo-section">
  <u-button @click="visible1 = true" color="primary">Open Mask</u-button>
  <u-mask :visible="visible1" @update:visible="visible1 = false">
    <div class="mask-content">
      <h3>Mask Content</h3>
      <p>This is a mask overlay with content.</p>
      <u-button @click="visible1 = false" color="primary">Close</u-button>
    </div>
  </u-mask>
</div>

```vue
<template>
  <u-button @click="visible = true" color="primary">Open Mask</u-button>
  <u-mask :visible="visible" @update:visible="visible = false">
    <div class="mask-content">
      <h3>Mask Content</h3>
      <p>This is a mask overlay with content.</p>
      <u-button @click="visible = false" color="primary">Close</u-button>
    </div>
  </u-mask>
</template>

<script setup>
  import { ref } from 'vue';
  const visible = ref(false);
</script>
```

## Custom Background Color

Set custom background color via `bg` attribute.

<div class="demo-section">
  <u-button @click="visible2 = true" color="success">Open Custom Mask</u-button>
  <u-mask :visible="visible2" bg="rgba(0, 0, 0, 0.8)" @update:visible="visible2 = false">
    <div class="mask-content">
      <h3>Custom Background</h3>
      <p>This mask has a darker background.</p>
      <u-button @click="visible2 = false" color="primary">Close</u-button>
    </div>
  </u-mask>
</div>

```vue
<template>
  <u-button @click="visible = true" color="success">Open Custom Mask</u-button>
  <u-mask
    :visible="visible"
    bg="rgba(0, 0, 0, 0.8)"
    @update:visible="visible = false">
    <div class="mask-content">
      <h3>Custom Background</h3>
      <p>This mask has a darker background.</p>
      <u-button @click="visible = false" color="primary">Close</u-button>
    </div>
  </u-mask>
</template>

<script setup>
  import { ref } from 'vue';
  const visible = ref(false);
</script>
```

## Close on Click

Close mask when clicking on the overlay via `closeOnClick` attribute.

<div class="demo-section">
  <u-button @click="visible3 = true" color="warning">Click Mask to Close</u-button>
  <u-mask :visible="visible3" close-on-click @update:visible="visible3 = false">
    <div class="mask-content">
      <h3>Click Outside to Close</h3>
      <p>Click on the mask area to close.</p>
    </div>
  </u-mask>
</div>

```vue
<template>
  <u-button @click="visible = true" color="warning">
    Click Mask to Close
  </u-button>
  <u-mask :visible="visible" close-on-click @update:visible="visible = false">
    <div class="mask-content">
      <h3>Click Outside to Close</h3>
      <p>Click on the mask area to close.</p>
    </div>
  </u-mask>
</template>

<script setup>
  import { ref } from 'vue';
  const visible = ref(false);
</script>
```

## Close on Escape

Close mask when pressing Escape key via `closeOnEsc` attribute.

<div class="demo-section">
  <u-button @click="visible4 = true" color="error">Press ESC to Close</u-button>
  <u-mask :visible="visible4" close-on-esc @update:visible="visible4 = false">
    <div class="mask-content">
      <h3>Press ESC to Close</h3>
      <p>Press the Escape key to close this mask.</p>
      <u-button @click="visible4 = false" color="primary">Close</u-button>
    </div>
  </u-mask>
</div>

```vue
<template>
  <u-button @click="visible = true" color="error">Press ESC to Close</u-button>
  <u-mask :visible="visible" close-on-esc @update:visible="visible = false">
    <div class="mask-content">
      <h3>Press ESC to Close</h3>
      <p>Press the Escape key to close this mask.</p>
      <u-button @click="visible = false" color="primary">Close</u-button>
    </div>
  </u-mask>
</template>

<script setup>
  import { ref } from 'vue';
  const visible = ref(false);
</script>
```

## UMask API

| Attribute    | Description                 | Type      | Default            |
| ------------ | --------------------------- | --------- | ------------------ |
| visible      | Whether visible             | `boolean` | `false`            |
| closeOnClick | Whether close on mask click | `boolean` | `true`             |
| closeOnEsc   | Whether close on Escape key | `boolean` | `true`             |
| bg           | Custom background color     | `string`  | `var(--u-mask-bg)` |

## UMask Slots

| Slot    | Description                        |
| ------- | ---------------------------------- |
| default | Content to display inside the mask |

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
