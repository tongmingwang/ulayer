<template>
  <Teleport to="body">
    <Transition @enter="enter" @leave="leave">
      <div
        v-if="show"
        class="u-drawer"
        role="drawer"
        @click="onClose"
        :style="{
          zIndex: props.zIndex,
          '--u-drawer-size': props.size,
          '--u-drawer-bg': props.bgColor,
        }">
        <div class="u-drawer_bg"></div>
        <div
          class="u-drawer_content"
          @click.stop
          :class="['u-drawer_' + props.location]">
          <div class="w-full h-full">
            <slot />
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
  import { ref, computed, watch } from 'vue';
  import UMask from '@/ume-ui/mask/src/UMask.vue';
  defineOptions({
    name: 'UDrawer',
    components: { UMask },
  });
  const props = withDefaults(
    defineProps<{
      modelValue: boolean;
      size?: string;
      location?: 'left' | 'right' | 'top' | 'bottom';
      zIndex?: number;
      closeOnClickMask?: boolean;
      bgColor?: string;
    }>(),
    {
      modelValue: false,
      size: '240px',
      location: 'left',
      zIndex: 1000,
      closeOnClickMask: true,
      bgColor: 'var(--u-bg)',
    }
  );
  const show = ref(props.modelValue || false);
  const emit = defineEmits(['update:modelValue']);
  watch(
    () => props.modelValue,
    (val) => {
      show.value = val;
    }
  );
  const frameOPt = {
    duration: 300,
    easing: 'ease',
  };
  const startVal = computed(() => {
    switch (props.location) {
      case 'left':
        return 'translateX(-100%)';
      case 'right':
        return 'translateX(100%)';
      case 'top':
        return 'translateY(-100%)';
      case 'bottom':
        return 'translateY(100%)';
      default:
        return 'translateX(-100%)';
    }
  });
  const onClose = () => {
    if (props.closeOnClickMask) {
      show.value = false;
      emit('update:modelValue', false);
    }
  };
  const enter = async (el: Element, done: () => void) => {
    const content = el.querySelector('.u-drawer_content')!;
    const mask = el.querySelector('.u-drawer_bg')!;
    content?.animate(
      [{ transform: startVal.value }, { transform: 'translate(0)' }],
      frameOPt
    );
    Array.from(content.children).forEach((element: Element) => {
      element.animate(
        [
          { opacity: 0 },
          {
            opacity: 0,
            transform: 'translateY(-2px)',
            offset: 0.5,
          },
          { opacity: 1, offset: 1 },
        ],
        { ...frameOPt, duration: frameOPt.duration * 2 }
      );
    });
    mask?.animate([{ opacity: 0 }, { opacity: 1 }], frameOPt);
    await Promise.all(content?.getAnimations().map((item) => item.finished));
    done();
  };
  const leave = async (el: Element, done: () => void) => {
    const content = el.querySelector('.u-drawer_content')!;
    const mask = el.querySelector('.u-drawer_bg')!;
    Array.from(content?.children || []).forEach((element: Element) => {
      element.animate(
        [
          { opacity: 1 },
          { opacity: 0, offset: 0.33 },
          { opacity: 0, offset: 1 },
        ],
        { ...frameOPt, duration: frameOPt.duration }
      );
    });
    content?.animate(
      [{ transform: 'translate(0)' }, { transform: startVal.value }],
      frameOPt
    );
    mask?.animate([{ opacity: 1 }, { opacity: 0 }], frameOPt);
    await Promise.all(content?.getAnimations().map((item) => item.finished));
    done();
  };
</script>

<style scoped lang="scss">
  .u-drawer {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: transparent;
    z-index: 1000;
    overflow: hidden;
    pointer-events: all;
    &_bg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(var(--u-rgb), 0.33);
    }
    &_content {
      position: absolute;
      width: var(--u-drawer-size, 240px);
      height: 100%;
      overflow-y: auto;
      background: var(--u-drawer-bg, #fff);
      z-index: 1000;
      filter: drop-shadow(0 0 5px rgba(0, 0, 0, 0.05));
    }
    &_left {
      width: var(--u-drawer-size, 240px);
      height: 100%;
      left: 0;
      top: 0;
      box-shadow: 5px 0 15px rgba(0, 0, 0, 0.15);
    }
    &_right {
      width: var(--u-drawer-size, 240px);
      height: 100%;
      right: 0;
      top: 0;
      box-shadow: -5px 0 15px rgba(0, 0, 0, 0.15);
    }
    &_top {
      width: 100%;
      height: var(--u-drawer-size, 240px);
      top: 0;
      left: 0;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
    }
    &_bottom {
      width: 100%;
      height: var(--u-drawer-size, 240px);
      bottom: 0;
      left: 0;
      box-shadow: 0 -5px 15px rgba(0, 0, 0, 0.15);
    }
  }
</style>
