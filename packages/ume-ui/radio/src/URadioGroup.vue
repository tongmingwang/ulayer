<template>
  <div :class="className">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
  import type { RadioGroupProps } from './types';
  import { radioGroupKey } from './types';
  import { computed, provide, ref, watch } from 'vue';

  const emit = defineEmits(['change', 'update:modelValue']);
  const props = withDefaults(defineProps<RadioGroupProps>(), {
    disabled: false,
    modelValue: undefined,
    color: '',
    vertical: false,
  });
  const selfValue = ref(props.modelValue);
  const className = computed(() => {
    return [
      'u-radio-group',
      props.vertical ? 'u-radio-group--vertical' : '',
      props.disabled && 'is-disabled',
      props.color && `u-radio-group--${props.color}`,
    ].filter(Boolean);
  });

  watch(
    () => props.modelValue,
    (value) => {
      selfValue.value = value;
    }
  );

  const updateValue = (value: RadioGroupProps['modelValue']) => {
    selfValue.value = value;
    emit('update:modelValue', value);
    emit('change', value);
  };

  provide(radioGroupKey, {
    modelValue: selfValue,
    disabled: props.disabled,
    color: props.color,
    updateValue,
  });

  defineOptions({
    name: 'URadioGroup',
  });
</script>

<style lang="scss" scoped>
  .u-radio-group {
    --u-radio-color: var(--u-text-1);
    --u-radio-bg: transparent;

    display: inline-flex;
    align-items: center;
    flex-wrap: wrap;

    &--vertical {
      flex-direction: column;
      align-items: flex-start;
    }
    &.is-disabled {
      pointer-events: none;
      opacity: 0.65;
    }
    @each $color in primary, success, warning, error {
      &--#{$color} {
        --u-radio-color: var(--u-#{$color});
      }
    }
  }
</style>
