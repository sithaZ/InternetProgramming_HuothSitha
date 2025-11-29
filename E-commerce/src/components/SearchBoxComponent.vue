<template>
  <div class="search-box">
    <div class="category-select">
      <span>All Categories</span>
      <svg class="chevron" viewBox="0 0 24 24" width="14" height="14">
        <path d="M7 10l5 5 5-5z" fill="currentColor" />
      </svg>
    </div>
    <div class="divider"></div>
    <input type="text" placeholder="Search for items..." class="search-input" />
    <button class="search-btn">
      <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none">
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  name: 'SearchBox'
}
</script>

<style scoped>
.search-box {
  display: flex;
  align-items:center;
  border: 1px solid #BCE3C9;
  border-radius: 5px;
  height: 50px;
  max-width: 700px;
  width: 100%;
  background-color: #fff;
  padding: 0 10px;
}

.category-select {
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: 700;
  color: #253D4E;
  padding: 0 15px;
  cursor: pointer;
  font-size: 14px;
  white-space: nowrap;
}

.divider {
  width: 1px;
  height: 20px;
  background-color: #ccc;
  margin: 0 10px;
}

.search-input {
  border: none;
  outline: none;
  flex: 1;
  font-size: 14px;
  color: #7E7E7E;
  padding: 5px;
}

.search-btn {
  background: none;
  border: none;
  cursor: pointer;
  color: #7E7E7E;
  display: flex;
  align-items: center;
}

.search-btn:hover {
  color: #3BB77E;
}
</style>