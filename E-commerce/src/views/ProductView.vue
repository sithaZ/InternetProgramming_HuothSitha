<template>
  <div class="page-container">
    <div class="breadcrumbs">
      <router-link to="/">Home</router-link> > Products > <span>Item #{{ $route.params.productId }}</span>
    </div>

    <div class="product-detail-mock">
      <div class="image-area">
        <!-- Placeholder for product image -->
        <div class="placeholder-img">Product Image</div>
      </div>
      <div class="info-area">
        <h1>Product Detail Page</h1>
        <h3>Product ID: {{ $route.params.productId }}</h3>
        <p class="price">$25.00</p>
        <p class="desc">
          This is a placeholder for the product detail view. In a real app, 
          you would fetch the product details using the ID from the URL.
        </p>
        <button class="add-btn">Add to Cart</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.page-container {
  padding: 40px;
  max-width: 1600px;
  margin: 0 auto;
}

.breadcrumbs {
  color: #7E7E7E;
  margin-bottom: 30px;
}

.breadcrumbs a {
  text-decoration: none;
  color: #3BB77E;
}

.product-detail-mock {
  display: flex;
  gap: 40px;
}

.image-area {
  width: 400px;
  height: 400px;
  background-color: #eee;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #aaa;
}

.info-area h1 {
  color: #253D4E;
  margin-bottom: 10px;
}

.price {
  font-size: 28px;
  color: #3BB77E;
  font-weight: bold;
  margin: 20px 0;
}

.desc {
  line-height: 1.6;
  color: #7E7E7E;
  margin-bottom: 30px;
}

.add-btn {
  background-color: #3BB77E;
  color: white;
  border: none;
  padding: 15px 40px;
  border-radius: 5px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
}
</style>