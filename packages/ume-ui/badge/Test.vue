<template>
  <div class="demopss">
    <UBadge color="primary" :count="1000">
      <u-button type="primary" variant="contained">10</u-button>
    </UBadge>
    <UBadge color="error" :count="10">
      <u-button type="primary" variant="contained">10</u-button>
    </UBadge>
    <UBadge color="warning" :count="1000" variant="text">
      <u-button type="primary" variant="contained">10</u-button>
    </UBadge>
    <UBadge color="error" :count="1000" variant="dot">
      <u-button type="primary" variant="contained">10</u-button>
    </UBadge>
    <UBadge color="success" :count="1000" variant="dot">
      <u-button type="primary" variant="contained">10</u-button>
    </UBadge>
    <UBadge color="warning" :count="1000" variant="dot">
      <u-button type="primary" variant="contained">10</u-button>
    </UBadge>
    <UBadge color="primary" :count="10" variant="dot">
      <u-button type="primary" variant="contained">10</u-button>
    </UBadge>

    <UBadge color="primary" :count="1000" variant="dot">
      <span>Hello</span>
    </UBadge>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
  .demopss {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
  }
</style>
