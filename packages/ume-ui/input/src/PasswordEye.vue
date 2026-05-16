<template>
  <button class="pwd-eye" v-ripple @click="onChange">
    <USvg :icon="props.showPwd ? svgIcons.eyeOff : svgIcons.eye" />
  </button>
</template>

<script setup lang="ts">
  import ripple from '@/directives/ripple';
  import { svgIcons, USvg } from '@/ume-ui/base';

  const props = defineProps<{
    showPwd: boolean;
  }>();
  const emit = defineEmits<{
    (e: 'change', value: boolean): void;
  }>();

  defineOptions({
    directives: {
      ripple,
    },
  });

  const onChange = () => {
    emit('change', !props.showPwd);
  };
</script>

<style scoped lang="scss">
  .pwd-eye {
    --pwd-eye-size: calc(var(--u-input-height, 28px) * 0.8);
    width: var(--pwd-eye-size);
    height: var(--pwd-eye-size);
    padding: 0;
    min-width: var(--pwd-eye-size);
    min-height: var(--pwd-eye-size);
    border-radius: var(--pwd-eye-size);
    border: none;
    background: transparent;
    cursor: pointer;
    outline: none;
    color: inherit;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s;
    &:hover {
      background: rgba(var(--u-rgb), 0.05);
    }
  }
</style>
