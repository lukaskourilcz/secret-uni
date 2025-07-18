<script setup>
const props = defineProps({
  contacts: { type: Array, required: true }
})
</script>

<template>
  <div class="admin-contacts">
    <h2>Administrative Contacts</h2>

    <div
      v-for="(contact, index) in contacts"
      :key="index"
      class="contact-card"
    >
      <p><strong>Handle:</strong> {{ contact.handle }}</p>
      <p v-if="contact.publish.organization">
        <strong>Organization:</strong> {{ contact.organization }}
      </p>
      <p v-if="contact.publish.name">
        <strong>Name:</strong> {{ contact.name }}
      </p>
    </div>
  </div>
</template>

<style scoped>
.admin-contacts {
  margin-top: 2rem;
}
.contact-card {
  border: 1px solid #ddd;
  padding: 0.75rem;
  margin-bottom: 1rem;
  border-radius: 4px;
  background: #f9f9f9;
}
</style>
