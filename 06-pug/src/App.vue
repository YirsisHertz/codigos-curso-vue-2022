<template lang="pug">

lista(:elementos="juegos")

</template>

<script>
import Lista from "./components/Lista.vue";

export default {
  data: () => ({
    juegos: ["CSGO", "Minecraft", "PUBG"],
  }),
  components: { Lista },
};
</script>

<style scoped>
h1 {
  color: red;
}

.elemento1 {
  color: blue;
}

#elemento2 {
  color: gold;
}
</style>
