<template>
  <footer>
    <a v-for="social in socials" :href="social.to" target="_blank">
      <font-awesome-icon id="social" :icon="social.icon" />
    </a>
  </footer>
</template>
<script lang="ts" setup>
interface Social {
  name: string
  icon: string
  to: string
}
const socials: Social[] = [
  {
    name: 'email',
    icon: 'fa-solid fa-envelope',
    to: 'mailto:tristan.nikitakis@gmail.com'
  },
  {
    name: 'github',
    icon: 'fa-brands fa-square-github',
    to: 'https://github.com/NikitakisTristan'
  },
  {
    name: 'linkedin',
    icon: 'fa-brands fa-linkedin',
    to: 'https://www.linkedin.com/in/nikitakistristan/'
  }
]
</script>
<style lang="scss" scoped>
footer {
  position: fixed;
  bottom: 5px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  #social {
    font-size: 22px;
    padding: 0 15px;
    color: red;
    cursor: pointer;
    transition-duration: 500ms;
    &:hover {
      color: green;
    }
  }
}
</style>
