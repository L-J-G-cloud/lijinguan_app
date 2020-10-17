import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)

//引入模块
import lunbo from "./modules/lunbo"
import limte from "./modules/limte"
import shopList from "./modules/shopList"
import shopDetail from "./modules/shopDetail"
import classfiyList from "./modules/classfiyList"
import classfiyGoods from "./modules/classfiyGoods"
import addCard from "./modules/addCard"
import cardList from "./modules/cardList"

import actions from "./actions"
import {state,getters,mutations} from "./mutations"

export default new Vuex.Store({
    //state 状态
    state,
    //修改state
    mutations,
    //组件派发的动作
    actions,
    //导出数据
    getters,
    //模块
    modules:{
        lunbo,
        limte,
        shopList,
        shopDetail,
        classfiyList,
        classfiyGoods,
        addCard,
        cardList
    }
})