<template>
  <div :class="listItemClass" v-ripple @click="handleClick" :style="styles">
    <slot />
  </div>
</template>

<script setup lang="ts">
  import { useListItem } from './hooks';
  import type { UMenuItemProps } from './types';
  import ripple from '@/directives/ripple';
  defineOptions({ name: 'UMenuItem', directives: { ripple } });

  const props = defineProps<UMenuItemProps>();
  const { listItemClass, handleClick, styles } = useListItem(props);
</script>

<style scoped lang="scss">
  .u-menu-item {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: left;
    width: 100%;
    padding: 8px 12px 8px 0;
    color: var(--u-menu-color);
    line-height: 1.5;
    min-height: 32px;
    cursor: pointer;
    font-weight: 500;
    font-size: 14px;
    overflow: hidden;
    transition: all 0.2s;
    word-wrap: normal;
    white-space: nowrap;
    min-width: fit-content;

    &:hover {
      background: rgba(var(--u-rgb), 0.05);
    }

    &.is-disabled {
      opacity: 0.65;
      pointer-events: none;
    }

    &.is-active {
      color: var(--u-menu-active-color);
      background: var(--u-menu-active-bg);
    }

    @each $color in primary, success, warning, error {
      &--#{$color} {
        --u-menu-active-bg: var(--u-#{$color}-light-hover);
        --u-menu-active-color: var(--u-#{$color}-active);
      }
    }
  }
</style>
