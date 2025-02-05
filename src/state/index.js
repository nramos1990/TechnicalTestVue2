import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    carrito: [],
    productos: [
      {
        id: 1,
        nombre: 'Manzana',
        precio: 400,
        icono: '&#127822;',
      },
      {
        id: 2,
        nombre: 'Piña',
        precio: 1500,
        icono: '&#127821;',
      },
      {
        id: 3,
        nombre: 'Frutilla',
        precio: 600,
        icono: '&#127827;',
      },
    ],
  },
  mutations: {
    agregarProducto(state, producto) {
      const existe = state.carrito.find((p) => p.id === producto.id)
      if (existe) {
        existe.cantidad++
      } else state.carrito.push({ ...producto, cantidad: 1 })
    },
    quitarProducto(state, producto) {
      const index = state.carrito.findIndex((p) => {
        return p.id === producto.id
      })
      if (index !== -1) state.carrito.splice(index, 1)
    },
  },
  actions: {
    agregarProducto({ commit }, producto) {
      commit('agregarProducto', producto)
    },
    quitarProducto({ commit }, producto) {
      commit('quitarProducto', producto)
    },
  },
  getters: {
    totalCarrito(state) {
      return state.carrito.reduce(
        (acc, producto) => acc + producto.precio * producto.cantidad,
        0
      )
    },
  },
})
