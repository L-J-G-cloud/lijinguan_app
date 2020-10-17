import {reqclassfiyGoods} from "../../utils/request"

const state = {
    classfiyGoods:[],
}
const mutations={
    getList(state,arr){
        state.classfiyGoods=arr;
       
    }
}

const actions = {
    requestList(context,fid){
        reqclassfiyGoods(fid).then(res=>{
            context.commit("getList",res.data.list)
        })
    }
}

const getters = {
    classfiyGoods(state){
        return state.classfiyGoods
    }
}

export default {
    state,
    mutations,
    actions,
    getters,
    namespaced: true
}