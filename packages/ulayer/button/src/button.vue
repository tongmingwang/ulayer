<template>
  <button
    type="button"
    ref="button"
    :class="className"
    :style="style"
    :disabled="props.disabled"
    v-ripple
    @click="handleClick">
    <slot></slot>
    <span v-if="props.loading" class="u-button__loading">
      <svg
        viewBox="0 0 1024 1024"
        class="u-icon__svg"
        version="1.1"
        fill="currentColor">
        <path
          d="M960 447.008q-11.008-152.992-120-261.504t-260.992-120.512q-16-0.992-27.488 9.504t-11.488 26.496q0 14.016 9.504 24.512t23.488 11.488q55.008 4 107.008 26.016 60.992 26.016 108.992 73.504t74.016 109.504q22.016 51.008 26.016 106.016 0.992 14.016 11.488 23.488t24.512 9.504q15.008 0 26.016-11.008 11.008-12 8.992-27.008z"></path>
      </svg>
    </span>
  </button>
</template>

<script setup lang="ts">
  import type { ButtonProps } from './types';
  import { computed, useTemplateRef } from 'vue';
  import ripple from '@/directives/ripple';

  const emit = defineEmits(['click']);
  const props = withDefaults(defineProps<ButtonProps>(), {
    color: '',
    variant: '',
    shape: '',
    size: 'medium',
  });
  const buttonRef = useTemplateRef<HTMLButtonElement>('button');

  // 组件类
  const className = computed(() => {
    return [
      'u-button',
      props.disabled ? 'is-disabled' : '',
      props.loading ? 'is-loading' : '',
      props.size ? `u-button--${props.size}` : '',
      props.color ? `u-button--${props.color}` : '',
      props.variant ? `u-button--${props.variant}` : '',
      props.shape ? `u-button--${props.shape}` : '',
    ];
  });

  // 组件样式
  const style = computed(() => {
    return {
      width: props.width,
      height: props.height,
    };
  });
  // 组件选项
  defineOptions({
    name: 'UButton',
    directives: { ripple },
  });

  // 暴露方法
  defineExpose({
    $el: buttonRef.value,
    focus: () => buttonRef.value?.focus(),
    blur: () => buttonRef.value?.blur(),
  });

  // 事件处理
  const handleClick = (e: MouseEvent) => {
    emit('click', e);
  };
</script>

<style lang="scss" scoped>
  @use './style.scss';
</style>
