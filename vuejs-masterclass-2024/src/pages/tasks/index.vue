<script setup lang="ts">
import { supabase } from '@/lib/supabaseClient'
import { ref } from 'vue'
import type { Tables } from '../../../database/db_types'

const tasks = ref<Tables<'tasks'>[] | null>(null)

;(async function () {
  const { data, error } = await supabase.from('tasks').select()
  if (error) console.log(error)
  tasks.value = data
  console.log('Tasks', tasks.value)
})()
</script>

<template>
  <div>
    <h1>Tasks</h1>
    <RouterLink to="/">Home</RouterLink>
    <br />
    <br />
    <ul>
      <li v-for="task in tasks" :key="task.id">
        {{ task.name }}
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
