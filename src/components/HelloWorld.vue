<script setup>
import { ref } from 'vue';
const code = "Hello, I'm Shreya"
const typeValue = ref('');

const typeEffect = () => {
  if (typeValue.value.length < code.length) {
    typeValue.value += code.charAt(typeValue.value.length);
    setTimeout(typeEffect, 100);
  }
}
typeEffect()

const scrollToSection = () => {
  const section = document.getElementsById('social-link');
  section.scrollIntoView({ behavior: 'smooth' });
}
</script>

<template>
  <div class="home">
    <div class="intro">
      <img src="@/assets/image.png" alt="Shreya's Image" class="profile-image">
      <h1 class="typingEffect">{{ typeValue }}</h1>
      <p class="typing">.Net Developer</p>

      <div class="getintouch">
        <button @click="scrollToSection">
          <font-awesome-icon icon="phone" />Get in Touch</button>
      </div>
    </div>

    <!-- Contact Section -->
    <div class="social-links" id="social-link">
      <a href="https://www.linkedin.com/in/shreya-pandey-8bb78a14a/" target="_blank">

        <button class="social-link linkedin"> <font-awesome-icon :icon="['fab', 'linkedin-in']" />
          LinkedIn</button>
      </a>
      <a href="https://github.com/shre000" target="_blank">
        <button class="social-link github">
          <font-awesome-icon :icon="['fab', 'github']" /> GitHub</button>
      </a>
      <a href="https://www.linkedin.com/in/shreya-pandey-8bb78a14a/" target="_blank">
        <button class="social-link instagram"><font-awesome-icon :icon="['fab', 'square-instagram']" />
          Instagram</button>
      </a>
    </div>
  </div>
</template>

<style scoped>
.home {
  background: linear-gradient(to bottom right, #4c3a3a, #333333);
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.intro {
  text-align: center;
  margin-bottom: 50px;
}

.profile-image {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 20px;
}

h1,
p {
  color: white;
  font-weight: bold;
  margin: 0;
  font-size: 3rem;
}

.typingEffect {
  padding-right: 5px;
  border-right: 2px solid white;
  white-space: nowrap;
  animation: blink 1s linear infinite;
}

@keyframes blink {

  0%,
  45% {
    border-color: transparent;
  }

  50%,
  100% {
    border-color: white;
  }
}

.getintouch {
  margin-top: 16px;
}

.getintouch button {
  font-size: 1.5rem;
  background-color: aqua;
  border: none;
  border-radius: 10px;
  padding: 20px 40px;
  font-weight: bold;
  transition: background-color 0.3s;
}

.getintouch button:hover {
  background-color: rgb(88, 185, 218);
}

.social-links {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 30px;
  gap: 2rem;
}

.social-link {
  margin-top: 10px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 1.2rem;
  color: white;
  background: linear-gradient(to right, #4CAF50, #45a049);
  cursor: pointer;
  transition: transform 0.3s, box-shadow 0.3s;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.social-link:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.2);
}

.linkedin {
  background: linear-gradient(to right, #0e76a8, #00a0dc);
}

.github {
  background: linear-gradient(to right, #24292e, #6e5494);
}

.instagram {
  background: linear-gradient(to right, #8a3ab9, #bc2a8d);
}
</style>