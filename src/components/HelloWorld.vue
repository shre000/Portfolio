<script setup>
import { ref} from 'vue';
const code = "Hello, I'm Shreya"
const typeValue = ref('');

const typeEffect = () => {
  if (typeValue.value.length < code.length) {
    typeValue.value += code.charAt(typeValue.value.length);
    setTimeout(typeEffect, 100);
  } 
}
typeEffect()
</script>

<template>
  <div class="home">
    <div class="intro">
      <img src="@/assets/logo.svg" alt="Shreya's Image" class="profile-image">
      <h1 class="typingEffect">{{ typeValue }}</h1>
      <p class="typing">.Net Developer</p>
    </div>
  </div>
</template>

<style scoped>
.home {
  background: linear-gradient(to bottom right, #4c3a3a, #333333);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.intro {
  text-align: center;
  margin-bottom: auto;
}

.profile-image {
  width: 150px; /* Adjust according to your preference */
  height: 150px; /* Adjust according to your preference */
  border-radius: 50%;
  margin-bottom: 20px;
}

h1, p {
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
  0%, 45% {
    border-color: transparent;
  }
  50%, 100% {
    border-color: white;
  }
}

</style>