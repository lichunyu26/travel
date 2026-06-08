// 精选图库数据
const IMG = './chuangxi-images'

export const galleryPhotos = [
  // 🏔️ 雪山
  { src: `${IMG}/waypoint-images/route/四姑娘山/1.jpg`,      title: '四姑娘山',     desc: '蜀山之后幺妹峰',   cat: 'snow' },
  { src: `${IMG}/post2/10-雪山1.webp`,                        title: '雪山彩林',     desc: '金黄落叶松映雪山', cat: 'snow' },
  { src: `${IMG}/post2/11-雪山2.webp`,                        title: '雪山人像',     desc: '雪山下的身影',     cat: 'snow' },
  { src: `${IMG}/waypoint-images/route/高尔寺山垭口/1.jpg`,  title: '高尔寺山',     desc: '贡嘎雪山观景点',   cat: 'snow' },
  { src: `${IMG}/waypoint-images/route/卡子拉山垭口/1.jpg`,  title: '卡子拉山',     desc: '云海与草甸交织',   cat: 'snow' },
  { src: `${IMG}/post4/05-仙乃日.webp`,                       title: '仙乃日',       desc: '亚丁三怙主之一',   cat: 'snow' },
  { src: `${IMG}/post4/07-央迈勇.webp`,                       title: '央迈勇',       desc: '文殊菩萨化身',     cat: 'snow' },
  { src: `${IMG}/waypoint-images/return/折多山垭口/1.jpg`,   title: '折多山',       desc: '康巴第一关',       cat: 'snow' },

  // 💎 湖泊
  { src: `${IMG}/waypoint-images/yading/牛奶海/1.jpg`,       title: '牛奶海',       desc: '碧蓝如玉的高山湖', cat: 'lake' },
  { src: `${IMG}/waypoint-images/yading/五色海/1.jpg`,       title: '五色海',       desc: '阳光下变幻五色',   cat: 'lake' },
  { src: `${IMG}/waypoint-images/yading/珍珠海/1.jpg`,       title: '珍珠海',       desc: '仙乃日翡翠湖泊',   cat: 'lake' },
  { src: `${IMG}/post2/02-折多山.webp`,                       title: '折多山海子',   desc: '高原湖泊倒影',     cat: 'lake' },
  { src: `${IMG}/post2/04-卡子拉山.webp`,                     title: '卡子拉山湖',   desc: '蓝绿色高原湖泊',   cat: 'lake' },
  { src: `${IMG}/post2/09-姊妹湖.webp`,                       title: '姊妹湖',       desc: '双湖相连的奇观',   cat: 'lake' },

  // 🌿 草甸
  { src: `${IMG}/waypoint-images/route/毛垭大草原/1.jpg`,    title: '毛垭大草原',   desc: '辽阔高原草甸',     cat: 'grass' },
  { src: `${IMG}/waypoint-images/route/塔公草原/1.jpg`,      title: '塔公草原',     desc: '雅拉雪山下',       cat: 'grass' },
  { src: `${IMG}/waypoint-images/yading/洛绒牛场/1.jpg`,     title: '洛绒牛场',     desc: '三座神山环绕',     cat: 'grass' },
  { src: `${IMG}/post2/13-草原.webp`,                         title: '高原牧场',     desc: '牦牛成群',         cat: 'grass' },
  { src: `${IMG}/post4/09-草甸.webp`,                         title: '亚丁草甸',     desc: '溪流蜿蜒',         cat: 'grass' },

  // 🛕 人文
  { src: `${IMG}/waypoint-images/route/丹巴中路藏寨/1.jpg`,  title: '中路藏寨',     desc: '千碉之国',         cat: 'culture' },
  { src: `${IMG}/waypoint-images/route/甲居藏寨/1.jpg`,      title: '甲居藏寨',     desc: '中国最美乡村',     cat: 'culture' },
  { src: `${IMG}/waypoint-images/yading/冲古寺/1.jpg`,       title: '冲古寺',       desc: '古老藏传寺庙',     cat: 'culture' },
  { src: `${IMG}/waypoint-images/return/泸定桥/1.jpg`,       title: '泸定桥',       desc: '红色经典',         cat: 'culture' },
  { src: `${IMG}/post2/15-公路.webp`,                         title: '318国道',      desc: '此生必驾',         cat: 'culture' },
  { src: `${IMG}/post4/12-经幡.webp`,                         title: '经幡',         desc: '彩色经幡飘扬',     cat: 'culture' },

  // 🍲 美食
  { src: `${IMG}/post1/06-住宿推荐.webp`,                     title: '成都瓜串串',       desc: '大众点评4.3分',      cat: 'food' },
  { src: `${IMG}/post1/07-美食推荐.webp`,                     title: '打牙祭',           desc: '必吃榜苍蝇馆子',     cat: 'food' },
  { src: `${IMG}/post5/04-五色海.webp`,                       title: '酥油茶',           desc: '藏式传统饮品',       cat: 'food' },
  { src: `${IMG}/post6/16-日落.webp`,                         title: '牦牛肉火锅',       desc: '高原牦牛肉',         cat: 'food' },
  { src: `${IMG}/post7/01-封面.webp`,                         title: '川西美食攻略',     desc: '6格美食拼图',        cat: 'food' },
  { src: `${IMG}/post7/03-牦牛肉汤锅.webp`,                   title: '牦牛肉汤锅',       desc: '铜锅番茄牦牛肉',     cat: 'food' },
  { src: `${IMG}/post8/02-鲜切牦牛肉菌汤锅.webp`,             title: '菌汤锅',           desc: '野生菌+鲜切牛肉',    cat: 'food' },
  { src: `${IMG}/post8/03-手抓牦牛肉.webp`,                   title: '手抓牦牛肉',       desc: '大块手抓原汁原味',   cat: 'food' },
  { src: `${IMG}/post8/04-香酥牦牛排.webp`,                   title: '香酥牦牛排',       desc: '外酥里嫩',           cat: 'food' },
  { src: `${IMG}/post9/08-烤现切牦牛肉.webp`,                 title: '烤牦牛肉',         desc: '街边现烤',           cat: 'food' },
  { src: `${IMG}/post9/12-牦牛肉干.webp`,                     title: '牦牛肉干',         desc: '风干越嚼越香',       cat: 'food' },
  { src: `${IMG}/post10/02-烤藏香猪排.webp`,                  title: '烤藏香猪排',       desc: '扎西德勒招牌',       cat: 'food' },
  { src: `${IMG}/post10/04-牦牛肉饼.webp`,                    title: '牦牛肉饼',         desc: '酥皮牛肉饼',         cat: 'food' },
  { src: `${IMG}/post11/01-奶酪条.webp`,                      title: '奶酪条',           desc: '四姑娘山特产',       cat: 'food' },
  { src: `${IMG}/post12/01-川西美食合集1.webp`,                title: '川西18种美食',     desc: '必吃美食合集',       cat: 'food' },
]
