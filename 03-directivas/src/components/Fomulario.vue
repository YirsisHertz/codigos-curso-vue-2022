<template>
  <div class="row">
    <div class="col-12 mb-4">
      <progress-bar :porcentaje="porcentaje" />
    </div>

    <div class="col-12 col-md-4">
      <form @submit.prevent="registrarProyecto">
        <div class="mb-3">
          <label class="form-label w-75">
            Proyecto
            <input
              v-model.trim="proyecto"
              type="text"
              class="form-control"
              required
            />
          </label>
        </div>

        <div class="mb-3">
          <label class="form-label w-75">
            Actividad

            <select v-model.trim="tipo" class="form-select" required>
              <option disabled selected value="">Seleccione un tipo...</option>
              <option>Diseño Grafico</option>
              <option>Nuevo Curso</option>
              <option>Actualizar Curso</option>
              <option>Programación</option>
              <option>Tarea</option>
              <option>Otro</option>
            </select>
          </label>
        </div>

        <div class="mb-3 w-75">
          <label class="form-check-label ml-3">
            Urgente
            <input
              v-model.trim="urgente"
              type="checkbox"
              class="form-check-input"
            />
          </label>
        </div>

        <button type="submit" class="btn btn-primary">Guardar</button>
      </form>
    </div>

    <div class="col-12 col-md-8">
      <total-proyectos
        :numeroProyectos="numeroProyectos"
        :proyectos="proyectos"
        :cambiarEstado="cambiarEstado"
        :limpiarData="limpiarData"
      />
    </div>
  </div>
</template>

<script>
import ProgressBar from "./ProgressBar.vue";
import TotalProyectos from "./TotalProyectos.vue";

export default {
  components: { ProgressBar, TotalProyectos },
  data: () => ({
    proyecto: "",
    tipo: "",
    urgente: false,
    proyectos: [],
  }),
  methods: {
    registrarProyecto() {
      const proyecto = {
        proyecto: this.proyecto,
        tipo: this.tipo,
        urgente: this.urgente,
        completado: false,
      };

      this.proyectos.push(proyecto);
      this.saveData();

      this.proyecto = "";
      this.tipo = "";
      this.urgente = false;
    },
    cambiarEstado(proyecto, campo) {
      proyecto[campo] = !proyecto[campo];
      this.saveData();
    },
    saveData() {
      localStorage.setItem("proyectos", JSON.stringify(this.proyectos));
    },
    limpiarData() {
      this.proyectos = [];
      localStorage.clear();
    },
  },
  computed: {
    numeroProyectos() {
      return this.proyectos.length;
    },
    porcentaje() {
      let completados = 0;

      this.proyectos.map((proyecto) => {
        if (proyecto.completado) completados++;
      });

      return Math.round((completados * 100) / this.numeroProyectos, -1) || 0;
    },
  },
  mounted() {
    this.proyectos = JSON.parse(localStorage.getItem("proyectos")) || [];
  },
};
</script>
