'use strict';

const md5 = require('md5');

const Service = require('egg').Service;


class  ToolsService extends Service {
    //md5加密码
    async md5(str) {
        return md5(str);
        
    }

}

module.exports = ToolsService;

