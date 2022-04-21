let obj = {
  isLogin: false,
  userId: 0
};

//存储登陆信息
obj.login = function(loginInfo) {
  obj.isLogin = loginInfo.isLogin;
  obj.userId = loginInfo.userId;
};

//获取登陆信息
obj.getLoginInfo = function() {
  let loginInfo = {};
  loginInfo.isLogin = obj.isLogin;
  loginInfo.userId = obj.userId;

  return loginInfo;
};

export default obj;
