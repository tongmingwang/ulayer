import { inject, provide, ref, computed, onMounted, useTemplateRef } from 'vue';
import type { UListProps, UListProvider, UListItemProps } from './types';
const key = Symbol('uList');
export const useList = (props: UListProps, emits: any) => {
  const active = ref(props.modelValue);
  const elRef = useTemplateRef<HTMLElement>('uList');
  onMounted(() => {
    scrollToActive();
  });
  provide(key, {
    active,
    setActive(value: string) {
      active.value = value;
      emits('update:modelValue', value);
    },
  });
  const classNames = computed(() => {
    return ['u-list', props.color && `u-list--${props.color}`].filter(Boolean);
  });

  const scrollToActive = () => {
    if (elRef.value) {
      const activeItem = elRef.value.querySelector('.u-list_item.is-active');
      if (activeItem) {
        activeItem.scrollIntoView({
          behavior: 'instant',
          block: 'nearest',
          inline: 'nearest',
        });
      }
    }
  };

  return { classNames, scrollToActive };
};

export const useListItem = (props: UListItemProps) => {
  const listProvide = inject<UListProvider>(key, null);
  const isVal = (val: any) => val !== null && val !== undefined;
  const handleClick = () => {
    if (props.disabled || !isVal(props.value)) return;
    listProvide?.setActive(props.value!);
  };

  const listItemClass = computed(() => {
    return [
      'u-list_item',
      props.color && `u-list_item--${props.color}`,
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
    listItemClass,
    handleClick,
    styles,
  };
};
