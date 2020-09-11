import Vue from 'vue'
import VueRouter from 'vue-router'
import ViewBoard from "@/views/ViewBoard";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'ViewBoard',
    component: ViewBoard
  },
]

const router = new VueRouter({
  routes
})

export default router
