import { watch, ref } from 'vue';
import type { ShallowRef } from 'vue';
import type { UDialogProps } from './types';
export const useDialog = (
  props: UDialogProps,
  emit: any,
  targetRef: ShallowRef<HTMLElement | null>
) => {
  const show = ref(props.modelValue);

  watch(
    () => show.value,
    (newVal) => {
      updateOverflow(!!newVal);
    }
  );

  const updateOverflow = (bol: boolean) => {
    if (bol) {
      document.addEventListener('keydown', handleEsc);
    } else {
      document.removeEventListener('keydown', handleEsc);
    }
  };
  const onClick = () => {
    if (props.closeOnClick) {
      closeDialog();
    }
  };

  function closeDialog() {
    show.value = false;
    emit('update:modelValue', false);
    emit('close');
  }
  const handleEsc = (e: KeyboardEvent) => {
    const isFront = getIsFront();
    if (!isFront) return;
    if (props.closeOnEsc && e.key === 'Escape') {
      closeDialog();
    }
  };
  // 获取当前最前端的对话框
  function getIsFront() {
    const arr = Array.from(
      document.querySelectorAll('.u-dialog[data-u-dialog="true"]')
    );
    if (!arr.length) return false;
    const frontMask = arr.pop();
    return targetRef.value === frontMask;
  }

  return { show, onClick };
};
