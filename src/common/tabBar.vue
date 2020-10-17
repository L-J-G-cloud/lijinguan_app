<template>
   <footer>
       <router-link
       v-for="item in tabNav"
       :key="item.path"
       :to="item.path"
       active-class="select"
       >
        <img :src="$route.path == item.path ? item.selectImg : item.noSelect"
         alt=""
         />
         <p>{{item.text}}</p>
       </router-link>
   </footer>
</template>

<script>
/*
tabNav:[
    {
        path:"/index/home",
        text:"首页",
        selectImg:home_hig,
        noSelect:home_nor
    },
    
    ]
*/
export default {
     props:["tabNav"]
}
</script>

<style>
footer {
  width: 100%;
  height: 1rem;
  position: fixed;
  left: 0;
  bottom: 0;
  display: flex;
  padding-top: 0.2rem;
  background-color: #fff;
}
footer a {
  flex: 1;
  text-align: center;
}
footer img {
  width: 0.4rem;
  height: 0.4rem;
}
footer p {
  text-align: center;
}
.select p {
  color: #ff4400;
}
</style>