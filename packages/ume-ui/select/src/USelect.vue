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
          class="u-select_layer"
          :class="className"
          v-bind="targetAttrs"
          ref="target"
          role="select"
          @click="update(false)"
          v-if="visible">
          <div class="u-select_content" :style="position" ref="content">
            <UList
              v-model="selfVal"
              :color="props.color"
              @update:model-value="emits('update:modelValue', selfVal)">
              <slot name="content">
                <UListItem
                  v-for="(item, index) in props.items"
                  :key="index"
                  :value="item">
                  {{ item }}
                </UListItem>
              </slot>
            </UList>
          </div>
        </div>
      </Transition>
    </Teleport>
    <span class="u-select_input">
      <slot>{{ selfVal }}</slot>
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
  import { svgIcons, USvg, ULayer } from '@/ume-ui/base';
  import { useResize } from '@/hooks/useResize';
  import UList from '@/ume-ui/list/src/UList.vue';
  import UListItem from '@/ume-ui/list/src/UListItem.vue';
  import { useNoScroll } from '@/hooks/useNoScroll';

  const emits = defineEmits(['update:modelValue']);
  defineOptions({
    name: 'USelect',
    components: { UInput, USvg, ULayer, UList, UListItem },
  });
  const props = defineProps<{
    disabled?: boolean;
    modelValue: string | number;
    color?: 'primary' | 'success' | 'warning' | 'error' | 'info';
    items?: Array<string>;
  }>();
  const visible = ref(false);
  const selectRef = useTemplateRef('select');
  const contentRef = useTemplateRef('content');
  const selfVal = ref(props.modelValue || '');
  const { position, updatePosition, resetPosition } = usePosition();
  const { targetAttrs, className, updateNoScroll } = useNoScroll('target');

  watch(
    () => props.modelValue,
    () => {
      selfVal.value = props.modelValue || '';
    }
  );
  const update = throttle(async (bol: boolean) => {
    visible.value = bol;
    if (visible.value) {
      await new Promise((resolve) => setTimeout(resolve, 0));
      updatePosition(selectRef.value!, contentRef.value!, 0.88);
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
  const enter = async (el: Element, done: () => void) => {
    updateNoScroll();
    const content = el.querySelector('.u-select_content')!;
    content &&
      content.animate(
        [
          { transform: 'scaleY(0.88)', opacity: 0 },
          { transform: 'scaleY(0.88)', opacity: 0, offset: 0.33 },
          { transform: 'scaleY(1)', opacity: 1 },
        ],
        {
          duration: 300,
          easing: 'ease',
        }
      );
    content &&
      (await Promise.all(content.getAnimations().map((item) => item.finished)));

    done();
  };
  const leave = async (el: Element, done: () => void) => {
    const content = el.querySelector('.u-select_content')!;
    content &&
      content.animate(
        [
          { transform: 'scaleY(1)', opacity: 1 },
          { transform: 'scaleY(0.88)', opacity: 0 },
        ],
        {
          duration: 200,
          easing: 'ease',
        }
      );
    content &&
      (await Promise.all(content.getAnimations().map((item) => item.finished)));
    done();
    updateNoScroll();
  };

  const hasSelectRender = (): boolean => {
    return !!document.querySelector('.u-select_layer[role="select"]');
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
</style>

<style lang="scss">
  .u-select_layer {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1000;
    pointer-events: all;
    .u-select_content {
      border-radius: 4px;
      box-shadow: 0 5px 12px 0 rgba(0, 0, 0, 0.15);
      overflow: auto;
      max-height: 240px;
      position: fixed;
      pointer-events: all;
      transform-origin: center top;
    }
  }
</style>
