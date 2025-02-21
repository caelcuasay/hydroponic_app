<template>
  <div class="col-md-6 mb-4 chart-container">
      <div class="card h-100">
          <div class="card-header">
              <h5 class="mb-0">
                  <i class="fas fa-microchip icon-animate me-1"></i> Environmental Data
                  <div class="ms-auto">
                      <i class="fas fa-info-circle ms-2" title="Sensor Information"></i>
                      <i class="fas fa-cog ms-2" title="Manage Sensors"></i>
                  </div>
              </h5>
          </div>
          <div class="card-body">
              <canvas id="temp-humidity-chart"></canvas>
          </div>
      </div>
  </div>
</template>

<script>
// Import the necessary components from chart.js
import { Chart, LineController, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register the components you'll use
Chart.register(LineController, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default {
  mounted() {
      this.createTempHumidityChart();
  },
  methods: {
      createTempHumidityChart() {
          const ctx = document.getElementById('temp-humidity-chart').getContext('2d');

          // Example data (replace with your actual data)
          const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
          const tempData = [20, 22, 25, 28, 30, 28, 25];
          const humidityData = [60, 62, 65, 68, 70, 68, 65];

          new Chart(ctx, {
              type: 'line', // Specify the chart type (important!)
              data: {
                  labels: labels,
                  datasets: [{
                      label: 'Temperature (°C)',
                      data: tempData,
                      borderColor: 'rgb(255, 99, 132)', // Red
                      backgroundColor: 'rgba(255, 99, 132, 0.5)',
                      yAxisID: 'y', // Use the default y-axis
                  }, {
                      label: 'Humidity (%)',
                      data: humidityData,
                      borderColor: 'rgb(54, 162, 235)', // Blue
                      backgroundColor: 'rgba(54, 162, 235, 0.5)',
                      yAxisID: 'y1', // Use a second y-axis for humidity
                  }]
              },
              options: {
                  responsive: true, // Make the chart responsive
                  scales: {
                      y: {
                          type: 'linear', // Explicitly set the y-axis type
                          position: 'left', // Put temperature on the left
                      },
                      y1: {
                          type: 'linear',
                          position: 'right', // Put humidity on the right
                          grid: {
                              drawOnChartArea: false, // Only show grid lines for the left y-axis
                          },
                      },
                  },
                  plugins: {  // Add plugins for title and legend
          legend: {
            position: 'top', // Put the legend at the top
          },
          title: {
            display: true,
            text: 'Temperature and Humidity' // Set the chart title
          }
                  }
              }
          });
      },
  },
};
</script>

<style scoped>
/* Add a style to make sure the chart takes up the full height */
.chart-container {
height: 400px; /* Or whatever height you want */
}
</style>