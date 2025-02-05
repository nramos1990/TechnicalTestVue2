<template>
  <div id="app">
    <router-link to="/">Home</router-link> /
    <router-link to="/carrito">Carrito</router-link>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
  mounted() {
    document
      .querySelectorAll('[data-toggle="tooltip"]')
      .forEach(function (tooltip) {
        // eslint-disable-next-line
        new bootstrap.Tooltip(tooltip)
      })
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
