<template>
  <div
    class="u-card"
    :class="{
      'has-shadow': props.shadow,
      'has-border': props.bordered,
    }"
    :style="styles">
    <slot />
  </div>
</template>

<script setup lang="ts">
  import { computed } from 'vue';
  import { U_COLORS, type UColorType } from '@/types/ume';

  defineOptions({
    name: 'UCard',
  });
  const props = withDefaults(
    defineProps<{
      bordered?: boolean;
      shadow?: boolean;
      radius?: string;
      height?: string;
      color?: UColorType | string;
    }>(),
    {
      bordered: false,
      shadow: true,
      radius: '4px',
    }
  );
  const styles = computed(() => {
    return {
      '--u-card-bg': props.color
        ? U_COLORS.includes(props.color)
          ? `var(--u-${props.color})`
          : props.color
        : 'var(--u-bg)',
      height: props.height,
      borderRadius: props.radius,
    };
  });
</script>

<style scoped lang="scss">
  .u-card {
    background: var(--u-card-bg);
    width: 100%;
    height: 100%;
    border-radius: var(--u-card-radius, 4px);
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    color: var(--u-text-1);
    &.has-shadow {
      box-shadow: 0 5px 12px rgba(0, 0, 0, 0.15);
      filter: drop-shadow(0 3px 5px rgba(0, 0, 0, 0.1));
    }
    &.has-border {
      border: 1px solid var(--u-border);
    }
    @each $color in primary, success, warning, error {
      &--#{$color} {
        background: var(--u-color-#{$color});
        color: var(--u-text-white);
      }
    }
  }
</style>
