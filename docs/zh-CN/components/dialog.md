# Dialog 对话框

用于显示重要信息或需要用户确认的模态对话框组件，带有优雅的入场动画。

## 基础用法

最简单的对话框用法，默认居中显示并带有缩放动画。

<div class="demo-section">
  <u-dialog v-model="visible1" width="500px">
    <u-card class="dialog-card">
      <u-card-title>基础对话框</u-card-title>
      <u-card-text>
        <p>这是一个基础对话框，可以通过点击遮罩层或按 ESC 键关闭。</p>
      </u-card-text>
      <u-card-action class="dialog-actions">
        <u-button @click="visible1 = false" color="primary" variant="text">确定</u-button>
      </u-card-action>
    </u-card>
    <template v-slot:trigger="{props}">
        <u-button @click="visible1 = true" v-bind="props" color="primary">打开对话框</u-button>
     </template>
  </u-dialog>
</div>

```vue
<template>
  <u-button @click="visible = true" color="primary">打开对话框</u-button>
  <u-dialog v-model="visible">
    <u-card>
      <u-card-title>基础对话框</u-card-title>
      <u-card-text>
        <p>这是一个基础对话框。</p>
      </u-card-text>
      <div class="dialog-actions">
        <u-button @click="visible = false" color="primary" variant="text">确定</u-button>
      </div>
    </u-card>
  </u-dialog>
</template>

<script setup>
  import { ref } from 'vue';
  const visible = ref(false);
</script>
```

## 自定义宽度

通过 `width` 属性设置对话框宽度。

<div class="demo-section">
  <u-button @click="visible2 = true" color="success">自定义宽度</u-button>
  <u-dialog v-model="visible2" width="400px">
    <u-card class="dialog-card">
      <u-card-title>自定义宽度</u-card-title>
      <u-card-text>
        <p>此对话框宽度为 400px。您可以根据需要设置任意宽度值。</p>
      </u-card-text>
      <div class="dialog-actions">
        <u-button @click="visible2 = false" color="primary">确定</u-button>
      </div>
    </u-card>
  </u-dialog>
</div>

```vue
<template>
  <u-button @click="visible = true" color="success">自定义宽度</u-button>
  <u-dialog v-model="visible" width="400px">
    <u-card>
      <u-card-title>自定义宽度</u-card-title>
      <u-card-text>
        <p>此对话框宽度为 400px。</p>
      </u-card-text>
      <div class="dialog-actions">
        <u-button @click="visible = false" color="primary">确定</u-button>
      </div>
    </u-card>
  </u-dialog>
</template>

<script setup>
  import { ref } from 'vue';
  const visible = ref(false);
</script>
```

## 禁用点击遮罩关闭

禁止点击遮罩层关闭对话框。

<div class="demo-section">
  <u-button @click="visible3 = true" color="warning">禁用遮罩关闭</u-button>
  <u-dialog v-model="visible3" :close-on-click="false">
    <u-card class="dialog-card">
      <u-card-title>禁用遮罩关闭</u-card-title>
      <u-card-text>
        <p>点击遮罩层不会关闭此对话框。只有按钮可以关闭它。</p>
      </u-card-text>
      <div class="dialog-actions">
        <u-button @click="visible3 = false" color="primary">确定</u-button>
      </div>
    </u-card>
  </u-dialog>
</div>

```vue
<template>
  <u-button @click="visible = true" color="warning">
    禁用遮罩关闭
  </u-button>
  <u-dialog v-model="visible" :close-on-click="false">
    <u-card>
      <u-card-title>禁用遮罩关闭</u-card-title>
      <u-card-text>
        <p>点击遮罩层不会关闭此对话框。</p>
      </u-card-text>
      <div class="dialog-actions">
        <u-button @click="visible = false" color="primary">确定</u-button>
      </div>
    </u-card>
  </u-dialog>
</template>

<script setup>
  import { ref } from 'vue';
  const visible = ref(false);
</script>
```

## 全屏对话框

以全屏模式显示对话框，带有滑入动画。

<div class="demo-section">
  <u-button @click="visible4 = true" color="error">全屏对话框</u-button>
  <u-dialog v-model="visible4" fullscreen>
    <u-card class="dialog-card fullscreen-card">
      <u-card-title>全屏模式</u-card-title>
      <u-card-text>
        <p>这是一个占据整个视口的全屏对话框，适合显示大型内容。</p>
      </u-card-text>
      <div class="dialog-actions">
        <u-button @click="visible4 = false" color="primary">关闭</u-button>
      </div>
    </u-card>
  </u-dialog>
</div>

```vue
<template>
  <u-button @click="visible = true" color="error">全屏对话框</u-button>
  <u-dialog v-model="visible" fullscreen>
    <u-card>
      <u-card-title>全屏模式</u-card-title>
      <u-card-text>
        <p>这是一个全屏对话框。</p>
      </u-card-text>
      <div class="dialog-actions">
        <u-button @click="visible = false" color="primary">关闭</u-button>
      </div>
    </u-card>
  </u-dialog>
</template>

<script setup>
  import { ref } from 'vue';
  const visible = ref(false);
</script>
```

## 自定义背景色和圆角

自定义对话框的背景色和圆角。

<div class="demo-section">
  <u-button @click="visible6 = true" color="primary">自定义样式</u-button>
  <u-dialog v-model="visible6" bgColor="var(--u-success-50)" radius="16px">
    <u-card class="dialog-card">
      <u-card-title>自定义样式</u-card-title>
      <u-card-text>
        <p>此对话框具有自定义背景色和圆角。</p>
      </u-card-text>
      <div class="dialog-actions">
        <u-button @click="visible6 = false" color="primary">确定</u-button>
      </div>
    </u-card>
  </u-dialog>
</div>

```vue
<template>
  <u-button @click="visible = true" color="primary">自定义样式</u-button>
  <u-dialog v-model="visible" bgColor="var(--u-success-50)" radius="16px">
    <u-card>
      <u-card-title>自定义样式</u-card-title>
      <u-card-text>
        <p>此对话框具有自定义背景色和圆角。</p>
      </u-card-text>
      <div class="dialog-actions">
        <u-button @click="visible = false" color="primary">确定</u-button>
      </div>
    </u-card>
  </u-dialog>
</template>

<script setup>
  import { ref } from 'vue';
  const visible = ref(false);
</script>
```

## 动画位置

通过 `location` 属性设置动画原点位置。

<div class="demo-section">
  <u-button @click="visible7 = true" color="primary">顶部动画</u-button>
  <u-dialog v-model="visible7" location="top">
    <u-card class="dialog-card">
      <u-card-title>顶部动画</u-card-title>
      <u-card-text>
        <p>此对话框从屏幕顶部滑入。</p>
      </u-card-text>
      <div class="dialog-actions">
        <u-button @click="visible7 = false" color="primary">确定</u-button>
      </div>
    </u-card>
  </u-dialog>
</div>

```vue
<template>
  <u-button @click="visible = true" color="primary">顶部动画</u-button>
  <u-dialog v-model="visible" location="top">
    <u-card>
      <u-card-title>顶部动画</u-card-title>
      <u-card-text>
        <p>此对话框从屏幕顶部滑入。</p>
      </u-card-text>
      <div class="dialog-actions">
        <u-button @click="visible = false" color="primary">确定</u-button>
      </div>
    </u-card>
  </u-dialog>
</template>

<script setup>
  import { ref } from 'vue';
  const visible = ref(false);
</script>
```

## 确认对话框

带有按钮组的标准确认对话框模式。

<div class="demo-section">
  <u-button @click="visible5 = true" color="primary">确认对话框</u-button>
  <u-dialog v-model="visible5">
    <u-card class="dialog-card">
      <u-card-title>确认删除</u-card-title>
      <u-card-text>
        <p>确定要删除此记录吗？此操作无法撤销。</p>
      </u-card-text>
      <div class="dialog-actions">
        <u-button @click="visible5 = false">取消</u-button>
        <u-button @click="visible5 = false" color="error">删除</u-button>
      </div>
    </u-card>
  </u-dialog>
</div>

```vue
<template>
  <u-button @click="visible = true" color="primary">确认对话框</u-button>
  <u-dialog v-model="visible">
    <u-card>
      <u-card-title>确认删除</u-card-title>
      <u-card-text>
        <p>
          确定要删除此记录吗？此操作无法撤销。
        </p>
      </u-card-text>
      <div class="dialog-actions">
        <u-button @click="visible = false">取消</u-button>
        <u-button @click="visible = false" color="error">删除</u-button>
      </div>
    </u-card>
  </u-dialog>
</template>

<script setup>
  import { ref } from 'vue';
  const visible = ref(false);
</script>
```

## UDialog API

| 属性          | 说明                     | 类型                            | 默认值          |
| ------------- | ------------------------ | ------------------------------- | ---------------- |
| modelValue    | 是否显示对话框           | `boolean`                       | `false`          |
| width         | 对话框宽度               | `string`                        | `'520px'`        |
| fullscreen    | 是否使用全屏模式         | `boolean`                       | `false`          |
| closeOnClick  | 点击遮罩层是否关闭       | `boolean`                       | `true`           |
| closeOnEsc    | 按 ESC 键是否关闭        | `boolean`                       | `true`           |
| bgColor       | 对话框背景色             | `string`                        | `'var(--u-bg)'`  |
| radius        | 对话框圆角               | `string`                        | `'4px'`          |
| zIndex        | 对话框层级               | `number`                        | `1000`           |
| location      | 动画原点位置             | `'bottom' \| 'top' \| 'center'` | `'bottom'`       |

## UDialog 插槽

| 插槽    | 说明           |
| ------- | -------------- |
| default | 对话框内容     |
| trigger | 触发器元素     |

## UDialog 事件

| 事件              | 说明               |
| ----------------- | ------------------ |
| update:modelValue | 可见性改变时触发   |
| close             | 对话框关闭时触发   |

<script setup>
  import { ref } from 'vue';
  const visible1 = ref(false);
  const visible2 = ref(false);
  const visible3 = ref(false);
  const visible4 = ref(false);
  const visible5 = ref(false);
  const visible6 = ref(false);
  const visible7 = ref(false);
</script>

<style scoped>
  .demo-section {
    margin-bottom: 24px;
  }

  .dialog-card {
    max-width: 100%;
  }

  .fullscreen-card {
    height: 100%;
    border-radius: 16px 16px 0 0;
    display: flex;
    flex-direction: column;
  }

  .fullscreen-card .u-card-title {
    flex-shrink: 0;
  }

  .fullscreen-card .u-card_text {
    flex: 1;
    overflow-y: auto;
  }

  .dialog-actions {
    display: flex;
    justify-content: flex-end;
    gap: 12px;
    padding: 12px 16px 16px;
  }

  .dialog-actions u-button:last-child {
    margin-left: auto;
  }
</style>
