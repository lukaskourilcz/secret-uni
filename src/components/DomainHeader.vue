<script setup>
import UserMenu from "./UserMenu.vue";

const props = defineProps({
  domain: { type: String, required: true },
  verbose: { type: Boolean, required: true },
});
</script>

<template>
  <div class="header">
    <h1>{{ domain }}</h1>
    <div class="controls">
      <label class="toggle">
        <input
          type="checkbox"
          :checked="verbose"
          @change="$emit('toggle-verbose', $event.target.checked)"
        />
        <span class="slider"></span>
      </label>
      <span class="label-text">Verbose view</span>
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

.toggle {
  position: relative;
  display: inline-block;
  width: 40px;
  height: 20px;
}

.toggle input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: 0.4s;
  border-radius: 20px;
}

.slider:before {
  position: absolute;
  content: "";
  height: 14px;
  width: 14px;
  left: 3px;
  bottom: 3px;
  background-color: white;
  transition: 0.4s;
  border-radius: 50%;
}

.toggle input:checked + .slider {
  background-color: #3498db;
}

.toggle input:checked + .slider:before {
  transform: translateX(20px);
}

.label-text {
  font-size: 0.9rem;
}
</style>
