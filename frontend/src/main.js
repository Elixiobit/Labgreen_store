import { createApp } from 'vue';
import * as bootstrap from 'bootstrap'
import App from './App.js';
import router from './router/index.js';

document.querySelectorAll('[data-bs-toggle="popover"]') // инициализация всплывающихокон
.forEach(popover => {
  new bootstrap.Popover(popover)
})

// import '../public/css/carousel.css';
const app = createApp(App);
app.use(router);
app.mount('#app');


