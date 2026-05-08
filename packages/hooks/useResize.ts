import { onMounted, onUnmounted } from 'vue';

export const useResize = (fn: () => void) => {
  const resize = () => {
    if (typeof fn === 'function') fn();
  };
  onMounted(() => {
    window.addEventListener('resize', resize);
  });
  onUnmounted(() => {
    window.removeEventListener('resize', resize);
  });
};
