<template>
  <Header @modal-show="modal.show = true" />
  <Main
    :modal-show="modal.show"
    @modal-close="modal.show = false"
  />
</template>

<script>
import Header from '@/components/Header'
import Main from '@/components/Main'

export default {
  components: {
    Header, Main
  },
  data() {
    return {
      modal: {
        show: false
      }
    }
  }
}
</script>

<style>

:root {
  font-family: sans-serif;
  font-size: 1.3rem;

  --z-imdex-modal: 20;

  background-color: antiquewhite;
}

*,
:before,
:after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  border: none;
  outline: none;
  background: none;
}

.fade-enter-active,
.fade-leave-active {
  transform: scale(1);
  opacity: 1;
  transition: .3s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  transform: scale(.99);
  opacity: 0;
}

</style>
