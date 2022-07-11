<template>
  <div class="d-flex">
    <aside>
      <SideBar />
    </aside>
    <main>
      <AppSearch />
      <b-container class="bv-example-row mt-5">
        <b-row class="mx-4">
          <button
            class="btn p-0 mr-4"
            @click="optSelected = 'Turmas'"
            :style="{
              'font-family': 'EAmbit SemiBold',
              opacity: optSelected === 'Turmas' ? 1 : 0.2,
            }"
          >
            <h2 class="m-0">Turmas</h2>
          </button>
          <button
            class="btn p-0"
            @click="optSelected = 'Alunos'"
            :style="{
              'font-family': 'EAmbit SemiBold',
              opacity: optSelected === 'Alunos' ? 1 : 0.2,
            }"
          >
            <h2 class="m-0">Alunos</h2>
          </button>

          <div
            v-if="optSelected === 'Turmas'"
            class="d-flex col-12 p-0 mt-2 schoolCard"
            style="height: 390px"
          >
            <div class="p-0 col-4" style="border-right: 2px solid #e87461">
              <div class="border-bottom pt-3 px-2">
                <div class="d-flex justify-content-between">
                  <h3 style="font-family: 'EAmbit SemiBold'" class="m-0">
                    Lista
                  </h3>
                  <b-button
                    style="background-color: #2b4141; height: 28px"
                    class="border-0 rounded-circle"
                    size="sm"
                    v-b-modal.modal-profile
                    @click="whatModalDo = 'addClass'"
                    >+</b-button
                  >
                </div>
                <b-form class="my-2">
                  <b-form-input
                    id="childName"
                    placeholder="Pesquisa por nome..."
                  ></b-form-input>
                </b-form>
              </div>
              <div class="p-2" style="height: 281px; overflow-y: scroll">
                <h5 style="font-family: 'EAmbit SemiBold'">Resultados (1)</h5>
                <article>
                  <div
                    class="d-flex justify-content-between align-items-center pb-1 mt-2"
                    style="border-bottom: 1px solid #707070"
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
                        style="font-family: 'EAmbit SemiBold'"
                        :class="{
                          activeItem: classSelected === 'Turma',
                        }"
                      >
                        Turma
                      </span>
                    </button>
                    <button class="btn">
                      <span class="material-icons-round" style="color: #e87461"
                        >delete_forever</span
                      >
                    </button>
                  </div>

                  <div
                    class="d-flex justify-content-between align-items-center pb-1 mt-2"
                    style="border-bottom: 1px solid #707070"
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
                        style="font-family: 'EAmbit SemiBold'"
                        :class="{ activeItem: classSelected === 'Aula' }"
                      >
                        Aula
                      </span>
                    </button>
                    <button class="btn">
                      <span class="material-icons-round" style="color: #e87461"
                        >delete_forever</span
                      >
                    </button>
                  </div>
                </article>
              </div>
            </div>
            <div class="col-8 py-3" style="overflow-y: scroll">
              <div class="d-flex justify-content-between">
                <h3 style="font-family: 'EAmbit SemiBold'" class="p-0 m-0">
                  Detalhes
                </h3>
                <button class="btn" style="background: #e87461; color: white">
                  Alterar Nome
                </button>
              </div>
              <h5 class="d-flex align-items-center my-4">
                <span class="material-icons-round" style="color: #e87461"
                  >assignment</span
                >
                <span class="mx-2" style="font-family: 'EAmbit SemiBold'">
                  Alunos Inscritos
                </span>
              </h5>

              <table class="col-12">
                <tr style="background: #e87461; color: #fbfbf3">
                  <th class="px-4">Nome do Aluno</th>
                  <th>Nome do Tutor</th>
                  <th>Ações</th>
                </tr>
                <tbody>
                  <tr style="border-bottom: 2px solid #707070">
                    <td class="px-4 py-3">João Soares Pereira de Amorim</td>
                    <td>João Soares Pereira de Amorim</td>
                    <td class="d-flex py-2">
                      <button
                        class="btn btn-danger d-flex p-1"
                        style="background: #bfbfbf"
                      >
                        <span
                          class="material-icons-round mx-1"
                          style="color: white; font-size: 18px"
                          >person</span
                        >
                      </button>
                      <button
                        class="btn btn-danger d-flex p-1 mx-1"
                        style="background: #e95353"
                      >
                        <span
                          class="material-icons-round mx-1"
                          style="color: white; font-size: 18px"
                          >delete_forever</span
                        >
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>

              <h5 class="d-flex align-items-center my-4">
                <span class="material-icons-round" style="color: #e87461"
                  >pending_actions</span
                >
                <span class="mx-2" style="font-family: 'EAmbit SemiBold'">
                  Pedidos Pendentes
                </span>
              </h5>

              <table class="col-12">
                <tr style="background: #e87461; color: #fbfbf3">
                  <th class="px-4">Nome do Aluno</th>
                  <th>Nome do Tutor</th>
                  <th>Ações</th>
                </tr>
                <tbody>
                  <tr style="border-bottom: 2px solid #707070">
                    <td class="px-4 py-3">João Soares Pereira de Amorim</td>
                    <td>João Soares Pereira de Amorim</td>
                    <td>
                      <button
                        class="btn btn-danger d-flex justify-content- p-1"
                        style="background: #e95353"
                      >
                        <span
                          class="material-icons-round mx-1"
                          style="color: white; font-size: 18px"
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
            class="d-flex col-12 p-0 mt-2 schoolCard"
            style="height: 390px"
          >
            <div class="p-0 col-4" style="border-right: 2px solid #e87461">
              <div class="border-bottom pt-3 px-2">
                <div class="d-flex justify-content-between">
                  <h3 style="font-family: 'EAmbit SemiBold'" class="m-0">
                    Lista
                  </h3>
                  <b-button
                    style="background-color: #2b4141; height: 28px"
                    class="border-0 rounded-circle"
                    size="sm"
                    v-b-modal.modal-profile
                    @click="whatModalDo = 'addStudent'"
                    >+</b-button
                  >
                </div>
                <b-form class="my-2">
                  <b-form-input
                    id="childName"
                    placeholder="Pesquisa por nome..."
                  ></b-form-input>
                </b-form>
              </div>
              <div class="p-2" style="height: 281px; overflow-y: scroll">
                <h5 style="font-family: 'EAmbit SemiBold'">Resultados (1)</h5>
                <article>
                  <div
                    class="d-flex justify-content-between align-items-center pb-1 mt-2"
                    style="border-bottom: 1px solid #707070"
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
                        style="font-family: 'EAmbit SemiBold'"
                        :class="{
                          activeItem: childSelected === 'Joana Portugal',
                        }"
                      >
                        Joana Portugal
                      </span>
                    </button>
                    <button class="btn">
                      <span class="material-icons-round" style="color: #e87461"
                        >delete_forever</span
                      >
                    </button>
                  </div>

                  <div
                    class="d-flex justify-content-between align-items-center pb-1 mt-2"
                    style="border-bottom: 1px solid #707070"
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
                        style="font-family: 'EAmbit SemiBold'"
                        :class="{ activeItem: childSelected === 'Pedro Silva' }"
                      >
                        Pedro Silva
                      </span>
                    </button>
                    <button class="btn">
                      <span class="material-icons-round" style="color: #e87461"
                        >delete_forever</span
                      >
                    </button>
                  </div>
                </article>
              </div>
            </div>
            <div class="col-8 py-3" style="overflow-y: scroll">
              <div class="d-flex justify-content-between">
                <h3 style="font-family: 'EAmbit SemiBold'" class="p-0 m-0">
                  Detalhes
                </h3>
                <button class="btn" style="background: #e87461; color: white">
                  Alterar Turma
                </button>
              </div>
              <h5 class="d-flex align-items-center my-4">
                <span class="material-icons-round" style="color: #e87461"
                  >info</span
                >
                <span class="mx-2" style="font-family: 'EAmbit SemiBold'">
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
                <span class="material-icons-round" style="color: #e87461"
                  >equalizer</span
                >
                <span class="mx-2" style="font-family: 'EAmbit SemiBold'">
                  Estatísticas
                </span>
              </h5>
            </div>
          </div>
        </b-row>
      </b-container>
      <AppFooter />
    </main>
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
</style>
