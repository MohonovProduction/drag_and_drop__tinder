<template>
  <header class="page-header">
    <button
      class="button page-header__button"
      @click="modal.show = true"
    >
      Просмотренные
    </button>
  </header>

  <Transition>
    <article
      class="modal"
      v-if="modal.show"
    >
      <button
        class="button modal__button"
        @click="modal.show = false"
      >X</button>
      <div>
        <article class="card modal__card">
          <h2 class="heading">Liked</h2>
        </article>
        <article
          class="card modal__card"
          v-for="item of liked"
        >
          <h1 class="heading card__heading">{{item.name}}</h1>
          <p class="text card__text">{{item.description}}</p>
        </article>
      </div>
      <div>
        <article class="card modal__card">
          <h2 class="heading">Canceled</h2>
        </article>
        <article
          class="card modal__card"
          v-for="item of canceled"
        >
          <h1 class="heading card__heading">{{item.name}}</h1>
          <p class="text card__text">{{item.description}}</p>
        </article>
      </div>
    </article>
  </Transition>

  <main class="wrapper">

    <template v-if="itemNowId + 1 < items.length">

      <div
        class="zone zone__love"
        :class="{ 'zone__love_active': zones.liked.active }"
        @drop="onDrop($event, 1); zones.liked.active = false"
        @dragenter.prevent="zones.liked.active = true"
        @dragover.prevent
        @dragleave="zones.liked.active = false"
      ></div>

      <article
        class="card"
        draggable="true"
        @dragstart="startDrag($event, itemNowId)"
      >
        <img :src="items[itemNowId].image" alt="" class="img card__img">
        <article class="card__description">
          <h1 class="heading card__heading">
            {{ items[itemNowId].name }}
          </h1>
          <p class="text card__text">
            {{ items[itemNowId].description }}
          </p>
        </article>
      </article>

      <div
        class="zone zone__cancel"
        :class="{ 'zone__cancel_active': zones.canceled.active }"
        @drop="onDrop($event, 0); zones.canceled.active = false"
        @dragenter.prevent="zones.canceled.active = true"
        @dragover.prevent
        @dragleave="zones.canceled.active = false"
      ></div>

    </template>

    <template v-else>
      <h2 class="heading main__heading_warn">Харош на девак пялить, иди поспи</h2>
    </template>

  </main>
</template>

<script>
export default {
  data() {
    return {
      modal: {
        show: false
      },
      itemNowId: 0,
      zones: {
        liked: {
          active: false
        },
        canceled: {
          active: false
        }
      },
      items: [
        {
          id: 0,
          image: 'https://webmodel.me/wp-content/uploads/2021/02/vebkamshhica-i-zarplata.jpg',
          name: 'Настя',
          description: 'Люблю геншен импакт, бравилик, смотрю аниме, состаю во многих фандомах.',
          list: null
        },
        {
          id: 1,
          image: 'https://cs14.pikabu.ru/post_img/big/2022/05/05/3/1651716779170925137.jpg',
          name: 'Анджела',
          description: 'Люблю геншен импакт, бравилик, смотрю аниме, состаю во многих фандомах.',
          list: null
        },
        {
          id: 2,
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuVF0RvX4Z8HG7L0gq8sfvIPojLDlD5yP-3Vk_PlaCtg&s',
          name: 'Екатирина',
          description: 'Люблю геншен импакт, бравилик, смотрю аниме, состаю во многих фандомах.',
          list: null
        },
        {
          id: 3,
          image: 'https://s16.stc.yc.kpcdn.net/share/i/12/12492885/wr-960.webp',
          name: 'Маша',
          description: 'Люблю геншен импакт, бравилик, смотрю аниме, состаю во многих фандомах.',
          list: null
        },
        {
          id: 4,
          image: 'https://cs12.pikabu.ru/post_img/2021/05/09/9/1620572733164886299.jpg',
          name: 'Люта',
          description: 'Люблю геншен импакт, бравилик, смотрю аниме, состаю во многих фандомах.',
          list: null
        }
      ],
    }
  },
  methods: {
    startDrag(event, itemId) {
      console.log(this.items.length, itemId)
      event.dataTransfer.dropEffect = 'move'
      event.dataTransfer.effectAllowed = 'move'
      event.dataTransfer.setData('itemID', this.items[itemId].id)
    },
    onDrop(event, list) {
      const itemID = event.dataTransfer.getData('itemID')
      console.log(itemID)

      let itemArrId = null
      const items = this.items.filter((el, id) => {
        itemArrId = id
        return el.id == itemID
      })
      console.log(items)

      const item = items[0]

      if (list) {
        item.list = 'liked'
      } else {
        item.list = 'canceled'
      }

      if (this.itemNowId + 1 < this.items.length) this.itemNowId++
    }
  },
  computed: {
    liked() {
      return this.items.filter(el => el.list === 'liked')
    },
    canceled() {
      return this.items.filter(el => el.list === 'canceled')
    },
  }
}
</script>

<style>
:root {
  font-family: sans-serif;
  font-size: 1.3rem;
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

.card {
  z-index: 10;
  border-radius: 3em;
  overflow: hidden;
  background-color: aliceblue;
  box-shadow: 0 0 20px -5px sandybrown;
  margin-bottom: 1em;
  max-width: 500px;
}
.card:last-child {
  margin-bottom: 0;
}
.card__img {
  width: 100%;
  height: 500px;
  object-fit: cover;
  object-position: center center;
}
.card__description {
  padding: 1em 2em;
}
.card__heading {
  margin-bottom: 1em;
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
.button {
  padding: 1em;
  background-color: chocolate;
  color: aliceblue;
  font-size: 1em;
  border-radius: 1em;
}
.button:hover,
.button:active {
  cursor: pointer;
}

.modal {
  z-index: 20;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  display: flex;
  justify-content: space-around;
  align-items: center;

  backdrop-filter: blur(10px);
}
.modal__button {
  position: absolute;
  top: 2em;
  left: 2em;
}
.modal__card {
  padding: 2em;
  overflow: visible;
}


</style>
