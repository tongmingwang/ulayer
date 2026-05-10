<template>
  <div
    class="u-card"
    :style="{
      height: props.height,
    }">
    <slot />
  </div>
</template>

<script setup lang="ts">
  defineOptions({
    name: 'UCard',
  });
  const props = defineProps<{
    bordered?: boolean;
    shadow?: boolean;
    radius?: string;
    height?: string;
  }>();
</script>

<style scoped lang="scss">
  .u-card {
    --u-card-radius: 4px;
    --u-card-shadow:
      0 4px 12px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(0, 0, 0, 0.06);
    background: var(--u-bg);
    width: 100%;
    min-height: 100px;
    border-radius: var(--u-card-radius);
    box-shadow: var(--u-card-shadow);
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
</style>
