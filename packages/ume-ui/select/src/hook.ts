import { inject, provide, ref, computed } from 'vue';
import type { USelectProps, USelectProviderProps, UOptionProps } from './types';

const key = Symbol('U_SELECT_PROVIDER');
export const useSelect = (props: USelectProps, emits: any) => {
  const active = ref(props.modelValue || "");
  
  provide(key, {
    active,
    setActive(value: string) {
      active.value = value;
      emits('update:modelValue', value);
      emits('change', value);
    },
  });
  const selectClassNames = computed(() => {
    return ['u-select-layer'];
  });

  const scrollToActive = (el:HTMLElement) => {
    if (el) {
      const activeItem = el.querySelector('.u-option.is-active');
      if (activeItem) {
        activeItem.scrollIntoView({
          behavior: 'instant',
          block: 'nearest',
          inline: 'start',
        });
      }
    }
  };

  return { active,selectClassNames, scrollToActive};
};

export const useSelectOption = (props: UOptionProps) => {
  const listProvide = inject<USelectProviderProps>(key, null);
  const isVal = (val: any) => val !== null && val !== undefined;
  const handleClick = () => {
    if (props.disabled || !isVal(props.value)) return;
    listProvide?.setActive(props.value!);
  };

  const classNames = computed(() => {
    return [
      'u-option',
      props.color && `u-option--${props.color}`,
      isVal(props.value) &&
        props.value === listProvide?.active?.value &&
        'is-active',
      props.disabled && 'is-disabled',
    ].filter(Boolean);
  });

  const styles = computed(() => {
    return {
      borderRadius: props.radius,
      minHeight: props.height || '',
    };
  });
  return {
    listProvide,
    classNames,
    handleClick,
    styles,
  };
};
