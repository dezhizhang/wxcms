'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  //用户登录接口
  async userLogin() {
      this.ctx.body = {
          code:200,
          message:'success'
      }
  }
}


module.exports = UserController;
