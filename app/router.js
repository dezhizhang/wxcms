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







 'use strict';


 const fs = require('fs');
 const pump = require('pump');
 
 const Controller = require('egg').Controller;
 
 class NuclearController extends Controller {
 
     async uploadCategoryType() {
         let parts = this.ctx.multipart({ autoFields: true });
         let files = {};               
         let stream;
         while ((stream = await parts()) != null) {
             if (!stream.filename) {          
             break;
             }       
             let fieldname = stream.fieldname;  //file表单的名字
 
             //上传图片的目录
             let dir=await this.service.tools.getUploadFile(stream.filename);
             let target = dir.uploadDir;
             let writeStream = fs.createWriteStream(target);
 
             await pump(stream, writeStream);  
 
             files=Object.assign(files,{
             [fieldname]:dir.saveDir    
             })
             
         }      
 
 
         var formFields=Object.assign(files,parts.field);
 
 
 
         //增加商品信息
         let category =new this.ctx.model.Category(formFields);    
         let result=await category.save();
 
 
         this.ctx.body = {
             code:200,
             message:'上传分类成功',
             success:true
         }
 
 
         
     }
 
     //验证码检验
     async verifyAuthCode() {
        let result = this.ctx.request.body;
        if(result.code) {
         this.ctx.body = {
             code:200,
             msg:'SUCCESS',
             data:{
                 userNo:'123456' 
             }
         }
        } else {
             this.ctx.body = {
                 code:500,
                 msg:'校验失败',
                 data:null
             }
        }
     }
     //身分让反显
     async verifiyInfo() {
         let result = this.ctx.query;
 
         if(result.userNo) {
             this.ctx.body = {
                 code:200,
                 msg:'SUCCESS',
                 data:{
                     companyName:'广州智数',
                     username:'张三',
                     idNo:'441323199604017455'
                 }
             }
         } else {
             this.ctx.body = {
                 code:500,
                 msg:"FAIL",
                 data:null
             }
         }
     
     }
     //身份证上传
     async ocrVerify() {
         let parts = this.ctx.multipart({ autoFields: true });
         let files = {};               
         let stream;
         while ((stream = await parts()) != null) {
             if (!stream.filename) {          
             break;
             }       
             let fieldname = stream.fieldname;  //file表单的名字
 
             //上传图片的目录
             let dir=await this.service.tools.getUploadFile(stream.filename);
             let target = dir.uploadDir;
             let writeStream = fs.createWriteStream(target);
 
             await pump(stream, writeStream);  
 
             files=Object.assign(files,{
               [fieldname]:dir.saveDir    
             })
             
         }      
 
 
         var formFields=Object.assign(files,parts.field);
         //增加商品信息
         let list =new this.ctx.model.Card(formFields); 
         console.log(formFields);
 
         var result=await list.save();
         this.ctx.body = {
             code:200,
             msg:'SUCCESS',
             data:'认证通过'
         }
     }
     async faceVerify() {
         let parts = this.ctx.multipart({ autoFields: true });
         let files = {};               
         let stream;
         while ((stream = await parts()) != null) {
             if (!stream.filename) {          
             break;
             }       
             let fieldname = stream.fieldname;  //file表单的名字
 
             //上传图片的目录
             let dir=await this.service.tools.getUploadFile(stream.filename);
             let target = dir.uploadDir;
             let writeStream = fs.createWriteStream(target);
 
             await pump(stream, writeStream);  
 
             files=Object.assign(files,{
               [fieldname]:dir.saveDir    
             })
             
         }      
 
 
         var formFields=Object.assign(files,parts.field);
         //增加商品信息
         let list =new this.ctx.model.Card(formFields); 
         console.log(formFields);
 
         var result=await list.save();
         // this.ctx.body = {
         //     code:500,
         //     msg:'SUCCESS',
         //     data:'认证通过'
         // }
         this.ctx.body = {
             code:400,
             msg:'照片格式不符，请重新上传',
             data:null
         }
     }
 }
 
 
 module.exports = NuclearController;
 
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
 router.post('/financeAdmin/menuList',controller.default.finance.menuList);

 //
 router.post('/financeAdmin/financeOrder/list',controller.default.finance.list);

 //用户登录
 router.post('/financeAdmin/systemUser/login',controller.default.finance.login)














  

  










  

  





  


};
