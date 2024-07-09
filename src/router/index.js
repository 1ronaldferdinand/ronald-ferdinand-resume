import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/pages/Home';
import KasdanaPage from '@/pages/projects/KasdanaPage';
import WorxspacePage from '@/pages/projects/WorxspacePage.vue';
import DelapanBelasHolePage from '@/pages/projects/DelapanBelasHolePage.vue';
import FrontdeskPage from '@/pages/projects/FrontdeskPage.vue';
import HmifPage from '@/pages/projects/HmifPage.vue';

const routes = [
  {
    path: '/',
    component: HomePage
  },
  {
    path: '/projects/kasdana',
    component: KasdanaPage
  },
  {
    path: '/projects/worxspace',
    component: WorxspacePage
  },
  {
    path: '/projects/18hole',
    component: DelapanBelasHolePage
  },
  {
    path: '/projects/frontdesk',
    component: FrontdeskPage
  },
  {
    path: '/projects/hmif',
    component: HmifPage
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
