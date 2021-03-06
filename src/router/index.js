import Vue from 'vue'
import VueRouter from 'vue-router'

//const originalPush = VueRouter.prototype.push
//VueRouter.prototype.push = function push(location) {
//return originalPush.call(this, location).catch(err => err)
//}

const Home = () => import('../views/home/Home')
const Category = () => import('../views/category/Category')
const Cart = () => import('../views/cart/Cart')
const Profile = () => import('../views/profile/Profile')
const Detail = () => import('../views/detail/Detail')

// 1.安装插件
Vue.use(VueRouter)

// 2.创建router
const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    name:"Home",
    component: Home
  },
  {
    path: '/category',
    name:"Category",
    component: Category
  },
  {
    path: '/cart',
    name:"Cart",
    component: Cart
  },
  {
    path: '/profile',
    name:"Profile",
    component: Profile
  },
  {
    path: '/detail/:iid',
    name:"Detail",
    component: Detail
  }
]
const router = new VueRouter({
  routes,
  mode: 'history'
  
})

//3.导出路由
export default router
