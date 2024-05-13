import { ref } from "vue";

export default{
    setup() {
        let id = 0;
          const boxsMarketing = ref([
              {
                  id: id++,
                  title: 'Example headline.',
                  titleTwo: 'It’ll blow your mind.',
                  discription: 'Lorem 100',
                  linkPage:'',
                  linkImg: './src/assets/img/интерьеры/1706971320811.jpg'
              },
              {
                  id: id++,
                  title: 'Another example headline.',
                  titleTwo: 'See for yourself.',
                  discription: 'Some representative placeholder content for the first slide of the carousel.',
                  linkPage:'',
                  linkImg: './src/assets/img/фитодизайн/IMG_20200726_120906.jpg'
              },
              {
                  id: id++,
                  title: 'Что-то новое ',
                  titleTwo: 'It’ll blow your mind.',
                  discription: 'Some representative placeholder content for the first slide of the carousel.',
                  linkPage:'',
                  linkImg: './src/assets/img/фитодизайн/IMG_20200907_112222.jpg'
              }
          ]);
          return {
            boxsMarketing
          }
      },
    template: /*html*/ `
        <!-- START THE FEATURETTES -->
      <template v-for="boxMarketing in boxsMarketing" :key="boxMarketing.id">
        <hr class="featurette-divider">

        <div class="row featurette">
          <div class="col-md-7">
            <h2 class="featurette-heading fw-normal lh-1">{{ boxMarketing.title }}<span class="text-body-secondary">{{ boxMarketing.titleTwo }}</span></h2>
            <p class="lead">{{ boxMarketing.discription }}</p>
          </div>
          <div class="col-md-5">
          <svg v-if="!boxMarketing.linkImg" class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-bg)"/><text x="50%" y="50%" fill="var(--bs-secondary-color)" dy=".3em">500x500</text></svg>
          <img v-else :src="boxMarketing.linkImg" class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" alt="Загрузка...">
          </div>
        </div>
      </template>
        <hr class="featurette-divider">
    `
}