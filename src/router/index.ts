import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CvView from '../views/CvView.vue'
import ProjectsView from '../views/ProjectsView.vue'

const routes: Array<RouteRecordRaw> = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/cv', name: 'cv', component: CvView },
  { path: '/projects', name: 'projects', component: ProjectsView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
