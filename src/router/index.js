import { createRouter, createWebHistory } from 'vue-router'
import About from '../components/About.vue';

import Contact from '../components/Contact.vue'
import HelloWorld from '@/components/HelloWorld.vue';
import Projects from '@/components/Projects.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'hello',
      component: HelloWorld
    },
    {
      path: '/About',
      name: 'about',
      component: About
    },
    {
      path: '/Contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/Projects',
      name: 'Project',
      component: Projects
    }
  ]
})

export default router
