<template>
  <input
    v-bind="{
      ...$attrs,
      ...$props,
    }"
    ref="input"
    :class="inputClass"
    :type="props.type"
    :value="props.modelValue"
    :placeholder="props.placeholder"
    :disabled="props.disabled"
    :readonly="props.readonly"
    @input="handleInput"
    @blur="handleBlur"
    @focus="handleFocus" />
  <slot name="suffix"></slot>
</template>

<script lang="ts" setup>
  import { useTemplateRef, computed } from 'vue';
  import type { UInputPropsType } from './types';

  const inputRef = useTemplateRef<HTMLInputElement>('input');
  defineOptions({
    name: 'UInput',
  });
  defineExpose({
    $el: inputRef,
    focus: () => inputRef.value?.focus(),
    blur: () => inputRef.value?.blur(),
  });
  const props = defineProps<UInputPropsType>();
  const inputClass = computed(() => {
    return [
      'u-input',
      props.disabled ? 'is-disabled' : '',
      props.readonly ? 'is-readonly' : '',
    ].filter(Boolean);
  });
  const emit = defineEmits(['update:modelValue', 'change', 'blur', 'focus']);

  const handleInput = (e: Event) => {
    const target = e.target as HTMLInputElement;
    emit('update:modelValue', target.value);
    emit('change', target.value);
  };

  const handleBlur = (e: FocusEvent) => {
    emit('blur', e);
  };

  const handleFocus = (e: FocusEvent) => {
    emit('focus', e);
  };
</script>

<style scoped lang="scss">
  .u-input {
    width: 100%;
    height: 100%;
    text-align: left;
    border: none;
    padding: 0;
    background: transparent;
    outline: none;
    font-size: 14px;
    color: inherit;
    border-radius: inherit;
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
</style>
