<template>
    <div class="container-fluid py-4">
      <h1 class="text-center mb-4 floating-icon">Sensor Management</h1>
      <div class="row mb-4">
        <div class="col-md-6">
          <div class="card h-100">
            <div class="card-header">
              <h5 class="mb-0"><i class="fas fa-sliders-h me-1"></i> Sensor Limits
                <div class="ms-auto">
                  <i class="fas fa-info-circle ms-2" title="Limit Settings Help"></i>
                </div>
              </h5>
            </div>
            <div class="card-body">
              <div class="row g-3">
                <div class="col-12">
                  <div class="sensor-limit-card">
                    <div class="row align-items-center">
                      <div class="col">
                        <h6><i class="fas fa-flask me-2 icon-animate"></i>pH Levels</h6>
                      </div>
                      <div class="col-auto d-flex align-items-center gap-2">
                        <span>Notify</span>
                        <div class="form-check form-switch custom-switch">
                          <input class="form-check-input" type="checkbox" checked>
                        </div>
                      </div>
                    </div>
                    <div class="row g-2">
                      <div class="col">
                        <div class="input-group">
                          <button class="btn btn-control minus-btn">-</button>
                          <input type="number" class="form-control text-center" value="5.5" step="0.1">
                          <button class="btn btn-control plus-btn">+</button>
                        </div>
                        <small class="text-muted">Minimum</small>
                      </div>
                      <div class="col">
                        <div class="input-group">
                          <button class="btn btn-control minus-btn">-</button>
                          <input type="number" class="form-control text-center" value="6.5" step="0.1">
                          <button class="btn btn-control plus-btn">+</button>
                        </div>
                        <small class="text-muted">Maximum</small>
                      </div>
                    </div>
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </template>
  
  <script>
  document.addEventListener("DOMContentLoaded", function () {
      const themeToggle = document.getElementById("theme-toggle");
      const themeIcon = themeToggle.querySelector("i");

      function applyTheme(isDark) {
          if (isDark) {
              document.body.classList.add("dark-mode");
              themeIcon.classList.remove("fa-moon");
              themeIcon.classList.add("fa-sun");
          } else {
              document.body.classList.remove("dark-mode");
              themeIcon.classList.remove("fa-sun");
              themeIcon.classList.add("fa-moon");
          }
      }

      // Load theme preference
      const isDarkMode = localStorage.getItem("darkMode") === "true";
      applyTheme(isDarkMode);

      themeToggle.addEventListener("click", function () {
          const isDark = !document.body.classList.contains("dark-mode");
          localStorage.setItem("darkMode", isDark);
          applyTheme(isDark);
      });
  });
</script>