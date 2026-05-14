<template>
  <div class="fab-demo">
    <h1>UFab 悬浮按钮组件</h1>
    
    <h2>基础 FAB 按钮</h2>
    <div class="fab-group">
      <u-fab>+</u-fab>
      <u-fab color="success">+</u-fab>
      <u-fab color="error">+</u-fab>
      <u-fab color="warning">+</u-fab>
      <u-fab color="info">+</u-fab>
    </div>

    <h2>不同尺寸</h2>
    <div class="fab-group">
      <u-fab size="small">+</u-fab>
      <u-fab size="medium">+</u-fab>
      <u-fab size="large">+</u-fab>
    </div>

    <h2>Extended FAB (带文字扩展按钮)</h2>
    <div class="fab-group">
      <u-fab size="extended" color="primary">
        <template #icon>+</template>
        添加
      </u-fab>
      <u-fab size="extended" color="success" label="创建"></u-fab>
      <u-fab size="extended" color="error">
        <template #icon>🗑</template>
        删除
      </u-fab>
    </div>

    <h2>按钮状态</h2>
    <div class="fab-group">
      <u-fab disabled>×</u-fab>
      <u-fab loading color="primary"></u-fab>
      <u-fab :shadow="false" color="primary">+</u-fab>
    </div>

    <h2>固定定位 (查看页面右下角)</h2>
    <p>滚动页面，按钮会固定在视口中</p>
  </div>

  <u-fab 
    color="primary" 
    fixed 
    bottom="24px" 
    right="24px"
    @click="handleClick"
  >
    +
  </u-fab>

  <u-fab 
    color="error" 
    size="small"
    fixed 
    bottom="100px" 
    right="24px"
  >
    ↑
  </u-fab>
</template>

<script setup lang="ts">
const handleClick = () => {
  console.log('FAB 按钮被点击!');
};
</script>

<style scoped>
.fab-demo {
  padding-bottom: 200px;
}
.fab-group {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 24px;
}
</style>
