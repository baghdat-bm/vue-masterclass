<script setup lang="ts">
import { supabase } from '@/lib/supabaseClient'
import { ref } from 'vue'

const projects = ref()

;(async function () {
  const { data, error } = await supabase.from('projects').select()
  if (error) console.log(error)
  projects.value = data
  console.log('Projects', projects.value)
})()
</script>

<template>
  <div>
    <h1>Projects</h1>
    <RouterLink to="/">Home</RouterLink>
    <br />
    <br />
    {{ projects }}
  </div>
</template>

<style scoped></style>
