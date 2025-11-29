<template>
  <div class="page-container">
    <div class="breadcrumbs">
      <router-link to="/">Home</router-link> > Categories > <span>{{ categoryName }}</span>
    </div>

    <h1>Category: {{ categoryName }}</h1>
    <p>Showing results for ID: {{ $route.params.categoryId }}</p>
    
    <div class="empty-state">
      <p>Products for this category will appear here.</p>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

export default {
  name: 'CategoryView',
  setup() {
    const route = useRoute()
    
    
    const categoryName = computed(() => {
      const id = route.params.categoryId
      return id ? id.toString().charAt(0).toUpperCase() + id.toString().slice(1).replace('-', ' ') : 'Unknown'
    })

    return { categoryName }
  }
}
</script>

<style scoped>
.page-container {
  padding: 40px;
  max-width: 1600px;
  margin: 0 auto;
}

.breadcrumbs {
  color: #7E7E7E;
  margin-bottom: 20px;
}

.breadcrumbs a {
  text-decoration: none;
  color: #3BB77E;
}

h1 {
  color: #253D4E;
  margin-bottom: 10px;
}

.empty-state {
  margin-top: 50px;
  padding: 100px;
  text-align: center;
  background: #f9f9f9;
  border-radius: 15px;
  color: #999;
}
</style>