<template>

  <div class="app-container">
    
    <HeroBanner />

    <section class="section-categories">
      <SectionHeaderComponent 
        :title="productStore.sections[0].name" 
        :filters="productStore.filterOptions"
        :active-filter="productStore.sections[0].activeFilter"
        @filter-change="(filter) => handleFilterChange(0, filter)" 
      />
      
      <div class="category-wrapper">
   <CategoryComponent 
          v-for="category in productStore.categories" 
          :key="category.id" 
          :title="category.name"
          :product-count="parseInt(category.productCount)" 
          :image="'http://localhost:3000/' + category.image"
          :type="category.color" 
          @click="goToCategory(category.id)"
          class="cursor-pointer"
          :class="{ 'selected-box': selectedCategoryId === category.id }" 
        />
      </div>
    </section>

    <div class="promotion-row">
      <PromotionComponent 
        v-for="promo in productStore.promotions" 
        :key="promo.id" 
        :title="promo.title"
        :image="'http://localhost:3000/' + promo.image" 
        :type="promo.color" 
      />
    </div>

    <br><br>

    <section class="section-popular">
      <SectionHeaderComponent 
        :title="productStore.sections[1].name" 
        :filters="productStore.filterOptions"
        :active-filter="productStore.sections[1].activeFilter" 
      />

      <div class="products-grid">
        <ProductComponent 
          v-for="product in productStore.products" 
          :key="product.id" 
          :id="product.id"
          :name="product.name" 
          :category="product.category" 
          :price="product.price"
          :original-price="product.originalPrice" 
          :rating="product.rating" 
          :weight="product.weight"
          :image="'http://localhost:3000/' + product.image" 
          :badge="product.badge" 
          :badge-type="product.badgeType" 
          @click="goToProduct(product.id)"
          class="cursor-pointer"
        />
      </div>
    </section>

  </div>
</template>

<script>
import { onMounted, ref } from 'vue'
import { useProductStore } from '../stores/product'

// Components
import HeroBanner from '../components/HeroBanner.vue'
import CategoryComponent from '../components/CategoryComponent.vue'
import PromotionComponent from '../components/PromotionComponent.vue'
import ProductComponent from '../components/ProductComponent.vue'
import SectionHeaderComponent from '../components/SectionHeaderComponent.vue'

export default {
  name: 'HomeView',
  components: { 
    HeroBanner, 
    CategoryComponent, 
    PromotionComponent, 
    ProductComponent, 
    SectionHeaderComponent 
  },
  setup() {
    const productStore = useProductStore()
    const selectedCategoryId = ref(null)

    const selectCategory = (id) => { selectedCategoryId.value = id }

    const handleFilterChange = (sectionIndex, filter) => {
      productStore.setSectionFilter(sectionIndex, filter)
    }

     const goToCategory = (id) => {
      router.push({ name: 'category', params: { categoryId: id } })
    }

    const goToProduct = (id) => {
      router.push({ name: 'product', params: { productId: id } })
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

.promotion-row > * {
  flex: 1;
  max-width: 100%;
}

/* Products Grid */
.products-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
  padding-bottom: 50px;
}

/* Responsive Breakpoints */
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