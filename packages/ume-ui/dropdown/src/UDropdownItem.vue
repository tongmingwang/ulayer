<template>
  <div :class="itemClass" @click="handleClick" v-ripple>
    <slot />
  </div>
</template>

<script setup lang="ts">
  import { useDropdownItem } from './hooks';
  import type { UDropdownItemProps } from './types';
  import ripple from '@/directives/ripple';

  defineOptions({ name: 'UDropdownItem', directives: { ripple } });

  const props = defineProps<UDropdownItemProps>();
  const { itemClass, handleClick } = useDropdownItem(props);
</script>