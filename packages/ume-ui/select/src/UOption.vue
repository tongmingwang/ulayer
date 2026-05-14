<template>
  <div :class="classNames" v-ripple @click="handleClick" :style="styles">
    <slot />
  </div>
</template>

<script setup lang="ts">
  import { useSelectOption } from './hook';
  import type { UOptionProps } from './types';
  defineOptions({ name: 'UOption' });

  const props = defineProps<UOptionProps>();
  const { classNames, handleClick, styles } = useSelectOption(props);
</script>

<style scoped lang="scss">
  .u-option{
    --u-option-bg: var(--u-primary-light-hover);
    --u-option-color: var(--u-primary);
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: left;
    width: 100%;
    padding: 8px 12px;
    color: var(--u-text-1);
    line-height: 1.5;
    height: 40px;
    min-width: fit-content;
    cursor: pointer;
    font-weight: 500;
    font-size: 14px;
    overflow: hidden;
    transition: all 0.2s;
    white-space: nowrap;
    background: transparent;

    &:hover {
      background: rgba(var(--u-rgb),0.05);
    }

    &.is-disabled {
      opacity: 0.65;
      pointer-events: none;
    }

    &.is-active {
      color: var(--u-option-color);
      background: var(--u-option-bg);
    }

    @each $color in primary, success, warning, error {
      &--#{$color} {
        --u-option-bg: var(--u-#{$color}-light-hover);
        --u-option-color: var(--u-#{$color}-active);
      }
    }
  }
</style>
