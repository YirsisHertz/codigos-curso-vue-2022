<template>
  <div class="empty" v-if="products.quantity() === 0">
    <h2>X</h2>
    <h3>Empty Cart</h3>
  </div>

  <template v-else>
    <div v-for="product in products.selected" class="card">
      <h2>{{ product.name }}</h2>
      <div class="detail">
        <h3>
          $ {{ product.value }} x {{ product.quantity }} = $
          {{ product.value * product.quantity }}
        </h3>
      </div>
      <div>
        <img :src="product.img" width="100" height="100" alt="product_image" />
      </div>
    </div>
  </template>
</template>

<script setup lang="ts">
import { useProductStore } from "../stores/product.store";

const { products } = useProductStore();
</script>

<style scoped>
.empty {
  color: tomato;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.card {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #ccc;
  margin: 1rem 0px;
  padding: 1rem;
  border-radius: 6px;
}
</style>
