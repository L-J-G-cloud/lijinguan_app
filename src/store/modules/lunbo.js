import {reqLunbo} from "../../utils/request"

const state = {
    lunbo:[],
}
const mutations={
    getLunbo(state,arr){
        state.lunbo=arr;
    }
}

const actions = {
    requestLunbo(context){
        if(context.state.lunbo.length>0){
            return
        }
        reqLunbo().then(res=>{
            context.commit("getLunbo",res.data.list)
        })
    }
}

const getters = {
    lunbo(state){
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