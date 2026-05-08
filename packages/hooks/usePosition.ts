import { ref } from 'vue';
export const usePosition = () => {
  const position = ref('');
  const updatePosition = async (
    target: HTMLElement,
    content: HTMLDivElement,
    scaleY: number = 1
  ) => {
    if (!target) return;
    const { top, left, width, height } = target?.getBoundingClientRect();
    const contentRect = content?.getBoundingClientRect();
    const h = (contentRect?.height || 0) / scaleY + 4;
    let y = top + height;
    // 判断是否触底
    if (y + h > window.innerHeight) {
      y = window.innerHeight - h;
    }
    // 判断是否触碰顶部
    if (y < 0) {
      y = 0;
    }
    // 使用 transform 定位内容，避免回流
    position.value = `position:fixed; min-width: ${width}px; top: ${y}px; left: ${left}px;`;
  };
  const resetPosition = () => {
    position.value = '';
  };
  return { position, updatePosition, resetPosition };
};
