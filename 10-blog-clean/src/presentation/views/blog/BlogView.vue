<template>
  <AppLayout>
    <h1 class="text-center text-2xl font-bold">Welcome to Blog</h1>

    <CreatePublicationForm />

    <PublicationsList />
  </AppLayout>
</template>

<script setup lang="ts">
import { onMounted } from "vue";

// Components
import AppLayout from "../../layouts/AppLayout.vue";
import CreatePublicationForm from "../../components/Forms/CreatePublicationForm.vue";
import PublicationsList from "../../components/Publications/PublicationsList.vue";

// Stores
import { usePublications } from "../../stores/publications.store";

const { findAll } = usePublications();

onMounted(() => {
  findAll();
});
</script>
