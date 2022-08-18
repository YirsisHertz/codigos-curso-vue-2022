<template>
  <h1>Counter: {{ counter.count }}</h1>
  <h2>Cuadrado: {{ counter.getCountTo2 }}</h2>
  <button @click="counter.addCountValue()">+1</button>
</template>

<script setup>

import { counterStore } from "../stores/counter"

const counter = counterStore()

</script>