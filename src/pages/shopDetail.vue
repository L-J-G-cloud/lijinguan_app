<template>
  <div>
    <top-back :title="title"></top-back>
    <img
      :src="'http://localhost:3000' + shopDetail.img"
      alt=""
      class="bigimg"
    />
    <div class="info">
      <div class="line1">
        <div class="name">{{ shopDetail.goodsname }}</div>
        <div class="line1-right">
          <div class="iconfont icon-gouwuchezhengpin"></div>
          <div class="collect">收藏</div>
        </div>
      </div>
      <div class="line2">
        <div class="left">
          <div class="new-price" v-if="shopDetail.price">
            ￥{{ shopDetail.price | filterPrice }}
          </div>
          <div class="old-price" v-if="shopDetail.market_price">
            ￥{{ shopDetail.market_price | filterPrice }}
          </div>
        </div>
        <div class="right">
          <div class="right-line2">
            <div v-if="shopDetail.ishot == 1" class="btn2">热卖</div>
            <div v-if="shopDetail.isnew == 1" class="btn2">新品</div>
          </div>
        </div>
      </div>
    </div>
    <div v-html="shopDetail.description"></div>
    <div class="footer">
      <div class="btn" @click="flag = true">加入购物车</div>
    </div>
    <v-card :imgs = shopDetail.img v-if="flag" @change="change"></v-card>
    <v-tips :mesAge="'加入成功'" v-if="flag1"></v-tips>
  </div>
</template>

<script>
import vCard from "../components/vCard";
import { mapGetters, mapActions } from "vuex";
import shopListVue from "../components/home/shopList.vue";
export default {
  components: {
    vCard,
  },
  data() {
    return {
      title: "商品详情",
      flag: false,
      flag1: false,
    };
  },
  computed: {
    ...mapGetters({
      shopDetail: "shopDetail/shopDetail",
      msg: "addCard/Mes",
    }),
  },
  methods: {
    ...mapActions({
      requestShopDetail: "shopDetail/requestShopDetail",
    }),
    change(num) {
      // console.log(num);
      this.flag = this.false;
      if(num) {
        this.flag1 = true;
        setTimeout(() => {
          this.flag1 = false;
        }, 2000);
      }
      // this.flag1=true;
      // setTimeout(() => {
      //    this.flag1=false
      // }, 2000);
    },
  },
  mounted() {
    var id = this.$route.query.id;
    this.requestShopDetail(id);
  },
};
</script>

<style scoped>
.bigimg {
  width: 100%;
  height: 4rem;
  margin-top: 0.8rem;
}
.info {
  border-top: 2px solid #eee;
  background: #fff;
  margin-bottom: 0.3rem;
}
.line1 {
  width: 6.5rem;
  display: flex;
  margin: 0.1rem auto 0;
}
.name {
  width: 5.5rem;
  padding-right: 0.3rem;
  border-right: 0.01rem solid #eee;
  height: 0.8rem;
  line-height: 0.8rem;
  overflow: hidden;
  font-size: 0.4rem;
  color: #333;
}
.line1-right {
  flex: 1;
}
.line2 {
  width: 6.8rem;
  display: flex;
  margin: 0.1rem auto 0;
  padding-bottom: 0.4rem;
}
.left {
  width: 1.5rem;
}
.new-price {
  font-size: 0.3rem;
  color: red;
  margin: 0.1rem;
}
.old-price {
  font-size: 0.26rem;
  color: #666;
  text-decoration: line-through;
}
.right {
  flex: 1;
}
.right-line2 {
  overflow: hidden;
}
.btn2 {
  font-size: 0.2rem;
  color: #fa0;
  border: 0.01rem solid #fa0;
  padding: 0.05rem 0.1rem;
  margin-right: 0.1rem;
  float: left;
}
.footer {
  width: 100%;
  height: 1rem;
  position: fixed;
  left: 0;
  bottom: 0;
  border-top: 0.02rem solid #ccc;
  background: #fff;
}
.btn {
  width: 2rem;
  height: 1rem;
  position: absolute;
  right: 0;
  top: 0;
  background: #fa0;
  color: #fff;
  text-align: center;
  line-height: 1rem;
  font-size: 0.3rem;
}
</style>