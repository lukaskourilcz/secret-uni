<template>
  <div class="events card">
    <div class="header">Events:</div>

    <div
      v-for="({ name, event }, index) in orderedEvents"
      :key="index"
      class="row"
    >
      <div class="cell label">{{ name }}:</div>
      <div class="cell date">
        {{
          event?.timestamp ? formatDate(event.timestamp) : "-------------------"
        }}
      </div>

      <template v-if="event?.registrar_handle">
        <div class="cell label">Registrar:</div>
        <div class="cell value">
          <a href="#" class="registrar-link">
            {{ event.registrar_handle }}
          </a>
        </div>
      </template>

      <template v-else>
        <div class="cell" />
        <div class="cell" />
      </template>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  events: { type: Object, required: true },
});

const orderedEvents = computed(() => [
  { name: "Create date", event: props.events?.registered },
  { name: "Update date", event: props.events?.updated },
  { name: "Transfer date", event: props.events?.transferred },
  { name: "Delete date", event: props.events?.unregistered },
]);

function formatDate(dateStr) {
  const date = new Date(dateStr);
  return date.toLocaleString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
}
</script>

<style scoped>
.events {
  padding: 0;
}

.header {
  background: #f1f1f1;
  padding: 0.5rem;
  font-weight: bold;
  border-bottom: 1px solid #ddd;
  padding-left: 1rem;
}

.row {
  display: grid;
  grid-template-columns: 15% 40% 15% 35%;
  gap: 0.25rem 0.5rem;
  padding: 0.5rem;
  border-bottom: 1px solid #eee;
  font-size: 0.75rem;
  align-items: center;
  width: 100%;
}

.cell.label {
  font-weight: bold;
  white-space: nowrap;
  justify-self: start;
  padding-left: 0.5rem;
}

.cell.value {
  color: #333;
  word-break: break-word;
  justify-self: start;
}

.cell.date {
  text-align: center;
  white-space: nowrap;
}

.registrar-link {
  color: #4a90e2;
  text-decoration: none;
}

.registrar-link:hover {
  text-decoration: underline;
}
</style>
