import router from '/src/router/index.js';

export default {
    state: {

        users: [],

        user: null,

        loggedUser: localStorage.user ? JSON.parse(localStorage.user) : {},

        linkAPI: 'http://127.0.0.1:3000/',

        childs:[]
    },


    getters: {
        getLoggedUser: (state) => state.loggedUser,

        getUser: (state) => state.user,

        getUsers:(state)=> state.users,

        getChilds:(state)=>state.childs
    },


    mutations: {
        SET_LOGGED_USER(state, payload) {
            state.loggedUser = { token: payload.authKey, typeUser: payload.typeUser };
            localStorage.user = JSON.stringify(state.loggedUser);
        },

        SET_LOGOUT(state) {
            state.loggedUser = {};
            localStorage.user = JSON.stringify(state.loggedUser);
            router.push({ name: 'landing' });
        },

        SET_USER(state, payload) {
            state.user = payload.user
        },

        SET_USERS(state,payload){
            state.users=payload.users
        },

        SET_CHILDS(state,payload){
            state.childs=payload.children
        }

    },


    actions: {
        async login(context, data) {
            const response = await fetch(`${context.state.linkAPI}api/users/login`, {
                method: 'POST',
                mode: 'cors',
                cache: 'no-cache',
                credentials: 'same-origin',
                headers: {
                    'Content-Type': 'application/json'
                },
                redirect: 'follow',
                referrerPolicy: 'no-referrer',
                body: JSON.stringify(data)
            })
            if (response.ok) {
                context.commit("SET_LOGGED_USER", await response.json());
            }
            else {
                const err = await response.json()
                throw new Error(err.error)
            }
        },

        async register(context, data) {
            const response = await fetch(`${context.state.linkAPI}api/users`, {
                method: 'POST',
                mode: 'cors',
                cache: 'no-cache',
                credentials: 'same-origin',
                headers: {
                    'Content-Type': 'application/json'
                },
                redirect: 'follow',
                referrerPolicy: 'no-referrer',
                body: JSON.stringify(data)
            })
            if (!response.ok) {
                const err = await response.json()
                throw new Error(err.error)
            }
        },

        async findUser(context) {
            const response = await fetch(`${context.state.linkAPI}api/users/profile`, {
                method: 'GET',
                headers: { 'Authorization': 'Bearer ' + context.state.loggedUser.token, }
            })
            if (response.ok) {
                context.commit("SET_USER", await response.json());
            }
            else{
                context.commit('SET_LOGOUT')
            }
        },

        async findAllUsers(context,data){
            const response = await fetch(`${context.state.linkAPI}api/users`+data, {
                method: 'GET',
                headers: { 'Authorization': 'Bearer ' + context.state.loggedUser.token, }
            })
            if (response.ok) {
                context.commit("SET_USERS", await response.json());
            }
        },

        async addAdmin(context, data) {
            const response = await fetch(`${context.state.linkAPI}api/users/admin`, {
                method: 'POST',
                mode: 'cors',
                cache: 'no-cache',
                credentials: 'same-origin',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + context.state.loggedUser.token
                },
                redirect: 'follow',
                referrerPolicy: 'no-referrer',
                body: JSON.stringify(data)
            })
            if (!response.ok) {
                const err = await response.json()
                throw new Error(err.error)
            }
        },

        async unlockLock(context, data) {
            const response = await fetch(`${context.state.linkAPI}api/users/${data}`, {
                mode: 'cors', 
                cache: 'no-cache',
                credentials: 'same-origin',
                method: 'PATCH',
                headers: {'Authorization': 'Bearer '+context.state.loggedUser.token, 
                          'Content-Type': 'application/json'
                },
                redirect: 'follow',
                referrerPolicy: 'no-referrer',
            })
            if (!response.ok) {
                const err = await response.json()
                throw new Error(err.error)
            }
        },

        async deleteUser(context,data){
            const response = await fetch(`${context.state.linkAPI}api/users/${data}`, {
                mode: 'cors', 
                cache: 'no-cache',
                credentials: 'same-origin',
                method: 'DELETE',
                headers: {'Authorization': 'Bearer '+context.state.loggedUser.token, 
                          'Content-Type': 'application/json'
                },
                redirect: 'follow',
                referrerPolicy: 'no-referrer',
            })
            if (!response.ok) {
                const err = await response.json()
                throw new Error(err.error)
            }
        },

        async updateProfile(context, data) {
            const response = await fetch(`${context.state.linkAPI}api/users/profile`, {
                mode: 'cors', 
                cache: 'no-cache',
                credentials: 'same-origin',
                method: 'PATCH',
                headers: {'Authorization': 'Bearer '+context.state.loggedUser.token, 
                          'Content-Type': 'application/json'
                },
                redirect: 'follow',
                referrerPolicy: 'no-referrer',
                body: JSON.stringify(data)
            })
            if (!response.ok) {
                const err = await response.json()
                throw new Error(err.error)
            }
        },

        async findRelations(context){
            const response = await fetch(`${context.state.linkAPI}api/users/children`, {
                method: 'GET',
                headers: { 'Authorization': 'Bearer ' + context.state.loggedUser.token, }
            })
            if (response.ok) {
                context.commit("SET_CHILDS", await response.json());
            }
        },

        async createRelation(context,data){
            const response = await fetch(`${context.state.linkAPI}api/users/children`, {
                method: 'POST',
                mode: 'cors',
                cache: 'no-cache',
                credentials: 'same-origin',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + context.state.loggedUser.token
                },
                redirect: 'follow',
                referrerPolicy: 'no-referrer',
                body: JSON.stringify(data)
            })
            if (!response.ok) {
                const err = await response.json()
                throw new Error(err.error)
            }
        },

        async removeRelation(context,data){
            const response = await fetch(`${context.state.linkAPI}api/users/children/${data}`, {
               method: 'DELETE',
               headers: { 'Authorization': 'Bearer ' + context.state.loggedUser.token, }
            })
            if (!response.ok) {
                const err = await response.json()
                throw new Error(err.error)
            }
            
        }



    }
}