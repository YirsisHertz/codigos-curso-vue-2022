import { defineStore } from "pinia";
import { reactive } from "vue";

export const useModalStore = defineStore("modal", () => {
  const modalValue = reactive({
    open: false,
  });

  const openModal = () => {
    modalValue.open = true;
  };

  const closeModal = () => {
    modalValue.open = false;
  };

  return { modalValue, openModal, closeModal };
});
