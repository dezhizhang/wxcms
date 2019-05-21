'use strict';
const fs = require('fs');
const pump = require('pump');
const Controller = require('egg').Controller;

class EnteryController extends Controller {
    async login() {
        let result = this.ctx.request.body;
        console.log(result);

        this.ctx.body = {
            code:200,
            msg:"SUCCESS",
            data:{
                "token":"",
                "username":"张三吧",
                "id":"xxxx",
                "isInitialize":false,
                "step":"1",
                "needSignCert": false
            }
        }
    }
}


module.exports = EnteryController;
