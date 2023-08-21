import { OrderVO } from '@/api/mall/trade/order'

export const testData: OrderVO = [
  {
    id: 2,
    no: '20230817002',
    createTime: new Date('2023-08-17T11:30:00'),
    type: 2,
    terminal: 10,
    userId: 1002,
    userIp: '192.168.1.2',
    userRemark: 'Urgent delivery required',
    status: 20,
    productCount: 2,
    finishTime: null,
    cancelTime: null,
    cancelType: null,
    remark: '',
    payOrderId: 10002,
    payed: false,
    payTime: new Date('2023-08-17T12:30:00'),
    payChannelCode: 'wx_app',
    originalPrice: 80,
    orderPrice: 80,
    discountPrice: 0,
    deliveryPrice: 5,
    adjustPrice: 0,
    payPrice: 85,
    deliveryTemplateId: 2002,
    logisticsId: null,
    logisticsNo: '',
    deliveryStatus: 0,
    deliveryTime: null,
    receiveTime: null,
    receiverName: '李四',
    receiverMobile: '19855568989',
    receiverAreaId: 4002,
    receiverPostCode: 54321,
    receiverDetailAddress: '翻斗花园',
    afterSaleStatus: 0,
    refundPrice: 0,
    couponId: null,
    couponPrice: 0,
    pointPrice: 0,
    receiverAreaName: '北京市朝阳区',
    items: [
      {
        id: 103,
        userId: 1002,
        orderId: 2,
        spuId: 5003,
        spuName: '毛绒鸭子',
        skuId: 6003,
        picUrl:
          'http://127.0.0.1:48080/admin-api/infra/file/5/get/20220723041544165856414464011_BIG.jpg',
        count: 1,
        originalPrice: 40,
        originalUnitPrice: 40,
        discountPrice: 0,
        payPrice: 40,
        orderPartPrice: 40,
        orderDividePrice: 40,
        afterSaleStatus: 0,
        properties: [
          { propertyId: 7001, propertyName: '颜色', valueId: 8004, valueName: '黄色' },
          { propertyId: 7002, propertyName: '尺寸', valueId: 8002, valueName: '小鸭子' }
        ]
      },
      {
        id: 104,
        userId: 1002,
        orderId: 2,
        spuId: 5004,
        spuName: '毛绒鸭子',
        skuId: 6004,
        picUrl:
          'http://127.0.0.1:48080/admin-api/infra/file/5/get/20220723041544165856414464011_BIG.jpg',
        count: 1,
        originalPrice: 40,
        originalUnitPrice: 40,
        discountPrice: 0,
        payPrice: 40,
        orderPartPrice: 40,
        orderDividePrice: 40,
        afterSaleStatus: 0,
        properties: [
          { propertyId: 7001, propertyName: '颜色', valueId: 8004, valueName: '黄色' },
          { propertyId: 7002, propertyName: '尺寸', valueId: 8002, valueName: '大鸭子' }
        ]
      }
    ],
    user: {
      id: 1002,
      nickname: '小妮子',
      avatar: 'https://example.com/images/avatar.jpg'
    }
  },
  {
    id: 3,
    no: '20230817003',
    createTime: new Date('2023-08-17T12:00:00'),
    type: 1,
    terminal: 10,
    userId: 1003,
    userIp: '192.168.1.3',
    userRemark: '',
    status: 10,
    productCount: 1,
    finishTime: new Date('2023-08-18T09:15:00'),
    cancelTime: null,
    cancelType: null,
    remark: '',
    payOrderId: 10003,
    payed: true,
    payTime: new Date('2023-08-17T12:30:00'),
    payChannelCode: 'alipay_app',
    originalPrice: 25,
    orderPrice: 20,
    discountPrice: 5,
    deliveryPrice: 5,
    adjustPrice: 0,
    payPrice: 20,
    deliveryTemplateId: 2001,
    logisticsId: 3002,
    logisticsNo: 'DEF987654',
    deliveryStatus: 2,
    deliveryTime: new Date('2023-08-18T10:30:00'),
    receiveTime: new Date('2023-08-19T11:30:00'),
    receiverName: '张三',
    receiverMobile: '13988886656',
    receiverAreaId: 4003,
    receiverPostCode: 67890,
    receiverDetailAddress: '成华大道',
    afterSaleStatus: 0,
    refundPrice: 0,
    couponId: 2001,
    couponPrice: 5,
    pointPrice: 0,
    receiverAreaName: '四川省成都市',
    items: [
      {
        id: 105,
        userId: 1003,
        orderId: 3,
        spuId: 5005,
        spuName: '华为',
        skuId: 6005,
        picUrl: 'http://127.0.0.1:48080/admin-api/infra/file/5/get/sj.jpg',
        count: 1,
        originalPrice: 20,
        originalUnitPrice: 20,
        discountPrice: 5,
        payPrice: 15,
        orderPartPrice: 15,
        orderDividePrice: 15,
        afterSaleStatus: 0,
        properties: [
          { propertyId: 7001, propertyName: '颜色', valueId: 8006, valueName: '紫色' },
          { propertyId: 7002, propertyName: '选配', valueId: 8002, valueName: '标配' }
        ]
      }
    ],
    user: {
      id: 1003,
      nickname: '无敌最俊朗',
      avatar: 'https://example.com/images/avatar.jpg'
    }
  }
]
