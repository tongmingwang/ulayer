# Ripple Directive

The ripple directive adds Material Design ripple effects to interactive elements, providing visual feedback when users interact with buttons or other components.

## Basic Usage

Click the buttons below to experience the ripple effect:

<div class="demo-section">
  <button v-ripple class="ripple-button">Click Me!</button>
  <div v-ripple class="ripple-area">Ripple Area</div>
</div>

```vue
<template>
  <div class="container">
    <button v-ripple class="ripple-button">Click Me!</button>
    <div v-ripple class="ripple-area">Ripple Area</div>
  </div>
</template>

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
    background-color: var(--u-bg);
    border: 1px solid #ddd;
    border-radius: 4px;
    cursor: pointer;
  }
</style>
```

## Circular Elements

For circular elements, the ripple starts from the center:

<div class="demo-section">
  <button v-ripple class="ripple-circle">Circle</button>
</div>

```vue
<template>
  <button v-ripple class="ripple-circle">Circle</button>
</template>

<style scoped>
  .ripple-circle {
    width: 64px;
    height: 64px;
    border: none;
    border-radius: 50%;
    background-color: #52c41a;
    color: white;
    cursor: pointer;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
```

## Features

### Touch Event Support

The directive supports touch devices, providing smooth ripple effects on mobile devices as well.

### Automatic Positioning

The ripple appears at the exact click position. For square elements, it spreads from the click point; for circular elements, it starts from the center.

### Automatic Style Handling

The directive automatically handles element positioning and overflow styles:

- If the element has `position: static`, it's automatically set to `position: relative`
- Automatically sets `overflow: hidden` to prevent ripple overflow

### Smart Cleanup

- Automatically fades out and removes ripples when the mouse/finger is released
- Cleans up all ripples when the mouse leaves the element

## How It Works

The ripple effect works by:

1. Creating a container inside the element to hold ripples
2. Listening for `mousedown` and `touchstart` events
3. Creating circular ripple elements at the click position
4. Using Web Animation API for smooth scale animations
5. Listening for `mouseup`, `touchend`, and `mouseleave` events to fade out and remove elements

## Usage Notes

- The ripple directive is automatically registered when importing ume-ui
- The ripple color matches the element's text color (obtained via the `color` CSS property)
- For circular elements (equal width and height), the ripple originates from the center
- Works with custom elements, not limited to buttons

<style scoped>
  .demo-section {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    margin-bottom: 16px;
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
    background-color: var(--u-bg);
    border: 1px solid #ddd;
    border-radius: 4px;
    cursor: pointer;
  }

  .ripple-circle {
    width: 64px;
    height: 64px;
    border: none;
    border-radius: 50%;
    background-color: #52c41a;
    color: white;
    cursor: pointer;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
