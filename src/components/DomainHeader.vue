<script setup>
const props = defineProps({
  domain: { type: String, required: true },
  verbose: { type: Boolean, required: true },
});

function onToggle(e) {
  const checked = e.target.checked;
  emit("toggle-verbose", checked);
}
</script>

<template>
  <div class="domain-header">
    <h2>{{ domain }}</h2>

    <div class="toggle-container">
      <label class="toggle">
        <input
          type="checkbox"
          :checked="verbose"
          @change="$emit('toggle-verbose', $event.target.checked)"
          aria-label="Toggle verbose view"
        />
        <span class="slider"></span>
      </label>
      <span class="label-text">Verbose view</span>
    </div>
  </div>
</template>

<style scoped>
.domain-header {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

h2 {
  margin: 0;
  font-size: 1.5rem;
  color: #2c3e50;
  word-break: break-word;
}

.toggle-container {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
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
  font-size: 0.85rem;
  font-weight: 500;
  opacity: 0.7;
}
</style>
