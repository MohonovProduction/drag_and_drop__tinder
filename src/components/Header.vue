<template>
  <header class="page-header">
    <m-button
      class="page-header__button"
      @click="$emit('modal-show')"
    >
      Watched
    </m-button>
  </header>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>

.page-header {
  padding: 1em;
}

</style>
