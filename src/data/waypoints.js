// 途经点数据 - 坐标 + 多图片 + 描述
// 图片路径基于 public./chuangxi-images/

const IMG = './chuangxi-images'

export const waypointData = {
  // ===== D1-2 成都 =====
  chengdu: {
    name: '成都', lng: 104.0668, lat: 30.5728, elev: '500m', type: 'city',
    desc: '天府之国，旅程起点与终点',
    images: [`${IMG}/post1/01-川西小环线封面.webp`],
  },
  kuanzhai: {
    name: '宽窄巷子', lng: 104.0545, lat: 30.6698, type: 'spot',
    desc: '老成都缩影，清朝古街，文艺小店与茶馆林立',
    images: [],
  },
  chunxi: {
    name: '春熙路/太古里', lng: 104.0817, lat: 30.6572, type: 'spot',
    desc: '成都潮流地标，IFS爬墙熊猫打卡',
    images: [],
  },

  // ===== D3 去程 =====
  dujiangyan: {
    name: '都江堰', lng: 103.6484, lat: 30.9982, type: 'spot',
    desc: '世界水利文化鼻祖，2000多年前的水利工程奇迹',
    images: [
      `${IMG}/waypoint-images/route/都江堰/1.jpg`,
      `${IMG}/waypoint-images/route/都江堰/2.jpg`,
      `${IMG}/waypoint-images/route/都江堰/3.jpg`,
      `${IMG}/waypoint-images/route/都江堰/4.jpg`,
      `${IMG}/waypoint-images/route/都江堰/5.jpg`,
    ],
  },
  balangshan: {
    name: '巴朗山垭口', lng: 102.8833, lat: 30.9500, elev: '4523m', type: 'pass',
    desc: '第一个高海拔垭口，云海翻涌，适应海拔的好地方',
    images: [
      `${IMG}/waypoint-images/route/巴朗山垭口/1.jpg`,
      `${IMG}/waypoint-images/route/巴朗山垭口/2.jpg`,
      `${IMG}/waypoint-images/route/巴朗山垭口/3.jpg`,
      `${IMG}/waypoint-images/route/巴朗山垭口/4.jpg`,
      `${IMG}/waypoint-images/route/巴朗山垭口/5.jpg`,
    ],
  },
  siguniangshan: {
    name: '四姑娘山', lng: 102.8983, lat: 31.1072, type: 'spot',
    desc: '远眺蜀山之后幺妹峰（6250m），猫鼻梁观景台',
    images: [
      `${IMG}/waypoint-images/route/四姑娘山/1.jpg`,
      `${IMG}/waypoint-images/route/四姑娘山/2.jpg`,
      `${IMG}/waypoint-images/route/四姑娘山/3.jpg`,
      `${IMG}/waypoint-images/route/四姑娘山/4.jpg`,
      `${IMG}/waypoint-images/route/四姑娘山/5.jpg`,
      `${IMG}/post6/01-封面.webp`,
    ],
  },
  danba: {
    name: '丹巴 · 中路藏寨', lng: 101.9128, lat: 30.8786, elev: '2000m', type: 'city',
    desc: '千碉之国，美人谷，嘉绒藏族文化中心',
    images: [
      `${IMG}/waypoint-images/route/丹巴中路藏寨/1.jpg`,
      `${IMG}/waypoint-images/route/丹巴中路藏寨/2.jpg`,
      `${IMG}/waypoint-images/route/丹巴中路藏寨/3.jpg`,
      `${IMG}/waypoint-images/route/丹巴中路藏寨/4.jpg`,
      `${IMG}/waypoint-images/route/丹巴中路藏寨/5.jpg`,
    ],
  },

  // ===== D4 =====
  jiaju: {
    name: '甲居藏寨', lng: 101.8833, lat: 30.9167, type: 'spot',
    desc: '中国最美乡村之一，百幢藏式民居依山而建',
    images: [
      `${IMG}/waypoint-images/route/甲居藏寨/1.jpg`,
      `${IMG}/waypoint-images/route/甲居藏寨/2.jpg`,
      `${IMG}/waypoint-images/route/甲居藏寨/3.jpg`,
      `${IMG}/waypoint-images/route/甲居藏寨/4.jpg`,
      `${IMG}/waypoint-images/route/甲居藏寨/5.jpg`,
    ],
  },
  moshi: {
    name: '八美墨石公园', lng: 101.5283, lat: 30.5567, type: 'spot',
    desc: '异域星球般的糜棱岩石林地貌，格萨尔王发祥地',
    images: [
      `${IMG}/waypoint-images/route/八美墨石公园/1.jpg`,
      `${IMG}/waypoint-images/route/八美墨石公园/2.jpg`,
      `${IMG}/waypoint-images/route/八美墨石公园/3.jpg`,
      `${IMG}/waypoint-images/route/八美墨石公园/4.jpg`,
      `${IMG}/waypoint-images/route/八美墨石公园/5.jpg`,
    ],
  },
  tagong: {
    name: '塔公草原', lng: 101.5117, lat: 30.3319, type: 'spot',
    desc: '菩萨喜欢的地方，远眺雅拉雪山（5820m）',
    images: [
      `${IMG}/waypoint-images/route/塔公草原/1.jpg`,
      `${IMG}/waypoint-images/route/塔公草原/2.jpg`,
      `${IMG}/waypoint-images/route/塔公草原/3.jpg`,
      `${IMG}/waypoint-images/route/塔公草原/4.jpg`,
      `${IMG}/waypoint-images/route/塔公草原/5.jpg`,
      `${IMG}/post2/13-草原.webp`,
    ],
  },
  xinduqiao: {
    name: '新都桥', lng: 101.4928, lat: 30.0614, elev: '3460m', type: 'city',
    desc: '摄影天堂，10公里光影走廊，藏房、小溪、白杨林',
    images: [
      `${IMG}/waypoint-images/route/新都桥/1.jpg`,
      `${IMG}/waypoint-images/route/新都桥/2.jpg`,
      `${IMG}/waypoint-images/route/新都桥/3.jpg`,
      `${IMG}/waypoint-images/route/新都桥/4.jpg`,
      `${IMG}/waypoint-images/route/新都桥/5.jpg`,
      `${IMG}/post2/10-雪山1.webp`,
    ],
  },

  // ===== D5 =====
  gaoersi: {
    name: '高尔寺山垭口', lng: 101.3833, lat: 29.9833, elev: '4659m', type: 'pass',
    desc: '贡嘎雪山最佳观景点之一，天气好可见日照金山',
    images: [
      `${IMG}/waypoint-images/route/高尔寺山垭口/1.jpg`,
      `${IMG}/waypoint-images/route/高尔寺山垭口/2.jpg`,
      `${IMG}/waypoint-images/route/高尔寺山垭口/3.jpg`,
      `${IMG}/waypoint-images/route/高尔寺山垭口/4.jpg`,
      `${IMG}/waypoint-images/route/高尔寺山垭口/5.jpg`,
    ],
  },
  tianlu: {
    name: '天路十八弯', lng: 101.1167, lat: 30.0167, type: 'spot',
    desc: '雅江段壮观盘山公路，航拍视角下如巨龙盘旋',
    images: [
      `${IMG}/waypoint-images/route/天路十八弯/1.jpg`,
      `${IMG}/waypoint-images/route/天路十八弯/2.jpg`,
      `${IMG}/waypoint-images/route/天路十八弯/3.jpg`,
      `${IMG}/waypoint-images/route/天路十八弯/4.jpg`,
      `${IMG}/waypoint-images/route/天路十八弯/5.jpg`,
      `${IMG}/post2/03-天路十八弯.webp`,
    ],
  },
  kazila: {
    name: '卡子拉山垭口', lng: 100.7833, lat: 29.8667, elev: '4718m', type: 'pass',
    desc: '本次行程最高垭口之一，云海与草甸交织',
    images: [
      `${IMG}/waypoint-images/route/卡子拉山垭口/1.jpg`,
      `${IMG}/waypoint-images/route/卡子拉山垭口/2.jpg`,
      `${IMG}/waypoint-images/route/卡子拉山垭口/3.jpg`,
      `${IMG}/waypoint-images/route/卡子拉山垭口/4.jpg`,
      `${IMG}/waypoint-images/route/卡子拉山垭口/5.jpg`,
      `${IMG}/post2/04-卡子拉山.webp`,
    ],
  },
  maoya: {
    name: '毛垭大草原', lng: 100.4500, lat: 29.6500, type: 'spot',
    desc: '辽阔高原草甸，夏季野花遍地，牛羊成群',
    images: [
      `${IMG}/waypoint-images/route/毛垭大草原/1.jpg`,
      `${IMG}/waypoint-images/route/毛垭大草原/2.jpg`,
      `${IMG}/waypoint-images/route/毛垭大草原/3.jpg`,
      `${IMG}/waypoint-images/route/毛垭大草原/4.jpg`,
      `${IMG}/waypoint-images/route/毛垭大草原/5.jpg`,
    ],
  },
  litang: {
    name: '理塘', lng: 100.2692, lat: 30.0000, elev: '4014m', type: 'city',
    desc: '世界高城，仓央嘉措故乡，丁真的家乡',
    images: [
      `${IMG}/waypoint-images/route/理塘/1.jpg`,
      `${IMG}/waypoint-images/route/理塘/2.jpg`,
      `${IMG}/waypoint-images/route/理塘/3.jpg`,
      `${IMG}/waypoint-images/route/理塘/4.jpg`,
      `${IMG}/waypoint-images/route/理塘/5.jpg`,
      `${IMG}/post2/05-理塘.webp`,
    ],
  },
  haizishan: {
    name: '海子山', lng: 100.2500, lat: 29.4500, type: 'spot',
    desc: '古冰川遗迹，1145个大小海子如上帝洒落的珍珠',
    images: [
      `${IMG}/waypoint-images/route/海子山/1.jpg`,
      `${IMG}/waypoint-images/route/海子山/2.jpg`,
      `${IMG}/waypoint-images/route/海子山/3.jpg`,
      `${IMG}/waypoint-images/route/海子山/4.jpg`,
      `${IMG}/waypoint-images/route/海子山/5.jpg`,
    ],
  },
  daocheng: {
    name: '稻城', lng: 100.2981, lat: 29.0386, elev: '3750m', type: 'city',
    desc: '最后的香格里拉门户',
    images: [
      `${IMG}/waypoint-images/route/稻城/1.jpg`,
      `${IMG}/waypoint-images/route/稻城/2.jpg`,
      `${IMG}/waypoint-images/route/稻城/3.jpg`,
      `${IMG}/waypoint-images/route/稻城/4.jpg`,
      `${IMG}/waypoint-images/route/稻城/5.jpg`,
    ],
  },

  // ===== D6-7 景区内 =====
  shangriLa: {
    name: '香格里拉镇（日瓦）', lng: 100.2833, lat: 28.6833, elev: '2900m', type: 'city',
    desc: '亚丁景区入口，住宿餐饮集中地',
    images: [
      `${IMG}/waypoint-images/yading/香格里拉镇/1.jpg`,
      `${IMG}/waypoint-images/yading/香格里拉镇/2.jpg`,
      `${IMG}/waypoint-images/yading/香格里拉镇/3.jpg`,
      `${IMG}/waypoint-images/yading/香格里拉镇/4.jpg`,
      `${IMG}/waypoint-images/yading/香格里拉镇/5.jpg`,
    ],
  },
  chonggu: {
    name: '冲古寺', lng: 100.3167, lat: 28.6500, elev: '3880m', type: 'spot',
    desc: '亚丁景区内古老寺庙，三怙主神山脚下',
    images: [
      `${IMG}/waypoint-images/yading/冲古寺/1.jpg`,
      `${IMG}/waypoint-images/yading/冲古寺/2.jpg`,
      `${IMG}/waypoint-images/yading/冲古寺/3.jpg`,
      `${IMG}/waypoint-images/yading/冲古寺/4.jpg`,
      `${IMG}/waypoint-images/yading/冲古寺/5.jpg`,
      `${IMG}/post4/08-雪山倒影.webp`,
    ],
  },
  zhenzhu: {
    name: '珍珠海（卓玛拉措）', lng: 100.3250, lat: 28.6417, elev: '4100m', type: 'spot',
    desc: '仙乃日雪山下的翡翠湖泊，短线终点',
    images: [
      `${IMG}/waypoint-images/yading/珍珠海/1.jpg`,
      `${IMG}/waypoint-images/yading/珍珠海/2.jpg`,
      `${IMG}/waypoint-images/yading/珍珠海/3.jpg`,
      `${IMG}/waypoint-images/yading/珍珠海/4.jpg`,
      `${IMG}/waypoint-images/yading/珍珠海/5.jpg`,
      `${IMG}/post4/05-仙乃日.webp`,
    ],
  },
  luorong: {
    name: '洛绒牛场', lng: 100.3000, lat: 28.6167, elev: '4180m', type: 'spot',
    desc: '三座神山环绕的高山牧场，央迈勇脚下',
    images: [
      `${IMG}/waypoint-images/yading/洛绒牛场/1.jpg`,
      `${IMG}/waypoint-images/yading/洛绒牛场/2.jpg`,
      `${IMG}/waypoint-images/yading/洛绒牛场/3.jpg`,
      `${IMG}/waypoint-images/yading/洛绒牛场/4.jpg`,
      `${IMG}/waypoint-images/yading/洛绒牛场/5.jpg`,
      `${IMG}/post4/02-洛绒牛场.webp`,
    ],
  },
  niunai: {
    name: '牛奶海', lng: 100.2917, lat: 28.5917, elev: '4500m', type: 'spot',
    desc: '碧蓝如玉的高山湖泊，古冰川湖，川西最美湖泊之一',
    images: [
      `${IMG}/waypoint-images/yading/牛奶海/1.jpg`,
      `${IMG}/waypoint-images/yading/牛奶海/2.jpg`,
      `${IMG}/waypoint-images/yading/牛奶海/3.jpg`,
      `${IMG}/waypoint-images/yading/牛奶海/4.jpg`,
      `${IMG}/waypoint-images/yading/牛奶海/5.jpg`,
      `${IMG}/post4/03-牛奶海.webp`,
      `${IMG}/post5/03-牛奶海.webp`,
    ],
  },
  wuse: {
    name: '五色海', lng: 100.2833, lat: 28.5833, elev: '4700m', type: 'spot',
    desc: '阳光下变幻五色，本次旅程最高点 🎯',
    images: [
      `${IMG}/waypoint-images/yading/五色海/1.jpg`,
      `${IMG}/waypoint-images/yading/五色海/2.jpg`,
      `${IMG}/waypoint-images/yading/五色海/3.jpg`,
      `${IMG}/waypoint-images/yading/五色海/4.jpg`,
      `${IMG}/waypoint-images/yading/五色海/5.jpg`,
      `${IMG}/post4/04-五色海.webp`,
      `${IMG}/post5/04-五色海.webp`,
    ],
  },

  // ===== D8-9 返程 =====
  baita: {
    name: '稻城白塔（尊胜塔林）', lng: 100.2950, lat: 29.0400, type: 'spot',
    desc: '稻城地标，转塔祈福',
    images: [
      `${IMG}/waypoint-images/return/稻城白塔/1.jpg`,
      `${IMG}/waypoint-images/return/稻城白塔/2.jpg`,
      `${IMG}/waypoint-images/return/稻城白塔/3.jpg`,
      `${IMG}/waypoint-images/return/稻城白塔/4.jpg`,
      `${IMG}/waypoint-images/return/稻城白塔/5.jpg`,
    ],
  },
  zheduo: {
    name: '折多山垭口', lng: 101.7833, lat: 30.0553, elev: '4298m', type: 'pass',
    desc: '318国道标志性垭口，康巴第一关',
    images: [
      `${IMG}/waypoint-images/return/折多山垭口/1.jpg`,
      `${IMG}/waypoint-images/return/折多山垭口/2.jpg`,
      `${IMG}/waypoint-images/return/折多山垭口/3.jpg`,
      `${IMG}/waypoint-images/return/折多山垭口/4.jpg`,
      `${IMG}/waypoint-images/return/折多山垭口/5.jpg`,
      `${IMG}/post2/02-折多山.webp`,
    ],
  },
  kangding: {
    name: '康定', lng: 101.9575, lat: 30.0553, elev: '2560m', type: 'city',
    desc: '跑马溜溜的山上，康定情歌故乡',
    images: [
      `${IMG}/waypoint-images/return/康定/1.jpg`,
      `${IMG}/waypoint-images/return/康定/2.jpg`,
      `${IMG}/waypoint-images/return/康定/3.jpg`,
      `${IMG}/waypoint-images/return/康定/4.jpg`,
      `${IMG}/waypoint-images/return/康定/5.jpg`,
    ],
  },
  luding: {
    name: '泸定桥', lng: 102.2344, lat: 29.9144, type: 'spot',
    desc: '红军飞夺泸定桥，红色经典景点',
    images: [
      `${IMG}/waypoint-images/return/泸定桥/1.jpg`,
      `${IMG}/waypoint-images/return/泸定桥/2.jpg`,
      `${IMG}/waypoint-images/return/泸定桥/3.jpg`,
      `${IMG}/waypoint-images/return/泸定桥/4.jpg`,
      `${IMG}/waypoint-images/return/泸定桥/5.jpg`,
    ],
  },
  yaan: {
    name: '雅安', lng: 103.0422, lat: 30.0067, type: 'city',
    desc: '雨城，雅鱼之乡，川西最后一餐',
    images: [
      `${IMG}/waypoint-images/return/雅安/1.jpg`,
      `${IMG}/waypoint-images/return/雅安/2.jpg`,
      `${IMG}/waypoint-images/return/雅安/3.jpg`,
      `${IMG}/waypoint-images/return/雅安/4.jpg`,
      `${IMG}/waypoint-images/return/雅安/5.jpg`,
    ],
  },
}

// 路线定义（有序途经点 key 列表）
export const routeDefinitions = {
  outbound: [
    'chengdu', 'dujiangyan', 'balangshan', 'siguniangshan', 'danba',
    'jiaju', 'moshi', 'tagong', 'xinduqiao',
    'gaoersi', 'tianlu', 'kazila', 'maoya', 'litang', 'haizishan', 'daocheng', 'shangriLa'
  ],
  yading: ['shangriLa', 'chonggu', 'zhenzhu', 'luorong', 'niunai', 'wuse'],
  return: [
    'daocheng', 'baita', 'litang', 'xinduqiao', 'zheduo', 'kangding', 'luding', 'yaan', 'chengdu'
  ],
}
