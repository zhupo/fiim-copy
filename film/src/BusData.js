let obj = {};

//设置登陆信息
obj.setLoginUserId = function(loginInfo) {
  window.localStorage.setItem("userId", loginInfo.userId);
};

//获取登陆信息
obj.getLoginUserId = function() {
  return JSON.parse(window.localStorage.getItem("userId") || 0);
};

export default obj;
