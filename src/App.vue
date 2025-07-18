<template>
  <div class="app">
    <DomainHeader
      v-if="domainData"
      :domain="domainData.fqdn"
      :verbose="verbose"
      @toggle-verbose="verbose = $event"
    />

    <div v-if="domainData" class="content">
      <AuthInfo :auth-info="domainData.authInfo" />
      <EventsTable :events="domainData.events" />
      <StateFlags :flags="domainData.state_flags.flags" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import DomainHeader from './components/DomainHeader.vue'
import AuthInfo from './components/AuthInfo.vue'
import EventsTable from './components/EventsTable.vue'
import StateFlags from './components/StateFlags.vue'

const domainData = ref(null)
const verbose = ref(false)

onMounted(async () => {
  const res = await fetch('/domain-detail.json')
  domainData.value = await res.json()
})
</script>

<style>
.app {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
}
.content {
  margin-top: 2rem;
}
</style>
