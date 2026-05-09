<template>
  <div
    ref="layer"
    class="u-layer"
    :data-u-layer="true"
    :role="props.role"
    :style="{
      zIndex: props.zIndex,
    }"
    @click="onClick">
    <slot />
  </div>
</template>

<script setup lang="ts">
  import { useTemplateRef, watch } from 'vue';

  const props = withDefaults(
    defineProps<{
      visible: boolean;
      closeOnClick?: boolean;
      closeOnEsc?: boolean;
      zIndex?: number;
      role?: 'dialog' | 'select' | 'menu';
    }>(),
    {
      closeOnClick: true,
      closeOnEsc: true,
      zIndex: 1000,
      role: 'dialog',
    }
  );
  defineOptions({
    name: 'ULayer',
  });
  const emit = defineEmits(['update:visible']);
  const layerRef = useTemplateRef<HTMLDivElement>('layer');

  watch(
    () => props.visible,
    (newVal) => {
      if (newVal) {
        document.addEventListener('keydown', handleEsc);
        document.documentElement.style.overflow = 'hidden';
        document.body.style.overflow = 'hidden';
      } else {
        document.removeEventListener('keydown', handleEsc);
        const hasMask = checkHasMask();
        if (!hasMask) {
          document.documentElement.style.overflow = '';
          document.body.style.overflow = '';
        }
      }
    }
  );
  const onClick = () => {
    if (props.closeOnClick) {
      emit('update:visible', false);
    }
  };
  const handleEsc = (e: KeyboardEvent) => {
    // 判断当前是在最前端的对话框才会关闭
    const isFront = getIsFront();
    if (!isFront) return;
    if (props.closeOnEsc && e.key === 'Escape' && isFront) {
      emit('update:visible', false);
    }
  };
  // 获取当前最前端的对话框
  function getIsFront() {
    const arr = Array.from(
      document.querySelectorAll('.u-layer[data-u-layer="true"]')
    );
    if (!arr.length) return false;
    const frontMask = arr.pop();
    return layerRef.value === frontMask;
  }

  function checkHasMask() {
    const list = Array.from(
      document.querySelectorAll('.u-layer[data-u-layer="true"]')
    ).filter((item) => item !== layerRef.value);

    return list.length > 0;
  }
</script>

<style lang="scss" scoped>
  .u-layer {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: all;
    z-index: 1000;
    display: flex;
  }

  .LayerFade {
    &-enter-active,
    &-leave-active {
      transition: opacity 350ms ease;
    }

    &-enter-from,
    &-leave-to {
      opacity: 0;
    }
  }
</style>
