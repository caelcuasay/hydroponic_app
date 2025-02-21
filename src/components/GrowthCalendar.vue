<template>
  <div class="card">
    <div class="card-header">
      <h5 class="mb-0">
        <i class="fas fa-microchip icon-animate me-1"></i> Growth Calendar
        <div class="ms-auto">
          <i class="fas fa-info-circle ms-2" title="Sensor Information"></i>
          <i class="fas fa-cog ms-2" title="Manage Sensors"></i>
        </div>
      </h5>
    </div>
    <div class="card-body">
      <div class="calendar" id="calendar">
        <div v-for="day in days" :key="day" class="calendar-day" :class="{ active: day <= currentDay }">
          {{ day }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: 'GrowthCalendar',
data() {
  return {
    days: Array.from({ length: 30 }, (_, i) => i + 1),
    currentDay: new Date().getDate(),
  };
},
};
</script>

<style scoped>
/* Scoped styles for GrowthCalendar */
.calendar {
display: grid;
grid-template-columns: repeat(7, 1fr);
gap: 5px;
margin-top: 1rem;
}

.calendar-day {
padding: 10px;
text-align: center;
border-radius: 10px;
background: var(--glass-effect);
transition: background 0.3s ease;
}

.calendar-day.active {
background: var(--success-color);
color: white;
}

.calendar-day:hover {
background: var(--accent-color);
color: white;
}
.card {
background: var(--card-bg);
border: none;
border-radius: 20px;
box-shadow: 0 8px 32px 0 var(--glass-effect);
backdrop-filter: blur(10px);
transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s;
overflow: hidden;
}

.card-header {
background: var(--card-header);
color: white;
border-bottom: none;
padding: 1.5rem;
}
</style>