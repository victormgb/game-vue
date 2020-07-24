import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

const routerOptions = [
  { path: '/', name: 'Home' },
  { path: '/region/:region/profile/:battleTag', name: 'Profile' },
  { path: '/region/:region/profile/:battleTag/hero/:heroId', name: 'Hero' },
  { path: '/about', name: 'About' },
  { path: '/error', name: 'Error' },
  { path: '*', redirect: { name: 'Home' } }
]

const routes = routerOptions.map(r => {
  return {
    ...r,
    // Lazy load
    component: () => import(`@/views/${r.name}/Index.vue`)
  }
})

//Para hacer chunks al momento del build de la app
// const routes = [
//   {
//     path: '/',
//     name: 'Home',
//     component: () => import(/* webpackChunkName: "Home" */ '@/views/Home/Index.vue')
//   },
//   {
//     path: '/about',
//     name: 'About',
//     component: () => import(/* webpackChunkName: "About" */ '@/views/About/Index.vue')
//   },
//   {
//     path: '/error',
//     name: 'Error',
//     component: () => import(/* webpackChunkName: "Error" */ '@/views/Error/Index.vue')
//   }
// ]

const router = new Router({
  routes
})

export default router
