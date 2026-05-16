<template>
  <label :class="className">
    <span class="u-radio_input" v-ripple>
      <svg
        focusable="false"
        aria-hidden="true"
        viewBox="0 0 24 24"
        width="24"
        height="24"
        fill="currentColor"
        v-if="isChecked">
        <path
          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
        <path
          d="M12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"></path>
      </svg>
      <svg
        focusable="false"
        fill="currentColor"
        aria-hidden="true"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        v-else>
        <path
          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
      </svg>
      <input
        ref="inputRef"
        class="u-radio_original"
        type="radio"
        :disabled="props.disabled"
        :checked="isChecked"
        @change="handleChange" />
    </span>
    <span class="u-radio_label">
      <slot>{{ props.label }}</slot>
    </span>
  </label>
</template>

<script setup lang="ts">
  import type { RadioProps } from './types';
  import { radioGroupKey } from './types';
  import { computed, inject, useTemplateRef } from 'vue';
  import ripple from '@/directives/ripple';

  const props = withDefaults(defineProps<RadioProps>(), {
    disabled: false,
    value: undefined,
    label: '',
    color: '',
  });
  const inputRef = useTemplateRef<HTMLInputElement>('inputRef');
  const groupContext = inject(radioGroupKey, null);
  const isChecked = computed(() => {
    if (groupContext) {
      return (
        groupContext.modelValue?.value === props.value && isVal(props.value)
      );
    }
    return false;
  });

  function isVal(val: unknown) {
    return val !== null && val !== undefined;
  }

  const className = computed(() => {
    return [
      'u-radio',
      props.disabled ? 'is-disabled' : '',
      isChecked.value ? 'is-checked' : '',
      props.color && `u-radio--${props.color}`,
    ].filter(Boolean);
  });

  defineOptions({
    name: 'URadio',
    directives: {
      ripple,
    },
  });

  defineExpose({
    $el: inputRef,
  });

  const handleChange = () => {
    if (groupContext) {
      groupContext.updateValue(props.value);
    }
  };
</script>

<style lang="scss" scoped>
  @use './style.scss';
</style>
