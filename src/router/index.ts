import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { createWebHashHistory } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path:'/fullForecast/:id',
    name:'fullForecast',
    component: () => import(/* webpackChunkName: "fullForecast" */ '../views/FullForecast.vue')
  },

]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
