<template>
  <div class="sidebar-container">
    <div class="menu-title">Menu</div>
    <ul class="section-list">
      <li>
        <RouterLink to="section1">Section 1</RouterLink>
      </li>
      <li>
        <RouterLink to="section2">Section 2</RouterLink>
      </li>
      <li>
        <RouterLink to="section3">Section 3</RouterLink>
      </li>
      <li>
        <RouterLink to="section4">Section 4</RouterLink>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.menu-title {
  padding: 15px;
  border-bottom: 1px solid #ccc;
  font-weight: bold;
}

.section-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.section-list li {
  
  border-bottom: 1px solid black;
}


.section-list a {
  text-decoration: none;
  color: inherit;
  display: block;
  padding: 15px; 
  cursor: pointer;
}

.section-list a:hover {
  background-color: #f0f0f0;
}


.router-link-active {
  background-color: #d0e4f5;
  border-left: 5px solid #007bff;
  font-weight: bold;
}
</style>