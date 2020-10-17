<template>
  <div class="header">
    <img :src="logopic" alt="" class="logo" />
    <div class="search-wrap">
      <div class="search">寻找商品</div>
    </div>
  </div>
</template>

<script>
import logopic from "../../assets/img/img/home/logo.jpg";
export default {
  data() {
    return {
      logopic,
    };
  },
};
</script>

<style scoped>
.header {
  overflow: hidden;
  display: flex;
  padding-top: 0.3rem;
  margin-bottom: 0.3rem;
}
.search-wrap{
    flex: 1;
}
.header .logo {
    margin-left: .2rem;
    width: 2rem;
    height: .5rem;
}
.header .search {
    width: 1.8rem;
    height: .5rem;
    background: #ccc;
    color: #666;
    text-align: center;
    line-height: .5rem;
    font-size: .14rem;
    margin: 0 auto;
    border-radius: .2rem;
}
</style>