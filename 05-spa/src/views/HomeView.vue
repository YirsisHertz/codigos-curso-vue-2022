<template>
  <h1>Gif Router</h1>
  <img :src="img" :alt="name" />
</template>

<script>
export default {
  data: () => ({
    img: "",
    name: "",
  }),
  created() {
    this.getRandomGif();
  },
  methods: {
    async getRandomGif() {
      const data = await fetch(
        "https://api.giphy.com/v1/gifs/random?api_key=nzy3kpCUN9I5PuA5UUDcjfoN8nV3Z0jp"
      );
      const res = await data.json();

      this.img = res.data.images.original.url;
      this.name = res.data.title;

      console.log(res.data.title);
    },
  },
};
</script>
