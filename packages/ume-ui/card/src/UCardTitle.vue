<template>
  <div class="u-card-title">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
  defineOptions({
    name: 'UCardTitle',
  });
</script>

<style scoped>
  .u-card-title {
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--u-info-900);
    margin-top: 0;
    margin-bottom: 8px;
  }
</style>
