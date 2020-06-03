import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'
import 'element-ui/lib/theme-chalk/index.css'
import Dm from '../components/test/demo1.vue'
import Welcome from '../components/main/Welcome'

Vue.use(Router)
const loginPath = '/login'
const homePath = '/home'
const welcomePath = '/welcome'
const router = new Router({
  routes: [
    {path: '/demo1', component: Dm},
    {path: '/', redirect: loginPath},
    {
      path: loginPath, component: Login
    },
    {
      path: homePath,
      component: Home,
      redirect: welcomePath,
      children: [{path: welcomePath, component: Welcome}]
    }
  ]
})
router.beforeEach((to, form, next) => {
  if (to.path === loginPath) {
    return next()
  }
  if (window.sessionStorage.getItem('token') === '' ||
    window.sessionStorage.getItem('token') === undefined || window.sessionStorage.getItem('token') === null) {
    return next(loginPath)
  }
  // 正常通过
  next()
})
export default router
