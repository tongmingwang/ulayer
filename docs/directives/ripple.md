# Ripple Directive

The ripple directive adds Material Design ripple effects to interactive elements, providing visual feedback when users interact with buttons or other components.

## Basic Usage

```vue
<template>
  <div class="container">
    <button v-ripple class="ripple-button">Click Me!</button>
    <div v-ripple class="ripple-area">Ripple Area</div>
  </div>
</template>

<script setup>
  import { ripple } from 'ulayer';
</script>

<style scoped>
  .container {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
  }

  .ripple-button {
    padding: 12px 24px;
    border: none;
    border-radius: 4px;
    background-color: #1890ff;
    color: white;
    cursor: pointer;
    font-size: 16px;
  }

  .ripple-area {
    width: 200px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f5f5f5;
    border: 1px solid #ddd;
    border-radius: 4px;
    cursor: pointer;
  }
</style>
```

:::demo

```vue
<template>
  <div class="container">
    <button v-ripple class="ripple-button">Click Me!</button>
    <div v-ripple class="ripple-area">Ripple Area</div>
  </div>
</template>

<script setup>
  import { ripple } from 'ulayer';
</script>

<style scoped>
  .container {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
  }

  .ripple-button {
    padding: 12px 24px;
    border: none;
    border-radius: 4px;
    background-color: #1890ff;
    color: white;
    cursor: pointer;
    font-size: 16px;
  }

  .ripple-area {
    width: 200px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f5f5f5;
    border: 1px solid #ddd;
    border-radius: 4px;
    cursor: pointer;
  }
</style>
```

:::

## How It Works

The ripple effect works by:

1. Creating a circular element at the mouse click position
2. Animating the scale and opacity of the circle
3. Automatically removing the element after the animation completes
4. The ripple effect is throttled to prevent performance issues when rapidly clicking

## Features

- **Automatic Positioning**: The ripple appears at the exact click position
- **Adaptive Shape**: Works with both square and circular elements
- **Throttling**: Prevents multiple ripples when rapidly clicking
- **Animation**: Smooth transition with Material Design guidelines
- **Auto Cleanup**: Elements are automatically removed after animation

## Usage Notes

- The ripple directive is automatically registered when importing ulayer
- Works best on elements with `position: relative` or `position: absolute`
- For circular elements, the ripple will originate from the center
- The ripple color matches the element's text color
