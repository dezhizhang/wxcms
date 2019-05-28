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
 
 //用户签名
 router.post('/financeEntryWebApi/orders/sign',controller.default.user.sign);
 
 //登陆验证码获取
 router.post('/financeEntryWebApi/user/sendLoginCode',controller.default.user.sendLoginCode);

 //用户实名返显
 router.post('/financeEntryWebApi/user/verifiyInfo',controller.default.user.verifiyInfo);

 //用户实名认证
 router.post('/financeEntryWebApi/user/ocrVerifiy',controller.default.user.ocrVerifiy);

 //身份证反选上传接口
 router.post('/financeEntryWebApi/user/uploadVerifiyInfo',controller.default.user.uploadVerifiyInfo);

 //上脸识别上传接口
 router.post('/financeEntryWebApi/user/uploadFaceInfo',controller.default.user.uploadFaceInfo);


 
 //核身小程序
 //动态码校验接口
 router.post('/financeEntrySystemApi/v1/users/verifyAuthCode',controller.default.nuclear.verifyAuthCode);

 //实名认证反显
 router.get('/financeEntrySystemApi/v1/users/verifiyInfo',controller.default.nuclear.verifiyInfo);

 //身体上传
 router.post('/financeEntrySystemApi/verify/ocrVerify',controller.default.nuclear.ocrVerify);

 //人脸识别
 router.post('/financeEntrySystemApi/verify/faceVerify',controller.default.nuclear.faceVerify);


 //中控系统接口
 //加载菜单
 router.get('/financeAdmin/systemUser/MenuList',controller.default.finance.menuList);
 //融资订单列表
 router.get('/financeAdmin/financeOrder/list',controller.default.finance.orderList);
 //用户登录
 router.post('/financeAdmin/systemUser/login',controller.default.finance.login);
 //审核列表
 router.get('/financeAdmin/audit/list',controller.default.finance.auditList);
 //新建审核配置
 router.post('/financeAdmin/audit/addConfig',controller.default.finance.addConfig);
 //修改审核配
 router.post('/financeAdmin/audit/update',controller.default.finance.auditUpdate);
 //审核详情查看
 router.get('/financeAdmin/audit/info/',controller.default.finance.auditInfo);
 //新建审核配置
 router.post('/financeAdmin/audit/save',controller.default.finance.auditSave);
 //管理员列表
 router.get('/financeAdmin/admin/list',controller.default.finance.adminList);
 //新增管理员列表
 router.post('/financeAdmin/admin/add',controller.default.finance.adminAdd);
 //修改管理员
 router.post('/financeAdmin/admin/update',controller.default.finance.adminUpdate);
 //删除管理员
 router.get('/financeAdmin/admin/delete',controller.default.finance.adminDelete);
 //获取所有角色
 router.get('/financeAdmin/role/list',controller.default.finance.roleList);
 //查看角色信息
 router.get('/financeAdmin/api/role/detail',controller.default.finance.roleDetail);
 //新增角色
 router.post('/financeAdmin/api/role/add',controller.default.finance.roleAdd);
 //删除角色
 router.post('/financeAdmin/role/delete',controller.default.finance.roleDelete);
 //更新角色
 router.post('/financeAdmin/role/update',controller.default.finance.roleUpdate);
 //新增角色
 router.post('/financeAdmin/role/save',controller.default.finance.roleSave);
 //锁定/禁用
 router.get('/financeAdmin/role/lock',controller.default.finance.lockRoleId);
 //解锁/启用
 router.get('/financeAdmin/role/unlock',controller.default.finance.roleUnLock);
 //修改登录密码
 router.post('/financeAdmin/user/changePassword',controller.default.finance.changePassword);
 //修改交易密
 router.post('/financeAdmin/audit/changePin',controller.default.finance.changePin);
 //个人账号管理
 router.get('/financeAdmin/sysUser/info',controller.default.finance.sysUserInfo);
  //融资订筛选
 router.post('/financeAdmin/financeOrder/list',controller.default.finance.orderListSearch);
 //融资订单详细信息
 router.get('/financeAdmin/financeOrder/info',controller.default.finance.orderInfo);
 //融资人详细信息
 router.get('/financeAdmin/financeOrder/user',controller.default.finance.orderUser);
 //用户信息列表
 router.post('/financeAdmin/userManagement/list',controller.default.finance.userList);
 //用户详细信息
 router.get('/financeAdmin/user/info',controller.default.finance.userInfo);
 //用户列表(企业)
 router.get('/financeAdmin/user/enterprise/list',controller.default.finance.enterpriseList);
 //用户详情
 router.get('/financeAdmin/user/enterprise/info',controller.default.finance.enterpriseInfo);
 //获取所有模块
 router.get('/financeAdmin/api/module/list',controller.default.finance.moduleList);
 //查看模块信息
 router.get('/financeAdmin/api/module/detail',controller.default.finance.moduleDetail);
 //增加模块
 router.post('/financeAdmin/api/module/add',controller.default.finance.moduleAdd);
 //删除模块
 router.get('/financeAdmin/api/module/delete',controller.default.finance.moduleDelete);
 //更新模块
 router.post('/financeAdmin/api/module/update',controller.default.finance.moduleUpdate);
 //查看所有用户
 router.get('/financeAdmin/api/usergroup/list',controller.default.finance.userGroupList);
 //新增用户组
 router.post('/financeAdmin/api/usergroup/add',controller.default.finance.userGroupAdd);
 //用户组角色更新 
 router.post('/financeAdmin/api/usergroup/update',controller.default.finance.userGroupUpdate);
 //的物详情-车俩
 router.post('/financeAdmin/financeManagement/carInfo',controller.default.finance.carInfo);
 //融资订单标的物-投保单
 router.post('/financeAdmin/financeManagement/policyInfo',controller.default.finance.policyInfo);
 //获取所有角色
 router.get('/financeAdmin/role/getAllRoleList',controller.default.finance.getAllRoleList);
 //融资人详细信息
 router.post('/financeAdmin/financeManagement/user',controller.default.finance.managementUser);
 //审核配置层级删除
 router.get('/financeAdmin/audit/delete',controller.default.finance.auditDelete);
 //锁定/禁用管理员
 router.get('/financeAdmin/admin/lock',controller.default.finance.adminLock);
 //上传数据接口
 router.post('/financeAdmin/admin/userData',controller.default.finance.userData);
 //获取所有模块
 router.get('/financeAdmin/role/getAllModulesList',controller.default.finance.getAllModulesList);
 //获取所有企业名称
 router.get('/financeAdmin/role/getAllCompanyNameList',controller.default.finance.getAllCompanyNameList);
 //获取角色菜单
 router.get('/financeAdmin/role/getHierarchicalMenuByRoleId',controller.default.finance.getHierarchicalMenuByRoleId);
 //融资订单列表-资产渠道
 router.get('/financeAdmin/financeManagement/assetChannelList',controller.default.finance.assetChannelList);
 //融资订单列表
 router.get('/financeAdmin/financeManagement/productNameList',controller.default.finance.productNameList);
 //融资订单列表
 router.get('/financeAdmin/financeManagement/businessTypeList',controller.default.finance.businessTypeList);
 //
 router.get('/financeAdmin/financeManagement/orderStatusList',controller.default.finance.orderStatusList)
 //解锁/启用管理员
 router.get('/financeAdmin/admin/unlock',controller.default.finance.adminUnlock);
 //用户列表-资产渠道下拉框
 router.get('/financeAdmin/userManagement/assetChannelList',controller.default.finance.userAssetChannelList);
 //标的物投保单-商业险状态下拉框
 router.get('/financeAdmin/financeManagement/destBizInsuranceStsList',controller.default.finance.destBizInsuranceStsList);
 //标的物投保单-交强险状态下拉框
 router.get('/financeAdmin/financeManagement/destForceInsuPolicyStsList',controller.default.finance.destForceInsuPolicyStsList);
 //用戶信息列表-渠道下拉框
 router.get('/financeAdmin/userManagement/channelList',controller.default.finance.channelList);
 //管理员详情
 router.get('/financeAdmin/admin/info',controller.default.finance.adminInfo);
 //获取所有资金渠道下拉框
 router.get('/financeAdmin/admin/getAllCapitalChannelDropDownBoxList',controller.default.finance.getAllCapitalChannelDropDownBoxList);
 //角色分配操作资源功能
 router.post('/financeAdmin/role/updateRoleActionsPermission',controller.default.finance.updateRoleActionsPermission);
 //新增管理员
 router.post('/financeAdmin/admin/save',controller.default.finance.adminSave)
 router.post('/financeAdmin/admin/systemInfo',controller.default.finance.adminSystemInfo);
 //获取标的物投保单
 router.post('/financeAdmin/financeManagement/insuranceKindList',controller.default.finance.insuranceKindList)

 




 //核心系统
 //用户登录
 router.post('/login',controller.default.entery.login);
 //显示用户列表
 router.post('/bizUser/list',controller.default.entery.userList);
 //显示融资订单列表
 router.post('/financing/listOrder',controller.default.entery.listOrder);
 //融资订单-进件审核列表
 router.post('/auditTask/entry/list',controller.default.entery.auditTaskList);
 //获取用户基础信息
 router.post('/init/getUserBase',controller.default.entery.getUserBase);
 //文件上传接口
 router.post('/init/infoResure',controller.default.entery.infoResure);
 //设置登录密码
 router.post('/init/setPassword',controller.default.entery.setPassword);
 //申请证书
 router.post('/init/applyCert',controller.default.entery.applyCert);
 //用户的渠道信息
 router.post('/bizUser/channel/manageList',controller.default.entery.manageList);
 //获取所有有管理权限的渠道信息
 router.post('/order/channel/manageList',controller.default.entery.orderManageList);
 //获取有关联权限的的产品信息
 router.post('/order/product/manageList',controller.default.entery.productManageList);
 //获取所有有管理权限的业务类型信息
 router.post('/order/bizType/manageList',controller.default.entery.bizTypeManageList);
 //显示融资订单列表
 router.post('/order/list',controller.default.entery.orderList);
 //显示融资订单审核列表
 router.post('/auditTask/entryList',controller.default.entery.entryList);





 


 
























 

 
 



};
