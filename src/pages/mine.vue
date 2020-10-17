<template>
    <div class="main">
        <div class="header">
            <h3>
                用户昵称:{{name}}
                <button @click="logOut">退出</button>
            </h3>
        </div>
    </div>
</template>

<script>
import {mapActions} from "vuex"
export default {
    data(){
        return{
            name:JSON.parse(sessionStorage.getItem('user')).nickname,
        }
    },
    methods:{
        ...mapActions({changeUserInfoAction:"changeUserInfoAction"}),
        logOut(){
           this.changeUserInfoAction({});
           this.$router.push('/login');
        }
    }
}
</script>

<style scoped>
    .main {
        width: 100vw;
        height: 100vh;
        background-color:#DCDFE6
    }
    .header {
      height: 1.5rem;
      line-height: 1.5rem;
      background-color:  #F2F6FC;
      color: #303133;
    } 
    .header h3 {
        text-align: right;
        padding: 0 0.5rem;
    }
    button{
        border: none;
        background-color: #F56C6C;
        width: 1rem;
        height: .6rem;
        border-radius: 0.08rem;
        color: #fff;
    }
</style>