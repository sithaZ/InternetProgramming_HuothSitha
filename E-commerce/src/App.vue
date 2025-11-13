<template>
  <div>

 
  <div class="category-wrapper">
    <CategoryComponent title="Burger & Cake" :product-count="14" :image="burgerImage" type="green" />

    <CategoryComponent title="Peach" :product-count="13" :image="peachImage" type="orange" />

    <CategoryComponent title="Organic Kiwi" :product-count="15" :image="kiwiImage" type="green" />

    <CategoryComponent title="Apple" :product-count="15" :image="appleImage" type="red" />

    <CategoryComponent title="Snack" :product-count="12" :image="snackImage" type="orange" />

    <CategoryComponent title="Plum" :product-count="9" :image="plumImage" type="purple" />

    <CategoryComponent title="Veggie" :product-count="11" :image="veggieImage" type="green" />

    <CategoryComponent title="Headphone" :product-count="8" :image="headphoneImage" type="yellow" />

    <CategoryComponent title="Cake" :product-count="10" :image="cakeImage" type="green" />

    <CategoryComponent title="Orange" :product-count="14" :image="orangeImage" type="orange" />

   


  </div>
  <div class="promotion-row">
    <PromotionComponent title="Fresh Vegetable Everyday Fresh & clean with our products":image="onionImage" type="yellow" />
     <PromotionComponent title="Make your Breakfast Healthy and Easy" :image="strawberryShakeImage" type="pink" />
     <PromotionComponent title="The best organic Product online" :image="freshVeggieImage" type="soft-blue" />

  </div>
   </div>
</template>

<script>
import CategoryComponent from './components/CategoryComponent.vue'

import burgerImage from '@/assets/burger.png'
import peachImage from '@/assets/peach.png'
import kiwiImage from '@/assets/kiwis.png'
import appleImage from '@/assets/apple.png'
import snackImage from '@/assets/snack.png'
import plumImage from '@/assets/plum.png'
import veggieImage from '@/assets/veggie.png'
import headphoneImage from '@/assets/headphone.png'
import cakeImage from '@/assets/cake.png'
import orangeImage from '@/assets/orange.png'

import PromotionComponent from './components/PromotionComponent.vue'

import onionImage from '@/assets/onion.png'
import strawberryShakeImage from '@/assets/strawberryShake.png'
import freshVeggieImage from '@/assets/freshVeggie.jpg'

export default {
  name: 'App',
  components: { CategoryComponent, PromotionComponent },

  data() {
    return {
      burgerImage,
      peachImage,
      kiwiImage,
      appleImage,
      snackImage,
      plumImage,
      veggieImage,
      headphoneImage,
      cakeImage,
      orangeImage,
      onionImage,
      strawberryShakeImage,
      freshVeggieImage,
    }
  },
}
</script>

<style scoped>
.category-wrapper {
  display: flex;
  gap: 15px;
}
.categories-row {
  display: flex;
  gap: 15px;
}

.promotion-row {
  display: flex;
  gap: 20px;
  margin-top: 20px;
}

.promotion-row > * {
  flex: 10;          
  max-width: 100%;    
}

</style>
