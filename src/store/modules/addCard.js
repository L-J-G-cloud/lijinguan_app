import {reqAddCard} from "../../utils/request"

const state = {
   Msg:"",
}
const mutations={
   AddCard(state,s){
        state.Msg=s;
    }
}

const actions = {
    requestAddCard(context,user){
        reqAddCard(user).then(res=>{
            context.commit("AddCard",res.data.msg)
        })
    }
}

const getters = {
    classfiyGoods(state){
        return state.Msg
    }
}

export default {
    state,
    mutations,
    actions,
    getters,
    namespaced: true
}