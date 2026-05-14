# 主题

ume-ui 提供了一套基于 CSS 变量的完整主题定制系统。所有变量定义在 `var.css` 中，可以通过覆盖变量来自定义主题。

## 主要颜色

```css
--u-primary-light-hover: #e3f2fd;
--u-primary-light: #bbdefb;
--u-primary-light-active: #90caf9;
--u-primary-hover: #1976d2;
--u-primary: #1e88e5;
--u-primary-active: #0d47a1;
```

## 成功颜色

```css
--u-success-light-hover: #e8f5e9;
--u-success-light: #c9e7c9;
--u-success-light-active: #ade6af;
--u-success-hover: #2e7d32;
--u-success: #388e3c;
--u-success-active: #1b5e20;
```

## 警告颜色

```css
--u-warning-light-hover: #fff3e0;
--u-warning-light: #fdeed6;
--u-warning-light-active: #eed1a7;
--u-warning-hover: #e65100;
--u-warning: #ed6c02;
--u-warning-active: #bf360c;
```

## 错误颜色

```css
--u-error-light-hover: #ffebee;
--u-error-light: #fac8c8;
--u-error-light-active: #f0b4b4;
--u-error-hover: #c62828;
--u-error: #d32f2f;
--u-error-active: #b71c1c;
```

## 背景与文本颜色

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

## 尺寸变量

```css
--u-mini: 24px;
--u-small: 28px;
--u-medium: 36px;
--u-large: 48px;
```

## 暗黑主题

当设置 `data-ume-ui-theme="dark"` 或添加 `dark` 类名时：

```css
/* 背景与文本 */
--u-bg: #121212;
--u-container-bg: #1e1e1e;
--u-rgb: 255, 255, 255;
--u-text-1: rgba(255, 255, 255, 0.9);
--u-text-2: rgba(255, 255, 255, 0.7);
--u-text-3: rgba(255, 255, 255, 0.5);
--u-text-white: #121212;
--u-border: rgba(255, 255, 255, 0.12);

/* 主要颜色 */
--u-primary-light-hover: #0d47a1;
--u-primary-light: #1565c0;
--u-primary-light-active: #1976d2;
--u-primary-hover: #42a5f5;
--u-primary: #90caf9;
--u-primary-active: #e3f2fd;

/* 成功颜色 */
--u-success-light-hover: #1b5e20;
--u-success-light: #2e7d32;
--u-success-light-active: #388e3c;
--u-success-hover: #81c784;
--u-success: #a5d6a7;
--u-success-active: #e8f5e9;

/* 警告颜色 */
--u-warning-light-hover: #bf360c;
--u-warning-light: #e65100;
--u-warning-light-active: #ed6c02;
--u-warning-hover: #ffb74d;
--u-warning: #ffcc80;
--u-warning-active: #fff3e0;

/* 错误颜色 */
--u-error-light-hover: #640808;
--u-error-light: #580101;
--u-error-light-active: #3a0101;
--u-error-hover: #ef9a9a;
--u-error: #e57373;
--u-error-active: #ffebee;
```

## 主题切换

以编程方式切换主题：

```javascript
// 启用暗黑主题
document.documentElement.setAttribute('data-ume-ui-theme', 'dark');

// 启用明亮主题
document.documentElement.setAttribute('data-ume-ui-theme', 'light');
```

暗黑主题也支持通过 CSS 类名激活：

```javascript
// 通过类名
document.documentElement.classList.add('dark');
document.documentElement.classList.remove('dark');
```

## 颜色变量命名规范

每种颜色类型遵循 6 级命名模式：

| 变量后缀       | 说明               | 用途                 |
| -------------- | ------------------ | -------------------- |
| `light-hover`  | 最浅的悬停背景色   | 表面悬停状态背景     |
| `light`        | 浅色背景色         | 柔和的背景色         |
| `light-active` | 浅色背景上的激活色 | 表面按下/激活状态    |
| `hover`        | 悬停状态色         | 主要元素的悬停色     |
| *(默认)*       | 默认 / 主色        | 主要元素颜色         |
| `active`       | 激活 / 按下状态色  | 按下状态的元素颜色   |

## 自定义主题覆盖

在自定义样式表中覆盖任意 CSS 变量：

```css
:root {
  /* 修改主色 */
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
      {{ theme === 'dark' ? '切换到明亮主题' : '切换到暗黑主题' }}
    </u-button>
  </div>
  <div class="color-section">
    <h3>主要颜色</h3>
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
    <h3>成功颜色</h3>
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
    <h3>警告颜色</h3>
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
    <h3>错误颜色</h3>
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
