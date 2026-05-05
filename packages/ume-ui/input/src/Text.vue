<template>
  <div v-if="props.text" class="u-text">
    {{ props.text }}
  </div>
</template>

<script setup lang="ts">
  const props = defineProps<{ text: string }>();
</script>

<style scoped>
  .u-text {
    font-size: 14px;
    height: 100%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: inherit;
  }
</style>
