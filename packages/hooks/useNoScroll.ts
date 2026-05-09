import { ref, useTemplateRef } from 'vue';

export const useNoScroll = (refName: string) => {
  const targetRef = useTemplateRef<HTMLElement>(refName);
  const className = 'u-no-scroll';
  const targetAttrs = ref<Record<string, string>>({
    'data-no-scroll': 'true',
    role: 'noscroll',
  });
  const updateNoScroll = async () => {
    const hasDom = document.querySelector(
      `.${className}[data-no-scroll="true"]`
    );

    if (hasDom) {
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
    } else {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    }
  };
  return { targetRef, targetAttrs, updateNoScroll, className };
};
