<template>
  <div>
    <h1>Mask</h1>
    <u-button @click="toggle">显示</u-button>
    <u-mask v-model="visible">
      <div class="content">内容</div>
    </u-mask>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';

  const visible = ref(false);
  const toggle = () => {
    visible.value = !visible.value;
  };
</script>

<style scoped></style>
