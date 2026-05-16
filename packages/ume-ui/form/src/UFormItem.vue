<template>
  <div :class="itemClass" :style="itemStyle">
    <label v-if="props.label || $slots.label" class="u-form-item__label">
      <slot name="label">{{ labelText }}</slot>
    </label>
    <div class="u-form-item__content">
      <slot></slot>
      <transition name="u-fade">
        <div v-if="props.message" class="u-form-item__message">
          {{ props.message }}
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { U_COLORS } from '@/types/ume';
  import type { FormItemProps } from './types';
  import { computed } from 'vue';

  const props = withDefaults(defineProps<FormItemProps>(), {
    color: 'error',
    labelWidth: '80px',
    required: false,
    message: '',
  });

  defineOptions({
    name: 'UFormItem',
  });

  const itemClass = computed(() => {
    return [
      'u-form-item',
      props.required ? 'is-required' : '',
      props.message ? 'is-error' : '',
    ].filter(Boolean);
  });

  const itemStyle = computed(() => {
    return {
      '--u-form-label-width': props.labelWidth,
      '--u-form-message-color': U_COLORS.includes(props.color)
        ? `var(--u-${props.color})`
        : props.color,
    };
  });

  const labelText = computed(() => {
    return props.label || '';
  });
</script>

<style lang="scss">
  .u-form-item {
    display: flex;
    align-items: flex-start;
    margin-bottom: var(--u-form-item-margin-bottom);
    font-size: var(--u-form-item-font-size);
    line-height: var(--u-form-item-line-height);
    color: var(--u-text-2);

    &.is-required {
      .u-form-item__label {
        &::before {
          content: '*';
          color: var(--u-error);
          margin-right: 4px;
        }
      }
    }

    &.is-error {
      .u-form-item__content {
        --u-border: var(--u-form-message-color) !important;
        .u-select,
        .u-input-wrapper,
        input,
        textarea {
          border-color: var(--u-form-message-color) !important;
          outline-color: var(--u-form-message-color) !important;
          &:focus-within,
          &:hover {
            border-color: var(--u-form-message-color) !important;
            outline-color: var(--u-form-message-color) !important;
          }
        }
      }
    }

    &__label {
      flex-shrink: 0;
      padding-right: 12px;
      padding-top: 6px;
      box-sizing: border-box;
      color: var(--u-text-2);
      font-size: var(--u-form-item-font-size);
      line-height: var(--u-form-item-line-height);
      word-break: break-word;

      &--top {
        width: auto !important;
        text-align: left;
        padding-bottom: 4px;
        padding-top: 0;
      }
    }

    &__content {
      flex: 1;
      position: relative;
      min-width: 0;
    }

    &__message {
      position: absolute;
      left: 0;
      bottom: -18px;
      font-size: 12px;
      color: var(--u-form-message-color);
      line-height: 1.2;
      white-space: nowrap;
    }
  }

  .u-fade-enter-active,
  .u-fade-leave-active {
    transition: all 0.3s ease;
  }

  .u-fade-enter-from,
  .u-fade-leave-to {
    opacity: 0;
    transform: translateY(-8px);
  }
</style>
