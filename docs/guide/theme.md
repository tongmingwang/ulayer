# Theme

ume-ui provides a complete theme customization system based on CSS variables. All variables are defined in `var.css` and can be overridden to customize the theme.

## Primary Colors

```css
--u-primary-light-hover: #e3f2fd;
--u-primary-light: #bbdefb;
--u-primary-light-active: #90caf9;
--u-primary-hover: #1976d2;
--u-primary: #1e88e5;
--u-primary-active: #0d47a1;
```

## Success Colors

```css
--u-success-light-hover: #e8f5e9;
--u-success-light: #c9e7c9;
--u-success-light-active: #ade6af;
--u-success-hover: #2e7d32;
--u-success: #388e3c;
--u-success-active: #1b5e20;
```

## Warning Colors

```css
--u-warning-light-hover: #fff3e0;
--u-warning-light: #fdeed6;
--u-warning-light-active: #eed1a7;
--u-warning-hover: #e65100;
--u-warning: #ed6c02;
--u-warning-active: #bf360c;
```

## Error Colors

```css
--u-error-light-hover: #ffebee;
--u-error-light: #fac8c8;
--u-error-light-active: #f0b4b4;
--u-error-hover: #c62828;
--u-error: #d32f2f;
--u-error-active: #b71c1c;
```

## Background & Text Colors

```css
--u-bg: #fff;
--u-container-bg: #fafafa;
--u-rgb: 0, 0, 0;
--u-text-1: rgba(0, 0, 0, 0.87);
--u-text-2: rgba(0, 0, 0, 0.6);
--u-text-3: rgba(0, 0, 0, 0.38);
--u-text-white: #fff;
--u-border: rgba(0, 0, 0, 0.12);
```

## Size Variables

```css
--u-mini: 24px;
--u-small: 28px;
--u-medium: 36px;
--u-large: 48px;
```

## Dark Theme

When `data-ume-ui-theme="dark"` or class `dark` is applied:

```css
/* Background & Text */
--u-bg: #121212;
--u-container-bg: #1e1e1e;
--u-rgb: 255, 255, 255;
--u-text-1: rgba(255, 255, 255, 0.9);
--u-text-2: rgba(255, 255, 255, 0.7);
--u-text-3: rgba(255, 255, 255, 0.5);
--u-text-white: #121212;
--u-border: rgba(255, 255, 255, 0.12);

/* Primary */
--u-primary-light-hover: #0d47a1;
--u-primary-light: #1565c0;
--u-primary-light-active: #1976d2;
--u-primary-hover: #42a5f5;
--u-primary: #90caf9;
--u-primary-active: #e3f2fd;

/* Success */
--u-success-light-hover: #1b5e20;
--u-success-light: #2e7d32;
--u-success-light-active: #388e3c;
--u-success-hover: #81c784;
--u-success: #a5d6a7;
--u-success-active: #e8f5e9;

/* Warning */
--u-warning-light-hover: #bf360c;
--u-warning-light: #e65100;
--u-warning-light-active: #ed6c02;
--u-warning-hover: #ffb74d;
--u-warning: #ffcc80;
--u-warning-active: #fff3e0;

/* Error */
--u-error-light-hover: #640808;
--u-error-light: #580101;
--u-error-light-active: #3a0101;
--u-error-hover: #ef9a9a;
--u-error: #e57373;
--u-error-active: #ffebee;
```

## Theme Switching

To switch themes programmatically:

```javascript
// Enable dark theme
document.documentElement.setAttribute('data-ume-ui-theme', 'dark');

// Enable light theme
document.documentElement.setAttribute('data-ume-ui-theme', 'light');
```

The dark theme can also be activated via CSS class:

```javascript
// Via class
document.documentElement.classList.add('dark');
document.documentElement.classList.remove('dark');
```

## Color Variable Naming Convention

Each color type follows a 6-level naming pattern:

| Variable Suffix  | Description                          | Usage                        |
| ---------------- | ------------------------------------ | ---------------------------- |
| `light-hover`    | Lightest background for hover states | Hover background on surfaces |
| `light`          | Light background tint                | Subtle backgrounds           |
| `light-active`   | Active state on light background     | Active/pressed on surfaces   |
| `hover`          | Hover state color                    | Hover on primary elements    |
| *(default)*      | Default / main color                 | Primary element color        |
| `active`         | Active / pressed state               | Pressed element color        |

## Custom Theme Override

Override any CSS variable in your own stylesheet:

```css
:root {
  /* Change primary color */
  --u-primary: #6200ea;
  --u-primary-hover: #7c4dff;
  --u-primary-active: #4a148c;
  --u-primary-light: #d1c4e9;
  --u-primary-light-hover: #ede7f6;
  --u-primary-light-active: #b39ddb;
}
```

<div class="theme-demo" :data-ume-ui-theme="theme">
  <div class="theme-controls">
    <u-button @click="toggleTheme" color="primary">
      {{ theme === 'dark' ? 'Switch to Light Theme' : 'Switch to Dark Theme' }}
    </u-button>
  </div>
  <div class="color-section">
    <h3>Primary Colors</h3>
    <div class="color-row">
      <div class="color-box" style="background-color: var(--u-primary-light-hover)">
        <span class="color-value">light-hover</span>
      </div>
      <div class="color-box" style="background-color: var(--u-primary-light)">
        <span class="color-value">light</span>
      </div>
      <div class="color-box" style="background-color: var(--u-primary-light-active)">
        <span class="color-value">light-active</span>
      </div>
      <div class="color-box" style="background-color: var(--u-primary-hover)">
        <span class="color-value">hover</span>
      </div>
      <div class="color-box" style="background-color: var(--u-primary)">
        <span class="color-value">default</span>
      </div>
      <div class="color-box" style="background-color: var(--u-primary-active)">
        <span class="color-value">active</span>
      </div>
    </div>
  </div>
  <div class="color-section">
    <h3>Success Colors</h3>
    <div class="color-row">
      <div class="color-box" style="background-color: var(--u-success-light-hover)">
        <span class="color-value">light-hover</span>
      </div>
      <div class="color-box" style="background-color: var(--u-success-light)">
        <span class="color-value">light</span>
      </div>
      <div class="color-box" style="background-color: var(--u-success-light-active)">
        <span class="color-value">light-active</span>
      </div>
      <div class="color-box" style="background-color: var(--u-success-hover)">
        <span class="color-value">hover</span>
      </div>
      <div class="color-box" style="background-color: var(--u-success)">
        <span class="color-value">default</span>
      </div>
      <div class="color-box" style="background-color: var(--u-success-active)">
        <span class="color-value">active</span>
      </div>
    </div>
  </div>
  <div class="color-section">
    <h3>Warning Colors</h3>
    <div class="color-row">
      <div class="color-box" style="background-color: var(--u-warning-light-hover)">
        <span class="color-value">light-hover</span>
      </div>
      <div class="color-box" style="background-color: var(--u-warning-light)">
        <span class="color-value">light</span>
      </div>
      <div class="color-box" style="background-color: var(--u-warning-light-active)">
        <span class="color-value">light-active</span>
      </div>
      <div class="color-box" style="background-color: var(--u-warning-hover)">
        <span class="color-value">hover</span>
      </div>
      <div class="color-box" style="background-color: var(--u-warning)">
        <span class="color-value">default</span>
      </div>
      <div class="color-box" style="background-color: var(--u-warning-active)">
        <span class="color-value">active</span>
      </div>
    </div>
  </div>
  <div class="color-section">
    <h3>Error Colors</h3>
    <div class="color-row">
      <div class="color-box" style="background-color: var(--u-error-light-hover)">
        <span class="color-value">light-hover</span>
      </div>
      <div class="color-box" style="background-color: var(--u-error-light)">
        <span class="color-value">light</span>
      </div>
      <div class="color-box" style="background-color: var(--u-error-light-active)">
        <span class="color-value">light-active</span>
      </div>
      <div class="color-box" style="background-color: var(--u-error-hover)">
        <span class="color-value">hover</span>
      </div>
      <div class="color-box" style="background-color: var(--u-error)">
        <span class="color-value">default</span>
      </div>
      <div class="color-box" style="background-color: var(--u-error-active)">
        <span class="color-value">active</span>
      </div>
    </div>
  </div>
</div>

<script setup>
  import { ref, onMounted } from 'vue';
  const theme = ref('light');
  const toggleTheme = () => {
    if (theme.value === 'dark') {
      theme.value = 'light';
    } else {
      theme.value = 'dark';
    }
  };
  onMounted(() => {
    const currentTheme =
      document.documentElement.getAttribute('data-ume-ui-theme') || 'light';
    theme.value = currentTheme;
  });
</script>

<style scoped>
  .theme-demo {
    padding: 20px;
    border-radius: 8px;
    background-color: var(--u-bg);
    color: var(--u-text-1);
    transition: background-color 0.3s, color 0.3s;
  }

  .theme-controls {
    margin-bottom: 20px;
  }

  .color-section {
    margin-bottom: 24px;
  }

  .color-section h3 {
    margin-bottom: 10px;
    color: var(--u-text-1);
  }

  .color-row {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }

  .color-box {
    width: 100px;
    height: 60px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .color-value {
    font-size: 10px;
    color: white;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7);
  }
</style>
