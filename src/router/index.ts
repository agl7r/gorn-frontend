import { createRouter, createWebHistory } from 'vue-router'
import modules from "./../modules";
import HomePage from '../pages/HomePage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
]

modules.forEach(module => {
  module.routes.forEach(route => {
    routes.push(route)
  })
})

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
