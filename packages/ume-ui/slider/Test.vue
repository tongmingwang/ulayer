<template>
  <div class="demo">
    <USlider v-model="v" :step="0.1" />
    <input type="range" v-model="v" step="0.1">
  </div>
  {{ v }}

   <div class="demo">
    <USlider v-model="v" :max="200"/>
  </div>

  <div class="demo">
    <USlider v-model="v" disabled/>
  </div>

  <div class="demo" style="height: 200px;">
    <USlider v-model="v" vertical/>
  </div>

  <div class="demo">
    <USlider v-model="v" color="success" />
    <USlider v-model="v" color="primary" />
    <USlider v-model="v" color="error" />
    <USlider v-model="v" color="warning" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const v = ref(0)
</script>

<style scoped>

</style>