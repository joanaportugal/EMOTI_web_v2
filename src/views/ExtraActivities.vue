<template>
  <div class="d-flex">
    <aside>
      <SideBar activeTab="Atividades Extras" />
    </aside>
    <main>
      <AppSearch />

      <b-container class="bv-example-row mb-5">
        <b-row class="mx-4">
          <h2 :style="{fontFamily: 'EAmbit SemiBold'}" class="mt-3 p-0 col-12">
            Gerir Atividades Extras
          </h2>
          <div
            class="d-flex col-12 p-0 profileCard"
            :style="{height: '510px' ,border: '2px solid #e87461', borderRadius: '5px'}"
          >
            <div class="p-0 col-4" :style="{borderRight:'2px solid #e87461'}">
              <div class="border-bottom pt-3 px-2">
                <div class="d-flex justify-content-between">
                  <h3 :style="{fontFamily: 'EAmbit SemiBold'}" class="m-0">
                    Lista
                  </h3>
                  <b-link
                    :style="{ color: '#2b4141' }"
                    v-b-modal.modal-extra
                    @click="whatModalDo = 'addActivityExtra'"
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
              <div class="p-2" :style="{height: '397.5px', overflowY: 'scroll'}">
                <h5 :style="{fontFamily: 'EAmbit SemiBold'}">Resultados (1)</h5>
                <article>
                  <div
                    class="d-flex justify-content-between align-items-center pb-1 mt-2"
                    :style="{borderBottom: '1px solid #707070'}"
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
                        :style="{fontFamily: 'EAmbit SemiBold'}"
                        :class="{
                          activeItem: ativitySelected === 'AtividadeA',
                        }"
                      >
                        AtividadeA
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
                      @click="ativitySelected = 'AtividadeB'"
                    >
                      <b-avatar
                        variant="light"
                        text="B"
                        size="2.5rem"
                      ></b-avatar>
                      <span
                        class="m-0 mx-2"
                        :style="{fontFamily: 'EAmbit SemiBold'}"
                        :class="{
                          activeItem: ativitySelected === 'AtividadeB',
                        }"
                      >
                        AtividadeB
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
            <div class="col-8 py-3" style="overflow-y: scroll">
              <div class="d-flex justify-content-between">
                <h3 :style="{fontFamily: 'EAmbit SemiBold'}" class="p-0 m-0">
                  Detalhes
                </h3>
                <div class="row">
                  <button
                    class="btn"
                    v-b-modal.modal-extra
                    @click="whatModalDo = 'visibility'"
                    id="orange"
                  >
                    Atribuir Atividade
                  </button>
                  <button
                    class="btn d-flex flex-row jusitfy-content-center align-items-center p-2 mx-3"
                    id="grey"
                    v-b-modal.modal-extra
                    @click="whatModalDo = 'editActivityExtra'"
                  >
                    <span class="material-icons-round" :style="{fontSize: '24px'}"
                      >edit</span
                    >
                  </button>
                </div>
              </div>
              <h5 class="d-flex align-items-center my-4">
                <span class="material-icons-round" :style="{color: '#e87461'}"
                  >info</span
                >
                <span class="mx-2" :style="{fontFamily: 'EAmbit SemiBold'}">
                  Informações
                </span>
              </h5>
              <b-form class="mb-3">
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
                      class="col-5"
                      value="Imagem"
                      disabled
                    ></b-form-input>
                    <b-form-input
                      id="activityQuestions"
                      class="col-3"
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
                <span class="material-icons-round" :style="{color: '#e87461'}"
                  >visibility</span
                >
                <span class="mx-2" :style="{fontFamily: 'EAmbit SemiBold'}">
                  Visibilidade
                </span>
              </h5>

              <table class="col-12 mb-3">
                <tr :style="{background: '#e87461',color: '#fbfbf3'}">
                  <th class="px-4">Nome do Aluno</th>
                  <th>Ações</th>
                </tr>
                <tbody>
                  <tr :style="{borderBottom: '2px solid #707070'}">
                    <td class="px-4 py-3">João Soares Pereira de Amorim</td>
                    <td class="d-flex py-2">
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
                  >equalizer</span
                >
                <span class="mx-2" :style="{fontFamily: 'EAmbit SemiBold'}">
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
      id="modal-extra"
      centered
      hide-footer
      header-border-variant="0"
      header-class="color"
      body-class="color"
      size="lg"
    >
      <div
        v-if="whatModalDo == 'addActivityExtra'"
        :style="{ fontFamily: 'EAmbit SemiBold' }"
        class="text-center"
      >
        <h4
          :style="{ fontFamily: 'EAmbit SemiBold', color: '#2B4141' }"
          class="mb-4"
        >
          Nova Atividade Extra
        </h4>

        <b-form
          class="mb-3 px-3 pt-4 pb-2"
          :style="{ border: '2px solid #e87461', borderRadius: '5px' }"
        >
          <b-form-group
            label="Título:"
            label-for="activityTitle"
            label-cols-sm="2"
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
            label-cols-sm="2"
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
            label-cols-sm="2"
            label-align-sm="left"
          >
            <div class="d-flex flex-row flex-wrap">
              <b-form-input
                id="activityQuestions"
                class="col-5"
                value="Imagem(URL)"
                disabled
              ></b-form-input>
              <b-form-input
                id="activityQuestions"
                class="col-5 mx-2"
                value="Categoria"
                disabled
              ></b-form-input>
              <b-form-input
                id="activityQuestions"
                class="col-5 mt-2"
                value="Emoção"
                disabled
              ></b-form-input>
              <b-form-input
                id="activityQuestions"
                class="col-5 mt-2 mx-2"
                value="Pontos"
                disabled
              ></b-form-input>

              <b-link
                :style="{ color: '#2b4141' }"
                class="d-flex flex-row align-items-center mt-2"
                ><span
                  class="material-icons-round"
                  :style="{ fontSize: '30px' }"
                  >add_circle</span
                ></b-link
              >
            </div>
          </b-form-group>

          <b-form-group
            label="Capa (IMG):"
            label-for="activityIMG"
            label-cols-sm="2"
            label-align-sm="left"
          >
            <b-form-input id="activityIMG" value="Capa" disabled></b-form-input>
          </b-form-group>

          <b-form-group
            label="Descrição:"
            label-for="activityDescription"
            label-cols-sm="2"
            label-align-sm="left"
          >
            <b-form-textarea
              id="activityDescription"
              value="Descrição"
              disabled
            ></b-form-textarea>
          </b-form-group>

          <div class="d-flex flex-row justify-content-end">
            <b-button type="submit" class="text-end" id="orange"
              >Adicionar</b-button
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
        v-if="whatModalDo == 'visibility'"
        :style="{ fontFamily: 'EAmbit SemiBold' }"
        class="text-center"
      >
        <h4
          :style="{ fontFamily: 'EAmbit SemiBold', color: '#2B4141' }"
          class="mb-4"
        >
          Atribuir Atividade Extra
        </h4>

        <b-form
          class="mb-3 px-3 pt-4 pb-2"
          :style="{ border: '2px solid #e87461', borderRadius: '5px' }"
        >
          <b-form-group
            label="Atribuir a:"
            label-for="activityQuestions"
            label-cols-sm="2"
            label-align-sm="left"
          >
            <div class="d-flex flex-row flex-wrap">
              <b-form-input
                id="activityQuestions"
                class="col-5"
                value="Tipo"
                disabled
              ></b-form-input>
              <b-form-input
                id="activityQuestions"
                class="col-5 mx-2"
                value="Turma/Aluno"
                disabled
              ></b-form-input>

              <b-link
                :style="{ color: '#2b4141' }"
                class="d-flex flex-row align-items-center"
                ><span
                  class="material-icons-round"
                  :style="{ fontSize: '30px' }"
                  >add_circle</span
                ></b-link
              >
            </div>
          </b-form-group>
          <div class="d-flex flex-row justify-content-end">
            <b-button type="submit" class="text-end" id="orange"
              >Aplicar Visibilidade</b-button
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
        v-if="whatModalDo == 'editActivityExtra'"
        :style="{ fontFamily: 'EAmbit SemiBold' }"
        class="text-center"
      >
        <h4
          :style="{ fontFamily: 'EAmbit SemiBold', color: '#2B4141' }"
          class="mb-4"
        >
          Editar Atividade Extra
        </h4>

        <b-form
          class="mb-3 px-3 pt-4 pb-2"
          :style="{ border: '2px solid #e87461', borderRadius: '5px' }"
        >
          <b-form-group
            label="Título:"
            label-for="activityTitle"
            label-cols-sm="2"
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
            label-cols-sm="2"
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
            label-cols-sm="2"
            label-align-sm="left"
          >
            <div class="d-flex flex-row flex-wrap">
              <b-form-input
                id="activityQuestions"
                class="col-5"
                value="Imagem(URL)"
                disabled
              ></b-form-input>
              <b-form-input
                id="activityQuestions"
                class="col-5 mx-2"
                value="Categoria"
                disabled
              ></b-form-input>
              <b-form-input
                id="activityQuestions"
                class="col-5 mt-2"
                value="Emoção"
                disabled
              ></b-form-input>
              <b-form-input
                id="activityQuestions"
                class="col-5 mt-2 mx-2"
                value="Pontos"
                disabled
              ></b-form-input>

              <b-link
                :style="{ color: '#2b4141' }"
                class="d-flex flex-row align-items-center mt-2"
                ><span
                  class="material-icons-round"
                  :style="{ fontSize: '30px' }"
                  >add_circle</span
                ></b-link
              >
            </div>
          </b-form-group>

          <b-form-group
            label="Capa (IMG):"
            label-for="activityIMG"
            label-cols-sm="2"
            label-align-sm="left"
          >
            <b-form-input id="activityIMG" value="Capa" disabled></b-form-input>
          </b-form-group>

          <b-form-group
            label="Descrição:"
            label-for="activityDescription"
            label-cols-sm="2"
            label-align-sm="left"
          >
            <b-form-textarea
              id="activityDescription"
              value="Descrição"
              disabled
            ></b-form-textarea>
          </b-form-group>

          <div class="d-flex flex-row justify-content-end">
            <b-button type="submit" class="text-end" id="orange"
              >Aplicar Alterações</b-button
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
      ativitySelected: "AtividadeA",
      whatModalDo: "",
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

table {
  border-collapse: collapse;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  overflow: hidden;
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
</style>
