<template>
  <div class="demo">
    <h1>Card</h1>
    <u-card>
      <u-card-title>TITLE</u-card-title>
      <u-card-text>Text</u-card-text>
      <u-card-action>
        <u-button>CLOSE</u-button>
      </u-card-action>
    </u-card>
  </div>
  <div class="demo">
    <u-card bordered :shadow="false">
      <u-card-title>TITLE</u-card-title>
      <u-card-text>Text</u-card-text>
      <u-card-action>
        <u-button>CLOSE</u-button>
      </u-card-action>
    </u-card>
  </div>

  <div class="demo">
    <u-card radius="12px">
      <u-card-title>TITLE</u-card-title>
      <u-card-text>Text</u-card-text>
      <u-card-action>
        <u-button>CLOSE</u-button>
      </u-card-action>
    </u-card>
  </div>

  <div class="demo">
    <u-card radius="12px" color="#ccc">
      <u-card-title>TITLE</u-card-title>
      <u-card-text>Text</u-card-text>
      <u-card-action>
        <u-button>CLOSE</u-button>
      </u-card-action>
    </u-card>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
