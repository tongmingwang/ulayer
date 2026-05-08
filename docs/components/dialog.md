# Dialog

A modal dialog component for displaying important information or requiring user confirmation.

**Dependencies:**

- `UMask` - Mask overlay component

## Basic Usage

The simplest dialog usage.

<div class="demo-section">
  <u-button @click="visible1 = true" color="primary">Open Dialog</u-button>
  <u-dialog :visible="visible1" @update:visible="visible1 = false">
    <div class="dialog-content">
      <h3>Basic Dialog</h3>
      <p>This is a basic dialog with content.</p>
      <u-button @click="visible1 = false" color="primary">OK</u-button>
    </div>
  </u-dialog>
</div>

```vue
<template>
  <u-button @click="visible = true" color="primary">Open Dialog</u-button>
  <u-dialog :visible="visible" @update:visible="visible = false">
    <div class="dialog-content">
      <h3>Basic Dialog</h3>
      <p>This is a basic dialog with content.</p>
      <u-button @click="visible = false" color="primary">OK</u-button>
    </div>
  </u-dialog>
</template>

<script setup>
  import { ref } from 'vue';
  const visible = ref(false);
</script>
```

## Close on Click Mask

Close dialog when clicking on the mask overlay.

<div class="demo-section">
  <u-button @click="visible2 = true" color="success">Click Mask to Close</u-button>
  <u-dialog
    :visible="visible2"
    close-on-click
    @update:visible="visible2 = false">
    <div class="dialog-content">
      <h3>Close on Click</h3>
      <p>Click on the mask area outside to close this dialog.</p>
    </div>
  </u-dialog>
</div>

```vue
<template>
  <u-button @click="visible = true" color="success">
    Click Mask to Close
  </u-button>
  <u-dialog :visible="visible" close-on-click @update:visible="visible = false">
    <div class="dialog-content">
      <h3>Close on Click</h3>
      <p>Click on the mask area outside to close this dialog.</p>
    </div>
  </u-dialog>
</template>

<script setup>
  import { ref } from 'vue';
  const visible = ref(false);
</script>
```

## Close on Escape

Close dialog when pressing Escape key.

<div class="demo-section">
  <u-button @click="visible3 = true" color="warning">Press ESC to Close</u-button>
  <u-dialog
    :visible="visible3"
    close-on-esc
    @update:visible="visible3 = false">
    <div class="dialog-content">
      <h3>Close on ESC</h3>
      <p>Press the Escape key to close this dialog.</p>
      <u-button @click="visible3 = false" color="primary">OK</u-button>
    </div>
  </u-dialog>
</div>

```vue
<template>
  <u-button @click="visible = true" color="warning">
    Press ESC to Close
  </u-button>
  <u-dialog :visible="visible" close-on-esc @update:visible="visible = false">
    <div class="dialog-content">
      <h3>Close on ESC</h3>
      <p>Press the Escape key to close this dialog.</p>
      <u-button @click="visible = false" color="primary">OK</u-button>
    </div>
  </u-dialog>
</template>

<script setup>
  import { ref } from 'vue';
  const visible = ref(false);
</script>
```

## Custom Width

Set custom dialog width via `width` attribute.

<div class="demo-section">
  <u-button @click="visible4 = true" color="error">Custom Width</u-button>
  <u-dialog
    :visible="visible4"
    width="400px"
    @update:visible="visible4 = false">
    <div class="dialog-content">
      <h3>Custom Width</h3>
      <p>This dialog has a custom width of 400px.</p>
      <u-button @click="visible4 = false" color="primary">Confirm</u-button>
    </div>
  </u-dialog>
</div>

```vue
<template>
  <u-button @click="visible = true" color="error">Custom Width</u-button>
  <u-dialog :visible="visible" width="400px" @update:visible="visible = false">
    <div class="dialog-content">
      <h3>Custom Width</h3>
      <p>This dialog has a custom width of 400px.</p>
      <u-button @click="visible = false" color="primary">Confirm</u-button>
    </div>
  </u-dialog>
</template>

<script setup>
  import { ref } from 'vue';
  const visible = ref(false);
</script>
```

## Fullscreen Dialog

Display dialog in fullscreen mode.

<div class="demo-section">
  <u-button @click="visible5 = true" color="primary">Fullscreen Dialog</u-button>
  <u-dialog
    :visible="visible5"
    fullscreen
    @update:visible="visible5 = false">
    <div class="dialog-content">
      <h3>Fullscreen</h3>
      <p>This is a fullscreen dialog that takes up the entire viewport.</p>
      <u-button @click="visible5 = false" color="primary">Close</u-button>
    </div>
  </u-dialog>
</div>

```vue
<template>
  <u-button @click="visible = true" color="primary">Fullscreen Dialog</u-button>
  <u-dialog :visible="visible" fullscreen @update:visible="visible = false">
    <div class="dialog-content">
      <h3>Fullscreen</h3>
      <p>This is a fullscreen dialog that takes up the entire viewport.</p>
      <u-button @click="visible = false" color="primary">Close</u-button>
    </div>
  </u-dialog>
</template>

<script setup>
  import { ref } from 'vue';
  const visible = ref(false);
</script>
```

## UDialog API

| Attribute    | Description                 | Type      | Default |
| ------------ | --------------------------- | --------- | ------- |
| visible      | Whether visible             | `boolean` | `false` |
| width        | Dialog width                | `string`  | `90%`   |
| closeOnClick | Whether close on mask click | `boolean` | `true`  |
| closeOnEsc   | Whether close on Escape key | `boolean` | `true`  |
| fullscreen   | Whether fullscreen mode     | `boolean` | `false` |

## UDialog Slots

| Slot    | Description    |
| ------- | -------------- |
| default | Dialog content |

## UDialog Events

| Event          | Description                     |
| -------------- | ------------------------------- |
| update:visible | Trigger when visibility changes |
| close          | Trigger when dialog closes      |

<script setup>
  import { ref } from 'vue';
  const visible1 = ref(false);
  const visible2 = ref(false);
  const visible3 = ref(false);
  const visible4 = ref(false);
  const visible5 = ref(false);
</script>

<style scoped>
  .demo-section {
    margin-bottom: 16px;
  }
</style>
