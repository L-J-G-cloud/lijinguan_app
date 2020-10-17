import Vue from "vue"
import vTips from "./tips"
import tabBar from "./tabBar"
import topHead from "./topHead"
import topBack from "./topBack"
let obj = {
   vTips,
   tabBar,
   topHead,
   topBack
}

for(let i in obj){
    Vue.component(i,obj[i])
}