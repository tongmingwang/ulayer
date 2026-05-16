<template>
  <div
    ref="select"
    class="u-select"
    :class="{
      'is-active': visible,
      'is-disabled': disabled,
    }"
    @click="setShowContent">
    <Teleport to="body">
      <Transition @enter="enter" @leave="leave">
        <div
          :class="[...selectClassNames, noScrollClassName]"
          v-bind="targetAttrs"
          :style="{
            '--u-select-bg': props.bgColor,
          }"
          role="select"
          ref="layer"
          @click="update(false)"
          v-if="visible">
          <div class="u-select_content" :style="position" ref="content">
            <slot name="content">
              <UOption
                v-for="(item, index) in props.items"
                :key="index"
                :value="item">
                {{ item }}
              </UOption>
            </slot>
          </div>
        </div>
      </Transition>
    </Teleport>
    <span class="u-select_input--box">
      <slot>
        <input
          type="text"
          class="u-select_input"
          :value="active"
          :placeholder="props.placeholder"
          readonly />
      </slot>
    </span>
    <USvg
      :icon="svgIcons.arrowDown"
      class="u-select_down"
      :class="{ 'u-select_down--active': visible }" />
  </div>
</template>

<script setup lang="ts">
  import { ref, useTemplateRef, watch } from 'vue';
  import { usePosition } from '@/ume-ui/select/src/usePosition';
  import { throttle } from '@/utils/common';
  import { svgIcons, USvg } from '@/ume-ui/base';
  import { useResize } from '@/hooks/useResize';
  import { useNoScroll } from '@/hooks/useNoScroll';
  import type { USelectProps } from './types';
  import { useSelect } from './hook';
  import UOption from './UOption.vue';

  const props = withDefaults(defineProps<USelectProps>(), {
    modelValue: '',
    bgColor: 'var(--u-bg)',
  });
  const emits = defineEmits(['update:modelValue', 'change']);
  defineOptions({
    name: 'USelect',
    components: { USvg, UOption },
  });

  const visible = ref(false);
  const selectRef = useTemplateRef('select');
  const contentRef = useTemplateRef('content');

  const { position, updatePosition, resetPosition } = usePosition();
  const { targetAttrs, noScrollClassName, updateNoScroll, targetRef } =
    useNoScroll('layer');
  const { selectClassNames, scrollToActive, active } = useSelect(props, emits);

  watch(
    () => props.modelValue,
    () => {
      active.value = props.modelValue || '';
    }
  );
  const update = throttle(async (bol: boolean) => {
    visible.value = bol;
    if (visible.value) {
      document.addEventListener('click', hideContent, true);
      if (hasSelectRender()) {
        document.documentElement.style.overflow = 'hidden';
        document.body.style.overflow = 'hidden';
      }
    } else {
      document.removeEventListener('click', hideContent, true);
      resetPosition();
    }
    updateNoScroll();
  }, 100);
  useResize(() => {
    update(false);
    updatePosition(selectRef.value!, 212);
  });

  function hideContent(e: MouseEvent) {
    if (
      selectRef.value?.contains(e.target as Node) ||
      contentRef.value == (e.target as Node)
    ) {
      return;
    }
    update(false);
  }
  const setShowContent = async () => {
    if (visible.value) return;
    update(true);
  };

  // 动画
  const frameOpt = { duration: 300, easing: 'ease' };
  const enter = async (el: Element, done: () => void) => {
    updateNoScroll();
    scrollToActive(targetRef.value!);
    const content = el.querySelector('.u-select_content')!;
    if (content) {
      updatePosition(selectRef.value!, content.clientHeight || 212);
      Array.from(content.children)
        .slice(0, 5)
        .forEach((ele: Element) => {
          ele.animate(
            [
              { opacity: 0 },
              { opacity: 0, offset: 0.5 },
              { opacity: 1, offset: 1 },
            ],
            {
              ...frameOpt,
              duration: frameOpt.duration * 2,
            }
          );
        });
      content.animate(
        [{ transform: 'scaleY(0)' }, { transform: 'scaleY(1)' }],
        frameOpt
      );
    }

    if (content) {
      await Promise.all(content.getAnimations().map((item) => item.finished));
    }

    done();
  };
  const leave = async (el: Element, done: () => void) => {
    const content = el.querySelector('.u-select_content')!;
    if (content) {
      Array.from(content.children)
        .slice(0, 5)
        .forEach((ele: Element) => {
          ele.animate(
            [
              { opacity: 1 },
              { opacity: 0, offset: 0.33 },
              { opacity: 0, offset: 1 },
            ],
            frameOpt
          );
        });
      content.animate(
        [
          { transform: 'scaleY(1)', opacity: 1 },
          { transform: 'scaleY(0)', opacity: 0 },
        ],
        frameOpt
      );
      await Promise.all(content.getAnimations().map((item) => item.finished));
    }
    done();
    updateNoScroll();
  };

  const hasSelectRender = (): boolean => {
    return !!document.querySelector('.u-select_layer[role="select"]');
  };
</script>

<style scoped lang="scss">
  .u-select {
    --u-select-border-color: var(--u-border);
    --u-select-bg-color: var(--u-bg);
    --u-select-text-color: var(--u-text-1);
    --u-select-radius: 4px;
    --u-select-height: 36px;
    display: inline-flex;
    width: 100%;
    align-items: center;
    justify-content: flex-start;
    gap: 8px;
    border: 1px solid var(--u-select-border-color);
    padding: 0 8px;
    background: var(--u-bg);
    color: var(--u-select-text-color);
    height: var(--u-select-height);
    border-radius: var(--u-select-radius);
    cursor: pointer;
    transition: border-color 0.2s;
    position: relative;

    &:hover,
    &:focus-within {
      --u-select-border-color: var(--u-primary);
      z-index: 1;
    }
    &.is-active {
      --u-select-border-color: var(--u-primary);
      outline: 1px solid var(--u-select-border-color);
      z-index: 1;
    }
    &.is-disabled {
      pointer-events: none;
      opacity: 0.65;
    }
    &_input--box {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      color: inherit;
      height: 100%;
      border: none;
      outline: none;
    }

    &_input {
      height: 100%;
      width: 100%;
      color: inherit;
      outline: none;
      border: none;
      background-color: transparent;
    }
  }
  .u-select_down {
    transition: all 0.2s;
    width: 16px;
    opacity: 0.7;
    &--active {
      transform: rotate(180deg);
    }
  }
</style>

<style lang="scss">
  .u-select-layer {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1000;
    pointer-events: all;
    background-color: transparent;
    .u-select_content {
      padding: 4px;
      border-radius: 4px;
      background-color: var(--u-select-bg);
      box-shadow:
        0 0 3px 0 rgba(var(--u-rgb), 0.18),
        0 5px 12px rgba(0, 0, 0, 0.12);
      overflow: auto;
      max-height: 212px;
      position: fixed;
      pointer-events: all;
    }
  }
</style>
