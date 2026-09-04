import Home from '@/pages/Home.vue'
import { createRouter, createWebHistory } from 'vue-router'
import lenis from '@/lib/lenis'
import Main from '@/pages/Main.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: Main }
  ],
})

export default router
