<template>
  <div id="app">
    <button id="theme-toggle" class="btn btn-outline-secondary" @click="toggleTheme">
      <i id="theme-icon" class="fas fa-moon"></i>
    </button>
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      isDarkMode: false,
    };
  },
  methods: {
    toggleTheme() {
      this.isDarkMode =!this.isDarkMode;
      localStorage.setItem('darkMode', this.isDarkMode);
      document.body.classList.toggle('dark-mode', this.isDarkMode);
    }
  },
  mounted() {
    this.isDarkMode = localStorage.getItem('darkMode') === 'true';
    document.body.classList.toggle('dark-mode', this.isDarkMode);
  }
};
</script>