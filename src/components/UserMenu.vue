<script setup>
import { ref } from 'vue'

const props = defineProps({
  username: { type: String, required: true }
})

const menuOpen = ref(false)

function toggleMenu() {
  menuOpen.value = !menuOpen.value
}
</script>

<template>
  <div class="user" @click="toggleMenu">
    <span class="username">{{ username }} ⌄</span>
    <div v-if="menuOpen" class="menu">
      <ul>
        <li>Profile</li>
        <li>Settings</li>
        <li>Log out</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.user {
  position: relative;
  cursor: pointer;
  font-weight: bold;
}
.menu {
  position: absolute;
  right: 0;
  top: 100%;
  background: white;
  border: 1px solid #ccc;
  padding: 0.5rem;
  z-index: 10;
}
.menu ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.menu li {
  padding: 0.25rem 0;
}
</style>
