import {createMemoryHistory, createRouter} from 'vue-router'

import ShopHome from '../views/ShopHome.vue'
import Car from '../views/Car.vue'


const routes = [
    {
        path: '/',
        name: 'ShopHome',
        component: ShopHome
    },
    {
        path: '/car',
        name: 'Car',
        component: Car
    }
]

const router = createRouter({
    history: createMemoryHistory(),
    routes
  })

export default router