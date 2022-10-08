import router from '/src/router/index.js';

export default {
    state: {

        users: [],

        user: null,

        loggedUser: localStorage.user ? JSON.parse(localStorage.user) : {},

        linkAPI: 'https://newemotiapi.herokuapp.com/',

        childs: [],

        historyUser: [],
    },


    getters: {
        getLoggedUser: (state) => state.loggedUser,

        getUser: (state) => state.user,

        getUsers: (state) => state.users,

        getChilds: (state) => state.childs,

        getHistoryUser: (state) => state.historyUser
    },


    mutations: {
        SET_LOGGED_USER(state, payload) {
            state.loggedUser = {
                token: payload.authKey,
                typeUser: payload.typeUser
            };
            localStorage.user = JSON.stringify(state.loggedUser);
        },

        SET_LOGOUT(state) {
            state.loggedUser = {};
            localStorage.user = JSON.stringify(state.loggedUser);
            router.push({
                name: 'Olá!'
            });
        },

        SET_USER(state, payload) {
            state.user = payload.user
        },

        SET_USERS(state, payload) {
            state.users = payload.users
        },

        SET_CHILDS(state, payload) {
            state.childs = payload.children
        },

        SET_HISTORY_USER(state, payload) {
            if (state.user.typeUser == 'Criança') {
                state.historyUser = {
                    history: payload.history,
                    emotions: payload.emotions
                }
            } else {
                state.historyUser = payload.list
            }

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
            } else {
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
                headers: {
                    'Authorization': 'Bearer ' + context.state.loggedUser.token,
                }
            })
            if (response.ok) {
                context.commit("SET_USER", await response.json());
            } else {
                context.commit('SET_LOGOUT')
            }
        },

        async findAllUsers(context, data) {
            const response = await fetch(`${context.state.linkAPI}api/users` + data, {
                method: 'GET',
                headers: {
                    'Authorization': 'Bearer ' + context.state.loggedUser.token,
                }
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
                headers: {
                    'Authorization': 'Bearer ' + context.state.loggedUser.token,
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

        async deleteUser(context, data) {
            const response = await fetch(`${context.state.linkAPI}api/users/${data}`, {
                mode: 'cors',
                cache: 'no-cache',
                credentials: 'same-origin',
                method: 'DELETE',
                headers: {
                    'Authorization': 'Bearer ' + context.state.loggedUser.token,
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
                headers: {
                    'Authorization': 'Bearer ' + context.state.loggedUser.token,
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

        async findRelations(context, data) {
            const response = await fetch(`${context.state.linkAPI}api/users/children` + data, {
                method: 'GET',
                headers: {
                    'Authorization': 'Bearer ' + context.state.loggedUser.token,
                }
            })
            if (response.ok) {
                context.commit("SET_CHILDS", await response.json());
            }
        },

        async createRelation(context, data) {
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

        async removeRelation(context, data) {
            const response = await fetch(`${context.state.linkAPI}api/users/children/${data}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': 'Bearer ' + context.state.loggedUser.token,
                }
            })
            if (!response.ok) {
                const err = await response.json()
                throw new Error(err.error)
            }

        },

        async deleteNotification(context, data) {
            const response = await fetch(`${context.state.linkAPI}api/users/notifications/${data}`, {
                mode: 'cors',
                cache: 'no-cache',
                credentials: 'same-origin',
                method: 'DELETE',
                headers: {
                    'Authorization': 'Bearer ' + context.state.loggedUser.token,
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

        async createNofication(context, data) {
            const response = await fetch(`${context.state.linkAPI}api/users/notifications`, {
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

        async findHistoryUser(context) {
            const response = await fetch(`${context.state.linkAPI}api/users/history`, {
                method: 'GET',
                headers: {
                    'Authorization': 'Bearer ' + context.state.loggedUser.token,
                }
            })
            if (response.ok) {
                context.commit("SET_HISTORY_USER", await response.json());
            }
        },



    }
}