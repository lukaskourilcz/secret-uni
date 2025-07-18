<script setup>
import { ref, onMounted } from 'vue'

const domainData = ref(null)

onMounted(async () => {
  const res = await fetch('/domain-detail.json')
  domainData.value = await res.json()
})
</script>


<template v-if="domainData">

<div>
  <h1>Neviditelna univerzita</h1>
</div>

</template>