<template>
  <div class="events card">
    <div class="header">Events</div>

    <div class="table">
      <div
        v-for="({ name, event }, index) in orderedEvents"
        :key="index"
        class="table-row"
      >
        <div class="label">{{ name }}</div>
        <div class="value">
          {{ event?.timestamp ? formatDate(event.timestamp) : "—" }}
        </div>
        <div class="value">
          <template v-if="event?.registrar_handle">
            <a href="#" class="registrar-link">{{ event.registrar_handle }}</a>
          </template>
          <template v-else>
            —
          </template>
        </div>
      </div>
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
  background: #f1f4f8;
  padding: 0.5rem 1rem;
  font-weight: bold;
  font-size: 1rem;
  border-bottom: 1px solid #ddd;
}

.table {
  display: flex;
  flex-direction: column;
}

.table-row {
  display: grid;
  grid-template-columns: 30% 40% 30%;
  padding: 0.5rem 1rem;
  border-bottom: 1px solid #f1f1f1;
  align-items: center;
  font-size: 0.85rem;
}

.label {
  font-weight: 600;
  color: #444;
}

.value {
  color: #222;
  white-space: nowrap;
  overflow-wrap: anywhere;
}

.registrar-link {
  color: #3498db;
  text-decoration: none;
  font-weight: 500;
}

.registrar-link:hover {
  text-decoration: underline;
}
</style>
