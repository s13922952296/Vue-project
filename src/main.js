import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import VueAwesomeSwiper from 'vue-awesome-swiper'
import './assets/styles/base.css'
import './assets/styles/iconfont.css'
// import 'swiper/dist/css/swiper.css'
// Vue.use(VueAwesomeSwiper, /* { default global options } */)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
