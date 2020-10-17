<template>
    <div  class="header">
      <span class="back" @click="$router.go(-1)">返回</span>
      <span >{{title}}</span>
  </div>
</template>
<script>

export default {
    props:["title"],
    data(){
        return{
             id:0,
        } 
    },
    mounted(){
       
    }

};
</script>

<style scoped>
 .header span {
    font-size: .38rem;
    color: #fff;
}
.header {
    width: 100%;
    height: .8rem;
    background: #f90;
    text-align: center;
    line-height: .8rem;
    overflow: hidden;
    position: fixed;
    left: 0;
    top: 0;
}
.back {
    position: absolute;
    left: .3rem;
}
</style>