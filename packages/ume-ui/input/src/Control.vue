<template>
  <div class="u-input-control">
    <button
      class="u-input-control__btn"
      :disabled="props.disabledDecrease"
      v-ripple
      @click="decrease">
      <USvg :icon="svgIcons.arrowDown" />
    </button>
    <button
      class="u-input-control__btn"
      :disabled="props.disabledIncrease"
      v-ripple
      @click="increase">
      <USvg :icon="svgIcons.arrowUp" />
    </button>
  </div>
</template>

<script setup lang="ts">
  import ripple from '@/directives/ripple';
  import { svgIcons, USvg } from '@/ume-ui/base';

  const emits = defineEmits(['increase', 'decrease']);
  const props = defineProps({
    disabledIncrease: {
      type: Boolean,
      default: false,
    },
    disabledDecrease: {
      type: Boolean,
      default: false,
    },
  });
  defineOptions({
    directives: {
      ripple,
    },
  });

  const increase = () => {
    emits('increase');
  };
  const decrease = () => {
    emits('decrease');
  };
</script>

<style scoped lang="scss">
  .u-input-control {
    height: 100%;
    min-width: fit-content;
    display: flex;
    align-items: center;
    overflow: hidden;
    color: inherit;
    border-top-right-radius: inherit;
    border-bottom-right-radius: inherit;
  }

  .u-input-control__btn {
    min-width: calc(var(--u-input-height) * 0.8);
    width: calc(var(--u-input-height) * 0.8);
    height: 100%;
    cursor: pointer;
    border: none;
    outline: none;
    appearance: none;
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    color: inherit;
    transition: background 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    border-left: 1px solid var(--u-input-border-color);
    svg {
      width: 1em;
      height: 1em;
    }
    &:hover {
      background: var(--u-primary-50);
    }
    &[disabled] {
      pointer-events: none;
    }
  }
</style>
