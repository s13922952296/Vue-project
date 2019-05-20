<template>
  <div class="wrapper">
    <swiper class="swiperImg" :options="swiperOption">
      <swiper-slide
      v-for="item in swiperList"
      :key="item.id"
      >
        <img :src="item.imgUrl" alt="" />
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination">
      </div>
    </swiper>
  </div>
</template>
<script>
import Vue from "vue";
import VueAwesomeSwiper from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
// import "node-sass";
Vue.use(VueAwesomeSwiper /* { default global options } */);
export default {
  name: "HomeSwiper",
  data() {
    return {
      swiperOption: {
        pagination: ".swiper-pagination",
        loop: true
      },
      swiperList: [
        {
          id: "0001",
          imgUrl: require("../../../assets/banner01.jpg")
        },
        {
          id: "0002",
          imgUrl: require("../../../assets/banner02.jpg")
        },
        {
          id: "0003",
          imgUrl: require("../../../assets/banner03.jpg")
        },
        {
          id: "0004",
          imgUrl: require("../../../assets/banner04.jpg")
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.swiper-pagination-bullet-active {
  background: #ffffff !important;
}
.wrapper {
  touch-action: none;
  .swiperImg {
    height: 31.25vw;
  }
  img {
    width: 100%;
    height: 100%;
  }
}
</style>

