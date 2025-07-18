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
      <div class="user">
        <span @click="menuOpen = !menuOpen" class="username">Jan Musílek ⌄</span>
        <div v-if="menuOpen" class="menu">
          <ul>
            <li>Profile</li>
            <li>Settings</li>
            <li>Log out</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  domain: { type: String, required: true },
  verbose: { type: Boolean, required: true }
})

const menuOpen = ref(false)
</script>

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
.user {
  position: relative;
  cursor: pointer;
}
.menu {
  position: absolute;
  right: 0;
  top: 100%;
  background: white;
  border: 1px solid #ccc;
  padding: 0.5rem;
}
.menu ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.menu li {
  padding: 0.25rem 0;
}
.username {
  font-weight: bold;
}
</style>
