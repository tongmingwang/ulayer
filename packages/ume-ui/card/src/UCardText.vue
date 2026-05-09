<template>
  <div class="u-card_text">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
  defineOptions({
    name: 'UCardText',
  });
</script>

<style scoped lang="scss">
  .u-card_text {
    margin: 0;
    color: var(--u-info-700);
    line-height: 1.6;
  }
</style>
