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
               
                repaymentPlan: [{
                    "curTerm": "12",
                    "curDueDate": 1547481600000,
                    "totalRepayment": "10000.00",
                    "capital": "1000",
                    "XiFei": "1000.00",
                    "interest":"100",
                    "repaySuccessDate": 1547481600000,
                    "billStatus":"还款中"

                }],
                orderInfo: {
                    "bizNo": "123",
                    "repaymentType": "等本等算成",
                    "applyAmt": "10000.00",
                    "interestRate": "0.05",
                    "applyTime": 1547481600000,
                    "repayLimit": 12,
                    "modle":"线上代扣",
                    "cost": "10000",
                    "interestDate": 1547481600000,
                    "dueDate": 1547481600000,
                    "planDate": 1547481600000,
                    "orderStatus": "还款中",
                },
                attachInfo: [{
                    "attType": "借款合同",
                    "attCtxNo": "test",
                    "taddy": "张三",
                    "attFile": "1"
                }],
                basicInfo:{
                    "basicInfo": "张三",
                    "userNo": "1547481600000",
                    "customerNo": "554254241541",
                    "assetChannelNo": "456521251224",
                    "userName": "王五",
                    "assetChannelName": "小智",
                    "userType": "普通用户",
                    "applyTime": "2019-0-12",
                    "productName": "分期产品",
                    "typeName":"分期"
                },
                contractInfo:[{
                    "attType":"合同",
                    "attCtxNo":"12345",
                    "attFile":"3125"
                }],
                paymentAccount:[{
                    "isPayment":true,
                    "accountName":"张三",
                    "accountId":"1234566",
                    "accoutBank":"中国银行",
                    "openingBank":"中行",
                    "unionpayNo":"637719"
                }],
                repaymentAccount:[{
                    "isPayment":false,
                    "accountName":"李四",
                    "accountId":"661369",
                    "accoutBank":"中国农行",
                    "openingBank":"农行",
                    "unionpayNo":"65413542"
                }],
                subjectInfo:[{
                    "subjectType":"商品",
                    "subjectNum":100,
                    "handle":"抵压"
                }],
                auditRecords:[{
                    "auditRole":"管理员",
                    "auditor":"李四",
                    "auditTime":1547481600000,
                    "auditRes":"通过",
                    "remark":"张三审核"
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
                userBasicInfo: {
                    "userNo":"LPC12012018001",
                    "channelName":"中安",
                    "userType":"个人",
                    "userName":"陈晓玩",
                    "cardType":"身份证",
                    "idNo":"445381****9999",
                    "mobile":"138****1111",
                    "creditScore":"701"
                },
                identityVerifyInfo:{
                    "name":"陈晓玩",
                    "isIdentityMatch":"通过",
                    "idNo":"44018****5043",
                    "OCR":"通过",
                    "mobile":"13829110414",
                    "faceRecDegree":"87.6%",
                    "creditAuthResult":"无附件",
                    "creditAuthId":"查看附件",
                    "IDCardFront":"查看附件",
                    "IDCardBack":"查看附件",
                    "frontFaceId":"查看附件"
                },
                addUserInfo:{
                    "liveStatus":"自有住房",
                    "liveAddr":"广州天河区..",
                    "carInfo":"名下有车,无贷款",
                    "eduInfo":"本科",
                    "occupationType":"—",
                    "incomeFrom":"工资",
                    "unitName":"龙腾生物有限公司",
                    "unitTel":"020-88212921",
                    "position":"—",
                    "operatingYear":"10年",
                    "bizFlow":"—",
                    "monthIncome":"￥12,000.00",
                    "acctepMaxRepay":"—",
                    "operatYear":"-",
                    "payedSocial":"是",
                    "yearIncome":"14.4",
                    "gpsInfo":"—",
                    "ipAddr":"—",
                    "marrInfo":"已婚"
                },
                mateUserInfo:{
                    "mateName":"陈敏",
                    "mateIdNo":"440511198802214341",
                    "mateIncomeFrom":"工资",
                    "mateMobile":"13450228111",
                    "mateYearIncome":"10",
                    "mateUnit":"心形科技有限公司"
                },
                
                contactUserInfo:{
                    "firstContactName":"丁叮",
                    "firstContactRel":"朋友",
                    "firstContactMobile":"1997653212",
                    "secondContactName":"陈晓明",
                    "secondContactRel":"兄弟",
                    "secondContactMobile":"13687601921"
                }
            }
        }
    }
  
}


module.exports = FinanceController;
