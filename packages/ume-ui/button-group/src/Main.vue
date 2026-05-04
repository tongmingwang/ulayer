<template>
  <div :class="className">
    <slot />
  </div>
</template>

<script setup lang="ts">
  import { provide, computed } from 'vue';
  import type { UButtonGroupProps } from './types';

  defineOptions({
    name: 'UButtonGroup',
  });

  const props = defineProps<UButtonGroupProps>();
  const className = computed(() => {
    return [
      'u-button-group',
      props.vertical && 'u-button-group--vertical',
    ].filter(Boolean);
  });
  provide('u-button-group', props);
</script>

<style lang="scss">
  @use './style.scss';
</style>
