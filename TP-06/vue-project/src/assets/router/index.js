import { createRouter, createWebHistory } from 'vue-router'

// navi to each page
const Page1 = { template: '<div><h2>Welcome to Page 1</h2><p>This is Page 1 content.</p></div>' }
const Page2 = { template: '<div><h2>Welcome to Page 2</h2><p>This is Page 2 content.</p></div>' }
const Page3 = { template: '<div><h2>Welcome to Page 3</h2><p>This is Page 3 content.</p></div>' }   

// router 
const routes = createRouter({
      history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Page1
    },
    {
      path: '/page2',
      name: 'page2',
      component: Page2
    },
    {
      path: '/page3',
      name: 'page3',
      component: Page3
    }
  ]
})  
export default routes