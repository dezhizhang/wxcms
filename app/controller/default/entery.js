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
                "token":"skdfjdhfdsgbfjdsjdskfndsfbjbdfvffjdsn",
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
    async getUserBase() {
        let result = this.ctx.request.body;
        this.ctx.body = {
            code:200,
            msg:'SUCCESS',
            data:{
                "name":"张三",
                "idNo":"440311198802142571",
                "certFront":"",
                "certBack":""
            },
            timestamp:"1556000445"

        }
    }
    //文件上传接口
    async infoResure() {
        let result = this.ctx.request.body;
        this.ctx.body = {
            code:200,
            msg:'验证成功',
            data:{},
            timestamp:'1556000445'
        }
    }
    //设置登录密码
    async setPassword() {
        let result = this.ctx.request.body;
        this.ctx.body = {
            code:200,
            msg:'重置密码成功',
            data:{},
            timestamp:'1556000445' 

        }
    }
    //申请证书
    async applyCert() {
        let result = this.ctx.request.body;
        this.ctx.body = {
            code:200,
            msg:'SUCCESS',
            data:{},
            timestamp:'1556000445'
        }
    }
    //渠道信息
    async manageList() {
        let result = this.ctx.request.body;
        this.ctx.body = {
            code:200,
            msg:'SUCCESS',
            data:[
                {
                    "channelName":"",
                    "channelCode":""
                }
            ]
        }

    }
    //获取所有有管理权限的渠道信息
    async orderManageList() {
        let result = this.ctx.request.body;
        this.ctx.body = {
            code:200,
            msg:'SUCCESS',
            data:[
                {
                    "channelName":"",
                    "channelCode":""
                }
            ]
        }
    }
    //获取有关联权限的的产品信息
    async productManageList() {
        let result = this.ctx.request.body;
        this.ctx.body = {
            code:200,
            msg:'SUCCESS',
            data:[
                {
                    "productCode":"11111",
                    "productName":"22222"
                }
            ]
        }
    }
    //获取所有有管理权限的业务类型信息
    async bizTypeManageList() {
        let result = this.ctx.request.body;
        this.ctx.body = {
            code:200,
            msg:'SUCCESS',
            data: [
                {
                    "channelName":"",
                    "channelCode":""
                }
            ]
        }
    }
    //显示融资订单列表
    async orderList() {
        let result = this.ctx.request.body;
        this.ctx.body = {
            code:200,
            msg:'SUCCESS',
            data:[{
                    "bizNo":"融资订单ID",
                    "assetChannelNo":"资产渠道",
                    "userNo":"融资用户",
                    "productNo":"产品名称",
                    "businessTypeNo":"业务类型",
            }]
        }
    }
    //显示融资订单审核列表
    async entryList() {
        let result = this.ctx.request.body;
        let t = new Date()
        this.ctx.body = {
            code:200,
            msg:"SUCCESS",
            timestamp:"",
            data:[
                {
                    "id":1232323,
                    "assetChannelNo":"中安",
                    "name":"张三",
                    "bizNo":"XZ34835434Y4834",
                    "taskType":	"自营",
                    "createdDate":t.getTime(),
                    "status":"1",
                    "auditNo":"2042",
                    "userType":"1",
                    "siFinal":true
                }
            ]
        }
    }

}


module.exports = EnteryController;
