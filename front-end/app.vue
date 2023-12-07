<template>
  <div>This is a nuxt site with a server-side api that can run in a container</div>
  <blockquote>
    <div v-if="isLoading">Getting inspirational book quote....</div>
    <div v-if="!isLoading">"{{ message }}"</div>
  </blockquote>
</template>

<script>
import { ref, onMounted } from 'vue'
export default {
  name: 'app',
  setup() {
    const message = ref('')
    const isLoading = ref(true)
    onMounted(async () => {
      console.log('on mounted')
      const data = await fetch('/api/quotes/').then((response) => response.json())
      message.value = data.quote
      isLoading.value = false
    })
    return {
      message,
      isLoading
    }
  }
}
</script>
