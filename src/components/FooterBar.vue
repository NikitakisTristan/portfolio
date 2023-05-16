<template>
  <footer>
    <font-awesome-icon v-for="s in socials" :icon="s.icon" />
  </footer>
</template>
<script lang="ts" setup>
const socials = [
  {
    name: 'email',
    icon: 'fa-solid fa-envelope'
  },
  {
    name: 'github',
    icon: 'fa-brands fa-square-github'
  },
  {
    name: 'linkedin',
    icon: 'fa-brands fa-linkedin'
  }
]
</script>
<style lang="scss" scoped>
footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
}
</style>
