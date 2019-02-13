const Controller = require('egg').Controller;

class IndexController extends Controller {
  async index() {
    this.ctx.body = {
        code:200,
        message:'success',
    }
  }
}

module.exports = IndexController;
