# Icon 图标

图标用于可视化地表示操作和信息。点击任意图标即可复制其名称。

<script setup>
import { ref, onMounted } from 'vue';
import icons from '../../public/uicon.json'

const copied = ref('');

const copyIcon = (icon) => {
  navigator.clipboard.writeText(`<u-icon name="${icon.font_class}" />`);
  copied.value = icon.font_class;
  setTimeout(() => copied.value = '', 1500);
};

</script>

## 图标使用

使用 `name` 属性指定图标。点击任意图标卡片即可复制使用代码。

### 按需引入

图标组件支持按需引入：

```vue
<script setup>
  import { UIcon } from 'ume-ui';
  import 'ume-ui/icon/index.css';
</script>

<template>
  <u-icon name="search" />
</template>
```

### 基础用法

<u-icon name="search" size="20"></u-icon>
<u-icon name="favorfill" size="20" color="#e6a23c"></u-icon>
<u-icon name="roundclosefill" size="20" color="#f56c6c"></u-icon>
<u-icon name="roundcheckfill" size="20" color="#67c23a"></u-icon>

```vue
<template>
  <u-icon name="search" size="20"></u-icon>
  <u-icon name="favorfill" size="20" color="#e6a23c"></u-icon>
  <u-icon name="roundclosefill" size="20" color="#f56c6c"></u-icon>
  <u-icon name="roundcheckfill" size="20" color="#67c23a"></u-icon>
</template>
```

### 自定义尺寸

使用 `size` 属性设置图标尺寸。

<u-icon name="favor" size="16"></u-icon>
<u-icon name="favor" size="24"></u-icon>
<u-icon name="favor" size="32"></u-icon>
<u-icon name="favor" size="48"></u-icon>

```vue
<template>
  <u-icon name="favor" size="16"></u-icon>
  <u-icon name="favor" size="24"></u-icon>
  <u-icon name="favor" size="32"></u-icon>
  <u-icon name="favor" size="48"></u-icon>
</template>
```

### 自定义颜色

使用 `color` 属性设置图标颜色。

<u-icon name="favorfill" size="24" color="#409eff"></u-icon>
<u-icon name="favorfill" size="24" color="#67c23a"></u-icon>
<u-icon name="favorfill" size="24" color="#e6a23c"></u-icon>
<u-icon name="favorfill" size="24" color="#f56c6c"></u-icon>
<u-icon name="favorfill" size="24" color="#909399"></u-icon>

```vue
<template>
  <u-icon name="favorfill" size="24" color="#409eff"></u-icon>
  <u-icon name="favorfill" size="24" color="#67c23a"></u-icon>
  <u-icon name="favorfill" size="24" color="#e6a23c"></u-icon>
  <u-icon name="favorfill" size="24" color="#f56c6c"></u-icon>
  <u-icon name="favorfill" size="24" color="#909399"></u-icon>
</template>
```

## 图标列表

点击任意图标即可复制 `<u-icon name="..." />` 代码。

<div class="icon-gallery">
  <div 
    v-for="icon in icons.glyphs" 
    :key="icon.font_class"
    class="icon-card"
    :class="{ copied: copied === icon.font_class }"
    @click="copyIcon(icon)"
    v-ripple
  >
    <u-icon :name="icon.font_class" size="28"></u-icon>
    <span class="icon-class">{{ icon.font_class }}</span>
  </div>
</div>

## API

| 属性名 | 说明                     | 类型             | 默认值 |
| ------ | ------------------------ | ---------------- | ------ |
| name   | 图标名称                 | string           | ''     |
| size   | 图标尺寸 (如 '20px', 24) | string \| number | ''     |
| color  | 图标颜色                 | string           | ''     |

<style scoped>
.icon-gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 16px;
  margin-top: 20px;
}
.icon-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 12px;
  border: 1px solid var(--u-border);
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;
  background: var(--u-bg);
}

.icon-card .icon-class {
  margin-top: 8px;
  font-size: 12px;
  text-align: center;
  word-break: break-all;
}

</style>
