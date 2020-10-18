<template>
    <div class="min-box">
        <div class="eve" v-for="item in limtes" :key="item">
            <img src="../../assets/img/img/home/1.jpg" alt="">
            <p>{{item}}</p>
        </div> 
    </div>
</template>
<script> 
import { mapGetters, mapActions } from "vuex";

export default {
    data(){
        return{
            limtes:["限时抢购","积分商城","联系我们","商品分类"]
        }
    },
   computed:{
       ...mapGetters({
           limte:"limte/limte"
       })
   },
   methods:{
       ...mapActions({
           requestLimte:"limte/requestLimte"
       })
   },
   mounted(){
       this.requestLimte();
   }
}
</script>

<style scoped>
.min-box {
    display: flex;
}
.min-box .eve {
    flex: 1;
    text-align: center;
    color: #666;
}
.min-box .eve img {
    width: 90%;
}
</style>