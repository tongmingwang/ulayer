import { onMounted, onUnmounted, ref } from 'vue';

export const useMouse = () => {
  const x = ref(0);
  const y = ref(0);
  onMounted(() => {
    window.addEventListener('mousemove', mousemove);
  });
  onUnmounted(() => {
    window.removeEventListener('mousemove', mousemove);
  });

  const mousemove = (e: MouseEvent) => {
    x.value = e.clientX;
    y.value = e.clientY;
  };

  return { x, y };
};
