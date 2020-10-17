import {reqLimte} from "../../utils/request"

const state = {
    limte:[],
}
const mutations={
    getLimte(state,arr){
        state.limte=arr;
    }
}

const actions = {
    requestLimte(context){
        if(context.lunbo){
            return;
        }
        reqLimte().then(res=>{
            context.commit("getLimte",res.data.list)
        })
    }
}

const getters = {
    limte(state){
        return state.lunbo
    }
}

export default {
    state,
    mutations,
    actions,
    getters,
    namespaced: true
}