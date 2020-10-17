// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'


//1.reset.css
import "./assets/css/reset.css"
//2.remjs 
import "./assets/js/rem"
//3.注册全局的返回组件
import "./common"
//4.引入animate.css 
import "animate.css"
//5.引入仓库
import store from "./store"
//6.引入swiper
// import VueAwesomeSwiper from 'vue-awesome-swiper'
// import 'swiper/swiper-bundle.min.css'
// Vue.use(VueAwesomeSwiper)
//7.引入jquery
import $ from "jquery"
Vue.prototype.$=$
//8.引入MintUi
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)
//9引入懒加载
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload)
//10.注册全局的过滤器
import "./filters"

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  //仓库
  store
})
