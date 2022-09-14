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
import Error from '../views/ErrorView.vue'

import store from "../store/index.js";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Olá!',
    component: LandingView,
    meta: {
      notRequiresAuth: true,
    }
  },
  {
    path: "/home",
    name: "Página Principal",
    component: HomeView,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/activities",
    name: "Atividades",
    component: ActivitiesView,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/activities/:id",
    name: "Atividade",
    component: ActivityView,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/profile",
    name: "Perfil",
    component: ProfileView,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/school",
    name: "Escola Virtual",
    component: VirtualSchool,
    meta: {
      requiresAuth: true,
      requiresBeTeacher:true
    },
  },
  {
    path: "/extra",
    name: "Atividades Extras",
    component: ExtraActivities,
    meta: {
      requiresAuth: true,
      RequiresBeTutorOrTeacher:true
    },
  },
  {
    path: "/manage",
    name: "Gerir",
    component: ManageView,
    meta: {
      requiresAuth: true,
      RequiresBeAdmin:true
    },
  },
  {
    path:'/twitter',
    name: "Twitter",
    beforeEnter() {
      window.open('https://www.twitter.com/', '_blank')
    },
    meta: {
      requiresAuth: true,
    }
  },
  {
    path:'/facebook',
    name: "Facebook",
    beforeEnter() {
      window.open('https://www.facebook.com/', '_blank')
    },
    meta: {
      requiresAuth: true,
    }
  },
  {
    path:'/instagram',
    name: "Instagram",
    beforeEnter() {
      window.open('https://www.instagram.com/', '_blank')
    },
    meta: {
      requiresAuth: true,
    }
  },
  {
    path:'/youtube',
    name: "Youtube",
    beforeEnter() {
      window.open('https://www.youtube.com/', '_blank')
    },
    meta: {
      requiresAuth: true,
    }
  },
  {
    path:'/linkedin',
    name: "Linkedin",
    beforeEnter() {
      window.open('https://www.linkedin.com/', '_blank')
    },
    meta: {
      requiresAuth: true,
    }
  },
  {
		path: '*',
		name: 'Erro 404',
		component: Error,
	},
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !store.getters.getLoggedUser.token) {
    next({ name: "Olá!" });}
  else if(to.meta.notRequiresAuth && store.getters.getLoggedUser.token){
    next({ name: "Página Principal" });
  }
  else if(to.meta.RequiresBeAdmin && store.getters.getLoggedUser.typeUser!="Administrador"){
    next({ name: "Página Principal" });
  }
  else if(to.meta.RequiresBeTutorOrTeacher && store.getters.getLoggedUser.typeUser!="Tutor" && store.getters.getLoggedUser.typeUser!="Professor"){
    next({ name: "Página Principal" });
  }
  else if(to.meta.requiresBeTeacher && store.getters.getLoggedUser.typeUser!="Professor"){
    next({ name: "Página Principal" });
  }
  else {
    next();
  }
});

router.afterEach((to) => {

  Vue.nextTick(() => {
      document.title = 'EMOTI: '+to.name;
  });
});

export default router
