import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  /*Count test */
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  /*Name test */
  const name = ref('Joey')

  return { count, doubleCount, increment, name }
})
