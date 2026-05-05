<template>
  <div class="demo">
    <div class="nav">
      <Btn
        v-for="item in routes"
        :key="item.name"
        color="primary"
        width="100%"
        :variant="$route.name === item.name ? 'contained' : 'text'"
        @click="$router.push(item.path)"
        shape="round">
        {{ item.name }}
      </Btn>
    </div>
    <div class="content">
      <UButton shape="circle" variant="contained" @click="toggleTheme">
        <UIcon name="search" size="24"></UIcon>
      </UButton>
      <div v-ripple style="height: 48px">Hello</div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { UButton, UIcon, ripple } from '../packages/ume-ui';
  import { routes } from './router/index.js';
  import { useTheme } from '../packages/hooks/useTheme.ts';

  const { theme, toggleTheme } = useTheme();

  defineOptions({
    components: {
      Btn: UButton,
    },
    directives: {
      ripple,
    },
  });
</script>

<style scoped lang="scss">
  .demo {
    display: flex;
    height: 100vh;
    margin: 0;
    position: relative;
    overflow: auto;
  }
  .nav {
    width: 200px;
    height: 100vh;
    border-right: 1px solid #e5e5e5;
    padding: 10px;
    position: sticky;
    top: 0;
    left: 0;
    .u-button {
      margin-bottom: 10px;
    }
  }
  .content {
    flex: 1;
    padding: 24px;
  }
</style>
