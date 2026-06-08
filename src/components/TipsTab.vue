<template>
  <div>
    <!-- Sub-tab navigation -->
    <div class="sub-tab-nav">
      <button
        v-for="sub in subTabs"
        :key="sub.id"
        class="sub-tab-btn"
        :class="{ active: activeSub === sub.id }"
        @click="activeSub = sub.id"
      >{{ sub.label }}</button>
    </div>

    <!-- 攻略内容 -->
    <div v-show="activeSub === 'tips'">
      <div class="tips-grid">
        <div v-for="tip in tips" :key="tip.title" class="tip-card">
          <div class="tip-card-icon">{{ tip.icon }}</div>
          <h3>{{ tip.title }}</h3>
          <ul>
            <li v-for="(item, i) in tip.items" :key="i" v-html="item"></li>
          </ul>
        </div>
      </div>
    </div>

    <!-- 美食内容 -->
    <div v-show="activeSub === 'food'">
      <FoodSection />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import FoodSection from './FoodSection.vue'

const activeSub = ref('tips')

const subTabs = [
  { id: 'tips', label: '📋 实用攻略' },
  { id: 'food', label: '🍽️ 美食推荐' },
]

const tips = [
  {
    icon: '⛰️', title: '高反预防',
    items: [
      '提前1周服用红景天（口服液或胶囊）',
      '备好便携氧气瓶，稻城/理塘药店可买到',
      '到高海拔地区第一天不要洗澡、不要剧烈运动',
      '多喝水、少饮酒、保证充足睡眠',
      '出现头痛、恶心、呼吸困难时立即吸氧休息',
    ],
  },
  {
    icon: '🚗', title: '自驾安全',
    items: [
      '坦克300适合川西路况，但山路弯多需谨慎驾驶',
      '沿途加油站间隔较远，半箱油就加满',
      '7-8月是雨季，关注天气预报和路况信息',
      '注意泥石流和塌方预警，遇到不要强行通过',
      '下载离线地图（部分路段无信号）',
      '夜间不要赶路，高原路段无路灯且有动物出没',
    ],
  },
  {
    icon: '🎒', title: '装备清单',
    items: [
      '防晒：SPF50+防晒霜、墨镜、遮阳帽',
      '保暖：冲锋衣、抓绒衣（昼夜温差15°C+）',
      '徒步：防水登山鞋、登山杖（长线必备）',
      '药品：红景天、感冒药、肠胃药、葡萄糖',
      '其他：保温杯、零食干粮、身份证、驾照、现金',
    ],
  },
  {
    icon: '📸', title: '拍照打卡点',
    items: [
      '丹巴中路藏寨 — 碉楼与藏房，晨雾中最美',
      '塔公草原 — 雅拉雪山下的草原，日落绝美',
      '新都桥 — 10公里光影走廊，清晨和黄昏最佳',
      '天路十八弯 — 航拍视角看蜿蜒公路',
      '牛奶海 — 碧蓝湖水映雪山，川西最美高山湖泊',
      '五色海 — 阳光下变幻五色，神圣而壮美',
    ],
  },
  {
    icon: '🔄', title: '返程方案',
    items: [
      '<strong>方案A 原路返回（~750km）：</strong>路况熟悉，补给点多，最稳妥',
      '<strong>方案B 北线小环（~1100km）：</strong>经色达佛学院，风景不同，需多1天',
      '<strong>方案C 南线泸定（~850km）：</strong>经泸定桥+雅安，部分新路线',
    ],
  },
  {
    icon: '🏨', title: '住宿建议',
    items: [
      '<strong>成都：</strong>春熙路/太古里附近，亚朵/美居等连锁',
      '<strong>新都桥：</strong>摄影爱好者首选，建议供氧酒店',
      '<strong>香格里拉镇：</strong>海拔2900m，酒店多，¥150-300/晚',
      '<strong>亚丁村：</strong>海拔3900m，推窗见雪山，需提前预订',
    ],
  },
]
</script>

<style scoped>
.sub-tab-nav {
  display: flex;
  gap: 0;
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0,0,0,0.06);
  margin-bottom: 1.5rem;
}
.sub-tab-btn {
  flex: 1;
  padding: 0.7rem 0.5rem;
  background: none;
  border: none;
  font-size: 0.9rem;
  font-weight: 500;
  color: #666;
  cursor: pointer;
  transition: all 0.2s;
  border-bottom: 2px solid transparent;
  font-family: inherit;
}
.sub-tab-btn:hover { color: #2d5a27; }
.sub-tab-btn.active {
  color: #2d5a27;
  border-bottom-color: #2d5a27;
  background: rgba(45,90,39,0.05);
}

.tips-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1rem;
}
.tip-card {
  background: white;
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
  transition: all 0.3s;
  border-top: 4px solid #2d5a27;
}
.tip-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 30px rgba(0,0,0,0.12);
}
.tip-card-icon {
  width: 48px;
  height: 48px;
  background: linear-gradient(135deg, #2d5a27, #4a8c3f);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  margin-bottom: 1rem;
}
h3 { font-size: 1.05rem; margin-bottom: 0.6rem; }
ul { list-style: none; font-size: 0.85rem; color: #666; }
li { padding: 0.3rem 0; line-height: 1.6; }
</style>
