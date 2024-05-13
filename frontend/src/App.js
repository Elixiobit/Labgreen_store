import { RouterLink } from "vue-router";
import HeaderComp from "./components/HeaderComp.js";
import FooterComp from "./components/FooterComp.js";


export default {
  components: {
    HeaderComp,
    FooterComp
  },
  template:/*html*/ `
    <header-comp/>
    <main>
      <router-view/>
      <footer-comp/>
    </main>
  `
};

