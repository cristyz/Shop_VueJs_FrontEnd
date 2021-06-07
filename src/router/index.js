import {createWebHistory, createRouter} from 'vue-router'

import ShopHome from '../views/ShopHome.vue'
import Car from '../views/Car.vue'
import ProductView from '../views/ProductView.vue'
import Login from '../views/Login.vue'
import SingUp from '../views/SingUp.vue'


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
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/singup',
        name: 'SingUp',
        component: SingUp
    },
    {
        path: '/productview/:id',
        name: 'ProductView',
        component: ProductView
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    
  })

export default router