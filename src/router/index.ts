import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Tabs from '../views/Tabs.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/jon/color'
  },
  {
    path: '/jon/',
    component: Tabs,
    children: [
      {
        path: '',
        redirect: '/jon/color'
      },
      {
        path: 'color',
        component: () => import('@/views/Tab1.vue')
      },
      {
        path: 'photo',
        component: () => import('@/views/Tab2.vue')
      },
      {
        path: 'counter',
        component: () => import('@/views/Tab3.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
