<template>
  <div :class="classNames" ref="u-menu">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
  import type { UMenuProps,UMenuEmits } from './types';
  import { useList } from './hooks';

  defineOptions({ name: 'UMenu' });
  const props = withDefaults(defineProps<UMenuProps>(), { modelValue: '',color:'' });
  const emit = defineEmits<UMenuEmits>();
  const { classNames } = useList(props, emit);
</script>

<style scoped lang="scss">
  .u-menu {
    // 默认显示
    --u-menu-bg: var(--u-bg);
    --u-menu-color: var(--u-text-1);
    // 激活状态
    --u-menu-active-color: var(--u-primary);
    --u-menu-active-bg: var(--u-primary-light-hover);
    display: flex;
    flex-direction: column;
    padding: 6px 0;
    background-color: var(--u-menu-bg);
    overflow-y: auto;
    height: 100%;

    @each $color in primary, success, warning, error {
      &--#{$color} {
        --u-menu-active-bg: var(--u-#{$color}-light);
        --u-menu-active-color: var(--u-#{$color});
      }
    }
  }
</style>
