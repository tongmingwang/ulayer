<template>
  <div>
    <h1>Dialog</h1>
    <UDialog v-model:visible="visible">
      <p>这是一个对话框</p>
    </UDialog>
    <button @click="visible = true">打开对话框</button>

    <h2>Fullscreen Dialog</h2>
    <UDialog v-model:visible="visible2" fullscreen>
      <p>这是一个全屏对话框</p>
    </UDialog>
    <button @click="visible2 = true">打开全屏对话框</button>

    <h3>Custom Width</h3>
    <UDialog v-model:visible="visible3" width="500px">
      <p>这是一个自定义宽度的对话框</p>
    </UDialog>
    <button @click="visible3 = true">打开自定义宽度的对话框</button>

    <h3>嵌套</h3>
    <UDialog v-model:visible="visible4" width="500px">
      <p>这是一个嵌套的对话框</p>
      <button @click="visible5 = true">打开嵌套的对话框</button>
      <UDialog v-model:visible="visible5" width="300px">
        <p>这是一个嵌套的对话框</p>
      </UDialog>
    </UDialog>
    <button @click="visible4 = true">打开嵌套的对话框</button>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';

  const visible = ref(false);
  const visible2 = ref(false);
  const visible3 = ref(false);
  const visible4 = ref(false);
  const visible5 = ref(false);
</script>

<style scoped></style>
