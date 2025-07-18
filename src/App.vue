<script setup>
import { ref, onMounted } from 'vue'
import DomainHeader from './components/DomainHeader.vue'
import AuthInfo from './components/AuthInfo.vue'

const domainData = ref(null)

onMounted(async () => {
  const res = await fetch('/domain-detail.json')
  domainData.value = await res.json()
})
</script>


<template v-if="domainData">

<div>
  <h1>Neviditelna univerzita</h1>
  <DomainHeader/>
  <AuthInfo />
</div>

</template>