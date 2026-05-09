<template>
  <Teleport to="body">
    <Transition @enter="onEnter" @leave="onLeave">
      <div
        v-if="show"
        class="u-dialog"
        :class="className"
        v-bind="targetAttrs"
        role="dialog"
        aria-modal="true"
        ref="dialog"
        data-u-dialog="true"
        @click.stop="onClick">
        <div class="u-dialog_bg"></div>
        <div
          class="u-dialog_content"
          :style="{ '--u-dialog-width': props.width }"
          :class="{ 'is-fullscreen': props.fullscreen }"
          @click.stop>
          <slot />
        </div>
      </div>
    </Transition>
  </Teleport>
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
  });
  const emit = defineEmits(['update:modelValue', 'close']);
  const { targetAttrs, updateNoScroll, className, targetRef } =
    useNoScroll('dialog');
  const { show, onClick } = useDialog(props, emit, targetRef);
  watch(
    () => props.modelValue,
    (newVal) => {
      show.value = newVal;
    }
  );

  async function onEnter(el: Element, done: () => void) {
    const mask = el.querySelector('.u-dialog_bg');
    updateNoScroll();
    if (mask) {
      mask?.animate([{ opacity: 0 }, { opacity: 1 }], {
        duration: 300,
        easing: 'ease',
      });
    }
    const content = el.querySelector('.u-dialog_content');
    if (content) {
      const triggerDom = props.trigger;
      if (triggerDom) {
        const triggerRect = triggerDom.getBoundingClientRect();
        const contentRect = content.getBoundingClientRect();
        // 计算触发元素中心相对于对话框内容左上角的位置
        const left =
          triggerRect.left - contentRect.left + triggerRect.width / 2;
        const top = triggerRect.top - contentRect.top + triggerRect.height / 2;
        // @ts-ignore
        content.style.transformOrigin = `${left}px ${top}px`;
      }
      content.animate(
        props.fullscreen
          ? [{ transform: 'translateY(100%)' }, { transform: 'translateY(0%)' }]
          : [
              { opacity: 0, transform: 'scale(0)' },
              { opacity: 0.1, transform: 'scale(0.33)', offset: 0.33 },
              { opacity: 1, transform: 'scale(1)' },
            ],
        {
          duration: 300,
          easing: 'ease',
        }
      );
    }
    mask &&
      (await Promise.all(
        mask.getAnimations().map((animation) => animation.finished)
      ));
    content &&
      (await Promise.all(
        content.getAnimations().map((animation) => animation.finished)
      ));

    done();
  }

  async function onLeave(el: Element, done: () => void) {
    const mask = el.querySelector('.u-dialog_bg');
    mask &&
      mask.animate([{ opacity: 1 }, { opacity: 0 }], {
        duration: 300,
        easing: 'ease',
      });
    const content = el.querySelector('.u-dialog_content');
    content &&
      content.animate(
        props.fullscreen
          ? [{ transform: 'translateY(0%)' }, { transform: 'translateY(100%)' }]
          : [
              { opacity: 1, transform: 'scale(1)' },
              { opacity: 0.1, transform: 'scale(0.5)', offset: 0.33 },
              { opacity: 0, transform: 'scale(0)' },
            ],
        {
          duration: 300,
          easing: 'ease',
        }
      );
    mask &&
      (await Promise.all(
        mask.getAnimations().map((animation) => animation.finished)
      ));
    content &&
      (await Promise.all(
        content.getAnimations().map((animation) => animation.finished)
      ));
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
    .u-dialog_bg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: var(--u-mask-bg);
      z-index: 0;
    }
    .u-dialog_content {
      width: var(--u-dialog-width);
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
