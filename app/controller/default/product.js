'use strict';

const fs = require('fs');
const pump = require('pump');

const Controller = require('egg').Controller;

class ProductController extends Controller {
    async uploadImage() {
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
        let themeImage =new this.ctx.model.Product(formFields);    
        var result=await themeImage.save();

        this.ctx.body = {
            code:200,
            success:true,
            message:'上传图片成功'
        }
    }

    async productImage() {
        let data = await this.ctx.model.Product.find();
       
        this.ctx.body = {
            code:200,
            message:'获取产品图片成功',
            success:true,
            data:data
        }
    }

    async productDetail() {
        let id = this.ctx.query.id;
        
        if(id) {
           if(id == 1 || id == 2 || id == 3) {
                let productDetail = await this.ctx.model.Banner.aggregate([
                    {
                        $lookup:{
                            from:'productDetail',
                            localField:'banner_id',
                            foreignField:'product_id',
                            as:'items'
                        }
                    },
                    {
                        $match:{
                            'banner_id':id
                        }
                    }
                ])

                this.ctx.body = {
                    code:200,
                    message:'商品详情查询成功',
                    success:true,
                    data:productDetail
                }
           } else {
                let bannerDetail = await this.ctx.model.Product.aggregate([
                    {
                        $lookup:{
                            from:"productDetail",
                            localField:'product_id',
                            foreignField:'product_id',
                            as:'items'
                        }
                    },
                    {
                        $match:{
                            'product_id':id
                        }
                    }
                ]);

                this.ctx.body = {
                    code:200,
                    message:'商品详情查询成功',
                    data:bannerDetail,
                    success:true
                }
           }
        } else {
            this.ctx.body = {
                code:404,
                message:'传入的参数不能为空',
                success:false
            }
        }
    }

    async uploadProductDetaail() {
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
        let themeImage =new this.ctx.model.ProductDetail(formFields);    
        let result=await themeImage.save();

        this.ctx.body = {
            code:200,
            message:'商品详情上传成功',
            success:true
        }
    }
}

module.exports = ProductController