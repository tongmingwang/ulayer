# Theme Colors

ume-ui provides a complete theme customization system based on CSS variables. The following are the default theme color variables. You can directly copy and use them or perform custom overwriting.

## Primary Colors

```css
--u-primary-50: #e6f7ff;
--u-primary-100: #bae7ff;
--u-primary-200: #91d5ff;
--u-primary-300: #69c0ff;
--u-primary-400: #40a9ff;
--u-primary-500: #1890ff;
--u-primary-600: #096dd9;
--u-primary-700: #0050b3;
--u-primary-800: #003a8c;
--u-primary-900: #002766;
```

## Neutral Colors

```css
--u-info-50: #ffffff;
--u-info-100: #fafafa;
--u-info-200: #f5f5f5;
--u-info-300: #f0f0f0;
--u-info-400: #d9d9d9;
--u-info-500: #bfbfbf;
--u-info-600: #8c8c8c;
--u-info-700: #595959;
--u-info-800: #434343;
--u-info-900: #262626;
```

## Success Colors

```css
--u-success-50: #f6ffed;
--u-success-100: #d9f7be;
--u-success-200: #b7eb8f;
--u-success-300: #95de64;
--u-success-400: #73d13d;
--u-success-500: #52c41a;
--u-success-600: #389e0d;
--u-success-700: #237804;
--u-success-800: #135200;
--u-success-900: #092b00;
```

## Warning Colors

```css
--u-warning-50: #fff7e6;
--u-warning-100: #ffe7ba;
--u-warning-200: #ffd591;
--u-warning-300: #ffc069;
--u-warning-400: #ffa940;
--u-warning-500: #fa8c16;
--u-warning-600: #d46b08;
--u-warning-700: #ad4e00;
--u-warning-800: #873800;
--u-warning-900: #612500;
```

## Error Colors

```css
--u-error-50: #fff1f0;
--u-error-100: #ffccc7;
--u-error-200: #ffa39e;
--u-error-300: #ff7875;
--u-error-400: #ff4d4f;
--u-error-500: #f5222d;
--u-error-600: #cf1322;
--u-error-700: #a8071a;
--u-error-800: #820014;
--u-error-900: #5c0011;
```

## Background Colors

```css
--u-bg: #fff;
--u-container-bg: #fafafa;
--u-mask-bg: rgba(0, 0, 0, 0.33);
```

## Dark Theme Colors

When `data-ume-ui-theme="dark"`:

```css
--u-bg: #0f0f0f;
--u-container-bg: #1f1f1f;
--u-mask-bg: rgba(255, 255, 255, 0.33);

/* Primary colors (reversed) */
--u-primary-50: #002766;
--u-primary-100: #003a8c;
--u-primary-200: #0050b3;
--u-primary-300: #096dd9;
--u-primary-400: #1890ff;
--u-primary-500: #40a9ff;
--u-primary-600: #69c0ff;
--u-primary-700: #91d5ff;
--u-primary-800: #bae7ff;
--u-primary-900: #e6f7ff;

/* Neutral colors (reversed) */
--u-info-50: #262626;
--u-info-100: #434343;
--u-info-200: #595959;
--u-info-300: #8c8c8c;
--u-info-400: #bfbfbf;
--u-info-500: #d9d9d9;
--u-info-600: #f0f0f0;
--u-info-700: #f5f5f5;
--u-info-800: #fafafa;
--u-info-900: #ffffff;

/* Success colors (reversed) */
--u-success-50: #092b00;
--u-success-100: #135200;
--u-success-200: #237804;
--u-success-300: #389e0d;
--u-success-400: #52c41a;
--u-success-500: #73d13d;
--u-success-600: #95de64;
--u-success-700: #b7eb8f;
--u-success-800: #d9f7be;
--u-success-900: #f6ffed;

/* Warning colors (reversed) */
--u-warning-50: #612500;
--u-warning-100: #873800;
--u-warning-200: #ad4e00;
--u-warning-300: #d46b08;
--u-warning-400: #fa8c16;
--u-warning-500: #ffa940;
--u-warning-600: #ffc069;
--u-warning-700: #ffd591;
--u-warning-800: #ffe7ba;
--u-warning-900: #fff7e6;

/* Error colors (reversed) */
--u-error-50: #5c0011;
--u-error-100: #820014;
--u-error-200: #a8071a;
--u-error-300: #cf1322;
--u-error-400: #f5222d;
--u-error-500: #ff4d4f;
--u-error-600: #ff7875;
--u-error-700: #ffa39e;
--u-error-800: #ffccc7;
--u-error-900: #fff1f0;
```

## Theme Switching

To switch themes programmatically:

```javascript
// Enable dark theme
document.documentElement.setAttribute('data-ume-ui-theme', 'dark');

// Enable light theme
document.documentElement.setAttribute('data-ume-ui-theme', 'light');
```

<div class="theme-demo" :data-ume-ui-theme="theme">
  <div class="theme-controls">
    <u-button @click="toggleTheme" color="primary">
      {{
        theme === 'dark' ? 'Switch to Light Theme' : 'Switch to Dark Theme'
      }}
    </u-button>
  </div>
  <div class="color-section">
    <h3>Primary Colors</h3>
    <div class="color-row">
      <div
        v-for="shade in shades"
        :key="shade"
        class="color-box"
        :style="{ backgroundColor: `var(--u-primary-${shade})` }">
        <span class="color-value">--u-primary-{{ shade }}</span>
      </div>
    </div>
  </div>
  <div class="color-section">
    <h3>Success Colors</h3>
    <div class="color-row">
      <div
        v-for="shade in shades"
        :key="shade"
        class="color-box"
        :style="{ backgroundColor: `var(--u-success-${shade})` }">
        <span class="color-value">--u-success-{{ shade }}</span>
      </div>
    </div>
  </div>
</div>

<script setup>
  import { ref, onMounted } from 'vue';
  const theme = ref('light');
  const shades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];
  const toggleTheme = () => {
    if (theme.value === 'dark') {
      theme.value = 'light';
    } else {
      theme.value = 'dark';
    }
  };
</script>

<style scoped>
  .theme-demo {
    padding: 20px;
    border-radius: 8px;
    background-color: var(--u-bg);
    color: var(--u-info-900);
  }

  .theme-controls {
    margin-bottom: 20px;
  }

  .theme-btn {
    padding: 8px 16px;
    background-color: var(--u-primary-500);
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  .color-section {
    margin-bottom: 30px;
  }

  .color-section h3 {
    margin-bottom: 10px;
    color: var(--u-info-900);
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
