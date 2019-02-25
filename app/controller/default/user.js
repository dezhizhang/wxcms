const Controller = require('egg').Controller;

class UserController extends Controller {

    //获取用户地址
    async address() {
        let user_id = this.ctx.query.user_id
        console.log(user_id);
        
       

        let result = await this.ctx.model.Address.find({'_id':id});

        this.ctx.body = {
            code:200,
            message:'获取用户地址成功',
            success:true,
            data:result
        }
    }

    //保在用户地址接口
    async saveAddress() {
        let result = this.ctx.request.body;
        let address = new this.ctx.model.Address(result);

        await address.save()

        this.ctx.body = {
            code:200,
            message:'保在用户地址成功',
            success:true
        }


        

    }
    async token() {
        this.ctx.body = {
            code:200,
            message:'hello'
        }
    }

    //用户支付接口
    async pay() {
        this.ctx.body = {
            code:200,
            message:'支付成功',
            success:true
        }
    }

    //用户订单列表
    async order() {
        let page = this.ctx.query.page;

        let result = await this.ctx.model.Theme.find().sort({"_id":1}).limit(10)
       
        this.ctx.body = {
            code:200,
            message:'订单列表获取成功',
            success:true,
            data:result
        }

        

    }
}

module.exports = UserController;
