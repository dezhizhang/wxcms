'use strict';


const fs = require('fs');
const pump = require('pump');

const Controller = require('egg').Controller;

class NuclearController extends Controller {

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

    //验证码检验
    async verifyAuthCode() {
       let result = this.ctx.request.body;
       if(result.code) {
        this.ctx.body = {
            code:200,
            msg:'校验成功',
            data:null
        }
       } else {
            this.ctx.body = {
                code:500,
                msg:'校验失败',
                data:null
            }
       }
      

    }

  
}


module.exports = NuclearController;
