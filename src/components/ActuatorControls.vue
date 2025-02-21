<template>
  <div class="col-md-6 mb-4">
    <div class="card h-100">
      <div class="card-header">
        <h5 class="mb-0">
          <i class="fas fa-cogs icon-animate me-1"></i> Actuator Controls
          <div class="ms-auto">
            <i class="fas fa-info-circle ms-2" title="Actuators Information"></i>
            <i class="fas fa-cog ms-2" title="Manage Actuators"></i>
          </div>
        </h5>
      </div>
      <div class="card-body">
        <div class="actuator-card">
          <div class="form-check form-switch custom-switch">
            <input class="form-check-input" type="checkbox" id="ph-up-pump" v-model="phUpPumpStatus" />
            <label class="form-check-label" for="ph-up-pump">
              <i class="fas fa-up-long icon-animate"></i>
              <span>pH Up Pump</span>
              <span class="actuator-status">{{ phUpPumpStatus? 'Running': 'Idle' }}</span>
              <span class="status-indicator":class="phUpPumpStatus? 'status-active': 'status-idle'"></span>
            </label>
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
      phUpPumpStatus: false,
    };
  },
};
</script>