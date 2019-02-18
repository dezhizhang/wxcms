'use strict';

const Controller = require('egg').Controller;

class CategoryController extends Controller {

    async uploadCategoryType() {
        let result = this.ctx.request.body;
        if(result.name && result.category_id) {
            let data = new this.ctx.model.Category(result);
            let res = data.save();

            this.ctx.body = {
                code:200,
                message:'上传分类成功',
                success:true
            }
        } else {
            this.ctx.body = {
                code:404,
                message:'参数不参空或传入不对',
                success:false
            }
        }
        
    }

    //分类获取接口
    async categoryType() {
        let data = await this.ctx.model.Category.find();
        this.ctx.body = {
            code:200,
            message:'获取分类成功',
            success:true,
            data:data
        }
    }

  
}


module.exports = CategoryController;
