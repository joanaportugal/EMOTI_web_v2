<template>
  <div class="d-flex">
    <aside>
      <SideBar
        activeTab="Atividades Extras"
        v-if="this.getUser != null"
        :user="this.getUser"
      />
    </aside>
    <main>
      <AppSearch />

      <b-container class="bv-example-row mb-5">
        <b-row class="mx-4">
          <h2
            :style="{ fontFamily: 'EAmbit SemiBold' }"
            class="mt-3 p-0 col-12"
          >
            Gerir Atividades Extras
          </h2>
          <div
            class="d-flex col-12 p-0 profileCard"
            :style="{
              height: '510px',
              border: '2px solid #e87461',
              borderRadius: '5px',
            }"
          >
            <div
              class="p-0 col-4"
              :style="{ borderRight: '2px solid #e87461' }"
            >
              <div class="border-bottom pt-3 px-2">
                <div class="d-flex justify-content-between">
                  <h3 :style="{ fontFamily: 'EAmbit SemiBold' }" class="m-0">
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
                    v-model="filterName"
                  ></b-form-input>
                </b-form>
              </div>
              <div
                class="p-2"
                :style="{ height: '397.5px', overflowY: 'scroll' }"
              >
                <h5 :style="{ fontFamily: 'EAmbit SemiBold' }">
                  Resultados ({{
                    getActivities.filter(
                      (activity) => activity.author == getUser.username
                    ).length
                  }})
                </h5>
                <article>
                  <div
                    class="
                      d-flex
                      justify-content-between
                      align-items-center
                      pb-1
                      mt-2
                    "
                    :style="{ borderBottom: '1px solid #707070' }"
                    v-for="(activity, index) in getActivities.filter((game) => game.author == getUser.username)" :key="index"
                  >
                    <button
                      class="btn d-flex align-items-center col-10 p-0"
                      @click="activitySelected = activity"
                    >
                      <b-avatar
                        variant="light"
                        :text="activity.title.charAt(0)"
                        size="2.5rem"
                      ></b-avatar>
                      <span
                        class="m-0 mx-2"
                        :style="{ fontFamily: 'EAmbit SemiBold' }"
                        :class="{
                          activeItem: activitySelected.title === activity.title,
                        }"
                      >
                        {{ activity.title }}
                      </span>
                    </button>
                    <button class="btn" @click="removeActivity(activity._id)">
                      <span
                        class="material-icons-round"
                        :style="{ color: '#e87461' }"
                        >delete_forever</span
                      >
                    </button>
                  </div>
                </article>
              </div>
            </div>
            <div class="col-8 py-3" style="overflow-y: scroll">
              <div class="d-flex justify-content-between">
                <h3 :style="{ fontFamily: 'EAmbit SemiBold' }" class="p-0 m-0">
                  Detalhes
                </h3>
                <div class="row">
                  <button
                    class="btn"
                    v-b-modal.modal-extra
                    @click="whatModalDo = 'visibility'"
                    id="orange"
                    :disabled="activitySelected == ''"
                  >
                    Atribuir Atividade
                  </button>
                  <button
                    class="
                      btn
                      d-flex
                      flex-row
                      jusitfy-content-center
                      align-items-center
                      p-2
                      mx-3
                    "
                    id="grey"
                    v-b-modal.modal-extra
                    @click="openEditModal()"
                    :disabled="activitySelected == ''"
                  >
                    <span
                      class="material-icons-round"
                      :style="{ fontSize: '24px' }"
                      >edit</span
                    >
                  </button>
                </div>
              </div>
              <h5 class="d-flex align-items-center my-4">
                <span class="material-icons-round" :style="{ color: '#e87461' }"
                  >info</span
                >
                <span class="mx-2" :style="{ fontFamily: 'EAmbit SemiBold' }">
                  Informações
                </span>
              </h5>
              <div class="p-0 m-0 mb-3">
                <b-form-group
                  label="Título:"
                  label-cols-sm="4"
                  label-align-sm="left"
                >
                  <b-form-input
                    :value="activitySelected.title"
                    disabled
                  ></b-form-input>
                </b-form-group>

                <b-form-group
                  label="Dificuldade:"
                  label-cols-sm="4"
                  label-align-sm="left"
                >
                  <b-form-input
                    :value="activitySelected.level"
                    disabled
                  ></b-form-input>
                </b-form-group>

                <b-form-group
                  label="Pergunta:"
                  label-cols-sm="4"
                  label-align-sm="left"
                  v-for="(question, index) in activitySelected.questions"
                  :key="index"
                >
                  <div class="d-flex flex-row flex-wrap">
                    <b-form-input
                      id="activityQuestions"
                      class="col-12"
                      :value="question.text"
                      disabled
                    ></b-form-input>
                    <b-form-input
                      id="activityQuestions"
                      class="col-12 mt-2"
                      :value="question.img"
                      disabled
                    ></b-form-input>
                    <b-form-input
                      id="activityQuestions"
                      class="col-12 mt-2"
                      :value="question.correctAnswer"
                      disabled
                    ></b-form-input>
                    <b-form-input
                      id="activityQuestions"
                      class="col-12 mt-2"
                      :value="question.points"
                      disabled
                    ></b-form-input>
                  </div>
                </b-form-group>

                <b-form-group
                  label="Capa (IMG):"
                  label-cols-sm="4"
                  label-align-sm="left"
                >
                  <b-form-input
                    :value="activitySelected.coverIMG"
                    disabled
                  ></b-form-input>
                </b-form-group>

                <b-form-group
                  label="Descrição:"
                  label-cols-sm="4"
                  label-align-sm="left"
                >
                  <b-form-textarea
                    :value="activitySelected.description"
                    disabled
                  ></b-form-textarea>
                </b-form-group>
              </div>

              <h5 class="d-flex align-items-center my-4">
                <span class="material-icons-round" :style="{ color: '#e87461' }"
                  >visibility</span
                >
                <span class="mx-2" :style="{ fontFamily: 'EAmbit SemiBold' }">
                  Visibilidade
                </span>
              </h5>

              <table class="col-12 mb-3">
                <tr :style="{ background: '#e87461', color: '#fbfbf3' }">
                  <th class="px-4">Nome do Aluno</th>
                  <th>Ações</th>
                </tr>
                <tbody>
                  <tr :style="{ borderBottom: '2px solid #707070' }">
                    <td class="px-4 py-3">João Soares Pereira de Amorim</td>
                    <td class="d-flex py-2">
                      <button
                        class="
                          btn btn-danger
                          d-flex
                          flex-row
                          align-items-center
                          p-1
                          mx-2
                        "
                        size="sm"
                        id="red"
                      >
                        <span
                          class="material-icons-round"
                          :style="{ fontSize: '26px' }"
                          >delete_forever</span
                        >
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>

              <h5 class="d-flex align-items-center my-4">
                <span class="material-icons-round" :style="{ color: '#e87461' }"
                  >equalizer</span
                >
                <span class="mx-2" :style="{ fontFamily: 'EAmbit SemiBold' }">
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
          @submit.prevent="addActivity"
        >
          <b-form-group label="Título:" label-cols-sm="2" label-align-sm="left">
            <b-form-input
              placeholder="Atividade"
              required
              v-model="newActivity.title"
            ></b-form-input>
          </b-form-group>

          <b-form-group
            label="Dificuldade:"
            label-cols-sm="2"
            label-align-sm="left"
          >
            <b-form-select
              placeholder="Grau de Dificuldade"
              required
              v-model="newActivity.level"
            >
              <b-form-select-option value="" disabled
                >Qualquer</b-form-select-option
              >
              <b-form-select-option value="Fácil">Fácil</b-form-select-option>
              <b-form-select-option value="Médio">Médio</b-form-select-option>
              <b-form-select-option value="Dificil"
                >Dificil</b-form-select-option
              >
            </b-form-select>
          </b-form-group>

          <b-form-group
            :label="'Pergunta ' + `${index + 1}:`"
            label-cols-sm="2"
            label-align-sm="left"
            v-for="(question, index) in newActivity.questions"
            :key="index"
          >
            <div class="d-flex flex-row flex-wrap">
              <b-form-input
                class="col-10"
                placeholder="Pergunta"
                required
                v-model="question.text"
              ></b-form-input>
              <b-form-input
                class="col-5 mt-2"
                placeholder="Imagem(URL)"
                required
                v-model="question.img"
              ></b-form-input>
              <b-form-select
                class="col-5 mx-2 mt-2"
                placeholder="Categoria (IMG)"
                v-model="question.categoryImg"
                required
              >
                <b-form-select-option value="" disabled
                  >Categoria (IMG)</b-form-select-option
                >
                <b-form-select-option value="Ilustração"
                  >Ilustração</b-form-select-option
                >
                <b-form-select-option value="Realidade"
                  >Realidade</b-form-select-option
                >
                <b-form-select-option value="Realidade/Familiar"
                  >Realidade/Familiar</b-form-select-option
                >
              </b-form-select>
              <b-form-select
                class="col-5 mt-2"
                placeholder="Emoção"
                v-model="question.correctAnswer"
                required
              >
                <b-form-select-option value="" disabled
                  >Qualquer</b-form-select-option
                >
                <b-form-select-option
                  :value="emotion.name"
                  v-for="(emotion, index) in getEmotions"
                  :key="index"
                  >{{ emotion.name }}</b-form-select-option
                >
              </b-form-select>
              <b-form-input
                class="col-5 mt-2 mx-2"
                placeholder="Pontos"
                type="number"
                min="0"
                v-model="question.points"
                required
              ></b-form-input>

              <b-link
                v-if="newActivity.questions.length != 1"
                :style="{ color: '#2b4141', textDecoration: 'none' }"
                class="d-flex flex-row align-items-center mt-2"
                @click="newActivity.questions.splice(index, 1)"
                ><span
                  class="material-icons-round"
                  :style="{ fontSize: '30px', textDecoration: 'none' }"
                  >cancel</span
                ></b-link
              >

              <b-link
                v-if="newActivity.questions.length - 1 == index"
                :style="{ color: '#2b4141' }"
                class="d-flex flex-row align-items-center mt-2"
                @click="
                  newActivity.questions.push({
                    img: '',
                    correctAnswer: '',
                    options: [],
                    points: 0,
                    categoryImg: '',
                    text: '',
                  })
                "
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
            label-cols-sm="2"
            label-align-sm="left"
          >
            <b-form-input
              placeholder="Capa"
              required
              v-model="newActivity.coverIMG"
            ></b-form-input>
          </b-form-group>

          <b-form-group
            label="Descrição:"
            label-cols-sm="2"
            label-align-sm="left"
          >
            <b-form-textarea
              placeholder="Descrição"
              required
              v-model="newActivity.description"
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
            label-cols-sm="2"
            label-align-sm="left"
            v-for="(apply,index) in applyVisibility" :key="index"
          >
            <div class="d-flex flex-row flex-wrap">
              
              <b-form-select
                class="col-5"
                v-model="apply.type"
                required
              >
              <b-form-select-option value="" disabled>Selecione a Categoria</b-form-select-option>
              <b-form-select-option value="Turma" >Turma</b-form-select-option>
              <b-form-select-option value="Aluno">Aluno</b-form-select-option>
              </b-form-select>
              <b-form-select class="col-5 mx-2" v-if="apply.type=='Turma'" v-model="apply.who" required>
                <b-form-select-option v-for="(team,index) in getTeams" :value="team.name" :key="index" :disabled="applyVisibility.find(apply=>apply.who==team.name)!=undefined">{{team.name}}</b-form-select-option>
              </b-form-select>
              <b-form-select class="col-5 mx-2" v-else-if="apply.type=='Aluno'" v-model="apply.who" required>
                <b-form-select-option v-for="(student,index) in getStudents" :value="student.name" :key="index" :disabled="applyVisibility.find(apply=>apply.who==student.name)!=undefined">{{student.name}}</b-form-select-option>
              </b-form-select>
              <b-form-select class="col-5 mx-2" v-else disabled>
              </b-form-select>
              

             <b-link
                v-if="applyVisibility.length != 1"
                :style="{ color: '#2b4141', textDecoration: 'none' }"
                class="d-flex flex-row align-items-center mt-2"
                @click="applyVisibility.splice(index, 1)"
                ><span
                  class="material-icons-round"
                  :style="{ fontSize: '30px', textDecoration: 'none' }"
                  >cancel</span
                ></b-link
              >

              <b-link
                v-if="applyVisibility.length - 1 == index"
                :style="{ color: '#2b4141' }"
                class="d-flex flex-row align-items-center mt-2"
                @click="
                  applyVisibility.push({type:'',who:''})
                "
                ><span
                  class="material-icons-round"
                  :style="{ fontSize: '30px' }"
                  >add_circle</span
                ></b-link
              >
            </div>
          </b-form-group>
          <div class="d-flex flex-row justify-content-end">
            <b-button type="submit" class="text-end mt-3" id="orange"
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
          name="formEditActivity"
          class="mb-3 px-3 pt-4 pb-2"
          :style="{ border: '2px solid #e87461', borderRadius: '5px' }"
          @submit.prevent="changeActivity()"
          
        >
          <b-form-group label="Título:" label-cols-sm="2" label-align-sm="left">
            <b-form-input
              placeholder="Atividade"
              required
              v-model="formEditActivity.title"
            ></b-form-input>
          </b-form-group>

          <b-form-group
            label="Dificuldade:"
            label-cols-sm="2"
            label-align-sm="left"
          >
            <b-form-select
              placeholder="Grau de Dificuldade"
              required
              v-model="formEditActivity.level"
            >
              <b-form-select-option value="" disabled
                >Qualquer</b-form-select-option
              >
              <b-form-select-option value="Fácil">Fácil</b-form-select-option>
              <b-form-select-option value="Médio">Médio</b-form-select-option>
              <b-form-select-option value="Dificil"
                >Dificil</b-form-select-option
              >
            </b-form-select>
          </b-form-group>

          <b-form-group
            :label="'Pergunta ' + `${index + 1}:`"
            label-cols-sm="2"
            label-align-sm="left"
            v-for="(question, index) in formEditActivity.questions"
            :key="index"
          >
            <div class="d-flex flex-row flex-wrap">
              <b-form-input
                class="col-10"
                placeholder="Pergunta"
                required
                v-model="question.text"
              ></b-form-input>
              <b-form-input
                class="col-5 mt-2"
                placeholder="Imagem(URL)"
                required
                v-model="question.img"
              ></b-form-input>
              <b-form-select
                class="col-5 mx-2 mt-2"
                placeholder="Categoria (IMG)"
                v-model="question.categoryImg"
                required
              >
                <b-form-select-option value="" disabled
                  >Categoria (IMG)</b-form-select-option
                >
                <b-form-select-option value="Ilustração"
                  >Ilustração</b-form-select-option
                >
                <b-form-select-option value="Realidade"
                  >Realidade</b-form-select-option
                >
                <b-form-select-option value="Realidade/Familiar"
                  >Realidade/Familiar</b-form-select-option
                >
              </b-form-select>
              <b-form-select
                class="col-5 mt-2"
                placeholder="Emoção"
                v-model="question.correctAnswer"
                required
              >
                <b-form-select-option value="" disabled
                  >Qualquer</b-form-select-option
                >
                <b-form-select-option
                  :value="emotion.name"
                  v-for="(emotion, index) in getEmotions"
                  :key="index"
                  >{{ emotion.name }}</b-form-select-option
                >
              </b-form-select>
              <b-form-input
                class="col-5 mt-2 mx-2"
                placeholder="Pontos"
                type="number"
                min="0"
                v-model="question.points"
                required
              ></b-form-input>

              <b-link
                v-if="formEditActivity.questions.length != 1"
                :style="{ color: '#2b4141', textDecoration: 'none' }"
                class="d-flex flex-row align-items-center mt-2"
                @click="formEditActivity.questions.splice(index, 1)"
                ><span
                  class="material-icons-round"
                  :style="{ fontSize: '30px', textDecoration: 'none' }"
                  >cancel</span
                ></b-link
              >

              <b-link
                v-if="formEditActivity.questions.length - 1 == index"
                :style="{ color: '#2b4141' }"
                class="d-flex flex-row align-items-center mt-2"
                @click="
                  formEditActivity.questions.push({
                    img: '',
                    correctAnswer: '',
                    options: [],
                    points: 0,
                    categoryImg: '',
                    text: '',
                  })
                "
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
            label-cols-sm="2"
            label-align-sm="left"
          >
            <b-form-input
              placeholder="Capa"
              required
              v-model="formEditActivity.coverIMG"
            ></b-form-input>
          </b-form-group>

          <b-form-group
            label="Descrição:"
            label-cols-sm="2"
            label-align-sm="left"
          >
            <b-form-textarea
              placeholder="Descrição"
              required
              v-model="formEditActivity.description"
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

import { mapActions, mapGetters } from "vuex";

export default {
  name: "BaseView",
  components: {
    SideBar,
    AppSearch,
    AppFooter,
  },
  data() {
    return {
      activitySelected: "",
      whatModalDo: "",
      warning: "",
      newActivity: {
        title: "",
        level: "",
        questions: [
          {
            img: "",
            correctAnswer: "",
            options: [],
            points: 0,
            categoryImg: "",
            text: "",
          },
        ],
        coverIMG: "",
        description: "",
      },
      formEditActivity: {},
      filterName:"",
      applyVisibility:[{type:'',who:''}]
    };
  },

  methods: {
    ...mapActions([
      "findUser",
      "findActivities",
      "getAllEmotions",
      "createActivity",
      "deleteActivity",
      "updateActivity",
      "findTeams",
      "findAllStudents"

    ]),

    addActivity() {
      this.createActivity(this.newActivity)
        .then(() => {
          this.findActivities("").then(() => {
            this.activitySelected = this.getActivities.find(
              (activity) =>
                activity.author == this.getUser.username &&
                activity.title == this.newActivity.title
            );
            setTimeout(() => {
              this.newActivity = {
                title: "",
                level: "",
                questions: [
                  {
                    img: "",
                    correctAnswer: "",
                    options: [],
                    points: 0,
                    categoryImg: "",
                  },
                ],
                coverIMG: "",
                description: "",
              };
            }, 1000);
            this.$bvModal.hide("modal-extra");
          });
        })
        .catch((err) => {
          this.warning = `${err}`;
          setTimeout(() => {
            this.warning = "";
          }, 5000);
        });
    },

    removeActivity(id) {
      if (confirm("Confirma a alteração ?")) {
        this.deleteActivity(id).then(() => {
          this.findActivities("").then(() => {
            if (
              this.getActivities.filter(
                (activity) => activity.author == this.getUser.username
              ).length != 0
            )
              this.activitySelected = this.getActivities.filter(
                (activity) => activity.author == this.getUser.username
              )[0];
          });
        });
      }
    },

    changeActivity() {
      this.updateActivity([this.activitySelected._id, this.editActivity])
        .then(() => {
          this.findActivities("").then(() => {
            this.activitySelected = this.getActivities.find(
              (activity) =>
                activity.author == this.getUser.username &&
                activity.title == this.activitySelected.title
            );
          });
          setTimeout(() => {
            this.editActivity = "";
          }, 1000);
          this.$bvModal.hide("modal-extra");
        })
        .catch((err) => {
          this.warning = `${err}`;
          setTimeout(() => {
            this.warning = "";
          }, 5000);
        });
    },

    //Modal

    openEditModal() {
      this.whatModalDo = "editActivityExtra";
      let activity=this.getActivities.find((activity)=>activity._id===this.activitySelected._id);
      this.formEditActivity=activity;
    },
  },

  computed: {
    ...mapGetters(["getUser", "getActivities", "getEmotions","getStudents","getTeams"]),
  },

  created() {
    this.findUser().then(() => {
      if(this.getUser.typeUser=='Professor'){
        this.findTeams();
        this.findAllStudents();
      }
      else{
        console.log('ok');
      }
      this.findActivities("").then(() => {
        if (
          this.getActivities.filter(
            (activity) => activity.author == this.getUser.username
          ).length != 0
        )
          this.activitySelected = this.getActivities.filter(
            (activity) => activity.author == this.getUser.username
          )[0];
      });
      

    });
    this.getAllEmotions();
  },

  watch: {
    filterName (newValue) {
      this.findActivities(`?title=${newValue}`).then(()=>{
        this.activitySelected=""
      })
  
    },
  }
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

.btn:focus {
  outline: 0px !important;
  -webkit-appearance: none;
  box-shadow: none !important;
}

.activeItem {
  color: #e87461;
}
</style>
