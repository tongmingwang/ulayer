<template>
  <div>
    <h1>USelect</h1>
    全部自定义
    <USelect v-model="value">
      <span>List Item {{ value }}</span>
      <template #content>
        <UOption :value="i" v-for="i in 5">List Item {{ i }}</UOption>
      </template>
    </USelect>
    <USelect v-model="value">
      <span>List Item {{ value }}</span>
      <template #content>
        <UOption :value="i" v-for="i in 5">List Item {{ i }}</UOption>
      </template>
    </USelect>
    <br />
    <h2>设置色彩</h2>
    <USelect v-model="value" color="success">
      <span>List Item {{ value }}</span>
      <template #content>
        <UOption :value="i" v-for="i in 5">List Item {{ i }}</UOption>
      </template>
    </USelect>

    <h2>radius</h2>
    <USelect v-model="value">
      <span>List Item {{ value }}</span>
      <template #content>
        <UOption radius="16px 0 16px 0" :value="i" v-for="i in 5">
          List Item {{ i }}
        </UOption>
      </template>
    </USelect>

    <h2>Height</h2>
    <USelect v-model="value">
      <span>List Item {{ value }}</span>
      <template #content>
        <UOption height="60px" :value="i" v-for="i in 5">
          List Item {{ i }}
        </UOption>
      </template>
    </USelect>

    <h2>传Items</h2>
    <USelect v-model="value" :items="[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]">
      <span>List Item {{ value }}</span>
    </USelect>

    <h2>disabled</h2>
    <USelect disabled v-model="value">
      <span>List Item {{ value }}</span>
      <template #content>
        <UOption height="60px" :value="i" v-for="i in 50">
          List Item {{ i }}
        </UOption>
      </template>
    </USelect>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  const value = ref(1);
</script>

<style scoped></style>
