import Vue from 'vue'
import App from './App'
import router from './router'
import cookies from 'vue-cookies'
//配置字体图标
import "@/common/css/style.css";
import "../static/css/reset.css"
import "../static/css/adapter.css"

Vue.config.productionTip = false

//Vue 使用cookies
Vue.use(cookies)

new Vue({
  //注册路由
  router,
  render: h => h(App),
}).$mount('#app')

router.afterEach((to,from,next) => {
  console.log(to, from, next)
  window.scrollTo(0,0);
})
