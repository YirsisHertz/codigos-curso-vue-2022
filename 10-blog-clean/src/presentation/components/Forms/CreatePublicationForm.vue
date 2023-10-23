<template>
  <form @submit.prevent="handleSubmit">
    <div class="form-control">
      <label class="label">
        <span class="label-text">Create Publication</span>
      </label>

      <input
        @change="handleUploadImage"
        type="file"
        class="file-input file-input-bordered w-full my-2"
      />

      <textarea
        class="textarea textarea-bordered h-24"
        placeholder="¿Que publicas?"
        v-model="publicationForm.body"
      ></textarea>
    </div>

    <button class="btn btn-primary mt-2">Send</button>
  </form>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { useFirebaseAuth } from "vuefire";

import { formatPublicationDataSourceAdapter } from "../../../adapters/datasources/formatPublicationDataSource";

import { usePublications } from "../../stores/publications.store";

const { create, uploadImage, getDownloadURL } = usePublications();
const auth = useFirebaseAuth();

const publicationForm = reactive<{ body: string; img: string }>({
  body: "",
  img: "",
});

const clearForm = () => {
  publicationForm.body = "";
  publicationForm.img = "";
};

const handleUploadImage = async (event: Event) => {
  const target = event.target as HTMLInputElement;

  if (target.files!.length <= 0) {
    return;
  }

  try {
    const file = target.files![0];

    await uploadImage(file);

    const dowloadLink = await getDownloadURL(file);

    publicationForm.img = dowloadLink!;
  } catch (error) {
    console.log(error);
  }
};

const handleSubmit = async () => {
  if (publicationForm.body.length < 10) {
    return;
  }

  const uid = auth!.currentUser!.uid;
  const formatData = formatPublicationDataSourceAdapter(publicationForm, uid);

  await create(formatData);

  clearForm();
};
</script>
