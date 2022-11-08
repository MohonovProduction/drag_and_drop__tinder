<template>
  <Transition name="fade">
    <m-modal
      @close-modal="$emit('modal-close')"
      v-if="modalShow"
    >
      <div class="modal__wrapper">
        <div>
          <m-card><h2 class="heading">Liked</h2></m-card>
          <m-card
            v-for="item of liked"
          >
            <h1 class="heading card__heading">{{item.name}}</h1>
            <p class="text card__text">{{item.description}}</p>
          </m-card>
        </div>
        <div>
          <m-card>
            <h2 class="heading">Canceled</h2>
          </m-card>
          <m-card
            v-for="item of canceled"
          >
            <h1 class="heading card__heading">{{item.name}}</h1>
            <p class="text card__text">{{item.description}}</p>
          </m-card>
        </div>
      </div>
    </m-modal>
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

      <m-card
        draggable="true"
        @dragstart="startDrag($event, itemNowId)"
        :img-src="items[itemNowId].image"
      >
        <h1 class="heading card__heading">{{ items[itemNowId].name }}</h1>
        <p class="text card__text">{{ items[itemNowId].description }}</p>
      </m-card>

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
  name: "Main",
  props: {
    modalShow: Boolean
  },
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

<style scoped>

</style>
