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

   
}

module.exports = ToolsService;

