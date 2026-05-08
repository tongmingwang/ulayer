<template>
  <teleport to="body">
    <transition name="maskFade">
      <div
        ref="mask"
        v-if="visible"
        class="u-mask"
        data-ume-mask
        :style="{
          backgroundColor: bg,
        }"
        @click="handleMaskClick">
        <slot></slot>
      </div>
    </transition>
  </teleport>
</template>

<script setup lang="ts">
  import { useTemplateRef, watch } from 'vue';
  const props = withDefaults(
    defineProps<{
      visible: boolean;
      closeOnClick?: boolean;
      closeOnEsc?: boolean;
      bg?: string;
    }>(),
    {
      closeOnClick: true,
      closeOnEsc: true,
      bg: '',
    }
  );
  defineOptions({
    name: 'UMask',
  });
  const emit = defineEmits(['update:visible']);
  const maskRef = useTemplateRef<HTMLDivElement>('mask');

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

  const handleMaskClick = () => {
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
    const maskList = Array.from(
      document.querySelectorAll('.u-mask[data-ume-mask]')
    );
    if (!maskList.length) return false;
    const frontMask = maskList.pop();
    return maskRef.value === frontMask;
  }

  function checkHasMask() {
    const maskList = Array.from(
      document.querySelectorAll('.u-mask[data-ume-mask]')
    ).filter((item) => item !== maskRef.value);

    return maskList.length > 0;
  }
</script>

<style lang="scss">
  .u-mask {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--u-mask-bg);
    pointer-events: all;
    z-index: 10000;
    display: flex;
  }
  .maskFade-enter-active,
  .maskFade-leave-active {
    transition: all 350ms ease;
  }
  .maskFade-enter-from,
  .maskFade-leave-to {
    opacity: 0;
  }
</style>
