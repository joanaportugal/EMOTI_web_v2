import Vue from 'vue'
import VueRouter from 'vue-router'
import LandingView from '../views/LandingView.vue'
import HomeView from '../views/HomeView.vue'
import ActivitiesView from '../views/ActivitiesView.vue'
import ActivityView from '../views/ActivityView.vue'
import ProfileView from '../views/ProfileView.vue'
import VirtualSchool from '../views/VirtualSchool.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'landing',
    component: LandingView,
    meta: {
      notRequiresAuth:true,
    }
  },
  {
    path: "/home",
    name: "home",
    component: HomeView,
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: "/activities",
    name: "activities",
    component: ActivitiesView,
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: "/activities/:id",
    name: "activity",
    component: ActivityView,
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: "/profile",
    name: "profile",
    component: ProfileView,
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: "/school",
    name: "virtualSchool",
    component: VirtualSchool,
    meta: {
      requiresAuth: false,
    },
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
