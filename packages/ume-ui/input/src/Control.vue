<template>
  <div class="u-input-control">
    <button
      class="u-input-control__btn"
      :disabled="props.disabledDecrease"
      v-ripple
      @click="decrease">
      <svg viewBox="0 0 1024 1024" fill="currentColor">
        <path
          d="M890.336 330.912c-12.576-12.416-32.8-12.352-45.248 0.192L517.248 661.952 184.832 332.512c-12.576-12.448-32.8-12.352-45.28 0.192-12.448 12.576-12.352 32.832 0.192 45.28l353.312 350.112c0.544 0.544 1.248 0.672 1.792 1.184 0.128 0.128 0.16 0.288 0.288 0.416 6.24 6.176 14.4 9.28 22.528 9.28 8.224 0 16.48-3.168 22.72-9.472l350.112-353.312C902.976 363.616 902.88 343.36 890.336 330.912z"></path>
      </svg>
    </button>
    <button
      class="u-input-control__btn"
      :disabled="props.disabledIncrease"
      v-ripple
      @click="increase">
      <svg viewBox="0 0 1024 1024" fill="currentColor">
        <path
          d="M887.328 617.152 533.952 267.008c-0.512-0.512-1.216-0.672-1.76-1.152-0.128-0.128-0.16-0.32-0.288-0.448-12.576-12.416-32.832-12.352-45.28 0.192L136.512 618.944c-12.448 12.576-12.352 32.8 0.192 45.248 6.24 6.176 14.4 9.28 22.528 9.28 8.224 0 16.48-3.168 22.72-9.472l327.84-330.816 332.48 329.408c6.24 6.176 14.368 9.28 22.528 9.28 8.256 0 16.48-3.168 22.72-9.472C899.968 649.856 899.872 629.6 887.328 617.152z"></path>
      </svg>
    </button>
  </div>
</template>

<script setup lang="ts">
  import ripple from '@/directives/ripple';
  const emits = defineEmits(['increase', 'decrease']);
  const props = defineProps({
    disabledIncrease: {
      type: Boolean,
      default: false,
    },
    disabledDecrease: {
      type: Boolean,
      default: false,
    },
  });
  defineOptions({
    directives: {
      ripple,
    },
  });

  const increase = () => {
    emits('increase');
  };
  const decrease = () => {
    emits('decrease');
  };
</script>

<style scoped lang="scss">
  .u-input-control {
    height: 100%;
    display: flex;
    align-items: center;
    overflow: hidden;
    border-top-right-radius: inherit;
    border-bottom-right-radius: inherit;
  }

  .u-input-control__btn {
    width: calc(var(--u-input-height) * 0.8);
    height: 100%;
    cursor: pointer;
    background-color: transparent;
    border: none;
    outline: none;
    appearance: none;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--u-primary-50);
    transition: background 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    border-left: 1px solid var(--u-input-border-color);
    svg {
      width: 1.2em;
      height: 1.2em;
    }
    &:hover {
      background: var(--u-primary-100);
    }
    &[disabled] {
      pointer-events: none;
    }
  }
</style>
