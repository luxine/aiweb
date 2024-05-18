import { createRouter, createWebHistory } from 'vue-router'
import routers from './router'

const routes = [
  routers
  // 可以在这里添加更多路由
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
