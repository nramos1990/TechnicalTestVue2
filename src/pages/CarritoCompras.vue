<template>
  <div>
    <img
      alt="shopping cart"
      width="300"
      height="300"
      src="../assets/shoppingCart.png"
    />
    <h1>Carrito de Compras</h1>
    <ul>
      <li
        v-for="producto in carrito"
        :key="producto.id"
      >
        {{ producto.nombre }} - Cantidad: {{ producto.cantidad }} - total = ${{
          producto.precio * producto.cantidad
        }}
        <button
          type="button"
          class="btn btn-default btn-md"
          data-toggle="tooltip"
          data-placement="top"
          title="eliminar producto"
          @click="quitarProducto(producto)"
        >
          &#10060;
        </button>
      </li>
    </ul>

    <h3>Total carrito: ${{ totalCompra ?? 0 }} CLP</h3>
    <div
      class="alert alert-warning alert-dismissible fade show"
      role="alert"
      v-if="showAlert"
    >
      Producto eliminado del carrito!
    </div>
  </div>
</template>

<script>
export default {
  props: {
    msg: String,
  },
  data() {
    return {
      showAlert: false,
    }
  },
  computed: {
    carrito() {
      return this.$store.state.carrito
    },
    totalCompra() {
      return this.$store.getters.totalCarrito
    },
  },
  methods: {
    quitarProducto(producto) {
      this.showAlert = true
      this.$store.dispatch('quitarProducto', producto)
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
a {
  color: #42b983;
}
</style>
