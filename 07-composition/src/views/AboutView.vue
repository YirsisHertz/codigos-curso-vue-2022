<template>
  <div>
    <counter :initialValue="500" />
    <counter />
  </div>
</template>

<script setup>
import Counter from "../components/Counter.vue";
</script>
