<template>
  <svg
    focusable="false"
    v-bind="$attrs"
    aria-hidden="true"
    class="u-icon_svg"
    viewBox="0 0 1024 1024"
    :style="style"
    fill="currentColor">
    <path :d="item" v-for="item in props.icon"></path>
  </svg>
</template>

<script setup lang="ts">
  import { computed } from 'vue';

  defineOptions({
    name: 'USvg',
  });
  const props = defineProps({
    icon: {
      type: Array<string>,
      required: true,
    },
    color: {
      type: String,
      default: 'currentColor',
    },
    size: {
      type: String,
      default: '1em',
    },
  });

  const style = computed(() => {
    const style: Record<string, string> = {};
    if (props.color) {
      style.color = props.color;
    }
    if (props.size) {
      style.width = props.size;
      style.height = props.size;
    }
    return style;
  });
</script>
