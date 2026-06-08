<template>
  <div id="app">
    <HeroSection />
    <OverviewStats />

    <section class="tab-section">
      <div class="tab-nav">
        <button
          v-for="tab in tabs"
          :key="tab.id"
          class="tab-btn"
          :class="{ active: activeTab === tab.id }"
          @click="switchTab(tab.id)"
        >{{ tab.label }}</button>
      </div>

      <div class="tab-panel" :class="{ active: activeTab === 'itinerary' }">
        <ItineraryTab
          @flyTo="handleFlyTo"
          @openCarousel="handleOpenCarousel"
        />
      </div>

      <div class="tab-panel" :class="{ active: activeTab === 'map' }">
        <MapTab ref="mapTabRef" />
      </div>

      <div class="tab-panel" :class="{ active: activeTab === 'tips' }">
        <TipsTab />
      </div>

      <div class="tab-panel" :class="{ active: activeTab === 'budget' }">
        <BudgetTab />
      </div>
    </section>

    <PhotoGallery />
    <AppFooter />

    <!-- Image Carousel Modal -->
    <ImageCarousel
      :visible="carouselVisible"
      :data="carouselData"
      @close="carouselVisible = false"
    />
  </div>
</template>

<script setup>
import { ref, nextTick } from 'vue'
import HeroSection from './components/HeroSection.vue'
import OverviewStats from './components/OverviewStats.vue'
import ItineraryTab from './components/ItineraryTab.vue'
import MapTab from './components/MapTab.vue'
import TipsTab from './components/TipsTab.vue'
import BudgetTab from './components/BudgetTab.vue'
import PhotoGallery from './components/PhotoGallery.vue'
import AppFooter from './components/AppFooter.vue'
import ImageCarousel from './components/ImageCarousel.vue'

const activeTab = ref('itinerary')
const mapTabRef = ref(null)
const carouselVisible = ref(false)
const carouselData = ref({ name: '', desc: '', elev: '', images: [] })

const tabs = [
  { id: 'itinerary', label: '📅 行程' },
  { id: 'map', label: '🗺️ 地图' },
  { id: 'tips', label: '📋 攻略' },
  { id: 'budget', label: '💰 预算' },
]

function switchTab(id) {
  activeTab.value = id
  if (id === 'map') {
    nextTick(() => {
      mapTabRef.value?.initMap()
    })
  }
}

function handleFlyTo(key) {
  switchTab('map')
  nextTick(() => {
    setTimeout(() => {
      mapTabRef.value?.flyToWaypoint(key)
    }, 500)
  })
}

function handleOpenCarousel(data) {
  carouselData.value = data
  carouselVisible.value = true
}
</script>

<style>
/* ===== Global Styles ===== */
:root {
  --primary: #2d5a27;
  --primary-light: #4a8c3f;
  --secondary: #c9a96e;
  --accent: #e74c3c;
  --bg: #f8f6f0;
  --card: #ffffff;
  --text: #2c2c2c;
  --text-light: #666;
  --shadow: 0 4px 20px rgba(0,0,0,0.08);
  --shadow-hover: 0 8px 30px rgba(0,0,0,0.12);
}

* { margin: 0; padding: 0; box-sizing: border-box; }
html { scroll-behavior: smooth; }
body {
  font-family: 'Noto Sans SC', -apple-system, BlinkMacSystemFont, sans-serif;
  background: var(--bg);
  color: var(--text);
  line-height: 1.6;
  overflow-x: hidden;
}

/* Tab section */
.tab-section {
  max-width: 1200px;
  margin: 2.5rem auto;
  padding: 0 1rem;
}
.tab-nav {
  display: flex;
  gap: 0;
  background: var(--card);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: var(--shadow);
  position: sticky;
  top: 0;
  z-index: 100;
}
.tab-btn {
  flex: 1;
  padding: 1rem 0.5rem;
  background: none;
  border: none;
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--text-light);
  cursor: pointer;
  transition: all 0.2s;
  border-bottom: 3px solid transparent;
  font-family: inherit;
}
.tab-btn:hover { color: var(--primary); background: rgba(45,90,39,0.05); }
.tab-btn.active {
  color: var(--primary);
  border-bottom-color: var(--primary);
  background: rgba(45,90,39,0.05);
}
.tab-panel { display: none; padding-top: 1.5rem; }
.tab-panel.active { display: block; }

@media (max-width: 768px) {
  .tab-btn { font-size: 0.8rem; padding: 0.8rem 0.3rem; }
}
</style>
