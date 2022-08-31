import users from './users'

export default{
    state: {
        badges:[],

        linkAPI: 'http://127.0.0.1:3000/'
    },
  
  
    getters: {
        getBadges:(state)=>state.badges
    },
  
  
    mutations: {
        SET_BADGES(state,payload){
            state.badges=payload.badges
        }
    },
  
  
    actions: {
        async createBadge(context, data) {
            const response = await fetch(`${context.state.linkAPI}api/badges`, {
                method: 'POST',
                mode: 'cors',
                cache: 'no-cache',
                credentials: 'same-origin',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + users.state.loggedUser.token
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

        async getAllBadges(context,data) {
            const response = await fetch(`${context.state.linkAPI}api/badges`+data, {
                method: 'GET',
                headers: { 'Authorization': 'Bearer ' + users.state.loggedUser.token, }
            })
            if (response.ok) {
                context.commit("SET_BADGES", await response.json());
            }
        },

        async removeBadge(context,data){
            const response = await fetch(`${context.state.linkAPI}api/badges/${data}`, {
                mode: 'cors', 
                cache: 'no-cache',
                credentials: 'same-origin',
                method: 'DELETE',
                headers: {'Authorization': 'Bearer '+users.state.loggedUser.token, 
                          'Content-Type': 'application/json'
                },
                redirect: 'follow',
                referrerPolicy: 'no-referrer',
            })
            if (!response.ok) {
                const err = await response.json()
                throw new Error(err.error)
            }
        }
    }
}