import HeaderComp from "./components/HeaderComp.js";
import FooterComp from "./components/FooterComp.js";


export default {
  components: {
    HeaderComp,
    FooterComp
  },
  template:/*html*/ `
    <header-comp></header-comp>
    <main>
      <router-view></router-view>
      <footer-comp></footer-comp>
    </main>
  `
};

