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

  //轮播图片的获取   
  router.get('/api/bannerImage',controller.default.banner.bannerImage);

  //主题图片上传接口
  router.post('/api/uploadThemeImage',controller.default.theme.uploadThemeImage);

  //主题图片的获取
  router.get('/api/themeImage',controller.default.theme.themeImage);

  //产品图片上传接口
  router.post('/api/uploadProductImage',controller.default.product.uploadImage);

  //产品图片获取接口
  router.get('/api/productImage',controller.default.product.productImage);

  //主题详情产品图
  router.post('/api/uploadThemeProductImage',controller.default.theme.uploadThemeProductImage);

  //主题详情接口
  router.get('/api/themeDetail',controller.default.theme.themeDetail);

  //商品详情上传接口
  router.post('/api/uploadProductDetaail',controller.default.product.uploadProductDetaail);

  //获取商品图片
  router.get('/api/productDetail',controller.default.product.productDetail);

  //分类上传接口
  router.post('/api/uploadCategoryType',controller.default.category.uploadCategoryType);

  //分类接口获取
  router.get('/api/categoryType',controller.default.category.categoryType);

  //分类产品的获取
  router.get('/api/categoryProduct',controller.default.category.categoryProduct);

  //分类产品的上传
  router.post('/api/uploadCategoryProduct',controller.default.category.uploadCategoryProduct);
  

  










  

  





  


};
