# Card

Card component for displaying information content with support for title, text and various content forms.

**Component Composition:**

- `UCard` - Card container component
- `UCardTitle` - Card title component
- `UCardText` - Card text component

## Basic Usage

The simplest card usage with title and text components.

<div class="demo-section">
  <u-card class="basic-card">
    <u-card-title>Basic Card</u-card-title>
    <u-card-text>
      <p>This is a basic card component for displaying related information. Cards support custom styles and layouts.</p>
    </u-card-text>
  </u-card>
</div>

```vue
<template>
  <u-card>
    <u-card-title>Basic Card</u-card-title>
    <u-card-text>
      <p>This is a basic card component.</p>
    </u-card-text>
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
    </u-card>
    <u-card class="grid-card">
      <u-card-title>Permission Settings</u-card-title>
      <u-card-text>
        <p>Configure user roles and permissions for data security.</p>
      </u-card-text>
    </u-card>
    <u-card class="grid-card">
      <u-card-title>Data Statistics</u-card-title>
      <u-card-text>
        <p>View system data statistics reports and analytics charts.</p>
      </u-card-text>
    </u-card>
    <u-card class="grid-card">
      <u-card-title>System Settings</u-card-title>
      <u-card-text>
        <p>Configure system parameters and global settings.</p>
      </u-card-text>
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
    </u-card>

    <u-card>
      <u-card-title>Permission Settings</u-card-title>
      <u-card-text>
        <p>Configure user roles and permissions.</p>
      </u-card-text>
    </u-card>

    <u-card>
      <u-card-title>Data Statistics</u-card-title>
      <u-card-text>
        <p>View system data statistics reports.</p>
      </u-card-text>
    </u-card>

    <u-card>
      <u-card-title>System Settings</u-card-title>
      <u-card-text>
        <p>Configure system parameters and global settings.</p>
      </u-card-text>
    </u-card>
  </div>
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

## Usage with Buttons

Use buttons inside cards for interactive functionality.

<div class="demo-section">
  <u-card class="action-card">
    <u-card-title>Action Card</u-card-title>
    <u-card-text>
      <p>Click the buttons below to perform related actions, supporting multiple interaction scenarios.</p>
    </u-card-text>
    <div class="card-actions">
      <u-button color="primary">Primary Action</u-button>
      <u-button>Secondary Action</u-button>
    </div>
  </u-card>
</div>

```vue
<template>
  <u-card>
    <u-card-title>Action Card</u-card-title>
    <u-card-text>
      <p>Click the buttons below to perform related actions.</p>
    </u-card-text>
    <div class="card-actions">
      <u-button color="primary">Primary Action</u-button>
      <u-button>Secondary Action</u-button>
    </div>
  </u-card>
</template>
```

## Nested Cards

Nest cards inside other cards for hierarchical display.

<div class="demo-section">
  <u-card class="nested-card">
    <u-card-title>Parent Card</u-card-title>
    <u-card-text>
      <p>Below are nested child cards:</p>
      <div class="nested-container">
        <u-card class="child-card">
          <u-card-title>Child Card 1</u-card-title>
          <u-card-text>
            <p>This is the first child card content.</p>
          </u-card-text>
        </u-card>
        <u-card class="child-card">
          <u-card-title>Child Card 2</u-card-title>
          <u-card-text>
            <p>This is the second child card content.</p>
          </u-card-text>
        </u-card>
      </div>
    </u-card-text>
  </u-card>
</div>

```vue
<template>
  <u-card>
    <u-card-title>Parent Card</u-card-title>
    <u-card-text>
      <p>Below are nested child cards:</p>
      <div class="nested-container">
        <u-card>
          <u-card-title>Child Card 1</u-card-title>
          <u-card-text>
            <p>This is the first child card content.</p>
          </u-card-text>
        </u-card>

        <u-card>
          <u-card-title>Child Card 2</u-card-title>
          <u-card-text>
            <p>This is the second child card content.</p>
          </u-card-text>
        </u-card>
      </div>
    </u-card-text>
  </u-card>
</template>
```

## UCard API

| Property | Description            | Type      | Default |
| -------- | ---------------------- | --------- | ------- |
| height   | Card height            | `string`  | -       |
| bordered | Whether to show border | `boolean` | -       |
| shadow   | Whether to show shadow | `boolean` | -       |
| radius   | Border radius          | `string`  | -       |

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

  .height-card {
    overflow: hidden;
  }

  .action-card {
    max-width: 400px;
  }

  .card-actions {
    display: flex;
    gap: 12px;
    padding: 0 16px 16px;
  }

  .nested-card {
    max-width: 600px;
  }

  .nested-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
    margin-top: 12px;
  }

  .child-card {
    background: var(--u-bg-secondary);
  }
</style>
