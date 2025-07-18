<template>
  <div class="header">
    <h1>{{ domain }}</h1>
    <label>
      <input
        type="checkbox"
        :checked="verbose"
        @change="$emit('toggle-verbose', $event.target.checked)"
      />
      Verbose view
    </label>
  </div>
</template>

<script setup>
const props = defineProps({
  domain: { type: String, required: true },
  verbose: { type: Boolean, required: true }
})
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  border-bottom: 1px solid #ddd;
  padding-bottom: 0.5rem;
}
</style>
