<template>
  <div class="container">
    <h2>Component B</h2>
    <h3>Count: {{ count }}</h3>
    <button @click="decrease">Decrease</button>
  </div>
</template>

<script>
export default {
  name: 'ComponentB',
  props: {
    count: {
      type: Number,
      required: true
    }
  },
  methods: {
    decrease() {
      const newValue = this.count - 1
      this.$emit('updated', newValue)
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ccc;
  width: 200px;
  padding: 10px;
  border-radius: 10px;
}
</style>
