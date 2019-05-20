import {
  BaseRouter
} from "@/router/base"
import Home from '../components/Home'
import userRouter from '../components/pages/router'
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const HomeRouter = [
  new BaseRouter('/Home', Home, 'Home', '主页')
]

export default new Router({
  base: '/',
  mode: 'history',
  routes: [{
    path: '/',
    redirect: '/Home'
  },
  ...HomeRouter,
  ...userRouter
  ]
})