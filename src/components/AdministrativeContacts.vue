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
        class="contact-card"
      >
        <div class="row"><strong>Handle:</strong> {{ contact.handle }}</div>

        <template v-if="verbose">
          <div class="row" v-if="contact.publish.organization">
            <strong>Organization:</strong> {{ contact.organization }}
          </div>
          <div class="row" v-if="contact.publish.name">
            <strong>Name:</strong> {{ contact.name }}
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

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

.contact-card {
  border: 1px solid #ddd;
  padding: 0.5rem;
  margin-bottom: 0.5rem;
  border-radius: 4px;
  background: #f9f9f9;
}

.row {
  margin-bottom: 0.25rem;
}
</style>
