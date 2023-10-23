<template>
  <h1 class="text-3xl">Register</h1>

  <form @submit.prevent="register">
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
    <div class="form-control w-full">
      <label class="label">
        <span class="label-text">Confirm Password</span>
      </label>
      <input
        v-model="authForm.confirmPassword"
        type="password"
        class="input input-bordered w-full max-w-xs"
      />
    </div>

    <button type="submit" class="btn btn-block mt-5 btn-accent">
      Register
    </button>
  </form>
</template>

<script setup lang="ts">
import { onMounted } from "vue";

import { useAuthStore } from "../../stores/auth.store";
import { useRouter } from "vue-router";

const router = useRouter();
const { registerWithEmailAndPassword, authForm, resetForm } = useAuthStore();

const register = async () => {
  const user = await registerWithEmailAndPassword();

  if (user) {
    return router.replace({ name: "blog" });
  }
};

onMounted(() => {
  resetForm();
});
</script>
