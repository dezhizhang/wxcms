const Controller = require('egg').Controller;

class IndexController extends Controller {
  async index() {

    let result = this.ctx.request.body;

    
    let data = await this.ctx.model.Index.find();
    console.log(data);
    
    






    this.ctx.body = {
        code:200,
        message:'success',
        data:data
    }
  }
}

module.exports = IndexController;
