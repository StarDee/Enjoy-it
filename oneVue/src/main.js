// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import VueResource from 'vue-resource'
Vue.use(VueResource)
import Home from './pages/Home'
import Detail from './pages/Detail'
// 定义路由器
const routes = [{
        path: '/',
        component: Home
    }, {
        path: '/detail',
        component: Detail
    }]
    // 创建路由实例
const router = new VueRouter({
        routes
    })
    //创建vue实例
new Vue({
    el: '#app',
    data() {
        return {
            transitionName: 'slide'
        }
    },
    router, //在vue实例配置中，用router
    watch: {
        // 监视路由，参数为目标路由和当前页面路由
        '$route' (to, from) {
            const toDepth = to.path.substring(0, to.path.length - 2).split('/').length
            const fromDepth = from.path.substring(0, from.path.length - 2).split('/').length
            this.transitionName = toDepth < fromDepth ? 'slide_back' : 'slide'
        }
    }
})
