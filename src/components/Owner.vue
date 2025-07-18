<script setup>
const props = defineProps({
  owner: { type: Object, required: true }
})
</script>

<template>
  <div class="owner">
    <h2>Owner</h2>
    <p><strong>Handle:</strong> {{ owner.handle }}</p>
    <p><strong>Organization:</strong> {{ owner.organization }}</p>
    <p><strong>Name:</strong> {{ owner.name }}</p>
  </div>
</template>

<style scoped>
.owner {
  margin-top: 2rem;
}
</style>
