<template>
  <Transition :name="transitionName">
    <div
      v-show="isActive"
      class="u-tab-pane"
      :class="{ 'is-active': isActive }">
      <slot />
    </div>
  </Transition>
</template>

<script setup lang="ts">
  import type { TabPaneProps } from './types';
  import { tabsKey } from './types';
  import { computed, inject, onMounted, onUnmounted, watch } from 'vue';

  const props = withDefaults(defineProps<TabPaneProps>(), {
    label: '',
    disabled: false,
  });

  const tabsContext = inject(tabsKey, null);
  const isActive = computed(() => tabsContext?.activeName.value === props.name);
  const transitionName = computed(() => {
    if (!tabsContext?.animated.value) return '';
    return `u-tab-pane-${tabsContext.direction.value}`;
  });

  const register = () => {
    tabsContext?.registerPane({
      name: props.name,
      label: props.label || props.name,
      disabled: props.disabled,
    });
  };

  onMounted(register);

  watch(
    () => [props.name, props.label, props.disabled],
    () => {
      tabsContext?.unregisterPane(props.name);
      register();
    }
  );

  onUnmounted(() => {
    tabsContext?.unregisterPane(props.name);
  });

  defineOptions({ name: 'UTabPane' });
</script>

<style lang="scss" scoped>
  .u-tab-pane {
    grid-area: 1 / 1;
  }
</style>

<style lang="scss">
  .u-tab-pane-right-enter-active,
  .u-tab-pane-right-leave-active,
  .u-tab-pane-left-enter-active,
  .u-tab-pane-left-leave-active {
    transition: opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1),
                transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .u-tab-pane-right-enter-from {
    opacity: 0;
    transform: translateX(20px);
  }
  .u-tab-pane-right-leave-to {
    opacity: 0;
    transform: translateX(-20px);
  }

  .u-tab-pane-left-enter-from {
    opacity: 0;
    transform: translateX(-20px);
  }
  .u-tab-pane-left-leave-to {
    opacity: 0;
    transform: translateX(20px);
  }
</style>
