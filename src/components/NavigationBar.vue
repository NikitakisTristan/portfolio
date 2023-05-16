<template>
  <div id="nav">
    <h1>Tristan Nikitakis</h1>
    <div style="width: 300px">
      <RouterLink v-for="route in navLinks" :to="route.path"> {{ route.name }}</RouterLink>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useRouter } from 'vue-router'

const router = useRouter()
const linkOrder = ['Home', 'About', 'Projects', 'Studio']
const navLinks = router
  .getRoutes()
  .sort((a, b) => linkOrder.indexOf(a.name as string) - linkOrder.indexOf(b.name as string))
</script>

<style lang="scss" scoped>
#nav {
  position: fixed;
  top: 0;
  right: 20px;
  left: 20px;
}
div {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
