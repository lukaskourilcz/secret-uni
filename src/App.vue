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
          <StateFlags
            :flags="domainData.state_flags.flags"
            :verbose="verbose"
          />
        </div>
        <div class="right">
          <Owner :owner="domainData.owner" />
          <AdministrativeContacts
            :contacts="domainData.administrative_contacts"
            :verbose="verbose"
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
  margin-top: 0.5rem;
}

.main {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
}

.left {
  flex: 2;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.right {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

@media (max-width: 900px) {
  .main {
    flex-direction: column;
  }
}

.card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius);
  padding: var(--card-padding);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
}
</style>
