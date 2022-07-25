import Vue from 'vue'
import VueRouter from 'vue-router'
import LandingView from '../views/LandingView.vue'
import HomeView from '../views/HomeView.vue'
import ActivitiesView from '../views/ActivitiesView.vue'
import ActivityView from '../views/ActivityView.vue'
import ProfileView from '../views/ProfileView.vue'
import VirtualSchool from '../views/VirtualSchool.vue'
import ExtraActivities from '../views/ExtraActivities.vue'
import ManageView from '../views/ManageView.vue'

import store from "../store/index.js";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'landing',
    component: LandingView,
    meta: {
      notRequiresAuth: true,
    }
  },
  {
    path: "/home",
    name: "home",
    component: HomeView,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/activities",
    name: "activities",
    component: ActivitiesView,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/activities/:id",
    name: "activity",
    component: ActivityView,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/profile",
    name: "profile",
    component: ProfileView,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/school",
    name: "virtualSchool",
    component: VirtualSchool,
    meta: {
      requiresAuth: true,
      requiresBeTeacher:true
    },
  },
  {
    path: "/extra",
    name: "extraActivities",
    component: ExtraActivities,
    meta: {
      requiresAuth: true,
      RequiresBeTutorOrTeacher:true
    },
  },
  {
    path: "/manage",
    name: "manage",
    component: ManageView,
    meta: {
      requiresAuth: true,
      RequiresBeAdmin:true
    },
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !store.getters.getLoggedUser.token) {
    next({ name: "landing" });}
  else if(to.meta.notRequiresAuth && store.getters.getLoggedUser.token){
    next({ name: "home" });
  }
  else if(to.meta.RequiresBeAdmin && store.getters.getLoggedUser.typeUser!="Administrador"){
    next({ name: "home" });
  }
  else if(to.meta.RequiresBeTutorOrTeacher && store.getters.getLoggedUser.typeUser!="Tutor" && store.getters.getLoggedUser.typeUser!="Professor"){
    next({ name: "home" });
  }
  else if(to.meta.requiresBeTeacher && store.getters.getLoggedUser.typeUser!="Professor"){
    next({ name: "home" });
  }
  else {
    next();
  }
});

export default router
