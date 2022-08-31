import users from './users'

export default{
    state: {
        activities:[],

        linkAPI: 'http://127.0.0.1:3000/',
    },
  
  
    getters: {
        getActivities:(state)=>state.activities
    },
  
  
    mutations: {
        SET_ACTIVITIES(state,payload){
            state.activities=payload.activities;
        }
    },
  
  
    actions: {
        async findActivities(context,data){
            const response = await fetch(`${context.state.linkAPI}api/activities${data}`, {
                method: 'GET',
                headers: { 'Authorization': 'Bearer ' + users.state.loggedUser.token, }
            })
            if (response.ok) {
                context.commit("SET_ACTIVITIES", await response.json());
            }
        },

        async createActivity(context, data) {
            const response = await fetch(`${context.state.linkAPI}api/activities`, {
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

        async deleteActivity(context,data){
            const response = await fetch(`${context.state.linkAPI}api/activities/${data}`, {
               method: 'DELETE',
               headers: { 'Authorization': 'Bearer ' + users.state.loggedUser.token, }
            })
            if (!response.ok) {
                const err = await response.json()
                throw new Error(err.error)
            }
            
        },

        async updateActivity(context, data) {
            const response = await fetch(`${context.state.linkAPI}api/activities/${data[0]}`, {
                method: 'PATCH',
                mode: 'cors',
                cache: 'no-cache',
                credentials: 'same-origin',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + users.state.loggedUser.token
                },
                redirect: 'follow',
                referrerPolicy: 'no-referrer',
                body: JSON.stringify(data[1])
            })
            if (!response.ok) {
                const err = await response.json()
                throw new Error(err.error)
            }
        },

    }
}