# Dropdown 下拉菜单

下拉菜单组件，支持悬停、点击和右键触发，具备边缘自适应翻转定位。

## 基础用法

默认为点击触发，包裹任意元素作为下拉触发器。

<div class="demo-section">
  <u-dropdown>
    <u-button>点击我</u-button>
    <template #content>
      <u-dropdown-item value="1">操作 1</u-dropdown-item>
      <u-dropdown-item value="2">操作 2</u-dropdown-item>
      <u-dropdown-item value="3">操作 3</u-dropdown-item>
    </template>
  </u-dropdown>
</div>

```vue
<template>
  <u-dropdown>
    <u-button>点击我</u-button>
    <template #content>
      <u-dropdown-item value="1">操作 1</u-dropdown-item>
      <u-dropdown-item value="2">操作 2</u-dropdown-item>
      <u-dropdown-item value="3">操作 3</u-dropdown-item>
    </template>
  </u-dropdown>
</template>
```

## 触发方式

支持 `click`、`hover` 和 `contextmenu` 三种触发方式，也可以使用数组组合多种触发方式。

### 悬停触发

鼠标移入显示下拉菜单，鼠标移出触发器和菜单面板时隐藏。

<div class="demo-section">
  <u-dropdown trigger="hover">
    <u-button color="success">悬停我</u-button>
    <template #content>
      <u-dropdown-item value="a">选项 A</u-dropdown-item>
      <u-dropdown-item value="b">选项 B</u-dropdown-item>
      <u-dropdown-item value="c">选项 C</u-dropdown-item>
    </template>
  </u-dropdown>
</div>

```vue
<template>
  <u-dropdown trigger="hover">
    <u-button color="success">悬停我</u-button>
    <template #content>
      <u-dropdown-item value="a">选项 A</u-dropdown-item>
      <u-dropdown-item value="b">选项 B</u-dropdown-item>
      <u-dropdown-item value="c">选项 C</u-dropdown-item>
    </template>
  </u-dropdown>
</template>
```

### 右键触发

右键点击时在鼠标位置显示下拉菜单。

<div class="demo-section">
  <u-dropdown trigger="contextmenu">
    <u-button color="warning">右键点击我</u-button>
    <template #content>
      <u-dropdown-item value="copy">复制</u-dropdown-item>
      <u-dropdown-item value="paste">粘贴</u-dropdown-item>
      <u-dropdown-item value="cut" color="error">剪切</u-dropdown-item>
    </template>
  </u-dropdown>
</div>

```vue
<template>
  <u-dropdown trigger="contextmenu">
    <u-button color="warning">右键点击我</u-button>
    <template #content>
      <u-dropdown-item value="copy">复制</u-dropdown-item>
      <u-dropdown-item value="paste">粘贴</u-dropdown-item>
      <u-dropdown-item value="cut" color="error">剪切</u-dropdown-item>
    </template>
  </u-dropdown>
</template>
```

### 组合触发

使用数组同时启用多种触发方式。悬停打开下拉菜单后，点击会"锁定"菜单（鼠标离开不会关闭），再次点击则关闭。

<div class="demo-section">
  <u-dropdown :trigger="['hover', 'click']">
    <u-button color="primary">悬停或点击</u-button>
    <template #content>
      <u-dropdown-item value="1">悬停打开，点击锁定</u-dropdown-item>
      <u-dropdown-item value="2">再次点击关闭</u-dropdown-item>
      <u-dropdown-item value="3">选项 3</u-dropdown-item>
    </template>
  </u-dropdown>
</div>

```vue
<template>
  <u-dropdown :trigger="['hover', 'click']">
    <u-button color="primary">悬停或点击</u-button>
    <template #content>
      <u-dropdown-item value="1">悬停打开，点击锁定</u-dropdown-item>
      <u-dropdown-item value="2">再次点击关闭</u-dropdown-item>
    </template>
  </u-dropdown>
</template>
```

## Items 属性

使用 `items` 属性以声明式方式设置菜单项，替代内容插槽。

<div class="demo-section">
  <u-dropdown
    :items="[
      { label: '新建文件', value: 'new' },
      { label: '打开文件', value: 'open' },
      { label: '保存', value: 'save', divided: true },
      { label: '另存为', value: 'saveas' },
    ]">
    <u-button color="error">文件菜单</u-button>
  </u-dropdown>
</div>

```vue
<template>
  <u-dropdown
    :items="[
      { label: '新建文件', value: 'new' },
      { label: '打开文件', value: 'open' },
      { label: '保存', value: 'save', divided: true },
      { label: '另存为', value: 'saveas' },
    ]">
    <u-button>文件菜单</u-button>
  </u-dropdown>
</template>
```

## 菜单项颜色

通过 `color` 属性为菜单项设置不同颜色主题。

<div class="demo-section">
  <u-dropdown trigger="hover">
    <u-button color="info">颜色菜单项</u-button>
    <template #content>
      <u-dropdown-item value="profile" color="primary">个人资料</u-dropdown-item>
      <u-dropdown-item value="settings" color="success">设置</u-dropdown-item>
      <u-dropdown-item value="warning" color="warning">警告</u-dropdown-item>
      <u-dropdown-item value="logout" color="error" divided>退出登录</u-dropdown-item>
    </template>
  </u-dropdown>
</div>

```vue
<template>
  <u-dropdown trigger="hover">
    <u-button>颜色菜单项</u-button>
    <template #content>
      <u-dropdown-item value="profile" color="primary">个人资料</u-dropdown-item>
      <u-dropdown-item value="settings" color="success">设置</u-dropdown-item>
      <u-dropdown-item value="warning" color="warning">警告</u-dropdown-item>
      <u-dropdown-item value="logout" color="error" divided>退出登录</u-dropdown-item>
    </template>
  </u-dropdown>
</template>
```

## 分割线与禁用

使用 `divided` 显示分割线，使用 `disabled` 禁用菜单项。

<div class="demo-section">
  <u-dropdown>
    <u-button>菜单</u-button>
    <template #content>
      <u-dropdown-item value="1">操作 1</u-dropdown-item>
      <u-dropdown-item value="2">操作 2</u-dropdown-item>
      <u-dropdown-item value="3" disabled>已禁用</u-dropdown-item>
      <u-dropdown-item value="4" divided>操作 4</u-dropdown-item>
    </template>
  </u-dropdown>
</div>

```vue
<template>
  <u-dropdown>
    <u-button>菜单</u-button>
    <template #content>
      <u-dropdown-item value="1">操作 1</u-dropdown-item>
      <u-dropdown-item value="2">操作 2</u-dropdown-item>
      <u-dropdown-item value="3" disabled>已禁用</u-dropdown-item>
      <u-dropdown-item value="4" divided>操作 4</u-dropdown-item>
    </template>
  </u-dropdown>
</template>
```

## 弹出方向

通过 `placement` 属性设置弹出方向。触碰视口边缘时会自动翻转方向。

<div class="demo-section">
  <u-dropdown placement="top-start">
    <u-button>向上弹出</u-button>
    <template #content>
      <u-dropdown-item value="1">选项 1</u-dropdown-item>
      <u-dropdown-item value="2">选项 2</u-dropdown-item>
    </template>
  </u-dropdown>
</div>

```vue
<template>
  <u-dropdown placement="top-start">
    <u-button>向上弹出</u-button>
    <template #content>
      <u-dropdown-item value="1">选项 1</u-dropdown-item>
      <u-dropdown-item value="2">选项 2</u-dropdown-item>
    </template>
  </u-dropdown>
</template>
```

## 自定义宽度

通过 `width` 属性设置下拉菜单内容宽度。

<div class="demo-section">
  <u-dropdown width="200px" trigger="hover">
    <u-button color="info">宽下拉菜单</u-button>
    <template #content>
      <u-dropdown-item value="1">长内容菜单项</u-dropdown-item>
      <u-dropdown-item value="2">另一个菜单项</u-dropdown-item>
    </template>
  </u-dropdown>
</div>

```vue
<template>
  <u-dropdown width="200px" trigger="hover">
    <u-button>宽下拉菜单</u-button>
    <template #content>
      <u-dropdown-item value="1">长内容菜单项</u-dropdown-item>
      <u-dropdown-item value="2">另一个菜单项</u-dropdown-item>
    </template>
  </u-dropdown>
</template>
```

## 禁用状态

通过 `disabled` 属性禁用整个下拉菜单。

<div class="demo-section">
  <u-dropdown disabled>
    <u-button disabled>禁用的下拉菜单</u-button>
    <template #content>
      <u-dropdown-item value="1">不应出现</u-dropdown-item>
    </template>
  </u-dropdown>
</div>

```vue
<template>
  <u-dropdown disabled>
    <u-button disabled>禁用的下拉菜单</u-button>
    <template #content>
      <u-dropdown-item value="1">不应出现</u-dropdown-item>
    </template>
  </u-dropdown>
</template>
```

## 区域右键菜单

在区域内任意位置右键点击显示下拉菜单。

<div class="demo-section">
  <u-dropdown trigger="contextmenu">
    <div class="context-area">在此区域内右键点击</div>
    <template #content>
      <u-dropdown-item value="refresh">刷新</u-dropdown-item>
      <u-dropdown-item value="inspect">检查</u-dropdown-item>
      <u-dropdown-item value="source" divided>查看源代码</u-dropdown-item>
    </template>
  </u-dropdown>
</div>

```vue
<template>
  <u-dropdown trigger="contextmenu">
    <div class="context-area">在此区域内右键点击</div>
    <template #content>
      <u-dropdown-item value="refresh">刷新</u-dropdown-item>
      <u-dropdown-item value="inspect">检查</u-dropdown-item>
      <u-dropdown-item value="source" divided>查看源代码</u-dropdown-item>
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

| 属性        | 说明                     | 类型                                                     | 默认值           |
| ----------- | ------------------------ | -------------------------------------------------------- | ---------------- |
| trigger     | 触发方式                 | `'hover' \| 'click' \| 'contextmenu' \| Array<...>`      | `'click'`        |
| disabled    | 是否禁用                 | `boolean`                                                | `false`          |
| placement   | 弹出位置                 | `'bottom' \| 'top' \| 'bottom-start' \| 'top-start'`     | `'bottom-start'` |
| width       | 下拉菜单宽度             | `string \| number`                                       | -                |
| offsetY     | 与触发器的垂直间距 (px)  | `number`                                                 | `4`              |
| delay       | 悬停延迟时间 (ms)        | `number`                                                 | `150`            |
| closeOnClick| 点击菜单项后是否关闭     | `boolean`                                                | `true`           |
| bgColor     | 背景色                   | `string`                                                 | `'var(--u-bg)'`  |
| items       | 菜单项（声明式）         | `Array<UDropdownItemOption>`                             | -                |

## UDropdown Events

| 事件          | 说明                 | 类型                            |
| ------------- | -------------------- | ------------------------------- |
| visibleChange | 可见性变化时触发     | `(visible: boolean) => void`    |
| select        | 选中菜单项时触发     | `(value: string \| number) => void` |

## UDropdown Slots

| 插槽   | 说明         |
| ------ | ------------ |
| default| 触发器元素   |
| content| 下拉菜单内容 |

## UDropdownItem API

| 属性     | 说明         | 类型                                              | 默认值  |
| -------- | ------------ | ------------------------------------------------- | ------- |
| value    | 菜单项值     | `string \| number`                                | -       |
| disabled | 是否禁用     | `boolean`                                         | `false` |
| color    | 颜色主题     | `'primary' \| 'success' \| 'warning' \| 'error'` | -       |
| divided  | 显示顶部分割线 | `boolean`                                       | `false` |

## UDropdownItem Slots

| 插槽   | 说明     |
| ------ | -------- |
| default| 菜单项内容 |

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