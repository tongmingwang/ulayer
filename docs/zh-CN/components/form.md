# Form 表单

`u-form` 组件用于表单布局和数据收集，`u-form-item` 组件用于包裹表单控件，提供标签展示和错误信息提示。

## 基础用法

基本的表单布局使用方式。

<u-form>
  <u-form-item label="姓名" required>
    <u-input placeholder="请输入姓名" />
  </u-form-item>
  <u-form-item label="邮箱" required>
    <u-input placeholder="请输入邮箱" />
  </u-form-item>
  <u-form-item>
    <u-button color="primary">提交</u-button>
    <u-button>重置</u-button>
  </u-form-item>
</u-form>

```vue
<template>
  <u-form>
    <u-form-item label="姓名" required>
      <u-input placeholder="请输入姓名" />
    </u-form-item>
    <u-form-item label="邮箱" required>
      <u-input placeholder="请输入邮箱" />
    </u-form-item>
    <u-form-item>
      <u-button color="primary">提交</u-button>
      <u-button>重置</u-button>
    </u-form-item>
  </u-form>
</template>
```

## 行内布局

设置 `inline` 为 `true` 时，表单项将水平排列。

<u-form inline>
  <u-form-item label="用户">
    <u-input placeholder="用户" />
  </u-form-item>
  <u-form-item label="密码">
    <u-input type="password" placeholder="密码" />
  </u-form-item>
  <u-form-item>
    <u-button color="primary">登录</u-button>
  </u-form-item>
</u-form>

```vue
<template>
  <u-form inline>
    <u-form-item label="用户">
      <u-input placeholder="用户" />
    </u-form-item>
    <u-form-item label="密码">
      <u-input type="password" placeholder="密码" />
    </u-form-item>
    <u-form-item>
      <u-button color="primary">登录</u-button>
    </u-form-item>
  </u-form>
</template>
```

## 标签位置

通过 `label-position` 属性控制标签的位置，支持 `left`、`right` 和 `top`。

<u-form label-position="top">
  <u-form-item label="标题">
    <u-input placeholder="请输入标题" />
  </u-form-item>
  <u-form-item label="描述">
    <u-input type="textarea" placeholder="请输入描述" />
  </u-form-item>
</u-form>

```vue
<template>
  <u-form label-position="top">
    <u-form-item label="标题">
      <u-input placeholder="请输入标题" />
    </u-form-item>
    <u-form-item label="描述">
      <u-input type="textarea" placeholder="请输入描述" />
    </u-form-item>
  </u-form>
</template>
```

## 错误提示

通过 `message` 属性显示错误信息。

<u-form>
  <u-form-item label="姓名" required :message="errorMsg">
    <u-input v-model="name" @blur="validateName" />
  </u-form-item>
  <u-form-item>
    <u-button color="primary" @click="validateName">验证</u-button>
  </u-form-item>
</u-form>

```vue
<template>
  <u-form>
    <u-form-item label="姓名" required :message="errorMsg">
      <u-input v-model="name" @blur="validateName" />
    </u-form-item>
    <u-form-item>
      <u-button color="primary" @click="validateName">验证</u-button>
    </u-form-item>
  </u-form>
</template>

<script setup>
  import { ref } from 'vue';

  const name = ref('');
  const errorMsg = ref('');

  const validateName = () => {
    if (!name.value) {
      errorMsg.value = '请输入姓名';
    } else if (name.value.length < 2) {
      errorMsg.value = '姓名长度不能少于2个字符';
    } else {
      errorMsg.value = '';
    }
  };
</script>
```

## API

### Form Props

| 属性          | 说明         | 类型      | 可选值                   | 默认值  |
| ------------- | ------------ | --------- | ------------------------ | ------- |
| labelPosition | 标签位置     | `string`  | `left` / `right` / `top` | `right` |
| labelWidth    | 标签宽度     | `string`  | -                        | -       |
| inline        | 行内布局     | `boolean` | -                        | `false` |
| disabled      | 禁用整个表单 | `boolean` | -                        | `false` |

### FormItem Props

| 属性       | 说明                     | 类型      | 可选值     | 默认值  |
| ---------- | ------------------------ | --------- | ---------- | ------- |
| label      | 标签文本                 | `string`  | -          | -       |
| labelWidth | 标签宽度（覆盖表单设置） | `string`  | -          | `80px`  |
| required   | 是否必填                 | `boolean` | -          | `false` |
| message    | 错误提示信息             | `string`  | -          | -       |
| color      | 错误信息颜色             | `string`  | 内置颜色值 | `error` |

### FormItem Slots

| 插槽名  | 说明           |
| ------- | -------------- |
| default | 表单控件内容   |
| label   | 自定义标签内容 |

<script setup>
import { ref } from 'vue';

const name = ref('');
const errorMsg = ref('');

const validateName = () => {
  if (!name.value) {
    errorMsg.value = '请输入姓名';
  } else if (name.value.length < 2) {
    errorMsg.value = '姓名长度不能少于2个字符';
  } else {
    errorMsg.value = '';
  }
};
</script>
