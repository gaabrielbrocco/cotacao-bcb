import { createWebHistory, createRouter } from 'vue-router'

import Cotacao from "../cotacao/view/cotacao.vue"

const routes = [
  { path: '/', component: Cotacao },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router