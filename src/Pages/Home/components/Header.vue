<template>
    <header>
        <div class="header_left">
          <i class="iconfont icon_fanhui">&#xe600;</i>
        </div>
        <div class="header_input">
          <i class="iconfont icon_sousuo">&#xe601;</i>
          输入城市/景点/游玩主题
        </div>
        <div class="header_right">城市
          <i class="iconfont icon_city">&#xe607;</i>
        </div>
    </header>
</template>
<script>
export default {
  name: "HomeHeader"
};
</script>

<style scoped>
header {
  display: flex;
  width: 100%;
  height: 2.7rem;
  background: #00bcd4;
  color: #ffffff;
  text-align: center;
  line-height: 2.7rem;
}
.header_left {
  width: 2.5rem;
  float: left;
}
.header_input {
  flex: 1;
  height: 1.9rem;
  line-height: 1.9rem;
  background: #ffffff;
  margin-top: 0.4rem;
  border-radius: 0.2rem;
  color: #ccc;
  text-align: left;
  padding-left: 0.5rem;
  font-size: 0.9rem;
}
.icon_city {
  font-size: 0.5rem;
}
.icon_fanhui {
  font-size: 1.2rem;
}
.header_right {
  float: right;
  width: 4.1rem;
  text-align: center;
  font-size: 0.9rem;
}
</style>
