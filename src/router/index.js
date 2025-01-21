import Article from '@/views/article/Article.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'article',
    component: Article,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
