<script setup>
const props = defineProps({
  keyset: { type: Object, required: true },
});
</script>

<template>
  <div class="keyset card">
    <div class="header">KeySet</div>

    <div class="content">
      <div class="row">
        <div class="label">Handle:</div>
        <div class="value">
          <a href="javascript:void(0)">{{ keyset.handle }}</a>
        </div>
      </div>

      <div class="row">
        <div class="label">Registrar:</div>
        <div class="value">
          <a href="javascript:void(0)">{{ keyset.registrar }}</a>
        </div>
      </div>

      <div class="row dns-row">
        <div class="label dns">DNS Keys:</div>
        <div class="value">
          <div
            v-if="keyset.dns_keys?.length"
            v-for="key in keyset.dns_keys"
            :key="key"
            class="dns-item"
          >
            {{ key }}
          </div>
          <div v-else class="dns-item">—</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.keyset {
  margin-top: 0.5rem;
  padding: 0;
}

.header {
  background: #f1f1f1;
  padding: 0.5rem 1rem;
  border-bottom: 1px solid #ddd;
  font-weight: 500;
}

.content {
  padding: 0 1rem 0.5rem 1rem;
}

.row {
  display: flex;
  gap: 1rem;
  margin-bottom: 0.25rem;
  align-items: flex-start;
  flex-wrap: wrap;
}

.label {
  display: flex;
  align-items: center;
  min-width: 120px;
  font-weight: 500;
}

.dns {
  display: flex;
}

.row.dns-row {
  align-items: flex-start;
}

.value {
  flex: 1;
  word-break: break-word;
}

.dns-item {
  padding: 0.25rem 0;
}

a {
  color: #3498db;
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
</style>
