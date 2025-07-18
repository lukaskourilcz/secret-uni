<script setup>
const props = defineProps({
  owner: { type: Object, required: true },
});
</script>

<template>
  <div class="owner card">
    <div class="header">Owner</div>

    <div class="content">
      <div class="row">
        <div class="label">
          <font-awesome-icon class="icon" :icon="['fas', 'eye']" />
          Handle:
        </div>
        <div class="value">
          <a href="#">{{ owner.handle }}</a>
        </div>
      </div>

      <div class="row">
        <div class="label">
          <font-awesome-icon class="icon" :icon="['fas', 'eye']" />
          Organization:
        </div>
        <div class="value">{{ owner.organization }}</div>
      </div>

      <div class="row">
        <div class="label">Name:</div>
        <div class="value">{{ owner.name }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.owner {
  padding: 0;
}

.header {
  background: #f1f1f1;
  padding: 0.5rem 1rem;
  border-bottom: 1px solid #ddd;
}

.content {
  padding: 0.5rem 1rem;
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
  gap: 0.25rem;
  min-width: 150px;
  font-weight: 500;
}

.value {
  flex: 1;
}

.icon {
  margin-right: 0.2rem;
  color: rgb(2, 190, 2);
}

a {
  color: #3498db;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>
