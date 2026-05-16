<template>
  <i
    class="ume-iconfont"
    :class="['ume-' + props.name]"
    :style="{
      fontSize: parseInt(props.size) + 'px',
      color: props.color,
    }"></i>
</template>

<script setup lang="ts">
  defineOptions({
    name: 'UIcon',
  });
  const props = defineProps({
    name: {
      type: String,
      default: '',
    },
    size: {
      type: [String],
      default: '',
    },
    color: {
      type: String,
      default: '',
    },
  });
</script>

<style scoped lang="css">
  @import './iconfont.css';
</style>
