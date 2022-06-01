<template>
  <div class="card">
    <img
      height="250"
      :src="gif.images.original.url"
      class="card-img-top"
      :alt="gif.id"
      loading="lazy"
    />
    <div class="card-body">
      <h5 class="card-title">
        {{ gif.title }}
      </h5>
    </div>
  </div>
</template>

<script>
export default {
  props: ["gif"],
};
</script>
