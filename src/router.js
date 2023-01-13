import { createRouter, createWebHistory } from 'vue-router'
import TheWelcome from './components/TheWelcome.vue'
import TheContracts from './components/TheContracts.vue'
import TheRecipes from './components/TheRecipes.vue'
import TheNews from './components/TheNews.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: TheWelcome,
    },
    {
      path: '/contrats',
      component: TheContracts
    },
    {
      path: '/recettes',
      component: TheRecipes
    },
    {
      path: '/actualites',
      component: TheNews
    }
  ]
})