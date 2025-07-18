<script setup>
const props = defineProps({
  flags: { type: Array, required: true }
})
</script>

<template>
  <div class="flags">
    <h2>State Flags</h2>
    <ul>
      <li
        v-for="flag in flags"
        :key="flag.name"
        :class="{ active: flag.active, inactive: !flag.active }"
      >
        <span>{{ flag.description }}</span>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.flags {
  margin-top: 2rem;
}
ul {
  list-style: none;
  padding: 0;
}
li {
  padding: 0.25rem 0;
}
.active {
  color: green;
}
.inactive {
  color: red;
}
</style>
