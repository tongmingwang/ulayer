<template>
  <label :class="className">
    <span class="u-checkbox_input">
      <span class="u-checkbox_inner" v-ripple></span>
      <svg
        focusable="false"
        aria-hidden="true"
        viewBox="0 0 24 24"
        width="24"
        height="24"
        fill="currentColor"
        v-if="isChecked">
        <path
          d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path>
      </svg>
      <svg
        focusable="false"
        fill="currentColor"
        aria-hidden="true"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        v-else-if="!props.indeterminate">
        <path
          d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path>
      </svg>
      <svg
        focusable="false"
        aria-hidden="true"
        fill="currentColor"
        v-else-if="props.indeterminate"
        width="24"
        height="24"
        viewBox="0 0 24 24">
        <path
          d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"></path>
      </svg>
      <input
        ref="inputRef"
        class="u-checkbox_original"
        type="checkbox"
        :disabled="props.disabled"
        :name="props.name"
        :checked="isChecked"
        @change="handleChange" />
    </span>
    <span class="u-checkbox_label">
      <slot>{{ props.label }}</slot>
    </span>
  </label>
</template>

<script setup lang="ts">
  import type { CheckboxProps } from './types';
  import { computed, watch, useTemplateRef, onMounted } from 'vue';
  import ripple from '@/directives/ripple';

  const emit = defineEmits(['change', 'update:modelValue']);
  const props = withDefaults(defineProps<CheckboxProps>(), {
    disabled: false,
    modelValue: undefined,
    checked: undefined,
    label: '',
    color: '',
  });
  const inputRef = useTemplateRef<HTMLInputElement>('inputRef');

  const isChecked = computed(() => {
    return props.modelValue ?? props.checked ?? false;
  });

  const className = computed(() => {
    return [
      'u-checkbox',
      props.disabled ? 'is-disabled' : '',
      isChecked.value ? 'is-checked' : '',
      props.indeterminate ? 'is-indeterminate' : '',
      props.color && `u-checkbox--${props.color}`,
    ].filter(Boolean);
  });

  defineOptions({
    name: 'UCheckbox',
    directives: {
      ripple,
    },
  });

  defineExpose({
    $el: inputRef,
  });

  const updateIndeterminate = () => {
    if (inputRef.value) {
      inputRef.value.indeterminate = !!props.indeterminate;
    }
  };

  onMounted(() => {
    updateIndeterminate();
  });

  watch(
    () => props.indeterminate,
    () => {
      updateIndeterminate();
    }
  );

  const handleChange = (e: Event) => {
    const target = e.target as HTMLInputElement;
    emit('update:modelValue', target.checked);
    emit('change', target.checked);
  };
</script>

<style lang="scss" scoped>
  @use './style.scss';
</style>
