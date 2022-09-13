import Vue from 'vue'
import Vuex from 'vuex'

import users from "./modules/users";
import emotions from "./modules/emotions";
import activities from "./modules/activities";
import badges from "./modules/badges";
import teams from "./modules/teams";
import search from './modules/search';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    users,
    emotions,
    badges,
    activities,
    teams,
    search
  }
})
