import Vue from 'vue'
import Router from 'vue-router'
import store from "../store/index"
Vue.use(Router)

const login=()=> import ("../pages/login") 
const register=()=> import ("../pages/register") 
const index=()=> import ("../pages/index") 
const home=()=> import ("../pages/home") 
const card=()=> import ("../pages/card") 
const classfiy=()=> import ("../pages/classfiy") 
const mine=()=> import ("../pages/mine") 
const detail=()=> import("../pages/shopDetail")
const classfiyList=()=> import("../pages/classfiyList")

let router = new Router({
  routes: [
    {
      path:"/login",
      component:login,
      name:"登录"
    },
    {
      path:"/detail",
      component:detail,
      name:"详情页"
    },
    {
      path:"/list",
      component:classfiyList,
      name:"分类列表"
    },
    {
      path:"/register",
      component:register,
      name:"注册"
    },
    {
      path:"/index",
      component:index,
      children:[
        {path: "home",component:home,name:"首页"},
        {path: "classfiy",component:classfiy,name:"分类"},
        {path: "card",component:card,name:"购物车"},
        {path: "mine",component:mine,name:"我的"},
        {path:"",redirect: "home"}
      ]
    },
    {
      path:"*",
      redirect:"/login"
    },
  ]
})

// 登录拦截
router.beforeEach((to, from, next) => {
  if (to.path == '/login'||to.path=='/register') {
    next()
    return;
  }

  if (store.state.user.token) {
    next();
    return;
  }
  next("/login")
})

export default router;
