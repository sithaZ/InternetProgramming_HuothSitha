<template>
  <div class="promotion" :style="cardStyle">
    <div class="promo-content">

      <div class="text">
        <h3 class="title">{{ title }}</h3>
        <p v-if="subtitle" class="subtitle">{{ subtitle }}</p>

        <button class="cta">
          <span>{{ buttonText }}</span>
          <svg class="arrow" viewBox="0 0 24 24">
            <path d="M5 12h14M13 5l7 7-7 7"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round" />
          </svg>
        </button>
      </div>

      <div class="image-wrap">
        <img :src="image" :alt="title" />
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "PromotionComponent",
  props: {
    title: String,
    subtitle: String,
    buttonText: {
      type: String,
      default: "Shop Now"
    },
    image: String,
    type: {
      type: String,
      default: "soft-blue"
    },
  },
  computed: {
    cardStyle() {
      const typeStyles = [
        { type: "yellow", bg: "#FFFCEB", border: "#FFD84D" },
        { type: "orange", bg: "#FFFCEB", border: "#ffb967" },
        { type: "soft-blue", bg: "#E7EAF3", border: "#dfe7f3" },
        { type: "pink", bg: "#F3E8E8", border: "#f6c6d9" }
      ];

      const selected = typeStyles.find(t => t.type === this.type);

      return {
        backgroundColor: selected?.bg || "#fff",
        border: `1px solid ${selected?.border || "#ddd"}`,
      };
    }
  }
};
</script>

<style scoped>
.promotion {
  border-radius: 12px;
  padding: 20px;
  display: flex;
  height: 200px;
  overflow: hidden;
  position: relative;
}

.promo-content {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  gap: 20px;
  position: relative;
  z-index: 1;
}

.text {
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-self: flex-start;
  flex-shrink: 0;
  position: relative;
  z-index: 2;
  width: 50%;
}

.title {
  font-size: 20px;
  font-weight: 700;
  margin: 0;
  line-height: 1.2;
}


.cta {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 14px;
  border-radius: 8px;
  border: none;
  background-color: #2AA76B;
  color: #fff;
  font-weight: 600;
  cursor: pointer; 
  width: fit-content;
}

.arrow {
  width: 18px;
  height: 18px;
}

.image-wrap {
  position: absolute;
  right: 0;
  bottom: 0;
  height: 180px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
}

.image-wrap img {
  display: block;
  max-height: 180px;
  width: auto;
  object-fit: contain;
}

</style>