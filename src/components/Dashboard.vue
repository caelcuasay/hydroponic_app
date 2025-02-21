<template>
  <div>
    <button id="theme-toggle" class="btn btn-outline-secondary">
      <i id="theme-icon" class="fas fa-moon"></i>
    </button>
    <div class="container-fluid py-4">
      <h1 class="text-center mb-4 floating-icon">Dashboard</h1>
      <div class="row">
        <SensorReadings />
        <ActuatorControls />
      </div>
      <div class="row">
        <PhEcChart />
        <TempHumidityChart />
      </div>
      <div class="row">
        <GrowthCalendar />
        <PlantStatus />
      </div>
    </div>
  </div>
</template>

<script>
import SensorReadings from './SensorReadings.vue';
import ActuatorControls from './ActuatorControls.vue';
import PhEcChart from './PhEcChart.vue';
import TempHumidityChart from './TempHumidityChart.vue';
import GrowthCalendar from './GrowthCalendar.vue';
import PlantStatus from './PlantStatus.vue';

export default {
  components: {
    SensorReadings,
    ActuatorControls,
    PhEcChart,
    TempHumidityChart,
    GrowthCalendar,
    PlantStatus,
  },
  mounted() {
    this.applyTheme();
    // Initialize charts and other components
  },
  methods: {
    applyTheme(isDark) {
      // Theme application logic
    },
  },
};
</script>