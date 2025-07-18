<script setup>
const props = defineProps({
  keyset: { type: Object, required: true },
});
</script>

<template>
  <div class="keyset card">
    <div class="header">Key Set</div>

    <div class="content">
      <div class="row">
        <div class="label"><strong>Handle:</strong></div>
        <div class="value">{{ keyset.handle }}</div>
      </div>

      <div class="row">
        <div class="label"><strong>Registrar:</strong></div>
        <div class="value">{{ keyset.registrar }}</div>
      </div>

      <div class="row dns-row">
        <div class="label dns"><strong>DNS Keys:</strong></div>
        <div class="value">
          <div
            v-for="(key, index) in keyset.dns_keys"
            :key="index"
            class="dns-item"
          >
            {{ key }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

---

<style scoped>
.keyset {
  margin-top: 0.5rem;
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
  align-items: center;
  min-width: 120px;
  font-weight: bold;
}

.dns {
  display: flex;
}

.row.dns-row {
  align-items: center; /* vertical center the DNS label */
}

.value {
  flex: 1;
}

.dns-item {
  padding: 0.25rem 0;
  word-break: break-all;
}
</style>
