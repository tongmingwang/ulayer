<template>
  <form :class="formClass" :style="styles">
    <slot />
  </form>
</template>

<script setup lang="ts">
  import type { FormProps } from './types';
  import { computed } from 'vue';

  const props = withDefaults(defineProps<FormProps>(), {
    labelPosition: 'right',
    inline: false,
    disabled: false,
    size: 'medium',
  });

  defineOptions({
    name: 'UForm',
  });

  const styles = computed(() => {
    return {
      '--u-form-label-width': props.labelWidth ? `${props.labelWidth}` : '',
    };
  });

  const formClass = computed(() => {
    return [
      'u-form',
      props.inline ? 'u-form--inline' : '',
      props.labelPosition ? `u-form--label-${props.labelPosition}` : '',
      props.disabled ? 'is-disabled' : '',
    ].filter(Boolean);
  });
</script>

<style lang="scss">
  .u-form {
    --u-form-item-margin-bottom: 22px;
    --u-form-item-font-size: 14px;
    --u-form-item-line-height: 1.5;
    display: block;

    &--inline {
      display: flex;
      flex-wrap: wrap;
      align-items: flex-start;
      gap: 0 16px;

      .u-form-item {
        display: inline-flex;
        margin-right: 16px;
        vertical-align: top;
      }
    }

    &--label-top {
      .u-form-item {
        flex-direction: column;
        .u-form-item__content {
          width: 100%;
        }
        &__label {
          width: 100% !important;
          text-align: left;
          padding-bottom: 4px;
        }
      }
    }

    &--label-left {
      .u-form-item__label {
        text-align: left;
      }
    }

    &--label-right {
      .u-form-item__label {
        text-align: right;
      }
    }

    &.is-disabled {
      pointer-events: none;
      opacity: 0.65;
    }
  }
</style>
