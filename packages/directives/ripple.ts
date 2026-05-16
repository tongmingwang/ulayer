interface RippleHTMLElement extends HTMLElement {
  rippleContainer?: HTMLElement;
  _rippleCleanup?: () => void;
}

async function fadeOutRipple(ripple: HTMLElement) {
  await Promise.all(
    ripple.getAnimations().map((animation) => animation.finished)
  );
  ripple.animate(
    [
      {
        opacity: 0.2,
      },
      {
        opacity: 0,
      },
    ],
    {
      duration: 200,
      fill: 'forwards',
    }
  );

  await Promise.all(
    ripple.getAnimations().map((animation) => animation.finished)
  );
  ripple.remove();
}

function createRipple(el: RippleHTMLElement, clientX: number, clientY: number) {
  const cStyle = window.getComputedStyle(el);
  const rect = el.getBoundingClientRect();

  const width = rect.width;
  const height = rect.height;
  const diagonal = Math.sqrt(width ** 2 + height ** 2);
  const radius = diagonal;
  const isCircle = Math.abs(width - height) <= 1 && height <= 100;

  const ripple = document.createElement('span');
  ripple.style.position = 'absolute';

  ripple.style.borderRadius = '50%';
  ripple.style.pointerEvents = 'none';
  ripple.style.backgroundColor = cStyle.color;

  if (isCircle) {
    ripple.style.width = `${radius}px`;
    ripple.style.height = `${radius}px`;
    ripple.style.left = `${(width - radius) / 2}px`;
    ripple.style.top = `${(height - radius) / 2}px`;
  } else {
    ripple.style.width = `${radius * 2}px`;
    ripple.style.height = `${radius * 2}px`;
    ripple.style.left = `${clientX - rect.left - radius}px`;
    ripple.style.top = `${clientY - rect.top - radius}px`;
  }

  ripple.animate(
    [
      {
        transform: 'scale(0.33)',
        offset: 0,
        opacity: 0.05,
      },
      {
        offset: 0.5,
        transform: 'scale(0.5)',
        opacity: 0.3,
      },
      {
        transform: 'scale(1)',
        offset: 1,
        opacity: 0.2,
      },
    ],
    {
      duration: 300,
      fill: 'forwards',
      easing: 'ease',
    }
  );

  el.rippleContainer!.appendChild(ripple);

  const startFadeOut = () => {
    fadeOutRipple(ripple);
    document.removeEventListener('mouseup', startFadeOut);
  };
  document.addEventListener('mouseup', startFadeOut);
  document.addEventListener('touchend', startFadeOut);
  document.addEventListener('touchcancel', startFadeOut);
}

const ripple = {
  mounted(el: RippleHTMLElement) {
    if (!el) return;
    const rippleContainer = document.createElement('span');
    rippleContainer.style.cssText =
      'position: absolute;inset: 0;overflow: hidden;pointer-events: none;border-radius: inherit;';
    el.appendChild(rippleContainer);
    el.rippleContainer = rippleContainer;

    if (window.getComputedStyle(el).position === 'static') {
      el.style.position = 'relative';
    }
    el.style.overflow = 'hidden';
    el.style.zIndex = el.style.zIndex || '0';

    const handleMouseDown = (e: MouseEvent) => {
      createRipple(el, e.clientX, e.clientY);
    };
    const handleTouchStart = (e: TouchEvent) => {
      const touch = e.touches[0];
      createRipple(el, touch.clientX, touch.clientY);
    };

    el.addEventListener('mousedown', handleMouseDown, true);
    el.addEventListener('touchstart', handleTouchStart, true);
    el._rippleCleanup = () => {
      el.removeEventListener('mousedown', handleMouseDown, true);
      el.removeEventListener('touchstart', handleTouchStart, true);
    };
  },

  unmounted(el: RippleHTMLElement) {
    el._rippleCleanup?.();
  },
};

export default ripple;
