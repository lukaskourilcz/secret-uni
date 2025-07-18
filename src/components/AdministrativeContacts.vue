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
          v-for="(contact, index) in contacts"
          :key="index"
          class="contact-card"
        >
          <div class="row">
            <div class="label">Handle:</div>
            <div class="value">
              <a href="#">{{ contact.handle }}</a>
            </div>
          </div>

          <div class="row">
            <div class="label">
              <span v-if="contact.publish.organization"
                ><font-awesome-icon class="icon" :icon="['fas', 'eye']"
              /></span>
              <span v-else
                ><font-awesome-icon
                  class="icon-red"
                  :icon="['fas', 'eye-slash']"
              /></span>
              Organization:
            </div>
            <div class="value">{{ contact.organization }}</div>
          </div>

          <div class="row">
            <div class="label">
              <span v-if="contact.publish.name"
                ><font-awesome-icon class="icon" :icon="['fas', 'eye']"
              /></span>
              <span v-else
                ><font-awesome-icon
                  class="icon-red"
                  :icon="['fas', 'eye-slash']"
              /></span>
              Name:
            </div>
            <div class="value">{{ contact.name }}</div>
          </div>
        </div>
      </template>

      <template v-else>
        <div v-for="(contact, index) in contacts" :key="index" class="row">
          <div class="label">{{ contact.name }}:</div>
          <div class="value">
            <a href="#">{{ contact.handle }}</a>
          </div>
        </div>
      </template>
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
