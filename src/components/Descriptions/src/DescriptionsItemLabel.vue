<template>
  <div class="cell-item">
    <Icon v-if="icon" :icon="icon" style="vertical-align: middle" :size="18" />
    {{ label }}
  </div>
</template>

<script setup lang="ts">
const { label } = defineProps({
  label: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: false,
  },
})
</script>

<style scoped lang="scss">
.cell-item {
  display: inline;
}

.cell-item::after {
  content: ':';
}
</style>
