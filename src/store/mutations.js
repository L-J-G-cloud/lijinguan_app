export const state={
    Tips:"",
    registerInfo:{},
    loginInfo:{},
    user:sessionStorage.getItem("user")?JSON.parse(sessionStorage.getItem("user")):{}
}

export const getters={
    loginInfo(state){
        return state.loginInfo
    },
    loginInfo(state){
        return state.registerInfo
    },
    Tips(state){
        return state.Tips
    },
    user(state){
        return state.user
    }
}

export const mutations={
    LoginInfo(state,obj){
        state.registerInfo=obj;
    },
    changeTips(state,s){
        state.Tips=s;
    },
    changeUserInfo(state,info){
        state.user=info;
        if(info.uid){
            sessionStorage.setItem("user",JSON.stringify(info))
        }else{
            sessionStorage.removeItem("user")
        }
    }
}