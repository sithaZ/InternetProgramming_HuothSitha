<template>
  <div class="page-content">
    <h2>Welcome to {{ pageTitle }}</h2>
    
    <div v-if="pageTitle === 'Page 1'">
      <div class="input-group">
        <label>Message: </label>
        <input v-model="store.messageFromPage1" type="text" placeholder="Type something..." />
      </div>
    </div>

    <div v-if="pageTitle === 'Page 2'">
      <p class="display-msg">Message from Page 1: <strong>{{ store.messageFromPage1 }}</strong></p>
      
      <div class="input-group">
        <label>Message: </label>
        <input v-model="store.messageFromPage2" type="text" />
      </div>
    </div>

    <div class="dashed-line">------------------------------------</div>
    
    <h3>This is Section {{ sectionId }} of {{ pageTitle }}</h3>
    <p>{{ currentContent }}</p>

    <div class="input-group" style="margin-top: 20px;">
      <label>Section Message: </label>
      <input v-model="sectionMessage" type="text" placeholder="123" />
    </div>

  </div>
</template>

<script>// 1. Import the store
import { store } from '../store.js'

export default {
  name: 'PageContent',
  props: ['sectionId', 'pageTitle'], 
  data() {
    return {
      store, 
      sectionMessage: '', 
      contentMap: {
        '1': 'Content for section one.',
        '2': 'Content for section two.',
        '3': 'Content for section three.',
        '4': 'Content for section four.'
      }
    }
  },
  computed: {
    currentContent() {
      return this.contentMap[this.sectionId] || 'Content not found'
    }
  }
}
</script>

<style scoped>
.page-content { padding: 20px; text-align: center; }
.dashed-line { margin: 20px 0; font-weight: bold; }
.input-group { margin: 10px 0; font-size: 1.2rem; }
input { padding: 5px; font-size: 1rem; margin-left: 10px; }
.display-msg { font-size: 1.2rem; color: #333; margin-bottom: 20px; }
</style>