<template>
  <div class="u-input-number">
    <slot />
    <Control
      @increase="increase"
      @decrease="decrease"
      :disabledIncrease="isDisabledIncrease"
      :disabledDecrease="isDisabledDecrease" />
  </div>
</template>

<script setup lang="ts">
  import type { UInputPropsType } from './types';
  import Control from './Control.vue';
  import { computed } from 'vue';

  const props = defineProps<UInputPropsType>();
  const emits = defineEmits(['increase', 'decrease']);
  const isDisabledIncrease = computed(() => {
    return Number(props.modelValue) >= Number(props.max);
  });
  const isDisabledDecrease = computed(() => {
    return Number(props.modelValue) <= Number(props.min);
  });
  const increase = () => {
    emits('increase');
  };
  const decrease = () => {
    emits('decrease');
  };
</script>

<style scoped lang="scss">
  .u-input-number {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    gap: 8px;
    border-radius: inherit;
  }
</style>
