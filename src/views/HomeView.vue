<script setup lang="ts">
import instance from '../api/axios'
const title = ref<string>('')
onMounted(()=>{
  init()
})
async function init() {
  try {
    const response = await instance.get('/api/example-endpoint')
    // const response = await axios.get<string>('/example-endpoint')
    title.value = response.data
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}
</script>

<template>
  <main>
    <div class="about">
      <h1>{{ title }}</h1>
    </div>
  </main>
</template>


<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
