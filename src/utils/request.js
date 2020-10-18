import axios from "axios"
import router from "../router"

// 请求拦截
let baseUrl = "/api"
axios.interceptors.request.use(req=>{
    if(req.url!=baseUrl+"/api/login"&&req.url!=baseUrl+"/api/register"){
        req.headers.authorization = JSON.parse(sessionStorage.getItem('user')).token;
    }
    return req;
})
//获取返回的信息
axios.interceptors.response.use(res => {
    console.log("本次请求地址是：" + res.config.url);
    console.log(res);
     //用户掉线了
     if(res.data.msg=='登录已过期或访问权限受限'){
        router.push("/login")
    }
    return res;
})


export const reqLogin = (phone,password)=>{
    return axios({
        url: baseUrl+"/api/login",
        method:"post",
        data:{
            phone,
            password
        }
    })
}

export const reqRegister = (phone,nickname,password)=>{
    return axios({
        url: baseUrl+"/api/register",
        method:"post",
        data:{
            phone,
            nickname,
            password
        }
    })
}

export const reqLunbo =()=>{
      return axios({
          url:baseUrl+"/api/getbanner",
          method:"GET"
      })  
}

export const reqLimte =()=>{
    return axios({
        url:baseUrl+"/api/getseckill",
        method:"GET"
    })  
}

export const reqShopList=()=>{
    return axios({
        url:baseUrl+"/api/getindexgoods",
        ethod:"GET"
    })
}

export const reqShopDetail=(id)=>{
    return axios({
        url:baseUrl+"/api/getgoodsinfo",
        method:"GET",
        params:{
            id
        }
    })
}

export const reqClassfiyList=()=>{
    return axios({
        url:baseUrl+"/api/getcatetree",
        method:"GET",
    })
}


export const reqclassfiyGoods=(fid)=>{
    return axios ({
        url:baseUrl+"/api/getgoods",
        method:"GET",
        params:{
            fid
        }
    })
}
export const reqAddCard=(user)=>{
    console.log(user);
    return axios ({
        url:baseUrl+"/api/cartadd",
        method:"POST",
        data:user
    })
}



export const reqCardList=()=>{
    console.log(JSON.parse(sessionStorage.getItem("user")).uid);
    return axios ({
        url:baseUrl+"/api/cartlist",
        method:"GET",
        params:{
            uid:JSON.parse(sessionStorage.getItem("user")).uid,
        }
    })
}

export const reqCartedit=(id,type)=>{
    return axios ({
        url: baseUrl+"/api/cartedit",
        method:"POST",
        data:{
            id,
            type
        }
    })
}

export const reqDel=(id)=>{
    return axios ({
        url: baseUrl+"/api/cartdelete",
        method:"POST",
        data:{
            id,
        }
    })
}



