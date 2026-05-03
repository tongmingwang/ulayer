# Ripple 水波纹指令

Ripple 指令为交互元素添加 Material Design 水波纹效果，在用户与按钮或其他组件交互时提供视觉反馈。

## 基础用法

```vue
<template>
  <div class="container">
    <button v-ripple class="ripple-button">点击我！</button>
    <div v-ripple class="ripple-area">水波区域</div>
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
    <button v-ripple class="ripple-button">点击我！</button>
    <div v-ripple class="ripple-area">水波区域</div>
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

## 工作原理

水波纹效果的工作原理：

1. 在鼠标点击位置创建圆形元素
2. 动画化圆圈的缩放和透明度
3. 动画完成后自动移除元素
4. 水波纹效果经过节流处理，防止快速点击时的性能问题

## 特性

- **自动定位**：水波纹出现在精确的点击位置
- **自适应形状**：适用于方形和圆形元素
- **节流处理**：防止快速点击时产生多个水波纹
- **动画效果**：遵循 Material Design 指南的平滑过渡
- **自动清理**：动画结束后自动移除元素

## 使用注意事项

- 导入 ulayer 时会自动注册 ripple 指令
- 最适合应用于具有 `position: relative` 或 `position: absolute` 的元素
- 对于圆形元素，水波纹将从中心开始
- 水波纹颜色与元素的文字颜色相同
