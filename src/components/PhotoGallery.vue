<template>
  <section class="gallery">
    <h2 class="gallery-title">📸 精选图库</h2>
    <div class="gallery-filters">
      <button
        v-for="f in filters"
        :key="f.id"
        class="filter-btn"
        :class="{ active: activeFilter === f.id }"
        @click="activeFilter = f.id"
      >{{ f.label }}</button>
    </div>
    <div class="gallery-grid">
      <div
        v-for="(photo, i) in filteredPhotos"
        :key="i"
        class="gallery-item"
        @click="openLightbox(photo.src)"
      >
        <img :src="photo.src" :alt="photo.title" loading="lazy" />
        <div class="gallery-label">
          <h4>{{ photo.title }}</h4>
          <p>{{ photo.desc }}</p>
        </div>
      </div>
    </div>

    <!-- Lightbox -->
    <Teleport to="body">
      <div v-if="lightboxSrc" class="lightbox" @click="lightboxSrc = ''">
        <div class="lightbox-close">×</div>
        <img :src="lightboxSrc" alt="" />
      </div>
    </Teleport>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { galleryPhotos } from '../data/gallery.js'

const activeFilter = ref('all')
const lightboxSrc = ref('')

const filters = [
  { id: 'all', label: '全部' },
  { id: 'snow', label: '🏔️ 雪山' },
  { id: 'lake', label: '💎 湖泊' },
  { id: 'grass', label: '🌿 草甸' },
  { id: 'culture', label: '🛕 人文' },
  { id: 'food', label: '🍲 美食' },
]

const filteredPhotos = computed(() => {
  if (activeFilter.value === 'all') return galleryPhotos
  return galleryPhotos.filter(p => p.cat === activeFilter.value)
})

function openLightbox(src) {
  lightboxSrc.value = src
  document.body.style.overflow = 'hidden'
  setTimeout(() => {
    const close = () => { lightboxSrc.value = ''; document.body.style.overflow = ''; window.removeEventListener('keydown', onKey) }
    const onKey = (e) => { if (e.key === 'Escape') close() }
    window.addEventListener('keydown', onKey)
  }, 100)
}
</script>

<style scoped>
.gallery {
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 1rem;
}
.gallery-title {
  font-family: 'Noto Serif SC', serif;
  font-size: 1.8rem;
  text-align: center;
  color: #2d5a27;
  margin-bottom: 1.5rem;
}
.gallery-filters {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-bottom: 1.5rem;
  justify-content: center;
}
.filter-btn {
  padding: 0.4rem 1rem;
  border-radius: 20px;
  border: 1px solid #ddd;
  background: white;
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.2s;
  font-family: inherit;
}
.filter-btn:hover { border-color: #2d5a27; }
.filter-btn.active { background: #2d5a27; color: white; border-color: #2d5a27; }

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
}
.gallery-item {
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
  transition: all 0.3s;
  cursor: pointer;
}
.gallery-item:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 30px rgba(0,0,0,0.12);
}
.gallery-item img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  display: block;
}
.gallery-label {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0,0,0,0.7));
  padding: 1.5rem 1rem 0.8rem;
  color: white;
}
.gallery-label h4 { font-size: 0.95rem; }
.gallery-label p { font-size: 0.75rem; opacity: 0.8; margin-top: 2px; }

/* Lightbox */
.lightbox {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.9);
  z-index: 10000;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.lightbox img {
  max-width: 90vw;
  max-height: 90vh;
  object-fit: contain;
  border-radius: 8px;
}
.lightbox-close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  color: white;
  font-size: 2rem;
  cursor: pointer;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}

@media (max-width: 768px) {
  .gallery-grid { grid-template-columns: repeat(2, 1fr); gap: 0.8rem; }
  .gallery-item img { height: 150px; }
}
</style>
