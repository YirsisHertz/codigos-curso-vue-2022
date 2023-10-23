<template>
  <header>
    <div class="navbar bg-primary text-primary-content">
      <div class="navbar-start">
        <a class="btn btn-ghost normal-case text-xl">Blog Vue</a>
      </div>

      <div class="navbar-end">
        <button type="button" @click="logoutSesion" class="btn btn-error">
          Logout
        </button>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

import { useAuthStore } from "../../stores/auth.store";

const router = useRouter();

const { logout } = useAuthStore();

const logoutSesion = async () => {
  await logout();

  router.replace({ name: "login" });
};
</script>
