'use strict';


const fs = require('fs');
const pump = require('pump');

const Controller = require('egg').Controller;

class CategoryController extends Controller {

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
    //分类商品获取接口
    async categoryProduct() {
        let id = this.ctx.query.id;

        if(id) {
       
            let categoryProduct = await this.ctx.model.Category.aggregate([
                {
                    $lookup:{
                        from:'categoryProduct',
                        localField:'category_id',
                        foreignField:'category_product_id',
                        as:'items'
                    }
                },
                {
                    $match:{
                        'category_id':id
                    }
                }
            ])

            this.ctx.body = {
                code:200,
                message:'查询分类成功',
                success:true,
                data:categoryProduct
            }

        } else {
            this.ctx.body = {
                code:200,
                message:'传入的参数有误',
                success:false
            }
        }
      

       
    }

    //分类商品上传接口
    async uploadCategoryProduct() {

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
        let categoryProduct =new this.ctx.model.CategoryProduct(formFields);    
        let result=await categoryProduct.save();
        if(result) {
            this.ctx.body = {
                code:200,
                message:'分类商品上传成功',
                success:true
            }
        } else {
            this.ctx.body = {
                code:404,
                message:'上传分类失败',
                success:false
            }
        }
        

    }

  
}


module.exports = CategoryController;
