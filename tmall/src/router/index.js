import Vue from 'vue'
import Router from 'vue-router'
import index from '../pages/index'
import shoppingCar from "../pages/shoppingCar";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/shoppingCar',
      name: 'shoppingCar',
      component: shoppingCar
    }
  ]
})
