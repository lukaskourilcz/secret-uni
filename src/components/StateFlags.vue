<script setup>
import { computed } from "vue";

const props = defineProps({
  flags: { type: Array, required: true },
  verbose: { type: Boolean, required: true },
});

const filteredFlags = computed(() => {
  if (props.verbose) {
    return props.flags;
  } else {
    return props.flags.filter((flag) => flag.active);
  }
});
</script>

<template>
  <div class="flags card">
    <h2>State Flags</h2>
    <ul>
      <li
        v-for="flag in filteredFlags"
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
