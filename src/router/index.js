import Vue from 'vue'
import VueRouter from 'vue-router'
import CarritoCompras from '../pages/CarritoCompras.vue'
import Productos from '../pages/ProductosTienda.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      component: Productos,
    },
    {
      path: '/carrito',
      component: CarritoCompras,
    },
  ],
})
