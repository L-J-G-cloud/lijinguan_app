<template>
  <div>
    <div class="header">
      <span>登录</span>
      <router-link to="/register">注册</router-link>
    </div>
    <div class="input">
      <div class="line1">
        <div class="text">账 号：</div>
        <input type="text" class="ipt" v-model="user.name"/>
      </div>
      <div class="line1 line2">
        <div class="text">密 码：</div>
        <input type="text" class="ipt" v-model="user.pass" />
      </div>
      <div class="forget">忘记密码</div>
    </div>
    <div  class="btn" @click="login">登录</div>
  </div>
  
</template>

<script>
import  {reqLogin} from "../utils/request"
import {mapGetters,mapActions} from "vuex"
export default {
        data(){
            return{
                user:{
                    name:"",
                    pass:""
                }
            }
        },
        computed:{
          ...mapGetters({})
        },
        methods:{
          ...mapActions({changeUserInfoAction:"changeUserInfoAction"}),
            login(){
                if(this.user.name==""||this.user.pass=="")
                return;
                reqLogin(this.user.name,this.user.pass).then(res=>{
                    if(res.data.code==200){
                        this.changeUserInfoAction(res.data.list);

                        // sessionStorage.setItem('token',res.data.list.token);
                        // localStorage.setItem('uid',res.data.list.uid);
                        this.$router.push("/index/home");
                    }else{
                        console.log(res.data.msg);
                    }
                })
            }
        },
};
</script>

<style scoped>
.header {
  position: relative;

  height: 0.8rem;
  line-height: 0.8rem;
  text-align: center;
  background: #f90;
}
.header span {
  color: #fff;
  font-size: 0.4rem;
}
.header a {
  color: #fff;
  position: absolute;
  right: 0.3rem;
  font-size: 0.4rem;
}
.btn {
    width: 5.98rem;
    height: 1rem;
    background: #f90;
    color: #fff;
    font-size: .34rem;
    text-align: center;
    line-height: 1rem;
    border-radius: .2rem;
    margin: 0 auto;
}
.input {
    width: 5.98rem;
    margin: 2.46rem auto 0;
}
.line1 {
    height: .78rem;
    border-bottom: .01rem solid #a3a3a3;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
}
.text {
    width: 1.02rem;
    font-size: .28rem;
    color: #333;
}
.ipt {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    border: none;
    font-size: .28rem;
    margin-top: -.4rem;
    background: #fafafa;
}
.line2 {
    margin-top: .56rem;
}
.line1 {
    height: .78rem;
    border-bottom: .01rem solid #a3a3a3;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
}
.forget {
    font-size: .24rem;
    color: #666;
    text-align: right;
    margin-top: .44rem;
    margin-bottom: .3rem;
}
</style>