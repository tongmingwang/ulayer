# Dialog 对话框

模态对话框组件，用于显示重要信息或要求用户确认。

**依赖组件：**

- `UMask` - 遮罩层组件

## 基础用法

最简单的对话框用法。

<div class="demo-section">
  <u-button @click="visible1 = true" color="primary">打开对话框</u-button>
  <u-dialog :visible="visible1" @update:visible="visible1 = false">
    <div class="dialog-content">
      <h3>基础对话框</h3>
      <p>这是一个基础对话框。</p>
      <u-button @click="visible1 = false" color="primary">确定</u-button>
    </div>
  </u-dialog>
</div>

```vue
<template>
  <u-button @click="visible = true" color="primary">打开对话框</u-button>
  <u-dialog :visible="visible" @update:visible="visible = false">
    <div class="dialog-content">
      <h3>基础对话框</h3>
      <p>这是一个基础对话框。</p>
      <u-button @click="visible = false" color="primary">确定</u-button>
    </div>
  </u-dialog>
</template>

<script setup>
  import { ref } from 'vue';
  const visible = ref(false);
</script>
```

## 点击遮罩关闭

点击遮罩层时关闭对话框。

<div class="demo-section">
  <u-button @click="visible2 = true" color="success">点击遮罩关闭</u-button>
  <u-dialog
    :visible="visible2"
    title="点击关闭"
    close-on-click
    @update:visible="visible2 = false">
    <p>点击外部遮罩区域即可关闭此对话框。</p>
  </u-dialog>
</div>

```vue
<template>
  <u-button @click="visible = true" color="success">点击遮罩关闭</u-button>
  <u-dialog
    :visible="visible"
    title="点击关闭"
    close-on-click
    @update:visible="visible = false">
    <p>点击外部遮罩区域即可关闭此对话框。</p>
  </u-dialog>
</template>

<script setup>
  import { ref } from 'vue';
  const visible = ref(false);
</script>
```

## ESC 键关闭

按 ESC 键时关闭对话框。

<div class="demo-section">
  <u-button @click="visible3 = true" color="warning">按 ESC 关闭</u-button>
  <u-dialog
    :visible="visible3"
    title="ESC 关闭"
    close-on-esc
    @update:visible="visible3 = false">
    <p>按 Escape 键关闭此对话框。</p>
    <template #footer>
      <u-button @click="visible3 = false" color="primary">确定</u-button>
    </template>
  </u-dialog>
</div>

```vue
<template>
  <u-button @click="visible = true" color="warning">按 ESC 关闭</u-button>
  <u-dialog
    :visible="visible"
    title="ESC 关闭"
    close-on-esc
    @update:visible="visible = false">
    <p>按 Escape 键关闭此对话框。</p>
    <template #footer>
      <u-button @click="visible = false" color="primary">确定</u-button>
    </template>
  </u-dialog>
</template>

<script setup>
  import { ref } from 'vue';
  const visible = ref(false);
</script>
```

## 自定义头部插槽

通过插槽自定义头部内容。

<div class="demo-section">
  <u-button @click="visible4 = true" color="error">自定义头部</u-button>
  <u-dialog :visible="visible4" @update:visible="visible4 = false">
    <template #header>
      <h3 style="color: var(--u-primary-600);">自定义标题</h3>
    </template>
    <p>这个对话框有自定义的头部插槽。</p>
    <template #footer>
      <u-button @click="visible4 = false" color="primary">确认</u-button>
    </template>
  </u-dialog>
</div>

```vue
<template>
  <u-button @click="visible = true" color="error">自定义头部</u-button>
  <u-dialog :visible="visible" @update:visible="visible = false">
    <template #header>
      <h3 style="color: var(--u-primary-600);">自定义标题</h3>
    </template>
    <p>这个对话框有自定义的头部插槽。</p>
    <template #footer>
      <u-button @click="visible = false" color="primary">确认</u-button>
    </template>
  </u-dialog>
</template>

<script setup>
  import { ref } from 'vue';
  const visible = ref(false);
</script>
```

## 全屏对话框

以全屏模式显示对话框。

<div class="demo-section">
  <u-button @click="visible5 = true" color="primary">全屏对话框</u-button>
  <u-dialog
    :visible="visible5"
    title="全屏模式"
    fullscreen
    @update:visible="visible5 = false">
    <p>这是一个占据整个视口的全屏对话框。</p>
    <template #footer>
      <u-button @click="visible5 = false" color="primary">关闭</u-button>
    </template>
  </u-dialog>
</div>

```vue
<template>
  <u-button @click="visible = true" color="primary">全屏对话框</u-button>
  <u-dialog
    :visible="visible"
    title="全屏模式"
    fullscreen
    @update:visible="visible = false">
    <p>这是一个占据整个视口的全屏对话框。</p>
    <template #footer>
      <u-button @click="visible = false" color="primary">关闭</u-button>
    </template>
  </u-dialog>
</template>

<script setup>
  import { ref } from 'vue';
  const visible = ref(false);
</script>
```

## UDialog API

| 属性         | 说明              | 类型      | 默认值  |
| ------------ | ----------------- | --------- | ------- |
| visible      | 是否显示          | `boolean` | `false` |
| title        | 对话框标题        | `string`  | -       |
| closable     | 是否显示关闭按钮  | `boolean` | `true`  |
| closeOnClick | 是否点击遮罩关闭  | `boolean` | `false` |
| closeOnEsc   | 是否按 ESC 键关闭 | `boolean` | `false` |
| fullscreen   | 是否全屏模式      | `boolean` | `false` |

## UDialog 插槽

| 插槽名  | 说明                 |
| ------- | -------------------- |
| default | 对话框主体内容       |
| header  | 自定义头部内容       |
| footer  | 底部内容（按钮区域） |

## UDialog 事件

| 事件           | 说明             |
| -------------- | ---------------- |
| update:visible | 可见性改变时触发 |
| close          | 对话框关闭时触发 |

<script setup>
  import { ref } from 'vue';
  const visible1 = ref(false);
  const visible2 = ref(false);
  const visible3 = ref(false);
  const visible4 = ref(false);
  const visible5 = ref(false);
</script>

<style scoped>
  .demo-section {
    margin-bottom: 16px;
  }
</style>
