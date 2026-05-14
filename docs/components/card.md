# Card

Card component for displaying information content with support for title, text, actions and various content forms.

**Component Composition:**

- `UCard` - Card container component
- `UCardTitle` - Card title component
- `UCardText` - Card text component
- `UCardAction` - Card action area component

## Basic Usage

The simplest card usage with title, text and action components.

<div class="demo-section">
  <u-card class="basic-card">
    <u-card-title>Basic Card</u-card-title>
    <u-card-text>
      <p>This is a basic card component for displaying related information. Cards support custom styles and layouts.</p>
    </u-card-text>
    <u-card-action>
      <u-button>Close</u-button>
    </u-card-action>
  </u-card>
</div>

```vue
<template>
  <u-card>
    <u-card-title>Basic Card</u-card-title>
    <u-card-text>
      <p>This is a basic card component.</p>
    </u-card-text>
    <u-card-action>
      <u-button>Close</u-button>
    </u-card-action>
  </u-card>
</template>
```

## Card Grid

Display multiple cards in a grid layout.

<div class="demo-section">
  <div class="card-grid">
    <u-card class="grid-card">
      <u-card-title>User Management</u-card-title>
      <u-card-text>
        <p>Manage system user information with CRUD operations.</p>
      </u-card-text>
      <u-card-action>
        <u-button color="primary">View</u-button>
      </u-card-action>
    </u-card>
    <u-card class="grid-card">
      <u-card-title>Permission Settings</u-card-title>
      <u-card-text>
        <p>Configure user roles and permissions for data security.</p>
      </u-card-text>
      <u-card-action>
        <u-button color="primary">View</u-button>
      </u-card-action>
    </u-card>
    <u-card class="grid-card">
      <u-card-title>Data Statistics</u-card-title>
      <u-card-text>
        <p>View system data statistics reports and analytics charts.</p>
      </u-card-text>
      <u-card-action>
        <u-button color="primary">View</u-button>
      </u-card-action>
    </u-card>
    <u-card class="grid-card">
      <u-card-title>System Settings</u-card-title>
      <u-card-text>
        <p>Configure system parameters and global settings.</p>
      </u-card-text>
      <u-card-action>
        <u-button color="primary">View</u-button>
      </u-card-action>
    </u-card>
  </div>
</div>

```vue
<template>
  <div class="card-grid">
    <u-card>
      <u-card-title>User Management</u-card-title>
      <u-card-text>
        <p>Manage system user information.</p>
      </u-card-text>
      <u-card-action>
        <u-button color="primary">View</u-button>
      </u-card-action>
    </u-card>
  </div>
</template>
```

## Border & Shadow

Control card border and shadow via `bordered` and `shadow` props.

<div class="demo-section">
  <div class="card-row">
    <u-card class="feature-card">
      <u-card-title>Shadow (Default)</u-card-title>
      <u-card-text>
        <p>Card with shadow enabled by default.</p>
      </u-card-text>
    </u-card>
    <u-card class="feature-card" bordered :shadow="false">
      <u-card-title>Border Only</u-card-title>
      <u-card-text>
        <p>Card with border enabled and shadow disabled.</p>
      </u-card-text>
    </u-card>
  </div>
</div>

```vue
<template>
  <!-- Default: shadow enabled, no border -->
  <u-card>
    <u-card-title>Shadow</u-card-title>
    <u-card-text>Card with shadow.</u-card-text>
  </u-card>

  <!-- Border enabled, shadow disabled -->
  <u-card bordered :shadow="false">
    <u-card-title>Border Only</u-card-title>
    <u-card-text>Card with border only.</u-card-text>
  </u-card>
</template>
```

## Custom Height

Set card height via `height` prop.

<div class="demo-section">
  <div class="card-row">
    <u-card class="height-card" height="120px">
      <u-card-title>Fixed Height</u-card-title>
      <u-card-text>
        <p>This card has a height of 120px.</p>
      </u-card-text>
    </u-card>
    <u-card class="height-card" height="180px">
      <u-card-title>Taller Card</u-card-title>
      <u-card-text>
        <p>This card has a height of 180px and can hold more content.</p>
      </u-card-text>
    </u-card>
  </div>
</div>

```vue
<template>
  <div class="card-row">
    <u-card height="120px">
      <u-card-title>Fixed Height</u-card-title>
      <u-card-text>
        <p>This card has a height of 120px.</p>
      </u-card-text>
    </u-card>

    <u-card height="180px">
      <u-card-title>Taller Card</u-card-title>
      <u-card-text>
        <p>This card has a height of 180px.</p>
      </u-card-text>
    </u-card>
  </div>
</template>
```

## Custom Radius

Set card border radius via `radius` prop.

<div class="demo-section">
  <div class="card-row">
    <u-card class="feature-card" radius="12px">
      <u-card-title>Large Radius</u-card-title>
      <u-card-text>
        <p>This card has a border radius of 12px.</p>
      </u-card-text>
    </u-card>
    <u-card class="feature-card" radius="0px">
      <u-card-title>No Radius</u-card-title>
      <u-card-text>
        <p>This card has no border radius.</p>
      </u-card-text>
    </u-card>
  </div>
</div>

```vue
<template>
  <u-card radius="12px">
    <u-card-title>Large Radius</u-card-title>
    <u-card-text>This card has a 12px border radius.</u-card-text>
  </u-card>

  <u-card radius="0px">
    <u-card-title>No Radius</u-card-title>
    <u-card-text>This card has no border radius.</u-card-text>
  </u-card>
</template>
```

## Card Color

Set card background color via `color` prop. Supports preset color types (`primary`, `success`, `warning`, `error`) and custom color values.

<div class="demo-section">
  <div class="card-row">
    <u-card class="feature-card" color="primary">
      <u-card-title>Primary</u-card-title>
      <u-card-text>
        <p>Card with primary color background.</p>
      </u-card-text>
    </u-card>
    <u-card class="feature-card" color="#e8f5e9">
      <u-card-title>Custom Color</u-card-title>
      <u-card-text>
        <p>Card with custom hex color background.</p>
      </u-card-text>
    </u-card>
  </div>
</div>

```vue
<template>
  <!-- Preset color -->
  <u-card color="primary">
    <u-card-title>Primary</u-card-title>
    <u-card-text>Card with primary color.</u-card-text>
  </u-card>

  <!-- Custom color -->
  <u-card color="#e8f5e9">
    <u-card-title>Custom Color</u-card-title>
    <u-card-text>Card with custom hex color.</u-card-text>
  </u-card>
</template>
```

## UCard API

| Property | Description            | Type                                | Default |
| -------- | ---------------------- | ----------------------------------- | ------- |
| bordered | Whether to show border | `boolean`                           | `false` |
| shadow   | Whether to show shadow | `boolean`                           | `true`  |
| radius   | Border radius          | `string`                            | `'4px'` |
| height   | Card height            | `string`                            | -       |
| color    | Card background color  | `'primary' \| 'success' \| 'warning' \| 'error' \| string` | -       |

## UCard Slots

| Slot    | Description  |
| ------- | ------------ |
| default | Card content |

## UCardTitle API

No properties

## UCardTitle Slots

| Slot    | Description   |
| ------- | ------------- |
| default | Title content |

## UCardText API

No properties

## UCardText Slots

| Slot    | Description  |
| ------- | ------------ |
| default | Text content |

## UCardAction API

No properties

## UCardAction Slots

| Slot    | Description     |
| ------- | --------------- |
| default | Action content  |

<style scoped>
  .demo-section {
    margin-bottom: 24px;
  }

  .basic-card {
    max-width: 400px;
  }

  .card-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
  }

  .grid-card {
    transition: transform 0.2s, box-shadow 0.2s;
  }

  .grid-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
  }

  .card-row {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }

  .feature-card {
    overflow: hidden;
  }

  .height-card {
    overflow: hidden;
  }
</style>
