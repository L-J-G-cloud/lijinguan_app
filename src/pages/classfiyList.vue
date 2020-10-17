<template>
  <div>
    <top-back :title="$route.query.name"></top-back>
    <div class="list">
        <!-- {{classfiyGoods}} -->
      <router-link class="item" :to="'/detail?id='+item.id" v-for="item in classfiyGoods" :key="item.id"
      >
        <img :src="'http://localhost:3000'+item.img" alt="" class="item-img" />
        <div class="item-con">
          <div class="goodsname">{{item.goodsname}}</div>
          <div class="price">￥{{item.price | filterPrice}}</div>
          <div class="btn">立即抢购</div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      classfiyGoods: "classfiyGoods/classfiyGoods",
    }),
  },
  methods: {
    ...mapActions({
      requestList: "classfiyGoods/requestList",
    }),
  },
  mounted() {
    var fid = this.$route.query.id;
    // var name = this.$route.quer.name;
    this.requestList(fid);
  },
};
</script>

<style scoped>
.list {
     margin-top: .8rem;
}
 .item {
    display: flex;
    padding: .2rem;
   
}
.list .item-img {
    width: 2rem;
    height: 2rem;
    border-radius: .2rem;
    margin-right: .4rem;
}
.item-con .goodsname {
    font-size: .38rem;
    color: #333;
    line-height: .6rem;
    margin-bottom: .2rem;
}
.price {
    color: #e23838;
    font-size: .4rem;
}
.btn {
    padding: .2rem .4rem;
    background: #f90;
    color: #fff;
    display: inline-block;
    border-radius: .2rem;
}
</style>