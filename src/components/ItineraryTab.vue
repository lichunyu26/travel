<template>
  <div>
    <DayCard
      v-for="day in itineraryDays"
      :key="day.day"
      :day="day"
      @flyTo="(key) => $emit('flyTo', key)"
      @openCarousel="(data) => $emit('openCarousel', data)"
    />
  </div>
</template>

<script setup>
import DayCard from './DayCard.vue'
import { itineraryDays } from '../data/itinerary.js'

defineEmits(['flyTo', 'openCarousel'])
</script>
