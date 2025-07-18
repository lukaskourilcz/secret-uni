<template>
  <div class="flags card">
    <h2>State Flags</h2>
    <ul>
      <li
        v-for="flag in filteredFlags"
        :key="flag.name"
        :class="{ active: flag.active, inactive: !flag.active }"
      >
        <span class="icon">
          <span v-if="flag.active">✅</span>
          <span v-else>❌</span>
        </span>
        <span>{{ flag.description }}</span>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  flags: { type: Array, required: true },
  verbose: { type: Boolean, required: true }
})

const filteredFlags = computed(() => {
  if (props.verbose) {
    return props.flags
  } else {
    return props.flags.filter(flag => flag.active)
  }
})
</script>

<style scoped>
.flags {
  margin-top: 0.5rem;
}
ul {
  list-style: none;
  padding: 0;
}
li {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.25rem 0;
}
.active {
  color: var(--color-success);
}
.inactive {
  color: var(--color-danger);
}
.icon {
  width: 1.5rem;
  text-align: center;
}
</style>
