<template>
  <div class="demo">
    <u-switch v-model="checked"></u-switch>
  </div>
  <div class="demo">
    <u-switch v-model="checked" color="primary"></u-switch>
  </div>
  <div class="demo">
    <u-switch v-model="checked" color="success"></u-switch>
    <u-switch v-model="checked" color="warning"></u-switch>
    <u-switch v-model="checked" color="error"></u-switch>
  </div>
  <div class="demo">
    <u-switch v-model="checked">
      <template #checked>打开我们就吃个饭</template>
      <template #unchecked>关</template>
    </u-switch>
  </div>
  <div class="demo">
    <u-switch v-model="checked" size="mini"></u-switch>
    <u-switch v-model="checked" size="small"></u-switch>
    <u-switch v-model="checked" size="medium"></u-switch>
    <u-switch v-model="checked" size="large"></u-switch>
  </div>

  <div class="demo">
    <u-switch v-model="checked" disabled ></u-switch>
    <u-switch v-model="checked" disabled ></u-switch>
    <u-switch v-model="checked" disabled></u-switch>
  </div>

  <div class="demo">
    <u-switch v-model="checked">
      <template #checked-icon>
        <u-icon name="search"></u-icon>
      </template>
      <template #unchecked-icon>
        <u-icon name="close"></u-icon>
      </template>
    </u-switch>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';

  const checked = ref(false);
</script>

<style scoped></style>
