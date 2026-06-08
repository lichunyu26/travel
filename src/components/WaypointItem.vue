<template>
  <li class="waypoint-item" @click="handleClick">
    <img
      v-if="images.length"
      class="waypoint-thumb"
      :src="images[0]"
      :alt="name"
      loading="lazy"
    />
    <div v-else class="waypoint-dot" :class="`dot-${dot}`"></div>
    <div class="waypoint-info">
      <div class="waypoint-name">{{ name }}</div>
      <div class="waypoint-desc">{{ desc }}</div>
    </div>
    <span v-if="elev" class="waypoint-elev">⛰️ {{ elev }}</span>
    <span v-if="price" class="waypoint-price">{{ price }}</span>
    <span v-if="images.length > 1" class="waypoint-count">📷 {{ images.length }}</span>
  </li>
</template>

<script setup>
const props = defineProps({
  name: String,
  desc: String,
  images: { type: Array, default: () => [] },
  elev: String,
  price: String,
  dot: { type: String, default: 'green' },
  waypointKey: String,
})

const emit = defineEmits(['flyTo', 'openCarousel'])

function handleClick() {
  if (props.images.length > 1) {
    emit('openCarousel', {
      name: props.name,
      desc: props.desc,
      elev: props.elev,
      images: props.images,
    })
  } else if (props.waypointKey) {
    emit('flyTo', props.waypointKey)
  }
}
</script>

<style scoped>
.waypoint-item {
  display: flex;
  gap: 0.8rem;
  padding: 0.6rem 0.5rem;
  border-bottom: 1px solid rgba(0,0,0,0.06);
  cursor: pointer;
  transition: all 0.2s;
  border-radius: 8px;
  align-items: center;
}
.waypoint-item:last-child { border-bottom: none; }
.waypoint-item:hover { background: rgba(45,90,39,0.05); }

.waypoint-thumb {
  width: 48px;
  height: 48px;
  border-radius: 8px;
  object-fit: cover;
  flex-shrink: 0;
}
.waypoint-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  margin-top: 8px;
  flex-shrink: 0;
  align-self: flex-start;
}
.dot-blue { background: #3b82f6; }
.dot-green { background: #10b981; }
.dot-red { background: #ef4444; }
.dot-amber { background: #f59e0b; }

.waypoint-info { flex: 1; min-width: 0; }
.waypoint-name { font-weight: 500; font-size: 0.9rem; }
.waypoint-desc { font-size: 0.8rem; color: #666; margin-top: 2px; }

.waypoint-elev,
.waypoint-price {
  font-size: 0.75rem;
  color: #e74c3c;
  background: rgba(231,76,60,0.1);
  padding: 2px 8px;
  border-radius: 10px;
  flex-shrink: 0;
  white-space: nowrap;
}
.waypoint-count {
  font-size: 0.7rem;
  color: #2d5a27;
  background: rgba(45,90,39,0.1);
  padding: 2px 6px;
  border-radius: 10px;
  flex-shrink: 0;
  white-space: nowrap;
}

@media (max-width: 768px) {
  .waypoint-thumb { width: 40px; height: 40px; }
  .waypoint-name { font-size: 0.85rem; }
  .waypoint-desc { font-size: 0.75rem; }
}
</style>
