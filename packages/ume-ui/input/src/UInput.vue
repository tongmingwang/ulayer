<template>
  <div :class="inputClass" @click="onClick">
    <template v-if="cType === 'textarea'">
      <Textarea
        v-bind="{
          ...$attrs,
          ...props,
          ref: 'input',
          onInput: handleInput,
          onBlur: handleBlur,
          onFocus: handleFocus,
        }"
        v-model="selfValue" />
    </template>
    <template v-else-if="cType == 'number'">
      <InputNumber
        v-bind="{
          ...$attrs,
          ...props,
        }"
        @increase="onIncrease"
        @decrease="onDecrease">
        <slot name="prefix">
          <Text :text="props.prefix || ''" />
        </slot>
        <Input
          v-bind="{
            ...$attrs,
            ...props,
            ref: 'input',
            onInput: handleInput,
            onBlur: handleBlur,
            onFocus: handleFocus,
          }"
          v-model="selfValue" />
        <slot name="suffix">
          <Text :text="props.suffix || ''" />
        </slot>
      </InputNumber>
    </template>
    <template v-else>
      <slot name="prefix">
        <Text :text="props.prefix || ''" />
      </slot>
      <Input
        v-bind="{
          ...$attrs,
          ...props,
          ref: 'input',
          onInput: handleInput,
          onBlur: handleBlur,
          onFocus: handleFocus,
        }"
        v-model="selfValue" />
      <PasswordEye
        v-if="cType === 'password'"
        :show-pwd="showPwd"
        @change="onPwdChange" />
      <slot name="suffix">
        <Text :text="props.suffix || ''" />
      </slot>
    </template>
  </div>
</template>

<script lang="ts" setup>
  import { useTemplateRef, computed, ref, watch } from 'vue';
  import type { UInputPropsType } from './types';
  import Input from './Input.vue';
  import Textarea from './Textarea.vue';
  import InputNumber from './InputNumber.vue';
  import Text from './Text.vue';
  import PasswordEye from './PasswordEye.vue';

  const props = defineProps<UInputPropsType>();
  const inputRef = useTemplateRef<HTMLInputElement>('input');
  const selfValue = ref(props.modelValue);
  const showPwd = ref(false);

  defineOptions({
    name: 'UInput',
  });
  defineExpose({
    $el: inputRef,
    focus: () => inputRef.value?.focus(),
    blur: () => inputRef.value?.blur(),
  });

  const cType = computed(() => {
    return props.type ? props.type.toLowerCase() : 'text';
  });
  const inputClass = computed(() => {
    return [
      'u-input-wrapper',
      props.size ? `u-input-wrapper--${props.size}` : '',
      props.variant ? `u-input-wrapper--${props.variant}` : '',
      props.disabled ? 'is-disabled' : '',
      props.readonly ? 'is-readonly' : '',
      cType.value === 'textarea' ? 'u-input-wrapper--textarea' : '',
      cType.value === 'number' ? 'u-input-wrapper--number' : '',
    ].filter(Boolean);
  });

  watch(
    () => props.modelValue,
    (val) => {
      selfValue.value = val;
    }
  );
  const emit = defineEmits(['update:modelValue', 'change', 'blur', 'focus']);
  const onClick = (e: MouseEvent) => {
    if (props.disabled || props.readonly) {
      e.preventDefault();
      return;
    }
    inputRef.value?.focus();
  };
  const handleInput = (e: Event) => {
    const target = e.target as HTMLInputElement;
    updateValue(target.value);
  };

  const handleBlur = (e: FocusEvent) => {
    emit('blur', e);
  };

  const handleFocus = (e: FocusEvent) => {
    emit('focus', e);
  };

  const onIncrease = () => {
    const step = Number(props.step) || 1;
    const value = (Number(selfValue.value) || 0) + step;
    updateValue(value.toString());
  };

  const onDecrease = () => {
    const step = Number(props.step) || 1;
    const value = (Number(selfValue.value) || 0) - step;
    updateValue(value.toString());
  };

  const onPwdChange = () => {
    // @ts-ignore
    const inputEl = inputRef.value?.$el;
    if (!inputEl) return;
    showPwd.value = !showPwd.value;
    if (showPwd.value) {
      inputEl.type = 'text';
    } else {
      inputEl.type = 'password';
    }
  };

  function updateValue(value: string) {
    let res: string = value;
    // 处理一下数据
    if (cType.value === 'number') {
      const num = Number(parseFloat(value));
      if (isNaN(num)) {
        res = '';
      } else {
        // 判断min max
        const min = Number(props.min) ?? -Infinity;
        const max = Number(props.max) ?? Infinity;
        if (Number(min) !== undefined && num < min) {
          res = min.toString();
        } else if (props.max !== undefined && num > max) {
          res = max.toString();
        }
      }
    } else if (['textarea', 'text'].includes(cType.value)) {
      // 判断最大长度
      const maxlength = Number(props.maxlength);
      const minlength = Number(props.minlength);
      if (maxlength && value.length > maxlength) {
        res = value.slice(0, maxlength);
      } else if (minlength && value.length < minlength) {
        res = value.slice(0, minlength);
      }
    }
    console.log(res);
    selfValue.value = res;
    emit('update:modelValue', res);
    emit('change', res);
  }
</script>

<style lang="scss">
  @use './style.scss';
</style>
