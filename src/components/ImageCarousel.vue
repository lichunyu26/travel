<template>
  <Teleport to="body">
    <Transition name="modal">
      <div v-if="visible" class="carousel-overlay" @click.self="close">
        <div class="carousel-container">
          <!-- Header -->
          <div class="carousel-header">
            <div>
              <h3 class="carousel-title">{{ data.name }}</h3>
              <span v-if="data.elev" class="carousel-elev">⛰️ {{ data.elev }}</span>
            </div>
            <button class="carousel-close" @click="close">✕</button>
          </div>

          <!-- Image viewer -->
          <div class="carousel-viewer" ref="viewerRef">
            <div
              class="carousel-track"
              :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
              @touchstart="onTouchStart"
              @touchmove="onTouchMove"
              @touchend="onTouchEnd"
            >
              <div
                v-for="(img, i) in data.images"
                :key="i"
                class="carousel-slide"
              >
                <img :src="img" :alt="`${data.name} ${i + 1}`" draggable="false" />
              </div>
            </div>

            <!-- Nav arrows (desktop) -->
            <button v-if="currentIndex > 0" class="carousel-arrow left" @click="prev">‹</button>
            <button v-if="currentIndex < data.images.length - 1" class="carousel-arrow right" @click="next">›</button>
          </div>

          <!-- Dots + counter -->
          <div class="carousel-footer">
            <div class="carousel-dots">
              <span
                v-for="(_, i) in data.images"
                :key="i"
                class="carousel-dot"
                :class="{ active: i === currentIndex }"
                @click="goTo(i)"
              ></span>
            </div>
            <div class="carousel-counter">{{ currentIndex + 1 }} / {{ data.images.length }}</div>
          </div>

          <!-- Description -->
          <div v-if="data.desc" class="carousel-desc">{{ data.desc }}</div>

          <!-- Thumbnail strip -->
          <div class="carousel-thumbs">
            <img
              v-for="(img, i) in data.images"
              :key="i"
              :src="img"
              :alt="`缩略图 ${i + 1}`"
              class="carousel-thumb"
              :class="{ active: i === currentIndex }"
              @click="goTo(i)"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  visible: Boolean,
  data: {
    type: Object,
    default: () => ({ name: '', desc: '', elev: '', images: [] }),
  },
})

const emit = defineEmits(['close'])

const currentIndex = ref(0)
const viewerRef = ref(null)
let touchStartX = 0
let touchDeltaX = 0

watch(() => props.visible, (val) => {
  if (val) {
    currentIndex.value = 0
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
})

function close() {
  emit('close')
}

function prev() {
  if (currentIndex.value > 0) currentIndex.value--
}

function next() {
  if (currentIndex.value < props.data.images.length - 1) currentIndex.value++
}

function goTo(i) {
  currentIndex.value = i
}

// Touch swipe support
function onTouchStart(e) {
  touchStartX = e.touches[0].clientX
  touchDeltaX = 0
}

function onTouchMove(e) {
  touchDeltaX = e.touches[0].clientX - touchStartX
}

function onTouchEnd() {
  const threshold = 50
  if (touchDeltaX > threshold) {
    prev()
  } else if (touchDeltaX < -threshold) {
    next()
  }
}

// Keyboard support
if (typeof window !== 'undefined') {
  window.addEventListener('keydown', (e) => {
    if (!props.visible) return
    if (e.key === 'Escape') close()
    if (e.key === 'ArrowLeft') prev()
    if (e.key === 'ArrowRight') next()
  })
}
</script>

<style scoped>
.carousel-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.92);
  z-index: 10000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
}

.carousel-container {
  width: 100%;
  max-width: 800px;
  max-height: 95vh;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.carousel-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  color: white;
}
.carousel-title {
  font-size: 1.3rem;
  font-weight: 700;
}
.carousel-elev {
  font-size: 0.8rem;
  color: #f87171;
  background: rgba(239,68,68,0.2);
  padding: 2px 10px;
  border-radius: 10px;
  display: inline-block;
  margin-top: 4px;
}
.carousel-close {
  background: rgba(255,255,255,0.15);
  border: none;
  color: white;
  font-size: 1.2rem;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  cursor: pointer;
  transition: background 0.2s;
}
.carousel-close:hover { background: rgba(255,255,255,0.3); }

/* Image viewer */
.carousel-viewer {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 10;
  overflow: hidden;
  border-radius: 12px;
  background: #111;
}
.carousel-track {
  display: flex;
  height: 100%;
  transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
.carousel-slide {
  min-width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.carousel-slide img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

/* Arrow buttons */
.carousel-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0,0,0,0.5);
  border: none;
  color: white;
  font-size: 2rem;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  cursor: pointer;
  transition: background 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
}
.carousel-arrow:hover { background: rgba(0,0,0,0.7); }
.carousel-arrow.left { left: 10px; }
.carousel-arrow.right { right: 10px; }

/* Footer: dots + counter */
.carousel-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.carousel-dots {
  display: flex;
  gap: 6px;
}
.carousel-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: rgba(255,255,255,0.3);
  cursor: pointer;
  transition: all 0.2s;
}
.carousel-dot.active {
  background: white;
  width: 24px;
  border-radius: 4px;
}
.carousel-counter {
  color: rgba(255,255,255,0.7);
  font-size: 0.85rem;
}

/* Description */
.carousel-desc {
  color: rgba(255,255,255,0.8);
  font-size: 0.9rem;
  line-height: 1.5;
  text-align: center;
}

/* Thumbnail strip */
.carousel-thumbs {
  display: flex;
  gap: 6px;
  overflow-x: auto;
  padding: 4px 0;
  scrollbar-width: none;
}
.carousel-thumbs::-webkit-scrollbar { display: none; }
.carousel-thumb {
  width: 60px;
  height: 45px;
  object-fit: cover;
  border-radius: 6px;
  cursor: pointer;
  opacity: 0.5;
  transition: all 0.2s;
  flex-shrink: 0;
  border: 2px solid transparent;
}
.carousel-thumb.active {
  opacity: 1;
  border-color: white;
}
.carousel-thumb:hover { opacity: 0.8; }

/* Transition */
.modal-enter-active,
.modal-leave-active { transition: opacity 0.3s ease; }
.modal-enter-from,
.modal-leave-to { opacity: 0; }

@media (max-width: 768px) {
  .carousel-viewer { aspect-ratio: 4 / 3; border-radius: 8px; }
  .carousel-title { font-size: 1.1rem; }
  .carousel-arrow { width: 36px; height: 36px; font-size: 1.5rem; }
  .carousel-thumb { width: 48px; height: 36px; }
}
</style>
