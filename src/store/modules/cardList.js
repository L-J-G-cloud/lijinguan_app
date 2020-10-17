import { reqCardList } from "../../utils/request"

const state = {
    cardList: [],
}
const mutations = {
    
    getList(state, arr) {
        if (arr) {
            arr.forEach(item => {
                item.checked = false;
            });
        }
        state.cardList = arr;
    }
}

const actions = {
    requestCardList(context) {
        reqCardList().then(res => {
            context.commit("getList", res.data.list)
        })
    }
}

const getters = {
    cardList(state) {
        return state.cardList
    }
}

export default {
    state,
    mutations,
    actions,
    getters,
    namespaced: true
}