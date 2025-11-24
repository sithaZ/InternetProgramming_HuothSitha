import { defineStore } from 'pinia'
import axios from 'axios'

export const useProductStore = defineStore('product', {
  state: () => ({
    products: [],
    categories: [],
    groups: [],
    promotions: [],

    filterOptions: [
      "All", "Milks & Dairies", "Coffees & Teas", "Pet Foods", "Meats", "Vegetables", "Fruits"
    ],
    
    sections: [
      { id: 1, name: "Featured Categories", activeFilter: "All" }, 
      { id: 2, name: "Popular Products", activeFilter: "All" }
    ]
  }),

  getters: {
    filteredProducts: (state) => {
      // Safety check
      if (!state.sections || !state.sections[1]) return state.products;

      const activeFilter = state.sections[1].activeFilter;
      
      if (activeFilter === "All") {
        return state.products;
      }
      
      return state.products.filter((product: any) => product.category === activeFilter);
    }
  },

  actions: {
    setSectionFilter(sectionIndex: number, filterName: string) {
      if (this.sections[sectionIndex]) {
        this.sections[sectionIndex].activeFilter = filterName;
      }
    },

    async fetchCategories() {
      try {
        const res = await axios.get('http://localhost:3000/api/categories')
        this.categories = res.data
        return res.data
      } catch (err) {
        console.error('Failed to fetch categories', err)
      }
    },

    async fetchPromotions() {
      try {
        const res = await axios.get('http://localhost:3000/api/promotions')
        this.promotions = res.data
        return res.data
      } catch (err) {
        console.error('Failed to fetch promotions', err)
      }
    },

    async fetchProducts() {
      try {
        const res = await axios.get('http://localhost:3000/api/products')
        
        this.products = res.data.map((item: any) => {
          // --- 1. IMAGE CLEANING ---
          let cleanImage = '';
          try {
            if (item.image && typeof item.image === 'string' && item.image.startsWith('[')) {
               const parsed = JSON.parse(item.image);
               cleanImage = parsed[0]; 
            } else {
               cleanImage = item.image;
            }
          } catch (e) {
            cleanImage = item.image;
          }

          if (cleanImage) {
            cleanImage = cleanImage.replace(/\\/g, '/');
          }

         
          let badge = null;
          let badgeType = null;
          
          const promoPercent = Number(item.promotionAsPercentage || 0);
          const countSold = Number(item.countSold || 0);
          const currentPrice = Number(item.price || 0);
          
          
          
          let originalPrice = 0;
          if (promoPercent > 0) {
             originalPrice = currentPrice / (1 - (promoPercent / 100));
          } else {
             originalPrice = Number(item.originalPrice || 0);
          }

          
          if (promoPercent >= 15) {
             badge = `-${promoPercent}%`;
             badgeType = 'discount';
          }
         
          else if (countSold >= 200) {
             badge = 'Hot';
             badgeType = 'hot';
          }
          
          else if (
            (promoPercent > 0 && promoPercent < 15) ||
            (countSold >= 100 && countSold < 200)
          ) {
             badge = 'Sale';
             badgeType = 'sale';
          }

          
          return {
            ...item,
            image: cleanImage, 
            
           
            category: item.category || item.group || "General",
            weight: item.weight || item.size || "1kg",
            
            rating: Number(item.rating || 0),
            price: currentPrice,
            originalPrice: originalPrice,
            
           
            badge: badge,
            badgeType: badgeType
          }
        })

        console.log(' Products Cleaned & Loaded:', this.products)
        return this.products
      } catch (err) {
        console.error('Failed to fetch products', err)
        throw err
      }
    }
  }
})