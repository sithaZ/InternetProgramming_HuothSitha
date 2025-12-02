<template>
  <div class="header-content">
    <div class="brand">Header</div>
    <nav class="top-nav">
      <router-link to="/" active-class="active">Page 1</router-link>
      <router-link to="/page2" active-class="active">Page 2</router-link>
      <router-link to="/page3" active-class="active">Page 3</router-link>
    </nav>
  </div>
</template>

<style scoped>
.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
}
.active { color: rgb(8, 115, 255); font-weight: bold; } /* Matches your 'Page 1' red text */
.top-nav a { margin-left: 20px; text-decoration: none; color: black; }
</style>