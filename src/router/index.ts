import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/post',
    name: 'Post',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Post.vue')
  },
  {
    path: '/employee-page/:employeeName?/:employeeAge?/:employeeSalary?/:employeeImage?',
    name: 'Employee Page',
    component: () => import(/* webpackChunkName: "about" */ '../views/EmployeePage.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
