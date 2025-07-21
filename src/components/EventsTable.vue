<script setup>
import { computed } from "vue";

const props = defineProps({
  events: { type: Object, required: true },
});

const orderedEvents = computed(() =>
  [
    { name: "Create date", event: props.events?.registered },
    { name: "Update date", event: props.events?.updated },
    { name: "Transfer date", event: props.events?.transferred },
    { name: "Delete date", event: props.events?.unregistered },
  ].map((item) => ({
    ...item,
    formattedDate: formatDate(item.event?.timestamp),
    registrar: item.event?.registrar_handle || "—",
  }))
);

function formatDate(dateStr) {
  if (!dateStr) return "—";
  const date = new Date(dateStr);
  return isNaN(date)
    ? "—"
    : date.toLocaleString("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
}
</script>

<template>
  <div class="events card">
    <div class="header">Events</div>

    <div class="table">
      <div
        v-for="{ name, formattedDate, registrar } in orderedEvents"
        :key="name"
        class="table-row"
      >
        <div class="label">{{ name }}</div>
        <div class="value">{{ formattedDate }}</div>
        <div class="value">
          <span v-if="registrar !== '—'">
            <a class="registrar-link" href="javascript:void(0)">
              {{ registrar }}
            </a>
          </span>
          <span v-else>—</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.events {
  padding: 0;
}

.header {
  background: #f1f4f8;
  padding: 0.5rem 1rem;
  font-weight: 500;
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
  font-weight: 500;
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
  font-weight: 400;
}

.registrar-link:hover {
  text-decoration: underline;
}

@media (max-width: 900px) {
.registrar-link {
  margin-left: 1rem;
}
}

@media (max-width: 480px) {
  .table-row {
    font-size: 0.7rem;
    grid-template-columns: 1fr 1fr 1fr;
  }
}

@media (max-width: 400px) {
  .table-row {
    font-size: 0.6rem;
    grid-template-columns: 1fr 1fr 1fr;
  }
}
</style>
