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

    //主题详情图片
    async uploadThemeProductImage() {
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



        //增加主题详情信息
        let themeImage =new this.ctx.model.ThemeProduct(formFields);    
        var result=await themeImage.save();

        this.ctx.body = {
            code:200,
            success:true,
            message:'上传图片成功'
        }
    }


    //主题详情
    async themeDetail() {
        let result = this.ctx.query;
        if(result.id) {
            let detailData=await this.ctx.model.Theme.aggregate([
        
                {
                  $lookup:{
                    from:'themeProduct',
                    localField:'theme_id',
                    foreignField:'product_id',
                    as:'items'      
                  }      
               },
               {
                  $match:{   
                    "theme_id":result.id
                  }
               }        
            ])
          

            //查询到数据时
            if(detailData.length > 0) {
                this.ctx.body = {
                    code:200,
                    message:"获取主题详情成功",
                    success:true,
                    data:detailData
            
                }
            } else {
                this.ctx.body = {
                    code:404,
                    message:'传入的参数有误',
                    success:false
                }
            }



        } else {
            this.ctx.body = {
                code:404,
                message:'输入的参数不能为空',
                success:false
            }
        }

    
    }

    

  
}


module.exports = ThemeController;


