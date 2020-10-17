import {reqClassfiyList} from "../../utils/request"

const state = {
    classfiyList:[],
}
const mutations={
    getList(state,arr){
        state.classfiyList=arr;
       
    }
}

const actions = {
    requestList(context){
        if(context.state.classfiyList.length>0){
            return;
        }
        reqClassfiyList().then(res=>{
            context.commit("getList",res.data.list)
        })
    }
}

const getters = {
    classfiyList(state){
        return state.classfiyList
    }
}

export default {
    state,
    mutations,
    actions,
    getters,
    namespaced: true
}