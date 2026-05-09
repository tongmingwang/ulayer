# Dialog

Modal dialog component for displaying important information or requiring user confirmation with elegant entrance animations.

## Basic Usage

The simplest dialog usage, centered by default with scale animation.

<div class="demo-section">
  <u-button @click="visible1 = true" color="primary" ref="trigger">Open Dialog</u-button>
  <u-dialog v-model="visible1" :trigger="triggerRef" width="500px">
    <u-card class="dialog-card">
      <u-card-title>Basic Dialog</u-card-title>
      <u-card-text>
        <p>This is a basic dialog that can be closed by clicking the mask or pressing ESC.</p>
      </u-card-text>
      <div class="dialog-actions">
        <u-button @click="visible1 = false" color="primary">OK</u-button>
      </div>
    </u-card>
  </u-dialog>
</div>

```vue
<template>
  <u-button @click="visible = true" color="primary">Open Dialog</u-button>
  <u-dialog v-model="visible">
    <u-card>
      <u-card-title>Basic Dialog</u-card-title>
      <u-card-text>
        <p>This is a basic dialog.</p>
      </u-card-text>
      <div class="dialog-actions">
        <u-button @click="visible = false" color="primary">OK</u-button>
      </div>
    </u-card>
  </u-dialog>
</template>

<script setup>
  import { ref } from 'vue';
  const visible = ref(false);
</script>
```

## Custom Width

Set dialog width via `width` prop.

<div class="demo-section">
  <u-button @click="visible2 = true" color="success">Custom Width</u-button>
  <u-dialog v-model="visible2" width="400px">
    <u-card class="dialog-card">
      <u-card-title>Custom Width</u-card-title>
      <u-card-text>
        <p>This dialog has a width of 400px. You can set any width value as needed.</p>
      </u-card-text>
      <div class="dialog-actions">
        <u-button @click="visible2 = false" color="primary">OK</u-button>
      </div>
    </u-card>
  </u-dialog>
</div>

```vue
<template>
  <u-button @click="visible = true" color="success">Custom Width</u-button>
  <u-dialog v-model="visible" width="400px">
    <u-card>
      <u-card-title>Custom Width</u-card-title>
      <u-card-text>
        <p>This dialog has a width of 400px.</p>
      </u-card-text>
      <div class="dialog-actions">
        <u-button @click="visible = false" color="primary">OK</u-button>
      </div>
    </u-card>
  </u-dialog>
</template>

<script setup>
  import { ref } from 'vue';
  const visible = ref(false);
</script>
```

## Disable Close on Mask Click

Prevent dialog from closing when clicking the mask.

<div class="demo-section">
  <u-button @click="visible3 = true" color="warning">Disable Mask Close</u-button>
  <u-dialog v-model="visible3" :close-on-click="false">
    <u-card class="dialog-card">
      <u-card-title>Disable Mask Close</u-card-title>
      <u-card-text>
        <p>Clicking the mask won't close this dialog. Only the button can close it.</p>
      </u-card-text>
      <div class="dialog-actions">
        <u-button @click="visible3 = false" color="primary">OK</u-button>
      </div>
    </u-card>
  </u-dialog>
</div>

```vue
<template>
  <u-button @click="visible = true" color="warning">
    Disable Mask Close
  </u-button>
  <u-dialog v-model="visible" :close-on-click="false">
    <u-card>
      <u-card-title>Disable Mask Close</u-card-title>
      <u-card-text>
        <p>Clicking the mask won't close this dialog.</p>
      </u-card-text>
      <div class="dialog-actions">
        <u-button @click="visible = false" color="primary">OK</u-button>
      </div>
    </u-card>
  </u-dialog>
</template>

<script setup>
  import { ref } from 'vue';
  const visible = ref(false);
</script>
```

## Fullscreen Dialog

Display dialog in fullscreen mode with slide-up animation.

<div class="demo-section">
  <u-button @click="visible4 = true" color="error">Fullscreen Dialog</u-button>
  <u-dialog v-model="visible4" fullscreen>
    <u-card class="dialog-card fullscreen-card">
      <u-card-title>Fullscreen Mode</u-card-title>
      <u-card-text>
        <p>This is a fullscreen dialog that occupies the entire viewport, suitable for displaying large content.</p>
      </u-card-text>
      <div class="dialog-actions">
        <u-button @click="visible4 = false" color="primary">Close</u-button>
      </div>
    </u-card>
  </u-dialog>
</div>

```vue
<template>
  <u-button @click="visible = true" color="error">Fullscreen Dialog</u-button>
  <u-dialog v-model="visible" fullscreen>
    <u-card>
      <u-card-title>Fullscreen Mode</u-card-title>
      <u-card-text>
        <p>This is a fullscreen dialog.</p>
      </u-card-text>
      <div class="dialog-actions">
        <u-button @click="visible = false" color="primary">Close</u-button>
      </div>
    </u-card>
  </u-dialog>
</template>

<script setup>
  import { ref } from 'vue';
  const visible = ref(false);
</script>
```

## Confirm Dialog

Standard confirmation dialog pattern with button group.

<div class="demo-section">
  <u-button @click="visible5 = true" color="primary">Confirm Dialog</u-button>
  <u-dialog v-model="visible5">
    <u-card class="dialog-card">
      <u-card-title>Confirm Delete</u-card-title>
      <u-card-text>
        <p>Are you sure you want to delete this record? This action cannot be undone.</p>
      </u-card-text>
      <div class="dialog-actions">
        <u-button @click="visible5 = false">Cancel</u-button>
        <u-button @click="visible5 = false" color="error">Delete</u-button>
      </div>
    </u-card>
  </u-dialog>
</div>

```vue
<template>
  <u-button @click="visible = true" color="primary">Confirm Dialog</u-button>
  <u-dialog v-model="visible">
    <u-card>
      <u-card-title>Confirm Delete</u-card-title>
      <u-card-text>
        <p>
          Are you sure you want to delete this record? This action cannot be
          undone.
        </p>
      </u-card-text>
      <div class="dialog-actions">
        <u-button @click="visible = false">Cancel</u-button>
        <u-button @click="visible = false" color="error">Delete</u-button>
      </div>
    </u-card>
  </u-dialog>
</template>

<script setup>
  import { ref } from 'vue';
  const visible = ref(false);
</script>
```

## UDialog API

| Property     | Description                    | Type          | Default |
| ------------ | ------------------------------ | ------------- | ------- |
| modelValue   | Whether to show the dialog     | `boolean`     | `false` |
| width        | Dialog width                   | `string`      | `90%`   |
| fullscreen   | Whether to use fullscreen mode | `boolean`     | `false` |
| closeOnClick | Whether to close on mask click | `boolean`     | `true`  |
| closeOnEsc   | Whether to close on ESC key    | `boolean`     | `true`  |
| trigger      | Trigger element reference      | `HTMLElement` | -       |

## UDialog Slots

| Slot    | Description    |
| ------- | -------------- |
| default | Dialog content |

## UDialog Events

| Event             | Description                     |
| ----------------- | ------------------------------- |
| update:modelValue | Emitted when visibility changes |
| close             | Emitted when dialog closes      |

<script setup>
  import { ref,useTemplateRef } from 'vue';
  const triggerRef = useTemplateRef('trigger');
  const visible1 = ref(false);
  const visible2 = ref(false);
  const visible3 = ref(false);
  const visible4 = ref(false);
  const visible5 = ref(false);
</script>

<style scoped>
  .demo-section {
    margin-bottom: 24px;
  }

  .dialog-card {
    max-width: 100%;
  }

  .fullscreen-card {
    height: 100%;
    border-radius: 16px 16px 0 0;
    display: flex;
    flex-direction: column;
  }

  .fullscreen-card .u-card-title {
    flex-shrink: 0;
  }

  .fullscreen-card .u-card_text {
    flex: 1;
    overflow-y: auto;
  }

  .dialog-actions {
    display: flex;
    justify-content: flex-end;
    gap: 12px;
    padding: 12px 16px 16px;
  }

  .dialog-actions u-button:last-child {
    margin-left: auto;
  }
</style>
