<template>
  <div>
    <slot name="card-header"></slot>
    <span>{{ props.status }}</span>
    <span>{{ props.title }}</span>
  </div>
</template>
<script setup lang="ts">
interface Props {
  height?: number
  width?: number
  status?: string
  title?: string
  content?: string
  image?: string
}
const props = defineProps<Props>()
</script>
<style lang="scss" scoped></style>
