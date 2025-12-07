<template>
  <aside>
    <div class="menu-item-header">Menu</div>
    <div @click="toSection(1)" class="menu-item" :class="{ active: isActive(1) }">Section 1</div>
    <div @click="toSection(2)" class="menu-item" :class="{ active: isActive(2) }">Section 2</div>
    <div @click="toSection(3)" class="menu-item" :class="{ active: isActive(3) }">Section 3</div>
    <div @click="toSection(4)" class="menu-item" :class="{ active: isActive(4) }">Section 4</div>
  </aside>
</template>

<script>
export default {
  name: 'SidebarMenu',
  computed: {
    
    currentPageBase() {
      const path = this.$route.path
      if (path.includes('/page2')) return '/page2'
      if (path.includes('/page3')) return '/page3'
      return '/page_1' 
    }
  },
  methods: {
    toSection(sectionId) {

      this.$router.push(`${this.currentPageBase}/sections/${sectionId}`)
    },
    isActive(sectionId) {
      return Number(this.$route.params.sectionId) === sectionId
    },
  },
}
</script>

<style scoped>

.menu-item, .menu-item-header { border-bottom: 1px solid black; padding: 15px; cursor: pointer; }
.menu-item-header { font-weight: bold; background-color: #f0f0f0; cursor: default; }
.menu-item:hover { background-color: azure; }
.menu-item.active { background-color: #dbeaff; border-left: 5px solid blue; }
</style>