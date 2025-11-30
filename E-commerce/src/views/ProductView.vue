<template>
  <div class="page-container" v-if="product">
    <div class="breadcrumbs">
      <router-link to="/">Home</router-link> 
      <span class="sep">></span> 
      <span class="cat">{{ product.category }}</span>
      <span class="sep">></span>
      <span class="current">{{ product.name }}</span>
    </div>

    <div class="product-grid">
      <div class="col-left">
        <ProductImageComponent 
          :main-image="'http://localhost:3000/' + product.image"
          :badge="product.badge"
          :badge-type="product.badgeType"
        />
      </div>

      <div class="col-right">
        <ProductDetailComponent :product="product" />
      </div>
    </div>

    <div class="product-tabs-section">
      <div class="tab-headers">
        <button 
          class="tab-btn" 
          :class="{ active: activeTab === 'description' }"
          @click="activeTab = 'description'"
        >
          Description
        </button>
        <button 
          class="tab-btn" 
          :class="{ active: activeTab === 'additional' }"
          @click="activeTab = 'additional'"
        >
          Additional Info
        </button>
        <button 
          class="tab-btn" 
          :class="{ active: activeTab === 'reviews' }"
          @click="activeTab = 'reviews'"
        >
          Reviews (3)
        </button>
      </div>

      <div class="tab-content">
        <div v-if="activeTab === 'description'" class="desc-content">
          <p>Uninhibited carnally hired played in whimpered dear gorilla koala depending and much yikes off far quetzal goodness and from for grimaced goodness unaccountably and meadowlark near unblushingly crucial scallop tightly neurotic hungrily some and dear furiously this apart.</p>
          <p>Spluttered narrowly yikes left moth in yikes bowed this that grizzly much hello on spoon-fed that alas rethought much decently richly and wow against the frequent fluidly at formidable acceptably flapped besides and much circa far over the bucolically hey precarious goldfinch mastodon goodness gnashed a jellyfish and one however because.</p>
        </div>
        <div v-else-if="activeTab === 'additional'">
          <p>Additional information goes here. Weight: {{ product.weight }}</p>
        </div>
        <div v-else>
          <p>Customer reviews will be shown here.</p>
        </div>
      </div>
    </div>

  </div>
  
  <div v-else class="loading-state">
    <p>Loading product details...</p>
  </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useProductStore } from '../stores/product'
import ProductImageComponent from '../components/ProductImageComponent.vue'
import ProductDetailComponent from '../components/ProductDetailComponent.vue'

export default {
  name: 'ProductView',
  components: {
    ProductImageComponent,
    ProductDetailComponent
  },
  setup() {
    const route = useRoute()
    const productStore = useProductStore()
    const activeTab = ref('description')

    
    const product = computed(() => {
      
      const id = Number(route.params.productId)
      return productStore.products.find(p => p.id === id)
    })

    onMounted(async () => {
      if (productStore.products.length === 0) {
        await productStore.fetchProducts()
      }
    })

    return { 
      product,
      activeTab
    }
  }
}
</script>

<style scoped>
.page-container {
  padding: 30px 20px;
  max-width: 1600px;
  margin: 0 auto;
  font-family: 'Quicksand', sans-serif;
}

.loading-state {
  padding: 100px;
  text-align: center;
  color: #7E7E7E;
  font-size: 20px;
}


.breadcrumbs {
  color: #7E7E7E;
  font-size: 14px;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  gap: 10px;
}
.breadcrumbs a { text-decoration: none; color: #3BB77E; font-weight: 600; }
.breadcrumbs .sep { color: #7E7E7E; font-size: 10px; }
.breadcrumbs .current { color: #7E7E7E; }


.product-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  margin-bottom: 60px;
}


.product-tabs-section {
  border: 1px solid #ececec;
  border-radius: 15px;
  padding: 40px;
  background: #fff;
}

.tab-headers {
  display: flex;
  gap: 15px;
  margin-bottom: 30px;
}

.tab-btn {
  background: none;
  border: 1px solid #ececec;
  padding: 10px 25px;
  border-radius: 30px;
  color: #7E7E7E;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
  transition: 0.3s;
}

.tab-btn:hover {
  color: #3BB77E;
  transform: translateY(-2px);
}

.tab-btn.active {
  color: #3BB77E;
  border-color: #3BB77E; 
  box-shadow: 0 5px 10px rgba(0,0,0,0.05);
}

.desc-content p {
  color: #7E7E7E;
  line-height: 24px;
  margin-bottom: 15px;
  font-size: 15px;
}


@media (max-width: 992px) {
  .product-grid {
    grid-template-columns: 1fr;
  }
}
</style>