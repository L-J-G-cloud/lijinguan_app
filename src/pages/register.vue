<template>
  <div>
    <div class="header">
      <span class="back" @click="$router.go(-1)">返回</span>
      <span>注册</span>
    </div>
    <div class="input">
      <div class="line1">
        <div class="text">手机号：</div>
        <input type="text" class="ipt" v-model="phone" />
      </div>
      <div class="line1 line2">
        <div class="text">昵 称：</div>
        <input type="text" class="ipt" v-model="nickname" />
      </div>
      <div class="line1 line2">
        <div class="text">密 码：</div>
        <input type="text" class="ipt" v-model="password" />
      </div>
    </div>
    <div class="btn" @click="Login">注册</div>
    <v-tips v-if="isShow" :mesAge="mes"></v-tips>
  </div>
</template>

<script>
import { reqRegister } from "../utils/request";
export default {
  data() {
    return {
      phone: "",
      nickname: "",
      password: "",
      mes: "",
      isShow: false,
    };
  },
  methods: {
    Login() {
      if (this.phone == "" || this.nickname == "" || this.password == ""){
        this.$Toast({message:"用户名或密码不能为空", position: 'bottom',});
        return;
      }
       
      this.isShow = true;
      setTimeout(() => {
         this.isShow=false
      }, 2000);
      reqRegister(this.phone, this.nickname, this.password).then((res) => {
        this.mes = res.data.msg;
        if (res.data.code == 200) this.$router.push("/login");
      });
    },
  },
};
</script>

<style>
.back {
  position: absolute;
  left: 0.3rem;
}
.header {
  height: 0.8rem;
  background: #f90;
  text-align: center;
  line-height: 0.8rem;
  overflow: hidden;
  position: relative;
}
.header,
.header span {
  font-size: 0.38rem;
  color: #fff;
}

.input {
  width: 5.98rem;
  margin: 2.46rem auto 0;
}
.line1 {
  height: 0.78rem;
  border-bottom: 0.01rem solid #a3a3a3;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}
.text {
  width: 1.12rem;
  font-size: 0.28rem;
  color: #333;
}
.ipt {
  flex: 1;
  border: none;
  font-size: 0.28rem;
  margin-top: -0.4rem;
  background: #fafafa;
}
button,
input,
textarea {
  color: inherit;
  font: inherit;
}
.line2 {
  margin-top: 0.56rem;
}
.text {
  width: 1.12rem;
  font-size: 0.28rem;
  color: #333;
}
.btn {
  width: 5.98rem;
  height: 1rem;
  background: #f90;
  color: #fff;
  font-size: 0.34rem;
  text-align: center;
  line-height: 1rem;
  border-radius: 0.2rem;
  margin: 0 auto;
}
</style>