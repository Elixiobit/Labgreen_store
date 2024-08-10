import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.js';
import TargetView from '../views/TargetView.js';
import AboutView from '../views/AboutView.js';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/target',
    name: 'target',
    component: TargetView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView

  }
];

const router = createRouter({
    history: createWebHistory('/'),
    routes
  });

  export default router;