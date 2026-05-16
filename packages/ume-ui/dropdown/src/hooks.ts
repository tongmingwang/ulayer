import { inject, provide, ref, computed, watch } from 'vue';
import type {
  UDropdownProps,
  UDropdownItemProps,
  UDropdownProvider,
} from './types';

const key = Symbol('U_DROPDOWN_PROVIDER');

export const useDropdown = (
  props: UDropdownProps,
  closeFn: () => void,
  emits: any
) => {
  const active = ref<string | number>('');
  watch(
    () => props.modelValue,
    (v) => {
      active.value = v || '';
    }
  );
  provide(key, {
    active,
    setActive(value: string | number) {
      active.value = value;
      emits('update:modelValue', value);
    },
    close: closeFn,
  });

  const dropdownClassNames = computed(() => {
    return ['u-dropdown-layer'];
  });

  return { active, dropdownClassNames };
};

export const useDropdownItem = (props: UDropdownItemProps) => {
  const dropdownProvide = inject<UDropdownProvider>(key, null);
  const isVal = (val: any) =>
    val !== null && val !== undefined && val?.trim() !== '';

  const handleClick = () => {
    if (props.disabled) return;
    dropdownProvide?.setActive(props.value!);
    dropdownProvide?.close();
  };

  const itemClass = computed(() => {
    return [
      'u-dropdown-item',
      props.color && `u-dropdown-item--${props.color}`,
      isVal(props.value) &&
        props.value === dropdownProvide?.active?.value &&
        'is-active',
      props.disabled && 'is-disabled',
      props.divided && 'is-divided',
    ].filter(Boolean);
  });

  return { itemClass, handleClick };
};
