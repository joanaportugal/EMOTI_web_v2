import users from './users'

export default{
    state: {
        emotions:[],

        linkAPI: 'http://127.0.0.1:3000/'
    },
  
  
    getters: {
        getEmotions:(state)=>state.emotions
    },
  
  
    mutations: {
        SET_EMOTIONS(state,payload){
            state.emotions=payload.emotions
        }
    },
  
  
    actions: {
        async getAllEmotions(context) {
            const response = await fetch(`${context.state.linkAPI}api/emotions`, {
                method: 'GET',
                headers: { 'Authorization': 'Bearer ' + users.state.loggedUser.token, }
            })
            if (response.ok) {
                context.commit("SET_EMOTIONS", await response.json());
            }
        },

        async addEmotion(context, data) {
            const response = await fetch(`${context.state.linkAPI}api/emotions`, {
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

        async removeEmotion(context,data){
            const response = await fetch(`${context.state.linkAPI}api/emotions/${data}`, {
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