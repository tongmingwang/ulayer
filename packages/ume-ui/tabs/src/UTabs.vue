<template>
  <div class="u-tabs" :class="[`u-tabs--${props.type}`]">
    <div class="u-tabs__nav" ref="navRef">
      <div
        v-for="pane in panes"
        :key="pane.name"
        class="u-tabs__tab"
        :class="{
          'is-active': activeName === pane.name,
          'is-disabled': pane.disabled,
        }"
        v-ripple
        @click="handleTabClick(pane)">
        {{ pane.label }}
      </div>
      <div
        v-if="props.type === 'line'"
        class="u-tabs__active-bar"
        :style="activeBarStyle"></div>
    </div>
    <div class="u-tabs__content">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
  import type { TabsProps, TabPane, TabsContext } from './types';
  import { tabsKey } from './types';
  import { computed, provide, ref, watch, useTemplateRef } from 'vue';

  const props = withDefaults(defineProps<TabsProps>(), {
    modelValue: '',
    type: 'line',
    animated: true,
  });

  const emit = defineEmits(['update:modelValue', 'change']);

  const panes = ref<TabPane[]>([]);
  const direction = ref<'left' | 'right'>('right');
  const activeName = computed({
    get: () => props.modelValue,
    set: (val) => emit('update:modelValue', val),
  });

  const navRef = useTemplateRef<HTMLElement>('navRef');
  const activeIndex = computed(() =>
    panes.value.findIndex((p) => p.name === activeName.value)
  );

  const activeBarStyle = computed(() => {
    if (props.type !== 'line' || !navRef.value || activeIndex.value < 0) {
      return {};
    }
    const tabs = navRef.value.querySelectorAll('.u-tabs__tab');
    const activeTab = tabs[activeIndex.value] as HTMLElement | undefined;
    if (!activeTab) return {};
    return {
      width: `${activeTab.offsetWidth}px`,
      transform: `translateX(${activeTab.offsetLeft}px)`,
    };
  });

  watch(activeName, (newVal, oldVal) => {
    const newIndex = panes.value.findIndex((p) => p.name === newVal);
    const oldIndex = panes.value.findIndex((p) => p.name === oldVal);
    if (newIndex !== -1 && oldIndex !== -1) {
      direction.value = newIndex > oldIndex ? 'right' : 'left';
    }
  });

  const handleTabClick = (pane: TabPane) => {
    if (pane.disabled || pane.name === activeName.value) return;
    activeName.value = pane.name;
    emit('change', pane.name);
  };

  defineOptions({ name: 'UTabs' });

  provide<TabsContext>(tabsKey, {
    activeName,
    panes,
    animated: computed(() => props.animated),
    direction,
    registerPane: (pane: TabPane) => {
      if (!panes.value.find((p) => p.name === pane.name)) {
        panes.value.push(pane);
      }
    },
    unregisterPane: (name: string) => {
      panes.value = panes.value.filter((p) => p.name !== name);
    },
    updateActive: (name: string) => {
      activeName.value = name;
    },
  });

  watch(
    () => props.modelValue,
    (val) => {
      if (val && !panes.value.find((p) => p.name === val)) {
        return;
      }
      activeName.value = val || '';
    }
  );
</script>

<style lang="scss" scoped>
  @use './style.scss';
</style>
