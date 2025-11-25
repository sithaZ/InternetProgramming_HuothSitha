<template>



  <div class="app-container">

   <div class="hero-wrapper">
  <img src="@/components/Background/herobg.png" class="hero-bg" />

  <div class="hero-content">
    <img src="@/components/Hero/mainhero.png" class="hero-main" />
  </div>
</div>


    <!-- Categories Section -->
    <section class="section-categories">
      <SectionHeaderComponent :title="productStore.sections[0].name" :filters="productStore.filterOptions"
        :active-filter="productStore.sections[0].activeFilter"
        @filter-change="(filter) => handleFilterChange(0, filter)" />
      <div class="category-wrapper">
        <CategoryComponent v-for="category in productStore.categories" :key="category.id" :title="category.name"
          :product-count="parseInt(category.productCount)" :image="'http://localhost:3000/' + category.image"
          :type="category.color" @click="selectCategory(category.id)"
          :class="{ 'selected-box': selectedCategoryId === category.id }" />
      </div>
    </section>

    <!-- Promotions Row -->
    <div class="promotion-row">
      <PromotionComponent v-for="promo in productStore.promotions" :key="promo.id" :title="promo.title"
        :image="'http://localhost:3000/' + promo.image" :type="promo.color" />
    </div>

    <br><br>

    <!-- Popular Products Section -->
    <section class="section-popular">

      <SectionHeaderComponent :title="productStore.sections[1].name" :filters="productStore.filterOptions"
        :active-filter="productStore.sections[1].activeFilter" />

      <div class="products-grid">
        <ProductComponent v-for="product in productStore.products" :key="product.id" :id="product.id"
          :name="product.name" :category="product.category" :price="product.price"
          :original-price="product.originalPrice" :rating="product.rating" :weight="product.weight"
          :image="'http://localhost:3000/' + product.image" :badge="product.badge" :badge-type="product.badgeType" />
      </div>
    </section>

  </div>
</template>

<script>
import { onMounted, ref } from 'vue'
// Updated imports with "../" to point to src folder
import { useProductStore } from '../stores/product'
import CategoryComponent from '../components/CategoryComponent.vue'
import PromotionComponent from '../components/PromotionComponent.vue'
import ProductComponent from '../components/ProductComponent.vue'
import SectionHeaderComponent from '../components/SectionHeaderComponent.vue'

export default {
  name: 'HomeView',
  components: { CategoryComponent, PromotionComponent, ProductComponent, SectionHeaderComponent },
  setup() {
    const productStore = useProductStore()
    const selectedCategoryId = ref(null)

    const selectCategory = (id) => { selectedCategoryId.value = id }

    const handleFilterChange = (sectionIndex, filter) => {
      productStore.setSectionFilter(sectionIndex, filter)
    }

    onMounted(async () => {
      await productStore.fetchCategories()
      await productStore.fetchPromotions()
      await productStore.fetchProducts()
    })

    return {
      productStore,
      selectedCategoryId,
      selectCategory,
      handleFilterChange
    }
  }
}
</script>

<style scoped>
.app-container {
  padding: 0 20px;
  max-width: 1600px;
  margin: 0 auto;
}

.section-categories,
.section-popular {
  margin-top: 40px;
}

/* Category Slider */
.category-wrapper {
  display: flex;
  gap: 15px;
  overflow-x: auto;
  flex-wrap: nowrap;
  padding-bottom: 10px;
  padding-left: 5px;
}

.category-wrapper::-webkit-scrollbar {
  height: 6px;
}

.category-wrapper::-webkit-scrollbar-thumb {
  background-color: #ccc;
  border-radius: 4px;
}

.selected-box {
  border: 2px solid #333 !important;
  transform: scale(1.05);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

/* Promotions */
.promotion-row {
  display: flex;
  gap: 20px;
  margin-top: 40px;
}

.promotion-row>* {
  flex: 1;
  max-width: 100%;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  /* Forces exactly 5 columns */
  gap: 20px;
  padding-bottom: 50px;
}

.hero-container {
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 20px;
  margin-bottom: 40px;
  border: 1px solid green;
  background-color: #FFDFB0;
}
.hero-wrapper {
  position: relative;
  width: 100%;
  height: 400px;
  border-radius: 20px;
  overflow: hidden;
}

/* Background image */
.hero-bg {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
}

/* Content image (Main hero) */
.hero-content {
  position: absolute;
  top: 50%;        /* center vertically */
  left: 50%;       /* center horizontally */
  transform: translate(-50%, -50%);
  z-index: 2;
}

.hero-main {
  width: 300px; 
  height: auto;
}


@media (max-width: 1400px) {
  .products-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

@media (max-width: 1100px) {
  .products-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 768px) {
  .products-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .products-grid {
    grid-template-columns: 1fr;
  }
}
</style>