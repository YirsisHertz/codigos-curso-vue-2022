<template>
  <div class="row my-2">
    <div class="col-6">
      <h3>Total Proyectos: {{ numeroProyectos }}</h3>
    </div>
    <div class="col-6 text-end">
      <button @click="limpiarData" class="btn btn-warning">
        Limpiar Proyectos
      </button>
    </div>
  </div>

  <div class="table-responsive">
    <table class="table table-hover">
      <thead class="table-dark">
        <tr>
          <th>#</th>
          <th>Proyecto</th>
          <th>Tipo</th>
          <th>Urgente</th>
          <th>Completado</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="(proyecto, index) in proyectos" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ proyecto.proyecto }}</td>
          <td>{{ proyecto.tipo }}</td>
          <td
            @click="cambiarEstado(proyecto, 'urgente')"
            :class="`${
              proyecto.urgente ? 'bg-info' : 'bg-warning'
            } text-dark fw-bold text-center`"
          >
            {{ proyecto.urgente ? "SI" : "NO" }}
          </td>
          <td
            @click="cambiarEstado(proyecto, 'completado')"
            :class="`${
              proyecto.completado ? 'bg-success' : 'bg-danger'
            } text-white fw-bold text-center`"
          >
            {{ proyecto.completado ? "Completo" : "Incompleto" }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: ["numeroProyectos", "proyectos", "cambiarEstado", "limpiarData"],
};
</script>
