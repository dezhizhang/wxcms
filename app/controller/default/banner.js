'use strict';

const fs = require('fs');
const pump = require('pump');

const Controller = require('egg').Controller;

class BannerController extends Controller {
    //用户上传图片
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
        let bannerImage =new this.ctx.model.Banner(formFields);    
        var result=await bannerImage.save();

        this.ctx.body = {
            code:200,
            success:true,
            message:'上传图片成功'
        }
    }

    //获取轮播图图片
    async bannerImage() {
        let result = await this.ctx.model.Banner.find();

        this.ctx.body = {
            code:200,
            message:'获取轮播图成功',
            success:true,
            data:result
        }
    }

  
}


module.exports = BannerController;



