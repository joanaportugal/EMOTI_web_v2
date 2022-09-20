<template>
 <div class="p-0">
    <div class="loading d-flex flex-column align-items-center justify-content-center" :style="{position:'fixed',zIndex:'2'}"  v-if="showLoading==true">
      <b-spinner style="width: 8rem; height: 8rem;color:white" label="Spinning"></b-spinner>
      <h3 class="mt-4" style="color:white">A carregar <span class="info">...</span></h3>
    </div>
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
                      @click="setActivity(activity)"
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
                    :disabled="activitySelected == '' || activitySelected.approved==false"
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
                    @click="openEditModal(activitySelected)"
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
              <div class="p-0" v-if="activitySelected!=''">
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
                  <tr :style="{'border-bottom':index==getVisibility.length-1 ?'5px solid #e87461' :'1px solid #707070',color:'#2B4141'}" v-for="(kid,index) in getVisibility" :key="index">
                    <td class="px-4 py-3">{{kid.name}}</td>
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
                        @click="deleteVisibility(kid._id)"
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
              </div>

              <div class="p-0" :hidden="activitySelected=='' || activitySelected.approved==false || check()">
              <h5 class="d-flex align-items-center mb-4 mt-5">
                <span class="material-icons-round" :style="{ color: '#e87461' }"
                  >equalizer</span
                >
                <span class="mx-2" :style="{ fontFamily: 'EAmbit SemiBold' }">
                  Estatísticas
                </span>
              </h5>

              <b-tabs content-class="mt-3" active-nav-item-class="changeColorTab" fill>
                <b-tab>
                  <template #title>
                    <h6 class="p-0 d-flex flex-row align-items-center justify-content-center" :style="{textDecoration:'none', fontFamily:'EAmbit SemiBold',color:'#2B4141',fontSize:'17px'}"><span class="material-icons-round" :style="{paddingRight:'5px',color:'#e87461'}">bar_chart</span> Resultado Geral</h6>
                  </template>
                   <apexchart-chart ref="chartReactive" type="bar" height="350" :options="chartOptions" :series="series" class="apex"></apexchart-chart>
                </b-tab>
                <b-tab>
                  <template #title>
                    <h6 class="p-0 d-flex flex-row align-items-center justify-content-center" :style="{textDecoration:'none', fontFamily:'EAmbit SemiBold',color:'#2B4141',fontSize:'17px'}"><span class="material-icons-round" :style="{paddingRight:'5px',color:'#e87461'}">pie_chart</span>Respostas Erradas</h6>
                  </template>
                  <apexchart-chart  type="donut" height="400" :options="chartOptionsPie" :series="seriesPie" class="apex"></apexchart-chart>
                </b-tab>
               
              </b-tabs>
              
              
            </div>
            <div class="text-center my-3" v-if="activitySelected.approved==false">
              <hr>
              <h6><strong>Nota: </strong> Esta atividade encontra-se bloqueada pelo facto de ainda não ter sido aprovada.</h6>
            </div>
               
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
      :size="whatModalDo=='visibility'?'':'lg'"
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
          @submit.prevent="setVisibility"
        >
          <b-form-group
            label="Atribuir a:"
            label-cols-sm="3"
            label-align-sm="left"
            v-for="(apply,index) in applyVisibility" :key="index"
          >
            <div class="d-flex flex-row flex-wrap">
              <b-form-select class="col-9 mx-2" v-if="getUser.typeUser=='Professor'" v-model="applyVisibility[index]" required>
                <b-form-select-option v-for="(team,index) in getTeams" :value="team._id" :key="index" :disabled="applyVisibility.find(apply=>apply==team._id)!=undefined">{{team.name}}</b-form-select-option>
              </b-form-select>
              <b-form-select class="col-9 mx-2" v-if="getUser.typeUser=='Tutor'" v-model="applyVisibility[index]" required>
                <b-form-select-option v-for="(kid,index) in getChilds" :value="kid._id" :key="index"  :disabled="applyVisibility.find(apply=>apply==kid._id)!=undefined">{{kid.name}}</b-form-select-option>
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
                  applyVisibility.push('')
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
          class="mb-3 px-3 pt-4 pb-2"
          :style="{ border: '2px solid #e87461', borderRadius: '5px' }"
          @submit.prevent="changeActivity()"
          
        >
          <b-form-group label="Título:" label-cols-sm="2" label-align-sm="left">
            <b-form-input
              placeholder="Atividade"
              required
              v-model="formEditActivity.title"
              disabled
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
    <b-toast id="my-toast" append-toast no-close-button header-class="headerNotify" body-class="bodyNotify">
      <h6 class="d-flex flex-row align-items-center p-0 m-0"><span class="material-icons-round mr-2 p-0">check_circle</span> {{message}}</h6>
    </b-toast>
  </div>
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
      showLoading:true,
      activitySelected: "",
      whatModalDo: "",
      warning: "",
      showChart:"Bar",
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
      applyVisibility:[""],
      message:"",
      //BAr Chart 
      
      series: [{
        name: 'Nº de Vezes',
        data: []
      }],
      chartOptions: {
        chart: {
          type: 'bar',
          height: 350,
          background:'#FDFDF3',
          fontFamily: 'EAmbit SemiBold'
        },
        colors: ['#E87461', '#DCDCD7'],
        plotOptions: {
          bar: {
              horizontal: false,
              columnWidth: '17%',
              endingShape: 'flat',
              borderRadius: 2,
              distributed: true,
            },
        },
         dataLabels: {
          enabled: false
        },
        labels:{
          style:{
            fontFamily:'EAmbitSemiBold'
          }
        },
        stroke: {
          show: true,
          width: 2,
          colors: ['transparent']
        },
        xaxis: {
          categories: ['Ganhou', 'Perdeu'],
          axisBorder: {
            show: true,
            borderType: 'dotted',
            color: '#BFBFBF',
            height: 1,
            width: '100%',
            offsetX: 0,
            offsetY: 0
          },
          axisTicks: {
            show: true,
            borderType: 'dotted',
            color: '#BFBFBF',
            height: 6,
            offsetX: 0,
            offsetY: 0
            }
        },
        yaxis:{
          show:false
        },
        fill: {
          opacity: 1,
        },
        grid: {
          yaxis: {
              lines: {
                  show: false
              }
        },
      } 
    },
 
    //Pie Chart
    
    seriesPie: [],
    chartOptionsPie: {
      chart: {
        type: 'donut',
        fontFamily:'EAmbit SemiBold',
        toolbar:{
          show:true
        }
      },
      labels: [],
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }],
      legend: {
        show:true,
        position:'bottom'
      },
      colors:['#68C0A2','#55ACD1','#F0C6DA','#F1D144','#F0795E']
    },

    history:[],
    tabIndex:0
      
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
      "findAllStudents",
      "findRelations",
      "findVisibility",
      "giveVisiblity",
      "removeVisibility",
      "createNofication",
      "findHistoryActivities"

    ]),

    check(){
      if(this.history!=undefined){
        if(this.history.questionsRight==0 && this.history.questionsWrong==0){
          return true
        }
        else{
          return false
        }
      }
      else{
        return true
      }
    },

    setActivity(activity){
      this.activitySelected = activity;
      this.findVisibility(this.activitySelected._id);
      this.history=this.getHistoryActivity.find(register=>register._id==this.activitySelected._id);
      this.setBarChart()
      this.setPieChart()
      
    },

    addActivity() {
      this.createActivity(this.newActivity)
        .then(() => {
          this.createNofication({toAdmin:true,title:'Nova Pedido de Aprovação',text:`${this.getUser.typeUser=='Tutor'?`O Tutor, ${this.getUser.name.toUpperCase()},`:`O Professor, ${this.getUser.name.toUpperCase()},`} espera a decisão de aprovação da atividade: ${this.newActivity.title.toUpperCase()}.`})
          this.findActivities("").then(() => {
            this.activitySelected = this.getActivities.find(
              (activity) =>
                activity.author == this.getUser.username &&
                activity.title == this.newActivity.title
            )
            this.findVisibility(this.activitySelected._id);
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
            this.message='Atividade criada com sucesso.'
          this.$bvToast.show('my-toast');
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
          this.message='Atividade removida com sucesso.'
          this.$bvToast.show('my-toast');
          this.findActivities("").then(() => {
            if (
              this.getActivities.filter(
                (activity) => activity.author == this.getUser.username
              ).length != 0
            ){
              this.activitySelected = this.getActivities.filter(
                (activity) => activity.author == this.getUser.username
              )[0]
              this.findVisibility(this.activitySelected._id);
              if(this.activitySelected.approved==true){
                 this.history=this.getHistoryActivity.find(register=>register._id==this.activitySelected._id);
                 this.setBarChart()
                 this.setPieChart()
              }
            }
          });
        });
      }
    },

    changeActivity() {
      this.updateActivity([this.activitySelected._id, {level:this.formEditActivity.level,questions:this.formEditActivity.questions,coverIMG:this.formEditActivity.coverIMG,description:this.formEditActivity.description}])
        .then(() => {
          this.findActivities("").then(() => {
            this.activitySelected = this.getActivities.find(
              (activity) =>
                activity.author == this.getUser.username &&
                activity.title == this.activitySelected.title
            );
            this.findVisibility(this.activitySelected._id);
             if(this.activitySelected.approved==true){
                 this.history=this.getHistoryActivity.find(register=>register._id==this.activitySelected._id);
                 this.setBarChart()
                 this.setPieChart()
              }
          });
          setTimeout(() => {
            this.formEditActivity = {};
          }, 1000);
          this.$bvModal.hide("modal-extra");
          this.message='Os dados da atividade foram alterados com sucesso.'
          this.$bvToast.show('my-toast');
        })
        .catch((err) => {
          this.warning = `${err}`;
          setTimeout(() => {
            this.warning = "";
          }, 5000);
        });
    },

    setVisibility(){
      let studentsList=[]
      if(this.getUser.typeUser=='Professor'){
        for (let team of this.getTeams.filter(team=>team._id==this.applyVisibility)) {
          for (let student of team.students) {
            studentsList.push(student._id)
          }
        }
      }
      this.giveVisiblity([this.activitySelected._id,{list:this.applyVisibility}]).then(()=>{
        this.createNofication({list:this.getUser.typeUser=='Professor'?studentsList:this.applyVisibility,title:'Nova Atividade Personalizada',text:`${this.getUser.typeUser=='Tutor'?`O seu Tutor, ${this.getUser.name.toUpperCase()},`:`O seu Professor, ${this.getUser.name.toUpperCase()},`} adicionou ao seu catálogo a seguinte atividade: ${this.activitySelected.title.toUpperCase()}.`})
        setTimeout(() => {this.applyVisibility=[""]}, 1000);
        this.findVisibility(this.activitySelected._id);
        this.$bvModal.hide("modal-extra");
        this.message='Visibilidade atribuida com sucesso.'
        this.$bvToast.show('my-toast');
      })
      .catch((err) => {
          this.warning = `${err}`;
          setTimeout(() => {
            this.warning = "";
          }, 5000);
      });
    },

    deleteVisibility(id){
      if(confirm('Deseja remover a visibilidade à criança selecionada?')){
        this.removeVisibility([this.activitySelected._id,id]).then(()=>{
          this.message='A visibilidade da atividade foi retirada à criança selecionada com sucesso.'
          this.$bvToast.show('my-toast');
          this.findVisibility(this.activitySelected._id)
        })
      }
    },

    //Modal

    openEditModal(activity) {
      this.whatModalDo = "editActivityExtra";
      let myActivity=Object.assign({}, activity);
      myActivity.questions=[]
      for (let i = 0; i < activity.questions.length; i++) {
          myActivity.questions.push(Object.assign({},activity.questions[i]))
      }

      this.formEditActivity=myActivity  
    },

    showOrNotLoading(){
      setTimeout(()=>{
        this.showLoading=false
      },1500);
    },

    setBarChart(){
      this.$refs.chartReactive.updateSeries([{data:[this.history.questionsRight,this.history.questionsWrong]}],true)
    },

    setPieChart(){
      if(this.activitySelected.approved==true){
        let array=[]
        let otherArray=[]
        for (const wrong of this.history.wrongQuestions){
            array.push(Object.values(wrong)[0])
            otherArray.push(Object.keys(wrong)[0])
        }
        this.seriesPie=array
        this.chartOptionsPie={...this.chartOptionsPie,...{
          labels:otherArray
        }}
      }
    }
  },

  computed: {
    ...mapGetters(["getUser", "getActivities", "getEmotions","getStudents","getTeams","getChilds","getVisibility","getHistoryActivity"]),
  },

  created() {
    this.showOrNotLoading();
    this.findUser().then(() => {
      if(this.getUser.typeUser=='Professor'){
        this.findTeams("");
      }
      else{
        this.findRelations("");
      }
      this.findActivities("").then(() => {
        if (this.getActivities.filter( (activity) => activity.author == this.getUser.username).length != 0){
          this.activitySelected = this.getActivities.filter((activity) => activity.author == this.getUser.username)[0];

          this.findVisibility(this.activitySelected._id);

          this.findHistoryActivities().then(()=>{
            this.history=this.getHistoryActivity.find(register=>register._id=this.activitySelected._id)
            this.setBarChart()
            this.setPieChart()
        
          })
          
        }
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

<style>
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

.bodyNotify{
  background-color:#34b187d1;
  border:none;
  border-radius: 5px;
  color:white;
  font-family: 'EAmbit SemiBold';
}
.toast{
  border:none;
}

.changeColorTab{
  background-color:#d9d9d558 !important;
  border-bottom: none;
}

.loading {
  width: 100vw;
  height: 100vh;
  background-color: red;
  position: fixed;
  animation-duration: 12s;
  animation-name: changeColor;
  animation-direction: alternate;
  animation-iteration-count: infinite;
}

@keyframes changeColor {
  0% {
    background-color: #f54c25;
    opacity: 0.6;
  }
  20% {
    background-color: #34b187;
    opacity: 0.6;
  }
  40% {
    background-color: #6969a9;
    opacity: 0.6;
  }
  60% {
    background-color: #f7c901;
    opacity: 0.6;
  }
  80% {
    background-color: #1995c9;
    opacity: 0.6;
  }
  100% {
    background-color: #f5bad6;
    opacity: 0.6;
  }
}

.info{
    color:white;
    animation-duration: 6s;
    animation-name: textChange;
    animation-direction: alternate;
    animation-iteration-count: infinite;
}

@keyframes textChange {
  0% {
    color:white;
  }
  20% {
    color:transparent;
  }
  40% {
    color:white;
  }
  60% {
    color:transparent;
  }
  80% {
    color:white;
  }
  100% {
    color:transparent;
  }
}
</style>
