<template>
  <Transition name="back-to-top-fade">
    <u-fab
      v-if="visible"
      size="large"
      color="primary"
      fixed
      right="24px"
      bottom="24px"
      @click="scrollToTop"
      class="back-to-top-fab">
      <svg viewBox="0 0 1024 1024" width="20" height="20" fill="currentColor">
        <path d="M512 128L128 512h224v384h320V512h224L512 128z" />
      </svg>
    </u-fab>
  </Transition>
</template>

<script setup lang="ts">
  import { ref, onMounted, onUnmounted } from 'vue';

  const visible = ref(false);
  const SCROLL_OFFSET = 300;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleScroll = () => {
    const scrollTop =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop;

    visible.value = scrollTop > SCROLL_OFFSET;
  };

  onMounted(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
  });

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
  });
</script>

<style>
  .back-to-top-fab {
    z-index: 9999 !important;
  }

  .back-to-top-fade-enter-active,
  .back-to-top-fade-leave-active {
    transition:
      opacity 0.3s,
      transform 0.3s;
  }

  .back-to-top-fade-enter-from,
  .back-to-top-fade-leave-to {
    opacity: 0;
    transform: scale(0.8);
  }
</style>
