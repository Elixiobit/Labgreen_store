import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.js';
import TargetView from '../views/TargetView.js';

const router = createRouter({
    history: createWebHistory('/'),
    routes: [
      {
        path: '/',
        name: 'home',
        component: HomeView
      },
      {
        path: '/target',
        name: 'target',
        component: TargetView,
      }
    ]
  });

  export default router;