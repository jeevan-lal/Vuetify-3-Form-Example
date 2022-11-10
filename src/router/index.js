import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    // Example Routes
    {
      path: '/example',
      component: () => import('../views/layout/ExampleLayout.vue'),
      children: [
        {
          path: '1',
          name: 'example-1',
          component: () => import('../views/example/Example-1.vue'),
        }
      ]
    },
    // Not Found
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('../views/NotFound.vue')
    }
  ]
})

export default router
