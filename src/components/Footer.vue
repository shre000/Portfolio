<script setup>

</script>

<template>
    <footer class="footer">
      <div class="footer-links">
        <router-link to="/about">About</router-link>
        <router-link to="/projects">Projects</router-link>
        <router-link to="/contact">Contact</router-link>
        <router-link to="/articles">Articles</router-link>
      </div>
      <div class="footer-info">
        <p>&copy; 2024 Created By Shreya. All rights reserved.</p>
      </div>
    </footer>
  </template>



<style scoped>
.footer {
  background-color: #333;
  color: white;
  padding: 20px 0;
  text-align: center;
}

.footer-links {
  margin-bottom: 10px;
}

.footer-links a {
  color: white;
  text-decoration: none;
  margin: 0 10px;
}

.footer-info p {
  margin: 0;
}
</style>