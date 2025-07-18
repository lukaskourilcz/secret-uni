<script setup>
const props = defineProps({
  contacts: { type: Array, required: true },
  verbose: { type: Boolean, required: true },
});
</script>

<template>
  <div class="admin-contacts card">
    <div class="header">Administrative Contacts</div>

    <div class="content">
      <div
        v-for="(contact, index) in contacts"
        :key="index"
        class="row"
      >
        <div class="label">
          <strong>{{ contact.name }}:</strong>
        </div>
        <div class="value">
          {{ contact.handle }}

          <template v-if="verbose">
            <div v-if="contact.publish.organization">
              <strong>Organization:</strong> {{ contact.organization }}
            </div>
            <div v-if="contact.publish.name">
              <strong>Name:</strong> {{ contact.name }}
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

---

<style scoped>
.admin-contacts {
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
}

.label {
  min-width: 120px;
  font-weight: bold;
}

.value {
  flex: 1;
}
</style>
