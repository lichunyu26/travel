<template>
  <div class="food-section">
    <!-- 美食攻略总览 -->
    <div class="food-guides">
      <h3 class="section-title">🍽️ 川西必吃美食</h3>
      <div class="guide-cards">
        <div
          v-for="guide in foodGuides"
          :key="guide.title"
          class="guide-card"
          @click="openCarousel(guide)"
        >
          <img :src="guide.images[0]" :alt="guide.title" loading="lazy" />
          <div class="guide-overlay">
            <h4>{{ guide.title }}</h4>
            <p>{{ guide.desc }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- 美食清单 -->
    <div class="food-grid">
      <div
        v-for="food in mustEatFoods"
        :key="food.name"
        class="food-card"
        @click="openCarousel(food)"
      >
        <div class="food-img-wrap">
          <img :src="food.images[0]" :alt="food.name" loading="lazy" />
          <span v-if="food.images.length > 1" class="food-count">📷 {{ food.images.length }}</span>
        </div>
        <div class="food-info">
          <h4 class="food-name">{{ food.name }}</h4>
          <p class="food-desc">{{ food.desc }}</p>
          <div class="food-tags">
            <span v-for="tag in food.tags" :key="tag" class="food-tag">{{ tag }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- 推荐餐厅 -->
    <h3 class="section-title" style="margin-top:2rem">🏪 推荐餐厅</h3>
    <div class="restaurant-grid">
      <div
        v-for="rest in restaurants"
        :key="rest.name"
        class="restaurant-card"
        @click="openCarousel(rest)"
      >
        <img :src="rest.images[0]" :alt="rest.name" loading="lazy" />
        <div class="restaurant-info">
          <h4>{{ rest.name }}</h4>
          <div class="restaurant-meta">
            <span>📍 {{ rest.location }}</span>
            <span>⭐ {{ rest.rating }}</span>
          </div>
          <div class="restaurant-meta">
            <span>💰 {{ rest.price }}</span>
          </div>
          <p class="restaurant-spec">招牌：{{ rest.speciality }}</p>
        </div>
      </div>
    </div>

    <!-- 物资提醒 -->
    <div class="supply-banner" @click="openCarousel(supplyGuide)">
      <span class="supply-icon">⚠️</span>
      <div>
        <strong>{{ supplyGuide.title }}</strong>
        <p>{{ supplyGuide.desc }}</p>
      </div>
      <span class="supply-arrow">→</span>
    </div>

    <!-- Carousel -->
    <ImageCarousel
      :visible="carouselVisible"
      :data="carouselData"
      @close="carouselVisible = false"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ImageCarousel from './ImageCarousel.vue'
import { mustEatFoods, restaurants, foodGuides, supplyGuide } from '../data/food.js'

const carouselVisible = ref(false)
const carouselData = ref({ name: '', desc: '', images: [] })

function openCarousel(item) {
  carouselData.value = {
    name: item.title || item.name,
    desc: item.desc || item.speciality || '',
    images: item.images,
  }
  carouselVisible.value = true
}
</script>

<style scoped>
.food-section { margin-top: 1rem; }

.section-title {
  font-family: 'Noto Serif SC', serif;
  font-size: 1.2rem;
  color: #2d5a27;
  margin-bottom: 1rem;
}

/* Guide cards */
.guide-cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 0.8rem;
  margin-bottom: 1.5rem;
}
.guide-card {
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  height: 160px;
}
.guide-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s;
}
.guide-card:hover img { transform: scale(1.05); }
.guide-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0,0,0,0.8));
  padding: 1.5rem 0.8rem 0.8rem;
  color: white;
}
.guide-overlay h4 { font-size: 0.9rem; margin-bottom: 2px; }
.guide-overlay p { font-size: 0.7rem; opacity: 0.8; line-height: 1.4; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }

/* Food grid */
.food-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 0.8rem;
}
.food-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 12px rgba(0,0,0,0.06);
  cursor: pointer;
  transition: all 0.3s;
}
.food-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(0,0,0,0.1);
}
.food-img-wrap {
  position: relative;
  height: 120px;
  overflow: hidden;
}
.food-img-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.food-count {
  position: absolute;
  top: 6px;
  right: 6px;
  font-size: 0.65rem;
  background: rgba(0,0,0,0.6);
  color: white;
  padding: 2px 6px;
  border-radius: 8px;
}
.food-info { padding: 0.6rem 0.8rem; }
.food-name { font-size: 0.85rem; font-weight: 600; margin-bottom: 2px; }
.food-desc { font-size: 0.7rem; color: #666; line-height: 1.4; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
.food-tags { display: flex; gap: 4px; margin-top: 6px; flex-wrap: wrap; }
.food-tag {
  font-size: 0.6rem;
  background: rgba(45,90,39,0.1);
  color: #2d5a27;
  padding: 1px 6px;
  border-radius: 8px;
}

/* Restaurant grid */
.restaurant-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
}
.restaurant-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 12px rgba(0,0,0,0.06);
  cursor: pointer;
  transition: all 0.3s;
  display: flex;
  gap: 0;
}
.restaurant-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(0,0,0,0.1);
}
.restaurant-card > img {
  width: 100px;
  height: 100%;
  object-fit: cover;
  flex-shrink: 0;
}
.restaurant-info { padding: 0.8rem; flex: 1; }
.restaurant-info h4 { font-size: 0.9rem; margin-bottom: 4px; }
.restaurant-meta { font-size: 0.75rem; color: #666; display: flex; gap: 0.8rem; margin-bottom: 2px; }
.restaurant-spec { font-size: 0.75rem; color: #8b6914; margin-top: 4px; }

/* Supply banner */
.supply-banner {
  margin-top: 1.5rem;
  background: linear-gradient(135deg, rgba(231,76,60,0.08), rgba(231,76,60,0.03));
  border: 1px solid rgba(231,76,60,0.2);
  border-radius: 12px;
  padding: 1rem 1.2rem;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  cursor: pointer;
  transition: all 0.2s;
}
.supply-banner:hover { background: rgba(231,76,60,0.1); }
.supply-icon { font-size: 1.5rem; flex-shrink: 0; }
.supply-banner strong { font-size: 0.9rem; color: #e74c3c; }
.supply-banner p { font-size: 0.8rem; color: #666; margin-top: 2px; }
.supply-arrow { font-size: 1.2rem; color: #e74c3c; margin-left: auto; flex-shrink: 0; }

@media (max-width: 768px) {
  .food-grid { grid-template-columns: repeat(2, 1fr); }
  .guide-cards { grid-template-columns: repeat(2, 1fr); }
  .restaurant-grid { grid-template-columns: 1fr; }
}
</style>
