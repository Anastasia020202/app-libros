import { createRouter, createWebHistory } from 'vue-router'
import AddBook from '../views/AddBook.vue'
import BookList from '../views/BookList.vue'

const routes = [
  { path: '/', redirect: '/libros' },
  { path: '/libros', name: 'BookList', component: BookList },
  { path: '/anadir', name: 'AddBook', component: AddBook },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
