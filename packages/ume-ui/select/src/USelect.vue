<template>
  <div
    ref="select"
    class="u-select"
    :class="{
      'is-active': visible,
      'is-disabled': disabled,
    }"
    @click="setShowContent">
    <UMask v-model:visible="visible" bg="transparent" :close-on-click="false">
      <Transition name="slide-y" css :appear="true">
        <div
          v-if="visible"
          class="u-select-wrapper"
          :style="position"
          ref="content">
          <slot name="content"></slot>
        </div>
      </Transition>
    </UMask>
    <span class="u-select_input">
      <slot></slot>
    </span>
    <USvg
      :icon="svgIcons.arrowDown"
      class="u-select_down"
      :class="{ 'u-select_down--active': visible }" />
  </div>
</template>

<script setup lang="ts">
  import UInput from '@/ume-ui/input/src/UInput.vue';
  import { ref, useTemplateRef, watch } from 'vue';
  import { usePosition } from '@/hooks/usePosition';
  import { throttle } from '@/utils/common';
  import { svgIcons, USvg } from '@/ume-ui/base';
  import { useResize } from '@/hooks/useResize';
  import { UMask } from '@/ume-ui/mask';

  defineOptions({ name: 'USelect', components: { UInput, USvg, UMask } });
  const props = defineProps({
    visible: Boolean,
    disabled: Boolean,
  });
  const visible = ref(props.visible || false);
  const selectRef = useTemplateRef('select');
  const contentRef = useTemplateRef('content');
  const { position, updatePosition, resetPosition } = usePosition();

  watch(
    () => props.visible,
    () => {
      update(props.visible);
    }
  );
  const update = throttle(async (bol: boolean) => {
    visible.value = bol;
    if (visible.value) {
      await new Promise((resolve) => setTimeout(resolve, 0));
      updatePosition(selectRef.value!, contentRef.value!, 0.88);
      document.addEventListener('click', hideContent, true);
    } else {
      document.removeEventListener('click', hideContent, true);
      resetPosition();
    }
  }, 100);
  useResize(() => {
    updatePosition(selectRef.value!, contentRef.value!, 0.88);
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
</script>

<style scoped lang="scss">
  .u-select {
    --u-select-border-color: var(--u-info-500);
    --u-select-bg-color: var(--u-bg);
    --u-select-text-color: var(--u-info-900);
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
    transition: all 0.2s;

    &:hover {
      --u-select-border-color: var(--u-primary-600);
    }
    &.is-active {
      --u-select-border-color: var(--u-primary-600);
      box-shadow: 0 0 0 1px var(--u-primary-600) inset;
    }
    &.is-disabled {
      pointer-events: none;
      opacity: 0.65;
    }

    &_input {
      flex: 1;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      color: inherit;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
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

  .slide-y {
    /* 下面我们会解释这些 class 是做什么的 */
    &-enter-active,
    &-leave-active {
      transition: all 300ms;
      transform-origin: center top;
    }

    &-enter-from,
    &-leave-to {
      transform: scaleY(0.88);
      opacity: 0;
    }
  }
</style>

<style lang="scss">
  .u-select-wrapper {
    border-radius: 4px;
    box-shadow: 0 5px 12px 0 rgba(0, 0, 0, 0.15);
    overflow: auto;
    max-height: 240px;
    position: fixed;
    pointer-events: all;
  }
</style>
