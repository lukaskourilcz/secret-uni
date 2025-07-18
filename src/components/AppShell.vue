<template>
  <div class="app">
    <aside class="sidebar">
      <div class="app-name">APPLICATIONS</div>
      <ul>
        <li class="active"><span>🗂</span> Registry</li>
      </ul>
    </aside>

    <div class="main">
      <header class="topbar">
        <h1>Ferda</h1>
        <div class="user">
          <UserMenu username="Jan Musílek" />
        </div>
      </header>

      <main class="content">
        <slot />
      </main>
    </div>
  </div>
</template>

<script setup>
import UserMenu from "./UserMenu.vue";
</script>

<style scoped>
.app {
  display: flex;
  height: 100vh;
  overflow: hidden;
}

.sidebar {
  width: 200px;
  background: #f7f7f7;
  border-right: 1px solid #ddd;
  display: flex;
  flex-direction: column;
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
}

.sidebar li.active {
  background: #ffc107;
  font-weight: bold;
}

.main {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
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

.topbar h1 {
  font-size: 1.2rem;
  margin: 0;
}

.user {
  display: flex;
  align-items: center;
}

.content {
  flex: 1;
  overflow-y: auto;
  padding: 1rem;
  background: #f9f9f9;
}
</style>
