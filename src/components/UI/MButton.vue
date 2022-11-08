<template>
  <button class="button">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "MButton"
}
</script>

<style scoped>

.button {
  font-size: 1em;
  padding: .5em 1em;
  background-color: chocolate;
  color: aliceblue;
  font-size: 1em;
  border-radius: 1em;
}
.button:hover,
.button:active {
  cursor: pointer;
}

</style>
