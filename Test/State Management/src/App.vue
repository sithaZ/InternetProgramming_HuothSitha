<template>
  <div id="app">
    <ComponentA :count="count" @updated="countUpdated" />
   
    <ComponentB :count="count" @updated="countUpdated" />
  </div>
</template>

<script>
import ComponentA from "@/components/ComponentA.vue";
import ComponentB from "@/components/ComponentB.vue";

export default {
  components: { ComponentA, ComponentB },
  data() { return { count: 0 } },
  methods: {
    countUpdated(newValue) {
      this.count = newValue;
    }
  }
};
</script>
