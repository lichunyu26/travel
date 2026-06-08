// 美食攻略数据 - 整合 Post7-Post13
const IMG = '/chuangxi-images'

// 川西必吃美食清单
export const mustEatFoods = [
  {
    name: '牦牛肉汤锅',
    desc: '高原牦牛肉，肉质鲜美，营养丰富，川西必尝',
    images: [`${IMG}/post7/03-牦牛肉汤锅.webp`, `${IMG}/post6/16-日落.webp`],
    tags: ['主菜', '牦牛'],
  },
  {
    name: '鲜切牦牛肉菌汤锅',
    desc: '野生菌火锅+鲜切嫩牛肉，鲜上加鲜',
    images: [`${IMG}/post8/02-鲜切牦牛肉菌汤锅.webp`],
    tags: ['主菜', '菌菇'],
  },
  {
    name: '手抓牦牛肉',
    desc: '大块牦牛肉手抓着吃，原汁原味',
    images: [`${IMG}/post8/03-手抓牦牛肉.webp`, `${IMG}/post9/10-手切牦牛肉.webp`],
    tags: ['主菜', '牦牛'],
  },
  {
    name: '香酥牦牛排',
    desc: '酥炸牦牛排，外酥里嫩',
    images: [`${IMG}/post8/04-香酥牦牛排.webp`],
    tags: ['主菜', '牦牛'],
  },
  {
    name: '烤藏香猪排',
    desc: '藏香猪排+炸土豆，肉香四溢',
    images: [`${IMG}/post10/02-烤藏香猪排.webp`],
    tags: ['主菜', '猪肉'],
  },
  {
    name: '牦牛肉饼',
    desc: '酥皮牛肉饼，外酥内嫩',
    images: [`${IMG}/post10/04-牦牛肉饼.webp`],
    tags: ['主食', '牦牛'],
  },
  {
    name: '松茸炖鸡',
    desc: '新鲜松茸与土鸡慢炖，鲜美滋补',
    images: [`${IMG}/post7/05-美食合集.webp`],
    tags: ['主菜', '菌菇'],
  },
  {
    name: '酥油茶',
    desc: '藏族传统饮品，咸香浓郁，缓解高反',
    images: [`${IMG}/post7/02-酥油茶.webp`, `${IMG}/post9/11-酥油茶.webp`, `${IMG}/post5/04-五色海.webp`],
    tags: ['饮品', '藏式'],
  },
  {
    name: '牦牛酸奶',
    desc: '超浓牦牛酸奶，搭配葡萄干、水果',
    images: [`${IMG}/post8/05-牦牛酸奶.webp`, `${IMG}/post9/04-牦牛酸奶.webp`, `${IMG}/post10/07-酸奶.webp`],
    tags: ['饮品', '酸奶'],
  },
  {
    name: '藏式酥油奶茶',
    desc: '铜壶倒出的热奶茶，浓郁香甜',
    images: [`${IMG}/post8/06-藏式酥油奶茶.webp`],
    tags: ['饮品', '藏式'],
  },
  {
    name: '青稞饼',
    desc: '金黄色青稞饼，藏族主食，切块蘸酱吃',
    images: [`${IMG}/post7/04-藏餐.webp`, `${IMG}/post9/01-青稞饼.webp`],
    tags: ['主食', '藏式'],
  },
  {
    name: '糌粑',
    desc: '青稞面制作，搭配酥油茶食用',
    images: [`${IMG}/post10/05-糌粑.webp`],
    tags: ['主食', '藏式'],
  },
  {
    name: '牦牛肉干',
    desc: '风干牦牛肉，越嚼越香，最佳零食',
    images: [`${IMG}/post9/12-牦牛肉干.webp`],
    tags: ['特产', '零食'],
  },
  {
    name: '烤牦牛肉串',
    desc: '街边现烤牦牛肉串，外焦里嫩',
    images: [`${IMG}/post9/08-烤现切牦牛肉.webp`],
    tags: ['小吃', '烧烤'],
  },
  {
    name: '酥油奶酪',
    desc: '奶酪条、奶酪球，四姑娘山特产',
    images: [`${IMG}/post11/01-奶酪条.webp`, `${IMG}/post11/02-奶酪球.webp`],
    tags: ['特产', '零食'],
  },
  {
    name: '烤蘑菇',
    desc: '高原野生蘑菇，烤制后鲜香无比',
    images: [`${IMG}/post10/03-烤蘑菇.webp`],
    tags: ['小吃', '菌菇'],
  },
]

// 推荐餐厅
export const restaurants = [
  {
    name: '扎西德勒·牦牛藏餐',
    location: '稻城亚丁',
    rating: '大众点评高分',
    price: '双人餐 ¥158',
    speciality: '烤藏香猪排、牦牛肉饼、糌粑',
    images: [
      `${IMG}/post10/01-封面.webp`,
      `${IMG}/post10/02-烤藏香猪排.webp`,
      `${IMG}/post10/04-牦牛肉饼.webp`,
      `${IMG}/post10/08-菜单1.webp`,
    ],
  },
  {
    name: '成都瓜串串（总店）',
    location: '成都',
    rating: '大众点评 4.3分',
    price: '人均 ¥56',
    speciality: '串串香',
    images: [`${IMG}/post1/06-住宿推荐.webp`],
  },
  {
    name: '打牙祭（八里小区总店）',
    location: '成都',
    rating: '大众点评必吃榜 4.6分',
    price: '人均 ¥54',
    speciality: '苍蝇馆子，地道川菜',
    images: [`${IMG}/post1/07-美食推荐.webp`],
  },
  {
    name: '抚琴夜市',
    location: '成都',
    rating: '夜市美食街',
    price: '人均 ¥30-50',
    speciality: '各种街边小吃',
    images: [`${IMG}/post1/08-实用贴士.webp`],
  },
]

// 美食合集信息图
export const foodGuides = [
  {
    title: '川西美食攻略',
    desc: '酥油奶酪、青稞饼、牛肉盖被、牦牛肉汤锅、和尚包子、烤香菇',
    images: [`${IMG}/post7/01-封面.webp`],
  },
  {
    title: '本地人私藏9款地道藏餐',
    desc: '鲜切牦牛肉菌汤锅、手抓牦牛肉、香酥牦牛排、牦牛酸奶、藏式酥油奶茶',
    images: [`${IMG}/post8/01-封面.webp`],
  },
  {
    title: '川西18种必吃美食',
    desc: '冰片牦牛肉、烤鲜蘑菇、酥油茶、酥油奶酪、牛肉炒笋、手抓牦牛肉、青稞奶酪饼',
    images: [`${IMG}/post12/01-川西美食合集1.webp`, `${IMG}/post12/02-川西美食合集2.webp`],
  },
  {
    title: '街边美食实拍',
    desc: '青稞饼、牦牛肉串、烤腊肉、牦牛肉面条、烤玉米饼',
    images: [
      `${IMG}/post9/01-青稞饼.webp`,
      `${IMG}/post9/08-烤现切牦牛肉.webp`,
      `${IMG}/post9/13-烤玉米饼.webp`,
    ],
  },
]

// 物资攻略
export const supplyGuide = {
  title: '去川西千万别临时补货！',
  desc: '真的太难买了😭 一定要提前大采购！',
  images: [`${IMG}/post13/01-物资清单.webp`],
}
