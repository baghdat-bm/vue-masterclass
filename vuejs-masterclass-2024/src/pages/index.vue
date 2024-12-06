<script setup lang="ts">
</script>

<template>
  <div>
    <h1>Home Page</h1>
    <RouterLink to="/projects">All Projects</RouterLink>
    <br/>
    <RouterLink :to="{ name: '/projects/[id]', params: {'id': 1}}">
      Project 1
    </RouterLink>
  </div>
</template>

<style scoped>
</style>
