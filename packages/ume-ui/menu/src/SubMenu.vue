<template>
  <div :class="subMenuClass">
    <div class="u-sub-menu__title" @click="toggle" :style="titleStyle">
      <slot name="title">
        <span class="u-sub-menu__title-text">{{ props.title }}</span>
      </slot>
      <span class="u-sub-menu__arrow" :class="{ 'is-opened': isOpen }">
        <UIcon name="unfold" size="14" />
      </span>
    </div>
    <Transition @enter="onEnter" @leave="onLeave">
      <div class="u-sub-menu__children" v-show="isOpen">
        <div class="w-full h-full"><slot /></div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
  import { UIcon } from '@/ume-ui/icon';
  import type { USubMenuProps } from './types';
  import { useSubMenu } from './hooks';

  defineOptions({ name: 'USubMenu' });
  const emits = defineEmits<{
    (e: 'update:opened', value: boolean): void;
  }>();
  const props = withDefaults(defineProps<USubMenuProps>(), {
    title: '',
    align: 'left',
    disabled: false,
    opened: false,
    radius: '0px',
  });
  const { isOpen, toggle, subMenuClass, titleStyle } = useSubMenu(props, emits);

  const onEnter = async (el: Element, done: () => void) => {
    await new Promise((resolve) => requestAnimationFrame(resolve));
    const htmlEL = el as HTMLElement;
    htmlEL.style.setProperty('height', htmlEL.clientHeight + 'px');
    const anim = el.animate(
      [{ transform: 'scaleY(0)' }, { transform: 'scaleY(1)' }],
      { duration: 150, easing: 'ease' }
    );
    Array.from(el.children).forEach((ele: Element) => {
      ele.animate(
        [
          { opacity: 0, offset: 0 },
          { opacity: 0, offset: 0.33 },
          { opacity: 1, offset: 1 },
        ],
        { duration: 300, easing: 'ease' }
      );
    });
    await anim.finished;
    htmlEL.style.setProperty('height', 'auto');
    done();
  };

  const onLeave = async (el: Element, done: () => void) => {
    const htmlEl = el as HTMLElement;
    htmlEl.style.setProperty('height', '0px');
    Array.from(el.children).forEach((ele: Element) => {
      ele.animate(
        [
          { opacity: 1, offset: 0 },
          { opacity: 0.05, offset: 0.1 },
          { opacity: 0, offset: 1 },
        ],
        { duration: 300, easing: 'ease' }
      );
    });
    const anim = htmlEl.animate(
      [
        { transform: 'scaleY(1)', offset: 0 },
        { transform: 'scaleY(0)', offset: 1 },
      ],
      { duration: 150, easing: 'ease' }
    );
    await anim.finished;
    htmlEl.style.setProperty('height', 'auto');
    done();
  };
</script>

<style scoped lang="scss">
  .u-sub-menu {
    display: flex;
    flex-direction: column;
    width: 100%;
    transition: all 0.2s;

    &__title {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      padding: 8px 12px 8px 0;
      color: var(--u-menu-color);
      line-height: 1.5;
      min-height: 32px;
      cursor: pointer;
      font-weight: 500;
      font-size: 14px;
      transition: all 0.2s;
      user-select: none;

      &:hover {
        background: rgba(var(--u-rgb), 0.05);
      }
    }

    // 左对齐（默认）：标题在左，箭头在右
    &__title-text {
      flex: 1;
    }

    &__arrow {
      display: inline-flex;
      align-items: center;
      transition: transform 0.25s ease;
      margin-left: 8px;
      flex-shrink: 0;

      &.is-opened {
        transform: rotate(180deg);
      }
    }

    // 右对齐：标题和箭头反向排列
    &--right {
      .u-sub-menu__title {
        flex-direction: row-reverse;
      }

      .u-sub-menu__arrow {
        margin-left: 0;
        margin-right: 8px;
      }

      .u-sub-menu__title-text {
        text-align: right;
      }

      .u-sub-menu__children {
        align-items: flex-end;
      }
    }

    &.is-active {
      .u-sub-menu__title {
        color: var(--u-menu-active-color);
      }
    }

    &.is-disabled {
      .u-sub-menu__title {
        opacity: 0.65;
        pointer-events: none;
      }
    }

    &__children {
      display: flex;
      flex-direction: column;
      transform-origin: center top;
      transition: height 0.2s;
    }
  }
</style>
