import { computed, ref } from "vue";

export default {
    setup() {
        let id = 0;
        const itemsCorousel = ref([
            {
                id: id++,
                title: 'Фитодизайн/озеленение',
                discription: 'Индивидуальное концептуальное решение под ваш бюджет',
                isActive: true,
                nameButton: 'Оставить заявку',
                pathImg: './src/assets/img/IMG-20200721-WA0005.jpg'
            },
            {
                id: id++,
                title: 'Декор из стабилизированного мха',
                discription: 'Эксклюзивное интерьерное оформление',
                isActive: false,
                nameButton: 'Проекты',
                pathImg: './src/assets/img/IMG_20200313_055716.jpg'
            },
            {
                id: id++,
                title: 'Контейнерное озеленение',
                discription: 'Сезонные декоративные композиции',
                isActive: false,
                nameButton: 'Ныряй',
                pathImg: './src/assets/img/фитодизайн/3_slide.jpg'
            }
        ]);
        const numberSlides = computed(() => {
            return (itemsCorousel.value.length)
          })
        return {
            itemsCorousel,
            numberSlides
        }
    },

    template: /*html*/`
      <div id="myCarousel" class="carousel slide mb-6" data-bs-ride="carousel">
          <div class="carousel-indicators">
            <button v-for="itemCorousel in itemsCorousel" type="button" 
              data-bs-target="#myCarousel" :data-bs-slide-to="itemCorousel.id" 
              :class="{active: itemCorousel.isActive}" :aria-current="itemCorousel.isActive" 
              :aria-label='"Slide " + itemCorousel.id' :key="itemCorousel.id">
            </button>
          </div>

          <div class="carousel-inner">
              <template v-for="(itemCorousel, key) in itemsCorousel" :key="itemCorousel.id">
                <div class="carousel-item " :class="{active: itemCorousel.isActive}">
                  <svg v-if="!itemCorousel.pathImg" class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="var(--bs-secondary-color)"/></svg>
                  <img v-else :src="itemCorousel.pathImg" class="bd-placeholder-img" height="100%" aria-hidden="true">
                  <div class="container">
                    <div class="carousel-caption"  :class="[key === 0 ? 'text-start': '', key === (numberSlides - 1) ? 'text-end': '']">
                      <h1>{{ itemCorousel.title }}</h1>
                      <p>{{ itemCorousel.discription }}</p>
                      <!-- <p><a class="btn btn-lg labgreen-color" :href="itemCorousel.pathImg">{{ itemCorousel.nameButton }}</a></p> -->
                    </div>
                  </div>
                </div>
              </template>
          </div>

          <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
      </div>
    `
}