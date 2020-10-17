<template>
  <div>
    <!-- <swiper :options="swiperOption">
      <swiper-slide
        class="swiper-slide"
        v-for="banner in lunbo"
        :key="banner.id"
      >
        <img :src="'http://localhost:3000' + banner.img" />
      </swiper-slide>
     
      <div class="swiper-pagination" slot="pagination"></div>
    
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper> -->
    <mt-swipe :auto="3000" class="swiper-container">
      <mt-swipe-item 
      v-for="banner in lunbo"
        :key="banner.id"
      >
      <img :src="'http://localhost:3000' + banner.img" />
      </mt-swipe-item>
     
    </mt-swipe>
    <!-- <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide>Slide 1</swiper-slide>
      <swiper-slide>Slide 2</swiper-slide>
      <swiper-slide>Slide 3</swiper-slide>
      <swiper-slide>Slide 4</swiper-slide>
      <swiper-slide>Slide 5</swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper> -->
  </div>
</template>

<script>
import Vue from "vue"
import { mapGetters, mapActions } from "vuex";
import { Swiper, SwiperSlide} from "vue-awesome-swiper";
import 'swiper/swiper-bundle.css'
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiperOption: {
        pagination: {
         el: '.swiper-pagination'
        },
      },
    };
  },
  computed: {
    ...mapGetters({
      lunbo: "lunbo/lunbo",
    }),
    swiper() {
      // return this.$refs.mySwiper.$swiper;
    },
  },
  methods: {
    ...mapActions({
      requestLunbo: "lunbo/requestLunbo",
    }),
  },
  mounted() {
    this.requestLunbo();
    // console.log('Current Swiper instance object', this.swiper)
    // this.swiper.slideTo(3, 1000, false)
  },
};
</script>

<style scoped>
.swiper-container {
  width: 100vw;
  height: 200px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  overflow: hidden;
  list-style: none;
  padding: 0;
  z-index: 1;
  border-bottom: 0.01rem solid #ccc;
}
img {
  width: 100%;
  height: 100%;
}
</style>