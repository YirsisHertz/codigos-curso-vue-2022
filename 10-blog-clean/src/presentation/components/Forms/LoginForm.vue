<template>
  <h1 class="text-3xl">Login</h1>

  <form @submit.prevent="login">
    <div class="form-control w-full">
      <label class="label">
        <span class="label-text">Email</span>
      </label>
      <input
        v-model="authForm.email"
        type="email"
        placeholder="example@example.com"
        class="input input-bordered w-full max-w-xs"
      />
    </div>
    <div class="form-control w-full">
      <label class="label">
        <span class="label-text">Password</span>
      </label>
      <input
        v-model="authForm.password"
        type="password"
        class="input input-bordered w-full max-w-xs"
      />
    </div>

    <button type="submit" class="btn btn-block mt-5 btn-accent">Login</button>

    <button
      @click="loginGoogle"
      type="button"
      class="btn btn-block mt-5 btn-error"
    >
      Login With Google
    </button>
  </form>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useRouter } from "vue-router";

import { useAuthStore } from "../../stores/auth.store";

const router = useRouter();

const { loginWithEmailAndPassword, authForm, resetForm, loginWithGoogle } =
  useAuthStore();

const login = async () => {
  const user = await loginWithEmailAndPassword();

  if (user) {
    return router.replace({ name: "blog" });
  }
};

const loginGoogle = async () => {
  const user = await loginWithGoogle();

  if (user) {
    return router.replace({ name: "blog" });
  }
};

onMounted(() => {
  resetForm();
});
</script>
