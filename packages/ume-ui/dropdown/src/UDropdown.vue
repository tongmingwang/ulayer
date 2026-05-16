<template>
  <div
    ref="triggerRef"
    class="u-dropdown"
    :class="{
      'is-active': visible,
      'is-disabled': disabled,
    }"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
    @click="onClick"
    @contextmenu="onContextMenu">
    <slot />
    <Teleport to="body">
      <Transition @enter="enter" @leave="leave">
        <div
          :class="[...dropdownClassNames, noScrollClassName]"
          v-bind="targetAttrs"
          :style="layerStyle"
          ref="layer"
          v-if="visible"
          @click="onOverlayClick"
          @contextmenu.prevent="onOverlayContext">
          <div
            class="u-dropdown_content"
            :style="positionStyle"
            ref="content"
            @click.stop
            @mouseenter="onContentMouseEnter"
            @mouseleave="onContentMouseLeave">
            <slot name="content">
              <UDropdownItem
                v-for="(item, index) in props.items"
                :key="index"
                :value="item.value ?? item.label"
                :disabled="item.disabled"
                :divided="item.divided"
                :icon="item.icon">
                {{ item.label }}
              </UDropdownItem>
            </slot>
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
  import { ref, useTemplateRef, watch, onUnmounted, computed } from 'vue';
  import { throttle } from '@/utils/common';
  import { useResize } from '@/hooks/useResize';
  import { useNoScroll } from '@/hooks/useNoScroll';
  import type {
    UDropdownProps,
    UDropdownTrigger,
    UDropdownTriggers,
  } from './types';
  import { useDropdown } from './hooks';
  import UDropdownItem from './UDropdownItem.vue';

  const props = withDefaults(defineProps<UDropdownProps>(), {
    trigger: () => ['click'] as UDropdownTriggers,
    disabled: false,
    placement: 'bottom-start',
    showArrow: false,
    bgColor: 'var(--u-bg)',
    width: undefined,
    offsetY: 4,
    closeOnClick: true,
    delay: 150,
  });

  const emits = defineEmits(['visibleChange', 'update:modelValue']);

  defineOptions({
    name: 'UDropdown',
    components: { UDropdownItem },
  });

  const visible = ref(false);
  const contextPos = ref({ x: 0, y: 0 });
  const isContextMode = ref(false);
  const hoverTimer = ref<ReturnType<typeof setTimeout> | null>(null);
  const pinned = ref(false); // true = click-locked open, hover-leave won't close

  const triggerEl = useTemplateRef<HTMLElement>('triggerRef');
  const contentEl = useTemplateRef<HTMLElement>('content');

  const { targetAttrs, noScrollClassName, updateNoScroll } =
    useNoScroll('layer');

  // Position calculation
  const positionStyle = ref('');

  const updatePosition = () => {
    if (!triggerEl.value) return;

    const gap = props.offsetY;
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const contentHeight = contentEl.value?.clientHeight || 200;
    const numericWidth = props.width
      ? typeof props.width === 'number'
        ? props.width
        : parseInt(props.width, 10) || 0
      : triggerEl.value.getBoundingClientRect().width;

    // Context menu: position at mouse point, clamp to viewport
    if (isContextMode.value) {
      const mx = contextPos.value.x;
      const my = contextPos.value.y;
      const x =
        mx + numericWidth > vw ? Math.max(vw - numericWidth - 8, 0) : mx;
      const y =
        my + contentHeight + gap > vh
          ? Math.max(my - contentHeight - gap, 0)
          : my + gap;
      const originY = my + contentHeight + gap > vh ? 'bottom' : 'top';
      positionStyle.value = `position:fixed; top: ${y}px; left: ${x}px; transform-origin: center ${originY};`;
      return;
    }

    const rect = triggerEl.value.getBoundingClientRect();
    const contentWidth = `${numericWidth}px`;

    // Determine vertical direction
    const spaceBelow = vh - rect.bottom - gap;
    const spaceAbove = rect.top - gap;
    const preferBottom = props.placement!.startsWith('bottom');
    let showAbove: boolean;
    if (preferBottom) {
      showAbove = spaceBelow < contentHeight && spaceAbove > spaceBelow;
    } else {
      showAbove = spaceAbove >= contentHeight || spaceAbove > spaceBelow;
    }

    // Determine horizontal alignment
    const alignCenter =
      props.placement === 'bottom' || props.placement === 'top';
    const preferStart =
      props.placement!.endsWith('start') || !props.placement!.includes('-');

    let top: number;
    let left: number;
    let transformX = '';
    let originY: string;

    if (showAbove) {
      top = Math.max(rect.top - contentHeight - gap, 0);
      originY = 'bottom';
    } else {
      top = rect.bottom + gap;
      originY = 'top';
    }

    if (alignCenter) {
      left = rect.left + rect.width / 2;
      transformX = ' translateX(-50%)';
      // Clamp: ensure centered content stays within viewport
      const halfW = numericWidth / 2;
      if (left - halfW < 0) {
        left = halfW;
      } else if (left + halfW > vw) {
        left = vw - halfW;
      }
    } else if (preferStart) {
      left = rect.left;
      // If right edge overflows, flip to end-aligned
      if (left + numericWidth > vw) {
        left = Math.max(rect.right - numericWidth, 0);
      }
    } else {
      left = rect.right - numericWidth;
      // If left edge overflows, flip to start-aligned
      if (left < 0) {
        left = rect.left;
      }
    }

    positionStyle.value = `position:fixed; width: ${contentWidth}; top: ${top}px; left: ${left}px;${transformX} transform-origin: center ${originY};`;
  };

  const resetPosition = () => {
    positionStyle.value = '';
  };

  // Close function
  const close = () => {
    update(false);
  };

  const { dropdownClassNames } = useDropdown(props, close, emits);

  // Show/hide with throttle
  const update = throttle(async (bol: boolean) => {
    if (props.disabled) return;
    visible.value = bol;
    if (visible.value) {
      document.addEventListener('click', onDocumentClick, true);
      document.addEventListener('contextmenu', onDocumentContext, true);
    } else {
      document.removeEventListener('click', onDocumentClick, true);
      document.removeEventListener('contextmenu', onDocumentContext, true);
      resetPosition();
      isContextMode.value = false;
    }
    updateNoScroll();
    emits('visibleChange', bol);
  }, 100);

  // Normalize triggers to an array and check membership
  const triggers = computed<UDropdownTrigger[]>(() =>
    Array.isArray(props.trigger) ? props.trigger : [props.trigger]
  );
  const hasTrigger = (t: UDropdownTrigger) => triggers.value.includes(t);

  // When hover is active, the overlay should not capture pointer events
  // so the mouse can freely move between trigger and content.
  const layerStyle = computed<Record<string, string>>(() => ({
    '--u-dropdown-bg': props.bgColor,
    'pointer-events': hasTrigger('hover') && !pinned.value ? 'none' : 'all',
  }));

  // --- Overlay handlers ---

  // Overlay click: close dropdown when clicking the transparent layer area
  const onOverlayClick = () => {
    pinned.value = false;
    update(false);
  };

  // Overlay right-click: close dropdown
  const onOverlayContext = () => {
    pinned.value = false;
    update(false);
  };

  // Document click handler (fallback, especially for hover mode where overlay is pointer-events:none)
  function onDocumentClick(e: MouseEvent) {
    if (
      triggerEl.value?.contains(e.target as Node) ||
      contentEl.value?.contains(e.target as Node)
    ) {
      return;
    }
    pinned.value = false;
    update(false);
  }

  function onDocumentContext(e: MouseEvent) {
    if (!hasTrigger('contextmenu')) return;
    if (
      triggerEl.value?.contains(e.target as Node) ||
      contentEl.value?.contains(e.target as Node)
    ) {
      return;
    }
    pinned.value = false;
    update(false);
  }

  // --- Trigger handlers ---

  // Click trigger: toggle pinned state
  const onClick = (e: MouseEvent) => {
    if (props.disabled) return;
    if (hasTrigger('click')) {
      e.stopPropagation();
      isContextMode.value = false;
      if (visible.value && pinned.value) {
        // Already pinned open → close
        pinned.value = false;
        update(false);
      } else {
        // Open and pin
        pinned.value = true;
        update(true);
      }
    }
  };

  // Contextmenu trigger
  const onContextMenu = (e: MouseEvent) => {
    if (props.disabled) return;
    if (hasTrigger('contextmenu')) {
      e.preventDefault();
      e.stopPropagation();
      isContextMode.value = true;
      pinned.value = true;
      contextPos.value = { x: e.clientX, y: e.clientY };
      update(true);
    }
  };

  // Hover trigger: show on mouse enter trigger
  const onMouseEnter = () => {
    if (props.disabled) return;
    if (hasTrigger('hover')) {
      clearHoverTimer();
      isContextMode.value = false;
      hoverTimer.value = setTimeout(() => {
        update(true);
      }, props.delay! / 3);
    }
  };

  // Hover trigger: hide on mouse leave trigger (delayed, may be cancelled by entering content)
  const onMouseLeave = () => {
    if (hasTrigger('hover')) {
      clearHoverTimer();
      if (pinned.value) return;
      hoverTimer.value = setTimeout(() => {
        update(false);
      }, props.delay);
    }
  };

  // Content hover: cancel close timer when mouse enters the dropdown panel
  const onContentMouseEnter = () => {
    if (hasTrigger('hover')) {
      clearHoverTimer();
    }
  };

  // Content hover: start close timer when mouse leaves the dropdown panel
  const onContentMouseLeave = () => {
    if (hasTrigger('hover')) {
      clearHoverTimer();
      if (pinned.value) return;
      hoverTimer.value = setTimeout(() => {
        update(false);
      }, props.delay);
    }
  };

  const clearHoverTimer = () => {
    if (hoverTimer.value) {
      clearTimeout(hoverTimer.value);
      hoverTimer.value = null;
    }
  };

  // Watch visible to update position
  watch(visible, (val) => {
    if (val) {
      // Use nextTick-like approach via setTimeout for DOM render
      setTimeout(() => {
        updatePosition();
      }, 0);
    }
  });

  // Resize handler
  useResize(() => {
    update(false);
  });

  onUnmounted(() => {
    document.removeEventListener('click', onDocumentClick, true);
    document.removeEventListener('contextmenu', onDocumentContext, true);
    clearHoverTimer();
  });

  // Animation
  const frameOpt = { duration: 250, easing: 'ease' };

  const enter = async (el: Element, done: () => void) => {
    updateNoScroll();
    const content = el.querySelector('.u-dropdown_content')!;
    if (content) {
      updatePosition();
      Array.from(content.children)
        .slice(0, 5)
        .forEach((ele: Element) => {
          ele.animate(
            [
              { opacity: 0, transform: 'translateY(-4px)' },
              { opacity: 1, transform: 'translateY(0)' },
            ],
            {
              ...frameOpt,
              duration: frameOpt.duration * 2,
            }
          );
        });
      content.animate(
        [
          { transform: 'scaleY(0)', opacity: 0 },
          { transform: 'scaleY(1)', opacity: 1 },
        ],
        frameOpt
      );
    }

    if (content) {
      await Promise.all(content.getAnimations().map((item) => item.finished));
    }
    done();
  };

  const leave = async (el: Element, done: () => void) => {
    const content = el.querySelector('.u-dropdown_content')!;
    if (content) {
      Array.from(content.children)
        .slice(0, 5)
        .forEach((ele: Element) => {
          ele.animate(
            [
              { opacity: 1, transform: 'translateY(0)' },
              { opacity: 0, transform: 'translateY(-4px)', offset: 0.33 },
              { opacity: 0, transform: 'translateY(-4px)', offset: 1 },
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
</script>

<style scoped lang="scss">
  .u-dropdown {
    display: inline-flex;
    position: relative;

    &.is-disabled {
      pointer-events: none;
      opacity: 0.65;
    }
  }
</style>

<style lang="scss">
  .u-dropdown-layer {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1000;
    pointer-events: all;
    background-color: transparent;

    .u-dropdown_content {
      padding: 6px 0;
      border-radius: 4px;
      background-color: var(--u-dropdown-bg);
      box-shadow:
        0 0 3px 0 rgba(var(--u-rgb), 0.18),
        0 5px 12px rgba(0, 0, 0, 0.12);
      overflow: auto;
      max-height: 300px;
      position: fixed;
      pointer-events: all;
      min-width: fit-content;
    }
  }

  .u-dropdown-item {
    --u-dropdown-item-bg: var(--u-primary-light-hover);
    --u-dropdown-item-color: var(--u-primary);
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 8px;
    width: 100%;
    padding: 6px 16px;
    color: var(--u-text-1);
    line-height: 1.5;
    min-height: 36px;
    cursor: pointer;
    font-weight: 500;
    font-size: 14px;
    overflow: hidden;
    transition: all 0.2s;
    white-space: nowrap;
    background: transparent;

    &:hover {
      background: rgba(var(--u-rgb), 0.05);
    }

    &.is-divided {
      margin-top: 6px;
      border-top: 1px solid var(--u-border);
      padding-top: 6px + 6px;
    }

    &.is-disabled {
      opacity: 0.65;
      pointer-events: none;
    }

    &.is-active {
      color: var(--u-dropdown-item-color);
      background: var(--u-dropdown-item-bg);
    }

    @each $color in primary, success, warning, error {
      &--#{$color} {
        --u-dropdown-item-bg: var(--u-#{$color}-light-hover);
        --u-dropdown-item-color: var(--u-#{$color}-active);
      }
    }
  }
</style>
