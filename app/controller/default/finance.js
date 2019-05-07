'use strict';


const fs = require('fs');
const pump = require('pump');

const Controller = require('egg').Controller;

class FinanceController extends Controller {

    async menuList() {
         this.ctx.body = {
             code:200,
             msg:'SUCCESS',
             data:{
                menus:['1111']
             }
         }
    }
    //融资订单列表
    async list() {
        let result = this.ctx.request.body;
        console.log(result);

        this.ctx.body = {
            code:200,
            msg:'SUCCESS',
            data:[]
        }
    }

    //用户登录
    async login() {
        let result = this.ctx.request.body;
        console.log(result);
        
        this.ctx.body = {
            code:200,
            msg:'SUCCESS',
            data:[]
        }
    }


}


module.exports = FinanceController;
