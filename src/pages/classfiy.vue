<template>
  <div>
    <top-head :title="title"></top-head>
    <div class="main">
      <div class="left">
        <div
          class="nav"
          :class="n == index ? 'nav-select' : ''"
          @click="n = index"
          v-for="(item, index) in classfiyList"
          :key="index"
        >
          {{ item.catename }}
        </div>
      </div>
      <div class="right" v-if="classfiyList.length>0">
        <div
          class="every"
          v-for="item in classfiyList[n].children"
          :key="item.id"
          @click="goDetail(item.id,item.catename)"
        >
          <img :src="'http://localhost:3000'+item.img" alt="" />
          <div class="text">{{item.catename }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      title: "分类",
      n: 0,
    };
  },
  computed: {
    ...mapGetters({
      classfiyList: "classfiyList/classfiyList",
    }),
  },
  methods: {
    ...mapActions({
      requestList: "classfiyList/requestList",
    }),
    goDetail(id,name){
        this.$router.push("/list?id="+id+"&name="+name)
    }
  },
  mounted() {
    this.requestList();
  },
};
</script>

<style scoped>
.main {
  display: flex;
}
.left {
  width: 2.34rem;
  background: #fafafa;
}
.nav {
  font-size: 0.28rem;
  height: 0.93rem;
  text-align: center;
  line-height: 0.93rem;
  border-left: 0.1rem solid #fafafa;
}
.nav-select {
  border-left: 0.1rem solid #1d84a7;
  background: #fff;
  color: #f90;
}
.right {
  flex: 1;
  overflow: hidden;
}
.every {
  float: left;
  border: 0.02rem solid #1d84a7;
  border-radius: 0.2rem;
  margin-left: 0.1rem;
  margin-top: 0.24rem;
  position: relative;
  overflow: hidden;
}
.every,
img {
  width: 2.2rem;
  height: 2.3rem;
}
.text {
  height: 0.48rem;
  width: 2.2rem;
  position: absolute;
  left: 0;
  bottom: 0;
  background: #1d84a7;
  color: #fff;
  text-align: center;
  line-height: 0.48rem;
  font-size: 0.23rem;
}
</style>