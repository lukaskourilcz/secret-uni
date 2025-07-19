<script setup>
import { ref, computed } from "vue";

const props = defineProps({
  authInfo: { type: String, required: true },
  expiresAt: { type: String, required: false },
});

const showSecret = ref(false);
const authInfo = ref("");

async function toggle() {
  if (!showSecret.value) {
    const res = await fetch("/api/auth-info");
    const data = await res.text();
    authInfo.value = data;
  }
  showSecret.value = !showSecret.value;
}

const formattedExpiresAt = computed(() => {
  const expiresAt = props.expiresAt;
  if (!expiresAt) return "—";
  const date = new Date(expiresAt);
  if (isNaN(date)) return "—";
  return date.toLocaleString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
});

</script>

<template>
  <div class="auth-info card">
    <div class="row">
      <div class="left">
        <span class="label">AuthInfo:</span>

        <button class="auth-btn" @click="toggle">
          {{ showSecret ? "HIDE" : "SHOW" }}
        </button>

        <span v-if="showSecret" class="secret">
          {{ props.authInfo }}
        </span>
      </div>

      <div class="right">
        <span class="label">Expires at:</span> {{ formattedExpiresAt }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.auth-info {
  padding: 0;
}

.row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 0.75rem 1rem;
  font-size: 0.9rem;
  gap: 0.5rem;
}

.left,
.right {
  flex: 1 1 50%;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.label {
  font-weight: 500;
  color: #333;
  margin-right: 0.2rem;
}

.auth-btn {
  background-color: #3498db;
  border: none;
  color: white;
  padding: 0.3rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  font-size: 0.9rem;
}

.auth-btn:hover {
  background-color: #2980b9;
}

.secret {
  color: red;
  font-weight: 500;
}

.expires {
  font-size: 0.85rem;
  color: #555;
}

@media (max-width: 500px) {

  .expires {
    margin-top: -1rem;

  }
}
</style>
