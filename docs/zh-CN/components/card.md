# Card 卡片

卡片组件用于展示信息内容，支持标题、文本、操作区域等多种内容形式。

**组件组成：**

- `UCard` - 卡片容器组件
- `UCardTitle` - 卡片标题组件
- `UCardText` - 卡片文本组件
- `UCardAction` - 卡片操作区域组件

## 基础用法

最简单的卡片用法，配合标题、文本和操作区域组件使用。

<div class="demo-section">
  <u-card class="basic-card">
    <u-card-title>基础卡片</u-card-title>
    <u-card-text>
      <p>这是一个基础卡片组件，用于展示相关信息内容。卡片支持自定义样式和布局。</p>
    </u-card-text>
    <u-card-action>
      <u-button>关闭</u-button>
    </u-card-action>
  </u-card>
</div>

```vue
<template>
  <u-card>
    <u-card-title>基础卡片</u-card-title>
    <u-card-text>
      <p>这是一个基础卡片组件。</p>
    </u-card-text>
    <u-card-action>
      <u-button>关闭</u-button>
    </u-card-action>
  </u-card>
</template>
```

## 卡片列表

展示多个卡片组成的列表布局。

<div class="demo-section">
  <div class="card-grid">
    <u-card class="grid-card">
      <u-card-title>用户管理</u-card-title>
      <u-card-text>
        <p>管理系统用户信息，支持增删改查操作。</p>
      </u-card-text>
      <u-card-action>
        <u-button color="primary">查看</u-button>
      </u-card-action>
    </u-card>
    <u-card class="grid-card">
      <u-card-title>权限设置</u-card-title>
      <u-card-text>
        <p>配置用户角色和权限，确保数据安全。</p>
      </u-card-text>
      <u-card-action>
        <u-button color="primary">查看</u-button>
      </u-card-action>
    </u-card>
    <u-card class="grid-card">
      <u-card-title>数据统计</u-card-title>
      <u-card-text>
        <p>查看系统数据统计报表和分析图表。</p>
      </u-card-text>
      <u-card-action>
        <u-button color="primary">查看</u-button>
      </u-card-action>
    </u-card>
    <u-card class="grid-card">
      <u-card-title>系统设置</u-card-title>
      <u-card-text>
        <p>配置系统参数和全局设置选项。</p>
      </u-card-text>
      <u-card-action>
        <u-button color="primary">查看</u-button>
      </u-card-action>
    </u-card>
  </div>
</div>

```vue
<template>
  <div class="card-grid">
    <u-card>
      <u-card-title>用户管理</u-card-title>
      <u-card-text>
        <p>管理系统用户信息。</p>
      </u-card-text>
      <u-card-action>
        <u-button color="primary">查看</u-button>
      </u-card-action>
    </u-card>
  </div>
</template>
```

## 边框与阴影

通过 `bordered` 和 `shadow` 属性控制卡片的边框和阴影显示。

<div class="demo-section">
  <div class="card-row">
    <u-card class="feature-card">
      <u-card-title>阴影（默认）</u-card-title>
      <u-card-text>
        <p>默认启用阴影效果的卡片。</p>
      </u-card-text>
    </u-card>
    <u-card class="feature-card" bordered :shadow="false">
      <u-card-title>仅边框</u-card-title>
      <u-card-text>
        <p>启用边框并禁用阴影的卡片。</p>
      </u-card-text>
    </u-card>
  </div>
</div>

```vue
<template>
  <!-- 默认：启用阴影，无边框 -->
  <u-card>
    <u-card-title>阴影</u-card-title>
    <u-card-text>启用阴影的卡片。</u-card-text>
  </u-card>

  <!-- 启用边框，禁用阴影 -->
  <u-card bordered :shadow="false">
    <u-card-title>仅边框</u-card-title>
    <u-card-text>仅启用边框的卡片。</u-card-text>
  </u-card>
</template>
```

## 自定义高度

通过 `height` 属性设置卡片高度。

<div class="demo-section">
  <div class="card-row">
    <u-card class="height-card" height="120px">
      <u-card-title>固定高度</u-card-title>
      <u-card-text>
        <p>此卡片高度为 120px。</p>
      </u-card-text>
    </u-card>
    <u-card class="height-card" height="180px">
      <u-card-title>较高卡片</u-card-title>
      <u-card-text>
        <p>此卡片高度为 180px，可以容纳更多内容。</p>
      </u-card-text>
    </u-card>
  </div>
</div>

```vue
<template>
  <div class="card-row">
    <u-card height="120px">
      <u-card-title>固定高度</u-card-title>
      <u-card-text>
        <p>此卡片高度为 120px。</p>
      </u-card-text>
    </u-card>

    <u-card height="180px">
      <u-card-title>较高卡片</u-card-title>
      <u-card-text>
        <p>此卡片高度为 180px。</p>
      </u-card-text>
    </u-card>
  </div>
</template>
```

## 自定义圆角

通过 `radius` 属性设置卡片圆角大小。

<div class="demo-section">
  <div class="card-row">
    <u-card class="feature-card" radius="12px">
      <u-card-title>大圆角</u-card-title>
      <u-card-text>
        <p>此卡片圆角为 12px。</p>
      </u-card-text>
    </u-card>
    <u-card class="feature-card" radius="0px">
      <u-card-title>无圆角</u-card-title>
      <u-card-text>
        <p>此卡片无圆角。</p>
      </u-card-text>
    </u-card>
  </div>
</div>

```vue
<template>
  <u-card radius="12px">
    <u-card-title>大圆角</u-card-title>
    <u-card-text>圆角为 12px 的卡片。</u-card-text>
  </u-card>

  <u-card radius="0px">
    <u-card-title>无圆角</u-card-title>
    <u-card-text>无圆角的卡片。</u-card-text>
  </u-card>
</template>
```

## 卡片颜色

通过 `color` 属性设置卡片背景颜色。支持预设颜色类型（`primary`、`success`、`warning`、`error`）和自定义颜色值。

<div class="demo-section">
  <div class="card-row">
    <u-card class="feature-card" color="primary">
      <u-card-title>Primary</u-card-title>
      <u-card-text>
        <p>使用 primary 预设颜色的卡片。</p>
      </u-card-text>
    </u-card>
    <u-card class="feature-card" color="#e8f5e9">
      <u-card-title>自定义颜色</u-card-title>
      <u-card-text>
        <p>使用十六进制自定义颜色的卡片。</p>
      </u-card-text>
    </u-card>
  </div>
</div>

```vue
<template>
  <!-- 预设颜色 -->
  <u-card color="primary">
    <u-card-title>Primary</u-card-title>
    <u-card-text>使用 primary 颜色。</u-card-text>
  </u-card>

  <!-- 自定义颜色 -->
  <u-card color="#e8f5e9">
    <u-card-title>自定义颜色</u-card-title>
    <u-card-text>使用自定义十六进制颜色。</u-card-text>
  </u-card>
</template>
```

## UCard API

| 属性     | 说明         | 类型                                            | 默认值  |
| -------- | ------------ | ----------------------------------------------- | ------- |
| bordered | 是否显示边框 | `boolean`                                       | `false` |
| shadow   | 是否显示阴影 | `boolean`                                       | `true`  |
| radius   | 圆角大小     | `string`                                        | `'4px'` |
| height   | 卡片高度     | `string`                                        | -       |
| color    | 背景颜色     | `'primary' \| 'success' \| 'warning' \| 'error' \| string` | -       |

## UCard 插槽

| 插槽名  | 说明     |
| ------- | -------- |
| default | 卡片内容 |

## UCardTitle API

无属性

## UCardTitle 插槽

| 插槽名  | 说明     |
| ------- | -------- |
| default | 标题内容 |

## UCardText API

无属性

## UCardText 插槽

| 插槽名  | 说明     |
| ------- | -------- |
| default | 文本内容 |

## UCardAction API

无属性

## UCardAction 插槽

| 插槽名  | 说明     |
| ------- | -------- |
| default | 操作内容 |

<style scoped>
  .demo-section {
    margin-bottom: 24px;
  }

  .basic-card {
    max-width: 400px;
  }

  .card-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
  }

  .grid-card {
    transition: transform 0.2s, box-shadow 0.2s;
  }

  .grid-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
  }

  .card-row {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }

  .feature-card {
    overflow: hidden;
  }

  .height-card {
    overflow: hidden;
  }
</style>
