import {createMemoryHistory, createRouter} from 'vue-router'

import ShopHome from '../views/ShopHome.vue'
import Car from '../views/Car.vue'
import ProductView from '../views/ProductView.vue'


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
    },
    {
        path: '/productview/:id',
        name: 'ProductView',
        component: ProductView
    }
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
    
  })

export default router