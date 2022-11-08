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

.wrapper {
  display: flex;
  padding: 5rem;
  background-color: antiquewhite;
  min-height: 90vh;
}

.main__heading_warn {
  opacity: .7;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.card__heading {
  margin-bottom: .3em;
}
.card__text {
  margin-bottom: .3em;
}

.modal__wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1em 2em;
  padding: 1em 2em 0 2em;
}

.zone {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3em;
  min-height: 100%;
  flex: 1 0 200px;
  margin: 1em;
  transition: all .3s ease-in-out;
}
.zone__love {
  background-color: brown;
  opacity: .1;
}
.zone__love::before {
  content: '❤';
  font-size: 2em;
}
.zone__love_active {
  box-shadow: 0 0 10px 20px darkred;
  background-color: darkred;
  opacity: .8;
}
.zone__cancel {
  background-color: gray;
  opacity: .1;
}
.zone__cancel::before {
  content: '✖';
  font-size: 2em;
}
.zone__cancel_active {
  box-shadow: 0 0 10px 20px gray;
  background-color: gray;
  opacity: .8;
}

.page-header {
  padding: 1em;
}

</style>
