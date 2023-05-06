import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/views/Home.vue')
    },
    {
      path: '/about',
      name: 'About',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/About.vue')
    },
    {
      path: '/projects/*',
      name: 'Projects',
      component: () => import('@/views/Project.vue')
    },
    {
      path: '/studio/',
      name: 'Studio',
      component: () => import('@/views/Studio.vue')
    }
  ]
})

export default router
