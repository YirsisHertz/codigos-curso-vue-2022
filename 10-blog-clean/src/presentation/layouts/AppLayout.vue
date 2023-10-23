<template>
  <Header />
  <main class="m-16">
    <slot></slot>
  </main>
</template>

<script setup lang="ts">
import Header from "../components/Structures/Header.vue";
</script>
