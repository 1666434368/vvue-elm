/* eslint-disable import/no-duplicates */
// eslint-disable-next-line import/no-duplicates
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// eslint-disable-next-line no-unused-vars
import $ from 'jquery'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import './config/rem'
import './style/reset.css'
import VueTouch from 'vue-touch'
import 'babel-polyfill'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import VueJsonp from 'vue-jsonp'

import stickyBox from './components/sticky/sticky-box.vue'

Vue.component('sticky-box', stickyBox)

Vue.use(VueJsonp)

Vue.use(ElementUI)
Vue.use(VueTouch, {name: 'v-touch'})
Vue.use(VueAwesomeSwiper /* { default global options } */)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

router.afterEach((to, from, next) => {
  window.scrollTo(0, 0)
})
