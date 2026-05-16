# Dropdown

Dropdown menu component that supports hover, click, and right-click triggers, with edge-aware auto-flip positioning.

## Basic Usage

Click trigger by default, wrap any element as the dropdown trigger.

<div class="demo-section">
  <u-dropdown>
    <u-button>Click Me</u-button>
    <template #content>
      <u-dropdown-item value="1">Action 1</u-dropdown-item>
      <u-dropdown-item value="2">Action 2</u-dropdown-item>
      <u-dropdown-item value="3">Action 3</u-dropdown-item>
    </template>
  </u-dropdown>
</div>

```vue
<template>
  <u-dropdown>
    <u-button>Click Me</u-button>
    <template #content>
      <u-dropdown-item value="1">Action 1</u-dropdown-item>
      <u-dropdown-item value="2">Action 2</u-dropdown-item>
      <u-dropdown-item value="3">Action 3</u-dropdown-item>
    </template>
  </u-dropdown>
</template>
```

## Trigger Modes

Support `click`, `hover`, and `contextmenu` triggers. You can also combine multiple triggers using an array.

### Hover Trigger

Dropdown shows on mouse enter and hides on mouse leave (both trigger and content panel).

<div class="demo-section">
  <u-dropdown trigger="hover">
    <u-button color="success">Hover Me</u-button>
    <template #content>
      <u-dropdown-item value="a">Option A</u-dropdown-item>
      <u-dropdown-item value="b">Option B</u-dropdown-item>
      <u-dropdown-item value="c">Option C</u-dropdown-item>
    </template>
  </u-dropdown>
</div>

```vue
<template>
  <u-dropdown trigger="hover">
    <u-button color="success">Hover Me</u-button>
    <template #content>
      <u-dropdown-item value="a">Option A</u-dropdown-item>
      <u-dropdown-item value="b">Option B</u-dropdown-item>
      <u-dropdown-item value="c">Option C</u-dropdown-item>
    </template>
  </u-dropdown>
</template>
```

### Contextmenu Trigger

Dropdown appears at the mouse position on right-click.

<div class="demo-section">
  <u-dropdown trigger="contextmenu">
    <u-button color="warning">Right Click Me</u-button>
    <template #content>
      <u-dropdown-item value="copy">Copy</u-dropdown-item>
      <u-dropdown-item value="paste">Paste</u-dropdown-item>
      <u-dropdown-item value="cut" color="error">Cut</u-dropdown-item>
    </template>
  </u-dropdown>
</div>

```vue
<template>
  <u-dropdown trigger="contextmenu">
    <u-button color="warning">Right Click Me</u-button>
    <template #content>
      <u-dropdown-item value="copy">Copy</u-dropdown-item>
      <u-dropdown-item value="paste">Paste</u-dropdown-item>
      <u-dropdown-item value="cut" color="error">Cut</u-dropdown-item>
    </template>
  </u-dropdown>
</template>
```

### Combined Triggers

Use an array to enable multiple triggers simultaneously. When hover opens the dropdown, clicking "pins" it open (mouse leave won't close it), clicking again closes it.

<div class="demo-section">
  <u-dropdown :trigger="['hover', 'click']">
    <u-button color="primary">Hover or Click</u-button>
    <template #content>
      <u-dropdown-item value="1">Hover opens, click pins</u-dropdown-item>
      <u-dropdown-item value="2">Click again to close</u-dropdown-item>
      <u-dropdown-item value="3">Item 3</u-dropdown-item>
    </template>
  </u-dropdown>
</div>

```vue
<template>
  <u-dropdown :trigger="['hover', 'click']">
    <u-button color="primary">Hover or Click</u-button>
    <template #content>
      <u-dropdown-item value="1">Hover opens, click pins</u-dropdown-item>
      <u-dropdown-item value="2">Click again to close</u-dropdown-item>
    </template>
  </u-dropdown>
</template>
```

## Items Prop

Use the `items` prop for a declarative approach instead of the content slot.

<div class="demo-section">
  <u-dropdown
    :items="[
      { label: 'New File', value: 'new' },
      { label: 'Open File', value: 'open' },
      { label: 'Save', value: 'save', divided: true },
      { label: 'Save As', value: 'saveas' },
    ]">
    <u-button color="error">File Menu</u-button>
  </u-dropdown>
</div>

```vue
<template>
  <u-dropdown
    :items="[
      { label: 'New File', value: 'new' },
      { label: 'Open File', value: 'open' },
      { label: 'Save', value: 'save', divided: true },
      { label: 'Save As', value: 'saveas' },
    ]">
    <u-button>File Menu</u-button>
  </u-dropdown>
</template>
```

## Item Colors

Set different color themes for dropdown items via `color` prop.

<div class="demo-section">
  <u-dropdown trigger="hover">
    <u-button color="info">Color Items</u-button>
    <template #content>
      <u-dropdown-item value="profile" color="primary">Profile</u-dropdown-item>
      <u-dropdown-item value="settings" color="success">Settings</u-dropdown-item>
      <u-dropdown-item value="warning" color="warning">Warning</u-dropdown-item>
      <u-dropdown-item value="logout" color="error" divided>Logout</u-dropdown-item>
    </template>
  </u-dropdown>
</div>

```vue
<template>
  <u-dropdown trigger="hover">
    <u-button>Color Items</u-button>
    <template #content>
      <u-dropdown-item value="profile" color="primary">Profile</u-dropdown-item>
      <u-dropdown-item value="settings" color="success">Settings</u-dropdown-item>
      <u-dropdown-item value="warning" color="warning">Warning</u-dropdown-item>
      <u-dropdown-item value="logout" color="error" divided>Logout</u-dropdown-item>
    </template>
  </u-dropdown>
</template>
```

## Divided & Disabled

Use `divided` to show a separator line and `disabled` to disable an item.

<div class="demo-section">
  <u-dropdown>
    <u-button>Menu</u-button>
    <template #content>
      <u-dropdown-item value="1">Action 1</u-dropdown-item>
      <u-dropdown-item value="2">Action 2</u-dropdown-item>
      <u-dropdown-item value="3" disabled>Disabled</u-dropdown-item>
      <u-dropdown-item value="4" divided>Action 4</u-dropdown-item>
    </template>
  </u-dropdown>
</div>

```vue
<template>
  <u-dropdown>
    <u-button>Menu</u-button>
    <template #content>
      <u-dropdown-item value="1">Action 1</u-dropdown-item>
      <u-dropdown-item value="2">Action 2</u-dropdown-item>
      <u-dropdown-item value="3" disabled>Disabled</u-dropdown-item>
      <u-dropdown-item value="4" divided>Action 4</u-dropdown-item>
    </template>
  </u-dropdown>
</template>
```

## Placement

Set popup direction via `placement` prop. The dropdown automatically flips when it hits the viewport edge.

<div class="demo-section">
  <u-dropdown placement="top-start">
    <u-button>Drop Up</u-button>
    <template #content>
      <u-dropdown-item value="1">Item 1</u-dropdown-item>
      <u-dropdown-item value="2">Item 2</u-dropdown-item>
    </template>
  </u-dropdown>
</div>

```vue
<template>
  <u-dropdown placement="top-start">
    <u-button>Drop Up</u-button>
    <template #content>
      <u-dropdown-item value="1">Item 1</u-dropdown-item>
      <u-dropdown-item value="2">Item 2</u-dropdown-item>
    </template>
  </u-dropdown>
</template>
```

## Custom Width

Set dropdown content width via `width` prop.

<div class="demo-section">
  <u-dropdown width="200px" trigger="hover">
    <u-button color="info">Wide Dropdown</u-button>
    <template #content>
      <u-dropdown-item value="1">Item with long content</u-dropdown-item>
      <u-dropdown-item value="2">Another item</u-dropdown-item>
    </template>
  </u-dropdown>
</div>

```vue
<template>
  <u-dropdown width="200px" trigger="hover">
    <u-button>Wide Dropdown</u-button>
    <template #content>
      <u-dropdown-item value="1">Item with long content</u-dropdown-item>
      <u-dropdown-item value="2">Another item</u-dropdown-item>
    </template>
  </u-dropdown>
</template>
```

## Disabled State

Disable the entire dropdown via `disabled` prop.

<div class="demo-section">
  <u-dropdown disabled>
    <u-button disabled>Disabled Dropdown</u-button>
    <template #content>
      <u-dropdown-item value="1">Should not appear</u-dropdown-item>
    </template>
  </u-dropdown>
</div>

```vue
<template>
  <u-dropdown disabled>
    <u-button disabled>Disabled Dropdown</u-button>
    <template #content>
      <u-dropdown-item value="1">Should not appear</u-dropdown-item>
    </template>
  </u-dropdown>
</template>
```

## Contextmenu on Area

Right-click anywhere within an area to show the dropdown.

<div class="demo-section">
  <u-dropdown trigger="contextmenu">
    <div class="context-area">Right-click anywhere in this area</div>
    <template #content>
      <u-dropdown-item value="refresh">Refresh</u-dropdown-item>
      <u-dropdown-item value="inspect">Inspect</u-dropdown-item>
      <u-dropdown-item value="source" divided>View Source</u-dropdown-item>
    </template>
  </u-dropdown>
</div>

```vue
<template>
  <u-dropdown trigger="contextmenu">
    <div class="context-area">Right-click anywhere in this area</div>
    <template #content>
      <u-dropdown-item value="refresh">Refresh</u-dropdown-item>
      <u-dropdown-item value="inspect">Inspect</u-dropdown-item>
      <u-dropdown-item value="source" divided>View Source</u-dropdown-item>
    </template>
  </u-dropdown>
</template>

<style scoped>
.context-area {
  border: 2px dashed var(--u-border);
  padding: 40px;
  text-align: center;
  border-radius: 8px;
}
</style>
```

## UDropdown API

| Property   | Description                       | Type                                                         | Default          |
| ---------- | --------------------------------- | ------------------------------------------------------------ | ---------------- |
| trigger    | Trigger mode(s)                   | `'hover' \| 'click' \| 'contextmenu' \| Array<...>`         | `'click'`        |
| disabled   | Whether to disable the dropdown   | `boolean`                                                    | `false`          |
| placement  | Popup placement                   | `'bottom' \| 'top' \| 'bottom-start' \| 'top-start'`        | `'bottom-start'` |
| width      | Dropdown content width            | `string \| number`                                           | -                |
| offsetY    | Vertical offset from trigger (px) | `number`                                                     | `4`              |
| delay      | Hover delay (ms)                  | `number`                                                     | `150`            |
| closeOnClick | Whether to close on item click  | `boolean`                                                    | `true`           |
| bgColor    | Background color                  | `string`                                                     | `'var(--u-bg)'`  |
| items      | Dropdown items (declarative)      | `Array<UDropdownItemOption>`                                 | -                |

## UDropdown Events

| Event          | Description                    | Type       |
| -------------- | ------------------------------ | ---------- |
| visibleChange  | Triggered when visibility changes | `(visible: boolean) => void` |
| select         | Triggered when an item is selected | `(value: string \| number) => void` |

## UDropdown Slots

| Slot    | Description          |
| ------- | -------------------- |
| default | Trigger element      |
| content | Dropdown menu content |

## UDropdownItem API

| Property | Description         | Type                                                | Default |
| -------- | ------------------- | --------------------------------------------------- | ------- |
| value    | Item value          | `string \| number`                                  | -       |
| disabled | Whether to disable  | `boolean`                                           | `false` |
| color    | Color theme         | `'primary' \| 'success' \| 'warning' \| 'error'`   | -       |
| divided  | Show top divider    | `boolean`                                           | `false` |

## UDropdownItem Slots

| Slot    | Description  |
| ------- | ------------ |
| default | Item content |

<script setup>
  import { ref } from 'vue';
</script>

<style scoped>
  .demo-section {
    margin-bottom: 24px;
  }

  .context-area {
    border: 2px dashed var(--u-border);
    padding: 40px;
    text-align: center;
    border-radius: 8px;
  }
</style>
