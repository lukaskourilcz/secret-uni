<script setup>
import { ref, onMounted } from "vue";

import AppShell from "../components/AppShell.vue";
import DomainHeader from "../components/DomainHeader.vue";
import AuthInfo from "../components/AuthInfo.vue";
import EventsTable from "../components/EventsTable.vue";
import StateFlags from "../components/StateFlags.vue";
import Owner from "../components/OwnerCard.vue";
import AdministrativeContacts from "../components/AdministrativeContacts.vue";
import NSSet from "../components/NSSet.vue";
import KeySet from "../components/KeySet.vue";

const domainData = ref(null);
const verbose = ref(false);
const loading = ref(true);

onMounted(async () => {
  try {
    const res = await fetch("/domain-detail.json");
    if (!res.ok) throw new Error(`Failed to load: ${res.status}`);
    domainData.value = await res.json();
  } catch (err) {
    console.error("Error loading domain data:", err);
  } finally {
    loading.value = false;
  }
});
</script>

<template>
  <AppShell>
    <template v-if="loading">
      <div class="loading">Loading…</div>
    </template>

    <template v-else-if="domainData">
      <DomainHeader
        :domain="domainData.fqdn"
        :verbose="verbose"
        @toggle-verbose="verbose = $event"
      />

      <div class="content">
        <div class="main">
          <div class="main-left">
            <AuthInfo
              :auth-info="domainData.authInfo"
              :expires-at="domainData.expires_at"
            />
            <EventsTable :events="domainData.events" />
            <StateFlags
              :flags="domainData.state_flags.flags"
              :verbose="verbose"
            />
          </div>

          <div class="main-right">
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
    </template>

    <template v-else>
      <div class="error">Failed to load domain data.</div>
    </template>
  </AppShell>
</template>

<style scoped>
.content {
  margin-top: 0.5rem;
}

.main {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
}

.main-left {
  flex: 2;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.main-right {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.loading,
.error {
  text-align: center;
  padding: 2rem;
  color: #666;
}

@media (max-width: 900px) {
  .main {
    flex-direction: column;
  }
}
</style>
