<script setup lang="ts">
import { getCurrentUser } from "vuefire";
import { onMounted } from "vue";
import { RouterView, useRouter } from "vue-router";

const router = useRouter();

onMounted(async () => {
  const currentUser = await getCurrentUser();

  if (currentUser) {
    router.replace({ name: "blog" });
  }
});
</script>

<template>
  <RouterView />
</template>
