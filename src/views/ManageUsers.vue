<template>
  <div class="d-flex">
    <aside>
      <SideBar />
    </aside>
    <main>
      <AppSearch />
      <b-container class="bv-example-row mt-5 col-12">
        <h2 :style="{ color: '#2B4141', fontFamily: 'EAmbit SemiBold' }">
          Gerir Utilizadores
        </h2>

        <div class="p-0 col-12 d-flex align-items-center">
          <b-form inline class="col-10 p-0">
            <label for="filterName">Nome: </label>
            <b-form-input
              id="filterName"
              class="mb-2 ml-2 col-3"
              :style="{ 'background-color': '#fdfdf3' }"
              v-model="formFilter.name"
            ></b-form-input>

            <label class="ml-4" for="filterType">Tipo: </label>
            <b-form-select
              id="filterType"
              class="mb-2 ml-2 col-2"
              :style="{ 'background-color': '#fdfdf3' }"
              v-model="formFilter.typeUser"
            >
              <b-form-select-option value="">Qualquer</b-form-select-option>
              <b-form-select-option
                :value="type"
                v-for="(type, index) in typeUsers"
                :key="index"
                >{{ type }}</b-form-select-option
              >
            </b-form-select>
          </b-form>

          <div class="col-2 p-0 d-flex justify-content-end">
            <b-button
              class="m-0"
              :style="{
                color: '#fdfdf3',
                'background-color': '#e87461',
                border: 'none',
              }"
              v-b-modal.modalManageUsers
              @click="whatModalDo = 'addUser'"
              >Adicionar</b-button
            >
          </div>
        </div>

        <div class="mt-4" style="min-height: 51vh">
          <table class="col-12 text-center">
            <tr :style="{ 'background-color': '#e87461', color: '#fbfbf3' }">
              <th class="p-1">Username</th>
              <th>Nome</th>
              <th>Tipo de Utilizador</th>
              <th>Ações</th>
            </tr>
            <tr :style="{ 'border-bottom': '2px solid #707070' }">
              <td class="p-4">username</td>
              <td>nome</td>
              <td>tipo</td>
              <td>
                <b-button
                  style="border: none"
                  variant="secondary"
                  class="ml-2 mr-1"
                  v-b-modal.modalManageUsers
                  @click="giveInfo('user')"
                  ><b-icon icon="info-circle-fill"></b-icon
                ></b-button>
                <b-button
                  style="border: none"
                  variant="primary"
                  class="ml-2 mr-1"
                  ><b-icon icon="lock-fill"></b-icon
                ></b-button>
                <b-button
                  style="border: none"
                  variant="primary"
                  class="ml-2 mr-1"
                  ><b-icon icon="unlock-fill"></b-icon
                ></b-button>
                <b-button
                  style="border: none"
                  variant="danger"
                  class="ml-2 mr-1"
                  ><b-icon icon="trash-fill"></b-icon
                ></b-button>
              </td>
            </tr>
          </table>
        </div>
      </b-container>
      <AppFooter />
    </main>

    <b-modal id="modalManageUsers" centered hide-footer>
      <div v-if="whatModalDo == 'addUser'">
        <h4 :style="{ color: '#e87461' }">Adicionar utilizador</h4>
        <b-form>
          <b-input-group class="mb-4 mt-4">
            <b-input-group-prepend is-text>
              <span class="material-icons-round">badge</span>
            </b-input-group-prepend>
            <b-form-input
              placeholder="Username"
              style="background-color: #fdfdf3"
              v-model="formAdd.username"
              required
            ></b-form-input>
          </b-input-group>

          <b-input-group class="mb-4">
            <b-input-group-prepend is-text>
              <span class="material-icons-round">lock</span>
            </b-input-group-prepend>
            <b-form-input
              type="password"
              placeholder="Password"
              style="background-color: #fdfdf3"
              v-model="formAdd.password"
              required
            ></b-form-input>
          </b-input-group>

          <b-input-group class="mb-4">
            <b-input-group-prepend is-text>
              <span class="material-icons-round">lock</span>
            </b-input-group-prepend>
            <b-form-input
              type="password"
              placeholder="Confirmar Password"
              style="background-color: #fdfdf3"
              v-model="conf_password"
              required
            ></b-form-input>
          </b-input-group>

          <b-input-group class="mb-4">
            <b-input-group-prepend is-text>
              <span class="material-icons-round">person</span>
            </b-input-group-prepend>
            <b-form-input
              placeholder="Nome"
              style="background-color: #fdfdf3"
              v-model="formAdd.name"
              required
            ></b-form-input>
          </b-input-group>

          <b-input-group class="mb-4">
            <b-input-group-prepend is-text>
              <span class="material-icons-round">send</span>
            </b-input-group-prepend>
            <b-form-input
              type="email"
              placeholder="Email"
              style="background-color: #fdfdf3"
              v-model="formAdd.email"
              required
            ></b-form-input>
          </b-input-group>

          <b-input-group class="mb-4">
            <b-input-group-prepend is-text>
              <span class="material-icons-round">person_search</span>
            </b-input-group-prepend>
            <b-form-input
              type="text"
              style="background-color: #fdfdf3"
              v-model="formAdd.typeUser"
              disabled
            ></b-form-input>
          </b-input-group>

          <div class="d-flex flex-row justify-content-end">
            <b-button
              type="submit"
              style="background-color: #e87461; color: #fdfdf3; border: none"
              class="mb-2 w-25"
              >Adicionar</b-button
            >
          </div>
        </b-form>
      </div>

      <div v-if="whatModalDo == 'seeUser'">
        <h4 :style="{ color: '#e87461' }">Informações</h4>
        <b-form>
          <b-input-group class="mb-4 mt-4">
            <b-input-group-prepend is-text>
              <span class="material-icons-round">badge</span>
            </b-input-group-prepend>
            <b-form-input
              placeholder="Username"
              style="background-color: #fdfdf3"
              value="User"
              disabled
            ></b-form-input>
          </b-input-group>

          <b-input-group class="mb-4">
            <b-input-group-prepend is-text>
              <span class="material-icons-round">person</span>
            </b-input-group-prepend>
            <b-form-input
              placeholder="Nome"
              style="background-color: #fdfdf3"
              value="Nome"
              disabled
            ></b-form-input>
          </b-input-group>

          <b-input-group class="mb-4">
            <b-input-group-prepend is-text>
              <span class="material-icons-round">send</span>
            </b-input-group-prepend>
            <b-form-input
              type="email"
              placeholder="Email"
              style="background-color: #fdfdf3"
              value="email"
              disabled
            ></b-form-input>
          </b-input-group>

          <b-input-group class="mb-5">
            <b-input-group-prepend is-text>
              <span class="material-icons-round">person_search</span>
            </b-input-group-prepend>
            <b-form-input
              type="text"
              placeholder="TypeUser"
              style="background-color: #fdfdf3"
              value="Tutor"
              disabled
            ></b-form-input>
          </b-input-group>
        </b-form>
      </div>
    </b-modal>
  </div>
</template>

<script>
import SideBar from "@/components/SideBar.vue";
import AppSearch from "@/components/AppSearch.vue";
import AppFooter from "@/components/AppFooter.vue";

export default {
  name: "HomeView",
  components: {
    SideBar,
    AppSearch,
    AppFooter,
  },
  data() {
    return {
      typeUsers: ["Criança", "Tutor", "Administrador"],
      whatModalDo: "",
      selectedUser: "",
      formFilter: {
        name: "",
        typeUser: "",
      },
      conf_password: "",
      formAdd: {
        username: "",
        password: "",
        name: "",
        email: "",
        typeUser: "Administrador",
      },
    };
  },
  methods: {
    giveInfo(user) {
      this.whatModalDo = "seeUser";
      this.selectedUser = user;
    },
  },
};
</script>

<style scoped>
aside {
  height: 100%;
  width: 18vw;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
}

main {
  margin-left: 18vw;
  width: 82vw;
}
</style>
