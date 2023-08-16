<template>
  <NavigationBar />
  <main>
    <RouterView />
  </main>
  <FooterBar />
</template>
<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavigationBar from './components/NavigationBar.vue'
import FooterBar from './components/FooterBar.vue'
window.matchMedia('(prefers-color-scheme:dark)')
</script>

<style lang="scss" scoped></style>
