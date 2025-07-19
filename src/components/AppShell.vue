<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import UserMenu from "./UserMenu.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const username = "Jan Musílek";
const sidebarVisible = ref(true);

const sidebarItems = [
  { icon: ["fas", "earth-americas"], label: "Registry", active: true },
];

function toggleSidebar() {
  sidebarVisible.value = !sidebarVisible.value;
}

function handleResize() {
  if (window.innerWidth < 1180) {
    sidebarVisible.value = false;
  } else {
    sidebarVisible.value = true;
  }
}

onMounted(() => {
  handleResize();
  window.addEventListener("resize", handleResize);
});

onUnmounted(() => {
  window.removeEventListener("resize", handleResize);
});
</script>

<template>
  <div class="app">
    <header class="topbar" role="banner">
      <div class="left">
        <font-awesome-icon
          :icon="['fas', 'bars']"
          class="burger"
          aria-label="Menu"
          @click="toggleSidebar"
        />
        <h1>Ferda</h1>
      </div>

      <div class="user">
        <UserMenu :username="username" />
      </div>
    </header>

    <div class="body">
      <aside
        class="sidebar"
        role="complementary"
        :class="{ hidden: !sidebarVisible }"
      >
        <div class="app-name">Applications</div>
        <ul>
          <li
            v-for="item in sidebarItems"
            :key="item.label"
            :class="{ active: item.active }"
          >
            <font-awesome-icon :icon="item.icon" class="icon" />
            {{ item.label }}
          </li>
        </ul>
      </aside>

      <main class="main" role="main">
        <slot />
      </main>
    </div>
  </div>
</template>

<style scoped>
.app {
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
}

.topbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #2196f3;
  color: #fff;
  padding: 0 1rem;
  height: 50px;
  flex-shrink: 0;
}

.topbar .left {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.burger {
  font-size: 1.2rem;
  margin-left: 0.5rem;
  cursor: pointer;
}

.topbar h1 {
  font-size: 1rem;
  margin: 0;
  margin-left: 1rem;
  color: white;
  font-weight: 500;
}

.body {
  display: flex;
  flex: 1;
  overflow: hidden;
}

.sidebar {
  width: 200px;
  background: #ffffff;
  border-right: 1px solid #ddd;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease-in-out;
}

.sidebar.hidden {
  display: none !important;
}

.app-name {
  padding: 1rem;
  font-weight: bold;
  color: #888;
  text-transform: uppercase;
  font-size: 0.75rem;
  border-bottom: 1px solid #ddd;
}

.sidebar ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.sidebar li {
  padding: 0.75rem 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.sidebar li.active {
  background: #ffc107;
  font-weight: bold;
}

.main {
  flex: 1;
  overflow-y: auto;
  padding: 1rem;
  background: #f9f9f9;
}

.user {
  display: flex;
  align-items: center;
  margin-right: 0.2rem;
}

.icon {
  font-size: 1rem;
}
</style>
