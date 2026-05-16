<template>
  <div>
    <h2>demo</h2>
    <u-alert color="success">This is a message</u-alert>
    <u-alert color="warning">This is a message</u-alert>
    <u-alert color="error">This is a message</u-alert>
    <u-alert color="primary">This is a message</u-alert>

    <u-alert variant="outlined" color="success">This is a message</u-alert>
    <u-alert variant="outlined" color="warning">This is a message</u-alert>
    <u-alert variant="outlined" color="error">This is a message</u-alert>
    <u-alert variant="outlined" color="primary">This is a message</u-alert>

    <u-alert variant="filled" color="success">This is a message</u-alert>
    <u-alert variant="filled" color="warning">This is a message</u-alert>
    <u-alert variant="filled" color="error">This is a message</u-alert>
    <u-alert variant="filled" color="primary">This is a message</u-alert>

    <u-alert title="Success" color="success">This is a message</u-alert>
    <u-alert title="Warning" color="warning">This is a message</u-alert>
    <u-alert title="Error" color="error">This is a message</u-alert>
    <u-alert title="Primary" color="primary">This is a message</u-alert>

    <u-alert title="Action" color="primary">
      This is a message
      <template #action>
        <u-button>关闭</u-button>
      </template>
    </u-alert>

    <u-alert title="Search">
      This is a message
      <template #icon>
        <u-icon name="search" size="24px"></u-icon>
      </template>
      <template #action>
        <u-button>关闭</u-button>
      </template>
    </u-alert>
  </div>
</template>

<script setup lang="ts">
  import { UAlert } from './index';
</script>

<style scoped></style>
