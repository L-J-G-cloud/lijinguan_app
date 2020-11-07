<template>
  <div>
    <top-head :title="title"></top-head>
    <div class="con">
      <div class="every">
        <div class="title">
          <img src="../assets/img/store.png" alt="" class="title-img" />
          <div class="title-txt">杭州保税区仓</div>
        </div>
        <div class="every-con" v-for="(item, index) in cardList" :key="item.id">
          <div class="inner">
            <div class="left">
              <img
                @click="alone(index)"
                :src="item.checked ? radio_hig : radio_nor"
                alt=""
                class="left-img"
              />
            </div>
            <div class="center">
              <img
                :src="'http://localhost:3000' + item.img"
                alt=""
                class="center-img"
              />
            </div>
            <div class="right">
              <div class="r-left">
                <div class="name">{{ item.goodsname }}</div>
                <div class="btns">
                  <div class="btn" @click="sub(item.id, index)">-</div>
                  <div class="btn">{{ item.num }}</div>
                  <div class="btn" @click="add(item.id, index)">+</div>
                </div>
                <div style="margin-top: 0.1rem">
                  总价：{{ (item.price * item.num) | filterPrice }}
                </div>
              </div>
            </div>
            <div class="price">
              <div>￥{{ item.price }}</div>
            </div>
            <div class="delete-btn" @click="del(item.id)">删除</div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="quanxuan" @click="checkedAll">
        <img :src="flag ? radio_hig : radio_nor" alt="" class="quanxuan-img" />
        <div class="quanxuan-txt">全选</div>
      </div>
      <div class="edit" @click="edit">
        <img :src="flag1 ? radio_hig : editor_nor" alt="" class="edit-img" />
        <div class="edit-txt">编辑</div>
      </div>
      <div class="all">
        <div class="all-price">合计:{{ allPrice | filterPrice }}</div>
        <div class="all-price tip">(不含运费)</div>
      </div>
      <div class="pay-btn">去结算</div>
    </div>
    <v-tips :mesAge="Mes" v-if="flag2"></v-tips>
  </div>
</template>

<script>
import radio_nor from "../assets/img/radio_nor.png";
import radio_hig from "../assets/img/radio_hig.png";
import editor_nor from "../assets/img/editor_nor.png";
import { mapGetters, mapActions } from "vuex";

import { reqCartedit } from "../utils/request";
import { reqDel } from "../utils/request";
import { MessageBox } from "mint-ui";
export default {
  data() {
    return {
      title: "购物车",
      flag: false,
      flag1: false,
      flag2: false,
      radio_nor,
      radio_hig,
      editor_nor,
      Mes: "",
      flag3 : true,
    };
   
  },
  computed: {
    ...mapGetters({
      cardList: "cardList/cardList",
    }),

    allPrice() {
      let sum = 0;
      if (this.cardList) {
        this.cardList.forEach((item) => {
          if (item.checked) {
            sum += item.price * item.num;
          }
        });
      }
      return sum;
      //    return this.goods.reduce((val, item) => item.checked ? val += item.price * item.num : val, 0)
    },
  },
  methods: {
    ...mapActions({
      requestCardList: "cardList/requestCardList",
    }),
    sub(id, index) {
      console.log(this.flag3);
      if (this.cardList[index].num == 1) {
        this.$toast('亲,您的宝贝不能再少了');
        return;
      }
      if (this.flag3) {
        this.flag3 = false;
        var type = 1;
        this.cardList[index].num--;
        reqCartedit(id, type).then((res) => {
          this.flag3 = true;
          console.log(res.data.msg);
        });
      }
    },
    add(id, index) {
      this.cardList[index].num++;
      var type = 2;
      reqCartedit(id, type).then((res) => {
        console.log(res.data.msg);
      });
    },
    checkedAll() {
      this.flag = !this.flag;
      this.cardList.forEach((item) => {
        item.checked = this.flag;
      });
    },
    alone(index) {
      this.cardList[index].checked = !this.cardList[index].checked;
      this.flag = this.cardList.every((item) => item.checked);
    },
    edit() {
      this.flag1 = !this.flag1;
      if (this.flag1) {
        this.$(".every-con").css("margin-left", "-1.48rem");
      } else {
        this.$(".every-con").css("margin-left", "0");
      }
    },
    del(id) {
      MessageBox.confirm("确定执行此操作?").then(
        (action) => {
          reqDel(id).then((res) => {
            this.requestCardList();
            this.flag=false;
            this.Mes = res.data.msg;
          });
        },
        (action) => {
          this.Mes = "已经取消";
        }
      );
      this.flag2 = true;
      setTimeout(() => {
        this.flag2 = false;
      }, 2000);
    },
  },
  mounted() {
    this.requestCardList();
  },
};
</script>

<style scoped>
.footer {
  width: 100%;
  height: 1.12rem;
  position: fixed;
  left: 0;
  bottom: 1.14rem;
  border-top: 0.02rem solid #ccc;
  overflow: hidden;
  background: #fff;
}
.quanxuan {
  float: left;
  width: 0.58rem;
  margin-left: 0.38rem;
  margin-top: 0.18rem;
  margin-right: 0.68rem;
}
.edit {
  float: left;
  width: 0.58rem;
  margin-top: 0.18rem;
}
.all {
  float: left;
  margin-left: 0.15rem;
  margin-top: 0.29rem;
}
.pay-btn {
  width: 2.32rem;
  float: right;
  height: 1.12rem;
  background: #fa0;
  color: #fff;
  text-align: center;
  line-height: 1.12rem;
  font-size: 0.38rem;
}
.edit-img,
.quanxuan-img {
  width: 0.42rem;
  height: 0.42rem;
  margin-bottom: 0.1rem;
  margin-left: 0.08rem;
  float: left;
}
.edit-txt,
.quanxuan-txt {
  float: left;
  font-size: 0.28rem;
  color: #666;
  width: 100%;
  text-align: center;
}
.all-price {
  font-size: 0.24rem;
  color: #666;
}
.tip {
  color: #999;
  margin-left: 0.08rem;
}
.con {
  margin-bottom: 2.24rem;
}
.title {
  overflow: hidden;
  height: 1.06rem;
}
.title-img {
  float: left;
  width: 0.36rem;
  height: 0.36rem;
  margin-left: 0.36rem;
  margin-top: 0.35rem;
  margin-right: 0.27rem;
}
.title-txt {
  float: left;
  font-size: 0.28rem;
  color: #a8a8a8;
  line-height: 1.06rem;
}
.every-con {
  overflow: hidden;
}
.inner {
  width: 8.7rem;
  height: 2.4rem;
  overflow: hidden;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
}
.inner2 {
  margin-left: "-1.48rem";
}
.left {
  float: left;
}
.left-img {
  width: 0.42rem;
  height: 0.42rem;
  margin-left: 0.38rem;
  margin-top: 0.86rem;
  margin-right: 0.21rem;
}
.center {
  float: left;
}
.center-img {
  width: 1.57rem;
  height: 1.57rem;
  margin-top: 0.3rem;
  margin-right: 0.21rem;
}
.right {
  float: left;
}
.r-left {
  float: left;
  width: 2.8rem;
  margin-top: 0.1rem;
  margin-right: 0.13rem;
}
.name {
  font-size: 0.32rem;
  overflow: hidden;
  color: #333;
  margin-bottom: 0.33rem;
}
.btns {
  overflow: hidden;
}
.btn {
  width: 0.78rem;
  height: 0.47rem;
  float: left;
  font-size: 0.24rem;
  color: #666;
  border: 0.01rem solid #ccc;
  text-align: center;
  line-height: 0.47rem;
}
.price {
  float: left;
  font-size: 0.3rem;
  color: #333;
  line-height: 1.2rem;
}
.delete-btn {
  float: right;
  height: 2.4rem;
  width: 0.98rem;
  text-align: center;
  line-height: 2.4rem;
  color: #fff;
  background: #fa0;
}
</style>