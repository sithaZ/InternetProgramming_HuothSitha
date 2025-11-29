<template>
  <header class="header-section">
    <div class="header-top">
      <div class="container top-flex">
        <router-link to="/" class="logo">
          <img src="@/components/icons/logo.png" alt="Melon Mart" height="40" />
          <div class="logo-text">
            <span class="brand">Melon</span>
            <span class="sub">Mart & Grocery</span>
          </div>
        </router-link>

        <SearchBox class="search-box-area" />

        <div class="header-actions">
          <MenuItem label="Account" icon>
            <template #icon>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
            </template>
          </MenuItem>
          <MenuItem label="Compare" icon>
            <template #icon>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 12v8m0-8l-4 4m4-4l4 4M20 4v16m-8-8l-4-4m4 4l4-4"/></svg>
            </template>
          </MenuItem>
          <MenuItem label="Wishlist" icon>
            <template #icon>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
            </template>
          </MenuItem>
          <MenuItem label="Cart" icon>
            <template #icon>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
            </template>
          </MenuItem>
        </div>
      </div>
    </div>

    <div class="header-bottom">
      <div class="container bottom-flex">
        <div class="browse-cat">
          <button class="browse-btn">
            <span class="grid-icon">
               <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
            </span>
            Browse All Categories
            <svg class="chevron-white" viewBox="0 0 24 24" width="12" height="12"><path d="M7 10l5 5 5-5z" fill="white" /></svg>
          </button>
        </div>

        <nav class="main-nav">
          <MenuItem label="Hot Deals" icon>
             <template #icon>🔥</template>
          </MenuItem>
          <MenuItem label="Home" hasDropdown />
          <MenuItem label="Food" hasDropdown />
          <MenuItem label="Vegetables" hasDropdown />
          <MenuItem label="Drink" />
          <MenuItem label="Cookies" />
          <MenuItem label="Meat & Seafood" hasDropdown />
          <MenuItem label="Bakery" />
        </nav>

        <div class="support">
          <div class="headphone-icon">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#253D4E" stroke-width="2"><path d="M3 18v-6a9 9 0 0 1 18 0v6"></path><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path></svg>
          </div>
          <div class="support-text">
            <span class="number">1900 - 8888</span>
            <span class="label">24/7 Support Center</span>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import SearchBox from './SearchBoxComponent.vue'
import MenuItem from './MenuItemComponent.vue'
export default {
  name: 'Header',
  components: {
    SearchBox,
    MenuItem
  }
}
</script>

<style scoped>
.header-section {
  background-color: #fff;
  border-bottom: 1px solid #ececec;
  font-family: 'Quicksand', sans-serif;
  margin-bottom: 30px;
}

.container {
  max-width: 1600px;
  margin: 0 auto;
  padding: 0 20px;
}

/* TOP HEADER */
.header-top {
  padding: 20px 0;
  border-bottom: 1px solid #ececec;
}

.top-flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
}

/* Logo */
.logo {
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
}
.logo-text {
  display: flex;
  flex-direction: column;
}
.brand {
  color: #3BB77E;
  font-weight: 800;
  font-size: 24px;
  line-height: 1;
}
.sub {
  color: #253D4E;
  font-size: 12px;
  letter-spacing: 1px;
}

.search-box-area {
  flex: 1;
}

.header-actions {
  display: flex;
  gap: 25px;
}

/* BOTTOM HEADER */
.header-bottom {
  padding: 15px 0;
}

.bottom-flex {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.browse-btn {
  background-color: #3BB77E;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-weight: 700;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
}

.grid-icon {
  display: flex;
}

.main-nav {
  display: flex;
  gap: 30px;
}

.support {
  display: flex;
  align-items: center;
  gap: 10px;
}

.support-text {
  display: flex;
  flex-direction: column;
  line-height: 1.2;
}

.support-text .number {
  color: #3BB77E;
  font-weight: 700;
  font-size: 18px;
}

.support-text .label {
  font-size: 11px;
  color: #7E7E7E;
}


@media (max-width: 992px) {
  .top-flex, .bottom-flex {
    flex-direction: column;
    gap: 15px;
  }
  .search-box-area {
    width: 100%;
    order: 2;
  }
  .header-actions {
    order: 3;
    width: 100%;
    justify-content: space-between;
  }
  .main-nav {
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style>