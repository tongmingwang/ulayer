<template>
  <div>
    <h1>输入框</h1>
    <u-input placeholder="请输入" v-model="value"></u-input>
    <p>当前值: {{ value }}</p>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';

  const value = ref('');
</script>

<style scoped></style>
