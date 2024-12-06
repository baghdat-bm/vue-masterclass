<script setup lang="ts">
  import { useRoute} from 'vue-router'
  const route = useRoute()
</script>

<template>
  <div>
    <h1> Project No {{ route.params?.id }} </h1>
    <RouterLink to="/">Home</RouterLink>
  </div>
</template>

<style scoped>

</style>
