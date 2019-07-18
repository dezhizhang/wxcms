'use strict';
const fs = require('fs');
const pump = require('pump');
const Excel = require('exceljs')
const Controller = require('egg').Controller;
class EnteryController extends Controller {
  async login() {
    let result = this.ctx.request.body;
    console.log(result);

    this.ctx.body = {
      code: 200,
      msg: "SUCCESS",
      data: {
        "token": "skdfjdhfdsgbfjdsjdskfndsfbjbdfvffjdsn",
        "username": "张三吧",
        "id": "123",
        "isInitialize": false,
        "step": "1",
        "needSignCert": false
      }
    }
  }
  //显示用户列表
  async userList() {
    let result = this.ctx.request.body;
    this.ctx.body = {
      code: 200,
      msg: 'SUCCESS',
      data: {
        rows: [
          {
            "userNo": "LPC12012018001",
            "name": '侯洋',
            "userType": '个人',
            "channelName": "渠道A",
            "creditScore": "701",
            "createdTime": "2018-02-12 11:22:31"
          },
          {
            "userNo": "LPC12012018002",
            "name": '侯洋',
            "userType": '企业',
            "channelName": "渠道A",
            "creditScore": "701",
            "createdTime": "2018-02-12 11:22:31"
          }
        ],
        total: 2
      }
    }
  }
  //用户列表详情 - 个人
  async userDetail() {
    this.ctx.body = {
      "code": 200,
      "msg": "467812",
      "timestamp": "",
      "data": {
        user: {
          userNo: 'LPC12012018001',
          userType: '个人',
          certType: '身份证',
          mobile: '13800000000',
          channelNo: '中安',
          name: '校长',
          idNo: '411526191234213123',
          creditScore: '999'
        },
        facemsg: {
          name: '陈晓玩',
          idNo: '44018****5043',
          mobile: '138****0414',
          personCreditInquiry: '无附件',
          certFront: '123',
          frontFaceId: '123',
          isIdentityMatch: '通过',
          verifyResult: '通过',
          faceRecDegree: '87.6%',
          creditAuthId: '123',
          certBack: '312',
        },
        supplement: {
          liveStatus: '自有住房',
          liveAddr: '广州天河区...',
          carsStatus: '名下有车,无贷款',
          eduLevel: '本科',
          occupationType: '—',
          incomeFrom: '工资',
          unitName: '龙腾生物有限公司',
          unitTel: '020-88212921',
          position: '—',
          entryDate: '10年',
          bizFlow: '—',
          monthIncomingRange: '￥12,000.00',
          maxAcceptRepay: '—',
          operatingYear: '—',
          payedSocialSecurity: '是',
          yearIncoming: '14.4',
          gpsLocation: '—',
          ipAddr: '—',
          marrStatus: '已婚',

        },
        spouse: {
          name: '陈敏',
          idNo: '44018****5043',
          mobile: '138****0414',
          incomeFrom: '工资',
          yearIncoming: '10',
          unitName: '心形科技有限公司',
        },
        relation: {
          firstName: '丁叮',
          firstRelationship: '朋友',
          firstMobile: '138****0414',
          secondName: '陈晓明',
          secondRelationship: '兄弟',
          secondMobile: '138****0414'
        },
        channel: [{
          id: '123',
          assetChannelNo: '渠道A（创建）',
          authTime: '2018-02-12 11:22:31',
          bizTypeNo: '信用查询、核身鉴权',
        }, {
          id: '1123',
          assetChannelNo: '渠道B',
          authTime: '2018-04-21 11:22:31',
          bizTypeNo: '信用查询、核身鉴权、融资申请',
        }
        ],
      }
    }
  }
  //获取企业
  async getSignSubjectName() {
    this.ctx.body = {
      "code": 200,
      "msg": "企业",
      "data": '测试公司'
    }
  }
  //融资订单列表
  async listOrder() {
    let result = this.ctx.request.body;
    this.ctx.body = {
      code: 200,
      msg: 'SUCCESS',
      data: [{}]
    }
  }
  //融资订单-进件审核列表
  async auditTaskList() {
    let result = this.ctx.request.body;
    this.ctx.body = {
      code: 200,
      msg: 'SUCCESS',
      data: [{}]
    }
  }
  async getUserBase() {
    let result = this.ctx.request.body;
    this.ctx.body = {
      code: 200,
      msg: 'SUCCESS',
      data: {
        "name": "张三",
        "idNo": "440311198802142571",
        "certFront": "",
        "certBack": ""
      },
      timestamp: "1556000445"

    }
  }
  //文件上传接口
  async infoResure() {
    let result = this.ctx.request.body;
    this.ctx.body = {
      code: 200,
      msg: '验证成功',
      data: {},
      timestamp: '1556000445'
    }
  }
  //设置登录密码
  async setPassword() {
    let result = this.ctx.request.body;
    this.ctx.body = {
      code: 200,
      msg: '重置密码成功',
      data: {},
      timestamp: '1556000445'

    }
  }
  //申请证书
  async applyCert() {
    let result = this.ctx.request.body;
    this.ctx.body = {
      code: 200,
      msg: 'SUCCESS',
      data: {},
      timestamp: '1556000445'
    }
  }
  //渠道信息
  async manageList() {
    let result = this.ctx.request.body;
    this.ctx.body = {
      code: 200,
      msg: 'SUCCESS',
      data: [
        {
          "channelName": "",
          "channelCode": ""
        }
      ]
    }

  }
  //获取所有有管理权限的渠道信息
  async orderManageList() {
    let result = this.ctx.request.body;
    this.ctx.body = {
      code: 200,
      msg: 'SUCCESS',
      data: [
        {
          "channelName": "",
          "channelCode": ""
        }
      ]
    }
  }
  //获取有关联权限的的产品信息
  async productManageList() {
    let result = this.ctx.request.body;
    this.ctx.body = {
      code: 200,
      msg: 'SUCCESS',
      data: [
        {
          "productCode": "11111",
          "productName": "22222"
        }
      ]
    }
  }
  //获取所有有管理权限的业务类型信息
  async bizTypeManageList() {
    let result = this.ctx.request.body;
    this.ctx.body = {
      code: 200,
      msg: 'SUCCESS',
      data: [
        {
          "channelName": "",
          "channelCode": ""
        }
      ]
    }
  }
  //显示融资订单列表
  async orderList() {
    let result = this.ctx.request.body;
    this.ctx.body = {
      code: 200,
      msg: 'SUCCESS',
      data: [{
        "bizNo": "融资订单ID",
        "assetChannelNo": "资产渠道",
        "userNo": "融资用户",
        "productNo": "产品名称",
        "businessTypeNo": "业务类型",
      }]
    }
  }
  //显示融资订单审核列表
  async entryList() {
    let result = this.ctx.request.body;
    let t = new Date()
    this.ctx.body = {
      code: 200,
      msg: "SUCCESS",
      timestamp: "",
      data: [
        {
          "id": 1232323,
          "assetChannelNo": "中安",
          "name": "张三",
          "bizNo": "XZ34835434Y4834",
          "taskType": "自营",
          "createdDate": t.getTime(),
          "status": "1",
          "auditNo": "2042",
          "userType": "1",
          "siFinal": true
        }
      ]
    }
  }
  //选择省
  async choiceProvince() {
     let result = this.ctx.request.body;
     this.ctx.body = {
       code:200,
       msg:'SUCCESS',
       data:[
        {
           "province": "广东省"
       },
       {
           "province": "青海省"
       }]
     }
  }
  //选择市
  async choiceCity() {
    let result = this.ctx.request.body;
    if(result.province) {
      this.ctx.body = {
        code:200,
        msg:'SUCCESS',
        data:[
          {
              "province": "广东省",
              "city": "韶关市"
          },
          {
              "province": "广东省",
              "city": "阳江市"
          }]
      }
    } else {
      this.ctx.body = {
        code:404,
        msg:'传入的参数有误',
        data:[]
      }
    }
  }
  //文件上传
  async uploadFile() {
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
    let themeImage =new this.ctx.model.Theme(formFields);    
    var result=await themeImage.save();
    console.log(result)

    this.ctx.body = {
        code:200,
        success:true,
        msg:'上传图片成功',
        url:'http://baidu.com',
        data:{
          "fileId": "53f3ea8e-58c7-44b6-a69c-85f7ffce849b"
        }
    }
  }
  //新增C用户车险-录入标的物
  async addSubject() {
    let result = this.ctx.request.body;
    console.log(result);
    this.ctx.body = {
      code:200,
      msg:'SUCCESS',
      data:null
    }
  }
  //选择金融产品
  async getProducts() {
     this.ctx.body = {
       code:200,
       msg:'SUCESS',
       data:[
        {
            "productName": "分期汇",
            "productNo": "CP000007"
        },
        {
            "productName": "逸百年车险分期-手写签署3",
            "productNo": "CP000001"
        },
        {
            "productName": "逸百年车险分期-手写签署3",
            "productNo": "CP000002"
        },
        {
            "productName": "逸百年车险分期-手写签署3",
            "productNo": "CP000003"
        },
        {
            "productName": "分期汇-1-电子签章",
            "productNo": "CP000004"
        },
        {
            "productName": "分期汇-2-电子签章",
            "productNo": "CP000005"
        },
        {
            "productName": "分期汇-3-电子签章",
            "productNo": "CP000006"
        }
      ]
     }
  }
  //还款模式
  async replayWay() {
     let result = this.ctx.request.body;
     if(result.productNo) {
       this.ctx.body = {
          code:200,
          msg:'SUCCESS',
          data: [
              {
                  "repayType": "1",
                  "repayWay": "1",
                  "repayWayName": "等额本金"
              },
              {
                  "repayType": "2",
                  "repayWay": "2",
                  "repayWayName": "先息后本"
              }
          ]
       }
     }
  }
  //融资期限
  async getTerms() {
    let result = this.ctx.request.body;
    if(result.productNo && result.repayWay) {
      this.ctx.body = {
        code:200,
        msg:'SUCCESS',
        data:{
          "term": ['6','9','12']
        }
      }
    } else {
      this.ctx.body = {
        code:404,
        msg:'参数有误',
        data:null
      }
    }
  }
  //成本率
  async costRate() {
    let result = this.ctx.request.body;
    if(result.productNo && result.repayWay && result.term && result.applyAmt) {
      this.ctx.body = {
        code:200,
        msg:'SUCCESS',
        data:[
          {
            "loanCostRate": '50.0'
          }
        ]
      }
    } else {
      this.ctx.body = {
        code:400,
        msg:'传入的参数有误',
        data:null
      }
    }
  }
  //新增C用户车险-融资申请
  async applyToC() {
    let result = this.ctx.request.body;
    if(result.needPayOtherInsure) {
      this.ctx.body = {
        code:200,
        msg:'SUCCESS',
        data:null
      }
    } else {
      this.ctx.body = {
        code:404,
        msg:'传入的参数有误',
        data:null
      }
    }
  }
  //C用户车险-确认信息
  async insuranceToC() {
    let result = this.ctx.request.body;
    let date = new Date()
    if(result.bizNo && result.userNo) {
        this.ctx.body = {
          code:200,
          msg:'SUCCESS',
          data:{
            'financeUser':{
              "userType":"个人",
              "name":"王大",
              "idNo":"6789 XXXX XXXX XXXX",
              "mobile":"136XXXXXXXX"
            },
            'financeTrial':{
              "applyAmt":"39000",
              "loanCostRate":"12",
              "loanCost":"4680",
              "termLimit":"12",
              "interestDate":date.getTime(),
              "dueDate":date.getTime(),
              "repayWay":"等额本息",
              "payDay":date.getTime(),
              "forceInsuPremium":"6000",
              "carTaxAmount":"6000"
            },
            'cRepaymentPlansList':[
                {
                  "curTerm":'1',
                  "curDueDate":date.getTime(),
                  "totalRepayment":"6000",
                  "capital":"1000",
                  "interest":"300"
                },
                {
                  "curTerm":'2',
                  "curDueDate":date.getTime(),
                  "totalRepayment":"6000",
                  "capital":"1000",
                  "interest":"300"
                },
                {
                  "curTerm":'3',
                  "curDueDate":date.getTime(),
                  "totalRepayment":"6000",
                  "capital":"1000",
                  "interest":"300"
                },
                {
                  "curTerm":'4',
                  "curDueDate":date.getTime(),
                  "totalRepayment":"6000",
                  "capital":"1000",
                  "interest":"300"
                }

            ],
            'FinancingApply':{},
            'payAccount':{
              "isDirectPay":true,
              "accountName":"天安财产保险股份有限公司青岛分公司",
              "accountId":"6789 XXXX XXXX XXXX",
              "bankNo":"工商银行",
              "bankBranchName":"工行青岛市南第二支行营业部",
              "bankCode":"XXXXXXXXXX"
            },
            'repayAccount':{
              "isDirectPay":"否",
              "accountName":"天安财产保险股份有限公司青岛分公司",
              "accountId":"6789 XXXX XXXX XXXX",
              "bankNo":"工商银行",
              "bankBranchName":"工行青岛市南第二支行营业部",
              "bankCode":"XXXXXXXXXX"
            },
            "financeOrder":{
              "bizNo":"123456",
              "productName":"小智金融",
              "applyAmt":"1000",
              "loanCostRate":"50",
              "loanCost":"1000",
              "termLimit":"10",
              "interestDate":date.getTime(),
              "dueDate":date.getTime(),
              "repayWay":"线上支付",
              "payDay":date.getTime(),
              "repayType":"自动支付",
              "needPayOtherInsure":false
            }
          }
        }
    } else {
      this.ctx.body = {
        code:200,
        msg:'SUCCESS'

      }
    }
  }
  //确认信息B
  async insuranceToB() {
    let result = this.ctx.request.body;
    let date = new Date()
    if(result.bizNo && result.userNo) {
        this.ctx.body = {
          code:200,
          msg:'SUCCESS',
          data:{
            'financeUser':{
              "userType":"企业",
              "epName":"龙腾物流有限公司",
              "legelPersonName":"程伟",
              "uniSocCode":"6789 XXXX XXXX XXXX"
            },
            'financeTrial':{
              "applyAmt":"39000",
              "loanCostRate":"12",
              "loanCost":"4680",
              "termLimit":"12",
              "interestDate":date.getTime(),
              "dueDate":date.getTime(),
              "repayWay":"等额本息",
              "payDay":date.getTime(),
              "forceInsuPremium":"6000",
              "carTaxAmount":"6000"
            },
            'cRepaymentPlansList':[
                {
                  "curTerm":'1',
                  "curDueDate":date.getTime(),
                  "totalRepayment":"6000",
                  "capital":"1000",
                  "interest":"300"
                },
                {
                  "curTerm":'2',
                  "curDueDate":date.getTime(),
                  "totalRepayment":"6000",
                  "capital":"1000",
                  "interest":"300"
                },
                {
                  "curTerm":'3',
                  "curDueDate":date.getTime(),
                  "totalRepayment":"6000",
                  "capital":"1000",
                  "interest":"300"
                },
                {
                  "curTerm":'4',
                  "curDueDate":date.getTime(),
                  "totalRepayment":"6000",
                  "capital":"1000",
                  "interest":"300"
                }

            ],
            'cloudAccountInfo':{
              "accountName":"XXX保理有限公司",
              "accountId":"6789 XXXX XXXX XXXX",
              "bankNo":"工商银行",
              "bankBranchName":"工行广州市天河支行"
            },
            'payAccount':{
              "isDirectPay":true,
              "accountName":"天安财产保险股份有限公司青岛分公司",
              "accountId":"6789 XXXX XXXX XXXX",
              "bankNo":"工商银行",
              "bankBranchName":"工行青岛市南第二支行营业部",
              "bankCode":"XXXXXXXXXX"
            },
            'repayAccount':{
              "isDirectPay":"否",
              "accountName":"天安财产保险股份有限公司青岛分公司",
              "accountId":"6789 XXXX XXXX XXXX",
              "bankNo":"工商银行",
              "bankBranchName":"工行青岛市南第二支行营业部",
              "bankCode":"XXXXXXXXXX"
            },
            "financeOrder":{
              "bizNo":"123456",
              "productName":"小智金融",
              "applyAmt":"1000",
              "loanCostRate":"50",
              "loanCost":"1000",
              "termLimit":"10",
              "interestDate":date.getTime(),
              "dueDate":date.getTime(),
              "repayWay":"线上支付",
              "payDay":date.getTime(),
              "repayType":"自动支付",
              "needPayOtherInsure":false
            }
          }
        }
    } else {
      this.ctx.body = {
        code:200,
        msg:'SUCCESS'

      }
    }
  }
  //新增B用户车险
  async addSubjectB() {
    let result = this.ctx.request.body;
    if(result.assetChannelNo) {
      this.ctx.body = {
        code:200,
        msg:'SUCCESS',
        data:null
      }
    } else {
      this.ctx.body = {
        code:400,
        msg:'传入的参数有误',
        data:null
      }
    }
  }
  //上传拊件
  async uploadAttachment() {
     let workbook = new Excel.Workbook();
     workbook.eachSheet(function(worksheet, sheetId) {
       console.log(worksheet);
       console.log(sheetId);
    });
    this.ctx.body = {
      code:200,
      msg:'文件上传成功',
      data:null
    }
  }

  async downFileBySid() {
    let workBook = new Excel.Workbook();
    let fileName = 'test.xlsx';
    this.ctx.response.attachment(fileName);
    this.ctx.status = 200;
    await workBook.xlsx.write(this.ctx.res);
    this.ctx.res.end()
  }

  //获取企业列表
  async getWhitelist() {
    let result = this.ctx.request.body;
    this.ctx.body = {
      code:200,
      data: [
        {
            "userType": "1",
            "userName": "苏菲",
            "userIdNo": "40990998848484444"
        },
        {
            "userType": "2",
            "userName": "广州鸣人信息技术有限公司",
            "userIdNo": "123456789989898"
        }
    ],
      message:'请求成功'
     
    }
  }
  //获取渠道
  async getSupportAssetChannelList() {
    let result = this.ctx.request.body;
    this.ctx.body = {
      code:200,
      data:[
        {
          "channelNo":"ZC00001",
          "channelName":"测试数据1"
        },
        {
          "channelNo":"ZC00002",
          "channelName":"测试数据2"
        }
      ]
    }
  }
  //金融产品列表
  async getFinancialProduct() {
    let result = this.ctx.request.body;
    this.ctx.body = {
      code: 200,
      message: "请求成功",
      data: [
          {
            "termList": [
                {
                    "repayWay": "等本等息",
                    "term": "3",
                      "financingRate": "5"
                  },
                  {
                      "repayWay": "等本等息",
                      "term": "12",
                      "financingRate": "7"
                  },
                  {
                      "repayWay": "先息后本",
                      "term": "6",
                      "financingRate": "6"
                  }
              ],
              "repayModeName": "等本等息",
              "supportRepayWay": [
                  "等本等息",
                  "先息后本"
              ],
              "productTypeName": "车险分期",
              "productNo": "CP000007",
              "productName": "分期汇"
          }
      ]
  }
    
  }
  //试算
  async financingTrial() {
    let result = this.ctx.request.body;
    this.ctx.body = {
      code: 200,
      message: "请求成功",
      "data": {
          "bizNo": "6c2711e6e5a548aba3f9f32a76439fc3",
          "period": 1,
          "businessPremium": 10000,
          "monthlyRepayment": 1667.17,
          "forceInsurancePremium": 6689,
          "fistPayment": 10704.17,
          "trialUrl": "",
          "totalInterest": 3,
          "carTaxAmount": 2345,
          "policyHolder": {
              "attType": 50,
              "attachment": "",
              "specialClause": "特别条款",
              "cardType": 1,
              "linkAddress": "",
              "subjectType": 1,
              "cardNo": "110101199003076157",
              "telNo": "",
              "subjectName": ""
          }
      }
  }
  }
  //获取保险公司
  async companyQueryList() {
    let result = this.ctx.request.body;
    console.log(result);
    this.ctx.body = {
      "code": 200,
      "message": "请求成功",
      "data": [
          {
              "companyId": "600334743522893824",
              "companyName": "是是22是"
          },
          {
              "companyId": "600334801857273856",
              "companyName": "是是222是"
          },
          {
              "companyId": "600341291322171392",
              "companyName": "是是22233是s33"
          }
      ]
    }

  }

}


module.exports = EnteryController;
