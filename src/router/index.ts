import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/main',
    component: () => import ('../views/MainNavigation/Main.vue')
  },
  {
    path: '/other',
    component: () => import ('../views/MainNavigation/Other.vue')
  },
  {
    path: '/submodule/', // <-- submodule with its own router-outlet
    component: () => import ('../views/SubModuleWithMenu/SideMenu.vue'),
    children: [
      {
        path: '',
        redirect: '/submodule/Inbox'
      },
      {
        path: ':id',
        component: () => import ('../views/SubModuleWithMenu/Folder.vue')
      }
    ]
  },
  {
    path: '',
    redirect: '/main'
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
