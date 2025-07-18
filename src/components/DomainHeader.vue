<script setup>
import UserMenu from './UserMenu.vue'

const props = defineProps({
  domain: { type: String, required: true },
  verbose: { type: Boolean, required: true }
})
</script>

<template>
  <div class="header">
    <h1>{{ domain }}</h1>
    <div class="controls">
      <label>
        <input
          type="checkbox"
          :checked="verbose"
          @change="$emit('toggle-verbose', $event.target.checked)"
        />
        Verbose view
      </label>
      <UserMenu username="Jan Musílek" />
    </div>
  </div>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  border-bottom: 1px solid #ddd;
  padding-bottom: 0.5rem;
}
.controls {
  display: flex;
  align-items: center;
  gap: 1rem;
}
</style>
