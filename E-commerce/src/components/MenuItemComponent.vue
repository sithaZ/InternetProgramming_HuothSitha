<template>
  <div class="menu-item" :class="{ 'has-icon': icon }">
    <span v-if="icon" class="icon-wrap">
      <slot name="icon"></slot>
    </span>
    <span class="label">{{ label }}</span>
    <svg v-if="hasDropdown" class="chevron" viewBox="0 0 24 24" width="12" height="12">
      <path d="M7 10l5 5 5-5z" fill="currentColor" />
    </svg>
  </div>
</template>

<script>
export default {
  name: 'MenuItem',
  props: {
    label: { type: String, required: true },
    icon: { type: Boolean, default: false },
    hasDropdown: { type: Boolean, default: false }
  }
}
</script>

<style scoped>
.menu-item {
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  color: #7E7E7E;
  font-weight: 500;
  font-size: 15px;
  transition: color 0.3s;
}

.menu-item:hover {
  color: #3BB77E;
}

.menu-item.has-icon {
  color: #7E7E7E; 
}

.icon-wrap {
  display: flex;
  align-items: center;
  font-size: 20px;
}

.label {
  white-space: nowrap;
}
</style>