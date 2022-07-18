<template>
  <div class="d-flex">
    <aside>
      <SideBar />
    </aside>
    <main>
      <AppSearch />
      <b-container class="bv-example-row mt-5 col-12">
        <h2 :style="{ color: '#2B4141', fontFamily: 'EAmbit SemiBold' }">
          Gerir Atividades
        </h2>

        <div class="p-0 col-12 d-flex align-items-center">
          <b-form inline class="col-8 p-0">
            <label class="mr-sm-2" for="filterTitle">Título: </label>
            <b-form-input
              id="filterTitle"
              class="mb-2 mr-sm-5 mb-sm-0 col-3"
              :style="{ 'background-color': '#fdfdf3' }"
              v-model="formFilter.title"
            ></b-form-input>

            <label class="mr-sm-2" for="filterLevel">Categoria: </label>
            <b-form-select
              id="filterLevel"
              class="mb-2 mr-sm-5 mb-sm-0 col-2"
              :style="{ 'background-color': '#fdfdf3' }"
              v-model="formFilter.category"
            >
              <b-form-select-option value="">Qualquer</b-form-select-option>
              <b-form-select-option value="Quiz">Quiz</b-form-select-option>
            </b-form-select>

            <label class="mr-sm-2" for="filterLevel">Dificuldade: </label>
            <b-form-select
              id="filterLevel"
              class="mb-2 mr-sm-0 mb-sm-0 col-2"
              :style="{ 'background-color': '#fdfdf3' }"
              v-model="formFilter.level"
            >
              <b-form-select-option value="">Qualquer</b-form-select-option>
              <b-form-select-option value="Fácil">Fácil</b-form-select-option>
              <b-form-select-option value="Médio">Médio</b-form-select-option>
              <b-form-select-option value="Dificil"
                >Dificil</b-form-select-option
              >
            </b-form-select>
          </b-form>

          <div class="col-4 p-0 d-flex justify-content-end">
            <b-button
              :style="{
                color: '#fdfdf3',
                'background-color': '#BFBFBF',
                border: 'none',
              }"
              class="mr-3"
              v-b-modal.modalManageActivities
              @click="whatModalDo = 'seeEmotions'"
              >Gerir Emoções</b-button
            >
            <b-button
              :style="{
                color: '#fdfdf3',
                'background-color': '#e87461',
                border: 'none',
              }"
              v-b-modal.modalManageActivities
              @click="whatModalDo = 'addActivity'"
              >Adicionar</b-button
            >
          </div>
        </div>

        <div class="mt-4" style="min-height: 51vh">
          <table class="col-12 text-center">
            <tr :style="{ 'background-color': '#e87461', color: '#fbfbf3' }">
              <th class="p-1">Título</th>
              <th>Grau de Dificuldade</th>
              <th>Imagem (Capa do Quiz)</th>
              <th>Categoria</th>
              <th>Ações</th>
            </tr>
            <tr :style="{ 'border-bottom': '2px solid #707070' }">
              <td class="p-4">nome</td>
              <td>fácil</td>
              <td>imagem</td>
              <td>quiz</td>
              <td>
                <b-button
                  style="border: none"
                  variant="secondary"
                  class="ml-2 mr-1"
                  v-b-modal.modalManageActivities
                  @click="updateActivity('activity')"
                  ><b-icon icon="pencil-fill"></b-icon
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
    <b-modal id="modalManageActivities" centered hide-footer size="lg">
      <div v-if="whatModalDo == 'addActivity'">
        <h4 :style="{ color: '#e87461' }">Adicionar Atividade</h4>
        <b-form>
          <b-form-group
            label-cols="3"
            label-cols-lg="3"
            label-size="sm"
            label-align-sm="left"
            label="Título:"
            label-for="input-sm"
            class="mt-4 mb-4"
          >
            <b-form-input
              id="input-sm"
              v-model="newActivity.title"
              required
            ></b-form-input>
          </b-form-group>
          <b-form-group
            label-cols="3"
            label-cols-lg="3"
            label-size="sm"
            label-align-sm="left"
            label="Dificuldade:"
            label-for="input-sm"
            class="mt-4 mb-4"
          >
            <b-form-select id="input-sm" v-model="newActivity.level" required>
              <b-form-select-option value="Fácil">Fácil</b-form-select-option>
              <b-form-select-option value="Médio">Médio</b-form-select-option>
              <b-form-select-option value="Dificil"
                >Dificil</b-form-select-option
              >
            </b-form-select>
          </b-form-group>

          <b-form-group
            label-cols="3"
            label-cols-lg="3"
            label-size="sm"
            label-align-sm="left"
            label="Categoria:"
            label-for="input-sm"
            class="mt-4 mb-4"
          >
            <b-form-select
              id="input-sm"
              v-model="newActivity.category"
              required
            >
              <b-form-select-option value="Quiz">Quiz</b-form-select-option>
            </b-form-select>
          </b-form-group>

          <b-form-group
            label-cols="3"
            label-cols-lg="3"
            label-size="sm"
            label-align-sm="left"
            label="Questão:"
            label-for="input-sm"
            class="mt-4 mb-4"
            v-for="(question, index) in newActivity.questions"
            :key="index"
          >
            <div class="row mt-2">
              <b-form-select
                id="input-sm"
                class="col-3 ml-3"
                v-model="question.correctAnswer"
                :disabled="index + 1 != newActivity.questions.length"
              >
                <b-form-select-option value="">Emoção</b-form-select-option>
              </b-form-select>
              <b-form-input
                id="input-sm"
                class="col-4 ml-2"
                placeholder="Imagem"
                v-model="question.img"
                :disabled="index + 1 != newActivity.questions.length"
              ></b-form-input>
              <b-form-input
                id="input-sm"
                type="number"
                class="col-2 ml-2"
                placeholder="Pontos"
                min="0"
                v-model.number="question.points"
                :disabled="index + 1 != newActivity.questions.length"
              ></b-form-input>
              <b-button
                class="col-1 ml-2"
                @click="addNewQuestion(index)"
                :disabled="index + 1 != newActivity.questions.length"
                ><b-icon icon="plus-circle-fill"></b-icon
              ></b-button>
            </div>
          </b-form-group>

          <b-form-group
            label-cols="3"
            label-cols-lg="3"
            label-size="sm"
            label-align-sm="left"
            label="Capa (IMG):"
            label-for="input-sm"
            class="mt-4 mb-4"
          >
            <b-form-input
              type="url"
              id="input-sm"
              v-model="newActivity.caseIMG"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group
            label-cols="3"
            label-cols-lg="3"
            label-size="sm"
            label-align-sm="left"
            label="Descrição:"
            label-for="input-sm"
            class="mt-4 mb-4"
          >
            <b-form-textarea
              v-model="newActivity.description"
              placeholder="Descrição..."
              rows="3"
              max-rows="6"
            ></b-form-textarea>
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
              >Adicionar</b-button
            >
          </div>
        </b-form>
      </div>

      <div v-if="whatModalDo == 'editActivity'">
        <h4 :style="{ color: '#e87461' }">Editar Atividade</h4>
        <b-form>
          <b-form-group
            label-cols="3"
            label-cols-lg="3"
            label-size="sm"
            label-align-sm="left"
            label="Título:"
            label-for="input-sm"
            class="mt-4 mb-4"
          >
            <b-form-input
              id="input-sm"
              v-model="editActivity.title"
              disabled
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group
            label-cols="3"
            label-cols-lg="3"
            label-size="sm"
            label-align-sm="left"
            label="Dificuldade:"
            label-for="input-sm"
            class="mt-4 mb-4"
          >
            <b-form-select id="input-sm" v-model="editActivity.level" required>
              <b-form-select-option value="Fácil">Fácil</b-form-select-option>
              <b-form-select-option value="Médio">Médio</b-form-select-option>
              <b-form-select-option value="Dificil"
                >Dificil</b-form-select-option
              >
            </b-form-select>
          </b-form-group>

          <b-form-group
            label-cols="3"
            label-cols-lg="3"
            label-size="sm"
            label-align-sm="left"
            label="Categoria:"
            label-for="input-sm"
            class="mt-4 mb-4"
          >
            <b-form-select
              id="input-sm"
              v-model="editActivity.category"
              disabled
              required
            >
              <b-form-select-option value="Quiz">Quiz</b-form-select-option>
            </b-form-select>
          </b-form-group>
          <b-form-group
            label-cols="3"
            label-cols-lg="3"
            label-size="sm"
            label-align-sm="left"
            label="Questão:"
            label-for="input-sm"
            class="mt-4 mb-4"
            v-for="(question, index) in editActivity.questions"
            :key="index"
          >
            <div class="row">
              <b-form-select
                id="input-sm"
                class="col-3 ml-3"
                v-model="question.correctAnswer"
                disabled
              >
                <b-form-select-option :value="question.correctAnswer">{{
                  question.correctAnswer
                }}</b-form-select-option>
              </b-form-select>
              <b-form-input
                id="input-sm"
                class="col-4 ml-2"
                placeholder="Imagem"
                v-model="question.img"
              ></b-form-input>
              <b-form-input
                id="input-sm"
                type="number"
                class="col-2 ml-2"
                placeholder="Pontos"
                min="0"
                v-model.number="question.points"
              ></b-form-input>
            </div>
          </b-form-group>

          <b-form-group
            label-cols="3"
            label-cols-lg="3"
            label-size="sm"
            label-align-sm="left"
            label="Capa (IMG):"
            label-for="input-sm"
            class="mt-4 mb-4"
          >
            <b-form-input
              type="url"
              id="input-sm"
              v-model="editActivity.caseIMG"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group
            label-cols="3"
            label-cols-lg="3"
            label-size="sm"
            label-align-sm="left"
            label="Descrição:"
            label-for="input-sm"
            class="mt-4 mb-4"
          >
            <b-form-textarea
              v-model="editActivity.description"
              placeholder="Descrição..."
              rows="3"
              max-rows="6"
            ></b-form-textarea>
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
              >Editar</b-button
            >
          </div>
        </b-form>
      </div>

      <div v-if="whatModalDo == 'seeEmotions'">
        <h4 :style="{ color: '#e87461' }">Emoções</h4>
        <div class="p-0 col-12 d-flex align-items-center">
          <b-form class="col-8 p-0">
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
                v-model="newEmotion"
                required
              ></b-form-input>
            </b-form-group>
          </b-form>

          <div class="col-4 p-0 d-flex justify-content-end">
            <b-button
              :style="{
                color: '#fdfdf3',
                'background-color': '#e87461',
                border: 'none',
              }"
              >Adicionar</b-button
            >
          </div>
        </div>

        <hr />

        <div style="height: 60vh; overflow-y: scroll">
          <table class="col-12 text-center">
            <tr :style="{ 'background-color': '#e87461', color: '#fbfbf3' }">
              <th class="p-1">Nome</th>
              <th>Ação</th>
            </tr>
            <tr :style="{ 'border-bottom': '2px solid #707070' }">
              <td class="p-4">Nome</td>
              <td>
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
      whatModalDo: "",
      selectedActivity: "",
      formFilter: {
        title: "",
        category: "",
        level: "",
      },
      newActivity: {
        title: "",
        level: "",
        category: "",
        questions: [
          {
            img: "",
            correctAnswer: "",
            answers: [],
            points: 0,
          },
        ],
        caseIMG: "",
        description: "",
      },
      editActivity: {
        title: "",
        level: "",
        questions: [{ img: "", correctAnswer: "", answers: [], points: 0 }],
        caseIMG: "",
        description: "",
        category: "",
        author: "admin",
      },
      newEmotion: "",
    };
  },
  methods: {
    updateActivity(activity) {
      this.whatModalDo = "editActivity";
      this.selectedActivity = activity;
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
