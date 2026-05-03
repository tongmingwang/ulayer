<template>
  <div class="ul-input">
    <input
      v-bind="$attrs"
      :type="type"
      :value="modelValue"
      :placeholder="placeholder"
      :disabled="disabled"
      :readonly="readonly"
      class="ul-input__inner"
      @input="handleInput"
      @change="handleChange"
      @blur="handleBlur"
      @focus="handleFocus" />
  </div>
</template>

<script lang="ts" setup>
  import { inputProps } from './types';

  defineOptions({
    name: 'UlInput',
  });

  const props = defineProps(inputProps);
  const emit = defineEmits([
    'update:modelValue',
    'input',
    'change',
    'blur',
    'focus',
  ]);

  const handleInput = (e: Event) => {
    const target = e.target as HTMLInputElement;
    emit('update:modelValue', target.value);
    emit('input', target.value);
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

<style>
  .ul-input {
    display: inline-block;
    width: 100%;
  }

  .ul-input__inner {
    width: 100%;
    padding: 8px 12px;
    font-size: 14px;
    line-height: 1.5;
    color: #606266;
    background-color: #fff;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    box-sizing: border-box;
    outline: none;
    transition: border-color 0.2s;
  }

  .ul-input__inner:focus {
    border-color: #409eff;
  }

  .ul-input__inner:disabled {
    background-color: #f5f7fa;
    border-color: #e4e7ed;
    color: #c0c4cc;
    cursor: not-allowed;
  }
</style>
