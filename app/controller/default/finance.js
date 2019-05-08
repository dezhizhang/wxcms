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
      
        
        this.ctx.body = {
            code:200,
            msg:'SUCCESS',
            data:[]
        }
    }

    //审核列表
    async auditList() {
        let result = this.ctx.query
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
        this.ctx.body = {
            code:200,
            msg:'SUCCESS',
            data: {
                total: 1,
                rows: [
                  {
                     "accountId":"LPDQ120120000000001",
                     "accountName":"管理员a",
                     "roleName":"中控-超管",
                     "fullName":"蔡xx",
                     "phone":"138000138000",
                     "status":"0",
                     "lastLoginTime":"2019-04-03 11:33:22"
                  },
                  {
                     "accountId":"LPDQ120120000000002",
                     "accountName":"管理员a",
                     "roleName":"中控-超管",
                     "fullName":"关云长",
                     "phone":"138000138000",
                     "status":"1",
                     "lastLoginTime":"2019-04-03 11:33:22"
                  }
                ]
        }
    }
    }
    //新增管理员
    async adminAdd() {
        let result = this.ctx.request.body;
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
      
        this.ctx.body = {
            code:200,
            msg:'SUCCESS',
            data:{
            total: 2,
            rows: [
                    {
                        "roleId":"1",
                        "name":"超管",
                        "roleName":"中控-超管",
                        "description":"我是一段描述",
                        "company":"智数",
                        "model":"角色管理",
                        "status":0,
                        "updatedTime":"2019-04-03 11:33:22",
                        "createdTime":"2019-04-03 11:33:22",
                        "createdBy":"关云长",
                        "updatedBy":"张飞",
                        "isAvailable":true,
                        "groupNo":"T1001",    
                        "displayName":"展示模块",
                        "moduleId":"1"
                    },
                    {
                        "roleId":"2",
                        "name":"超管",
                        "roleName":"中控-超管",
                        "description":"我是一段描述",
                        "company":"智数",
                        "model":"用户管理",
                        "status":1,
                        "updatedTime":"2019-04-03 11:33:22",
                        "createdTime":"2019-04-03 11:33:22",
                        "createdBy":"关云长",
                        "updatedBy":"张飞",
                        "isAvailable":true,
                        "groupNo":"T1001",    
                        "displayName":"展示模块",
                        "moduleId":"1"
                    }
                    ]
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
        this.ctx.body = {
            code:200,
            msg:'删除成功'
        }
    }
    //更新角色
    async roleUpdate() {
        let result = this.ctx.request.body;
        this.ctx.body = {
            code:200,
            msg:'修改成功'
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
                accountInfo: [{
                    "accountType": "收款账户",
                    "accountName": "123",
                    "accountId": "123",
                    "bankNo": "test ",
                    "bankProv": null,
                    "bankCity": null,
                    "bankBranchName": null
                }, {
                    "accountType": "还款账户",
                    "accountName": "123",
                    "accountId": "123",
                    "bankNo": "test",
                    "bankProv": null,
                    "bankCity": null,
                    "bankBranchName": null
                }],
                "orderDetails": {
                    "customerNo": "123",
                    "userNo": "123",
                    "assetChannelNo": "123",
                    "assetChannelName": "test",
                    "userName": "123",
                    "userType": "个人",
                    "applyTime": 1547481600000,
                    "productName": "test",
                    "typeName": "test",
                    "bizNo": "123",
                    "applyAmt": "10000.00",
                    "loanAmt": "100000.00",
                    "termType": "多期",
                    "repayLimit": "8",
                    "interestDate": 1547481600000,
                    "dueDate": 1548950400000,
                    "totalRepay": "90000.00",
                    "repayDesc": null,
                    "realAmt": "80000.00",
                    "interestRate": "0.5000",
                    "status": "审核通过"
                },
                "attachInfo": [{
                    "attType": "借款合同",
                    "attName": "test",
                    "attCtxNo": "123",
                    "fileId": "1"
                }],
                "repayPlans": [{
                    "curTerm": "2",
                    "curDueDate": 1547481600000,
                    "totalRepayment": "10000.00",
                    "capital": "9000.00",
                    "interest": "1000.00",
                    "hadRepayment": "10000.00",
                    "billStatus": "未到期",
                    "repaySuccessDate": null,
                    "remark": null
                }]
            }
        }
    }
    //融资人详细信息
    async orderUser() {
        let result = this.ctx.query;
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

}


module.exports = FinanceController;
