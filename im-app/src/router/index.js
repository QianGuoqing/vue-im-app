import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/login/Login.vue')
    },
    {
      path: '/register',
      name: 'Register',
      component: () => import('../views/register/Register.vue')
    },
    {
      path: '/boss',
      name: 'Boss',
      component: () => import('../views/boss/Boss.vue')
    },
    {
      path: '/boss-info',
      name: 'BossInfo',
      component: () => import('../views/boss-info/BossInfo.vue')
    }
  ]
})
