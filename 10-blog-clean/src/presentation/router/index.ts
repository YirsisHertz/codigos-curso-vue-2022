import { createRouter, createWebHistory } from "vue-router";
import { getCurrentUser } from "vuefire";

import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/auth/login",
      name: "login",
      component: () => import("../views/auth/LoginView.vue"),
    },
    {
      path: "/auth/register",
      name: "register",
      component: () => import("../views/auth/RegisterView.vue"),
    },
    {
      path: "/app",
      name: "blog",
      component: () => import("../views/blog/BlogView.vue"),
      meta: {
        requiresAuth: true,
      },
    },
  ],
});

router.beforeEach(async (to) => {
  if (to.meta.requiresAuth) {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
      return {
        path: "/auth/login",
        query: {
          redirect: to.fullPath,
        },
      };
    }
  }
});

export default router;
