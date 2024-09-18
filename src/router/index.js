import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import {authStore} from '../stores/auth'


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
    },
    {
      path: '/solo-logeados',
      name: 'solologin',
      meta:{requireAuth:true},
      component: () => import('../views/ViewSoloLogeados.vue')
    },

  ]
})


// Definimos la guardia global para proteger las rutas
router.beforeEach((to, from, next) => {
  const auth = authStore(); // Obtenemos el store de autenticación

  if (to.meta.requireAuth && !auth.isLogged) {
    // Si la ruta requiere autenticación y el usuario no está logeado, redirige al login
    next({ name: 'home' });
  } else {
    next(); // De lo contrario, permite la navegación
  }
});

export default router
