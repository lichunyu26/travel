<template>
  <div class="map-wrap">
    <div class="map-controls">
      <button
        v-for="route in routeButtons"
        :key="route.id"
        class="map-btn"
        :class="{ active: activeRoute === route.id }"
        @click="showRoute(route.id)"
      >{{ route.label }}</button>
      <button
        class="map-btn"
        :class="{ active: satelliteOn }"
        @click="toggleSatellite"
      >🛰️ 卫星图</button>
    </div>
    <div id="mapContainer" ref="mapRef"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, defineExpose } from 'vue'
import { waypointData, routeDefinitions } from '../data/waypoints.js'

const mapRef = ref(null)
const activeRoute = ref('all')
const satelliteOn = ref(false)

let map = null
let satelliteLayer = null
let roadNetLayer = null
let markers = []
let polylines = []
let infoWindows = []
let driving = null
let mapReady = false

const routeButtons = [
  { id: 'all', label: '📍 全程路线' },
  { id: 'outbound', label: '🔵 去程' },
  { id: 'return', label: '🟠 返程' },
  { id: 'yading', label: '💎 景区内' },
]

// Load AMap script
function loadAMap() {
  return new Promise((resolve) => {
    if (window.AMap) { resolve(); return }
    window._AMapSecurityConfig = { securityJsCode: '12cd61ff62636f0e3ad5506dab7847f7' }
    const script = document.createElement('script')
    script.src = 'https://webapi.amap.com/maps?v=2.0&key=a1432a66f3a38c7b7cb91495d4bf3f06&plugin=AMap.Driving'
    script.onload = () => resolve()
    document.head.appendChild(script)
  })
}

async function initMap() {
  if (mapReady) return
  await loadAMap()

  map = new AMap.Map('mapContainer', {
    zoom: 7,
    center: [101.5, 30.0],
    mapStyle: 'amap://styles/normal',
  })

  satelliteLayer = new AMap.TileLayer.Satellite({ zooms: [3, 18], opacity: 0 })
  satelliteLayer.setMap(map)
  roadNetLayer = new AMap.TileLayer.RoadNet({ zooms: [3, 18], opacity: 0 })
  roadNetLayer.setMap(map)

  driving = new AMap.Driving({ map, policy: AMap.DrivingPolicy.LEAST_TIME, hideMarkers: true })

  mapReady = true
  showRoute('all')
}

function clearMap() {
  markers.forEach(m => m.setMap(null))
  polylines.forEach(p => p.setMap(null))
  infoWindows = []
  markers = []
  polylines = []
}

function makeIcon(type) {
  const colors = { city: '#3b82f6', spot: '#10b981', pass: '#ef4444' }
  const color = colors[type] || '#94a3b8'
  const size = type === 'pass' ? 14 : 12
  return new AMap.Icon({
    size: new AMap.Size(size, size),
    image: `data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}"><circle cx="${size/2}" cy="${size/2}" r="${size/2}" fill="${color}" stroke="white" stroke-width="2"/></svg>`)}`,
    imageSize: new AMap.Size(size, size),
  })
}

function addMarker(key) {
  const wp = waypointData[key]
  if (!wp) return

  const marker = new AMap.Marker({
    position: new AMap.LngLat(wp.lng, wp.lat),
    title: wp.name,
    icon: makeIcon(wp.type),
    offset: new AMap.Pixel(-6, -6),
  })

  // Build InfoWindow HTML
  let html = `<div style="width:260px;font-family:'Noto Sans SC',sans-serif;">`
  if (wp.images?.length) {
    html += `<img src="${wp.images[0]}" style="width:100%;height:140px;object-fit:cover;" />`
  }
  html += `<div style="padding:8px 12px;">`
  html += `<div style="font-weight:700;font-size:1rem;">${wp.name}</div>`
  if (wp.elev) html += `<span style="font-size:0.75rem;color:#e74c3c;background:rgba(231,76,60,0.1);padding:2px 8px;border-radius:10px;display:inline-block;margin:4px 0;">⛰️ ${wp.elev}</span>`
  html += `<div style="font-size:0.82rem;color:#666;line-height:1.5;">${wp.desc}</div>`
  if (wp.images?.length > 1) {
    html += `<div style="font-size:0.7rem;color:#2d5a27;margin-top:4px;">📷 ${wp.images.length}张图片</div>`
  }
  html += `</div></div>`

  const infoWindow = new AMap.InfoWindow({ content: html, offset: new AMap.Pixel(0, -10), maxWidth: 280 })

  marker.on('click', () => infoWindow.open(map, marker.getPosition()))
  marker.setMap(map)
  markers.push(marker)
  infoWindows.push(infoWindow)
}

function drawPolyline(keys, color, dash) {
  const path = keys.filter(k => waypointData[k]).map(k => new AMap.LngLat(waypointData[k].lng, waypointData[k].lat))
  const polyline = new AMap.Polyline({
    path, strokeColor: color, strokeWeight: 4, strokeOpacity: 0.8,
    strokeStyle: dash ? 'dashed' : 'solid', lineJoin: 'round',
  })
  polyline.setMap(map)
  polylines.push(polyline)
}

function showRoute(type) {
  if (!mapReady) return
  activeRoute.value = type
  clearMap()

  if (type === 'all') {
    drawPolyline(routeDefinitions.outbound, '#3b82f6', false)
    drawPolyline(routeDefinitions.return, '#f97316', true)
    drawPolyline(routeDefinitions.yading, '#10b981', false)
    const allKeys = new Set([...routeDefinitions.outbound, ...routeDefinitions.yading, ...routeDefinitions.return])
    allKeys.forEach(key => addMarker(key))
  } else if (type === 'outbound') {
    drawPolyline(routeDefinitions.outbound, '#3b82f6', false)
    routeDefinitions.outbound.forEach(key => addMarker(key))
  } else if (type === 'return') {
    drawPolyline(routeDefinitions.return, '#f97316', true)
    routeDefinitions.return.forEach(key => addMarker(key))
  } else if (type === 'yading') {
    drawPolyline(routeDefinitions.yading, '#10b981', false)
    routeDefinitions.yading.forEach(key => addMarker(key))
  }

  map.setFitView(markers, false, [50, 50, 50, 50])
}

function toggleSatellite() {
  if (!mapReady) return
  satelliteOn.value = !satelliteOn.value
  satelliteLayer.setOpacity(satelliteOn.value ? 0.8 : 0)
  roadNetLayer.setOpacity(satelliteOn.value ? 0.6 : 0)
}

// Fly to a specific waypoint (called from parent)
function flyToWaypoint(key) {
  if (!mapReady) {
    initMap().then(() => flyToWaypoint(key))
    return
  }
  const wp = waypointData[key]
  if (!wp) return
  map.setZoomAndCenter(14, [wp.lng, wp.lat], false, 1500)
  setTimeout(() => {
    const idx = Object.keys(waypointData).indexOf(key)
    if (markers[idx]) {
      infoWindows[idx]?.open(map, markers[idx].getPosition())
    }
  }, 1600)
}

onMounted(() => {
  // Defer map init to when tab is shown
})

defineExpose({ initMap, flyToWaypoint })
</script>

<style scoped>
.map-wrap {
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
}
.map-controls {
  display: flex;
  gap: 0.5rem;
  padding: 0.8rem 1rem;
  flex-wrap: wrap;
}
.map-btn {
  padding: 0.4rem 1rem;
  border-radius: 20px;
  border: 1px solid #ddd;
  background: white;
  font-size: 0.8rem;
  cursor: pointer;
  transition: all 0.2s;
  font-family: inherit;
}
.map-btn:hover { border-color: #2d5a27; color: #2d5a27; }
.map-btn.active { background: #2d5a27; color: white; border-color: #2d5a27; }
#mapContainer { width: 100%; height: 500px; }

@media (max-width: 768px) {
  #mapContainer { height: 350px; }
}
</style>
