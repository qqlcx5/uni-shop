import router from './index'
import { Route } from 'uni-simple-router'
import Vue from 'vue'

//全局路由前置守卫
router.beforeEach((to:Route, from:Route, next:Function) => {
    console.log(to)
    next()
})
// 全局路由后置守卫
router.afterEach((to:Route, from:Route) => {
    Vue.prototype.$store.dispatch('config/setPagePath', Vue.prototype.$utilFn.getMiniAppUrl(to.query))
})


const a =  (a:number, b:number):number => {
    return a + b;
}
