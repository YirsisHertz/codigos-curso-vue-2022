<template>
  <Teleport to="body">
    <div class="modal">
      <h2>Products</h2>
      <hr />

      <div class="content">
        <CartContent />
      </div>

      <hr />
      <button @click="closeModal">Close</button>
    </div>
  </Teleport>
</template>

<script lang="ts" setup>
import { Teleport } from "vue";

import CartContent from "./CartContent.vue";

import { useModalStore } from "../stores/modal.store";

const { closeModal } = useModalStore();
</script>

<style scoped>
.modal {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  width: 800px;
  height: 500px;
  background-color: #333;
  border-radius: 8px;
  padding: 1rem;
}

.content {
  overflow: scroll;
  height: 400px;
}

button {
  font-size: 1rem;
  margin-top: 0.5rem;
  width: 100%;
  background-color: tomato;
  cursor: pointer;
  padding: 0.2rem;
}
</style>
