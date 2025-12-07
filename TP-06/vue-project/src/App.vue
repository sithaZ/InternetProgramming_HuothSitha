<script setup>
import { RouterLink, RouterView } from 'vue-router'
import SidebarMenu from './components/SidebarMenu.vue'
</script>

<template>
  <div class="grid-container">
    
    <header class="header">
      <div class="brand">Header</div>
      <div class="nav-links">
        <RouterLink class="nav-item" to="/page_1/sections/1">Page 1</RouterLink>
        <RouterLink class="nav-item" to="/page2/sections/1">Page 2</RouterLink>
        <RouterLink class="nav-item" to="/page3/sections/1">Page 3</RouterLink>
      </div>
    </header>

    <aside class="sidebar">
      <SidebarMenu />
    </aside>

    <main class="main-content">
      <div class="content-wrapper">
        <RouterView />
      </div>
    </main>

    <footer class="footer">Footer</footer>
  </div>
</template>