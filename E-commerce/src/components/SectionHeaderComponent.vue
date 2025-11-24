<template>
  <div class="section-header">
    <h3 class="title">{{ title }}</h3>

    <div class="filter-nav">
      <ul class="nav-list">
        <li 
          v-for="filter in filters" 
          :key="filter" 
          class="nav-item" 
          :class="{ active: activeFilter === filter }"
          @click="$emit('filter-change', filter)"
        >
          {{ filter }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SectionHeaderComponent',
  props: {
    title: {
      type: String,
      required: true
    },
    filters: {
      type: Array,
      default: () => []
    },
    activeFilter: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  flex-wrap: wrap; /* Good for mobile */
  gap: 15px;
}

.title {
  font-size: 32px;
  font-weight: 700;
  color: #253D4E;
  margin: 0;
}

.nav-list {
  display: flex;
  list-style: none;
  gap: 20px;
  padding: 0;
  margin: 0;
}

.nav-item {
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  color: #7E7E7E;
  transition: all 0.3s ease;
}

.nav-item:hover {
  color: #3BB77E;
  transform: translateY(-2px);
}

.nav-item.active {
  color: #3BB77E;
}

/* Mobile Responsiveness */
@media (max-width: 768px) {
  .section-header {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .nav-list {
    flex-wrap: wrap;
    gap: 10px;
  }
}
</style>