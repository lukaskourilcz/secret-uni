<script setup>
import { ref } from "vue";

const props = defineProps({
  authInfo: { type: String, required: true },
});

const showSecret = ref(false);
const authInfo = 'secretPassword875!//'

</script>

<template>
  <div class="auth-info card">
    <span>AuthInfo:</span>
    <button @click="showSecret = !showSecret">Show</button>
    <span v-if="showSecret" class="secret">{{ authInfo }}</span>
  </div>
</template>

<style scoped>
.auth-info {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.secret {
  font-weight: bold;
  color: darkred;
  opacity: .5;
}
</style>
