'use strict';

const Controller = require('egg').Controller;

class LoginController extends Controller {
  //用户登录接口
  async userAccount() {
      let result = this.ctx.request.body;

      result.password = await this.service.tools.md5(result.password);
     
      let data = await this.ctx.model.Login.find(result);

      if(data.length > 0) {
          this.ctx.body = {
              code:200,
              message:'登录成功',
              success:true
          }
      } else {
          this.ctx.body = {
              code:404,
              message:'用户名或密码错误',
              success:false
          }
      }
      
  }
  //用户注册
  async userRegister() {
      let result = this.ctx.request.body;

      result.password = await this.service.tools.md5(result.password);

      let params = {
          email:result.email
      }


      let data = await this.ctx.model.Login.find(params);
      if(data.length > 0) {
          this.ctx.body = {
              code:404,
              message:'此用户以经注册了,请直接登录',
              success:false
          }
      } else {
        let res = new this.ctx.model.Login(result);
        res.save();
        this.ctx.body = {
            code:200,
            message:'注册成功',
            success:true
        }

      }
  }
}


module.exports = LoginController;
