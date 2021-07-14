import Vue from 'vue'
import Router from 'vue-router'
import SearchAll from '../pages/Home/children/SearchAll'

import Home from '../pages/Home/Home'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/home'
    },
    {
      path: '/home',
      name:'home',
      component: Home,
      meta:{
        showTabBar:true,
      }
    },
    {
      path:'/search_all',
      component:SearchAll
    },
  ]
})
