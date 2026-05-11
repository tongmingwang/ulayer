<template>
  <hr :class="classNames" :style="{
    '--u-divider-color': props.color || 'rgba(var(--u-rgb), 0.2)',
  }">
  </hr>
</template>

<script setup lang="ts">
  import type { DividerProps } from './types';
  import { computed } from 'vue';

  defineOptions({
    name: 'UDivider',
  });
  const props = withDefaults(defineProps<DividerProps>(), {
    vertical: false,
    color: 'rgba(var(--u-rgb), 0.2)',
  });

  const classNames = computed(() => {
    return [
      'u-divider',
      props.vertical && 'u-divider--vertical',
    ].filter(Boolean);
  });
</script>

<style scoped lang="scss">
.u-divider {
  display: inline-flex;
  outline: none;
  width: 100%;
  max-height: 1px;
  height: 1px;
  margin: 8px 0;
  border: none;
  background-color: var(--u-divider-color);

  &--vertical {
    width: 1px;
    vertical-align: middle;
    flex-direction: column;
    max-width: 1px;
    height: 100%;
    min-height: 100%;
    margin: 0 8px;
    border: none;
  }
}
</style>
