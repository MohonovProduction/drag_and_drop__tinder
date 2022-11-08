<template>
  <article class="modal">
    <header>
      <m-button
        class="modal__button"
        @click="$emit('close-modal')"
      >
        ✖
      </m-button>
    </header>
    <article class="modal__body">
      <slot></slot>
    </article>
  </article>
</template>

<script>
export default {
  name: "MModal"
}
</script>

<style scoped>

.modal {
  z-index: var(--z-imdex-modal);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  backdrop-filter: blur(10px);

  overflow-y: scroll;
}

.modal__button {
  margin: 1em;
}

.modal__body {
  display: flex;
  justify-content: center;
}

</style>
