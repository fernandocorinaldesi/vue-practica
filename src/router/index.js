import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/calculadora',
      name: 'calculadora',
      component: () => import('../views/CalculadoraView.vue')
    },
    {
      path: '/tabla',
      name: 'tabla',
      component: () => import('../views/TableView.vue')
    },
    {
      path: '/prop',
      name: 'prop',
      component: () => import('../views/Prop.vue')
    },
    {
      path: '/ciclo-vida',
      name: 'ciclo-vida',
      component: () => import('../views/CicloView.vue')
    },
    {
      path: '/pinia',
      name: 'pinia',
      component: () => import('../views/PiniaBasicView.vue')
    }
  ]
})

export default router
