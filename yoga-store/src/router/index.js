import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/pages/login/login'

Vue.use(Router)


let router = new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:"/login",
      name:'Login',
      component: Login
    }
  ]
})


export default router
