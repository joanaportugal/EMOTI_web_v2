<template>
  <div class="d-flex">
    <aside>
      <SideBar activeTab="Escola Virtual" />
    </aside>
    <main>
      <AppSearch />
      <b-container class="bv-example-row">
        <b-row class="mx-4">
          <b-link
            @click="optSelected = 'Turmas'"
            :style="{
              color: '#2B4141',
              textDecoration: 'none',
              fontSize: '30px',
              'font-family': 'EAmbit SemiBold',
              opacity: optSelected === 'Turmas' ? 1 : 0.2,
            }"
            >Turmas
          </b-link>

          <b-link
            @click="optSelected = 'Alunos'"
            class="mx-4"
            :style="{
              color: '#2B4141',
              textDecoration: 'none',
              fontSize: '30px',
              'font-family': 'EAmbit SemiBold',
              opacity: optSelected === 'Alunos' ? 1 : 0.2,
            }"
          >
            Alunos
          </b-link>

          <div
            v-if="optSelected === 'Turmas'"
            class="d-flex col-12 p-0 mt-2 mb-3 schoolCard"
            :style="{height: '500px'}"
          >
            <div class="p-0 col-4" :style="{borderRight:'2px solid #e87461'}">
              <div class="border-bottom pt-3 px-2">
                <div class="d-flex justify-content-between">
                  <h3 :style="{fontFamily: 'EAmbit SemiBold'}" class="m-0">
                    Lista
                  </h3>
                  <b-link
                    :style="{ color: '#2b4141' }"
                    v-b-modal.modal-virtual-school
                    @click="whatModalDo = 'addClass'"
                    ><span
                      class="material-icons-round"
                      :style="{ fontSize: '30px' }"
                      >add_circle</span
                    ></b-link
                  >
                </div>
                <b-form class="my-2">
                  <b-form-input
                    id="childName"
                    placeholder="Pesquisa por nome..."
                  ></b-form-input>
                </b-form>
              </div>
              <div class="p-2" :style="{height: '388px', overflowY: 'scroll'}">
                <h5 :style="{fontFamily: 'EAmbit SemiBold'}">Resultados (1)</h5>
                <article>
                  <div
                    class="d-flex justify-content-between align-items-center pb-1 mt-2"
                    :style="{borderBottom: '1px solid #707070'}"
                  >
                    <button
                      class="btn d-flex align-items-center col-10 p-0"
                      @click="classSelected = 'Turma'"
                    >
                      <b-avatar
                        variant="light"
                        text="T"
                        size="2.5rem"
                      ></b-avatar>
                      <span
                        class="m-0 mx-2"
                        :style="{fontFamily: 'EAmbit SemiBold'}"
                        :class="{
                          activeItem: classSelected === 'Turma',
                        }"
                      >
                        Turma
                      </span>
                    </button>
                    <button class="btn">
                      <span class="material-icons-round" :style="{color: '#e87461'}"
                        >delete_forever</span
                      >
                    </button>
                  </div>

                  <div
                    class="d-flex justify-content-between align-items-center pb-1 mt-2"
                    :style="{borderBottom: '1px solid #707070'}"
                  >
                    <button
                      class="btn d-flex align-items-center col-10 p-0"
                      @click="classSelected = 'Aula'"
                    >
                      <b-avatar
                        variant="light"
                        text="A"
                        size="2.5rem"
                      ></b-avatar>
                      <span
                        class="m-0 mx-2"
                        :style="{fontFamily: 'EAmbit SemiBold'}"
                        :class="{ activeItem: classSelected === 'Aula' }"
                      >
                        Aula
                      </span>
                    </button>
                    <button class="btn">
                      <span class="material-icons-round" :style="{color: '#e87461'}"
                        >delete_forever</span
                      >
                    </button>
                  </div>
                </article>
              </div>
            </div>
            <div class="col-8 py-3" :style="{overflowY: 'scroll'}">
              <div class="d-flex justify-content-between">
                <h3 :style="{fontFamily: 'EAmbit SemiBold'}" class="p-0 m-0">
                  Detalhes
                </h3>
                <button
                  class="btn"
                  v-b-modal.modal-virtual-school
                  @click="whatModalDo = 'editClass'"
                  id="grey"
                >
                  Alterar Nome
                </button>
              </div>
              <h5 class="d-flex align-items-center my-4">
                <span class="material-icons-round" :style="{color: '#e87461'}"
                  >assignment</span
                >
                <span class="mx-2" :style="{fontFamily: 'EAmbit SemiBold'}">
                  Alunos Inscritos
                </span>
              </h5>

              <table class="col-12 mb-5">
                <tr :style="{background: '#e87461', color: '#fbfbf3'}">
                  <th class="px-4">Nome do Aluno</th>
                  <th>Nome do Tutor</th>
                  <th>Ações</th>
                </tr>
                <tbody>
                  <tr :style="{borderBottom: '2px solid #707070'}">
                    <td class="px-4 py-3">João Soares Pereira de Amorim</td>
                    <td>João Soares Pereira de Amorim</td>
                    <td class="d-flex py-2">
                      <button
                        class="btn d-flex flex-row align-items-center justify-content-center p-1"
                        size="sm"
                        id="grey"
                      >
                        <span
                          class="material-icons-round"
                          :style="{fontSize: '26px'}"
                          >person</span
                        >
                      </button>
                      <button
                        class="btn btn-danger d-flex flex-row align-items-center p-1 mx-2"
                        size="sm"
                        id="red"
                      >
                        <span
                          class="material-icons-round"
                          :style="{fontSize: '26px'}"
                          >delete_forever</span
                        >
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>

              <h5 class="d-flex align-items-center my-4">
                <span class="material-icons-round" :style="{color: '#e87461'}"
                  >pending_actions</span
                >
                <span class="mx-2" :style="{fontFamily: 'EAmbit SemiBold'}">
                  Pedidos Pendentes
                </span>
              </h5>

              <table class="col-12">
                <tr :style="{background: '#e87461', color: '#fbfbf3'}">
                  <th class="px-4">Nome do Aluno</th>
                  <th>Nome do Tutor</th>
                  <th>Ações</th>
                </tr>
                <tbody>
                  <tr :style="{borderBottom: '2px solid #707070'}">
                    <td class="px-4 py-3">João Soares Pereira de Amorim</td>
                    <td>João Soares Pereira de Amorim</td>
                    <td>
                      <button
                        class="btn btn-danger d-flex flex-row align-items-center p-1 mx-2"
                        size="sm"
                        id="red"
                      >
                        <span
                          class="material-icons-round"
                          :style="{fontSize: '26px'}"
                          >delete_forever</span
                        >
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div
            v-if="optSelected === 'Alunos'"
            class="d-flex col-12 p-0 mt-2 mb-3 schoolCard"
            :style="{height: '500px'}"
          >
            <div class="p-0 col-4" :style="{borderRight: '2px solid #e87461'}">
              <div class="border-bottom pt-3 px-2">
                <div class="d-flex justify-content-between">
                  <h3 :style="{fontFamily: 'EAmbit SemiBold'}" class="m-0">
                    Lista
                  </h3>
                  <b-link
                    :style="{ color: '#2b4141' }"
                    v-b-modal.modal-virtual-school
                    @click="whatModalDo = 'addStudent'"
                    ><span
                      class="material-icons-round"
                      :style="{ fontSize: '30px' }"
                      >add_circle</span
                    ></b-link
                  >
                </div>
                <b-form class="my-2">
                  <b-form-input
                    id="childName"
                    placeholder="Pesquisa por nome..."
                  ></b-form-input>
                </b-form>
              </div>
              <div class="p-2" :style="{height: '388px', overflowY: 'scroll'}">
                <h5 :style="{fontFamily: 'EAmbit SemiBold'}">Resultados (1)</h5>
                <article>
                  <div
                    class="d-flex justify-content-between align-items-center pb-1 mt-2"
                    :style="{borderBottom: '1px solid #707070'}"
                  >
                    <button
                      class="btn d-flex align-items-center col-10 p-0"
                      @click="childSelected = 'Joana Portugal'"
                    >
                      <b-avatar
                        variant="light"
                        text="JP"
                        size="2.5rem"
                      ></b-avatar>
                      <span
                        class="m-0 mx-2"
                        :style="{fontFamily: 'EAmbit SemiBold'}"
                        :class="{
                          activeItem: childSelected === 'Joana Portugal',
                        }"
                      >
                        Joana Portugal
                      </span>
                    </button>
                    <button class="btn">
                      <span class="material-icons-round" :style="{color: '#e87461'}"
                        >delete_forever</span
                      >
                    </button>
                  </div>

                  <div
                    class="d-flex justify-content-between align-items-center pb-1 mt-2"
                    :style="{borderBottom: '1px solid #707070'}"
                  >
                    <button
                      class="btn d-flex align-items-center col-10 p-0"
                      @click="childSelected = 'Pedro Silva'"
                    >
                      <b-avatar
                        variant="light"
                        text="PS"
                        size="2.5rem"
                      ></b-avatar>
                      <span
                        class="m-0 mx-2"
                        :style="{fontFamily: 'EAmbit SemiBold'}"
                        :class="{ activeItem: childSelected === 'Pedro Silva' }"
                      >
                        Pedro Silva
                      </span>
                    </button>
                    <button class="btn">
                      <span class="material-icons-round" :style="{color: '#e87461'}"
                        >delete_forever</span
                      >
                    </button>
                  </div>
                </article>
              </div>
            </div>
            <div class="col-8 py-3" :style="{overflowY: 'scroll'}">
              <div class="d-flex justify-content-between">
                <h3 :style="{fontFamily: 'EAmbit SemiBold'}" class="p-0 m-0">
                  Detalhes
                </h3>
                <button
                  class="btn"
                  :style="{fontFamily: 'EAmbit SemiBold'}" 
                  id="grey"
                  v-b-modal.modal-virtual-school
                  @click="whatModalDo = 'editStudent'"
                >
                  Alterar Turma
                </button>
              </div>
              <h5 class="d-flex align-items-center my-4">
                <span class="material-icons-round" :style="{color: '#e87461'}"
                  >info</span
                >
                <span class="mx-2" :style="{fontFamily: 'EAmbit SemiBold'}" >
                  Informações Gerais
                </span>
              </h5>

              <div class="d-flex align-items-center">
                <div class="col-4">
                  <img
                    src="../assets/Imagem 1.png"
                    :style="{ width: '200px', height: '200px' }"
                    class="rounded-circle"
                  />
                </div>
                <b-form class="col-8">
                  <b-form-group
                    label="Nome:"
                    label-for="profileName"
                    label-cols-sm="4"
                    label-align-sm="left"
                  >
                    <b-form-input
                      id="profileName"
                      value="Joana Portugal"
                      disabled
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group
                    label="Email:"
                    label-for="profileEmail"
                    label-cols-sm="4"
                    label-align-sm="left"
                  >
                    <b-form-input
                      id="profileEmail"
                      value="user123@gmail.com"
                      disabled
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group
                    label="Nome do Tutor:"
                    label-for="profileTutor"
                    label-cols-sm="4"
                    label-align-sm="left"
                  >
                    <b-form-input
                      id="profileTutor"
                      value="Joana Portugal"
                      disabled
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group
                    label="Turma:"
                    label-for="profileClass"
                    label-cols-sm="4"
                    label-align-sm="left"
                  >
                    <b-form-input
                      id="profileClass"
                      value="Turma"
                      disabled
                    ></b-form-input>
                  </b-form-group>
                </b-form>
              </div>

              <h5 class="d-flex align-items-center my-4">
                <span class="material-icons-round" :style="{color: '#e87461'}"
                  >equalizer</span
                >
                <span class="mx-2" :style="{fontFamily: 'EAmbit SemiBold'}" >
                  Estatísticas
                </span>
              </h5>
            </div>
          </div>
        </b-row>
      </b-container>
      <AppFooter />
    </main>
    <b-modal
      id="modal-virtual-school"
      centered
      hide-footer
      header-border-variant="0"
      header-class="color"
      body-class="color"
    >
      <div
        v-if="whatModalDo == 'addClass'"
        :style="{ fontFamily: 'EAmbit SemiBold' }"
        class="text-center"
      >
        <h4
          :style="{ fontFamily: 'EAmbit SemiBold', color: '#2B4141' }"
          class="mb-4"
        >
          Nova Turma
        </h4>

        <b-form
          class="px-2 pb-3"
          :style="{ border: '2px solid #e87461', borderRadius: '5px' }"
        >
          <b-form-group
            label-cols="2"
            label-cols-lg="2"
            label-size="sm"
            label-align-sm="left"
            label="Nome:"
            label-for="input-sm"
            class="mt-4 mb-4"
          >
            <b-form-input
              id="input-sm"
              v-model="newImg"
              required
            ></b-form-input>
          </b-form-group>

          <div class="d-flex flex-row justify-content-end">
            <b-button type="submit" class="text-end" id="orange"
              >Adicionar</b-button
            >
          </div>
        </b-form>
      </div>

      <div
        v-if="whatModalDo == 'addStudent'"
        :style="{ fontFamily: 'EAmbit SemiBold' }"
        class="text-center"
      >
        <h4
          :style="{ fontFamily: 'EAmbit SemiBold', color: '#2B4141' }"
          class="mb-4"
        >
          Novo Aluno
        </h4>

        <b-form
          @submit.prevent="addStudent()"
          class="px-2 pb-3"
          :style="{ border: '2px solid #e87461', borderRadius: '5px' }"
        >
          <b-form-group
            label-cols="3"
            label-cols-lg="3"
            label-size="sm"
            label-align-sm="left"
            label="Username:"
            label-for="input-sm"
            class="mt-4 mb-4"
          >
            <b-form-input
              id="input-sm"
              v-model="studentUsername"
              required
              @change="getStudentInfo()"
            ></b-form-input>
          </b-form-group>

          <b-form-group
            label-cols="3"
            label-cols-lg="3"
            label-size="sm"
            label-align-sm="left"
            label="Nome:"
            label-for="input-sm"
            class="mt-4 mb-4"
          >
            <b-form-input
              id="input-sm"
              required
              disabled
              v-model="studentName"
            ></b-form-input>
          </b-form-group>

          <b-form-group
            label-cols="3"
            label-cols-lg="3"
            label-size="sm"
            label-align-sm="left"
            label="Tutor:"
            label-for="input-sm"
            class="mt-4 mb-4"
          >
            <b-form-input
              id="input-sm"
              disabled
              v-model="studentTutor"
            ></b-form-input>
          </b-form-group>

          <b-form-group
            label-cols="3"
            label-cols-lg="3"
            label-size="sm"
            label-align-sm="left"
            label="Turma:"
            label-for="input-sm"
            class="mt-4 mb-4"
          >
            <b-form-select id="input-sm" required v-model="teamToAdd">
              <b-form-select-option
                v-for="(team, index) in getTeacherClasses"
                :key="index"
                :value="team.name"
              >
                {{ team.name }}
              </b-form-select-option>
            </b-form-select>
          </b-form-group>
          <div class="d-flex flex-row justify-content-end">
            <b-button type="submit" id="orange">Adicionar</b-button>
          </div>
          <div
            v-if="warning != ''"
            :style="{
              'background-color': '#C82333',
              color: '#fdfdf3',
              'border-radius': '4px',
            }"
          >
            <p>{{ warning }}</p>
          </div>
        </b-form>
      </div>

      <div
        v-if="whatModalDo == 'editStudent'"
        :style="{ fontFamily: 'EAmbit SemiBold' }"
        class="text-center"
      >
        <h4
          :style="{ fontFamily: 'EAmbit SemiBold', color: '#2B4141' }"
          class="mb-4"
        >
          Alterar Turma
        </h4>
        <b-form
          class="px-2 pb-3"
          :style="{ border: '2px solid #e87461', borderRadius: '5px' }"
        >
          <b-form-group
            label-cols="3"
            label-cols-lg="3"
            label-size="sm"
            label-align-sm="left"
            label="Turma:"
            label-for="input-sm"
            class="mt-4 mb-4"
          >
            <b-form-select id="input-sm" required v-model="teamToAdd">
              <b-form-select-option
                v-for="(team, index) in getTeacherClasses"
                :key="index"
                :value="team.name"
              >
                {{ team.name }}
              </b-form-select-option>
            </b-form-select>
          </b-form-group>
          <div class="d-flex flex-row justify-content-end">
            <b-button
              type="submit"
              :style="{
                color: '#fdfdf3',
                'background-color': '#e87461',
                border: 'none',
              }"
              >Alterar</b-button
            >
          </div>
          <div
            v-if="warning != ''"
            :style="{
              'background-color': '#C82333',
              color: '#fdfdf3',
              'border-radius': '4px',
            }"
          >
            <p>{{ warning }}</p>
          </div>
        </b-form>
      </div>

      <div
        v-if="whatModalDo == 'editClass'"
        :style="{ fontFamily: 'EAmbit SemiBold' }"
        class="text-center"
      >
        <h4
          :style="{ fontFamily: 'EAmbit SemiBold', color: '#2B4141' }"
          class="mb-4"
        >
          Alterar Nome
        </h4>

        <b-form
          class="px-2 pb-3"
          :style="{ border: '2px solid #e87461', borderRadius: '5px' }"
        >
          <b-form-group
            label-cols="2"
            label-cols-lg="2"
            label-size="sm"
            label-align-sm="left"
            label="Nome:"
            label-for="input-sm"
            class="mt-4 mb-4"
          >
            <b-form-input
              id="input-sm"
              v-model="newImg"
              required
            ></b-form-input>
          </b-form-group>

          <div class="d-flex flex-row justify-content-end">
            <b-button
              type="submit"
              class="text-end"
              :style="{
                color: '#fdfdf3',
                'background-color': '#e87461',
                border: 'none',
              }"
              >Alterar</b-button
            >
          </div>
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
  name: "BaseView",
  components: {
    SideBar,
    AppSearch,
    AppFooter,
  },

  data() {
    return {
      whatModalDo: "",
      warning: "",
      optSelected: "Turmas",
      classSelected: "Turma",
      childSelected: "Joana Portugal",
    };
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

main > header {
  width: 81.3vw;
  z-index: 1;
  position: fixed;
  top: 0;
  right: 0;
}

.btn {
  text-align: left;
}

.schoolCard {
  border: 2px solid #e87461;
  border-radius: 5px;
}

.activeItem {
  color: #e87461;
}

table {
  border-collapse: collapse;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  overflow: hidden;
}

.color {
  background-color: #fdfdf3;
}

#grey {
  background-color: #bfbfbf;
  color: #fdfdf3;
  border: 1px solid #bfbfbf;
}
#grey:hover {
  background-color: #fdfdf3;
  color: #bfbfbf;
}

#red {
  border: 1px solid #e95353;
}
#red:hover {
  background-color: #fdfdf3;
  color: #e95353;
  border: 1px solid #e95353;
}

#orange {
  background: #e87461;
  border: 1px solid #e87461;
  color: #fdfdf3;
}
#orange:hover {
  background: #fdfdf3;
  color: #e87461;
  border: 1px solid #e87461;
}
</style>
