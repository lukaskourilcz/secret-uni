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
        <div class="label">Handle:</div>
        <div class="value">
          <a href="#">{{ nsset.handle }}</a>
        </div>
      </div>

      <div class="row">
        <div class="label">Registrar:</div>
        <div class="value">
          <a href="#">{{ nsset.registrar }}</a>
        </div>
      </div>

      <div class="row dns-row">
        <div class="label dns">DNS Records:</div>
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
  border-bottom: 1px solid #ddd;
}

.content {
  padding: 0 1rem 0.5rem 1rem;
}

.value {
  flex: 1;
}

.row {
  display: flex;
  gap: 1rem;
  margin-bottom: 0.25rem;
  align-items: center;
}

.label {
  display: flex;
  align-items: center;
  min-width: 120px;
  font-weight: 500;
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
