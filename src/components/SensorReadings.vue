<template>
  <div class="col-md-6 mb-4">
    <div class="card h-100">
      <div class="card-header">
        <h5 class="mb-0">
          <i class="fas fa-microchip icon-animate me-1"></i> Sensor Readings
          <div class="ms-auto">
            <i class="fas fa-info-circle ms-2" title="Sensor Information"></i>
            <i class="fas fa-cog ms-2" title="Manage Sensors"></i>
          </div>
        </h5>
      </div>
      <div class="card-body">
        <div class="row ms-5">
          <div class="col-6 mb-4">
            <h6>
              <i class="fas fa-bolt icon-animate"></i> EC
            </h6>
            <span id="ec-value" class="sensor-value">{{ ecValue }}</span>
            <span class="sensor-unit">ppm</span>
            <span class="sensor-status" id="ec-status">{{ ecStatus }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  <script>
  export default {
    data() {
      return {
        ecValue: 1.5,
        ecStatus: 'Optimal',
        //... other sensor data
      };
    },
    mounted() {
      this.updateSensorReadings();
    },
    methods: {
      updateSensorReadings() {
        // Fetch sensor data from API or simulate data
        setInterval(() => {
          // Update sensor values
        }, 2000);
      },
    },
  };
  </script>