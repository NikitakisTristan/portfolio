<template>
  <div>
    <h1>Tristan Nikitakis</h1>
    <RouterLink v-for="route in router.getRoutes()" :to="route.path"> {{ route.name }}</RouterLink>
  </div>
</template>
<script lang="ts" setup>
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<style lang="scss" scoped>
div {
  display: flex;
  justify-content: space-between;
}
</style>
