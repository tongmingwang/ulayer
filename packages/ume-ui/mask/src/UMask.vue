<template>
  <transition name="maskFade">
    <div
      ref="mask"
      v-if="props.modelValue"
      class="u-mask"
      :style="{
        backgroundColor: props.bgColor,
      }"
      @click="handleMaskClick">
      <slot></slot>
    </div>
  </transition>
</template>

<script setup lang="ts">
  const props = withDefaults(
    defineProps<{
      modelValue: boolean;
      closeOnClick?: boolean;
      bgColor?: string;
    }>(),
    {
      closeOnClick: true,
      bgColor: '',
    }
  );
  defineOptions({
    name: 'UMask',
  });
  const emit = defineEmits(['update:modelValue']);

  const handleMaskClick = () => {
    if (props.closeOnClick) {
      emit('update:modelValue', false);
    }
  };
</script>

<style lang="scss">
  .u-mask {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(var(--u-rgb),0.33);
    pointer-events: all;
    z-index: 1000;
  }
  .maskFade-enter-active,
  .maskFade-leave-active {
    transition: opacity 300ms ease;
  }
  .maskFade-enter-from,
  .maskFade-leave-to {
    opacity: 0;
  }
</style>
