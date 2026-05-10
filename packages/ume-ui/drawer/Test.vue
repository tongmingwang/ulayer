<template>
  <div>
    <u-button @click="onToggle('right')">RIGHT</u-button>
    <u-button @click="onToggle('left')">LEFT</u-button>
    <u-button @click="onToggle('top')">TOP</u-button>
    <u-button @click="onToggle('bottom')">BOTTOM</u-button>
    <UDrawer v-model="visible" :location="location">
      <div class="demo_drawer">
        <span>Title</span>
        <u-button @click="visible = false">Close</u-button>
      </div>
    </UDrawer>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';

  const location = ref('left');
  const visible = ref(false);
  const onToggle = (val: string) => {
    location.value = val;
    visible.value = !visible.value;
  };
</script>

<style scoped>
  .demo_drawer {
    padding: 12px;
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
  }
</style>
