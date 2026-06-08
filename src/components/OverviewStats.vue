<template>
  <section class="overview">
    <div class="stats-grid">
      <div v-for="stat in stats" :key="stat.label" class="stat-card">
        <div class="stat-icon">{{ stat.icon }}</div>
        <div class="stat-number">{{ stat.number }}</div>
        <div class="stat-label">{{ stat.label }}</div>
      </div>
    </div>
  </section>
</template>

<script setup>
const stats = [
  { icon: '📅', number: '9', label: '旅行天数' },
  { icon: '🚗', number: '1800+', label: '总里程 km' },
  { icon: '📍', number: '26', label: '途经景点' },
  { icon: '⛰️', number: '4718', label: '最高海拔 m' },
]
</script>

<style scoped>
.overview {
  max-width: 1200px;
  margin: -60px auto 0;
  padding: 0 1rem;
  position: relative;
  z-index: 3;
}
.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
}
.stat-card {
  background: white;
  border-radius: 16px;
  padding: 1.5rem 1rem;
  text-align: center;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
  transition: all 0.3s;
}
.stat-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 30px rgba(0,0,0,0.12);
}
.stat-icon { font-size: 2rem; margin-bottom: 0.5rem; }
.stat-number {
  font-family: 'Noto Serif SC', serif;
  font-size: 2rem;
  font-weight: 700;
  color: #2d5a27;
}
.stat-label { font-size: 0.85rem; color: #666; margin-top: 0.3rem; }

@media (max-width: 768px) {
  .stats-grid { grid-template-columns: repeat(2, 1fr); gap: 0.8rem; }
  .stat-card { padding: 1rem 0.8rem; }
  .stat-number { font-size: 1.5rem; }
}
</style>
