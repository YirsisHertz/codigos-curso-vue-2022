<template>
  <center>
    <h3>Valor: {{ count }}</h3>
    <Button @cambiar="aumentar" title="Aumentar" />
    <Button @cambiar="disminuir" title="Disminuir" />

    <h4>IVA (16%): {{ iva }}</h4>
  </center>
</template>

<script setup>
import { defineProps } from "vue";
import { useCounter } from "../composables/useCounter";
import Button from "./Button.vue";

const props = defineProps({
  initialValue: {
    type: Number,
    default: 15,
  },
});

const { count, aumentar, disminuir, iva } = useCounter(props.initialValue);
</script>
