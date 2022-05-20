<template>
  <grid>
    <img :src="url" :alt="nombre" />

    <h2>{{ nombre }}</h2>

    <a :href="url" target="_blank"> Descargar </a>
    <a :href="url" target="_blank"> Visitar </a>
  </grid>
</template>

<script>
import Grid from "./Grid.vue";

export default {
  props: {
    url: {
      String,
    },
    nombre: {
      String,
    },
  },
  components: { Grid },
};
</script>

<style scoped>
img {
  width: 8rem;
  height: 8rem;
  padding: 0.5rem;
}

a {
  text-decoration: none;
  color: snow;
  background: #301675;
  padding: 0.3rem;
  border-radius: 5px;
  border: 1px solid #f2f2f2;
}
</style>
