# Card 卡片

卡片组件用于展示信息内容，支持标题、文本等多种内容形式。

**组件组成：**

- `UCard` - 卡片容器组件
- `UCardTitle` - 卡片标题组件
- `UCardText` - 卡片文本组件

## 基础用法

最简单的卡片用法，配合标题和文本组件使用。

<div class="demo-section">
  <u-card class="basic-card">
    <u-card-title>基础卡片</u-card-title>
    <u-card-text>
      <p>这是一个基础卡片组件，用于展示相关信息内容。卡片支持自定义样式和布局。</p>
    </u-card-text>
  </u-card>
</div>

```vue
<template>
  <u-card>
    <u-card-title>基础卡片</u-card-title>
    <u-card-text>
      <p>这是一个基础卡片组件。</p>
    </u-card-text>
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
    </u-card>
    <u-card class="grid-card">
      <u-card-title>权限设置</u-card-title>
      <u-card-text>
        <p>配置用户角色和权限，确保数据安全。</p>
      </u-card-text>
    </u-card>
    <u-card class="grid-card">
      <u-card-title>数据统计</u-card-title>
      <u-card-text>
        <p>查看系统数据统计报表和分析图表。</p>
      </u-card-text>
    </u-card>
    <u-card class="grid-card">
      <u-card-title>系统设置</u-card-title>
      <u-card-text>
        <p>配置系统参数和全局设置选项。</p>
      </u-card-text>
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
    </u-card>

    <u-card>
      <u-card-title>权限设置</u-card-title>
      <u-card-text>
        <p>配置用户角色和权限。</p>
      </u-card-text>
    </u-card>

    <u-card>
      <u-card-title>数据统计</u-card-title>
      <u-card-text>
        <p>查看系统数据统计报表。</p>
      </u-card-text>
    </u-card>

    <u-card>
      <u-card-title>系统设置</u-card-title>
      <u-card-text>
        <p>配置系统参数和全局设置。</p>
      </u-card-text>
    </u-card>
  </div>
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

## 配合按钮使用

卡片内配合按钮组件，实现交互功能。

<div class="demo-section">
  <u-card class="action-card">
    <u-card-title>操作卡片</u-card-title>
    <u-card-text>
      <p>点击下方按钮执行相关操作，支持多种交互场景。</p>
    </u-card-text>
    <div class="card-actions">
      <u-button color="primary">主要操作</u-button>
      <u-button>次要操作</u-button>
    </div>
  </u-card>
</div>

```vue
<template>
  <u-card>
    <u-card-title>操作卡片</u-card-title>
    <u-card-text>
      <p>点击下方按钮执行相关操作。</p>
    </u-card-text>
    <div class="card-actions">
      <u-button color="primary">主要操作</u-button>
      <u-button>次要操作</u-button>
    </div>
  </u-card>
</template>
```

## 嵌套卡片

卡片内嵌套其他卡片，实现层级展示。

<div class="demo-section">
  <u-card class="nested-card">
    <u-card-title>父级卡片</u-card-title>
    <u-card-text>
      <p>以下是嵌套的子卡片：</p>
      <div class="nested-container">
        <u-card class="child-card">
          <u-card-title>子卡片 1</u-card-title>
          <u-card-text>
            <p>这是第一个子卡片内容。</p>
          </u-card-text>
        </u-card>
        <u-card class="child-card">
          <u-card-title>子卡片 2</u-card-title>
          <u-card-text>
            <p>这是第二个子卡片内容。</p>
          </u-card-text>
        </u-card>
      </div>
    </u-card-text>
  </u-card>
</div>

```vue
<template>
  <u-card>
    <u-card-title>父级卡片</u-card-title>
    <u-card-text>
      <p>以下是嵌套的子卡片：</p>
      <div class="nested-container">
        <u-card>
          <u-card-title>子卡片 1</u-card-title>
          <u-card-text>
            <p>这是第一个子卡片内容。</p>
          </u-card-text>
        </u-card>

        <u-card>
          <u-card-title>子卡片 2</u-card-title>
          <u-card-text>
            <p>这是第二个子卡片内容。</p>
          </u-card-text>
        </u-card>
      </div>
    </u-card-text>
  </u-card>
</template>
```

## UCard API

| 属性     | 说明         | 类型      | 默认值 |
| -------- | ------------ | --------- | ------ |
| height   | 卡片高度     | `string`  | -      |
| bordered | 是否显示边框 | `boolean` | -      |
| shadow   | 是否显示阴影 | `boolean` | -      |
| radius   | 圆角大小     | `string`  | -      |

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

  .height-card {
    overflow: hidden;
  }

  .action-card {
    max-width: 400px;
  }

  .card-actions {
    display: flex;
    gap: 12px;
    padding: 0 16px 16px;
  }

  .nested-card {
    max-width: 600px;
  }

  .nested-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
    margin-top: 12px;
  }

  .child-card {
    background: var(--u-bg-secondary);
  }
</style>
