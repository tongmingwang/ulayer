<template>
  <div>
    <h1>Dialog</h1>
    <UDialog v-model="visible" :trigger="triggerRef" width="500px">
      <UCard>
        <UCardTitle>这是一个对话框</UCardTitle>
        <UCardText>这是一个对话框</UCardText>
      </UCard>
    </UDialog>
    <button @click="visible = true" ref="trigger">打开对话框</button>

    <h2>Fullscreen Dialog</h2>
    <UDialog v-model="visible2" fullscreen>
      <UCard height="100%">
        <UCardText>
          这是一个全屏对话框
          <div style="display: flex; gap: 8px">
            <u-select :items="[1, 2, 3, 4]"></u-select>
            <u-select :items="[1, 2, 3, 4]"></u-select>
          </div>
        </UCardText>
      </UCard>
    </UDialog>
    <button @click="visible2 = true">打开全屏对话框</button>

    <h3>Custom Width</h3>
    <UDialog v-model="visible3" width="500px">
      <UCard>这是一个自定义宽度的对话框</UCard>
    </UDialog>
    <button @click="visible3 = true">打开自定义宽度的对话框</button>

    <h3>嵌套</h3>
    <UDialog v-model="visible4" width="500px">
      <UCard>
        这是一个嵌套的对话框

        <button @click="visible5 = true">打开嵌套的对话框</button>
      </UCard>

      <UDialog v-model="visible5" width="300px">
        <UCard>这是一个嵌套的对话框</UCard>
      </UDialog>
    </UDialog>
    <button @click="visible4 = true">打开嵌套的对话框</button>
  </div>
</template>

<script setup lang="ts">
  import { ref, useTemplateRef } from 'vue';

  const triggerRef = useTemplateRef<HTMLButtonElement>('trigger');

  const visible = ref(false);
  const visible2 = ref(false);
  const visible3 = ref(false);
  const visible4 = ref(false);
  const visible5 = ref(false);
</script>

<style scoped></style>
