import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Boss from '../views/boss/Boss.vue'
import GeniusList from '../views/genius-list/GeniusList.vue'
import BossMessage from '../views/boss-message/BossMessage.vue'
import BossCenter from '../views/boss-center/BossCenter.vue'

import Genius from '../views/genius/Genius.vue'
import BossList from '../views/boss-list/BossList.vue'
import GeniusMessage from '../views/genius-message/GeniusMessage.vue'
import GeniusCenter from '../views/genius-center/GeniusCenter.vue'

import Chat from '../views/chat/Chat.vue'

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
      component: Boss,
      children: [
        {
          path: 'genius-list',
          name: 'GeniusList',
          component: GeniusList
        },
        {
          path: 'message',
          name: 'BossMessage',
          component: BossMessage
        },
        {
          path: 'center',
          name: 'BossCenter',
          component: BossCenter
        },
        {
          path: '',
          redirect: 'genius-list'
        }
      ]
    },
    {
      path: '/genius',
      name: 'Genius',
      component: Genius,
      children: [
        {
          path: 'boss-list',
          name: 'BossList',
          component: BossList
        },
        {
          path: 'message',
          name: 'GeniusMessage',
          component: GeniusMessage
        },
        {
          path: 'center',
          name: 'GeniusCenter',
          component: GeniusCenter
        },
        {
          path: '',
          redirect: 'boss-list'
        }
      ]
    },
    {
      path: '/boss-info',
      name: 'BossInfo',
      component: () => import('../views/boss-info/BossInfo.vue')
    },
    {
      path: '/genius-info',
      name: 'GeniusInfo',
      component: () => import('../views/genius-info/GeniusInfo.vue')
    },
    {
      path: '/chat/:username',
      name: 'Chat',
      component: Chat
    }
  ]
})
