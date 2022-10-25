import { createRouter, createWebHistory } from 'vue-router'
import Home from "../views/Home.vue"
import Token from "../views/Token.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: "/token",
      name: 'token',
      component: Token
    }
  ]
})

export default router
