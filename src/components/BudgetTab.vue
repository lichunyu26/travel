<template>
  <div class="budget-wrap">
    <div class="budget-header">3人总预算</div>
    <div class="budget-total">¥12,000 ~ 16,000</div>
    <div class="budget-per">人均约 ¥4,000 ~ 5,300</div>
    <table class="budget-table">
      <thead><tr><th>项目</th><th>费用（3人）</th><th>备注</th></tr></thead>
      <tbody>
        <tr v-for="item in budgetItems" :key="item.name">
          <td>{{ item.name }}</td>
          <td class="amount">{{ item.cost }}</td>
          <td>{{ item.note }}</td>
        </tr>
        <tr class="total-row">
          <td>合计</td>
          <td class="amount">¥13,600 ~ 20,000</td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
const budgetItems = [
  { name: '✈️ 机票往返', cost: '¥4,500 ~ 7,500', note: '7月旺季，建议提前订' },
  { name: '🚗 租车（坦克300）', cost: '¥2,100 ~ 2,800', note: '约300-400元/天 × 7天' },
  { name: '⛽ 油费', cost: '¥1,200 ~ 1,500', note: '约1800km，高原油耗偏高' },
  { name: '🛣️ 过路费', cost: '¥300 ~ 500', note: '部分高速+国道' },
  { name: '🏨 住宿（8晚）', cost: '¥2,000 ~ 2,700', note: '平均250-340元/晚' },
  { name: '🎫 门票', cost: '¥1,200 ~ 1,800', note: '稻城亚丁+观光车+沿途景点' },
  { name: '🍲 餐饮（9天）', cost: '¥1,800 ~ 2,700', note: '约200-300元/天' },
  { name: '📦 其他', cost: '¥500', note: '氧气瓶、零食、停车费等' },
]
</script>

<style scoped>
.budget-wrap {
  background: white;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
  text-align: center;
}
.budget-header { font-size: 0.9rem; color: #666; }
.budget-total {
  font-family: 'Noto Serif SC', serif;
  font-size: 2.5rem;
  font-weight: 700;
  color: #2d5a27;
}
.budget-per { font-size: 1rem; color: #666; margin-bottom: 1.5rem; }
.budget-table {
  width: 100%;
  border-collapse: collapse;
  text-align: left;
  font-size: 0.9rem;
}
.budget-table th {
  background: #2d5a27;
  color: white;
  padding: 0.8rem 1rem;
  font-weight: 500;
}
.budget-table td {
  padding: 0.7rem 1rem;
  border-bottom: 1px solid rgba(0,0,0,0.06);
}
.amount { color: #2d5a27; font-weight: 600; }
.total-row td { border-top: 2px solid #2d5a27; font-weight: 700; }
</style>
