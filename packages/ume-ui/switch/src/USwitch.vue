<template>
  <label :class="classNames" :aria-checked="checked">
    <input
      type="checkbox"
      class="u-switch__input"
      :checked="checked"
      :disabled="props.disabled"
      @change="handleChange" />
    <div class="u-switch__thumb">
      <slot name="checked-icon" v-if="checked"></slot>
      <slot name="unchecked-icon" v-else></slot>
    </div>
    <div class="u-switch__body">
      <div class="u-switch__checked">
        <slot name="checked">{{ props.checked }}</slot>
      </div>
      <div class="u-switch__unchecked">
        <slot name="unchecked">{{ props.unchecked }}</slot>
      </div>
    </div>
  </label>
</template>

<script setup lang="ts">
  import type { USwitchProps } from './types';
  import { ref, computed, watch } from 'vue';
  import ripple from '@/directives/ripple';
  defineOptions({
    name: 'USwitch',
    directives: { ripple },
  });
  const props = withDefaults(defineProps<USwitchProps>(), {
    modelValue: false,
    size: 'medium',
    color: '',
  });
  const checked = ref(props.modelValue);
  const classNames = computed(() => {
    return [
      'u-switch',
      props.size && `u-switch--${props.size}`,
      props.color && `u-switch--${props.color}`,
      checked.value && 'is-checked',
      props.disabled && 'is-disabled',
    ].filter(Boolean);
  });
  watch(
    () => props.modelValue,
    (val) => {
      checked.value = val;
    }
  );
  const emit = defineEmits(['update:modelValue', 'change']);

  const handleChange = (e: Event) => {
    checked.value = Boolean((e.target as HTMLInputElement).checked);
    emit('update:modelValue', checked.value);
    emit('change', checked.value);
  };
</script>

<style scoped lang="scss">
  @use './style.scss';
</style>
