<script setup>
import { ref, onMounted, onUnmounted,computed } from 'vue'

const x = ref(0)
const y = ref(0)

function update(event) {
  x.value = event.pageX
  y.value = event.pageY
}

onMounted(() => window.addEventListener('mousemove', update))
onUnmounted(() => window.removeEventListener('mousemove', update))

const now = computed(() => Date.now())
function noww (){
    return Date.now();
}
</script>

<template>Mouse position is at: {{ x }}, {{ y }}
<br>Current time is: {{ now }}
<br>Current time is: {{ noww ()}}

</template>

<style lang="scss" scoped>

</style>