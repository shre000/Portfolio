<script setup>
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
import Footer  from './components/Footer.vue'

</script>
<template>
  
  <div id="app">
    <div class="page">
    <div class="content">
      <Navbar />
      <router-view />
    </div>
    <Footer />
  </div>
   
 
   
  </div>
</template>

<style scoped>
.page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content {
  flex: 1;
}
</style>
