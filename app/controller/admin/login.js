'use strict';

const fs = require('fs');
const pump = require('pump');

const Controller = require('egg').Controller;

class LoginController extends Controller {
  //用户登录接口
  async userAccount() {
      let result = this.ctx.request.body;
    
        if(result.userName && result.password) {
                result.password = await this.service.tools.md5(result.password);
                
                let data = await this.ctx.model.Login.find(result);

                if(data.length > 0) {
                    this.ctx.body = {
                        code:200,
                        message:'登录成功',
                        success:true,
                        data:{userName:result.userName}
                    }
                } else {
                    this.ctx.body = {
                        code:404,
                        message:'用户名或密码错误',
                        success:false
                    }
                }
        } else {
            this.ctx.body = {
                code:404,
                message:'用户或密码不能为空',
                success:false
            }
        }

      
      
  }
  //用户注册
  async userRegister() {
      let result = this.ctx.request.body;

      result.password = await this.service.tools.md5(result.password);

      let params = {
          email:result.email
      }


      let data = await this.ctx.model.Login.find(params);
      if(data.length > 0) {
          this.ctx.body = {
              code:404,
              message:'此用户以经注册了,请直接登录',
              success:false
          }
      } else {
        let res = new this.ctx.model.Login(result);
        res.save();
        this.ctx.body = {
            code:200,
            message:'注册成功',
            success:true
        }

      }
  }
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



    // //增加商品信息
    // let goodsRes =new this.ctx.model.Goods(formFields);    
    // var result=await goodsRes.save();

       this.ctx.body = {
           code:200,
           success:true,
           message:'上传图片成功'
       }
   }
}


module.exports = LoginController;
