import { createRouter, createWebHistory } from 'vue-router'
import PageOne from '../../components/PageOne.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/page_1/sections/:sectionId',
      name: 'page-one-section',
      component: PageOne,
      props: (route) => ({ sectionId: route.params.sectionId, pageTitle: 'Page 1' }),
    },
    {
      path: '/',
      redirect: '/page_1/sections/1',
    },

    {
      path: '/page2/sections/:sectionId',
      name: 'page-two-section',
      component: PageOne,

      props: (route) => ({ sectionId: route.params.sectionId, pageTitle: 'Page 2' }),
    },
    {
      path: '/page2',
      redirect: '/page2/sections/1',
    },

    {
      path: '/page3/sections/:sectionId',
      name: 'page-three-section',
      component: PageOne,
      props: (route) => ({ sectionId: route.params.sectionId, pageTitle: 'Page 3' }),
    },
    {
      path: '/page3',
      redirect: '/page3/sections/1',
    },
  ],
})

export default router
