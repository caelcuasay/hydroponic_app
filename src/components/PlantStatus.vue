<template>
  <div class="col-md-6 mb-4">
    <div class="card">
      <div class="card-header">
        <h5 class="mb-0">
          <i class="fas fa-microchip icon-animate me-1"></i> Plant Status
          <div class="ms-auto">
            <i class="fas fa-info-circle ms-2" title="Sensor Information"></i>
            <i class="fas fa-cog ms-2" title="Manage Sensors"></i>
          </div>
        </h5>
      </div>
      <div class="card-body">
        <div class="row">
          <div class="col-md-6 d-flex justify-content-center align-items-center">
            <img id="plant-status" src="Untitled-design-2023-06-21T100918.jpg" alt="Plant Status" class="img-fluid rounded-3" />
          </div>
          <div class="col-md-6">
            <h4 class="text-center">🌿 Current Status</h4>
            <div class="alert alert-success" role="alert" id="plant-health-alert">
              <span id="plant-health">{{ plantHealth }}</span>
              <span id="plant-emoji">{{ plantEmoji }}</span>
            </div>
            <h5>Growth Stage: <span id="growth-stage" class="badge bg-primary">{{ growthStage }}</span></h5>
            <p id="plant-description" class="lead">{{ plantDescription }}</p>
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
      plantHealth: 'Good',
      plantEmoji: '🌱',
      growthStage: 'Vegetative',
      plantDescription: 'The plants are showing healthy growth with vibrant green leaves. No signs of nutrient deficiencies or pests observed.',
    };
  },
};
</script>