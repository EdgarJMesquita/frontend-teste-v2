import { createRouter, createWebHistory } from 'vue-router'
import list from '@/views/users/list.vue'
import create from '@/views/users/create.vue'

const routes = [
  {
    path: '/',
    name: 'list',
    component: list
  },
  {
    path: '/create',
    name: 'create',
    component: create
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
