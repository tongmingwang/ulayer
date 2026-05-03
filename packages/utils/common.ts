// 节流函数
export function throttle(fn: Function, delay = 100) {
  let timer: any = null;
  return function (...args: any[]) {
    if (timer) return;
    timer = setTimeout(() => {
      // @ts-ignore
      fn.apply(this, args);
      timer = null;
    }, delay);
  };
}

// 防抖函数
export function debounce(fn: Function, delay = 100) {
  let timer: any = null;
  return function (...args: any[]) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      // @ts-ignore
      fn.apply(this, args);
    }, delay);
  };
}
