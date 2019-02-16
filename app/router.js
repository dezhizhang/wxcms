'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
 
  //用户登录接口
  router.post('/api/login/account',controller.admin.login.userAccount);

  //用户注册接口
  router.post('/api/user/register',controller.admin.login.userRegister);


  


};
