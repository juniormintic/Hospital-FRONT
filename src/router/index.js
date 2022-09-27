import { createRouter, createWebHistory } from 'vue-router'
import Auxiliar from '../views/auxiliar.vue';
import Login from '../views/login.vue';
import Pagina from '../views/pagina.vue';
import Paciente from '../views/paciente.vue';
import Enfermera from '../views/enfermera.vue';
import Doctor from '../views/doctor.vue';

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
    {
      path: '/doctor',
      name: 'doctor',
      component:Doctor
    }, 
    {
      path: '/enfermera',
      name: 'enfermera',
      component:Enfermera
    }, 
    {
      path: '/paciente',
      name: 'paciente',
      component:Paciente
    },
  ]
})

export default router
