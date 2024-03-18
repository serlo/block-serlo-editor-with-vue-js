import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import NoopComponent from '../components/NoopComponent.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/:catchAll(.*)*',
    component: NoopComponent
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
