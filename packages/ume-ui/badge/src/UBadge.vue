<template>
  <div :class="classNames">
    <slot></slot>
    <div class="u-badge_content" v-if="showBadge">
      <span v-if="props.variant === 'text'">
        {{ displayCount }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
  import type { BadgeProps } from './types';
  import { computed } from 'vue';

  defineOptions({
    name: 'UBadge',
  });

  const props = withDefaults(defineProps<BadgeProps>(), {
    color: 'error',
    variant: 'text',
    showBadge: true,
    count: 0,
    max: 99,
  });

  const displayCount = computed(() => {
    if (props.count > props.max) {
      return `${props.max}+`;
    }
    return props.count;
  });

  const classNames = computed(() => {
    return [
      'u-badge',
      props.color && `u-badge--${props.color}`,
      props.variant && `u-badge--${props.variant}`,
    ].filter(Boolean);
  });
</script>

<style scoped lang="scss">
  .u-badge {
    --u-badge-bg: var(--u-error-600);
    --u-badge-color: var(--u-info-50);
    --u-badge-radius: 12px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;

    @each $color in primary, success, warning, error {
      &.u-badge--#{$color} {
        --u-badge-bg: var(--u-#{$color}-600);
      }
    }

    &_content {
      position: absolute;
      top: -10px;
      left: 100%;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      line-height: 1;
      z-index: 1;
      min-width: 20px;
      height: 20px;
      padding: 0 6px;
      border-radius: var(--u-badge-radius);
      font-size: 12px;
      font-weight: 600;
      color: var(--u-badge-color);
      background-color: var(--u-badge-bg);
      white-space: nowrap;
    }

    &.u-badge--dot .u-badge_content {
      min-width: 8px;
      top: -4px;
      width: 8px;
      height: 8px;
      padding: 0;
      border-radius: 50%;
    }
  }
</style>
