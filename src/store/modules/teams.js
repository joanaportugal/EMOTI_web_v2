import users from "./users";

export default {
  state: {
    students: [],

    teams: [],

    kid: {},

    linkAPI: "https://emotiapiv2-production.up.railway.app/",

    requests: [],

    childClasses: [],
  },

  getters: {
    getStudents: (state) => state.students,

    getTeams: (state) => state.teams,

    getKid: (state) => state.kid,

    getRequests: (state) => state.requests,

    getChildClasses: (state) => state.childClasses,
  },

  mutations: {
    SET_TEAMS(state, payload) {
      state.teams = payload.classes;
    },

    SET_STUDENTS(state, payload) {
      state.students = payload.students;
    },

    SET_KID(state, payload) {
      state.kid = payload.child;
    },

    SET_REQUESTS(state, payload) {
      state.requests = payload.requests;
    },

    SET_CHILDCLASSES(state, payload) {
      state.childClasses = payload.class;
    },
  },

  actions: {
    async findTeams(context, data) {
      const response = await fetch(
        `${context.state.linkAPI}api/classes` + data,
        {
          method: "GET",
          headers: {
            Authorization: "Bearer " + users.state.loggedUser.token,
          },
        }
      );
      if (response.ok) {
        context.commit("SET_TEAMS", await response.json());
      }
    },

    async createTeam(context, data) {
      const response = await fetch(`${context.state.linkAPI}api/classes`, {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + users.state.loggedUser.token,
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        const err = await response.json();
        throw new Error(err.error);
      }
    },

    async removeTeam(context, data) {
      const response = await fetch(
        `${context.state.linkAPI}api/classes/${data}`,
        {
          mode: "cors",
          cache: "no-cache",
          credentials: "same-origin",
          method: "DELETE",
          headers: {
            Authorization: "Bearer " + users.state.loggedUser.token,
            "Content-Type": "application/json",
          },
          redirect: "follow",
          referrerPolicy: "no-referrer",
        }
      );
      if (!response.ok) {
        const err = await response.json();
        throw new Error(err.error);
      }
    },

    async updateNameTeam(context, data) {
      const response = await fetch(
        `${context.state.linkAPI}api/classes/${data[0]}`,
        {
          mode: "cors",
          cache: "no-cache",
          credentials: "same-origin",
          method: "PATCH",
          headers: {
            Authorization: "Bearer " + users.state.loggedUser.token,
            "Content-Type": "application/json",
          },
          redirect: "follow",
          referrerPolicy: "no-referrer",
          body: JSON.stringify(data[1]),
        }
      );
      if (!response.ok) {
        const err = await response.json();
        throw new Error(err.error);
      }
    },

    async findAllStudents(context, data) {
      const response = await fetch(
        `${context.state.linkAPI}api/classes/children` + data,
        {
          method: "GET",
          headers: {
            Authorization: "Bearer " + users.state.loggedUser.token,
          },
        }
      );
      if (response.ok) {
        context.commit("SET_STUDENTS", await response.json());
      }
    },

    async findChild(context, data) {
      const response = await fetch(
        `${context.state.linkAPI}api/classes/requests?username=${data}`,
        {
          method: "GET",
          headers: {
            Authorization: "Bearer " + users.state.loggedUser.token,
          },
        }
      );
      if (response.ok) {
        context.commit("SET_KID", await response.json());
      } else {
        const err = await response.json();
        throw new Error(err.error);
      }
    },

    async createRequest(context, data) {
      const response = await fetch(
        `${context.state.linkAPI}api/classes/requests`,
        {
          method: "POST",
          mode: "cors",
          cache: "no-cache",
          credentials: "same-origin",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + users.state.loggedUser.token,
          },
          redirect: "follow",
          referrerPolicy: "no-referrer",
          body: JSON.stringify(data),
        }
      );
      if (!response.ok) {
        const err = await response.json();
        throw new Error(err.error);
      }
    },

    async deleteRequest(context, data) {
      const response = await fetch(
        `${context.state.linkAPI}api/classes/requests/${data[0]}`,
        {
          mode: "cors",
          cache: "no-cache",
          credentials: "same-origin",
          method: "DELETE",
          headers: {
            Authorization: "Bearer " + users.state.loggedUser.token,
            "Content-Type": "application/json",
          },
          redirect: "follow",
          referrerPolicy: "no-referrer",
          body: JSON.stringify(data[1]),
        }
      );
      if (!response.ok) {
        const err = await response.json();
        throw new Error(err.error);
      }
    },

    async updateChildClass(context, data) {
      const response = await fetch(
        `${context.state.linkAPI}api/classes/${data[0]}/children/${data[1]}`,
        {
          mode: "cors",
          cache: "no-cache",
          credentials: "same-origin",
          method: "PUT",
          headers: {
            Authorization: "Bearer " + users.state.loggedUser.token,
            "Content-Type": "application/json",
          },
          redirect: "follow",
          referrerPolicy: "no-referrer",
          body: JSON.stringify(data[2]),
        }
      );
      if (!response.ok) {
        const err = await response.json();
        throw new Error(err.error);
      }
    },

    async removeStudent(context, data) {
      const response = await fetch(
        `${context.state.linkAPI}api/classes/${data[0]}/children/${data[1]}`,
        {
          mode: "cors",
          cache: "no-cache",
          credentials: "same-origin",
          method: "DELETE",
          headers: {
            Authorization: "Bearer " + users.state.loggedUser.token,
            "Content-Type": "application/json",
          },
          redirect: "follow",
          referrerPolicy: "no-referrer",
          body: JSON.stringify(data[2]),
        }
      );
      if (!response.ok) {
        const err = await response.json();
        throw new Error(err.error);
      }
    },

    async findRequests(context, data) {
      const response = await fetch(
        `${context.state.linkAPI}api/classes/requests/${data}`,
        {
          method: "GET",
          headers: {
            Authorization: "Bearer " + users.state.loggedUser.token,
          },
        }
      );
      if (response.ok) {
        context.commit("SET_REQUESTS", await response.json());
      }
    },

    async acceptRequest(context, data) {
      const response = await fetch(
        `${context.state.linkAPI}api/classes/requests/${data[0]}`,
        {
          mode: "cors",
          cache: "no-cache",
          credentials: "same-origin",
          method: "PUT",
          headers: {
            Authorization: "Bearer " + users.state.loggedUser.token,
            "Content-Type": "application/json",
          },
          redirect: "follow",
          referrerPolicy: "no-referrer",
          body: JSON.stringify(data[1]),
        }
      );
      if (!response.ok) {
        const err = await response.json();
        throw new Error(err.error);
      }
    },

    async findChildClasses(context, data) {
      const response = await fetch(
        `${context.state.linkAPI}api/classes/children/${data}`,
        {
          method: "GET",
          headers: {
            Authorization: "Bearer " + users.state.loggedUser.token,
          },
        }
      );
      if (response.ok) {
        context.commit("SET_CHILDCLASSES", await response.json());
      } else {
        const err = await response.json();
        throw new Error(err.error);
      }
    },
  },
};
