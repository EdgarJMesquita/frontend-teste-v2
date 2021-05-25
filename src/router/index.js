import { createRouter, createWebHistory } from 'vue-router'
import list from '@/views/users/list.vue'

const routes = [
  {
    path: '/',
    name: 'list',
    component: list
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
