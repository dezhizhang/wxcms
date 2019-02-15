'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    this.ctx.body = 'hi, egg';
  }

  async downLoad() {
    this.ctx.body = {
      code:200,
      message:'文件下载成功'
    }
  } 
  //文件上传
  async uploadFile() {
    this.ctx.body = {
      code:200,
      message:'文件上传成功'
    }
  }
}


module.exports = HomeController;
