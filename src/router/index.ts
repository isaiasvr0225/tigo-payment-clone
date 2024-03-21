import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/order-details',
      name: 'order',
      // route level code-splitting
      // this generates a separate chunk (Order.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/OrderDetailsView.vue')
    },
    {
      path: '/card-payment',
      name: 'card',
      component: () => import('../views/CardPaymentView.vue')
    },
    {
      path: '/factura',
      name: 'factura',
      component: () => import('../views/FacturaView.vue')
    }
  ]
})

export default router
