<template>
  <div :class="listItemClass" v-ripple @click="handleClick" :style="styles">
    <slot />
  </div>
</template>

<script setup lang="ts">
  import { useListItem } from './useList';
  import type { UListItemProps } from './types';
  defineOptions({ name: 'UListItem' });

  const props = defineProps<UListItemProps>();
  const { listItemClass, handleClick, styles } = useListItem(props);
</script>

<style scoped lang="scss">
  .u-list_item {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: left;
    width: 100%;
    padding: 8px 12px;
    color: var(--u-list-color);
    line-height: 1.5;
    min-height: 32px;
    cursor: pointer;
    font-weight: 500;
    font-size: 14px;
    overflow: hidden;
    transition: background 0.2s;
    word-wrap: normal;
    white-space: nowrap;
    min-width: fit-content;

    &:hover {
      background: var(--u-hover);
    }

    &.is-disabled {
      opacity: 0.65;
      pointer-events: none;
    }

    &.is-active {
      color: var(--u-list-active-color);
      background: var(--u-list-active-bg);
    }

    @each $color in primary, success, warning, error, info {
      &--#{$color} {
        --u-list-active-bg: var(--u-#{$color}-50);
        --u-list-active-color: var(--u-#{$color}-500);
      }
    }
  }
</style>
