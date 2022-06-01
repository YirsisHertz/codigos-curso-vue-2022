<template>
  <Navbar />

  <div class="container mt-3 text-center">
    <RouterView />
  </div>
</template>

<script>
import { RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";

export default {
  components: { RouterView, Navbar },
};
</script>

<style scoped>
div {
  border-radius: 13px;
  box-shadow: 3px 3px 7px #ccc;
  padding: 1rem;
}
</style>
