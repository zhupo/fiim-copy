import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/Login/Login'
import MovieDetail from '../components/MovieDetail/MovieDetail'
import CommetnPanel from '../components/MovieDetail/children/CommentPanel'

import Home from '../pages/Home/Home'
import Movie from '../pages/Movie/Movie'
import Cinema from '../pages/Cinema/Cinema'
import My from '../pages/My/My'
import SearchAll from '../pages/Home/children/SearchAll'

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
      path:'/login',
      component:Login
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
      path:'/comment_panel',
      name: 'comment_panel',
      component:CommetnPanel
    },
  ]
})
