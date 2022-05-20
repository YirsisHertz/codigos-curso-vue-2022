<template>
  <h3 class="text-center">Progreso: {{ porcentaje }}%</h3>

  <div class="progress">
    <div
      class="progress-bar progress-bar-striped progress-bar-animated bg-success"
      role="progressbar"
      :aria-valuenow="porcentaje"
      aria-valuemin="0"
      aria-valuemax="100"
      :style="`width: ${porcentaje}%`"
    ></div>
  </div>
</template>

<script>
export default {
  props: {
    porcentaje: Number,
  },
};
</script>
