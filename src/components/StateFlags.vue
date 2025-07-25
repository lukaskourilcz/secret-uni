<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";

const props = defineProps({
  flags: { type: Array, required: true },
  verbose: { type: Boolean, required: true },
});

const filteredFlags = computed(() => {
  return props.verbose
    ? props.flags
    : props.flags.filter((flag) => flag.active);
});

const screenWidth = ref(window.innerWidth);

function onResize() {
  screenWidth.value = window.innerWidth;
}

onMounted(() => {
  window.addEventListener("resize", onResize);
});
onUnmounted(() => {
  window.removeEventListener("resize", onResize);
});

const columns = computed(() => {
  const col1Count = screenWidth.value < 480 ? 12 : 10;
  const col2Start = col1Count;

  return [
    filteredFlags.value.slice(0, col1Count),
    filteredFlags.value.slice(col2Start, 20),
  ];
});
</script>

<template>
  <div class="stateflags card">
    <div class="header">State Flags:</div>

    <div class="flags-container">
      <div
        class="column"
        v-for="(columnFlags, colIdx) in columns"
        :key="colIdx"
      >
        <div
          v-for="flag in columnFlags"
          :key="flag.description"
          class="flag-row"
        >
          <span class="icon" :class="flag.active ? 'active' : 'inactive'">
            {{ flag.active ? "✅" : "❌" }}
          </span>
          <span :class="flag.active ? 'text-active' : 'text-inactive'">
            {{ flag.description }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.stateflags {
  padding: 0;
}

.header {
  background: #f1f1f1;
  padding: 0.5rem;
  font-weight: bold;
  border-bottom: 1px solid #ddd;
  padding-left: 1rem;
}

.flags-container {
  display: flex;
  gap: 2rem;
  padding: 0.8rem 0.5rem;
}

.column {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding-left: 0.5rem;
}

.flag-row {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.8rem;
  padding: 0.2rem 1rem;
}

.icon {
  font-size: 1rem;
}

.text-active {
  color: green;
  padding-left: 0.2rem;
}

.text-inactive {
  color: red;
  padding-left: 0.2rem;
}

@media (max-width: 480px) {
  .flag-row {
    font-size: 0.7rem;
  }
  .icon {
    font-size: 0.7rem;
  }
}

@media (max-width: 400px) {
  .flag-row {
    font-size: 0.65rem;
  }
  .icon {
    font-size: 0.65rem;
  }
}
</style>
