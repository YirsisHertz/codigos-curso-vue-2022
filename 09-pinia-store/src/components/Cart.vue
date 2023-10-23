<template>
  <div v-for="product in products.available" class="card">
    <img :src="product.img" width="200" height="200" alt="product" />
    <h2>{{ product.name }}</h2>
    <h3>$ {{ product.value }}</h3>
    <button @click="addProduct(product)">+</button>
  </div>
</template>

<script setup lang="ts">
import { useProductStore } from "../stores/product.store";

const { products, addProduct } = useProductStore();
</script>

<style scoped>
.card {
  border: 1px solid #ccc;
  padding: 1rem;
  border-radius: 5px;
}

button {
  width: 100%;
  font-size: 1.2rem;
  margin-top: 1rem;
}
</style>
