<template>
  <Teleport to="body">
    <Transition @enter="onEnter" @leave="onLeave">
      <div
        v-if="show"
        class="u-dialog"
        :class="noScrollClassName"
        v-bind="targetAttrs"
        role="dialog"
        aria-modal="true"
        ref="dialog"
        data-u-dialog="true"
        @click.stop="onClick">
        <div class="u-dialog__mask"></div>
        <div
          class="u-dialog__content"
          :style="{
            '--u-dialog-width': props.width,
            '--dialog-bg': props.bgColor,
            '--u-dialog-radius': props.radius,
          }"
          :class="{ 'is-fullscreen': props.fullscreen }"
          @click.stop>
          <div class="w-full h-full">
            <slot />
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
  <slot name="trigger" :props="{ onMousedown: onClickHandle }"></slot>
</template>

<script setup lang="ts">
  import { watch } from 'vue';
  import { useDialog } from './useDialog';
  import type { UDialogProps } from './types';
  import { useNoScroll } from '@/hooks/useNoScroll';

  defineOptions({ name: 'UDialog' });
  const props = withDefaults(defineProps<UDialogProps>(), {
    width: '90%',
    fullscreen: false,
    closeOnClick: true,
    closeOnEsc: true,
    modelValue: false,
    trigger: undefined,
    bgColor: 'var(--u-bg)',
    radius: '4px',
  });
  const emit = defineEmits(['update:modelValue', 'close']);
  const { targetAttrs, updateNoScroll, noScrollClassName, targetRef } =
    useNoScroll('dialog');
  const { show, onClick } = useDialog(props, emit, targetRef);
  const handleEvent = {
    clientX: 0,
    clientY: 0,
  };
  watch(
    () => props.modelValue,
    (newVal) => {
      show.value = newVal;
    }
  );

  const frameOpt = {
    duration: 300,
    easing: 'ease',
  };

  const onClickHandle = (e: MouseEvent) => {
    if (e && e.clientY) {
      handleEvent.clientX = e.clientX;
      handleEvent.clientY = e.clientY;
    }
  };

  async function onEnter(el: Element, done: () => void) {
    const mask = el.querySelector('.u-dialog__mask');
    updateNoScroll();
    if (mask) {
      mask?.animate([{ opacity: 0 }, { opacity: 1 }], frameOpt);
    }
    const content = el.querySelector('.u-dialog__content') as HTMLElement;
    if (content) {
      try {
        if (handleEvent.clientX) {
          const contentRect = content.getBoundingClientRect();
          // 计算触发元素中心相对于对话框内容左上角的位置
          const left = handleEvent.clientX - contentRect.left;
          const top = handleEvent.clientY - contentRect.top;
          content.style.setProperty('transform-origin', `${left}px ${top}px`);
        }
      } catch (error) {
        console.error(error);
      }
      content.animate(
        props.fullscreen
          ? [{ transform: 'translateY(100%)' }, { transform: 'translateY(0%)' }]
          : [{ transform: 'scale(0)' }, { transform: 'scale(1)' }],
        frameOpt
      );
      Array.from(content.children).forEach((element: Element) => {
        element.animate(
          [
            {
              opacity: 0,
            },
            {
              opacity: 0,
              transform: 'translateY(-2px)',
              offset: 0.5,
            },
            {
              opacity: 1,
              offset: 1,
            },
          ],
          {
            ...frameOpt,
            duration: frameOpt.duration * 2,
          }
        );
      });
    }
    if (mask) {
      await Promise.all(
        mask.getAnimations().map((animation) => animation.finished)
      );
    }
    if (content) {
      await Promise.all(
        content.getAnimations().map((animation) => animation.finished)
      );
    }
    done();
  }

  async function onLeave(el: Element, done: () => void) {
    const mask = el.querySelector('.u-dialog__mask');
    if (mask) {
      mask.animate([{ opacity: 1 }, { opacity: 0 }], frameOpt);
    }

    const content = el.querySelector('.u-dialog__content');
    if (content) {
      Array.from(content.children).forEach((ele: Element) => {
        ele.animate(
          [
            { opacity: 1 },
            { opacity: 0, offset: 0.2 },
            { opacity: 0, offset: 1 },
          ],
          frameOpt
        );
      });
      content.animate(
        props.fullscreen
          ? [{ transform: 'translateY(0%)' }, { transform: 'translateY(100%)' }]
          : [
              { opacity: 1, transform: 'scale(1)' },
              { opacity: 0, transform: 'scale(0)' },
            ],
        frameOpt
      );
    }
    if (mask) {
      await Promise.all(
        mask.getAnimations().map((animation) => animation.finished)
      );
    }
    if (content) {
      await Promise.all(
        content.getAnimations().map((animation) => animation.finished)
      );
    }
    done();
    updateNoScroll();
  }
</script>

<style scoped lang="scss">
  .u-dialog {
    pointer-events: all;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    width: 100%;
    height: 100%;
    display: flex;
    .u-dialog__mask {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(var(--u-rgb), 0.33);
      z-index: 0;
    }
    .u-dialog__content {
      width: var(--u-dialog-width);
      background: var(--dialog-bg);
      border-radius: var(--u-dialog-radius);
      height: auto;
      margin: auto;
      position: relative;
      z-index: 1000;
      transform-origin: center center;

      &.is-fullscreen {
        --u-dialog-width: 100% !important;
        top: 0;
        left: 0;
        height: 100%;
        max-width: 100%;
        height: 100%;
        border-radius: 0 !important;
      }
    }
  }
  .dialogView {
    &-enter-active,
    &-leave-active {
      transition: all 0.3s ease;
    }
    &-enter-from,
    &-leave-to {
      opacity: 0;
      transform: scale(0.5);
    }
  }
  .DialogBottomIn {
    &-enter-active,
    &-leave-active {
      transition: all 0.3s ease;
    }
    &-enter-from,
    &-leave-to {
      opacity: 0;
      transform: translateY(100%);
    }
  }
</style>
