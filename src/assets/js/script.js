
document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("theme-toggle");
    const themeIcon = themeToggle.querySelector("i");
    let phEcChart, tempHumidityChart;

    // Dynamic chart configuration
    const getChartConfig = (isDark) => ({
        animation: {
            duration: 2000,
            easing: 'easeOutQuart'
        },
        elements: {
            line: {
                tension: 0.2
            }
        },
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                ticks: {
                    color: isDark ? '#caf0f8' : '#023e8a',
                },
                grid: {
                    color: isDark ? 'rgba(202, 240, 248, 0.1)' : 'rgba(2, 62, 138, 0.1)',
                }
            },
            y: {
                ticks: {
                    color: isDark ? '#caf0f8' : '#023e8a',
                },
                grid: {
                    color: isDark ? 'rgba(202, 240, 248, 0.1)' : 'rgba(2, 62, 138, 0.1)',
                }
            }
        },
        plugins: {
            legend: {
                labels: {
                    color: isDark ? '#caf0f8' : '#023e8a',
                }
            },
            tooltip: {
                titleColor: isDark ? '#03045e' : '#f0f9ff',
                bodyColor: isDark ? '#03045e' : '#f0f9ff',
                backgroundColor: isDark ? '#90e0ef' : '#0077b6',
            }
        }
    });

    function initializeCharts(isDark) {
        // Destroy existing charts if they exist
        if (phEcChart) phEcChart.destroy();
        if (tempHumidityChart) tempHumidityChart.destroy();

        // pH and EC Chart
        phEcChart = new Chart(document.getElementById('ph-ec-chart'), {
            type: 'line',
            data: {
                labels: [],
                datasets: [{
                    label: 'pH Level',
                    data: [],
                    borderColor: isDark ? '#4dabf7' : '#1864ab',
                    backgroundColor: isDark ? '#4dabf7' : '#1864ab',
                    borderWidth: 2,
                    pointRadius: 0,
                    fill: false
                }, {
                    label: 'EC (mS/cm)',
                    data: [],
                    borderColor: isDark ? '#69db7c' : '#2f9e44',
                    backgroundColor: isDark ? '#69db7c' : '#2f9e44',
                    borderWidth: 2,
                    pointRadius: 0,
                    fill: false
                }]
            },
            options: getChartConfig(isDark)
        });

        // Environmental Data Chart
        tempHumidityChart = new Chart(document.getElementById('temp-humidity-chart'), {
            type: 'line',
            data: {
                labels: [],
                datasets: [{
                    label: 'Air Temp (°C)',
                    data: [],
                    borderColor: isDark ? '#ff6b6b' : '#c92a2a',
                    backgroundColor: isDark ? '#ff6b6b' : '#c92a2a',
                    borderWidth: 2,
                    fill: false
                }, {
                    label: 'Water Temp (°C)',
                    data: [],
                    borderColor: isDark ? '#00b4d8' : '#1864ab',
                    backgroundColor: isDark ? '#00b4d8' : '#1864ab',
                    borderWidth: 2,
                    fill: false
                }, {
                    label: 'Humidity (%)',
                    data: [],
                    borderColor: isDark ? '#4dabf7' : '#1c7ed6',
                    backgroundColor: isDark ? '#4dabf7' : '#1c7ed6',
                    borderWidth: 2,
                    fill: false
                }]
            },
            options: getChartConfig(isDark)
        });
    }

function applyTheme(isDark) {
  const themeToggle = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");


if (isDark) {
    document.body.classList.add("dark-mode");
    themeIcon.classList.remove("fa-moon");
    themeIcon.classList.add("fa-sun");
// Change sun color to yellow in dark mode
} else {
    document.body.classList.remove("dark-mode");
    themeIcon.classList.remove("fa-sun");
    themeIcon.classList.add("fa-moon");
   // Change moon color to white in light mode
}

initializeCharts(isDark);
}


    // Load theme preference and initialize charts
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    applyTheme(isDarkMode);
    
    themeToggle.addEventListener("click", function () {
        const isDark = !document.body.classList.contains("dark-mode");
        localStorage.setItem("darkMode", isDark);
        applyTheme(isDark);
    });

    // Calendar setup
    const calendarEl = document.getElementById("calendar");
    const startDate = new Date();
    const today = new Date();
    const daysSinceStart = Math.floor((today - startDate) / (1000 * 60 * 60 * 24));

    for (let i = 0; i < 30; i++) {
        const dayEl = document.createElement("div");
        dayEl.classList.add("calendar-day");
        if (i <= daysSinceStart) dayEl.classList.add("active");
        dayEl.textContent = i + 1;
        calendarEl.appendChild(dayEl);
    }

    // Chart update function
    function updateCharts() {
        const now = new Date();
        const timeLabel = `${now.getHours()}:${now.getMinutes().toString().padStart(2, '0')}`;

        // Update pH/EC Chart
        phEcChart.data.labels.push(timeLabel);
        phEcChart.data.datasets[0].data.push((Math.random() * (7 - 5.5) + 5.5).toFixed(2));
        phEcChart.data.datasets[1].data.push((Math.random() * (2 - 1) + 1).toFixed(2));

        // Update Environmental Chart
        tempHumidityChart.data.labels.push(timeLabel);
        tempHumidityChart.data.datasets[0].data.push((Math.random() * (30 - 20) + 20).toFixed(1));
        tempHumidityChart.data.datasets[1].data.push((Math.random() * (25 - 20) + 20).toFixed(1));
        tempHumidityChart.data.datasets[2].data.push(Math.floor(Math.random() * (80 - 40) + 40));

        // Maintain data history
        [phEcChart, tempHumidityChart].forEach(chart => {
            if (chart.data.labels.length > 15) {
                chart.data.labels.shift();
                chart.data.datasets.forEach(dataset => dataset.data.shift());
            }
            chart.update();
        });

        
    }

    function getRandomValue(min, max) {
return (Math.random() * (max - min) + min).toFixed(2); // Generate a random value between min and max
}

function updateSensorStatuses() {
const statusIcons = {
optimal: '<i class="fas fa-check-circle"></i>',
warning: '<i class="fas fa-exclamation-circle"></i>',
critical: '<i class="fas fa-times-circle"></i>'
};

// Function to update the status of each sensor
function setStatus(elementId, value, optimalRange, warningRange) {
const element = document.getElementById(elementId);

// Check if the value is within the optimal range
if (value >= optimalRange.min && value <= optimalRange.max) {
    element.innerHTML = `${statusIcons.optimal}`;
    element.className = 'sensor-status status-optimal';
} 
// Check if the value is within the warning range
else if ((value >= warningRange.min && value < optimalRange.min) || 
           (value > optimalRange.max && value <= warningRange.max)) {
    element.innerHTML = `${statusIcons.warning}`;
    element.className = 'sensor-status status-warning';
} 
// Anything outside the optimal and warning ranges will be critical
else {
    element.innerHTML = `${statusIcons.critical}`;
    element.className = 'sensor-status status-critical';
}
}

// Generate random values for each sensor
const phValue = getRandomValue(4.0, 8.0); // Random pH between 4.0 and 8.0 (wider range for testing)
const ecValue = getRandomValue(0.5, 3.0); // Random EC between 0.5 and 3.0 (wider range for testing)
const waterLevelValue = getRandomValue(20, 100); // Random water level between 20% and 100%
const waterTempValue = getRandomValue(10, 35); // Random water temperature between 10°C and 35°C
const airTempValue = getRandomValue(10, 40); // Random air temperature between 10°C and 40°C
const humidityValue = getRandomValue(30, 90); // Random humidity between 30% and 90%

// Set the generated values in the DOM
document.getElementById('ph-value').textContent = phValue;
document.getElementById('ec-value').textContent = ecValue;
document.getElementById('water-level-value').textContent = waterLevelValue;
document.getElementById('water-temp-value').textContent = waterTempValue;
document.getElementById('air-temp-value').textContent = airTempValue;
document.getElementById('humidity-value').textContent = humidityValue;

// Update the sensor statuses based on the generated values
setStatus('ph-status', parseFloat(phValue), { min: 5.5, max: 6.5 }, { min: 5.0, max: 7.0 });
setStatus('ec-status', parseFloat(ecValue), { min: 1.2, max: 2.0 }, { min: 1.0, max: 2.5 });
setStatus('water-level-status', parseFloat(waterLevelValue), { min: 50, max: 100 }, { min: 30, max: 49 });
setStatus('water-temp-status', parseFloat(waterTempValue), { min: 18, max: 24 }, { min: 15, max: 28 });
setStatus('air-temp-status', parseFloat(airTempValue), { min: 20, max: 30 }, { min: 15, max: 35 });
setStatus('humidity-status', parseFloat(humidityValue), { min: 50, max: 70 }, { min: 40, max: 80 });
}

// Run status update every 2 seconds
setInterval(updateSensorStatuses, 2000);


    setInterval(updateCharts, 2000);
});
document.querySelectorAll('.card-header .fa-info-circle').forEach(icon => {
icon.addEventListener('click', () => {
alert('Info clicked!'); // Replace with your logic
});
});

document.querySelectorAll('.card-header .fa-cog').forEach(icon => {
icon.addEventListener('click', () => {
alert('Manage clicked!'); // Replace with your logic
});
});

