<script setup>
import { ref, computed } from "vue";

const props = defineProps({
  authInfo: { type: String, required: true },
  expiresAt: { type: String, required: false },
});

const showSecret = ref(false);
const authInfo = ref("S3cretPwd!76");

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

function toggle() {
  showSecret.value = !showSecret.value;
}
</script>

<template>
  <div class="auth-info card">
    <div class="row">
      <span class="label">AuthInfo:</span>
      <button class="auth-btn" @click="toggle">
        {{ showSecret ? authInfo : "SHOW" }}
      </button>

      <span class="label expires">Expires at:</span>
      <span>{{ formattedExpiresAt }}</span>
    </div>
  </div>
</template>

<style scoped>
.auth-info {
  padding: 0;
}

.row {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.75rem 1rem;
  font-size: 0.9rem;
  flex-wrap: wrap;
}

.label {
  font-weight: 600;
  color: #333;
}

.label.expires {
  margin-left: auto;
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
</style>
