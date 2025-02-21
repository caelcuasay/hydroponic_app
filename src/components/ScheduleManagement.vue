<template>
    <div class="container-fluid py-4">
      <h1 class="text-center mb-4 floating-icon">Schedule Management</h1>
      <div class="row">
        <div class="col-md-6 mb-4">
          <div class="card h-100">
            <div class="card-header">
              <h5 class="mb-0"><i class="fas fa-calendar-alt me-1"></i> pH Up Pump Schedule
                <div class="ms-auto">
  
                </div>
              </h5>
            </div>
            <div class="card-body">
              <div class="switch-container">
                <div class="form-check form-switch">
                  <input class="form-check-input" type="checkbox" role="switch" id="ph-up-switch">
                </div>
              </div>
              <div class="sensor-limit-card mb-3">
                <div class="row g-2 align-items-center">
                  <div class="col-6">
                    <label for="ph-up-interval" class="form-label">Interval</label>
                    <div class="custom-time-input">
                      <input id="ph-up-interval-hours form-control" type="number" min="0" max="23" placeholder="HH">
                      <span>:</span>
                      <input id="ph-up-interval-minutes form-control" type="number" min="0" max="59" placeholder="MM">
                      <span>:</span>
                      <input id="ph-up-interval-seconds form-control" type="number" min="0" max="59" placeholder="SS">
                    </div>
                  </div>
                  <div class="col-6">
                    <label for="ph-up-duration" class="form-label">Duration</label>
                    <div class="custom-time-input">
                      <input id="ph-up-duration-hours form-control" type="number" min="0" max="23" placeholder="HH">
                      <span>:</span>
                      <input id="ph-up-duration-minutes form-control" type="number" min="0" max="59" placeholder="MM">
                      <span>:</span>
                      <input id="ph-up-duration-seconds form-control" type="number" min="0" max="59" placeholder="SS">
                    </div>
                  </div>
                </div>
                <div class="row mt-2 align-items-center">
                  <div class="col-12">
                    <label class="form-label">Days:</label><br>
                    <div class="btn-group" role="group" aria-label="Days">
                      <input type="checkbox" class="btn-check" id="ph-up-monday" autocomplete="off">
                      <label class="btn btn-outline-primary" for="ph-up-monday">Mon</label>
                      <input type="checkbox" class="btn-check" id="ph-up-tuesday" autocomplete="off">
                      <label class="btn btn-outline-primary" for="ph-up-tuesday">Tue</label>
                      <input type="checkbox" class="btn-check" id="ph-up-wednesday" autocomplete="off">
                      <label class="btn btn-outline-primary" for="ph-up-wednesday">Wed</label>
                      <input type="checkbox" class="btn-check" id="ph-up-thursday" autocomplete="off">
                      <label class="btn btn-outline-primary" for="ph-up-thursday">Thu</label>
                      <input type="checkbox" class="btn-check" id="ph-up-friday" autocomplete="off">
                      <label class="btn btn-outline-primary" for="ph-up-friday">Fri</label>
                      <input type="checkbox" class="btn-check" id="ph-up-saturday" autocomplete="off">
                      <label class="btn btn-outline-primary" for="ph-up-saturday">Sat</label>
                      <input type="checkbox" class="btn-check" id="ph-up-sunday" autocomplete="off">
                      <label class="btn btn-outline-primary" for="ph-up-sunday">Sun</label>
                    </div>
                    <div class="d-flex justify-content-end mt-4">
                      <button class="btn btn-sm" style="background-color: #8DB600; color: white;" type="button">
                        <i class="fas fa-power-off"></i> Activate
                      </button>
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