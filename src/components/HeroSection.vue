<template>
  <section class="hero">
    <div class="hero-bg" :style="{ backgroundImage: `url('${bgImage}')` }"></div>
    <div class="hero-overlay"></div>
    <div class="hero-content">
      <h1 class="hero-title">川西自驾 · 稻城亚丁</h1>
      <p class="hero-subtitle">探索人间最后的香格里拉</p>
      <div class="hero-date">2026年7月25日 — 8月2日</div>
    </div>
    <div class="scroll-hint">↓ 向下滑动查看行程</div>
  </section>
</template>

<script setup>
const bgImage = './chuangxi-images/post2/06-格聂之眼.webp'
</script>

<style scoped>
.hero {
  position: relative;
  height: 100vh;
  min-height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
.hero-bg {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(45,90,39,0.7), rgba(26,58,26,0.5));
}
.hero-content {
  position: relative;
  z-index: 2;
  text-align: center;
  color: white;
  padding: 2rem;
}
.hero-title {
  font-family: 'Noto Serif SC', serif;
  font-size: clamp(2.5rem, 8vw, 5rem);
  font-weight: 700;
  margin-bottom: 0.8rem;
  text-shadow: 2px 4px 8px rgba(0,0,0,0.3);
  letter-spacing: 0.1em;
}
.hero-subtitle {
  font-size: clamp(1rem, 3vw, 1.5rem);
  font-weight: 300;
  opacity: 0.9;
  margin-bottom: 2rem;
  letter-spacing: 0.05em;
}
.hero-date {
  font-size: 1.2rem;
  font-weight: 500;
  background: rgba(255,255,255,0.2);
  padding: 0.7rem 2rem;
  border-radius: 50px;
  display: inline-block;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255,255,255,0.3);
}
.scroll-hint {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  color: rgba(255,255,255,0.7);
  font-size: 0.85rem;
  animation: bounce 2s infinite;
  z-index: 2;
}
@keyframes bounce {
  0%,100% { transform: translateX(-50%) translateY(0); }
  50% { transform: translateX(-50%) translateY(-8px); }
}
</style>
