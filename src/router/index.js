import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/demo',
        name: 'demo',
        component: () => import('../views/demo.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
