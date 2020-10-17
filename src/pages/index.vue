<template>
  <div>
    <!-- 二级路由出口 -->
    <!-- <transition enter-active-class="animate__animated animate__bounceInLeft">
     
    </transition> -->
     <router-view></router-view>
    <!-- 底部导航 -->
    <!-- 数据提取，模板、样式都提取 -->
    <tab-bar :tabNav="tabNav"></tab-bar>
  </div>
</template>
  
<script>
import home_hig from "../assets/img/tab_home_hig.png";
import home_nor from "../assets/img/tab_home_nor.png";
import me_hig from "../assets/img/tab_me_hig.png";
import me_nor from "../assets/img/tab_me_nor.png";
import menu_hig from "../assets/img/tab_menu_hig.png";
import menu_nor from "../assets/img/tab_menu_nor.png";
import shopping_hig from "../assets/img/tab_shopping_hig.png";
import shopping_nor from "../assets/img/tab_shopping_nor.png";
export default {
  data() {
    return {
      home_hig,
      home_nor,
      me_hig,
      me_nor,
      menu_hig,
      menu_nor,
      shopping_hig,
      shopping_nor,

        tabNav:[
        {
          path:"/index/home",
          text:"首页",
          selectImg:home_hig,
          noSelect:home_nor
        },
        {
          path:"/index/classfiy",
          text:"分类",
          selectImg:menu_hig,
          noSelect:menu_nor
        },
        {
          path:"/index/card",
          text:"购物车",
          selectImg:shopping_hig,
          noSelect:shopping_nor
        },
        {
          path:"/index/mine",
          text:"我的",
          selectImg:me_hig,
          noSelect:me_nor
        },
      ]
    };
  },

};
</script>
    
<style scoped>

</style>