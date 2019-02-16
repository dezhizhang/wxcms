'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
 
  //用户登录接口
  router.post('/api/admin/login',controller.admin.login.userAccount);

  //用户注册接口
  router.post('/api/admin/register',controller.admin.login.userRegister);
























  
  //轮播图上传接口
  router.post('/api/uploadBannerImage',controller.default.banner.uploadImage);

  //轮播图获取接口
  router.get('/api/bannerImage',controller.default.banner.bannerImage);

  //主题图片上传接口
  router.post('/api/uploadThemeImage',controller.default.theme.uploadThemeImage);

  //主题图片的获取
  router.get('/api/themeImage',controller.default.theme.themeImage);



  

  





  


};
