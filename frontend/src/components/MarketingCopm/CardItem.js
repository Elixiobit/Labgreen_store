import { ref } from "vue";


// <!-- Wrap the rest of the page in another container to center all the content. -->
export default {
    setup() {
      let id = 0;
        const itemsCard = ref([
            {
                id: id++,
                title: 'Декор мероприятий',
                discription: '[свадьбы, корпоративы, рекламные кампании, выставки, презентации]',
                isActive: true,
                nameButton: 'Подробнее',
                linkPage:'',
                linkCard: './src/assets/img/фотозона/1706971321371.jpg'
            },
            {
                id: id++,
                title: 'Сезонное и праздничное оформление',
                discription: '[входная зона коммерческих пространств, фасадная флористика, витринистика]',
                isActive: false,
                nameButton: 'Подробнее',
                linkPage:'',
                linkCard: './src/assets/img/входная группа/1706971321133.jpg'
            },
            {
                id: id++,
                title: 'Сетдизайн',
                discription: '[артобъекты, инсталляции]',
                isActive: false,
                nameButton: 'Подробнее',
                linkPage:'',
                linkCard: './src/assets/img/сет дизайн/сетдизайн .jpg'
            }
            // ,
            // {
            //     id: id++,
            //     title: 'Что-то новое ',
            //     discription: 'Some representative placeholder content for the first slide of the carousel.',
            //     isActive: false,
            //     nameButton: 'Ныряй',
            //     linkCard: ''
            // }
        ]);
        return {
          itemsCard
        }
    },
    template: /*html*/`
      <!-- Three columns of text below the carousel -->
      <div class="row">
        <template v-for="itemCard in itemsCard" :key="itemCard.id">
          <div class="col-lg-4">
            <svg v-if="!itemCard.linkCard" class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-color)"/></svg>
            <img v-else :src="itemCard.linkCard" class="bd-placeholder-img" width="140" height="140" alt="Загрузка...">
            <h4 class="fw-normal">{{ itemCard.title }}</h4>
            <p>{{ itemCard.discription }}</p>
            <p><a class="btn btn-secondary" :href="itemsCard.linkPage">{{ itemCard.nameButton }}&raquo;</a></p>
          </div><!-- /.col-lg-4 -->
        </template>
      </div>
    `
}
