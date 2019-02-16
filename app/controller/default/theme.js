
const fs = require('fs');
const pump = require('pump');

const Controller = require('egg').Controller;

class ThemeController extends Controller {
    
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



    //增加主题图片
    let themeImage = new this.ctx.model.Theme(formFields);    
    var result = await themeImage.save();

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
            message:'获取主题成功',
            success:true,
            data:result
        }
    }
}

module.exports = ThemeController;


