<template>
  <article
    class="card"
    :class="{'card_with_image': (imgSrc)}"
  >
    <img
      v-if="imgSrc"
      :src="imgSrc"
      alt=""
      class="img card__img"
    >
    <div class="card__body">
      <slot></slot>
    </div>
  </article>
</template>

<script>
export default {
  name: "MCard",
  props: {
    'img-src': String
  }
}
</script>

<style scoped>

.card {
  --border-radius: 1em;
  z-index: 10;
  position: relative;
  max-width: 500px;
  margin-bottom: 1em;
  border-radius: var(--border-radius);
  background-color: aliceblue;
  box-shadow: 0 0 20px -5px sandybrown;
}
.card:last-child {
  margin: 0;
}

.card__img {
  width: 100%;
  height: 500px;
  object-fit: cover;
  object-position: center center;
  border-radius: var(--border-radius) var(--border-radius);
}

.card__body {
  padding: .5em 1em;
}

</style>
