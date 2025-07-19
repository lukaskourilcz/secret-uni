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
      <template v-if="verbose">
        <div
          v-for="contact in contacts"
          :key="contact.handle"
          class="contact-card"
        >
          <div class="row">
            <div class="label">Handle:</div>
            <div class="value">
              <a href="javascript:void(0)">{{ contact.handle }}</a>
            </div>
          </div>

          <div
            v-for="field in ['organization', 'name']"
            :key="field"
            class="row"
          >
            <div class="label">
              <font-awesome-icon
                :class="contact.publish[field] ? 'icon' : 'icon-red'"
                :icon="contact.publish[field] ? ['fas', 'eye'] : ['fas', 'eye-slash']"
              />
              {{ field.charAt(0).toUpperCase() + field.slice(1) }}:
            </div>
            <div class="value">
              {{ contact[field] || '—' }}
            </div>
          </div>
        </div>
      </template>

      <template v-else>
        <div
          v-for="contact in contacts"
          :key="contact.handle"
          class="row"
        >
          <div class="label">{{ contact.name }}:</div>
          <div class="value">
            <a href="javascript:void(0)">{{ contact.handle }}</a>
          </div>
        </div>
      </template>
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
  font-weight: 500;
  border-bottom: 1px solid #ddd;
}

.content {
  padding: 0 1rem 0.5rem 1rem;
}

.contact-card {
  margin-bottom: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  background: #fff;
  padding: 0.5rem 1rem;
}

.row {
  display: flex;
  gap: 1rem;
  margin-bottom: 0.25rem;
  align-items: flex-start;
}

.icon {
  margin-right: 0.2rem;
  color: rgb(2, 190, 2);
}

.icon-red {
  margin-right: 0.2rem;
  color: red;
}

.label {
  min-width: 150px;
  font-weight: 500;
}

.value {
  flex: 1;
}

a {
  color: #3498db;
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
</style>
