<template>
  <div class="data">
    <h2>Información...</h2>

    <h3>
      <span class="cripto">{{ cripto }}</span>
      -
      <span class="moneda">{{ moneda }}</span>
    </h3>
    <img :src="`https://www.cryptocompare.com${img}`" />
    <p>
      Precio: <strong>$ {{ precio }}</strong>
    </p>
  </div>
</template>

<script>
export default {
  props: {
    cripto: {
      type: String,
      required: true,
    },
    moneda: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    precio: {
      type: Number,
      required: true,
    },
  },
};
</script>
