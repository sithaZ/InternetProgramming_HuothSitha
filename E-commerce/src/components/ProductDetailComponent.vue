<template>
  <div class="product-details">
    <span class="stock-status">In Stock</span>
    
    <h1 class="title">{{ product.name }}</h1>
    
    <div class="rating-review">
      <div class="stars">
        <span v-for="i in 5" :key="i" class="star" :class="{ filled: i <= Math.floor(product.rating) }">★</span>
      </div>
      <span class="review-text">({{ product.rating.toFixed(1) }} reviews)</span>
    </div>

    <div class="price-area">
      <span class="current-price">${{ product.price.toFixed(2) }}</span>
      <div class="discount-box" v-if="product.originalPrice > product.price">
        <span class="old-price">${{ product.originalPrice.toFixed(2) }}</span>
      </div>
    </div>

    <p class="description">
     Experience the rich, natural sweetness of our farm-fresh mangoes—handpicked at peak ripeness for unbeatable flavor. Juicy, aromatic, and vibrant in color, these premium mangoes offer the perfect balance of sweetness and smooth texture. Ideal for eating fresh, blending, or adding to desserts. Quality you can taste in every bite.
    </p>

    <div class="actions-row">
      <div class="quantity-wrapper">
        <input type="number" v-model="quantity" min="1" class="qty-input" />
        <div class="qty-arrows">
          <span @click="quantity++">▲</span>
          <span @click="quantity > 1 ? quantity-- : 1">▼</span>
        </div>
      </div>

      <button class="add-cart-btn">
        Add To Cart
      </button>

      <button class="icon-btn">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
      </button>
      
      <button class="icon-btn">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 12v8m0-8l-4 4m4-4l4 4M20 4v16m-8-8l-4-4m4 4l4-4"/></svg>
      </button>
    </div>

    <div class="meta-info">
      <div class="meta-row">
        <span class="label">Vendor:</span>
        <span class="value">NestMart</span>
      </div>
      <div class="meta-row">
        <span class="label">SKU:</span>
        <span class="value">FWM15VKT</span>
      </div>
      <div class="meta-row">
        <span class="label">Tags:</span>
        <span class="value text-green">Snack, Organic, Brown</span>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'ProductDetailComponent',
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  setup() {
    const quantity = ref(1)
    return { quantity }
  }
}
</script>

<style scoped>
.product-details {
  font-family: 'Quicksand', sans-serif;
}

.stock-status {
  background-color: #DEF9EC;
  color: #3BB77E;
  padding: 5px 10px;
  border-radius: 5px;
  font-weight: 700;
  font-size: 14px;
  display: inline-block;
  margin-bottom: 15px;
}

.title {
  font-size: 40px;
  font-weight: 700;
  color: #253D4E;
  line-height: 1.2;
  margin-bottom: 20px;
}

.rating-review {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
}

.star { color: #d2d2d2; font-size: 16px; }
.star.filled { color: #fdb332; }
.review-text { color: #B6B6B6; font-size: 14px; }

.price-area {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 30px;
}

.current-price {
  font-size: 58px;
  font-weight: 800;
  color: #3BB77E;
  line-height: 1;
}

.old-price {
  font-size: 24px;
  color: #B6B6B6;
  text-decoration: line-through;
  font-weight: 700;
}

.description {
  font-size: 16px;
  color: #7E7E7E;
  line-height: 24px;
  margin-bottom: 30px;
}


.actions-row {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 30px;
}

.quantity-wrapper {
  border: 2px solid #3BB77E;
  border-radius: 5px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  height: 50px;
  width: 90px;
  position: relative;
}

.qty-input {
  border: none;
  width: 100%;
  font-size: 18px;
  font-weight: 700;
  color: #3BB77E;
  text-align: center;
  outline: none;

  -moz-appearance: textfield;
}
.qty-input::-webkit-outer-spin-button,
.qty-input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.qty-arrows {
  display: flex;
  flex-direction: column;
  margin-left: 5px;
}
.qty-arrows span {
  font-size: 10px;
  cursor: pointer;
  color: #3BB77E;
  line-height: 1;
}

.add-cart-btn {
  background-color: #3BB77E;
  color: white;
  border: none;
  border-radius: 5px;
  height: 50px;
  padding: 0 30px;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
  transition: .3s;
}
.add-cart-btn:hover { background-color: #29a56a; }

.icon-btn {
  width: 50px;
  height: 50px;
  border: 1px solid #ececec;
  border-radius: 5px;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #7E7E7E;
  transition: .3s;
}
.icon-btn:hover { border-color: #3BB77E; color: #3BB77E; }

.meta-info {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.meta-row {
  font-size: 14px;
}

.meta-row .label {
  color: #3BB77E;
  font-weight: 700;
  margin-right: 5px;
}

.meta-row .value {
  color: #7E7E7E;
}

.text-green { color: #3BB77E !important; }
</style>