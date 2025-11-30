<template>
  <div class="product-gallery">
    <div class="main-image-wrap">
      <span v-if="badge" class="badge" :class="badgeClass">{{ badge }}</span>
      <img :src="currentImage" alt="Product Image" class="main-img" />
      <div class="zoom-icon">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          <line x1="11" y1="8" x2="11" y2="14"></line>
          <line x1="8" y1="11" x2="14" y2="11"></line>
        </svg>
      </div>
    </div>

    <div class="thumbnail-slider">
      <button class="slider-btn prev">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M15 18l-6-6 6-6"/></svg>
      </button>
      
      <div class="thumbnails-track">
        <div 
          v-for="(img, index) in images" 
          :key="index" 
          class="thumb-item" 
          :class="{ active: currentImage === img }"
          @click="currentImage = img"
        >
          <img :src="img" alt="Thumbnail" />
        </div>
      </div>

      <button class="slider-btn next">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg>
      </button>
    </div>
  </div>
</template>

<script>
import { ref, watch } from 'vue'

export default {
  name: 'ProductImageComponent',
  props: {
    mainImage: { type: String, required: true },
    badge: { type: String, default: null },
    badgeType: { type: String, default: 'discount' }
  },
  setup(props) {
    const currentImage = ref(props.mainImage)
    
   
    const images = ref([
      props.mainImage,
      
      props.mainImage, 
      props.mainImage,
      props.mainImage
    ])

    // Update if prop changes
    watch(() => props.mainImage, (newVal) => {
      currentImage.value = newVal
      images.value = [newVal, newVal, newVal, newVal]
    })

    return {
      currentImage,
      images
    }
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
.product-gallery {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.main-image-wrap {
  border: 1px solid #ececec;
  border-radius: 15px;
  overflow: hidden;
  position: relative;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
}

.main-img {
  max-width: 90%;
  max-height: 90%;
  object-fit: contain;
}

.zoom-icon {
  position: absolute;
  top: 20px;
  right: 20px;
  color: #7E7E7E;
  cursor: pointer;
}

.thumbnail-slider {
  display: flex;
  align-items: center;
  gap: 10px;
  position: relative;
}

.thumbnails-track {
  display: flex;
  gap: 15px;
  overflow: hidden;
  flex: 1;
}

.thumb-item {
  width: 80px;
  height: 80px;
  border: 1px solid #ececec;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
}

.thumb-item.active, .thumb-item:hover {
  border-color: #3BB77E;
}

.thumb-item img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 5px;
}

.slider-btn {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #3BB77E;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.slider-btn:hover {
  background-color: #29a56a;
}

.badge { 
  position: absolute; 
  left: 20px; 
  top: 20px; 
  padding: 5px 15px; 
  border-radius: 20px; 
  color: #fff; 
  font-size: 14px; 
  font-weight: 700; 
  z-index: 2; 
}
.bg-discount { background-color: #3bb77e; }
.bg-hot { background-color: #f74b81; }
.bg-new { background-color: #3bb77e; }
.bg-sale { background-color: #fdc040; }
</style>