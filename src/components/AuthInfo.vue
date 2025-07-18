<template>
  <div class="auth-info">
    <span>AuthInfo:</span>
    <button @click="showSecret = !showSecret">Show</button>
    <span v-if="showSecret" class="secret">{{ authInfo }}</span>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  authInfo: { type: String, required: true }
})

const showSecret = ref(false)
</script>

<style scoped>
.auth-info {
  margin-top: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.secret {
  font-weight: bold;
  color: darkred;
}
</style>
