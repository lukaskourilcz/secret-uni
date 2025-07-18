<script setup>
import { ref, onMounted } from "vue";
import DomainHeader from "./components/DomainHeader.vue";
import AuthInfo from "./components/AuthInfo.vue";
import EventsTable from "./components/EventsTable.vue";
import StateFlags from "./components/StateFlags.vue";
import Owner from "./components/Owner.vue";
import AdministrativeContacts from "./components/AdministrativeContacts.vue";
import NSSet from "./components/NSSet.vue";
import KeySet from "./components/KeySet.vue";

const domainData = ref(null);
const verbose = ref(false);

onMounted(async () => {
  const res = await fetch("/domain-detail.json");
  domainData.value = await res.json();
});
</script>

<template>
  <div class="app">
    <DomainHeader
      v-if="domainData"
      :domain="domainData.fqdn"
      :verbose="verbose"
      @toggle-verbose="verbose = $event"
    />

    <div v-if="domainData" class="content">
      <div class="main">
        <div class="left">
          <AuthInfo :auth-info="domainData.authInfo" />
          <EventsTable :events="domainData.events" />
          <StateFlags :flags="domainData.state_flags.flags" />
        </div>
        <div class="right">
          <Owner :owner="domainData.owner" />
          <AdministrativeContacts
            :contacts="domainData.administrative_contacts"
          />
          <NSSet :nsset="domainData.nsset" />
          <KeySet :keyset="domainData.keyset" />
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.app {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
}
.content {
  margin-top: 2rem;
}
.main {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
}
.left,
.right {
  flex: 1 1 300px;
}
</style>
