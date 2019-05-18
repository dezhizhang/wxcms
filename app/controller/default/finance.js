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
                menuList:{

                }
             }
        }
    }

    //用户登录
    async login() {
        let result = this.ctx.request.body;
        console.log(typeof result.loginName)
        if(result.loginName == undefined && result.password == undefined) {
            this.ctx.body = {
                code:404,
                msg:'FAIL',
                data:"用户名和密码不能为空"
            }
        } else if(result.loginName == undefined) {
            this.ctx.body = {
                code:404,
                msg:'FAIL',
                data:"用户名不能为空"
            }
        } else if(result.password == undefined) {
            this.ctx.body = {
                code:404,
                msg:'FAIL',
                data:"密码不能为空"
            }
        } else {
            this.ctx.body = {
                code:200,
                msg:"SUCCESS",
                data:{
                    token:'sfksfkhhfdskjfdjhfkdfdjbfsdajhfdsjafbassdfjdsasjfhbfdjk'
                }
            }
        }
      
    }

    //审核列表
    async auditList() {
        let result = this.ctx.query;
        if(result.qudao!='ALL') {
            this.ctx.body = {
                code:200,
                msg:'SUCCESS',
                data:{
                    "total": 2,
                    "list": [
                        {
                            "id": 2,
                            "auditLvlOrder": 1,
                            "channelName": "渠道B",
                            "typeName": "用户审核（企业）",
                            "auditLvl": "1",
                            "updateTime": 1556619498000,
                            "available": true
                        },
                        {
                            "id": 3,
                            "auditLvlOrder": 2,
                            "channelName": "渠道C",
                            "typeName": null,
                            "auditLvl": "2",
                            "updateTime": 1556619498000,
                            "available": true
                        }
                    ],
                    "pageNum": 0,
                    "pageSize": 10,
                    "size": 2,
                    "startRow": 1,
                    "endRow": 2,
                    "pages": 1,
                    "prePage": 0,
                    "nextPage": 1,
                    "isFirstPage": false,
                    "isLastPage": false,
                    "hasPreviousPage": false,
                    "hasNextPage": true,
                    "navigatePages": 10,
                    "navigatepageNums": [
                        1
                    ],
                    "navigateFirstPage": 1,
                    "navigateLastPage": 1,
                    "lastPage": 1,
                    "firstPage": 1
                }
            }
        } else {
            this.ctx.body = {
                code:200,
                msg:'SUCCESS',
                data:{
                    total:2,
                    rows:[
                        {
                            'accountId':'1',
                            'assetsChannel':'管理员a',
                            'type':'中控-超管',
                            'cengJi':'蔡xx',
                            'phone':'138000138000',
                            'status':'0',
                            'lastLoginTime':'2019-04-03 11:33:22'
                        },
                        {
                            "accountId":"2",
                            "assetsChannel":"管理员a",
                            "type":"中控-超管",
                            "cengJi":"关云长",
                            "phone":"138000138000",
                            "status":"1",
                            "lastLoginTime":"2019-04-03 11:33:22"
                        }
                    ]
                }
            }
        }

      
    }
    //新建审核配置
    async addConfig() {
        let result = this.ctx.request.body;
        this.ctx.body = {
            code:200,
            msg:'SUCCESS',
            data:{
                "uid": "1",
                "username": "12154545",
                "name": "吴系挂",
                "groupid": 2 ,
                "reg_time": "1436864169",
                "last_login_time": "0",
            }
        }
    }
    //修改审核配
    async auditUpdate() {
        let result = this.ctx.request.body;
        this.ctx.body = {
            code:200,
            msg:'SUCCESS',
            data:{
                "uid": "1",
                "username": "12154545",
                "name": "吴系挂",
                "groupid": 2 ,
                "reg_time": "1436864169",
                "last_login_time": "0",
            }
        }
    }
    //管理员列表
    async adminList() {
        let result = this.ctx.query;
    
        if(result.limit ) {
            this.ctx.body = {
                code:200,
                msg:'SUCCESS',
                data: {
                    "total": 22,
                    "list": [
                        {
                            "id": 2,
                            "loginName": "shuangj",
                            "roleName": "todo 角色名",
                            "name": "李四",
                            "mobile": "13888888888",
                            "lastLoginTime": 1556598745878,
                            "userNo": "T111111222",
                            "available": true
                        },
                        {
                            "id": 3,
                            "loginName": "jack",
                            "roleName": "todo 角色名",
                            "name": "王五",
                            "mobile": "13888883676",
                            "lastLoginTime": 1556176761000,
                            "userNo": "T111111367",
                            "available": true
                        },
                        {
                            "id": 4,
                            "loginName": "zhangshan",
                            "roleName": "todo 角色名",
                            "name": "老六",
                            "mobile": "13888883676",
                            "lastLoginTime": 1556176761000,
                            "userNo": "T1111118765",
                            "available": true
                        },
                        {
                            "id": 5,
                            "loginName": "vip1111",
                            "roleName": "todo 角色名",
                            "name": "苏七",
                            "mobile": "13888883676",
                            "lastLoginTime": 1556176761000,
                            "userNo": "T111111863",
                            "available": true
                        },
                        {
                            "id": 6,
                            "loginName": "jack123123",
                            "roleName": "todo 角色名",
                            "name": "吴八",
                            "mobile": "13888883676",
                            "lastLoginTime": 1556176761000,
                            "userNo": "T111111444",
                            "available": true
                        },
                        {
                            "id": 7,
                            "loginName": "112jack",
                            "roleName": "todo 角色名",
                            "name": "陈十",
                            "mobile": "13888883676",
                            "lastLoginTime": 1556176761000,
                            "userNo": "T11111133",
                            "available": true
                        },
                        {
                            "id": 8,
                            "loginName": "jack45555",
                            "roleName": "todo 角色名",
                            "name": "肖十一",
                            "mobile": "13888883676",
                            "lastLoginTime": 1556176761000,
                            "userNo": "T1111117766",
                            "available": true
                        },
                        {
                            "id": 9,
                            "loginName": "jackma",
                            "roleName": "todo 角色名",
                            "name": "赵十二",
                            "mobile": "13888883676",
                            "lastLoginTime": 1556176761000,
                            "userNo": "T111111566",
                            "available": true
                        },
                        {
                            "id": 1,
                            "loginName": "1",
                            "roleName": "todo 角色名",
                            "name": "张三",
                            "mobile": "13888888888",
                            "lastLoginTime": 1557231346653,
                            "userNo": "T1111113",
                            "available": false
                        },
                        {
                            "id": 11,
                            "loginName": "new 1123123",
                            "roleName": "todo 角色名",
                            "name": null,
                            "mobile": null,
                            "lastLoginTime": 1557218233797,
                            "userNo": "0aec909a04794f29affb70bf66bc6349",
                            "available": true
                        }
                    ],
                    "pageNum": 0,
                    "pageSize": 10,
                    "size": 10,
                    "startRow": 1,
                    "endRow": 10,
                    "pages": 3,
                    "prePage": 0,
                    "nextPage": 1,
                    "isFirstPage": false,
                    "isLastPage": false,
                    "hasPreviousPage": false,
                    "hasNextPage": true,
                    "navigatePages": 10,
                    "navigatepageNums": [
                        1,
                        2,
                        3
                    ],
                    "navigateFirstPage": 1,
                    "navigateLastPage": 3,
                    "firstPage": 1,
                    "lastPage": 3
                    }
            }
        } else {
            this.ctx.body = {
                code:200,
                msg:'SUCCESS',
                data: {
                    "total": 2,
                    "list": [
                        {
                            "id": 2,
                            "loginName": "shuangj",
                            "roleName": "todo 角色名",
                            "name": "李四",
                            "mobile": "13888888888",
                            "lastLoginTime": 1556598745878,
                            "userNo": "T111111222",
                            "available": true
                        },
                        {
                            "id": 3,
                            "loginName": "jack",
                            "roleName": "todo 角色名",
                            "name": "王五",
                            "mobile": "13888883676",
                            "lastLoginTime": 1556176761000,
                            "userNo": "T111111367",
                            "available": true
                        },
                     
                    ],
                    "pageNum": 0,
                    "pageSize": 10,
                    "size": 10,
                    "startRow": 1,
                    "endRow": 10,
                    "pages": 3,
                    "prePage": 0,
                    "nextPage": 1,
                    "isFirstPage": false,
                    "isLastPage": false,
                    "hasPreviousPage": false,
                    "hasNextPage": true,
                    "navigatePages": 10,
                    "navigatepageNums": [
                        1,
                        2,
                        3
                    ],
                    "navigateFirstPage": 1,
                    "navigateLastPage": 3,
                    "firstPage": 1,
                    "lastPage": 3
                    }
            }
        }
        
    }
    //新增管理员
    async adminAdd() {
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
        console.log(formFields);




        //增加商品信息
        let category =new this.ctx.model.Category(formFields);    
        let result=await category.save();
        this.ctx.body = {
            code:200,
            msg:'新增管理员成功!'
        }
    }
    //修改管理员接口
    async adminUpdate() {
        let result = this.ctx.request.body;
        this.ctx.body = {
            code:200,
            msg:'修改管理员成功！'
        }
    }
    //获取所有角色
    async roleList() {
        let result = this.ctx.query;
        console.log(result)
      
        this.ctx.body = {
            code:200,
            msg:'SUCCESS',
            data:{
                "total": 3,
                "list": [
                    {
                        "id": 1,
                        "name": "业管-a",
                        "description": "业管-a",
                        "createdTime": 1556419246000,
                        "moduleName": "系统a",
                        "enterpriseName": "广州知数信息技术有限公司",
                        "available": true
                    },
                    {
                        "id": 2,
                        "name": "业管-b",
                        "description": "业管-b",
                        "createdTime": 1556419246000,
                        "moduleName": "系统B",
                        "enterpriseName": "广州知数信息技术有限公司",
                        "available": true
                    },
                    {
                        "id": 3,
                        "name": "超管jjjjjj",
                        "description": "超管jjjjjjjj是系统管理员",
                        "createdTime": 1557193099687,
                        "moduleName": null,
                        "enterpriseName": "广州xxxx公司",
                        "available": false
                    }
                ],
                "pageNum": 0,
                "pageSize": 10,
                "size": 3,
                "startRow": 1,
                "endRow": 3,
                "pages": 1,
                "prePage": 0,
                "nextPage": 1,
                "isFirstPage": false,
                "isLastPage": false,
                "hasPreviousPage": false,
                "hasNextPage": true,
                "navigatePages": 10,
                "navigatepageNums": [
                    1
                ],
                "navigateFirstPage": 1,
                "navigateLastPage": 1,
                "firstPage": 1,
                "lastPage": 1
            }
        }
    }
    //查看角色信息
    async roleDetail() {
        let result = this.ctx.query;
        this.ctx.body = {
            code:200,
            msg:'SUCCESS',
            data:{
                "roleId":"2",
                "roleName":"中控-超管",
                "description":"我是一段描述",
                "updatedTime":"2019-04-03 11:33:22",
                "createdTime":"2019-04-03 11:33:22",
                "createdBy":"关云长",
                "updatedBy":"张飞",
                "isAvailable":true,
                "displayName":"展示模块",
                "moduleId":"4"
            }
        }
    }
    //新增角色
    async roleAdd() {
        let result = this.ctx.request.body;
        this.ctx.body = {
            code:200,
            msg:'SUCCESS',

        }
    }
    //删除角色
    async roleDelete() {
        let result = this.ctx.request.body;
        if(result.roleId) {
            this.ctx.body = {
                code:200,
                msg:'SUCCESS',
                data:'删除角色成功'
            }
        } else {
            this.ctx.body = {
                code:400,
                msg:"FAIL",
                data:'传入的参数有误'
            }
        }
        
    }
    //更新角色
    async roleUpdate() {
        let result = this.ctx.request.body;
        if(result.moduleId && result.roleId) {
            this.ctx.body = {
                code:200,
                msg:'SUCCESS',
                data:'修改成功'
            }
        } else {
            this.ctx.body = {
                code:200,
                msg:'SUCCESS',
                data:'传入的参数有误'
            }
        }
       
    }
    //修改登录密码
    async changePassword() {
        let result = this.ctx.request.body;
        this.ctx.body = {
            code:200,
            msg:'修改成功！'
        }
    }
    //修改交易密码
    async changePin() {
        let result = this.ctx.request.body;
        this.ctx.body = {
            code:200,
            msg:'修改成功！'
        }
    }
    //个人账号管理
    async sysUserInfo() {
        let result = this.ctx.query;
        if(result.userId) {
            this.ctx.body = {
                code:200,
                msg:'SUCCESS',
                data:{
                    "userId": "LPQD1211111988771",
                    "createTime": "12154545",
                    "userName": "吴系挂",
                    "affiliatedCompany": 2,
                    "name": "关云长",
                    "idNo": "421087199904094456",
                    "idCardFront": "/upload?file=f997776",
                    "idCardReverse": "/upload?file=f997776",
                    "loginPassword": "2344444",
                    "transactionPin": "222111",
                    "signCertificate": "/upload?file=f997776"
                }
            }
        } else {
            this.ctx.body = {
                code:404,
                msg:'FAIL',
                data:null
            }
        }
       
    }
    //融资订单表表
    async orderList() {
        let result = this.ctx.query;
        this.ctx.body = {
            code:200,
            msg:'SUCCESS',
            data:{
                total: 300,
                rows: [
                    {
                        "bizNo": "10001",
                        "assetChannel": "QD0001",
                        "userName": "张三",
                        "productName": "车贷趣分期",
                        "businessType": "车贷",
                        "applyAmt": 200000,
                        "applyTime": "20190101",
                        "status": "审核中",
                        "interestDate": null,
                        "dueDate": null
                    },{
                        "bizNo": "10002",
                        "assetChannel": "QD0001",
                        "userName": "李四",
                        "productName": "车贷趣分期",
                        "businessType": "车贷",
                        "applyAmt": 200000,
                        "applyTime": 20190102,
                        "status": "审核中",
                        "interestDate": null,
                        "dueDate": null
                    }
                ]
            }
        }
    }
    //融资订单筛选
    async orderListSearch() {
        let result = this.ctx.request.body;
        this.ctx.body = {
            code:200,
            msg:'SUCCESS',
            data:{
                total:1,
                rows:[
                    {
                        "bizNo": "10001",
                        "assetChannel": "QD0001",
                        "userName": "张三",
                        "productName": "车贷趣分期",
                        "businessType": "车贷",
                        "applyAmt": 200000,
                        "applyTime": "20190101",
                        "status": "审核中",
                        "interestDate": null,
                        "dueDate": null
                    }
                ]
            }
        }

    }
    //融资订单详细信息
    async orderInfo() {
        let result = this.ctx.query;
        this.ctx.body = {
            code:200,
            msg:'SUCCESS',
            data:{
                "orderBasicInfo": {
                    "customerNo": "88",
                    "userNo": "88",
                    "assetChannelNo": "ZC000001",
                    "assetChannelName": "中安",
                    "userName": "企鹅",
                    "userType": "个人",
                    "applyTime": 1554794695000,
                    "productName": "逸百年车险分期(协议代扣)",
                    "typeName": "汽车分期",
                    "bizNo": "222",
                    "applyAmt": "5000.00",
                    "repayWay": "等本等息",
                    "orderApplyTime": null,
                    "termLimit": null,
                    "repayType": "1",
                    "loanCost": "5.00",
                    "repayDate": null,
                    "loanAmt": null,
                    "termType": null,
                    "repayLimit": "6",
                    "interestDate": 1555516800000,
                    "dueDate": 1559232000000,
                    "totalRepay": null,
                    "repayDesc": null,
                    "realAmt": null,
                    "interestRate": "0.0700",
                    "status": "审核中"
                },
                "repayPlans": [
                    {
                        "curTerm": "1",
                        "curDueDate": 1559232000000,
                        "totalRepayment": "5000.00",
                        "capital": "2770.29",
                        "interest": "2.00",
                        "hadRepayment": null,
                        "billStatus": "未到期",
                        "repaySuccessDate": 1556553600000,
                        "remark": "test",
                        "overdueAmt": null
                    }
                ],
                "attachInfo": [
                    {
                        "attType": null,
                        "attCtxNo": null,
                        "fileId": "4frsf"
                    },
                    {
                        "attType": null,
                        "attCtxNo": null,
                        "fileId": "rdg5463456"
                    }
                ],
                "receiveAccountInfo": [
                    {
                        "receiveAccountType": "收款账户",
                        "receiveAccountName": "中国人民财产保险股份有限公司广州市分公司",
                        "receiveAccountId": "9558853602000477645",
                        "receiveBankNo": null,
                        "receiveBankBranchName": "中国工商银行广州市第一支行",
                        "receiveBankCode": null
                    }
                ],
                 "payAccountInfo": [
                    {
                        "payAccountType": "还款账户",
                        "payAccountName": "中国人民财产保险股份有限公司广州市分公司",
                        "payAccountId": "97654g54354211",
                        "payBankNo": "工商银行",
                        "payBankBranchName": "中国工商银行广州市第一支行",
                        "payBankCode": null
                    }
                ],
                "subjectInfo": [
                    {
                        "subjectTypeName": null,
                        "subjectNumber": 1
                    }
                ],
                "auditAttach": [
                    {
                        "attType": "购车合同",
                        "uploader": "凌凌漆",
                        "attCtxNo": "GDT4E5443",
                        "attachFile": "f1d99c9a-4cbe-47c1-a254-596a7a9f299a"
                    },
                    {
                        "attType": "购车合同",
                        "uploader": "凌凌漆",
                        "attCtxNo": "FAK8432055",
                        "attachFile": "f1d99c9a-4cbe-47c1-a254-596a7a9f299a"
                    }
                ],
                "auditRecord": [
                    {
                        "curLvlName": "初审",
                        "auditor": "凌凌漆",
                        "auditTime": "2019-05-07 16:55:27",
                        "auditResult": "通过",
                        "remark": null
                    },
                    {
                        "curLvlName": "复审",
                        "auditor": "凌凌漆",
                        "auditTime": "2019-05-09 16:55:32",
                        "auditResult": "不通过",
                        "remark": null
                    }
                ]
            }
        }
    }
    //融资人详细信息
    async orderUser() {
        let result = this.ctx.query;
        console.log(result);

        this.ctx.body = {
            code:200,
            msg:'SUCCESS',
            data:{
                userInfo: {
                    "channelName": null,
                    "creditScore": null,
                    "userType": "1",
                    "userName": "123",
                    "userNo": "123",
                    "mobile": "123",
                    "idNo": "123",
                    "createdTime": null,
                    "cardType": null
                },
                sponsorInfo: [],
                contactInfo: [{
                    "userName": "tes",
                    "relationship": "同事",
                    "mobile": "123"
                }],
                mateUserInfo: {
                    "updatedTime": null,
                    "liveStatus": null,
                    "liveAddr": null,
                    "carInfo": null,
                    "eduInfo": null,
                    "occupationType": null,
                    "incomeFrom": null,
                    "unitName": null,
                    "unitTel": null,
                    "position": null,
                    "entryDate": null,
                    "bizFlow": null,
                    "monthIncome": null,
                    "acctepMaxRepay": null,
                    "operatYear": null,
                    "payedSocial": null,
                    "yearIncome": null,
                    "gpsInfo": null,
                    "ipAddr": null,
                    "marrInfo": null,
                    "mateName": "peiou",
                    "mateIdNo": "test1",
                    "mateIncomeFrom": "自营",
                    "mateMobile": null,
                    "mateYearIncome": null,
                    "mateUnit": null
                },
                addUserInfo: {
                    "updatedTime": null,
                    "liveStatus": "租借",
                    "liveAddr": "test",
                    "carInfo": "无车",
                    "eduInfo": "大学",
                    "occupationType": "上班人群",
                    "incomeFrom": "工资",
                    "unitName": "test",
                    "unitTel": "110",
                    "position": "test",
                    "entryDate": 1547481600000,
                    "bizFlow": "100000.00",
                    "monthIncome": "5001～9999元",
                    "acctepMaxRepay": "5000.00",
                    "operatYear": null,
                    "payedSocial": "0",
                    "yearIncome": null,
                    "gpsInfo": null,
                    "ipAddr": null,
                    "marrInfo": null,
                    "mateName": null,
                    "mateIdNo": null,
                    "mateIncomeFrom": null,
                    "mateMobile": null,
                    "mateYearIncome": null,
                    "mateUnit": null
                }
            }
        }
    }
    //用户信息列表
    async userList() {
        let result = this.ctx.request.body;
        console.log(result);

        this.ctx.body = {
            code:200,
            msg:'SUCCESS',
            data:{
            total: 2,
            rows: [
                {
                    "channelName": "华城",
                    "creditScore": "90",
                    "userType": "个人",
                    "userName": "arya",
                    "userNo": "88",
                    "mobile": "15815854001",
                    "idNo": "440982199409090909",
                    "createdTime": "2019-04-17 15:35:07"
                },
                {
                    "channelName": "华城",
                    "creditScore": "58",
                    "userType": "个人",
                    "userName": "jessy",
                    "userNo": "22",
                    "mobile": "18718877717",
                    "idNo": "440982198098909",
                    "createdTime": "2019-04-17 15:35:07"
                }
            ]
            }
        }
    }
    //用户详细信息
    async userInfo() {
        let result = this.ctx.query;
        this.ctx.body = {
            code:200,
            msg:'SUCCESS',
            data:{
                "contactInfo": {
                        "channelName": '111',
                        "creditScore": '111',
                        "userType": "1",
                        "userName": "123",
                        "userNo": "123",
                        "mobile": "123",
                        "idNo": "123",
                        "createdTime": '111',
                        "cardType": '111'
                    },
       
                    "nuclearInfo":{

                    },
                    
                    "basicUserInfo": {
                        "channelName": "test",
                        "creditScore": '11',
                        "userType": "个人",
                        "userName": "123",
                        "userNo": "123",
                        "mobile": "123",
                        "idNo": "123",
                        "createdTime": '111',
                        "cardType": "身份证"
                      },
                      "addUserInfo": {
                        "updatedTime": '111',
                        "liveStatus": "租借",
                        "liveAddr": "test",
                        "carInfo": "无车",
                        "eduInfo": "大学",
                        "occupationType": "上班人群",
                        "incomeFrom": "工资",
                        "unitName": "test",
                        "unitTel": "110",
                        "position": "test",
                        "entryDate": 1547481600000,
                        "bizFlow": "100000.00",
                        "monthIncome": "5001～9999元",
                        "acctepMaxRepay": "5000.00",
                        "operatYear": '111',
                        "payedSocial": '111',
                        "yearIncome": '111',
                        "gpsInfo": '111',
                        "ipAddr": '111',
                        "marrInfo": '111',
                        "mateName": '11',
                        "mateIdNo": '1111',
                        "mateIncomeFrom": '111',
                        "mateMobile": '111',
                        "mateYearIncome": '111',
                        "mateUnit": '111'
                      },
                      "mateInfo": {
                        "updatedTime": '111',
                        "liveStatus": '111',
                        "liveAddr": '111',
                        "carInfo": '111',
                        "eduInfo": '111',
                        "occupationType": '111',
                        "incomeFrom": '111',
                        "unitName": '111',
                        "unitTel": '111',
                        "position": '111',
                        "entryDate": '111',
                        "bizFlow": '111',
                        "monthIncome": '2222',
                        "acctepMaxRepay": '222',
                        "operatYear": '3333',
                        "payedSocial": '333',
                        "yearIncome": '4444',
                        "gpsInfo": '5555',
                        "ipAddr": '666',
                        "marrInfo": '6666',
                        "mateName": "peiou",
                        "mateIdNo": "test1",
                        "mateIncomeFrom": "自营",
                        "mateMobile": '777',
                        "mateYearIncome": '888',
                        "mateUnit": '9999'
                      },
                    
                }
        }
    }
    //用户列表(企业)
    async enterpriseList() {
        let result = this.ctx.query;
        this.ctx.body = {
            code:200,
            msg:'SUCCESS',
            data:{
                total: 2,
                rows: [{
                        "userNo": "LP12233433333",
                        "userName": "关云长",
                        "userType": "企业",
                        "channelName": "渠道A",
                        "creditScore": 87.45,
                        "createdTime": "2019-04-09 11:22:11"
                    },
                    {
                        "userNo": "LP12233444444",
                        "userName": "张飞",
                        "userType": "企业B",
                        "channelName": "渠道B",
                        "creditScore": 66.45,
                        "createdTime": "2019-05-09 11:22:11"
                    }
                ]
            }
        }
    }
    //用户详情（企业）
    async enterpriseInfo() {
        let result = this.ctx.query;
        this.ctx.body = {
            code:200,
            msg:'SUCCESS',
            data:{
                basicUserInfo: {
                    "channelName": "渠道1",
                    "userNo": "LPC3398764646",
                    "userName": "关云长",
                    "userType": "企业",
                    "createdTime": "2019-04-09 11:22:44",
                    "creditScore": 838.62
                },
                businessInformation: {
                    "enterpriseName": "某某企业",
                    "creditCode": "8877 3333 3333 4444",
                    "legalRepresentative": "王大龙",
                    "businessLicenseTimeLimit": "无期限/2019-04-09",
                    "businessLicenseAttachment": "/upload?file=F33977",
                    "bankAccountOpeningPermit": "/upload?file=F33977",
                    "identificationOflegalRepresentative": "/upload?file=F33977",
                    "companyPolicy": "/upload?file=F33977",
                    "enterpriseCreditInquiryResult": "/upload?file=F33977",
                    "enterpriseCreditAauthorization": "/upload?file=F33977"
                },
                accountInformation: {
                    "paybackAccountName": "关云长科技有限公司",
                    "paybackAccountNumber": "555673345666777",
                    "openAccountCity": "广东省天河区",
                    "bank": "广州市天河区招商银行美林支行"
                },
                legalRepresentative: {
                    "actualName": "潘长江",
                    "idNo": "421087199903022231",
                    "phoneNumber": "13888888888",
                    "personalCreditCheck": "/upload?file=f333333",
                    "idCardFront": "/upload?file=f333333",
                    "idCardReverse": "/upload?file=f333333",
                    "isFace": "/upload?file=f333333",
                    "identityConsistency": "/upload?file=f333333",
                    "biopsyResults": "/upload?file=f333333",
                    "contrastSimilarity": "80.55",
                    "personalCredit": "/upload?file=f333333"
                },
                enterpriseManager: {
                    "realName": "关云长",
                    "idNo": "4210871999005067833",
                    "phoneNumber": "13888888888",
                    "identityConsistency": "1",
                    "biopsyResults": "0",
                    "contrastSimilarity": "55.66",
                    "idCardFront": "/upload?file=f333333",
                    "idCardReverse": "/upload?file=f333333",
                    "isFace": "/upload?file=f333333",
                    "powerOfAttorney": "/upload?file=f333333"
                },
                channelInformation: [{
                    "authorizedChannels": "渠道A",
                    "authorizedTime": "2019-05-05 11:11:00",
                    "licensingBusiness": "信用查询、核身鉴权"
                }, {
                    "authorizedChannels": "渠道A",
                    "authorizedTime": "2019-05-05 11:11:00",
                    "licensingBusiness": "信用查询、核身鉴权"
                }],
                labelArray: ["信用良好", "高评分"]
            }
        }
    }
    //获取所有模块
    async moduleList() {
        let result = this.ctx.query;
        this.ctx.body = {
            code:200,
            msg:'SUCCESS',
            data:{
                total: 2,
                rows: [{
                        "id": 1,
                        "moduleName": "xxx模块",
                        "isAvailable": true,
                        "loginUrl": "http://192.168.1.1:2222/login?sdfsdfsdf",
                        "supportPerson": "张三丰",
                        "createdTime": "2019-04-16 15:32:17",
                        "desc": "我是一段描述",
                        "configId": 1,
                        "isBelongSso": false,
                        "moduleUrl": "http://192.168.1.1:2222/sysRisk",
                        "smallPic": "http://xxx.xxx.x.x:8888/pic.png",
                        "defaultPage": "/user/index.html",
                        "zorder": 1
                    },
                    {
                        "id": 2,
                        "moduleName": "xxx模块",
                        "isAvailable": true,
                        "loginUrl": "http://192.168.1.1:2222/login?sdfsdfsdf",
                        "supportPerson": "张三丰",
                        "createdTime": "2019-04-16 15:32:17",
                        "desc": "我是一段描述",
                        "configId": 1,
                        "isBelongSso": false,
                        "moduleUrl": "http://192.168.1.1:2222/sysRisk",
                        "smallPic": "http://xxx.xxx.x.x:8888/pic.png",
                        "defaultPage": "/user/index.html",
                        "zorder": 1
                    }
                ]
            }
        }
    }
    //查看模块信息
    async moduleDetail() {
        let result = this.ctx.query;
        this.ctx.body = {
            code:200,
            msg:'SUCCESS',
            data:{
                "id": 1,
                "moduleName": "xxx模块",
                "isAvailable": true,
                "loginUrl": "http://192.168.1.1:2222/login?sdfsdfsdf",
                "supportPerson": "张三丰",
                "createdTime": "2019-04-16 15:32:17",
                "desc": "我是一段描述",
                "configId": 1,
                "isBelongSso": false,
                "moduleUrl": "http://192.168.1.1:2222/sysRisk",
                "smallPic": "http://xxx.xxx.x.x:8888/pic.png",
                "defaultPage": "/user/index.html",
                "zorder": 1
            }
        }

    }
    //增加模块接口
    async moduleAdd() {
        let result = this.ctx.request.body;
        this.ctx.body = {
            code:200,
            msg:'SUCCESS',
            data:{
                "moduleName": "xxx模块",
                "isAvailable": true,
                "loginUrl": "http://192.168.1.1:2222/login?sdfsdfsdf",
                "supportPerson": "张三丰",
                "desc": "我是一段描述",
                "configId": 1,
                "isBelongSso": false,
                "moduleUrl": "http://192.168.1.1:2222/sysRisk",
                "smallPic": "http://xxx.xxx.x.x:8888/pic.png",
                "defaultPage": "/user/index.html",
                "zorder": 1
            }
        }
    }
    //删除模块
    async moduleDelete() {
        let result = this.ctx.query;
        this.ctx.body = {
            code:200,
            msg:'删除成功',
        }
    }
    //更新模块
    async moduleUpdate() {
        let result = this.ctx.request.body;
        this.ctx.body = {
            code:200,
            msg:'SUCCESS',
            data:{
                "id": 1,
                "moduleName": "xxx模块",
                "isAvailable": true,
                "loginUrl": "http://192.168.1.1:2222/login?sdfsdfsdf",
                "supportPerson": "张三丰",
                "desc": "我是一段描述",
                "configId": 1,
                "isBelongSso": false,
                "moduleUrl": "http://192.168.1.1:2222/sysRisk",
                "smallPic": "http://xxx.xxx.x.x:8888/pic.png",
                "defaultPage": "/user/index.html",
                "zorder": 1
            }
        }
    }
    //查看所有用户组
    async userGroupList() {
        let result = this.ctx.query;
        this.ctx.body = {
            code:200,
            msg:'SUCCESS',
            data:{
                total: 300,
                rows: [{
                            "id": 2,
                            "name": "业务组b",
                            "description": "这是业务组的描述",
                            "enterpriseId": "11133",
                            "enterpriseNo": "T333erwer3333",
                            "createdBy": "关云长",
                            "updatedBy": "关云长",
                            "isAvailable": false,
                            "groupNo": "G2238ddew3737",
                            "displayName": "用户组显示。",
                            "channelNo": "ch000001",
                            "channelType": "1",
                            "parentGroupId": 22222,
                            "groupLvl": 1,
                            "tenantNo": "t1000000001"
                        },
                        {
                            "id": 2,
                            "name": "业务组b",
                            "description": "这是业务组的描述",
                            "enterpriseId": "11133",
                            "enterpriseNo": "T333erwer3333",
                            "createdBy": "关云长",
                            "updatedBy": "关云长",
                            "isAvailable": false,
                            "groupNo": "G2238ddew3737",
                            "displayName": "用户组显示。",
                            "channelNo": "ch000001",
                            "channelType": "1",
                            "parentGroupId": 22222,
                            "groupLvl": 1,
                            "tenantNo": "t1000000001"
                    }
                ]
            }
        }
    }
    //新增用户组
    async userGroupAdd() {
        let result = this.ctx.request.body;
        this.ctx.body = {
            code:200,
            msg:'SUCCESS',
            data:{
                "name": "业务组a",
                "description": "这是业务组的描述",
                "enterpriseNo": "T3333333",
                "createdBy": "关云长",
                "updatedBy": "关云长",
                "isAvailable": true,
                "groupNo": "G22383737",
                "displayName": "用户组显示"
            }
        }
    }
    //用户组角色更新 
    async userGroupUpdate() {
        let result = this.ctx.request.body;
        this.ctx.body = {
            code:200,
            msg:"修改成功"
        }
    }
    //标的物
    async carInfo() {
        let result = this.ctx.request.body;
        let d = new Date()
        
        if(result.licensePlate == '') {
            this.ctx.body = {
                code:200,
                msg:'SUCCESS',
                data:    [{
                    "licensePlate":"5545888",
                    "ownership":"张三",
                    "vinCode":"123",
                    "engineNo":"123456",
                    "brandModel":"大众",
                    "carCurrentAmt":10000.00,
                    "registryDate":d.getTime(),
                    "carAge":"10",
                    "seatNumber":7,
                    "travelLicenseNo":"张三",
                    "travelLicenseFront":"张三",
                    "travelLicenseBack":"123456",
                    "insuranceNo":"12346",
                    "attList":"合同符附件"
                },{
                    
                        "licensePlate":"5545888",
                        "ownership":"张三",
                        "vinCode":"123",
                        "engineNo":"123456",
                        "brandModel":"大众",
                        "carCurrentAmt":10000.00,
                        "registryDate":d.getTime(),
                        "carAge":"10",
                        "seatNumber":7,
                        "travelLicenseNo":"张三",
                        "travelLicenseFront":"张三",
                        "travelLicenseBack":"123456",
                        "insuranceNo":"12346",
                        "attList":"合同符附件"
                    
                }]
                
            }
        } else {
            this.ctx.body = {
                code:200,
                msg:'SUCCESS',
                data:    [{
                    "licensePlate":"5545888",
                    "ownership":"张三",
                    "vinCode":"123",
                    "engineNo":"123456",
                    "brandModel":"大众",
                    "carCurrentAmt":10000.00,
                    "registryDate":d.getTime(),
                    "carAge":"10",
                    "seatNumber":7,
                    "travelLicenseNo":"张三",
                    "travelLicenseFront":"张三",
                    "travelLicenseBack":"123456",
                    "insuranceNo":"12346",
                    "attList":"合同符附件"
                }]
                
            }
        }
        
    }
    //单标的物
    async policyInfo() {
        let result = this.ctx.request.body;
        console.log(result);  

        if(result.insuranceNo == '') {
            this.ctx.body = {
                code:200,
                msg:'SUCCESS',
                data:[{
                    "insuranceNo":"123456",
                    "bizInsuranceNo":"122",
                    "bizPremium":"100",
                    "bizTime":"2019-2020",
                    "forceInsuPolicyNo":"1233456",
                    "forceInsuPremium":"100",
                    "forceInsuTime":"2019-2024",
                    "carTaxAmount":	100.00,
                    "insureLetter":80.00,
                    "totalPremium":1000.00,
                    "specialClause":"张三",
                    "policyholderName":"李四",
                    "policyholderCard":"123456",
                    "policyholderMobile":"15083356191",
                    "policyholderIdcardFront":"52020219980102701X",
                    "policyholderIdcardBack":"广州",
                    "insuredName":"周华建",
                    "insuredCard":"14312",
                    "insuredMobile":"15083356194",
                    "insuredCertFront":"18356160",
                    "insuredCertBack":"5020201645241",
                    "carOwnerName":"王五",
                    "carOwnerCard":	"41235",
                    "carMobile":"17542996",
                    "carCertFront":"15409448",
                    "carCertBack":"5210155",
                    "riskCode":	"1234556",
                    "riskName":"商业险",
                    "insuranceNumber":"马六",
                    "everyCoverage":"123",
                    "totalCoverage":"1000",
                    "notDeductibleMark":"456",
                    "riskAddType":"7654",
                    "bankName":"中国银行",
                    "bankProv":"广州省",
                    "bankCity":"广州市",
                    "bankBranchName":"广州分行",
                    "accountName":"马六",
                    "accountId":"12345",
                    "destInsuranceNo":"4562",
                    "destBizInsuranceNo":"7654545",
                    "destBizInsuranceSts":"123456",
                    "destForceInsuPolicyNo":"6542020",
                    "destForceInsuPolicySts":"123456",
                    "onlineInvoiceLink":"654121"
                },
                {
                    "insuranceNo":"123456",
                    "bizInsuranceNo":"122",
                    "bizPremium":"100",
                    "bizTime":"2019-2020",
                    "forceInsuPolicyNo":"1233456",
                    "forceInsuPremium":"100",
                    "forceInsuTime":"2019-2024",
                    "carTaxAmount":	100.00,
                    "insureLetter":80.00,
                    "totalPremium":1000.00,
                    "specialClause":"张三",
                    "policyholderName":"李四",
                    "policyholderCard":"123456",
                    "policyholderMobile":"15083356191",
                    "policyholderIdcardFront":"52020219980102701X",
                    "policyholderIdcardBack":"广州",
                    "insuredName":"周华建",
                    "insuredCard":"14312",
                    "insuredMobile":"15083356194",
                    "insuredCertFront":"18356160",
                    "insuredCertBack":"5020201645241",
                    "carOwnerName":"王五",
                    "carOwnerCard":	"41235",
                    "carMobile":"17542996",
                    "carCertFront":"15409448",
                    "carCertBack":"5210155",
                    "riskCode":	"1234556",
                    "riskName":"商业险",
                    "insuranceNumber":"马六",
                    "everyCoverage":"123",
                    "totalCoverage":"1000",
                    "notDeductibleMark":"456",
                    "riskAddType":"7654",
                    "bankName":"中国银行",
                    "bankProv":"广东省",
                    "bankCity":"广州市",
                    "bankBranchName":"广州分行",
                    "accountName":"马六",
                    "accountId":"12345",
                    "destInsuranceNo":"4562",
                    "destBizInsuranceNo":"7654545",
                    "destBizInsuranceSts":"123456",
                    "destForceInsuPolicyNo":"6542020",
                    "destForceInsuPolicySts":"123456",
                    "onlineInvoiceLink":"654121"
                },
        
             
               
                {
                    "insuranceNo":"123456",
                    "bizInsuranceNo":"122",
                    "bizPremium":"100",
                    "bizTime":"2019-2020",
                    "forceInsuPolicyNo":"1233456",
                    "forceInsuPremium":"100",
                    "forceInsuTime":"2019-2024",
                    "carTaxAmount":	100.00,
                    "insureLetter":80.00,
                    "totalPremium":1000.00,
                    "specialClause":"张三",
                    "policyholderName":"李四",
                    "policyholderCard":"123456",
                    "policyholderMobile":"15083356191",
                    "policyholderIdcardFront":"52020219980102701X",
                    "policyholderIdcardBack":"广州",
                    "insuredName":"周华建",
                    "insuredCard":"14312",
                    "insuredMobile":"15083356194",
                    "insuredCertFront":"18356160",
                    "insuredCertBack":"5020201645241",
                    "carOwnerName":"王五",
                    "carOwnerCard":	"41235",
                    "carMobile":"17542996",
                    "carCertFront":"15409448",
                    "carCertBack":"5210155",
                    "riskCode":	"1234556",
                    "riskName":"商业险",
                    "insuranceNumber":"马六",
                    "everyCoverage":"123",
                    "totalCoverage":"1000",
                    "notDeductibleMark":"456",
                    "riskAddType":"7654",
                    "bankName":"中国银行",
                    "bankProv":"广东省",
                    "bankCity":"广州市",
                    "bankBranchName":"广州分行",
                    "accountName":"马六",
                    "accountId":"12345",
                    "destInsuranceNo":"4562",
                    "destBizInsuranceNo":"7654545",
                    "destBizInsuranceSts":"123456",
                    "destForceInsuPolicyNo":"6542020",
                    "destForceInsuPolicySts":"123456",
                    "onlineInvoiceLink":"654121"
                },
                {
                    "insuranceNo":"123456",
                    "bizInsuranceNo":"122",
                    "bizPremium":"100",
                    "bizTime":"2019-2020",
                    "forceInsuPolicyNo":"1233456",
                    "forceInsuPremium":"100",
                    "forceInsuTime":"2019-2024",
                    "carTaxAmount":	100.00,
                    "insureLetter":80.00,
                    "totalPremium":1000.00,
                    "specialClause":"张三",
                    "policyholderName":"李四",
                    "policyholderCard":"123456",
                    "policyholderMobile":"15083356191",
                    "policyholderIdcardFront":"52020219980102701X",
                    "policyholderIdcardBack":"广州",
                    "insuredName":"周华建",
                    "insuredCard":"14312",
                    "insuredMobile":"15083356194",
                    "insuredCertFront":"18356160",
                    "insuredCertBack":"5020201645241",
                    "carOwnerName":"王五",
                    "carOwnerCard":	"41235",
                    "carMobile":"17542996",
                    "carCertFront":"15409448",
                    "carCertBack":"5210155",
                    "riskCode":	"1234556",
                    "riskName":"商业险",
                    "insuranceNumber":"马六",
                    "everyCoverage":"123",
                    "totalCoverage":"1000",
                    "notDeductibleMark":"456",
                    "riskAddType":"7654",
                    "bankName":"中国银行",
                    "bankProv":"广州省",
                    "bankCity":"广州市",
                    "bankBranchName":"广州分行",
                    "accountName":"马六",
                    "accountId":"12345",
                    "destInsuranceNo":"4562",
                    "destBizInsuranceNo":"7654545",
                    "destBizInsuranceSts":"123456",
                    "destForceInsuPolicyNo":"6542020",
                    "destForceInsuPolicySts":"123456",
                    "onlineInvoiceLink":"654121"
                }]
            }
       
        }  else {
            this.ctx.body = {
                code:200,
                msg:'SUCCESS',
                data:[{
                    "insuranceNo":"123456",
                    "bizInsuranceNo":"122",
                    "bizPremium":"100",
                    "bizTime":"2019-2020",
                    "forceInsuPolicyNo":"1233456",
                    "forceInsuPremium":"100",
                    "forceInsuTime":"2019-2024",
                    "carTaxAmount":	100.00,
                    "insureLetter":80.00,
                    "totalPremium":1000.00,
                    "specialClause":"张三",
                    "policyholderName":"李四",
                    "policyholderCard":"123456",
                    "policyholderMobile":"15083356191",
                    "policyholderIdcardFront":"52020219980102701X",
                    "policyholderIdcardBack":"广州",
                    "insuredName":"周华建",
                    "insuredCard":"14312",
                    "insuredMobile":"15083356194",
                    "insuredCertFront":"18356160",
                    "insuredCertBack":"5020201645241",
                    "carOwnerName":"王五",
                    "carOwnerCard":	"41235",
                    "carMobile":"17542996",
                    "carCertFront":"15409448",
                    "carCertBack":"5210155",
                    "riskCode":	"1234556",
                    "riskName":"商业险",
                    "insuranceNumber":"马六",
                    "everyCoverage":"123",
                    "totalCoverage":"1000",
                    "notDeductibleMark":"456",
                    "riskAddType":"7654",
                    "bankName":"中国银行",
                    "bankProv":"广州省",
                    "bankCity":"广州市",
                    "bankBranchName":"广州分行",
                    "accountName":"马六",
                    "accountId":"12345",
                    "destInsuranceNo":"4562",
                    "destBizInsuranceNo":"7654545",
                    "destBizInsuranceSts":"123456",
                    "destForceInsuPolicyNo":"6542020",
                    "destForceInsuPolicySts":"123456",
                    "onlineInvoiceLink":"654121"
                }]
            }
        }
    }
    //获取所有角色
    async getAllRoleList() {
        this.ctx.body = {
            code:200,
            msg:'SUCCESS',
            data:[
                {
                    "name": "业管",
                    "id": 1
                },
                {
                    "name": "管理员",
                    "id": 2
                },
                {
                    "name": "超级管理员",
                    "id": 3
                }
            ]
        }
    }
    //
    async managementUser() {
        let result = this.ctx.request.body;
        console.log(result)
        this.ctx.body = {
            code:200,
            msg:'SUCCESS',
            data:{
                "basicUser": {
                    "userId": 418,
                    "channelName": "中安",
                    "creditScore": 90,
                    "userType": "个人",
                    "userName": "企鹅",
                    "userNo": "88",
                    "mobile": "18718877717",
                    "idNo": "1234E",
                    "cardType": "身份证"
                },
                 "verifyInfo": [
                    {
                        "name": "企鹅",
                        "idNo": "1234E",
                        "mobile": "18718877717",
                        "isIdentityMatch": "通过",
                        "ocrRzt": "通过",
                        "faceRecDegree": "89.19752",
                        "creditAuthResult": null,
                        "creditAuthId": "test企鹅个人征信查询授权书"
                    }
                ],
                "verifyFile": [
                    {
                        "creditAuthResult": null,
                        "creditAuthId": "test企鹅个人征信查询授权书",
                        "frontFaceId": "test企鹅正脸照",
                        "idcardFront": "2f4bf1dbfa882f4bf1dbfa88",
                        "idcardBack": "2f4bf1dbfa88"
                    }
                ],
                 "addUserInfo": {
                    "liveStatus": "公司提供",
                    "liveAddr": "广东省广州市天河区",
                    "carInfo": "本人名下有车，无贷款",
                    "eduInfo": "大学",
                    "occupationType": "上班人群",
                    "incomeFrom": "工资",
                    "unitName": "广州智数信息技术有限公司",
                    "unitTel": "020-12024641",
                    "position": "工程师",
                    "entryDate": 1548950400000,
                    "bizFlow": "100000.00",
                    "monthIncome": "10000~14999元",
                    "acctepMaxRepay": "2000.00",
                    "operatYear": null,
                    "payedSocial": "缴纳本地社保",
                    "yearIncome": "50000.00",
                    "gpsInfo": "113.111432,23.211321",
                    "ipAddr": "123.12.32.123",
                    "marrInfo": "未婚"
                },
                "mateUserInfo": {
                    "mateName": "青蛙",
                    "mateIdNo": "3243245349090909",
                    "mateIncomeFrom": "工资",
                    "mateMobile": "13131313113",
                    "mateYearIncome": "50000.00",
                    "mateUnit": "广州智数信息技术有限公司"
                },
                "contactInfo": [
                    {
                        "userName": "测试arya朋友",
                        "relationship": "朋友",
                        "mobile": "15815854001"
                    },
                    {
                        "userName": "测试arya第二朋友",
                        "relationship": "朋友",
                        "mobile": "89080880"
                    }
                ],
            }
        }
    }
    //审核配置层级删除
    async auditDelete() {
        let result = this.ctx.query;
        if(result.id) {
            this.ctx.body = {
                code:200,
                msg:'SUCCESS',
                data:'删除成功'
            }
        } else {
            this.ctx.body = {
                code:400,
                msg:'FAIL',
                data:'传入参数有误'
            }
        }
    }
    //审核详情查看
    async auditInfo() {
        let result = this.ctx.query;
        if(result.id) {
            this.ctx.body = {
                code:200,
                msg:'SUCCESS',
                data:{
                    "taskAuditBasicInfo":{
                        "id": 2,
                        "bizTypeName": "用户审核（企业）",
                        "channelName": "渠道B",
                        "createdTime": 1556620751000,
                        "updatedTime": 1556620753000
                    },
                    "taskAuditInfoList":[
                        {
                            "id": 2,
                            "auditLvl": "1",
                            "auditLvlName": "初审",
                            "auditUserName": "1111"
                        },
                        {
                            
                                "id": 2,
                                "auditLvl": "2",
                                "auditLvlName": "初审",
                                "auditUserName": "111"
                            
                        },
                        {
                            
                            "id": 2,
                            "auditLvl": "3",
                            "auditLvlName": "初审",
                            "auditUserName": "111"
                        
                    }
                    ]
                }
            }
        } else {
            this.ctx.body = {
                code:400,
                msg:'FAIL',
                data:"传入参数有误"
            }
        }
    }
    async adminLock() {
        let result = this.ctx.query;
        if(result.userId) {
            this.ctx.body = {
                code:200,
                msg:'SUCCESS',
                data:"状态更改成功"
            }
        }
    }
    async adminDelete() {
        let result = this.ctx.query;
        if(result.userId) {
            this.ctx.body = {
                code:200,
                msg:'SUCCESS',
                data:'删除成功'
            }
        } else {
            this.ctx.body = {
                code:400,
                msg:'FAIL',
                data:'传入参数有误'
            }
        }
    }
    async userData() {
        let result = this.ctx.request.body;
        this.ctx.body = {
            code:200,
            msg:'SUCCESS',
            data:"新增管理员成功"
        }
    }
    //新增角色
    async roleSave() {
        let result = this.ctx.request.body;
        if(result.enterpriseNo  && result.moduleId && result.name) {
            this.ctx.body = {
                code:200,
                msg:'SUCCESS',
                data:'新增成功'
            }
        } else {
            this.ctx.body = {
                code:400,
                msg:'FAIL',
                data:"请求参数有误"
            }
        }
    }
    //获取所有模块
    async getAllModulesList() {
        let result = this.ctx.query;
        this.ctx.body = {
            code:200,
            msg:'SUCCESS',
            data:[
                {
                     "id": 1,
                     "moduleName": "xxx模块"
                },
                {
                   "id": 1,
                   "moduleName": "xxx模块"
                },
                {
                   "id": 1,
                   "moduleName": "xxx模块"
                }
            ]
        }
    }
    //获取所有企业名称
    async getAllCompanyNameList() {
        let result = this.ctx.query;
        this.ctx.body = {
            code:200,
            msg:"SUCCESS",
            data: [
                {
                     "id": 1,
                     "companyName": "xxx模块"
                },
                {
                   "id": 1,
                   "companyName": "xxx模块"
                },
                {
                   "id": 1,
                   "companyName": "xxx模块"
                }
            ]
        }
    }
    async getRoleMenuByRoleId() {
        let result = this.ctx.query;
        if(result.roleId) {
            this.ctx.body = {
                code:200,
                msg:'SUCCESS',
                data:{
                   menu:[{
                    "menuId": 5,
                    "moduleId":33,
                    "menuUrl":"xzCredit/smartCompass",
                    "parentId": 1,
                    "menuName":"SQL监控",
                    "isLeaf":false,
                    "menuIcon":"sql-icon",
                    "isAvailable":true,
                    "zorder":3,
                    "createdTime":"2019-04-16 11:55:00",
                    "updateTime":"2019-04-16 11:55:00",
                    "createdUser":"u111110000",
                    "updatedUser":"u333937636",
                     childrenMenu:[
                         {
                            "menuId": 12,
                            "moduleId":33,
                            "menuUrl":"xzCredit/smartCompass",
                            "parentId": 1,
                            "menuName":"SQL监控",
                            "isLeaf":false,
                            "menuIcon":"sql-icon",
                            "isAvailable":true,
                            "zorder":3,
                            "createdTime":"2019-04-16 11:55:00",
                            "updateTime":"2019-04-16 11:55:00",
                            "createdUser":"u111110000",
                            "updatedUser":"u333937636"
                         },
                         {
                            "menuId": 11,
                            "moduleId":33,
                            "menuUrl":"xzCredit/smartCompass",
                            "parentId": 1,
                            "menuName":"SQL监控",
                            "isLeaf":false,
                            "menuIcon":"sql-icon",
                            "isAvailable":true,
                            "zorder":3,
                            "createdTime":"2019-04-16 11:55:00",
                            "updateTime":"2019-04-16 11:55:00",
                            "createdUser":"u111110000",
                            "updatedUser":"u333937636"
                         }
                     ]
                   },
                   {
                    "menuId": 2,
                    "moduleId":33,
                    "menuUrl":"xzCredit/smartCompass",
                    "parentId": 1,
                    "menuName":"SQL监控",
                    "isLeaf":false,
                    "menuIcon":"sql-icon",
                    "isAvailable":true,
                    "zorder":3,
                    "createdTime":"2019-04-16 11:55:00",
                    "updateTime":"2019-04-16 11:55:00",
                    "createdUser":"u111110000",
                    "updatedUser":"u333937636",
                     childrenMenu:[
                         {
                            "menuId": 4,
                            "moduleId":33,
                            "menuUrl":"xzCredit/smartCompass",
                            "parentId": 1,
                            "menuName":"SQL监控",
                            "isLeaf":false,
                            "menuIcon":"sql-icon",
                            "isAvailable":true,
                            "zorder":3,
                            "createdTime":"2019-04-16 11:55:00",
                            "updateTime":"2019-04-16 11:55:00",
                            "createdUser":"u111110000",
                            "updatedUser":"u333937636"
                         },
                         {
                            "menuId": 9,
                            "moduleId":33,
                            "menuUrl":"xzCredit/smartCompass",
                            "parentId": 1,
                            "menuName":"SQL监控",
                            "isLeaf":false,
                            "menuIcon":"sql-icon",
                            "isAvailable":true,
                            "zorder":3,
                            "createdTime":"2019-04-16 11:55:00",
                            "updateTime":"2019-04-16 11:55:00",
                            "createdUser":"u111110000",
                            "updatedUser":"u333937636"
                         }
                     ]
                   }
                ]
                }
            }
        } else {
            this.ctx.body = {
                code:400,
                msg:'FAIL',
                data:'参数有误'
            }
        }
    }
    async assetChannelList() {
        let result = this.ctx.query;
        this.ctx.body = {
            code:200,
            msg:'SUCCESS',
            data: [
                {
                    "channelNo": "ZC000001",
                    "channelName": "中安"
                },
                {
                    "channelNo": "ZC000002",
                    "channelName": "华城"
                }
            ]
        }
    }
    async productNameList() {
        this.ctx.body = {
            code:200,
            msg:'SUCCESS',
            data:[
                {
                    "productName": "分期汇",
                    "productNo": "CP000004"
                },
                {
                    "productName": "逸百年车险分期(协议代扣)",
                    "productNo": "CP000001"
                },
                {
                    "productName": "逸百年车险分期(线上支付)",
                    "productNo": "CP000003"
                },
                {
                    "productName": "逸百年车险分期(线下转账)",
                    "productNo": "CP000002"
                }
            ]
        }
    }
    async businessTypeList() {
        this.ctx.body = {
            code:200,
            msg:'SUCCESS',
            data: [
                {
                    "typeNo": "YW000001",
                    "typeName": "汽车分期"
                },
                {
                    "typeNo": "YW000002",
                    "typeName": "车险分期"
                }
            ]
        }
    }
    async orderStatusList() {
        this.ctx.body = {
            code:200,
            msg:'SUCCESS',
            data:[
                {
                    "status": "审核通过",
                    "key":"pass"
                },
                {
                    "status": "已放款"
                },
                {
                    "status": "已还款"
                },
                {
                    "status": "审核中"
                },
                {
                    "status": "不通过"
                }
            ]
        }
    }
    async lockRoleId() {
        let result = this.ctx.query;
        if(result.roleId) {
            this.ctx.body = {
                code:200,
                msg:'SUCCESS',
                data:'锁定角色成功'
            }
        } else {
            this.ctx.body = {
                code:400,
                msg:'Fail',
                data:'传入参数有误'
            }
        }
    }
    async roleUnLock() {
        let result = this.ctx.query;
        if(result.roleId) {
            this.ctx.body = {
                code:200,
                msg:'SUCCESS',
                data:'解锁角色成功'
            }
        } else {
            this.ctx.body = {
                code:400,
                msg:'Fail',
                data:'传入的参数有误'
            }
        }
    }
    async adminUnlock() {
        let result = this.ctx.query;
        if(result.userId) {
            this.ctx.body = {
                code: 200,
                msg: "SUCCESS",
                data: "解锁用户成功"
            }
        }

    }

    async userAssetChannelList() {
        let result = this.ctx.query;
        this.ctx.body = {
            code:200,
            msg:'SUCCESS',
            data: [
                {
                    "channelNo": "ZC000001",
                    "channelName": "中安"
                },
                {
                    "channelNo": "ZC000002",
                    "channelName": "华城"
                }
            ]
        }
    }
    async destBizInsuranceStsList() {
        let result = this.ctx.query;
        this.ctx.body = {
            code:200,
            msg:'SUCCESS',
            data:[
                {
                    "destBizInsuranceSts": "已出保单",
                    "destBizStsId": 1
                },
                {
                    "destBizInsuranceSts": "已退保",
                    "destBizStsId": 2
                }
            ]
        }
    }
    async destForceInsuPolicyStsList() {
        let result = this.ctx.query;
        this.ctx.body = {
            code:200,
            msg:'SUCCESS',
            data:[
                {
                    "destForceStsId": 1,
                    "destForceInsuPolicySts": "已出保单"
                },
                {
                    "destForceStsId": 2,
                    "destForceInsuPolicySts": "已退保"
                }
            ]
        }
    }
    async channelList() {
        let result = this.ctx.query;
        this.ctx.body = {
            code:200,
            msg:'SUCCESS',
            data:[
                {
                    "channelNo": "AS001",
                    "channelType": "资产渠道"
                }
            ]
        }
    }
    async adminInfo() {
        let result  = this.ctx.query;
        if(result.userId) {
            this.ctx.body = {
                code:200,
                msg:"SUCCESS",
                data:{
                    "id": 1,
                    "loginName": "jacnma",
                    "name": "关公",
                    "roleIds": [1, 2],
                    "certFront": "xxx.jpg",
                    "certBack": "xxxx.jpg",
                    "companyName": "广州智数信息技术有限公司",
                    "isCerRequired": false,
                    "mobile": "13888888888",
                    "channelAssertIds": [2, 3],
                    "channelFundingIds": [1, 2],
                    "defaultPassword": "132k12l142l124",
                    "available": true,
                    "remark": "xxxxx,一段备注."
                }
            }
        }
    }

}


module.exports = FinanceController;
