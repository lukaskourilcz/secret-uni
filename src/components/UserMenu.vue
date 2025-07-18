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
    <span class="username">{{ username }}</span>
    <span class="icon">
      <font-awesome-icon :icon="['fas', 'circle-chevron-down']" />
    </span>

    <div v-if="menuOpen" class="menu">
      <div class="menu-header">
        <div class="avatar">
          <font-awesome-icon :icon="['far', 'user']" />
        </div>
        <div class="info">
          <div class="name">{{ username }}</div>
          <div class="role">Admin</div>
        </div>
      </div>

      <div class="menu-divider"></div>

      <div class="menu-item">
        <span class="icon">
          <font-awesome-icon :icon="['fas', 'right-from-bracket']" />
        </span>
        <span>Logout</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.user {
  position: relative;
  cursor: pointer;
  font-weight: 500;
  display: flex;
  align-items: center;
  color: #fff;
}

.username {
  font-size: 0.9rem;
  color: #fff;
}

.icon {
  color: #fff;
  opacity: 0.8;
  margin-left: 0.3rem;
}

.menu {
  position: absolute;
  right: 0;
  top: calc(100% + 4px);
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 6px;
  width: 220px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  z-index: 1000;
  overflow: hidden;
}

.menu-header {
  display: flex;
  align-items: center;
  padding: 0.75rem;
  background: #f9f9f9;
}

.avatar {
  font-size: 1.2rem;
  margin-right: 0.6rem;
  color: #666;
}

.info {
  display: flex;
  flex-direction: column;
}

.name {
  font-weight: 600;
  color: #333;
}

.role {
  font-size: 0.75rem;
  color: #999;
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
  color: #333;
  font-weight: 500;
}

.menu-item:hover {
  background-color: #f5f5f5;
}

.menu-item .icon {
  color: #888;
}
</style>
