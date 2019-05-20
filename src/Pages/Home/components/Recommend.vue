<template>
    <div>
        <div class="recommend_title">
            热销推荐    
        </div>
        <ul>
            <li
            class="item border-bottom"
            v-for="item in RecommendList"
            :key="item.id"
            >
                <img class="item_img" :src="item.imgUrl" alt="">
                <div class="item_info">
                    <p class="item_title" v-text="item.title"></p>
                    <p class="item_desc" v-text="item.desc"></p>
                    <button class="item_button">查看详情</button>
                </div>
                
            </li>
        </ul>
    </div>
</template>
<script>
export default {
  name: "HomeRecommend",
  data() {
    return {
      RecommendList: [
        {
          id: "0001",
          imgUrl: require("../../../assets/411f234d79457081a3.img.jpg_200x200_ea02ef99.jpg"),
          title: "大连圣亚海洋世界",
          desc: "浪漫大连首站，浪漫的海洋主题乐园"
        },
        {
          id: "0002",
          imgUrl: require("../../../assets/411f234d79457081a3.img.jpg_200x200_ea02ef99.jpg"),
          title: "长隆野生动物世界",
          desc: "浪漫大连首站，浪漫的海洋主题乐园"
        },
        {
          id: "0003",
          imgUrl: require("../../../assets/411f234d79457081a3.img.jpg_200x200_ea02ef99.jpg"),
          title: "广州长隆旅游度假区",
          desc: "浪漫大连首站，浪漫的海洋主题乐园"
        },
        {
          id: "0004",
          imgUrl: require("../../../assets/411f234d79457081a3.img.jpg_200x200_ea02ef99.jpg"),
          title: "广州花城汇MAC环球梦幻世界",
          desc: "浪漫大连首站，浪漫的海洋主题乐园"
        },
        {
          id: "0005",
          imgUrl: require("../../../assets/411f234d79457081a3.img.jpg_200x200_ea02ef99.jpg"),
          title: "南沙百万葵园",
          desc: "浪漫大连首站，浪漫的海洋主题乐园"
        },
        {
          id: "0006",
          imgUrl: require("../../../assets/411f234d79457081a3.img.jpg_200x200_ea02ef99.jpg"),
          title: "锦绣香江温泉城",
          desc: "浪漫大连首站，浪漫的海洋主题乐园"
        },
        {
          id: "0007",
          imgUrl: require("../../../assets/411f234d79457081a3.img.jpg_200x200_ea02ef99.jpg"),
          title: "长隆水上乐园",
          desc: "浪漫大连首站，浪漫的海洋主题乐园"
        },
        {
          id: "0008",
          imgUrl: require("../../../assets/411f234d79457081a3.img.jpg_200x200_ea02ef99.jpg"),
          title: "美林湖温泉",
          desc: "浪漫大连首站，浪漫的海洋主题乐园"
        },
        {
          id: "0009",
          imgUrl: require("../../../assets/411f234d79457081a3.img.jpg_200x200_ea02ef99.jpg"),
          title: "广州番禺莲花山",
          desc: "浪漫大连首站，浪漫的海洋主题乐园"
        },
        {
          id: "00010",
          imgUrl: require("../../../assets/411f234d79457081a3.img.jpg_200x200_ea02ef99.jpg"),
          title: "长隆欢乐世界",
          desc: "浪漫大连首站，浪漫的海洋主题乐园"
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.recommend_title {
  line-height: 1.8rem;
  margin-top: 0.2rem;
  margin-left: 0.5rem;
  background: #eee;
  font-size: 0.8rem;
}
.item {
  overflow: hidden;
  display: flex;
  height: 4rem;
  .item_img {
    width: 4rem;
    height: 4rem;
    padding: 0.3rem;
  }
  .item_info {
    flex: 1;
    padding: 0.2rem;
    // min-width: 0;
    .item_title {
      line-height: 1.5rem;
      font-size: 0.8rem;
    }
    .item_desc {
      line-height: 0.6rem;
      color: #ccc;
      font-size: 0.4rem;
    }
    .item_button {
      //   line-height: 7rem;
      margin-top: 0.23rem;
      background: #ff9300;
      padding: 0 0.4rem;
      color: #fff;
      font-size: 0.5rem;
    }
  }
}
</style>

