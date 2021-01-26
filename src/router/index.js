import Vue from 'vue'
import VueRouter from 'vue-router'
import Russia from '../views/Russia.vue'
import USA from '../views/USA.vue'
import Main from '../views/Main.vue'
import France from '../views/France.vue'
import Ukraine from '../views/Ukraine.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
    component: Main
  },
  {
    path: '/russia',
    name: 'newsru',
    component: Russia
  },
  {
    path: '/usa',
    name: 'newsus',
    component: USA
  },
  {
    path: '/uk',
    name: 'uk',
    component: Ukraine
  },
  {
    path: '/fr',
    name: 'fr',
    component: France
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
