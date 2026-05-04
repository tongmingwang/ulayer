<template>
  <div>
    <h1>UButtonGroup Test</h1>
    <u-button-group size="large" color="primary">
      <u-button>Button 1</u-button>
      <u-button>Button 2</u-button>
      <u-button>Button 3</u-button>
    </u-button-group>

    <u-button-group color="primary">
      <u-button>Button 1</u-button>
      <u-button>Button 2</u-button>
      <u-button>Button 3</u-button>
    </u-button-group>

    <u-button-group variant="outlined">
      <u-button>Button 1</u-button>
      <u-button>Button 2</u-button>
      <u-button>Button 3</u-button>
    </u-button-group>

    <u-button-group variant="text">
      <u-button>Button 1</u-button>
      <u-button>Button 2</u-button>
      <u-button>Button 3</u-button>
    </u-button-group>

    <u-button-group variant="tonal">
      <u-button>Button 1</u-button>
      <u-button>Button 2</u-button>
      <u-button>Button 3</u-button>
    </u-button-group>

    <u-button-group variant="contained">
      <u-button>Button 1</u-button>
      <u-button>Button 2</u-button>
      <u-button>Button 3</u-button>
    </u-button-group>

    <h1>vertical</h1>
    <u-button-group vertical>
      <u-button>Button 1</u-button>
      <u-button>Button 2</u-button>
      <u-button>Button 3</u-button>
    </u-button-group>

    <u-button-group vertical variant="outlined" color="primary" size="large">
      <u-button>Button 1</u-button>
      <u-button>Button 2</u-button>
      <u-button color="info" :disabled="true">Button 3</u-button>
    </u-button-group>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
