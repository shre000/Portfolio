<script setup>
import { ref, computed } from 'vue';
const name = ref('');
const message = ref('');
const profession = ref('');

const formattedProfession = computed(() => {
  return profession.value === 'Developer' ? 'Developer' : 'Tester';
});
</script>

<template>
    <div class="form-container">
        <div class="form-content">
            <p class="form-label">Your Name:</p>
            <input v-model="name" placeholder="Your Name" class="form-input" />
            <p class="form-label">Email Address:</p>
            <input placeholder="Your Email Address" class="form-input" />
            <p class="form-label">Are You ? <span class="profession-label" v-if="profession">{{     formattedProfession }}</span> </p>
          
            <span class="radio-container">
                <input type="radio" name="prof" value="Developer" v-model="profession" class="radio-input"> Developer
                <input type="radio" name="prof" value="Tester" v-model="profession" class="radio-input"> Tester
            </span>
            <p class="form-label">Drop your Message:</p>
            <textarea v-model="message" placeholder="Leave A Message for me" class="form-textarea"></textarea>
        </div>
        <div class="button-container">
            <button class="submit-button">Submit Form</button>
        </div>
    </div>
</template>

<style scoped>
.form-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
}

.form-content {
  background-color: #f5f5f5;
  border-radius: 10px;
  box-shadow: 0 12px 20px rgba(0, 0, 0, 0.2);
  padding: 20px;
  margin-bottom: 20px;
  width: 400px;
}

.form-label {
  margin-bottom: 5px;
  font-weight: bold;
}

.form-input, .form-textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;
}

.radio-container {
  margin-bottom: 10px;
}

.radio-input {
  margin-right: 5px;
}

.profession-label {
  font-weight: bold;
  font-style: oblique;
}

.button-container {
  display: flex;
  justify-content: center;
}

.submit-button {
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin: 15px;
}

.submit-button:hover {
  background-color: #45a049;
}
</style>
