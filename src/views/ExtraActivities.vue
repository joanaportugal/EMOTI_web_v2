<template>
  <div class="d-flex">
    <aside>
      <SideBar />
    </aside>
    <main>
      <AppSearch />
      <b-container class="bv-example-row mt-5">
        <b-row class="d-flex justify-content-center">
          <b-col cols="11">
            <h2 :style="{ fontFamily: 'EAmbit SemiBold', color: '#2B4141' }">
              Gerir Atividades Extras
            </h2>

            <div
              class="row pt-3 pb-3 justify-content-center"
              :style="{
                border: '2px solid #e87461',
                borderRadius: '5px',
                height: '390px',
              }"
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
                      >+</b-button
                    >
                  </div>
                  <b-form class="my-2">
                    <b-form-input
                      id="ativityName"
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
                        @click="ativitySelected = 'AtividadeA'"
                      >
                        <b-avatar
                          variant="light"
                          text="A"
                          size="2.5rem"
                        ></b-avatar>
                        <span
                          class="m-0 mx-2"
                          style="font-family: 'EAmbit SemiBold'"
                          :class="{
                            activeItem: ativitySelected === 'AtividadeA',
                          }"
                        >
                          AtividadeA
                        </span>
                      </button>
                      <button class="btn">
                        <span
                          class="material-icons-round"
                          style="color: #e87461"
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
                        @click="ativitySelected = 'AtividadeB'"
                      >
                        <b-avatar
                          variant="light"
                          text="B"
                          size="2.5rem"
                        ></b-avatar>
                        <span
                          class="m-0 mx-2"
                          style="font-family: 'EAmbit SemiBold'"
                          :class="{
                            activeItem: ativitySelected === 'AtividadeB',
                          }"
                        >
                          AtividadeB
                        </span>
                      </button>
                      <button class="btn">
                        <span
                          class="material-icons-round"
                          style="color: #e87461"
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
                  <div>
                    <button
                      class="btn py-1"
                      style="background: #e87461; color: white"
                    >
                      Atribuir Atividade
                    </button>
                    <button
                      class="btn py-0 ml-4"
                      style="background: #bfbfbf; color: white"
                    >
                      <span class="material-icons-round" style="font-size: 24px"
                        >edit</span
                      >
                    </button>
                  </div>
                </div>
                <h5 class="d-flex align-items-center my-4">
                  <span class="material-icons-round" style="color: #e87461"
                    >info</span
                  >
                  <span class="mx-2" style="font-family: 'EAmbit SemiBold'">
                    Informações
                  </span>
                </h5>
                <b-form>
                  <b-form-group
                    label="Título:"
                    label-for="activityTitle"
                    label-cols-sm="4"
                    label-align-sm="left"
                  >
                    <b-form-input
                      id="activityTitle"
                      value="Atividade"
                      disabled
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group
                    label="Dificuldade:"
                    label-for="activityDifficulty"
                    label-cols-sm="4"
                    label-align-sm="left"
                  >
                    <b-form-input
                      id="activityDifficulty"
                      value="Atividade"
                      disabled
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group
                    label="Perguntas:"
                    label-for="activityQuestions"
                    label-cols-sm="4"
                    label-align-sm="left"
                  >
                    <div class="d-flex justify-content-between">
                      <b-form-input
                        id="activityQuestions"
                        class="col-3"
                        value="Emoção"
                        disabled
                      ></b-form-input>
                      <b-form-input
                        id="activityQuestions"
                        class="col-4"
                        value="Imagem"
                        disabled
                      ></b-form-input>
                      <b-form-input
                        id="activityQuestions"
                        class="col-2"
                        value="Pontos"
                        disabled
                      ></b-form-input>
                    </div>
                  </b-form-group>

                  <b-form-group
                    label="Capa (IMG):"
                    label-for="activityIMG"
                    label-cols-sm="4"
                    label-align-sm="left"
                  >
                    <b-form-input
                      id="activityIMG"
                      value="Capa"
                      disabled
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group
                    label="Descrição:"
                    label-for="activityDescription"
                    label-cols-sm="4"
                    label-align-sm="left"
                  >
                    <b-form-textarea
                      id="activityDescription"
                      value="Descrição"
                      disabled
                    ></b-form-textarea>
                  </b-form-group>
                </b-form>

                <h5 class="d-flex align-items-center my-4">
                  <span class="material-icons-round" style="color: #e87461"
                    >visibility</span
                  >
                  <span class="mx-2" style="font-family: 'EAmbit SemiBold'">
                    Visibilidade
                  </span>
                </h5>

                <table class="col-12">
                  <tr style="background: #e87461; color: #fbfbf3">
                    <th class="px-4">Nome do Aluno</th>
                    <th>Ações</th>
                  </tr>
                  <tbody>
                    <tr style="border-bottom: 2px solid #707070">
                      <td class="px-4 py-3">João Soares Pereira de Amorim</td>
                      <td class="d-flex py-2">
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
                    >equalizer</span
                  >
                  <span class="mx-2" style="font-family: 'EAmbit SemiBold'">
                    Estatísticas
                  </span>
                </h5>
              </div>
            </div>
          </b-col>
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
      ativitySelected: "AtividadeA",
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
</style>
