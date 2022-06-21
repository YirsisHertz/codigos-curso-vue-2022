import { ref, computed } from "vue";

export const useCounter = (initialValue) => {
  const count = ref(initialValue);

  const aumentar = () => {
    count.value++;
  };

  const disminuir = () => {
    count.value--;
  };

  const iva = computed(() => count.value * 1.16);

  return { count, aumentar, disminuir, iva };
};
