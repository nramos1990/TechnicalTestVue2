<template>
  <div class="hello">
    <img
      alt="Market logo"
      width="300"
      height="300"
      src="../assets/market.png"
    />
    <h1>Tienda - Productos</h1>
    <ul>
      <li
        v-for="producto in productos"
        :key="producto.id"
      >
        <span v-html="producto.icono"></span> {{ producto.nombre }} - Precio:
        {{ producto.precio }}
        <button
          type="button"
          class="btn btn-default btn-sm"
          data-toggle="tooltip"
          data-placement="top"
          title="agregar al carrito"
          @click="agregarProducto(producto)"
        >
          &#128722;
        </button>
      </li>
    </ul>
    <div
      class="alert alert-success alert-dismissible fade show"
      role="alert"
      v-if="this.showAlert"
    >
      Producto agregado al carrito!
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
    productos() {
      return this.$store.state.productos
    },
  },
  methods: {
    agregarProducto(producto) {
      this.showAlert = true
      this.$store.commit('agregarProducto', producto)
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none; /* Elimina los puntos de la lista */
  padding: 0;
}

li {
  padding: 10px;
  border-bottom: 1px solid #ccc; /* Añade una línea debajo de cada elemento */
}
a {
  color: #42b983;
}
</style>
