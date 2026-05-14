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
    <Transition
      @before-enter="onBeforeEnter"
      @enter="onEnter"
      @after-enter="onAfterEnter"
      @before-leave="onBeforeLeave"
      @leave="onLeave"
      @after-leave="onAfterLeave">
      <div class="u-sub-menu__children" v-show="isOpen">
        <slot />
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
  import { UIcon } from '@/ume-ui/icon';
  import type { USubMenuProps } from './types';
  import { useSubMenu } from './hooks';

  defineOptions({ name: 'USubMenu' });

  const props = withDefaults(defineProps<USubMenuProps>(), {
    title: '',
    align: 'left',
    disabled: false,
  });
  const { isOpen, toggle, subMenuClass, titleStyle } = useSubMenu(props);

  const onBeforeEnter = (el: Element) => {
    (el as HTMLElement).style.overflow = 'hidden';
  };
  const onEnter = async (el: Element, done: () => void) => {
    const htmlEl = el as HTMLElement;
    const height = htmlEl.scrollHeight;
    htmlEl.style.height = '0';
    // 强制回流，确保起始状态生效
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    htmlEl.offsetHeight;
    const anim = htmlEl.animate(
      [{ height: '0px' }, { height: `${height}px` }],
      { duration: 250, easing: 'cubic-bezier(0.4, 0, 0.2, 1)' }
    );
    await anim.finished;
    htmlEl.style.height = 'auto';
    htmlEl.style.overflow = '';
    done();
  };
  const onAfterEnter = () => {};
  const onBeforeLeave = (el: Element) => {
    const htmlEl = el as HTMLElement;
    htmlEl.style.height = `${htmlEl.scrollHeight}px`;
    htmlEl.style.overflow = 'hidden';
    // 强制回流
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    htmlEl.offsetHeight;
  };
  const onLeave = async (el: Element, done: () => void) => {
    const htmlEl = el as HTMLElement;
    const anim = htmlEl.animate(
      [{ height: `${htmlEl.scrollHeight}px` }, { height: '0px' }],
      { duration: 200, easing: 'cubic-bezier(0.4, 0, 0.2, 1)' }
    );
    await anim.finished;
    htmlEl.style.height = '';
    htmlEl.style.overflow = '';
    done();
  };
  const onAfterLeave = () => {};
</script>

<style scoped lang="scss">
  .u-sub-menu {
    display: flex;
    flex-direction: column;
    width: 100%;

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
    }
  }
</style>