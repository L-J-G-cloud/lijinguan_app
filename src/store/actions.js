import {reqRegister} from "../utils/request"

export default {
    requestRegister(context){
        reqRegister().then(res=>{
           context.commit("LoginInfo",{})
        })
    },
    changeTips(context,s){
        context.commit("changeTips",s)
    },
   
    changeUserInfoAction(context,info){
        context.commit("changeUserInfo",info)
    }
}