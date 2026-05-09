interface RippleHTMLElement extends HTMLElement {
  rippleContainer?: HTMLElement;
  _rippleCleanup?: () => void;
}

async function fadeOutRipple(ripple: HTMLElement) {
  ripple.animate(
    {
      opacity: 0,
    },
    {
      duration: 400,
      easing: 'ease-out',
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
  ripple.style.width = `${radius * 2}px`;
  ripple.style.height = `${radius * 2}px`;
  ripple.style.borderRadius = '50%';
  ripple.style.pointerEvents = 'none';

  const rippleOpacity = 0.2;
  ripple.style.backgroundColor = cStyle.color;
  ripple.style.opacity = `${rippleOpacity}`;

  if (isCircle) {
    ripple.style.left = `${(width - radius * 2) / 2}px`;
    ripple.style.top = `${(height - radius * 2) / 2}px`;
  } else {
    ripple.style.left = `${clientX - rect.left - radius}px`;
    ripple.style.top = `${clientY - rect.top - radius}px`;
  }

  ripple.animate(
    [
      {
        transform: 'scale(0)',
      },
      {
        transform: 'scale(1)',
        offset: 1,
      },
    ],
    {
      duration: 550,
      fill: 'forwards',
      easing: 'linear',
    }
  );

  el.rippleContainer!.appendChild(ripple);

  const startFadeOut = () => {
    fadeOutRipple(ripple);
    document.removeEventListener('mouseup', startFadeOut);
    document.removeEventListener('touchend', startFadeOut);
    document.removeEventListener('touchcancel', startFadeOut);
  };

  document.addEventListener('mouseup', startFadeOut);
  document.addEventListener('touchend', startFadeOut);
  document.addEventListener('touchcancel', startFadeOut);
}

function stopEvent(e: Event) {
  e.stopPropagation();
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
      stopEvent(e);
      const touch = e.touches[0];
      createRipple(el, touch.clientX, touch.clientY);
    };

    const handleMouseLeave = () => {
      const ripples = el.rippleContainer!.children;
      for (let i = 0; i < ripples.length; i++) {
        fadeOutRipple(ripples[i] as HTMLElement);
      }
    };

    el.addEventListener('mousedown', handleMouseDown, true);
    el.addEventListener('touchstart', handleTouchStart, true);
    el.addEventListener('mouseleave', handleMouseLeave, true);

    el._rippleCleanup = () => {
      el.removeEventListener('mousedown', handleMouseDown, true);
      el.removeEventListener('touchstart', handleTouchStart, true);
      el.removeEventListener('mouseleave', handleMouseLeave, true);
    };
  },

  unmounted(el: RippleHTMLElement) {
    el._rippleCleanup?.();
  },
};

export default ripple;
