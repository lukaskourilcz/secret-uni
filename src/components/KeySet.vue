<template>
  <div class="keyset">
    <h2>Key Set</h2>

    <p><strong>Handle:</strong> {{ keyset.handle }}</p>
    <p><strong>Registrar:</strong> {{ keyset.registrar }}</p>

    <h3>DNS Keys</h3>
    <ul>
      <li v-for="(key, index) in keyset.dns_keys" :key="index">
        {{ key }}
      </li>
    </ul>
  </div>
</template>

<script setup>
const props = defineProps({
  keyset: { type: Object, required: true }
})
</script>

<style scoped>
.keyset {
  margin-top: 2rem;
}
ul {
  list-style: none;
  padding: 0;
}
li {
  padding: 0.25rem 0;
  word-break: break-all;
}
</style>
