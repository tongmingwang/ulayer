# Mask

Modal mask layer component for blocking user interaction, with customizable background color and transition animations.

## Basic Usage

The simplest usage with default background color.

<div class="demo-section">
  <u-button @click="visible1 = true" color="primary">Open Mask</u-button>
  <div class="mask-container">
    <u-mask v-model="visible1">
      <div class="mask-center-content">
        <u-card class="mask-card">
          <u-card-title>Mask Content</u-card-title>
          <u-card-text>
            <p>This is a mask layer with content. Click the mask area or button to close.</p>
          </u-card-text>
          <div class="mask-actions">
            <u-button @click="visible1 = false" color="primary">Close</u-button>
          </div>
        </u-card>
      </div>
    </u-mask>
  </div>
</div>

```vue
<template>
  <u-button @click="visible = true" color="primary">Open Mask</u-button>
  <div class="mask-container">
    <u-mask v-model="visible">
      <div class="mask-center-content">
        <u-card>
          <u-card-title>Mask Content</u-card-title>
          <u-card-text>
            <p>This is a mask layer with content.</p>
          </u-card-text>
          <div class="mask-actions">
            <u-button @click="visible = false" color="primary">Close</u-button>
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

## Custom Background Color

Set custom background color via `bg` prop.

<div class="demo-section">
  <u-button @click="visible2 = true" color="success">Open Dark Mask</u-button>
  <div class="mask-container">
    <u-mask v-model="visible2" bg="rgba(0, 0, 0, 0.85)">
      <div class="mask-center-content">
        <u-card class="mask-card">
          <u-card-title>Dark Background</u-card-title>
          <u-card-text>
            <p>This mask has a darker background for stronger visual blocking effect.</p>
          </u-card-text>
          <div class="mask-actions">
            <u-button @click="visible2 = false" color="primary">Close</u-button>
          </div>
        </u-card>
      </div>
    </u-mask>
  </div>
</div>

```vue
<template>
  <u-button @click="visible = true" color="success">Open Dark Mask</u-button>
  <div class="mask-container">
    <u-mask v-model="visible" bg="rgba(0, 0, 0, 0.85)">
      <div class="mask-center-content">
        <u-card>
          <u-card-title>Dark Background</u-card-title>
          <u-card-text>
            <p>This mask has a darker background.</p>
          </u-card-text>
          <div class="mask-actions">
            <u-button @click="visible = false" color="primary">Close</u-button>
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

## Disable Close on Click

Prevent mask from closing when clicking the mask area.

<div class="demo-section">
  <u-button @click="visible3 = true" color="warning">Disable Click Close</u-button>
  <div class="mask-container">
    <u-mask v-model="visible3" :close-on-click="false">
      <div class="mask-center-content">
        <u-card class="mask-card">
          <u-card-title>Disable Click Close</u-card-title>
          <u-card-text>
            <p>Clicking the mask area won't close it. Only the button can close this mask.</p>
          </u-card-text>
          <div class="mask-actions">
            <u-button @click="visible3 = false" color="primary">Close</u-button>
          </div>
        </u-card>
      </div>
    </u-mask>
  </div>
</div>

```vue
<template>
  <u-button @click="visible = true" color="warning">Disable Click Close</u-button>
  <div class="mask-container">
    <u-mask v-model="visible" :close-on-click="false">
      <div class="mask-center-content">
        <u-card>
          <u-card-title>Disable Click Close</u-card-title>
          <u-card-text>
            <p>Clicking the mask area won't close it.</p>
          </u-card-text>
          <div class="mask-actions">
            <u-button @click="visible = false" color="primary">Close</u-button>
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

## Usage with Dialog

Mask layer is commonly used with dialog components.

<div class="demo-section">
  <u-button @click="visible4 = true" color="error">Open Dialog</u-button>
  <div class="mask-container">
    <u-mask v-model="visible4">
      <div class="mask-center-content">
        <u-card class="mask-card dialog-example">
          <u-card-title>User Settings</u-card-title>
          <u-card-text>
            <p>This is an example of a dialog used with a mask layer, demonstrating component collaboration.</p>
          </u-card-text>
          <div class="mask-actions">
            <u-button @click="visible4 = false">Cancel</u-button>
            <u-button @click="visible4 = false" color="primary">Save</u-button>
          </div>
        </u-card>
      </div>
    </u-mask>
  </div>
</div>

```vue
<template>
  <u-button @click="visible = true" color="error">Open Dialog</u-button>
  <div class="mask-container">
    <u-mask v-model="visible">
      <div class="mask-center-content">
        <u-card>
          <u-card-title>User Settings</u-card-title>
          <u-card-text>
            <p>This is an example of a dialog used with a mask layer.</p>
          </u-card-text>
          <div class="mask-actions">
            <u-button @click="visible = false">Cancel</u-button>
            <u-button @click="visible = false" color="primary">Save</u-button>
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

| Property      | Description                     | Type      | Default             |
| ------------- | ------------------------------- | --------- | ------------------ |
| modelValue    | Whether to show the mask        | `boolean` | `false`            |
| closeOnClick  | Whether to close on mask click  | `boolean` | `true`             |
| bg            | Custom background color         | `string`  | `var(--u-mask-bg)` |

## UMask Slots

| Slot     | Description         |
| -------- | ------------------- |
| default  | Content inside mask |

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