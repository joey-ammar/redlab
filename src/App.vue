<script setup>
  import { useRouter, useRoute } from 'vue-router'
  const router = useRouter()
  const route = useRoute()

</script>

<template>
   <div class="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/token">Token</router-link>
   </div>
    <router-view />
</template>

<style scoped lang="scss">
</style>
