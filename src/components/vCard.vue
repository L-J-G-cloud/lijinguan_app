<template>
  <div class="mask" @click.self="toUp">
    <div class="picker">
      <div class="info">
        <img :src="'http://localhost:3000'+imgs" alt="" />
        <span>{{ shopDetail.goodsname }}</span>
      </div>
      <div class="sku">
        <h3>{{ shopDetail.specsname }}</h3>
        <div class="attr">
          <span
            v-for="(item, index) in JSON.parse(shopDetail.specsattr)"
            :key="index"
            :class="index == n ? 'select' : ''"
            @click="n = index"
          >
            {{ item }}
          </span>
        </div>
      </div>
      <div class="btn" @click="addCard">加入购物车</div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex"
export default {
  props:['imgs'],
  computed: {
    ...mapGetters({
      shopDetail: "shopDetail/shopDetail",
      msg: "addCard/Msg",
    }),
  },
  data() {
    return {
      n: 0,
      user: {
        uid: JSON.parse(sessionStorage.getItem("user")).uid,
        goodsid: this.$route.query.id,
        num: 1,
      },
    };
  },
  methods: {
    ...mapActions({
      requestAddCard: "addCard/requestAddCard",
    }),
    addCard() { 
      this.$emit("change",1);
      this.requestAddCard(this.user);
    },
    toUp(){
      this.$emit("change",0);
    }
  },
};
</script>

<style scoped>
.mask {
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  left: 0;
  top: 0;
}
.picker {
  width: 100%;
  padding: 0.3rem;
  background: #fff;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  position: absolute;
  left: 0;
  bottom: 0;
}
.picker .info {
  overflow: hidden;
}
.picker .info img {
  width: 2rem;
  height: 2rem;
  float: left;
  border-radius: 0.2rem;
  margin-right: 0.3rem;
}
.picker .info span {
  float: left;
  line-height: 0.8rem;
  font-size: 0.4rem;
}
.sku h3 {
  font-size: 0.38rem;
  line-height: 0.6rem;
  color: #333;
  margin-top: 0.3rem;
}
.attr {
  overflow: hidden;
}
.attr .select {
  color: #f90;
  border-color: #f90;
}
.attr span {
  float: left;
  padding: 0.2rem 0.3rem;
  border: 0.02rem solid #666;
  border-radius: 0.1rem;
  margin: 0.2rem;
  font-size: 0.3rem;
}
.picker .btn {
  position: static;
  display: block;
  margin: 0 auto;
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