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
            msg:'SUCCESS',
            data:{
                userNo:'123456' 
            }
        }
       } else {
            this.ctx.body = {
                code:500,
                msg:'校验失败',
                data:null
            }
       }
    }
    //身分让反显
    async verifiyInfo() {
        let result = this.ctx.query;

        if(result.userNo) {
            this.ctx.body = {
                code:200,
                msg:'SUCCESS',
                data:{
                    companyName:'广州智数',
                    username:'张三',
                    idNo:'441323199604017455'
                }
            }
        } else {
            this.ctx.body = {
                code:500,
                msg:"FAIL",
                data:null
            }
        }
    
    }
    //身份证上传
    async ocrVerify() {
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
        let list =new this.ctx.model.Card(formFields); 
        console.log(formFields);

        var result=await list.save();
        this.ctx.body = {
            code:200,
            msg:'SUCCESS',
            data:'认证通过'
        }
    }
    async faceVerify() {
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
        let list =new this.ctx.model.Card(formFields); 
        console.log(formFields);

        var result=await list.save();
        // this.ctx.body = {
        //     code:500,
        //     msg:'SUCCESS',
        //     data:'认证通过'
        // }
        this.ctx.body = {
            code:400,
            msg:'照片格式不符，请重新上传',
            data:null
        }
    }
    //测试登录
    async userLogin() {
        this.ctx.body = {
            code:200,
            msg:'SUCCESS',
            data:{
                login:true
            }
        }
    }
}


module.exports = NuclearController;
