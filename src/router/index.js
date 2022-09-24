import { createRouter, createWebHistory } from 'vue-router'
import Auxiliar from '../views/auxiliar.vue';
import Login from '../views/login.vue';
import Pagina from '../views/pagina.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'pagina',
      component: Pagina
    },
 
    {
      path: '/login',
      name: 'login',
      component: Login
    },   
    {
      path: '/auxiliar',
      name: 'auxiliar',
      component:Auxiliar
    },   
  ]
})

export default router
