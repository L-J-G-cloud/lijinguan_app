import {reqShopDetail} from "../../utils/request"

const state={
    shopDetail:{}
}

const mutations={
    getShopDetail(state,obj){
        state.shopDetail= obj; 
    }
}
const actions={
    requestShopDetail(context,id){
        if(context.state.shopDetail.length>0){
            return
        }
        reqShopDetail(id).then(res=>{
            context.commit("getShopDetail",res.data.list[0])
        })
    }
}

const getters={
    shopDetail(state){
        return state.shopDetail
    }
}

export default {
    state,
    mutations,
    actions,
    getters,
    namespaced: true
}