<template>
  <div class="container mt-3">
    <Header />

    <Fomulario />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Fomulario from "./components/Fomulario.vue";

export default {
  components: {
    Header,
    Fomulario,
  },
};
</script>
