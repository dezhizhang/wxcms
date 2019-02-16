'use strict';

const md5 = require('md5');
const path = require('path');
const sd = require('silly-datetime');
const mkdirp = require('mz-modules/mkdirp') 

const Service = require('egg').Service;


class  ToolsService extends Service {
    //md5加密码
    async md5(str) {
        return md5(str);
        
    }

    //返回时间
    async getTime() {
        let d = new Date();
        return d.getTime();
   
    }

    //文件目录
    async getUploadFile(filename){
        let day = sd.format(new Date(),'YYYYMMDD');
  
        //创建图片保存的路径
        let dir = path.join(this.config.uploadDir,day);
        await mkdirp(dir);
   
        let d = await this.getTime(); 
  
        let uploadDir = path.join(dir,d + path.extname(filename));
  
       
        return {
          uploadDir:uploadDir,
          saveDir:uploadDir.slice(3).replace(/\\/g,'/')
  
        }
  
  
    }

   
}

module.exports = ToolsService;

