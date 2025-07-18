<script setup>
import { ref } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const props = defineProps({
  username: { type: String, required: true },
});

const menuOpen = ref(false);

function toggleMenu() {
  menuOpen.value = !menuOpen.value;
}
</script>

<template>
  <div class="user" @click="toggleMenu">
    <span class="username">{{ username }} ⌄</span>

    <div v-if="menuOpen" class="menu">
      <div class="menu-header">
        <div class="avatar">
          <font-awesome-icon :icon="['far', 'user']" />
        </div>
        <div>
          <div class="name">{{ username }}</div>
          <div class="role">admin</div>
        </div>
      </div>

      <div class="menu-divider"></div>

      <div class="menu-item">
        <span class="icon"><font-awesome-icon :icon="['fas', 'right-from-bracket']" /></span>
        Logout
      </div>
    </div>
  </div>
</template>

<style scoped>
.user {
  position: relative;
  cursor: pointer;
  font-weight: bold;
}

.username {
  color: black;
}

.menu {
  position: absolute;
  right: 0;
  top: 100%;
  background: white;
  border: 1px solid #ddd;
  border-radius: 4px;
  width: 220px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  margin-top: 4px;
  z-index: 100;
}

.menu-header {
  display: flex;
  align-items: center;
  padding: 0.75rem;
}

.avatar {
  font-size: 1rem;
  margin-right: 0.5rem;
  padding: 0.3rem;
}

.name {
  font-weight: 600;
}

.role {
  font-size: 0.7rem;
  color: #888;
}

.menu-divider {
  height: 1px;
  background: #eee;
  margin: 0;
}

.menu-item {
  padding: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  cursor: pointer;
}

.menu-item:hover {
  background-color: #f5f5f5;
}

.icon {
  font-size: 1rem;
}
</style>
