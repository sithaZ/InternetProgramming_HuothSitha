<template>
  <div class="category-card" :style="cardStyle">
    <div class="img-wrap">
      <img :src="image" :alt="title" />
    </div>

    <h3 class="title-bold">{{ title }}</h3>
    <span class="count">{{ productCount }} items</span>
  </div>
</template>

<script>
export default {
  name: "CategoryComponent",
  props: {
    title: String,
    productCount: Number,
    image: String,
    type: {
      type: String,
      default: "burger",
    }
  },
  computed: {
    cardStyle() {
      const typeStyles = [
        { type: "green", bg: "#f2fce4", border: "#81b13d" },
        { type: "orange", bg: "#FFFCEB", border: "#ffb967" },
        { type: "red", bg: "#FEEFEA", border: "#ff6b6b" },
        { type: "purple", bg: "#FFF3FF", border: "#d16aff"},
        { type: "yellow", bg: "#FFFCEB", border: "#FFD84D"},
        { type: "pink", bg: "#F3E8E8", border: "#0000FF"},
        { type: "soft-blue", bg: "#E7EAF3", border: "#f2fce4"},
      ]

      const selected = typeStyles.find(t => t.type === this.type)

      return {
        backgroundColor: selected?.bg || "#eee",
        border: `1px solid ${selected?.border || "#ccc"}`
      }
    }
  }
}
</script>

<style scoped>
.category-card {
  position: relative;
  background-color: #fff;
  border-radius: 15px;
  padding: 20px;
  width: 180px;
  text-align: center;
  transition: .2s ease;
  cursor: default;
  box-sizing: border-box;
  font-family: 'Quicksand', sans-serif;
}

.category-card:hover {
  box-shadow: 0 20px 40px rgba(0,0,0,.08);
  border-color: #3bb77e;
}

/* Image section */
.img-wrap {
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 12px;
}

.img-wrap img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

/* Title */
.title-bold {
  font-weight: 700;
  font-size: 15px;
  margin-bottom: 6px;
  color: #253d4e;
}

/* Items count */
.count {
  color: #7E7E7E;
  font-size: 13px;
}
</style>
