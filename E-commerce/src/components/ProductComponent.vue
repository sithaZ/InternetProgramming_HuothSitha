<template>
  <div class="product-card">
    <div v-if="badge" class="badge" :class="badgeClass">
      {{ badge }}
    </div>

    <div class="product-img-wrap">
      <img :src="image" :alt="name" />
    </div>

    <div class="product-content-wrap">
      <div class="product-category">
        {{ category }}
      </div>
      
      <h2 class="product-title">
        {{ name }}
      </h2>

      <div class="product-rate-cover">
        <div class="product-rate">
           <div class="stars">
             <span v-for="i in 5" :key="i" class="star" :class="{ filled: i <= Math.floor(rating) }">★</span>
           </div>
           <span class="font-small ml-5 text-muted"> ({{ rating.toFixed(1) }})</span>
        </div>
      </div>

      <div class="product-card-bottom">
        <div class="product-weight">
           {{ weight }}
        </div>
        
        <div class="product-price-bottom">
          <div class="product-price">
            <span>${{ price.toFixed(2) }}</span>
            <span v-if="originalPrice > price" class="old-price">${{ originalPrice.toFixed(2) }}</span>
          </div>
          
          <div class="add-cart">
             <a class="add-btn">Add +</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductComponent',
  props: {
    id: { type: Number, required: true },
    name: { type: String, required: true },
    category: { type: String, default: '' },
    image: { type: String, required: true },
    weight: { type: String, default: '' },
    price: { type: Number, required: true },
    originalPrice: { type: Number, default: 0 },
    rating: { type: Number, default: 0 },
    badge: { type: String, default: null },
    badgeType: { type: String, default: 'discount' }
  },
  computed: {
    badgeClass() {
       const map = {
          discount: 'bg-discount',
          hot: 'bg-hot',
          new: 'bg-new',
          sale: 'bg-sale'
       };
       return map[this.badgeType] || 'bg-discount';
    }
  }
}
</script>

<style scoped>
/* General Card */
.product-card {
  position: relative;
  background-color: #fff;
  border: 1px solid #ececec;
  border-radius: 15px;
  overflow: hidden;
  transition: .2s;
  padding: 25px;
  width: 298px;
  box-sizing: border-box;
  font-family: 'Quicksand', sans-serif;
}
.product-card:hover {
  box-shadow: 0 20px 40px rgba(0,0,0,.08);
  border-color: #3bb77e;
}

/* Image */
.product-img-wrap {
  position: relative;
  margin-bottom: 20px;
  text-align: center;
  height: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.product-img-wrap img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

/* Text */
.product-category { font-size: 12px; color: #adadad; margin-bottom: 5px; }
.product-title {
  font-size: 16px; font-weight: 700; color: #253d4e; margin: 0 0 10px;
  line-height: 1.2; display: -webkit-box; -webkit-line-clamp: 2;
  -webkit-box-orient: vertical; overflow: hidden; min-height: 38px; 
}

/* Rating */
.product-rate-cover { margin-bottom: 15px; }
.stars { display: inline-block; }
.star { color: #d2d2d2; font-size: 14px; }
.star.filled { color: #fdb332; }
.text-muted { color: #B6B6B6; }
.font-small { font-size: 12px; }

/* Bottom Area */
.product-weight { font-size: 14px; color: #7E7E7E; margin-bottom: 10px; }
.product-price-bottom { display: flex; justify-content: space-between; align-items: center; }

/* Price */
.product-price span { font-size: 18px; font-weight: bold; color: #3bb77e; }
.product-price .old-price { font-size: 14px; color: #adadad; margin-left: 5px; text-decoration: line-through; font-weight: normal; }

/* ADD BUTTON STYLE */
.add-btn {
    background-color: #def9ec;
    color: #3bb77e;
    border: none;
    border-radius: 4px;
    padding: 6px 20px;
    font-size: 14px;
    font-weight: 700;
    cursor: pointer; /* No pointer cursor since it has no action */
    display: flex;
    align-items: center;
    transition: 0.2s;
}


/* Badges */
.badge { position: absolute; left: 20px; top: 20px; padding: 5px 10px; border-radius: 5px 20px 20px 5px; color: #fff; font-size: 13px; font-weight: 700; z-index: 2; }
.bg-discount { background-color: #3bb77e; }
.bg-hot { background-color: #f74b81; }
.bg-new { background-color: #3bb77e; }
.bg-sale { background-color: #fdc040; }
</style>