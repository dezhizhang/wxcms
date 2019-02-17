'use strict';

const fs = require('fs');
const pump = require('pump');

const Controller = require('egg').Controller;

class ThemeController extends Controller {
    //主题图片上传
    async uploadThemeImage() {
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
        let themeImage =new this.ctx.model.Theme(formFields);    
        var result=await themeImage.save();

        this.ctx.body = {
            code:200,
            success:true,
            message:'上传图片成功'
        }
    }

    //获取主题图片
    async themeImage() {
        let result = await this.ctx.model.Theme.find();

        this.ctx.body = {
            code:200,
            message:'获取轮播图成功',
            success:true,
            data:result
        }
    }

    //主题详情图片上传
    async uploadThemeDetailImage() {
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
        let themeImage =new this.ctx.model.ThemeDetail(formFields);    
        var result=await themeImage.save();

        this.ctx.body = {
            code:200,
            message:'图片上传成功',
            success:true
        }
    }

  
}


module.exports = ThemeController;


