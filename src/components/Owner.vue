<template>
  <div class="owner card">
    <div class="header">Owner</div>

    <div class="content">
      <div class="row"><span><font-awesome-icon class="icon" :icon="['fas', 'eye']" /></span><strong>Handle:</strong><a
            href="#"
          > {{ owner.handle }}</a></div>
      <div class="row">
        <span><font-awesome-icon class="icon" :icon="['fas', 'eye']" /></span><strong>Organization:</strong> {{ owner.organization }}
      </div>
      <div class="row"><strong>Name:</strong> {{ owner.name }}</div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  owner: { type: Object, required: true },
});
</script>

<style scoped>
.owner {
  padding: 0;
}

.header {
  background: #f1f1f1;
  padding: 0.5rem;
  font-weight: bold;
  border-bottom: 1px solid #ddd;
  padding-left: 1rem;
}

.content {
  padding: 0 0.5rem 0.5rem 1rem;
}

.icon {
  margin-right: 0.3rem;
  color: rgb(2, 190, 2)
}

.row {
  margin-bottom: 0.25rem;
}

a {
  margin-left: 0.2rem;
  color: #3498db;
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
</style>
