<template lang="pug">
ol
  li(
    v-for="elemento in elementos"
    @click="select(elemento)"
    ) {{elemento}}
</template>

<script>
export default {
  props: ["elementos"],
  methods: {
    select(value) {
      alert("Seleccionaste: " + value);
    },
  },
};
</script>

<style></style>
