import Vue from 'vue';
import {getLoginInfo} from './api/index'

const Bus = new Vue({
  data() {
    return {
      isLogin: false,
      userId: 0
    }
  },
  created() {
    this.loadLoginInfo();
  },
  methods: {
    loadLoginInfo() {
      getLoginInfo().then(loginInfo => {
        this.isLogin = loginInfo.isLogin;
        this.userId = loginInfo.userId;
      }).catch(res => {
      });
    }
  }
});

export default Bus;