<script setup>
const props = defineProps({
  nsset: { type: Object, required: true },
});
</script>

<template>
  <div class="nsset card">
    <div class="header">NSSet</div>

    <div class="content">
      <div class="row">
        <div class="label"><strong>Handle:</strong></div>
        <div>
          <a href="#">{{ nsset.handle }}</a>
        </div>
      </div>

      <div class="row">
        <div class="label"><strong>Registrar:</strong></div>
        <div>
          <a href="#">{{ nsset.registrar }}</a>
        </div>
      </div>

      <div class="row dns-row">
        <div class="label dns"><strong>DNS Records:</strong></div>
        <div class="value">
          <div v-for="(dns, index) in nsset.dns" :key="index">
            {{ dns.name }} — {{ dns.ip_address }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

---

<style scoped>
.nsset {
  padding: 0;
}

.header {
  background: #f1f1f1;
  padding: 0.5rem 1rem;
  font-weight: bold;
  border-bottom: 1px solid #ddd;
}

.content {
  padding: 0 1rem 0.5rem 1rem;
}

.row {
  display: flex;
  gap: 1rem;
  margin-bottom: 0.25rem;
  align-items: flex-start;
}

.label {
  display: flex;
  min-width: 120px;
  font-weight: bold;
}

.label.dns {
  align-items: center;
}

.row.dns-row {
  align-items: center;
}

a {
  color: #3498db;
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
</style>
