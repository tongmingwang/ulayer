import { inject, provide, ref, computed, onMounted, useTemplateRef } from 'vue';
import type { UMenuProps, UMenuProvider, UMenuItemProps, USubMenuProps,UMenuEmits } from './types';
const key = Symbol('U_MENU_PROVIDER');


export const useList = (props: UMenuProps, emits: UMenuEmits) => {
  const active = ref(props.modelValue);
  const elRef = useTemplateRef<HTMLElement>('u-menu');
  onMounted(() => {
    scrollToActive();
  });
  provide(key, {
    active,
    setActive(value: string) {
      active.value = value;
      emits('update:modelValue', value);
      emits('change', value);
    },
    level: 0,
  });
  const classNames = computed(() => {
    return ['u-menu', props.color && `u-menu--${props.color}`].filter(Boolean);
  });

  const scrollToActive = () => {
    if (elRef.value) {
      const activeItem = elRef.value.querySelector('.u-menu-item.is-active');
      if (activeItem) {
        activeItem.scrollIntoView({
          behavior: 'instant',
          block: 'nearest',
          inline: 'start',
        });
      }
    }
  };

  return { classNames, scrollToActive };
};

export const useListItem = (props: UMenuItemProps) => {
  const listProvide = inject<UMenuProvider>(key, null);
  const isVal = (val: string | number | undefined) => val !== null && val !== undefined;
  const handleClick = () => {
    if (props.disabled || !isVal(props.value)) return;
    listProvide?.setActive(props.value!);
  };

  // 向父级 SubMenu 注册自身 value
  if (isVal(props.value)) {
    listProvide?.registerItem?.(props.value!);
  }

  const level = listProvide?.level ?? 0;

  const listItemClass = computed(() => {
    return [
      'u-menu-item',
      props.color && `u-menu-item--${props.color}`,
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
      paddingLeft: `${12 + level * 16}px`,
    };
  });
  return {
    listProvide,
    listItemClass,
    handleClick,
    styles,
  };
};

export const useSubMenu = (props: USubMenuProps) => {
  const listProvide = inject<UMenuProvider>(key, null);
  const parentLevel = listProvide?.level ?? 0;
  const currentLevel = parentLevel + 1;

  const isOpen = ref(false);
  // 收集子项 value
  const childValues = ref<Set<string | number>>(new Set());

  const registerItem = (value: string | number) => {
    childValues.value.add(value);
  };

  const isChildActive = computed(() => {
    return listProvide?.active?.value != null && childValues.value.has(listProvide.active.value);
  });

  const toggle = () => {
    if (props.disabled) return;
    isOpen.value = !isOpen.value;
  };

  // 向子级提供递增后的 level 和 registerItem
  provide(key, {
    active: listProvide!.active,
    setActive: listProvide!.setActive,
    level: currentLevel,
    registerItem,
  });

  const subMenuClass = computed(() => {
    return [
      'u-sub-menu',
      props.align === 'right' && 'u-sub-menu--right',
      props.disabled && 'is-disabled',
      isOpen.value && 'is-opened',
      isChildActive.value && 'is-active',
    ].filter(Boolean);
  });

  const titleStyle = computed(() => ({
    paddingLeft: `${12 + parentLevel * 16}px`,
  }));

  return {
    isOpen,
    toggle,
    subMenuClass,
    titleStyle,
  };
};
