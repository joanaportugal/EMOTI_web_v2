import users from './users'

export default {
    state: {
        activitiesSearch: [],

        studentsSearch: [],

        usersSearch: [],

        childsSearch: [],

        linkAPI: 'https://newemotiapi.herokuapp.com/',
    },


    getters: {
        getActivitiesSearch: (state) => state.activitiesSearch,

        getUsersSearch: (state) => state.usersSearch,

        getStudentsSearch: (state) => state.studentsSearch,

        getChildsSearch: (state) => state.childsSearch
    },


    mutations: {
        SET_ACTIVITIES_SEARCH(state, payload) {
            state.activitiesSearch = payload.activities;
        },

        SET_USERS_SEARCH(state, payload) {
            state.usersSearch = payload.users;
        },

        SET_STUDENTS_SEARCH(state, payload) {
            state.studentsSearch = payload.students;
        },

        SET_CHILDS_SEARCH(state, payload) {
            state.childsSearch = payload.children;
        }
    },


    actions: {
        async findActivities_Search(context, data) {
            const response = await fetch(`${context.state.linkAPI}api/activities${data}`, {
                method: 'GET',
                headers: {
                    'Authorization': 'Bearer ' + users.state.loggedUser.token,
                }
            })
            if (response.ok) {
                context.commit("SET_ACTIVITIES_SEARCH", await response.json());
            }
        },

        async findAllUsers_Search(context, data) {
            const response = await fetch(`${context.state.linkAPI}api/users` + data, {
                method: 'GET',
                headers: {
                    'Authorization': 'Bearer ' + users.state.loggedUser.token,
                }
            })
            if (response.ok) {
                context.commit("SET_USERS_SEARCH", await response.json());
            }
        },

        async findAllStudents_Search(context, data) {
            const response = await fetch(`${context.state.linkAPI}api/classes/children` + data, {
                method: 'GET',
                headers: {
                    'Authorization': 'Bearer ' + users.state.loggedUser.token,
                }
            })
            if (response.ok) {
                context.commit("SET_STUDENTS_SEARCH", await response.json());
            }
        },

        async findRelations_Search(context, data) {
            const response = await fetch(`${context.state.linkAPI}api/users/children` + data, {
                method: 'GET',
                headers: {
                    'Authorization': 'Bearer ' + users.state.loggedUser.token,
                }
            })
            if (response.ok) {
                context.commit("SET_CHILDS_SEARCH", await response.json());
            }
        },


    }
}