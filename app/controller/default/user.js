const fs = require('fs');
const pump = require('pump');

const Controller = require('egg').Controller;

class UserController extends Controller {

    //获取用户地址
    async address() {
        let user_id = this.ctx.query.user_id
        console.log(user_id);
        
       

        let result = await this.ctx.model.Address.find({'_id':id});

        this.ctx.body = {
            code:200,
            message:'获取用户地址成功',
            success:true,
            data:result
        }
    }

    //保在用户地址接口
    async saveAddress() {
        let result = this.ctx.request.body;
        let address = new this.ctx.model.Address(result);

        await address.save()

        this.ctx.body = {
            code:200,
            message:'保在用户地址成功',
            success:true
        }


        

    }
    async token() {
        this.ctx.body = {
            code:200,
            message:'hello'
        }
    }

    //用户支付接口
    async pay() {
        this.ctx.body = {
            code:200,
            message:'支付成功',
            success:true
        }
    }

    //用户订单列表
    async order() {
        let page = this.ctx.query.page;

        let result = await this.ctx.model.Theme.find().sort({"_id":1}).limit(10)
       
        this.ctx.body = {
            code:200,
            message:'订单列表获取成功',
            success:true,
            data:result
        }


    }
    //qq上传接口
    async uploadList() {
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
        //增加商品信息
        let list =new this.ctx.model.List(formFields);    
        var result=await list.save();
        this.ctx.body = {
            code:200,
            message:'上传成功'
        }
    }

    //qq获取接口
    async list() {
        let result = this.ctx.request.body;
        let mobile = result.mobile;


        if(mobile) {
            let result = await this.ctx.model.List.find();
            let total = await this.ctx.model.List.find().count()
            this.ctx.body = {
                code:200,
                msg:'SUCCESS',
                data:{
                    total:total,
                    rows:result
                }
            }
        } else {
            this.ctx.body = {
                code:404,
                msg:'mobile是必传的参数',
                data:{}
            }
        }
        

    }

    //分期产品获取接口
    async product() {
        let result = this.ctx.request.body;

        let data = await this.ctx.model.ProductList.find();
        let total = await this.ctx.model.ProductList.find().count();
        this.ctx.body = {
            code:200,
            msg:'SUCCESS',
            data:{
                total:total,
                rows:data
            }
        }
    }

    //分期产品获取接口上传接口
    async productList() {
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
        //增加商品信息
        let list =new this.ctx.model.ProductList(formFields);    
        var result=await list.save();
        this.ctx.body = {
            code:200,
            msg:'上传成功'

        }
    }

    async sendLoginCode() {
        let mobile = this.ctx.request.body.mobile;
        if(mobile) {
            this.ctx.body = {
                code:200,
                msg:'SUCCESS',
                data:null
            }
        } else {
            this.ctx.body = {
                code:404,
                msg:'传入的参数不对',
                data:null
            }
        }
    }


    //订单详情
    async detail() {
        let result = this.ctx.request.body;
        this.ctx.body = {
            code:200,
            msg:'SUCCESS',
            data:{
                "bizNo":'11111',
                "applyAmt":'12000.00',
                "status": '审核中',
                "term":'12',
                "rate":'7',
                "firstPay":'1000',
                "everyRepay":'1050',
                "repayWay":'等本息本',
                "totalInterest":'500000',
                "repayType":'线下转账还款',
                "interestDate":"2019-12-10",
                "curDueDate":"5",
                "accountName":'深圳xxxx保险有限公司',
                "accountId":'6236683166963636969',
                "bankBranchName":'中国银行深圳南山分行营业部',
            }
        }
    }

    //用户签名
    async sign() {
        let result = this.ctx.request.body;
        if(result.sign && result.bizNo) {
            this.ctx.body = {
                code:200,
                msg:'SUCCESS',
                data:null
            }
        } else {
            this.ctx.body = {
                code:500,
                msg:'签名失败',
                data:null
            }
        }
       
    }

    //用户还款计划
    async replayPlans() {
        let request = this.ctx.request.body;
        this.ctx.body = {
            code:200,
            msg:'SUCCESS',
            data:{
                replayPlans:[
                    {
                        "curTerm":1,
                        "curDueDate":'2019-3-1',
                        "capital":'4000',
                        "interest":'500',
                        "totalRepayment":4500,
                        "billStatus":'未到期/已还款/逾期/逾期已还款'
                    }
                ]
            }
        }
    }





    //智数平台用户登录
    async login() {
        let result = this.ctx.request.body;
        
        let data = this.ctx.model.User.find(result);
      
        if(result.mobile && result.code ==6666) {
            this.ctx.body = {
                code:200,
                msg:'SUCCESS',
                data:{
                    baseMatchRes:'已核身' 
                }
            }
        } else {
           this.ctx.body = {
                code:200,
                msg:"SUCCESS",
                data:{
                    baseMatchRes:'未核身'
                }
           }

        }

    
    }

    //用户实名认证
    async verifiyInfo() {
        let mobile = this.ctx.request.body.mobile;
        let data = await this.ctx.model.Card.find();
    
        if(mobile) {
            this.ctx.body = {
                code:200,
                msg:'SUCCESS',
                data:data
            }
        }

    }

    //身份实别
    async ocrVerifiy() {
        let result = this.ctx.request.body;
        this.ctx.body = {
            code:200,
            msg:'SUCCESS',
            data:null
        }
    }

    //身份证上传接口
    async uploadVerifiyInfo() {
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
        //增加商品信息
        let list =new this.ctx.model.Card(formFields);    
        var result=await list.save();
        this.ctx.body = {
            code:200,
            message:'上传成功'
        }
    }

}

module.exports = UserController;
