import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/:pathMatch(.*)*",
      name: "404",
      component: () => import("../views/NotFound.vue"),
    },
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/gifs",
      name: "gifs",
      component: () => import("../views/GifsView.vue"),
    },
    {
      path: "/stickers",
      name: "stickers",
      component: () => import("../views/StickersView.vue"),
    },
  ],
});

export default router;
