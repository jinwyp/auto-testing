const Router = require('koa-router')

const router = new Router()

router.post('/api/pintuan/open/list', (ctx, next) => {

  ctx.body = {
    "code": 1511200,  // 返回码，1511200：成功，其它是错误
    "expiretime": 0,  // 是否缓存
    "msg": "",  // 当返回码不是1511200时才会出现，返回错误信息
    "data": {// 数据内容
      "total": 2,  // 数据总数，返回码为true时才会返回。
      "page": 1,  //  当前页
      "size": 2,  // 返回的数据数
      "list": [
        {
          "id": '101',  // 活动ID
          "pid": 'd36d5cf714224a67a1bde0d917605655',
          "title": "商品标题",  //
          "brand": "品牌 ",  //
          "businessname": "A",  //  商家名称
          "businesstype": 2,  //  商家类型
          "status": "进行中",  // 状态要转换成显示格式
          "marketprice": 123.05,  //  原价
          "teamprice": 45.99,  //  团价
          "teamtotalcount": 25,  // 已团购人数（下单不支付也算）
          "teamlimitcount": 2,  // 几人团
          "imageurl": "http://files.eyee.com/Shop/system/main/2c79214912334485ae5e4d74f6615721.jpg!w400",  // 图片URL
          "users": [//  虚拟用户
            "//files.eyee.com/mcdn/static/img/service_black.png",  // 团购用户头像URL
          ]
        },
        {
          "id": '102',  // 活动ID
          "pid": 'd36d5cf714224a67a1bde0d917605655',
          "title": "商品标题",  //
          "brand": "帅哥 ",  //
          "businessname": "A",  //  商家名称
          "businesstype": 1,  //  商家类型
          "status": "进行中",  // 状态要转换成显示格式
          "marketprice": 123.05,  //  原价
          "teamprice": 45.99,  //  团价
          "teamtotalcount": 25,  // 已团购人数（下单不支付也算）
          "teamlimitcount": 3,  // 几人团
          "imageurl": "https://files.eyee.com/Shop/system/main/524d2a9ab7de42889883d1870e998382.jpg!c30",  // 图片URL
          "users": [//  虚拟用户
            "//files.eyee.com/mcdn/static/img/service_black.png", "//files.eyee.com/mcdn/static/img/service_black.png"  // 团购用户头像URL
          ]
        },
        {
          "id": '101',  // 活动ID
          "pid": 'd36d5cf714224a67a1bde0d917605655',
          "title": "商品标题",  //
          "brand": "品牌 ",  //
          "businessname": "A",  //  商家名称
          "businesstype": 2,  //  商家类型
          "status": "进行中",  // 状态要转换成显示格式
          "marketprice": 123.05,  //  原价
          "teamprice": 45.99,  //  团价
          "teamtotalcount": 25,  // 已团购人数（下单不支付也算）
          "teamlimitcount": 2,  // 几人团
          "imageurl": "http://files.eyee.com/Shop/system/main/2c79214912334485ae5e4d74f6615721.jpg!w400",  // 图片URL
          "users": [//  虚拟用户
            "//files.eyee.com/mcdn/static/img/service_black.png",  // 团购用户头像URL
          ]
        },
        {
          "id": '102',  // 活动ID
          "pid": 'd36d5cf714224a67a1bde0d917605655',
          "title": "商品标题",  //
          "brand": "帅哥 ",  //
          "businessname": "A",  //  商家名称
          "businesstype": 1,  //  商家类型
          "status": "进行中",  // 状态要转换成显示格式
          "marketprice": 123.05,  //  原价
          "teamprice": 45.99,  //  团价
          "teamtotalcount": 25,  // 已团购人数（下单不支付也算）
          "teamlimitcount": 3,  // 几人团
          "imageurl": "https://files.eyee.com/Shop/system/main/524d2a9ab7de42889883d1870e998382.jpg!c30",  // 图片URL
          "users": [//  虚拟用户
            "//files.eyee.com/mcdn/static/img/service_black.png", "//files.eyee.com/mcdn/static/img/service_black.png"  // 团购用户头像URL
          ]
        },
        {
          "id": '101',  // 活动ID
          "pid": 'd36d5cf714224a67a1bde0d917605655',
          "title": "商品标题",  //
          "brand": "品牌 ",  //
          "businessname": "A",  //  商家名称
          "businesstype": 2,  //  商家类型
          "status": "进行中",  // 状态要转换成显示格式
          "marketprice": 123.05,  //  原价
          "teamprice": 45.99,  //  团价
          "teamtotalcount": 25,  // 已团购人数（下单不支付也算）
          "teamlimitcount": 2,  // 几人团
          "imageurl": "http://files.eyee.com/Shop/system/main/2c79214912334485ae5e4d74f6615721.jpg!w400",  // 图片URL
          "users": [//  虚拟用户
            "//files.eyee.com/mcdn/static/img/service_black.png",  // 团购用户头像URL
          ]
        },
        {
          "id": '102',  // 活动ID
          "pid": 'd36d5cf714224a67a1bde0d917605655',
          "title": "商品标题",  //
          "brand": "帅哥 ",  //
          "businessname": "A",  //  商家名称
          "businesstype": 1,  //  商家类型
          "status": "进行中",  // 状态要转换成显示格式
          "marketprice": 123.05,  //  原价
          "teamprice": 45.99,  //  团价
          "teamtotalcount": 25,  // 已团购人数（下单不支付也算）
          "teamlimitcount": 3,  // 几人团
          "imageurl": "https://files.eyee.com/Shop/system/main/524d2a9ab7de42889883d1870e998382.jpg!c30",  // 图片URL
          "users": [//  虚拟用户
            "//files.eyee.com/mcdn/static/img/service_black.png", "//files.eyee.com/mcdn/static/img/service_black.png"  // 团购用户头像URL
          ]
        }
      ]
    }
  }

});



router.post('/api/pintuan/open/lasted', (ctx, next) => {

  ctx.body = {
    "code": 1511200,  // 返回码，1511200：成功，其它是错误
    "expiretime": 0,  // 是否缓存
    "msg": "",  // 当返回码不是1511200时才会出现，返回错误信息
    "data": {  // class list
      "total": 100,  // 数据总数，返回码为true时才会返回。
      "page": 2,  //  当前页
      "size": 5,  // 返回的数据数
      "list": [
        {
          "id": 102,  // 活动ID
          "pid": 'd36d5cf714224a67a1bde0d917605655',
          "title": "商品标题",  //
          "brand": "品牌 ",  //
          "businessname": "A",  //  商家名称
          "businesstype": 1,  //  商家类型
          "status": "进行中",  // 状态要转换成显示格式
          "marketprice": 123.05,  //  原价
          "teamprice": 45.99,  //  团价
          "teamtotalcount": 25,  // 已团购人数（下单不支付也算）
          "teamlimitcount": 25,  // 几人团
          "imageurl": "https://files.eyee.com/Shop/system/main/c3038f05b48e45faa442514dbec31a56.jpg!w650"  // 图片URL
        },
        {
          "id": 1022,  // 活动ID
          "pid": 'd36d5cf714224a67a1bde0d917605655',
          "title": "商品标题22",  //
          "brand": "品牌22 ",  //
          "businessname": "A22",  //  商家名称
          "businesstype": 1,  //  商家类型
          "status": "进行中",  // 状态要转换成显示格式
          "marketprice": 123.05,  //  原价
          "teamprice": 45.99,  //  团价
          "teamtotalcount": 25,  // 已团购人数（下单不支付也算）
          "teamlimitcount": 25,  // 几人团
          "imageurl": "https://files.eyee.com/Shop/system/main/c3038f05b48e45faa442514dbec31a56.jpg!w650"  // 图片URL

        }
      ]
    }
  }

});
router.get('/api/pintuan/front/retrieve/:teamId', (ctx, next) => {

  ctx.body = {
    "code": 1511200,  //  返回码，1511200是成功，其它是失败
    "expiretime": 0,  // 是否缓存
    "msg": "",  //  错误信息，只有在code != 1511200时才会有这个属性
    "data":  // 数据内容
      {
        "order": {
          "id": "id", // 活动ID
          "pid": "4de09ef485e244f780f2b1a6da025d67",
          "prokey":"商品编号",// #
          "size":"大小", //#
          "color":"颜色",// #
          "pname": "sss",  //
          "brand": "品牌 ",  //
          "businessname": "A",  //  商家名称
          "businessid":"A",// # 商家ID
          "businesstype": 1,  //  商家类型
          "marketprice": 123.05,  //  原价
          "teamprice": 45.99,  //  团价
          "teamtotalcount": 25,  // 已团购人数（下单不支付也算）
          "teamlimitcount": 3,  // 几人团
          "payedat":"2017-03-11 09:30:11", //#支付时间
          "createdat":"2017-03-11 09:30:11", //#创建时间
          "imageurl": "https://files.eyee.com/Shop/system/main/9e9b41ce187e4ecc9fe9e5559a6f44b4.jpg!w400"  // 图片URL
        },
        "endtime": "2018-05-23 19:00:11",  // 结束时间
        "remainingcount": 1,  // 还剩几人成团,如果为0则满团
        "headimgurl": "https://files.eyee.com/Shop/system/main/9e9b41ce187e4ecc9fe9e5559a6f44b4.jpg!w400",  // 团长头像
        "userid": "2525676409f649869882c123664117ef", // 团用户ID
        "nickname": "用户名",  // 团长
        "ispaid":true,
        "status":1,  // 团状态1：进行中，2：成功，3：失败，4：已删除
        "orderstatus": 1, // 0：未支付，1：已支付，2：已发货，3：已收货，4：已完成，5：已删除，6：已关闭
        "orderid":'jgfjhg',
        "orderpayexpiretime":"2018-05-23 18:00:10", //#未支付结束订单时间
        "joins": [
          {
            "headimgurl": "https://files.eyee.com/Shop/system/main/9e9b41ce187e4ecc9fe9e5559a6f44b4.jpg!w400",  // 团长头像
            "nickname": "用户名", //
            "userid": "22", //
            "ispaid":false,
            "orderstatus":1 // 0：未支付，1：已支付，2：已发货，3：已收货，4：已完成，5：已删除，6：已关闭

          }
        ],
        "pagestatus":4 // 冗余计算值，1: 团详情－拼团成功，2：团详情－开团中－开团，3：团详情－失败－开团，4：好友看到拼团中，5：好友看到拼团失败，6：好友看到已成团，7：订单详情－拼团成功，8：订单详情－拼团失败，9：订单详情－拼团中，10：订单详情－待支付，11：订单详情－支付失败

      }
  }



});



router.post('/api/pintuan/open/openList', (ctx, next) => {

  ctx.body = {
    "code": 1511200,   // 返回码，1511200：成功，其它是错误
    "expiretime": 0,   // 是否缓存
    "msg": "",   // 当返回码不是1511200时才会出现，返回错误信息
    "data": {   // class list
      "page": 1,   // 当前页面
      "total": 10,   // 总页面数量
      "size": 5,   // 返回的数据数
      "list": [
        {
          "teamid"         : "111",    // team id
          "endtime"        : "2018-04-21 09:30:15",   // 结束时间
          "headImgUrl"     : "http://api.eyee.com/Shop/system/main/26d5a45688a54998af90330c7504e554.jpg",   // 团长头像
          "nickname"       : "用户名AA",   //
          "remainingcount" : 1  // 还剩几人成团
        },
        {
          "teamid"         : "122",    // team id
          "endtime"        : "2018-04-21 12:30:20",   // 结束时间
          "headImgUrl"     : "http://api.eyee.com/Shop/system/main/26d5a45688a54998af90330c7504e554.jpg",   // 团长头像
          "nickname"       : "用户名222",   //
          "remainingcount" : 1  // 还剩几人成团
        },
        {
          "teamid"         : "123",    // team id
          "endtime"        : "2018-04-22 08:30:51",   // 结束时间
          "headImgUrl"     : "http://api.eyee.com/Shop/system/main/26d5a45688a54998af90330c7504e554.jpg",   // 团长头像
          "nickname"       : "用户名333",   //
          "remainingcount" : 1  // 还剩几人成团
        },
        {
          "teamid"         : "144",    // team id
          "endtime"        : "2018-04-20 12:30:11",   // 结束时间
          "headImgUrl"     : "http://api.eyee.com/Shop/system/main/26d5a45688a54998af90330c7504e554.jpg",   // 团长头像
          "nickname"       : "用户名444",   //
          "remainingcount" : 1  // 还剩几人成团
        },
        {
          "teamid"         : "155",    // team id
          "endtime"        : "2018-04-20 13:30:11",   // 结束时间
          "headImgUrl"     : "http://api.eyee.com/Shop/system/main/26d5a45688a54998af90330c7504e554.jpg",   // 团长头像
          "nickname"       : "用户名555",   //
          "remainingcount" : 1  // 还剩几人成团
        },
        {
          "teamid"         : "211",    // team id
          "endtime"        : "2018-04-20 14:30:11",   // 结束时间
          "headImgUrl"     : "http://api.eyee.com/Shop/system/main/26d5a45688a54998af90330c7504e554.jpg",   // 团长头像
          "nickname"       : "用户名AA",   //
          "remainingcount" : 1  // 还剩几人成团
        },
        {
          "teamid"         : "222",    // team id
          "endtime"        : "2018-04-20 15:30:11",   // 结束时间
          "headImgUrl"     : "http://api.eyee.com/Shop/system/main/26d5a45688a54998af90330c7504e554.jpg",   // 团长头像
          "nickname"       : "用户名222",   //
          "remainingcount" : 1  // 还剩几人成团
        },
        {
          "teamid"         : "223",    // team id
          "endtime"        : "2018-04-20 16:30:11",   // 结束时间
          "headImgUrl"     : "http://api.eyee.com/Shop/system/main/26d5a45688a54998af90330c7504e554.jpg",   // 团长头像
          "nickname"       : "用户名333",   //
          "remainingcount" : 1  // 还剩几人成团
        },
        {
          "teamid"         : "244",    // team id
          "endtime"        : "2018-04-20 17:30:11",   // 结束时间
          "headImgUrl"     : "http://api.eyee.com/Shop/system/main/26d5a45688a54998af90330c7504e554.jpg",   // 团长头像
          "nickname"       : "用户名444",   //
          "remainingcount" : 1  // 还剩几人成团
        },
        {
          "teamid"         : "255",    // team id
          "endtime"        : "2018-04-20 18:30:11",   // 结束时间
          "headImgUrl"     : "http://api.eyee.com/Shop/system/main/26d5a45688a54998af90330c7504e554.jpg",   // 团长头像
          "nickname"       : "用户名555",   //
          "remainingcount" : 1  // 还剩几人成团
        },{
          "teamid"         : "311",    // team id
          "endtime"        : "2018-04-20 18:30:11",   // 结束时间
          "headImgUrl"     : "http://api.eyee.com/Shop/system/main/26d5a45688a54998af90330c7504e554.jpg",   // 团长头像
          "nickname"       : "用户名AA",   //
          "remainingcount" : 1  // 还剩几人成团
        },
        {
          "teamid"         : "322",    // team id
          "endtime"        : "2018-04-20 19:30:11",   // 结束时间
          "headImgUrl"     : "http://api.eyee.com/Shop/system/main/26d5a45688a54998af90330c7504e554.jpg",   // 团长头像
          "nickname"       : "用户名222",   //
          "remainingcount" : 1  // 还剩几人成团
        },
        {
          "teamid"         : "323",    // team id
          "endtime"        : "2018-04-20 20:30:11",   // 结束时间
          "headImgUrl"     : "http://api.eyee.com/Shop/system/main/26d5a45688a54998af90330c7504e554.jpg",   // 团长头像
          "nickname"       : "用户名333",   //
          "remainingcount" : 1  // 还剩几人成团
        },
        {
          "teamid"         : "344",    // team id
          "endtime"        : "2018-04-20 09:30:11",   // 结束时间
          "headImgUrl"     : "http://api.eyee.com/Shop/system/main/26d5a45688a54998af90330c7504e554.jpg",   // 团长头像
          "nickname"       : "用户名444",   //
          "remainingcount" : 1  // 还剩几人成团
        },
        {
          "teamid"         : "355",    // team id
          "endtime"        : "2018-04-20 09:30:11",   // 结束时间
          "headImgUrl"     : "http://api.eyee.com/Shop/system/main/26d5a45688a54998af90330c7504e554.jpg",   // 团长头像
          "nickname"       : "用户名555",   //
          "remainingcount" : 1  // 还剩几人成团
        }
      ],
      "teamprice"      : 99,   // 团购价
      "teamlimitcount" : 10,   // 几人团
      "teamtotalcount" : 100,  // 团购总人数
      "pintuanId" : "abcdefg"

    }
  }


});





router.get('/api/pintuan/front/infoByOrderId/:orderNo', (ctx, next) => {

  ctx.body = {
    "code": 1511200,  // 返回码，1511200：成功，其它是错误
    "msg": "",  // 当返回码不是1511200时才会出现，返回错误信息
    "data":  // 数据内容
      {
        "share": {
          "icon": "https://i04piccdn.sogoucdn.com/8bfe61a75cb20827",  //  图片
          "title": "Nike shoe",  // 标题
          "content": "dafddada",  // 内容
          "url": "http://www.eyee.com/xx",  // 分享URL
          "type": 1,  // 类型，这个固定为1
          "xcxurl": "http.//www.eyee.com/xxx",  // 小程序URL，为空是没有小程序
        },
        "teamid": "eee",   // team id
        "endtime": "2018-05-03 12:00:00",  // 结束时间
        "teamlimitcount": '4',
        "remainingcount": 1,  // 还剩几人成团
        "userid":"22222",
        "headimgurl": "https://files.eyee.com/Shop/system/main/8370f22b0d3e482fa502478d8b5030de.jpg!w400",  // 团长头像
        "nickname": "用户名",  // 团长
        "status":2,  // 团状态0:未支付，1：进行中，2：成功，3：失败，4：已删除
        "orderstatus": 1, // 0：未支付，1：已支付，2：已发货，3：已收货，4：已完成，5：已删除，6：已关闭
        "ispaid":true,
        "orderpayexpiretime":"2018-05-04 12:00:10", //#未支付结束订单时间
        "joins": [
          {
            "headimgurl": "https://files.eyee.com/Shop/system/main/8370f22b0d3e482fa502478d8b5030de.jpg!w400",  // 团长头像
            "nickname": "用户名",  //
            "orderstatus": 0,// 0：未支付，1：已支付，2：已发货，3：已收货，4：已完成，5：已删除，6：已关闭
            "ispaid":false,
            "userid":"2525676409f649869882c123664117ef"
          }
        ],
        "pagestatus":3 // 冗余计算值，1: 支付成功－参团，2：支付失败－参团，3：支付成功－开团，4：支付失败－开团
      }
  }



});




router.post('/api/pintuan/front/open', (ctx, next) => {

  ctx.body = {
    "code": 1511200,  // 返回码，1511200：成功，其它是错误
    "msg": "",  // 当返回码不是1511200时才会出现，返回错误信息
  }

});




router.post('/api/pintuan/front/share', (ctx, next) => {

  ctx.body = {
    "code": 1511200,  // 返回码，1511200：成功，其它是错误
    "msg": "",  // 当返回码不是1511200时才会出现，返回错误信息
  }

});



router.post('/api/pintuan/front/join', (ctx, next) => {

  ctx.body = {
    "code": 1511200,  // 返回码，1511200：成功，其它是错误
    "msg": "",  // 当返回码不是1511200时才会出现，返回错误信息
  }

});




router.post('/api/pintuan/admin/updateOrderStatus', (ctx, next) => {

  ctx.body = {
    "code": 1511200,  // 返回码，1511200：成功，其它是错误
    "msg": "",  // 当返回码不是1511200时才会出现，返回错误信息
  }

});

router.post('/api/pintuan/admin/open', (ctx, next) => {

  ctx.body = {
    "code": 1511200,  // 返回码，1511200：成功，其它是错误
    "msg": "",  // 当返回码不是1511200时才会出现，返回错误信息
  }

});




router.post('/api/pintuan/front/adminList', (ctx, next) => {

  ctx.body = {
    "code": 1511200,  // 返回码，1511200：成功，其它是错误
    "expiretime": 0,  // 是否缓存
    "msg": "",  // 当返回码不是1511200时才会出现，返回错误信息
    "data": {  // class list
      "page": 1,  // 当前页面
      "total": 2,  // 总页面数量
      "size": 2,  // 返回的数据数
      "list": [
        {
          "product": {
            "id": "id",  // 活动ID
            "pid": "产品id",
            "title": "商品标题",  //
            "brand": "品牌 ",  //
            "businessid": "5ea3b230baa54c089f7260adc759ebb7",  //  商家ID
            "businessname": "A",  //  商家名称
            "businesstype": '1',  //  商家类型
            "color": "黑色",  //  商品规格
            "size": "M",  //  商品尺寸
            "productcount": "45",  //
            "marketprice": '123.05',  //  原价
            "teamprice": '45.99',  //  团价
            "teamtotalcount": '25',  // 已团购人数（下单不支付也算）
            "teamlimitcount": '25',  // 几人团
            "imageurl": "https://files.eyee.com/Shop/system/main/8370f22b0d3e482fa502478d8b5030de.jpg!w400"  // 图片URL
          },
          "ispaid":true,
          "orderpayexpiretime":"2018-05-04 13:00:10", //#未支付结束订单时间
          "teamid": "222",   // team id
          "joinid": "2525676409f649869882c123664117ef",
          "endtime": "2018-05-04 18:30:11",  // 结束时间
          "remainingcount": '3',  // 还剩几人成团
          "status": 1,  // 团状态1：进行中，2：成功，3：失败，4：已删除
          "orderstatus": 1,
          "orderid":"183404818162092", //#订单ID
          "productamount": '1',  // 商品总额
          "expressamount": '1',  // 运费
          "totalamount": '1',  // 订单总额
          "share": {
            "title": "Nike shoe",  // 标题
            "content": "dafddada",  // 内容
            "url": "http://www.eyee.com/xx", // 分享URL
            "type": '1',  // 类型，这个固定为1
            "xcxurl": "http.//www.eyee.com/xxx",  // 小程序URL，为空是没有小程序

          }
        },
        {
          "product": {
            "id": "id",  // 活动ID
            "pid": "产品id",
            "title": "商品标题",  //

            "brand": "品牌 ",  //
            "businessid": "5ea3b230baa54c089f7260adc759ebb7",  //  商家ID
            "businessname": "商家名称",  //  商家名称
            "businesstype": '2',  //  商家类型
            "color": "黑色",  //  商品规格
            "size": "M",  //  商品尺寸
            "productcount": "45",  //
            "marketprice": '123.05',  //  原价
            "teamprice": '45.99',  //  团价
            "teamtotalcount": '25',  // 已团购人数（下单不支付也算）
            "teamlimitcount": '25',  // 几人团
            "imageurl": "https://files.eyee.com/Shop/system/main/8370f22b0d3e482fa502478d8b5030de.jpg!w400"  // 图片URL
          },
          "teamid": "2525676409f649869882c123664117ef",   // team id
          "joinid":'222',
          "orderpayexpiretime":"2018-05-03 15:00:10", //#未支付结束订单时间
          "endtime": "2018-04-26 09:30:11",  // 结束时间
          "remainingcount": '1',  // 还剩几人成团
          "status": 2,  // 团状态1：进行中，2：成功，3：失败，4：已删除
          "orderstatus":1,
          "productamount": '1',  // 商品总额
          "expressamount": '1',  // 运费
          "totalamount": '1',  // 订单总额
          "orderid":'188046916118290',
          "share": {
            "title": "Nike shoe",  // 标题
            "content": "dafddada",  // 内容
            "url": "http://www.eyee.com/xx", // 分享URL
            "type": '1',  // 类型，这个固定为1
            "xcxurl": "http.//www.eyee.com/xxx",  // 小程序URL，为空是没有小程序

          }
        }
      ]

    }
  }



});




module.exports = router
