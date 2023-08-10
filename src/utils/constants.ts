/**
 * Created by 芋道源码
 *
 * 枚举类
 */

// 全局通用状态枚举
export const CommonStatusEnum = {
  ENABLE: 0, // 开启
  DISABLE: 1 // 禁用
}

/**
 * 菜单的类型枚举
 */
export const SystemMenuTypeEnum = {
  DIR: 1, // 目录
  MENU: 2, // 菜单
  BUTTON: 3 // 按钮
}

/**
 * 角色的类型枚举
 */
export const SystemRoleTypeEnum = {
  SYSTEM: 1, // 内置角色
  CUSTOM: 2 // 自定义角色
}

/**
 * 数据权限的范围枚举
 */
export const SystemDataScopeEnum = {
  ALL: 1, // 全部数据权限
  DEPT_CUSTOM: 2, // 指定部门数据权限
  DEPT_ONLY: 3, // 部门数据权限
  DEPT_AND_CHILD: 4, // 部门及以下数据权限
  DEPT_SELF: 5 // 仅本人数据权限
}

/**
 * 代码生成模板类型
 */
export const InfraCodegenTemplateTypeEnum = {
  CRUD: 1, // 基础 CRUD
  TREE: 2, // 树形 CRUD
  SUB: 3 // 主子表 CRUD
}

/**
 * 任务状态的枚举
 */
export const InfraJobStatusEnum = {
  INIT: 0, // 初始化中
  NORMAL: 1, // 运行中
  STOP: 2 // 暂停运行
}

/**
 * API 异常数据的处理状态
 */
export const InfraApiErrorLogProcessStatusEnum = {
  INIT: 0, // 未处理
  DONE: 1, // 已处理
  IGNORE: 2 // 已忽略
}

/**
 * 用户的社交平台的类型枚举
 */
export const SystemUserSocialTypeEnum = {
  DINGTALK: {
    title: '钉钉',
    type: 20,
    source: 'dingtalk',
    img: 'https://s1.ax1x.com/2022/05/22/OzMDRs.png'
  },
  WECHAT_ENTERPRISE: {
    title: '企业微信',
    type: 30,
    source: 'wechat_enterprise',
    img: 'https://s1.ax1x.com/2022/05/22/OzMrzn.png'
  }
}

/**
 * 支付渠道枚举
 */
export const PayChannelEnum = {
  WX_PUB: {
    code: 'wx_pub',
    name: '微信 JSAPI 支付'
  },
  WX_LITE: {
    code: 'wx_lite',
    name: '微信小程序支付'
  },
  WX_APP: {
    code: 'wx_app',
    name: '微信 APP 支付'
  },
  WX_BAR: {
    code: 'wx_bar',
    name: '微信条码支付'
  },
  ALIPAY_PC: {
    code: 'alipay_pc',
    name: '支付宝 PC 网站支付'
  },
  ALIPAY_WAP: {
    code: 'alipay_wap',
    name: '支付宝 WAP 网站支付'
  },
  ALIPAY_APP: {
    code: 'alipay_app',
    name: '支付宝 APP 支付'
  },
  ALIPAY_QR: {
    code: 'alipay_qr',
    name: '支付宝扫码支付'
  },
  ALIPAY_BAR: {
    code: 'alipay_bar',
    name: '支付宝条码支付'
  },
  MOCK: {
    code: 'mock',
    name: '模拟支付'
  }
}

/**
 * 支付的展示模式每局
 */
export const PayDisplayModeEnum = {
  URL: {
    mode: 'url'
  },
  IFRAME: {
    mode: 'iframe'
  },
  FORM: {
    mode: 'form'
  },
  QR_CODE: {
    mode: 'qr_code'
  },
  APP: {
    mode: 'app'
  }
}

/**
 * 支付类型枚举
 */
export const PayType = {
  WECHAT: 'WECHAT',
  ALIPAY: 'ALIPAY',
  MOCK: 'MOCK'
}

/**
 * 支付订单状态枚举
 */
export const PayOrderStatusEnum = {
  WAITING: {
    status: 0,
    name: '未支付'
  },
  SUCCESS: {
    status: 10,
    name: '已支付'
  },
  CLOSED: {
    status: 20,
    name: '未支付'
  }
}

/**
 * 商品 SPU 状态
 */
export const ProductSpuStatusEnum = {
  RECYCLE: {
    status: -1,
    name: '回收站'
  },
  DISABLE: {
    status: 0,
    name: '下架'
  },
  ENABLE: {
    status: 1,
    name: '上架'
  }
}

/**
 * 优惠劵模板的有限期类型的枚举
 */
export const CouponTemplateValidityTypeEnum = {
  DATE: {
    type: 1,
    name: '固定日期可用'
  },
  TERM: {
    type: 2,
    name: '领取之后可用'
  }
}

/**
 * 营销的商品范围枚举
 */
export const PromotionProductScopeEnum = {
  ALL: {
    scope: 1,
    name: '全部商品参与'
  },
  SPU: {
    scope: 2,
    name: '指定商品参与'
  }
}

/**
 * 营销的条件类型枚举
 */
export const PromotionConditionTypeEnum = {
  PRICE: {
    type: 10,
    name: '满 N 元'
  },
  COUNT: {
    type: 20,
    name: '满 N 件'
  }
}

/**
 * 优惠类型枚举
 */
export const PromotionDiscountTypeEnum = {
  PRICE: {
    type: 1,
    name: '满减'
  },
  PERCENT: {
    type: 2,
    name: '折扣'
  }
}
