import { ref } from 'vue';
export const usePosition = () => {
  const position = ref('');
  const updatePosition = async (target: HTMLElement, maxH = 212) => {
    if (!target) return;
    const { top, left, width, height } = target?.getBoundingClientRect();

    const h = maxH || 0;
    const y = top + height + 1;
    // 判断是否触底
    if (y + h > window.innerHeight) {
      let top = y - h - height - 2;
      // 判断一下是否为负数
      top = top < 0 ? 0 : top
      // 使用 transform 定位内容，避免回流
      position.value = `position:fixed; width: ${width}px; top: ${top}px; left: ${left}px;transform-origin: center bottom`;
      return;
    }

    // 使用 transform 定位内容，避免回流
    position.value = `position:fixed; width: ${width}px; top: ${y}px; left: ${left}px;transform-origin: center top`;
  };
  const resetPosition = () => {
    position.value = '';
  };
  return { position, updatePosition, resetPosition };
};
