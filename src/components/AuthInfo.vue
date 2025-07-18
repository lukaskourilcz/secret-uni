<template>
  <div>
    <button @click="showSecret = !showSecret">Show</button>
    <span v-if="showSecret">{{ authInfo }}</span>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps(['authInfo'])
const showSecret = ref(false)
</script>
