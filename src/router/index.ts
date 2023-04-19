import { createRouter, createWebHistory } from 'vue-router'
import login from '../views/loginPage.vue'
import home from '../views/home.vue'
import register from '../views/register.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/login',
      name: 'Login',
      component: login
    },
    {
      path: '/register',
      name: 'Register',
      component: register
    },
  ]
})

export default router
