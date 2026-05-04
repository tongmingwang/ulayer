<template>
  <div :class="inputClass">
    <input
      v-bind="$attrs"
      ref="input"
      :type="props.type"
      :value="props.modelValue"
      :placeholder="props.placeholder"
      :disabled="props.disabled"
      :readonly="props.readonly"
      class="u-input__inner"
      @input="handleInput"
      @change="handleChange"
      @blur="handleBlur"
      @focus="handleFocus" />
  </div>
</template>

<script lang="ts" setup>
  import { useTemplateRef, computed } from 'vue';
  import type { UInputPropsType } from './types';

  const inputRef = useTemplateRef<HTMLInputElement>('input');

  defineOptions({
    name: 'UInput',
  });
  defineExpose({
    $el: inputRef.value,
    focus: () => inputRef.value?.focus(),
    blur: () => inputRef.value?.blur(),
  });
  const props = defineProps<UInputPropsType>();
  const inputClass = computed(() => {
    return ['u-input', props.size ? `u-input--${props.size}` : ''].filter(
      Boolean
    );
  });
  const emit = defineEmits(['update:modelValue', 'change', 'blur', 'focus']);

  const handleInput = (e: Event) => {
    const target = e.target as HTMLInputElement;
    emit('update:modelValue', target.value);
  };

  const handleChange = (e: Event) => {
    const target = e.target as HTMLInputElement;
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
  @use './style.scss';
</style>
