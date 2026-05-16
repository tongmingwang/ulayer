<template>
  <UTabs v-model="activeTab" :animated="true" color="error">
    <UTabPane name="tab1" label="First">
      Content of Tab 1
    </UTabPane>
    <UTabPane name="tab2" label="Second">
      Content of Tab 2
    </UTabPane>
    <UTabPane name="tab3" label="Disabled" disabled>
      Cannot access
    </UTabPane>
  </UTabs>
</template>

<script setup>
import { ref } from 'vue';
const activeTab = ref('tab1');
</script>