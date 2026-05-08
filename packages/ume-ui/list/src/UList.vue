<template>
  <div :class="classNames">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
  import type { UListProps } from './types';
  import { useList } from './useList';
  defineOptions({ name: 'UList' });
  const props = withDefaults(defineProps<UListProps>(), { modelValue: '' });
  const emit = defineEmits(['update:modelValue']);
  const { classNames } = useList(props, emit);
</script>

<style scoped lang="scss">
  .u-list {
    // 默认显示
    --u-list-bg: var(--u-bg);
    --u-list-color: var(--u-info-700);
    // 激活状态
    --u-list-active-color: var(--u-primary-600);
    --u-list-active-bg: var(--u-primary-50);
    display: flex;
    flex-direction: column;
    padding: 6px 0;
    background-color: var(--u-bg);
    overflow-y: auto;
    height: 100%;

    @each $color in primary, success, warning, error, info {
      &--#{$color} {
        --u-list-active-bg: var(--u-#{$color}-50);
        --u-list-active-color: var(--u-#{$color}-500);
      }
    }
  }
</style>
