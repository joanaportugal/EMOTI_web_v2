<template>
  <nav
    id="sideBar"
    class="d-flex flex-column align-items-center justify-content-between px-2"
    :style="{ backgroundColor: '#fdfdf3' }"
  >
    <div id="items" class="rounded d-flex flex-column m-0">
      <b-img
        src="../assets/Grupo 440.png"
        fluid
        alt="Fluid image"
        :style="{ width: '95%' }"
        class="mt-2"
      ></b-img>
      <div
        :style="{
          marginTop: '20px',
          marginBottom: '20px',
          backgroundColor: '#f5f5eb',
          width: '100%',
        }"
        id="items"
        class="rounded"
      >
        <b-img
          :src="user.imgProfile"
          fluid
          alt="Fluid image"
          :style="{
            width: '27%',
            marginTop: '10px',
            marginBottom: '10px',
            marginLeft: '8px',
            borderRadius: '10px',
          }"
          v-if="user.imgProfile != ''"
        ></b-img>
        <b-avatar
          rounded
          v-else
          :text="
            user.name.split(' ')[0].charAt(0) +
            user.name.split(' ')[1].charAt(0)
          "
          :style="{
            width: '5vw',
            height: '9vh',
            marginTop: '10px',
            marginBottom: '10px',
            marginLeft: '8px',
            borderRadius: '10px',
            backgroundColor: '#bfbfbf',
            fontFamily: 'EAmbit SemiBold',
            fontSize: '40px',
          }"
        ></b-avatar>
        <div class="px-2 col-5">
          <p :style="{ fontWeight: 'bold' }">{{ user.name }}</p>
          <p>{{ user.typeUser }}</p>
        </div>
        <b-img
          src="../assets/1f44b.png"
          fluid
          alt="Fluid image"
          :style="{ width: '15%' }"
          class="m-2"
        ></b-img>
      </div>
      <div :style="{ width: '100%' }">
        <ul class="d-flex flex-column justify-content-start m-0 p-0 col-12">
          <li
            :class="{
              'mb-4': true,
              selected: activeTab === 'Página Principal',
            }"
          >
            <router-link :to="{ name: 'Página Principal' }"
              ><span class="material-icons-round">home</span> Página
              Principal</router-link
            >
          </li>
          <li
            :class="{
              'mb-4': true,
              selected: activeTab === 'Atividades',
            }"
          >
            <router-link :to="{ name: 'Atividades' }"
              ><span class="material-icons-round">sports_esports</span>
              Atividades</router-link
            >
          </li>
          <li
            :class="{
              'mb-4': true,
              selected: activeTab === 'Perfil',
            }"
          >
            <router-link :to="{ name: 'Perfil' }"
              ><span class="material-icons-round">person</span>
              Perfil</router-link
            >
          </li>
          <li
            :class="{
              'mb-4': true,
              selected: activeTab === 'Escola Virtual',
            }"
            v-if="getLoggedUser.typeUser == 'Professor'"
          >
            <router-link :to="{ name: 'Escola Virtual' }"
              ><span class="material-icons-round">school</span> Escola
              Virtual</router-link
            >
          </li>
          <li
            :class="{
              'mb-4': true,
              selected: activeTab === 'Atividades Extras',
            }"
            v-if="
              getLoggedUser.typeUser == 'Professor' ||
              getLoggedUser.typeUser == 'Tutor'
            "
          >
            <router-link :to="{ name: 'Atividades Extras' }"
              ><span class="material-icons-round">square_foot</span> Atividades
              Extras</router-link
            >
          </li>
          <li
            :class="{
              'mb-4': true,
              selected: activeTab === 'Gerir',
            }"
            v-if="getLoggedUser.typeUser == 'Administrador'"
          >
            <router-link :to="{ name: 'Gerir' }"
              ><span class="material-icons-round">construction</span>
              Gerir</router-link
            >
          </li>
        </ul>
      </div>
    </div>

    <div :style="{ width: '100%' }" class="d-flex justify-content-center">
      <button
        id="logout"
        class="mb-4 p-2 col-10"
        :style="{ fontFamily: 'EAmbit SemiBold' }"
        @click="SET_LOGOUT"
      >
        <span class="material-icons-round" :style="{ paddingRight: '5px' }"
          >logout</span
        >
        Terminar Sessão
      </button>
    </div>
  </nav>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from "vuex";
export default {
  name: "SideBar",
  props: {
    activeTab: String,
    user: Object,
  },

  methods: {
    ...mapMutations(["SET_LOGOUT"]),
    ...mapActions(["findUser"]),
  },
  computed: {
    ...mapGetters(["getLoggedUser"]),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#sideBar {
  height: 100vh;
  background-color: #fdfdf3;
  border-right: 1px solid #707070;
}
li {
  font-family: "EAmbit SemiBold";
  width: 100%;
  font-size: 19px;
  background-color: #fdfdf3;
  border-radius: 5px;
  padding: 2%;
}

li:hover {
  background-color: #e87461;
}

li a {
  color: #bfbfbf;
  display: flex;
  flex: row;
  align-items: center;
  text-decoration: none;
}
li:hover a {
  color: #fdfdf3;
}

.selected {
  background-color: #e87461;
}

.selected a {
  color: #fdfdf3;
}

li a span {
  padding-right: 10px;
  font-size: 30px;
}
#logout {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5f5eb;
  border: none;
  border-radius: 5px;
  color: #e95353;
}

#items {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}

p {
  margin: 0;
  font-size: 14px;
}

#logout:hover {
  color: #f5f5eb;
  background-color: #e95353;
}
</style>
