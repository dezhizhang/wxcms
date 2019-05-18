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
                token:"de6465trhfhrtrt65464gfd66456"
            }
        }
    }
}


module.exports = EnteryController;
