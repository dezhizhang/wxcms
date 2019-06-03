'use strict';

const fs = require('fs');
const pump = require('pump');

const Controller = require('egg').Controller;

class AjaxController extends Controller {
  //用户登录接口
  async login() {
      let result = this.ctx.request.body;
        this.ctx.body = {
            code:200,
            msg:'SUCCESS',
            data:[]
        }
  }
  
  
}


module.exports = AjaxController;
