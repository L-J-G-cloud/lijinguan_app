<template>
  <div>
    <hea-der></hea-der>
    <lun-bo></lun-bo>
    <v-limte></v-limte>
    <shop-list></shop-list>
  </div>
</template>
<script>
import heaDer from "../components/home/heaDer";
import lunBo from "../components/home/lunBo";
import vLimte from "../components/home/vLimte";
import shopList from "../components/home/shopList";
import { mapGetters, mapActions } from "vuex";
export default {
  components: {
    heaDer,
    lunBo,
    vLimte,
    shopList,
  },
  data() {
    return {
      // flag1: false,
    };
  },
  mounted() {
    if (window.performance.navigation.type == 1) {
      // console.log("页面被刷新！");
    } else {
      // console.log("首次被加载")
      this.flag1 = true;
      setTimeout(() => {
        // this.flag1 = false;
      }, 2000);
    }
  },
};
</script>

<style>
</style>