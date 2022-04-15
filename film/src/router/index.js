import Vue from 'vue'
import Router from 'vue-router'
import SearchAll from '../pages/Home/children/SearchAll'
import MovieDetail from '../components/MovieDetail/MovieDetail'

import Home from '../pages/Home/Home'
import Movie from '../pages/Movie/Movie'
import Cinema from '../pages/Cinema/Cinema'
import My from '../pages/My/My'
import Login from '../components/Login/Login'

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
        showTabBar:true
      }
    },
    {
      path:'/movie',
      name:'movie',
      component: Movie,
      meta:{
        showTabBar:true
      }
    },
    {
      path:'/cinema',
      name:'cinema',
      component: Cinema,
      meta:{
        showTabBar:true
      }
    },
    {
      path:'/my',
      name:'my',
      component: My,
      meta:{
        showTabBar:true
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
    {
      path:'/login',
      component:Login
    },
  ]
})
