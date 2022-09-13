import users from './users'

export default{
    state: {
        activities:[],

        topActivities:[],

        visibility:[],

        linkAPI: 'http://127.0.0.1:3000/',
    },
  
  
    getters: {
        getActivities:(state)=>state.activities,

        getTopActivities:(state)=>state.topActivities,

        getVisibility:(state)=>state.visibility
    },
  
  
    mutations: {
        SET_ACTIVITIES(state,payload){
            state.activities=payload.activities;
        },

        SET_TOP_ACTIVITIES(state,payload){
            state.topActivities=payload.activities
        },

        SET_VISIBILITY(state,payload){
            state.visibility=payload.children
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

        async suggestActivity(context, data) {
            const response = await fetch(`${context.state.linkAPI}api/activities/${data[0]}/children`, {
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

        async findTopActivities(context){
            const response = await fetch(`${context.state.linkAPI}api/activities/top`, {
                method: 'GET',
                headers: { 'Authorization': 'Bearer ' + users.state.loggedUser.token, }
            })
            if (response.ok) {
                context.commit("SET_TOP_ACTIVITIES", await response.json());
            }
        },

        async acceptActivity(context, data) {
            const response = await fetch(`${context.state.linkAPI}api/activities/${data}/permission`, {
                method: 'PATCH',
                mode: 'cors',
                cache: 'no-cache',
                credentials: 'same-origin',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + users.state.loggedUser.token
                },
                redirect: 'follow',
                referrerPolicy: 'no-referrer'
            })
            if (!response.ok) {
                const err = await response.json()
                throw new Error(err.error)
            }
        },

        async deleteActivityExtra(context,data){
            const response = await fetch(`${context.state.linkAPI}api/activities/${data}/permission`, {
               method: 'DELETE',
               headers: { 'Authorization': 'Bearer ' + users.state.loggedUser.token, }
            })
            if (!response.ok) {
                const err = await response.json()
                throw new Error(err.error)
            }
            
        },

        async findVisibility(context,data){
            const response = await fetch(`${context.state.linkAPI}api/activities/${data}/children`, {
                method: 'GET',
                headers: { 'Authorization': 'Bearer ' + users.state.loggedUser.token, }
            })
            if (response.ok) {
                context.commit("SET_VISIBILITY", await response.json());
            }
        },

        async giveVisiblity(context, data) {
            const response = await fetch(`${context.state.linkAPI}api/activities/${data[0]}/children`, {
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
                body: JSON.stringify(data[1])
            })
            if (!response.ok) {
                const err = await response.json()
                throw new Error(err.error)
            }
        },

        async removeVisibility(context,data){
            const response = await fetch(`${context.state.linkAPI}api/activities/${data[0]}/children/${data[1]}`, {
               method: 'PATCH',
               headers: { 'Authorization': 'Bearer ' + users.state.loggedUser.token, }
            })
            if (!response.ok) {
                const err = await response.json()
                throw new Error(err.error)
            }
            
        },



    }
}