import { throttle } from '@/utils/common';
async function removeRipple(ripple: HTMLElement) {
  await Promise.all(
    ripple.getAnimations().map((animation) => animation.finished)
  );
  ripple.remove();
}

function addRipple(el: any, e: MouseEvent) {
  const cStyle = window.getComputedStyle(el);
  const rect = el.getBoundingClientRect();
  const w = parseInt(cStyle.width);
  const h = parseInt(cStyle.height);
  let r = 0;
  const isCircle = w - h <= 1;
  if (isCircle) {
    r = Math.max(w, h);
  } else {
    r = Math.sqrt(w * w + h * h);
  }

  const ripple = document.createElement('div');
  if (isCircle) {
    ripple.style.left = 0 + 'px';
    ripple.style.top = 0 + 'px';
  } else {
    ripple.style.left = e.clientX - rect.left - r / 2 + 'px';
    ripple.style.top = e.clientY - rect.top - r / 2 + 'px';
  }
  // 计算ripple的宽高
  ripple.style.width = ripple.style.height = r + 'px';
  ripple.style.setProperty('pointer-events', 'none');
  ripple.style.setProperty('background-color', cStyle.color);
  ripple.style.borderRadius = '50%';
  ripple.style.position = 'absolute';
  ripple.animate(
    [
      { transform: 'scale(0)', opacity: 0.33 },
      { transform: 'scale(1)', opacity: 0.05, offset: 0.8 },
      { transform: 'scale(1)', opacity: 0 },
    ],
    {
      duration: 300,
      fill: 'forwards',
    }
  );
  el.rippleContainer.appendChild(ripple);
  removeRipple(ripple);
}

const add = throttle(addRipple, 100);

const ripple = {
  mounted(el: any) {
    if (!el) return;
    const rippleContainer = document.createElement('div');
    rippleContainer.style =
      'position: absolute;inset: 0;overflow: hidden;pointer-events: none;';
    el.appendChild(rippleContainer);
    el.rippleContainer = rippleContainer;
    el.addEventListener('mousedown', (e: MouseEvent) => add(el, e), true);
  },
};

export default ripple;
