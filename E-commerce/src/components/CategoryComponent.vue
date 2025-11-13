<template>
  <div class="container" :style="cardStyle">
    <img :src="image" :alt="title" />
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

      if (!selected) {
        return {
          backgroundColor: "#eee",
          borderColor: "#aaa"
        }
      }

      return {
        backgroundColor: selected.bg,
        borderColor: selected.border
      }
    }
  }
}
</script>

<style scoped>
.container {
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  border: 1px solid;
  width: 150px;
}


.title-bold {
  font-weight: bold;
  font-size: 16px;
  margin: 10px 0 4px;
  text-align: center;
}

img {
  max-width: 100%;
  height: 80px;
  object-fit: contain;
}

.count {
  color: #818080;
  font-size: 12px;
}
</style>
