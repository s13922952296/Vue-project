<template>
    <!-- <div class="icons">
        <swiper :options="swiperOption">
            <swiper-slide
            v-for="(page,index) in pages"
            :key="index">
            <div> 
                <div
                v-for="item in page"
                :key="item.id"
                class="icon"
                >
                <div class="icon_img">
                    <img class="icon_img_content" :src="item.imgUrl" alt="" />
                </div>
                <p class="icon_desc" v-text="item.desc"></p>
            </div> 
          </div>
              
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div> -->
    <div class="icons">
    <swiper class="swiperImg" :options="swiperOption">
        <swiper-slide
        v-for="(page,index) in pages"
        :key="index"
        >
            <div
            v-for="item in page"
            :key="item.id"
            class="icon"
            >
            <div>
                <div class="icon_img">
                    <img class="icon_img_content" :src="item.imgUrl" alt="" />
                </div>
                <p class="icon_desc" v-text="item.desc"></p>
            </div>
                
            </div>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination">
      </div>
    </swiper>
  </div>
</template>
<script>
export default {
  name: "HomeIcons",
  data() {
    return {
      swiperOption: {
        pagination: ".swiper-pagination"
      },
      iconList: [
        {
          id: "0001",
          imgUrl: require("../../../assets/f3dd6c383aeb3b02.png"),
          desc: "景点门票"
        },
        {
          id: "0002",
          imgUrl: require("../../../assets/fdf170ee89594b02.png"),
          desc: "广州必游"
        },
        {
          id: "0003",
          imgUrl: require("../../../assets/eb88861d78fb9902.png"),
          desc: "动植物园"
        },
        {
          id: "0004",
          imgUrl: require("../../../assets/a40ee278d67000f2a29d2e20f6a029b3.png"),
          desc: "自然风光"
        },
        {
          id: "0005",
          imgUrl: require("../../../assets/86314b2af03b7502.png"),
          desc: "珠江夜游"
        },
        {
          id: "0006",
          imgUrl: require("../../../assets/bda58ffc3016edad84e656e8a94b0321.png"),
          desc: "长隆亲子月"
        },
        {
          id: "0007",
          imgUrl: require("../../../assets/13ceb38dcf262f02.png"),
          desc: "一日游"
        },
        {
          id: "0008",
          imgUrl: require("../../../assets/184e261814a5d07a5d3d08cd29cf590d.png"),
          desc: "长隆度假区"
        },
        {
          id: "0009",
          imgUrl: require("../../../assets/c032ae43b15a3dac34b5e07bb0e46850.png"),
          desc: "广州塔"
        },
        {
          id: "0010",
          imgUrl: require("../../../assets/c2b659e048b11602.png"),
          desc: "广州融创"
        }
      ]
    };
  },
  computed: {
    pages() {
      const pages = [];
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8);
        if (!pages[page]) {
          pages[page] = [];
        }
        pages[page].push(item);
      });
      return pages;
    }
  }
};
</script>
<style lang="scss" scoped>
.icons {
  margin-top: 0.5rem;
  overflow: hidden;
  height: 0;
  padding-bottom: 50%;
  margin-bottom: 0.5rem;
  .icon {
    position: relative;
    overflow: hidden;
    float: left;
    width: 25%;
    height: 0;
    padding-bottom: 25%;
    .icon_img {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 1.3rem;
      box-sizing: border-box;
      padding: 0.1rem;
      .icon_img_content {
        display: block;
        margin: 0 auto;
        height: 100%;
      }
    }
    .icon_desc {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      //   height: 0.44rem;
      text-align: center;
      font-size: 0.9rem;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
}
</style>

