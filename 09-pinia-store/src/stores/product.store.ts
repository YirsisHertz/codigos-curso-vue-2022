import { defineStore } from "pinia";
import { computed, reactive } from "vue";

interface Product {
  img: string;
  name: string;
  value: number;
}

interface SelectedProduct extends Product {
  quantity: number;
}

interface Products {
  available: Product[];
  selected: SelectedProduct[];
  quantity: () => number;
}

export const useProductStore = defineStore("product", () => {
  const products: Products = reactive<Products>({
    available: [
      {
        img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        name: "Producto 1",
        value: 70,
      },
      {
        img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1999&q=80",
        name: "Producto 2",
        value: 150,
      },
      {
        img: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
        name: "Producto 3",
        value: 20,
      },
    ],
    selected: [],
    quantity: () =>
      products.selected.length > 0
        ? products.selected
            .map((product) => product.quantity)
            .reduce((a, b) => a + b)
        : 0,
  });

  const addProduct = (product: Product) => {
    const productIndex = products.selected.findIndex(
      (p) => p.name === product.name
    );

    if (productIndex !== -1) {
      products.selected[productIndex].quantity += 1;
      return;
    }

    products.selected.push({ ...product, quantity: 1 });
  };

  return { products, addProduct };
});
