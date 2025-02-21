import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from '../components/Dashboard.vue';
import ActuatorControls from '../components/ActuatorControls.vue';
import SensorReadings from '../components/SensorReadings.vue';
import SensorManagement from '../components/SensorManagement.vue';
import ScheduleManagement from '../components/ScheduleManagement.vue';

const routes = [
  { path: '/', component: Dashboard },
  { path: '/actuators', component: ActuatorControls },
  { path: '/sensors', component: SensorReadings },
  { path: '/sensor-management', component: SensorManagement },
  { path: '/schedule-management', component: ScheduleManagement },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;