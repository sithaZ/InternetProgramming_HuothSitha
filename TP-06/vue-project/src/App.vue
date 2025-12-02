<script setup>
import { ref } from 'vue'

const activeSection = ref('Section 2')
</script>

<template>
  <div class="grid-container">
    
    <header class="header">
      <div class="brand">Header</div>
      <div class="nav-links">
        <RouterLink class="nav-item" to="/">Page 1</RouterLink>
        <RouterLink class="nav-item" to="/page2">Page 2</RouterLink>
        <RouterLink class="nav-item" to="/page3">Page 3</RouterLink>
      </div>
    </header>

    <aside class="sidebar">
      <div class="menu-header">Menu</div>
      <ul class="menu-list">
        <li class="menu-item">Section 1</li>
        <li class="menu-item ">Section 2</li>
        <li class="menu-item">Section 3</li>
        <li class="menu-item">Section 4</li>
      </ul>
    </aside>

    <main class="main-content">
      <div class="content-wrapper">
        <RouterView />
      </div>
    </main>

    <footer class="footer">
      Footer
    </footer>

  </div>
</template>

