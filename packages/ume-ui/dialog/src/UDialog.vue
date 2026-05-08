<template>
  <UMask
    v-model:visible="visible"
    :close-on-click="closeOnClick"
    :close-on-esc="closeOnEsc"
    @update:visible="handleClose">
    <Transition name="dialog" css :appear="true">
      <div
        v-if="visible"
        class="u-dialog"
        :style="{ '--u-dialog-width': width }"
        :class="{ 'is-fullscreen': fullscreen }"
        @click.stop>
        <slot></slot>
      </div>
    </Transition>
  </UMask>
</template>

<script setup lang="ts">
  import { ref, watch } from 'vue';
  import { UMask } from '@/ume-ui/mask';

  defineOptions({ name: 'UDialog', components: { UMask } });

  const props = withDefaults(
    defineProps<{
      visible?: boolean;
      closeOnClick?: boolean;
      closeOnEsc?: boolean;
      fullscreen?: boolean;
      width?: string;
    }>(),
    {
      width: '90%',
      fullscreen: false,
      closeOnClick: true,
      closeOnEsc: true,
      visible: false,
    }
  );

  const emit = defineEmits(['update:visible', 'close']);
  const visible = ref(props.visible || false);

  watch(
    () => props.visible,
    (newVal) => {
      visible.value = newVal;
    }
  );

  const handleClose = () => {
    visible.value = false;
    emit('update:visible', false);
    emit('close');
  };
</script>

<style scoped lang="scss">
  .u-dialog {
    --u-dialog-bg: var(--u-bg);
    --u-dialog-border-radius: 4px;
    --u-dialog-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);

    position: relative;
    transform-origin: center center;
    width: var(--u-dialog-width, 90%);
    background: var(--u-dialog-bg);
    border-radius: var(--u-dialog-border-radius);
    box-shadow: var(--u-dialog-shadow);
    overflow: hidden;
    z-index: 10001;
    pointer-events: all;
    margin: auto;

    &.is-fullscreen {
      --u-dialog-width: 100% !important;
      top: 0;
      left: 0;
      height: 100%;
      max-width: 100%;
      transform: none;
      border-radius: 0;
    }
  }

  .dialog {
    &-enter-active,
    &-leave-active {
      transition: all 0.3s ease;
    }

    &-enter-from,
    &-leave-to {
      opacity: 0;
      transform: scale(0.5);
    }
  }
</style>
