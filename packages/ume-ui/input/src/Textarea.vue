<template>
  <textarea
    v-bind="props"
    class="u-textarea"
    ref="input"
    :type="props.type"
    :value="props.modelValue"
    :placeholder="props.placeholder"
    :disabled="props.disabled"
    :readonly="props.readonly"
    @input="handleInput"
    @blur="handleBlur"
    @focus="handleFocus"></textarea>
</template>

<script setup lang="ts">
  import { useTemplateRef } from 'vue';
  import type { UInputPropsType } from './types';

  const emit = defineEmits(['update:modelValue', 'change', 'blur', 'focus']);
  const props = defineProps<UInputPropsType>();
  const inputRef = useTemplateRef<HTMLInputElement>('input');
  defineExpose({
    $el: inputRef,
    focus: () => inputRef.value?.focus(),
    blur: () => inputRef.value?.blur(),
  });

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
  .u-textarea {
    width: 100%;
    resize: vertical;
    border: none;
    outline: none;
    border-radius: inherit;
    color: inherit;
    font-size: inherit;
    font-family: inherit;
    background: transparent;
    padding: 4px 12px;
    font-size: 14px;
    min-height: var(--u-input-height);
  }
</style>
