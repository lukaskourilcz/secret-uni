<script setup>
const props = defineProps({
  events: { type: Object, required: true }
})

function formatDate(dateStr) {
  if (!dateStr) return '-'
  const date = new Date(dateStr)
  return date.toLocaleString()
}
</script>

<template>
  <div class="events card">
    <h2>Events</h2>
    <table>
      <thead>
        <tr>
          <th>Event</th>
          <th>Timestamp</th>
          <th>Registrar</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(event, name) in events" :key="name">
          <td>{{ name }}</td>
          <td v-if="event">{{ formatDate(event.timestamp) }}</td>
          <td v-else>-</td>
          <td v-if="event">{{ event.registrar_handle }}</td>
          <td v-else>-</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>


<style scoped>
.events {
  margin-top: 0.5rem;
}
table {
  width: 100%;
  border-collapse: collapse;
}
th, td {
  border: 1px solid #ccc;
  padding: 0.5rem;
  text-align: left;
}
</style>
