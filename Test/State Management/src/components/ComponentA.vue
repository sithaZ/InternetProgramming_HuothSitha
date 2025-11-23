<template>
  <div class="container">
    <h2>Component A</h2>
    <h3>Count: {{ count }}</h3>
    <button @click="increase">Increase</button>
  </div>
</template>

<script>
export default {
  name: 'ComponentA',
  props: {
    count: {
      type: Number,
      required: true
    }
  },
  methods: {
    increase() {
      const newValue = this.count + 1
      this.$emit('updated', newValue) // emit value to parent
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
