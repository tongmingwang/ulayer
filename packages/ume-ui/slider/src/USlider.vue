<template>
  <div :class="classes" :style="{
    '--u-slider-thumb-size': props.thumbSize,
    '--u-slider-track-size': props.trackSize,
  }">
    <!-- 滑块主体区域 -->
    <div
      ref="sliderRef"
      class="u-slider_body"
      @mousedown="startDrag"
      @touchstart="startDrag">
      <!-- 滑轨背景 -->
      <div class="u-slider__track"></div>
      <!-- 已选中的进度条 -->
      <div class="u-slider__filled" :style="styles.filledStyle"></div>
      <!-- 拖拽手柄 -->
      <div class="u-slider__thumb" :style="styles.thumbStyle">
        <div class="u-slider_thumb-inner">
          <div v-ripple class="u-slider__thumb-bg"></div>
          <!-- 数值显示 -->
          <div class="u-slider__thumb-value">{{ currentValue }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref, computed, watch, onMounted, onBeforeUnmount } from 'vue';
  import ripple from '@/directives/ripple';
  import type { USliderProps, Emits } from './types';
  defineOptions({
    name: 'USlider',
    directives: {
      ripple,
    },
  });

  const props = withDefaults(defineProps<USliderProps>(), {
    modelValue: 0,
    min: 0,
    max: 100,
    step: 1,
    disabled: false,
    thumbSize:'20px',
    trackSize:'6px'
  });
  const emit = defineEmits<Emits>();
  // DOM 元素引用
  const sliderRef = ref<HTMLElement | null>(null);

  // 响应式状态
  const dragging = ref<boolean>(false);
  const currentValue = ref<number>(props.modelValue);

  // 计算当前值对应的百分比
  const percentage = computed<number>(() => {
    if (props.max === props.min) return 0;
    return ((currentValue.value - props.min) / (props.max - props.min)) * 100;
  });

  const styles = computed(() => {
    if (props.vertical) {
      return {
        filledStyle: {
          height: percentage.value + '%',
        },
        thumbStyle: {
          bottom: percentage.value + '%',
        },
      };
    } else {
      return {
        filledStyle: {
          width: percentage.value + '%',
        },
        thumbStyle: {
          left: percentage.value + '%',
        },
      };
    }
  });

  // 监听外部 modelValue 变化
  watch(
    () => props.modelValue,
    (newVal: number) => {
      if (newVal !== currentValue.value && !dragging.value) {
        let val = limitValue(newVal);
        val = snapToStep(val);
        val = getDecimalPlaces(val);
        currentValue.value = val;
      }
    }
  );

  // 监听窗口大小变化
  onMounted(() => {
    window.addEventListener('resize', updateSliderWidth);
  });

  onBeforeUnmount(() => {
    window.removeEventListener('resize', updateSliderWidth);
    removeDragEvents();
  });

  // 限制数值在 min 和 max 范围内
  const limitValue = (val: number): number => {
    return Math.min(props.max, Math.max(props.min, val));
  };

  // 类
  const classes = computed(() => {
    return [
      'u-slider',
      props.disabled ? 'is-disabled' : '',
      props.color ? `u-slider--${props.color}` : '',
      dragging.value ? 'is-dragging' : '',
      props.vertical ? 'is-vertical' : '',
    ].filter(Boolean);
  });

  // 根据步长对齐数值
  const snapToStep = (val: number): number => {
    const step = props.step;
    if (step <= 0) return val;
    const stepCount = Math.round((val - props.min) / step);
    return props.min + stepCount * step;
  };

  // 根据鼠标/触摸位置计算新值
  const getValueFromEvent = (e: MouseEvent | TouchEvent): number => {
    const rect = sliderRef.value?.getBoundingClientRect();
    if (!rect) return currentValue.value;
    let percent: number = 0;

    // 垂直方向，需要减去滑轨高度
    if (props.vertical) {
      let clientY: number;
      if (e instanceof MouseEvent) {
        clientY = e.clientY;
      } else {
        clientY = e.touches[0].clientY;
      }

      let offsetY = rect.y + rect.height - clientY;
      offsetY = Math.min(rect.height, Math.max(0, offsetY));
      percent = offsetY / rect.height;
    } else {
      let clientX: number;
      if (e instanceof MouseEvent) {
        clientX = e.clientX;
      } else {
        clientX = e.touches[0].clientX;
      }

      let offsetX = clientX - rect.left;
      offsetX = Math.min(rect.width, Math.max(0, offsetX));
      percent = offsetX / rect.width;
    }
    let newVal = props.min + percent * (props.max - props.min);
    newVal = snapToStep(newVal);
    newVal = limitValue(newVal);
    // 确保保留小数点位和步数的精度一致
    newVal = getDecimalPlaces(newVal);
    return newVal;
  };

  const getDecimalPlaces = (val: number): number => {
    const place = val.toString().indexOf('.');
    return place > 0 ? Number(val.toFixed(place)) : val;
  };

  // 设置当前值并触发事件
  const setCurrentValue = (
    newVal: number,
    isDragging: boolean = false
  ): void => {
    if (props.disabled) return;
    if (currentValue.value === newVal) return;

    currentValue.value = newVal;
    emit('update:modelValue', currentValue.value);
    if (!isDragging) {
      emit('change', currentValue.value);
    }
  };

  // 开始拖拽
  const startDrag = (e: MouseEvent | TouchEvent): void => {
    if (props.disabled) return;
    e.preventDefault();

    dragging.value = true;

    // 立即根据点击位置更新数值
    const newVal = getValueFromEvent(e);
    setCurrentValue(newVal, true);

    // 绑定全局拖拽事件
    window.addEventListener('mousemove', onDrag);
    window.addEventListener('mouseup', stopDrag);
    window.addEventListener('touchmove', onDrag);
    window.addEventListener('touchend', stopDrag);
  };

  // 拖拽中
  const onDrag = (e: MouseEvent | TouchEvent): void => {
    if (!dragging.value || props.disabled) return;
    e.preventDefault();

    const newVal = getValueFromEvent(e);
    if (newVal !== currentValue.value) {
      currentValue.value = newVal;
      emit('update:modelValue', currentValue.value);
    }
  };

  // 结束拖拽
  const stopDrag = (): void => {
    if (!dragging.value) return;

    dragging.value = false;
    emit('change', currentValue.value);
    removeDragEvents();
  };

  // 移除拖拽事件监听
  const removeDragEvents = (): void => {
    window.removeEventListener('mousemove', onDrag);
    window.removeEventListener('mouseup', stopDrag);
    window.removeEventListener('touchmove', onDrag);
    window.removeEventListener('touchend', stopDrag);
  };

  // 更新滑块容器宽度（保留此函数以备不时之需，但当前未使用）
  const updateSliderWidth = (): void => {
    // 预留函数，可在需要时使用
  };
</script>

<style scoped lang="scss">
 @mixin uSlideBase {
    display: flex;
    align-items: center;
    user-select: none;
    margin: 0;
    color: var(--u-text-1);
 }
  .u-slider {
    --u-slider-track-color: rgba(var(--u-rgb), 0.12);
    --u-slider-thumb-color: rgba(var(--u-rgb), 1);
    width: 100%;
    padding: 16px 0;
    @include uSlideBase;
    @each $color in primary, error, warning, success {
      &.u-slider--#{$color} {
        --u-slider-track-color: var(--u-#{$color}-light);
        --u-slider-thumb-color: var(--u-#{$color});
        color: var(--u-#{$color});
      }
    }
    .u-slider__thumb-bg {
      position: absolute;
      top: -8px;
      left: -8px;
      width: calc(100% + 16px);
      max-width: calc(100% + 16px);
      min-width: calc(100% + 16px);
      height: calc(100% + 16px);
      max-height: calc(100% + 16px);
      min-height: calc(100% + 16px);
      background-color: rgba(var(--u-rgb), 0.05);
      border-radius: 100%;
      opacity: 0;
      transition: opacity 0.3s ease;
      color: inherit;
    }
    .u-slider__thumb-value {
      position: absolute;
      top: -24px;
      left: 50%;
      transform: translateX(-50%);
      width: fit-content;
      height: 24px;
      display: inline-flex;
      align-items: center;
      font-size: 12px;
      padding: 0 8px;
      border-radius: 8px;
      background: rgba(var(--u-rgb), 0.15);
      color: var(--u-text-1);
      transition: opacity 0.3s ease;
      opacity: 0;
    }
  }
  .u-slider_body {
    position: relative;
    flex: 1;
    height: var(--u-slider-track-size,6px);
    border-radius: var(--u-slider-track-size,6px);
    cursor: pointer;
  }

  .u-slider__track {
    position: absolute;
    inset: 0;
    background-color: var(--u-slider-track-color);
    border-radius: var(--u-slider-track-size,6px);
  }

  .u-slider__filled {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    background-color: var(--u-slider-thumb-color);
    border-radius: var(--u-slider-track-size,6px);
  }

  .u-slider__thumb {
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    width: var(--u-slider-thumb-size,20px);
    height: var(--u-slider-thumb-size,20px);
    background-color: var(--u-slider-thumb-color);
    border-radius: 50%;
    box-sizing: border-box;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  }

  .u-slider_thumb-inner {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    position: relative;
    &:hover {
      .u-slider__thumb-bg {
        opacity: 1;
      }
      .u-slider__thumb-value {
        opacity: 1;
      }
    }
  }

  /* 拖拽状态 */
  .is-dragging .u-slider__thumb {
    transform: translate(-50%, -50%);
    .u-slider__thumb-bg {
      opacity: 1;
    }
    .u-slider__thumb-value {
      opacity: 1;
    }
  }

  /* 禁用状态 */
  .is-disabled .slider {
    cursor: not-allowed;
    opacity: 0.65;
  }

  .is-vertical {
    padding: 0 16px;
    flex-direction: column;
    height: 100%;
    width: auto;
    .u-slider_body {
      width: var(--u-slider-track-size,6px);
      height: 100%;
      border-radius: var(--u-slider-track-size,6px);
    }
    .u-slider__filled {
      width: 100%;
      bottom: 0;
      top: auto;
    }
    .u-slider__thumb {
      top: auto;
      left: 50%;
      bottom: 50%;
      right: auto;
      transform: translate(-50%, 50%);
    }
  }
</style>
