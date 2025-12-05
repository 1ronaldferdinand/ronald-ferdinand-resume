import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/pages/Home';
import ProjectDetail from '@/pages/ProjectDetail.vue';
import AdminLogin from '@/pages/admin/Login.vue';
import AdminDashboard from '@/pages/admin/Dashboard.vue';

const routes = [
  {
    path: '/',
    component: HomePage
  },
  {
    path: '/projects/:slug',
    component: ProjectDetail
  },
  {
    path: '/admin/login',
    component: AdminLogin
  },
  {
    path: '/admin/dashboard',
    component: AdminDashboard,
    meta: { requiresAuth: true }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
