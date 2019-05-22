'use strict';
const fs = require('fs');
const pump = require('pump');
const Controller = require('egg').Controller;

class EnteryController extends Controller {
    async login() {
        let result = this.ctx.request.body;

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
    //显示用户列表
    async userList() {
        let result = this.ctx.request.body;
        this.ctx.body = {
            code:200,
            msg:'SUCCESS',
            data:[
                {
                    "userNo":"LPC12012018001",
                    "custNo":"陈晓玩",
                    "userType":"1",
                    "channelNo":"渠道A",
                    "creditScore":"701",
                    "createdTime":"2018-02012 11:22:31"
                }
            ]
        }
    }
    //融资订单列表
    async listOrder() {
        let result = this.ctx.request.body;
        this.ctx.body = {
            code:200,
            msg:'SUCCESS',
            data:[{}]
        }
    }
    //融资订单-进件审核列表
    async auditTaskList() {
        let result = this.ctx.request.body;
        this.ctx.body = {
            code:200,
            msg:'SUCCESS',
            data:[{}]
        }
    }
}


module.exports = EnteryController;
