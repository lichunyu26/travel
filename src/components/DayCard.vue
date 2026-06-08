<template>
  <div
    class="day-card"
    :class="{ expanded, highlight: day.highlight }"
    @click="expanded = !expanded"
  >
    <div class="day-header">
      <div class="day-num" :style="day.highlight ? { background: 'linear-gradient(135deg,#e74c3c,#c0392b)' } : {}">
        D{{ day.day }}
      </div>
      <div class="day-info">
        <div class="day-title">{{ day.title }}</div>
        <div class="day-meta">{{ day.date }} {{ day.weekday }} · 海拔 {{ day.elevation }}</div>
      </div>
      <span v-if="day.badge" class="day-badge">{{ day.badge }}</span>
      <div class="day-expand" :class="{ rotated: expanded }">▼</div>
    </div>

    <div class="day-body" :style="{ maxHeight: expanded ? '3000px' : '0' }">
      <div class="day-body-inner">
        <img v-if="day.cover" class="day-cover" :src="day.cover" :alt="day.title" loading="lazy" />

        <div v-if="day.route" class="route-info">
          <span>🛣️ <span class="val">{{ day.route.distance }}</span></span>
          <span>⏱️ <span class="val">{{ day.route.duration }}</span></span>
        </div>

        <ul class="waypoint-list">
          <WaypointItem
            v-for="(wp, i) in resolvedWaypoints"
            :key="i"
            :name="wp.name"
            :desc="wp.desc"
            :images="wp.images"
            :elev="wp.elev"
            :price="wp.price"
            :dot="wp.dot"
            :waypointKey="wp.key"
            @flyTo="(key) => $emit('flyTo', key)"
            @openCarousel="(data) => $emit('openCarousel', data)"
          />
        </ul>

        <div v-if="day.tip" class="tip-box">{{ day.tip }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import WaypointItem from './WaypointItem.vue'
import { waypointData } from '../data/waypoints.js'

const props = defineProps({
  day: Object,
})

defineEmits(['flyTo', 'openCarousel'])

const expanded = ref(false)

// Resolve waypoint keys to full data
const resolvedWaypoints = computed(() => {
  return props.day.waypoints.map(wp => {
    if (wp.key && waypointData[wp.key]) {
      const data = waypointData[wp.key]
      return {
        key: wp.key,
        name: data.name,
        desc: data.desc,
        images: data.images || [],
        elev: data.elev,
        price: wp.price,
        dot: wp.dot,
      }
    }
    return {
      key: null,
      name: wp.name || '',
      desc: wp.desc || '',
      images: [],
      elev: null,
      price: wp.price,
      dot: wp.dot,
    }
  })
})
</script>

<style scoped>
.day-card {
  background: white;
  border-radius: 16px;
  margin-bottom: 1rem;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
  transition: all 0.3s;
  cursor: pointer;
  border-left: 4px solid transparent;
}
.day-card:hover {
  box-shadow: 0 8px 30px rgba(0,0,0,0.12);
  border-left-color: #4a8c3f;
}
.day-card.highlight { border-left-color: #e74c3c; }

.day-header {
  display: flex;
  align-items: center;
  padding: 1rem 1.2rem;
  gap: 1rem;
}
.day-num {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.9rem;
  color: white;
  flex-shrink: 0;
  background: #2d5a27;
}
.day-info { flex: 1; min-width: 0; }
.day-title { font-weight: 600; font-size: 1rem; }
.day-meta { font-size: 0.8rem; color: #666; margin-top: 2px; }
.day-badge {
  font-size: 0.7rem;
  padding: 3px 10px;
  border-radius: 20px;
  background: #e74c3c;
  color: white;
  flex-shrink: 0;
}
.day-expand {
  font-size: 1.2rem;
  color: #666;
  transition: transform 0.3s;
  flex-shrink: 0;
}
.day-expand.rotated { transform: rotate(180deg); }

.day-body {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.5s ease;
}
.day-body-inner {
  padding: 0 1.2rem 1.2rem;
}

.day-cover {
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 1rem;
}

.route-info {
  display: flex;
  gap: 1.5rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
  font-size: 0.85rem;
  color: #666;
}
.route-info .val { color: #2d5a27; font-weight: 600; }

.waypoint-list { list-style: none; }

.tip-box {
  background: rgba(201,169,110,0.1);
  border: 1px solid rgba(201,169,110,0.3);
  border-radius: 10px;
  padding: 0.8rem 1rem;
  font-size: 0.85rem;
  color: #8b6914;
  line-height: 1.6;
  margin-top: 0.8rem;
}
.tip-box::before { content: "💡 "; }

@media (max-width: 768px) {
  .day-header { padding: 0.8rem 1rem; }
  .day-cover { height: 150px; }
}
</style>
