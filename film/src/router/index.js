import Vue from 'vue'
import Router from 'vue-router'
import SearchAll from '../pages/Home/children/SearchAll'
import MovieDetail from '../components/MovieDetail/MovieDetail'

import Home from '../pages/Home/Home'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/home'
    },
    {
      path:'/home',
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
    // {
    //   path:'/movie_detail/:movieId',
    //   name:'movie_detail',
    //   component:MovieDetail
    // },
    {
      path:'/movie_detail',
      name:'movie_detail',
      component:MovieDetail
    },
  ]
})
