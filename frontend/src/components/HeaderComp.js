import { ref } from "vue";
import { RouterLink } from "vue-router";

export default {
  components: {
    RouterLink
  },
  setup(){
    const brand = ref({
      name:"Labgreen",
      linkImg: "./src/assets/brand/Brand_Labgreen_white.svg",
      link:"/"
    });
    const titleHeaderList = ref([
      {
        name: "Наша миссия",
        link: "/target"
      },
      {
        name: "Проекты",
        link: "#"
      },
      {
        name: "Контакты",
        link: "#"
      }
    ]);
    return {
      titleHeaderList,
      brand
    }    
    
  },
  template:/*html*/ `
      <header data-bs-theme="dark">
      <nav class="navbar navbar-expand-md navbar-dark fixed-top labgreen-color">
        <div class="container-fluid">
          <!-- <a class="navbar-brand" :href="brand.linkBrand">{{ brand.nameBrand }}</a> -->
          <router-link class="navbar-brand" :to="brand.link"><img :src="brand.linkImg"></router-link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse " id="navbarCollapse">
            <ul class="navbar-nav me-auto mb-2 mb-md-0">
              <li v-for="(titleHeader, key) in titleHeaderList" class="nav-item" :key="key">
              <router-link class="nav-link active" aria-current="page" :to="titleHeader.link">{{ titleHeader.name}}</router-link>
                <!-- <a class="nav-link active" aria-current="page" :href='titleHeader.link'>{{ titleHeader.name}}</a> -->
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
    `

};
// {/* <nav style="display: none;">
// <RouterLink to="/">Home</RouterLink>
// <RouterLink to="/target">About</RouterLink>
// </nav> */}