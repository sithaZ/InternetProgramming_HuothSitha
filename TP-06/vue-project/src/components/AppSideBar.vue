<template>
  <div class="sidebar-container">
    <div class="menu-title">Menu</div>
    <ul class="section-list">
      <li>Section 1</li>
      <li class="selected">Section 2</li> <li>Section 3</li>
      <li>Section 4</li>
    </ul>
  </div>
</template>

<style scoped>
.menu-title { padding: 15px; border-bottom: 1px solid #ccc; font-weight: bold;}
.section-list { list-style: none; padding: 0; margin: 0; }
.section-list li {
  padding: 15px;
  border-bottom: 1px solid black;
  cursor: pointer;
}
.section-list li:hover { background-color: #f0f0f0; }
.selected { background-color: #d0e4f5; border-left: 5px solid #007bff;} 
</style>