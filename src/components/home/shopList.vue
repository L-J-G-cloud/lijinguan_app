<template>
  <div class="list" >
    <router-link :to="'/detail?id='+item.id" v-for="item in shopList" :key="item.id" class="item">
      <img v-lazy="'http://localhost:3000'+item.img" alt="" class="item-img"> 
      <div class="item-con">
        <div class="goodsname">{{item.goodsname}}</div>
        <div class="price">￥{{item.price | filterPrice}}</div>
        <div class="btn">立即抢购</div>
      </div>
    </router-link>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters({
      shopList: "shopList/shopList",
    }),
  },
  methods: {
    ...mapActions({
      requestShopList: "shopList/requestShopList",
    }),
  },
  mounted() {
    this.requestShopList();
  },
};
</script>

<style scoped>
.list {
  margin-bottom: 1.2rem;
}
.item {
  display: flex;
  padding: 0.2rem;
}
a {
  text-decoration: none;
}
.list .item-img {
  width: 2rem;
  height: 2rem;
  border-radius: 0.2rem;
}
.list .item-con {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  margin-left: 0.3rem;
}
.item-con .goodsname {
  font-size: 0.38rem;
  color: #333;
  line-height: 0.6rem;
  margin-bottom: 0.2rem;
}
.price {
  color: #e23838;
  font-size: 0.4rem;
}
.btn {
  padding: 0.2rem 0.4rem;
  background: #f90;
  color: #fff;
  display: inline-block;
  border-radius: 0.2rem;
}
</style>