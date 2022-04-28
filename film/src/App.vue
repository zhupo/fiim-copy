<template>
  <div id="app">
    <router-view/>
    <tab-bar v-if="$route.meta.showTabBar"/>

  </div>
</template>

<script>
import TabBar from './components/TabBar/TabBar'
import 'mint-ui/lib/style.css'
import {getLoginInfo} from './api/index'
export default {
  name: 'App',
  components: {TabBar},
  created() {
    this.loadLoginInfo();
  },
  methods: {
    async loadLoginInfo() {
      let json = await getLoginInfo();
      this.$busData.setLoginUserId(json);
    }
  }
}
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
#app
    width 100%
    height 100
</style>