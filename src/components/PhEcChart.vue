<template>
  <div class="col-md-6 mb-4 chart-container">
    <div class="card h-100">
      <div class="card-header">
        <h5 class="mb-0">
          <i class="fas fa-microchip icon-animate me-1"></i> pH & EC Reading Patterns
          <div class="ms-auto">
            <i class="fas fa-info-circle ms-2" title="Sensor Information"></i>
            <i class="fas fa-cog ms-2" title="Manage Sensors"></i>
          </div>
        </h5>
      </div>
      <div class="card-body">
        <canvas ref="phEcChartCanvas"></canvas>  </div>
    </div>
  </div>
</template>

<script>
import { Chart, LineController, LineElement, PointElement, LinearScale, CategoryScale, Title, Tooltip, Legend } from 'chart.js';

Chart.register(LineController, LineElement, PointElement, LinearScale, CategoryScale, Title, Tooltip, Legend);

export default {
  name: 'PhEcChart', // Good practice: give your component a name
  mounted() {
    this.createPhEcChart();
  },
  methods: {
    createPhEcChart() {
      const ctx = this.$refs.phEcChartCanvas.getContext('2d');
      new Chart(ctx, {
        type: 'line', //  Specify the chart type.  'line' is a good default.
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'], // Example labels - REPLACE with your actual data
          datasets: [
            {
              label: 'pH',
              data: [6.5, 6.8, 7.0, 6.9, 7.2, 7.1], // Example pH data - REPLACE
              borderColor: 'rgb(75, 192, 192)', // Example color
              tension: 0.4, // Optional: smooth the line
            },
            {
              label: 'EC',
              data: [1.2, 1.5, 1.4, 1.6, 1.8, 1.7], // Example EC data - REPLACE
              borderColor: 'rgb(255, 99, 132)', // Example color
              tension: 0.4, // Optional: smooth the line
            }
          ]
        },
        options: {
          responsive: true, // Make the chart responsive
          maintainAspectRatio: false, // Important: Allow the chart to fill its container
          plugins: {
            title: {
              display: true,
              text: 'pH and EC Readings' // Optional: Add a chart title
            },
              legend: {
                display: true, // enables the legend
                position: 'top' // example position
            }
          },
          scales: {  //added scales
            x: {
              title: {
                display: true,
                text: 'Time' //x-axis
              }
            },
            y: {
              title: {
                display: true,
                text: 'Value' //y-axis
              },
              beginAtZero: false // Adjust as needed for your data
            }
          }
        }
      });
    }
  },
};
</script>

<style scoped>
/*  Make sure the chart fills the container */
.chart-container {
  position: relative; /* Important for aspect ratio */
  height: 400px;      /* or height: 100% with a fixed height parent */
  width: 100%;
}
</style>