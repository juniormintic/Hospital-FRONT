import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
// import About from '../views/AboutView.vue';
import Auxiliar from '../views/auxiliar.vue';
import Login from '../components/login.vue';
import Paciente from '../components/auxtablapacientes.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: '',
      component: Login
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // },
    {
      path: '/auxiliar',
      name: 'auxiliar',
      component:Auxiliar
    },   
  ]
})

export default router
