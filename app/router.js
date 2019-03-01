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

  //获取用户地址
  router.get('/api/user/address',controller.default.user.address);

  //保存用户地址接口
  router.post('/api/user/saveAddress',controller.default.user.saveAddress);
  

  
  //用户加入token
  router.post('/api/token/user',controller.default.user.token);
  
  //用户付款
 router.post('/api/order/pay',controller.default.user.pay);
 
 //获取订单列表
 router.get('/api/user/order',controller.default.user.order);


 //qq上传接口
 router.post('/api/user/uploadList',controller.default.user.uploadList);

 //我的融资订单
 router.post('/financeEntryWebApi/orders/findUserOrderLists',controller.default.user.list)















 //智数金融平台接口
 router.post('/financeAdmin/user/login',controller.default.user.login);
 
 //分期产品列表
 router.post('/financeEntryWebApi/product/list',controller.default.user.product)

 //分期产品上传接口
 router.post('/financeEntryWebApi/product/uploadList',controller.default.user.productList);

 //融资订单详情
 router.post('/financeEntryWebApi/orders/detail',controller.default.user.detail);

 //用户还款计划接口
 router.post('/financeEntryWebApi/orders/replayPlans',controller.default.user.replayPlans);



  

  










  

  





  


};
