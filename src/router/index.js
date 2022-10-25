import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: import('../views/Home.vue')
    },
    {
      path: "/token",
      name: 'token',
      component: import('../views/Token.vue')
    }
  ]
})

export default router
