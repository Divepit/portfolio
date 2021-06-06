import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Signin from '../components/Authentication/Signin.vue'
import Blog from '../views/Blog.vue'
import Canvas from '../components/Three/ThreeCanvas.vue'
import BlogpostViewer from '../components/UI/BlogpostViewer'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/signin',
    name: 'Sign in',
    component: Signin
  },
  {
    path: '/canvas',
    name: 'Canvas',
    component: Canvas
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog
  },
  {
    path: '/blog/:post_id',
    component: BlogpostViewer
  }
]

const router = new VueRouter({
  routes
})

export default router
