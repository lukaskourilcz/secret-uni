<template>
  <div class="nsset">
    <h2>NS Set</h2>

    <p><strong>Handle:</strong> {{ nsset.handle }}</p>
    <p><strong>Registrar:</strong> {{ nsset.registrar }}</p>

    <h3>DNS Records</h3>
    <ul>
      <li v-for="(dns, index) in nsset.dns" :key="index">
        {{ dns.name }} — {{ dns.ip_address }}
      </li>
    </ul>
  </div>
</template>

<script setup>
const props = defineProps({
  nsset: { type: Object, required: true }
})
</script>

<style scoped>
.nsset {
  margin-top: 2rem;
}
ul {
  list-style: none;
  padding: 0;
}
li {
  padding: 0.25rem 0;
}
</style>
