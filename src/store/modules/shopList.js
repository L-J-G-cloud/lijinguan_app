import {reqShopList} from "../../utils/request"

const state={
    shopList:[]
}

const mutations={
    getShopList(state,arr){
        state.shopList=arr
    }
}

const actions={
    requestShopList(context){
        if(context.state.shopList.length>0){
            return
        }
        reqShopList().then(res=>{
            context.commit("getShopList",res.data.list[0].content)
        })
    }
}

const getters={
    shopList(state){
        return state.shopList
    }
}

export default {
    state,
    mutations,
    actions,
    getters,
    namespaced: true
}