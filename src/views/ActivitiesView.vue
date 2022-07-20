<template>
  <div class="d-flex">
    <aside>
      <SideBar activeTab="Atividades" />
    </aside>
    <main>
      <AppSearch />
      <b-container class="bv-example-row">
        <b-row>
          <b-col cols="8">
            <h2 :style="{ fontFamily: 'EAmbit SemiBold', color: '#2B4141' }">
              Catálogo
            </h2>
            <div
              class="rounded d-flex flex-row flex-wrap justify-content-around align-items-around"
              :style="{border: '2px solid #e87461'}"
            >
              <div
                class="col-12 mt-2 d-flex flex-row justify-content-end cardItem"
              >
                <b-button
                  class="d-flex flex-row align-items-center"
                  :style="{
                    fontFamily: 'EAmbit SemiBold',
                  }"
                  id="orange"
                  v-b-toggle.sidebar-right
                  ><span class="material-icons-round" :style="{paddingRight:'5px'}"
                    >filter_list</span
                  >
                  Filtrar</b-button
                >
              </div>
              <div class="m-3 myCard" :style="{position: 'relative'}">
                <b-img src="../assets/Imagem 2.png"></b-img>
                <div
                  class="col-12 d-flex flex-row flex-wrap justify-content-between align-items-center activityTitle"
                >
                  <p
                    :style="{ fontFamily: 'EAmbit SemiBold', color: '#FDFDF3' }"
                    class="d-flex flex-row align-items-center my-2"
                  >
                    <span
                      class="material-icons-round"
                      :style="{paddingRight: '8px'}"
                      >extension</span
                    >
                    Queres Brincar ?
                  </p>
                  <router-link
                    to="#"
                    class="d-flex flex-row justify-content-center align-items-center"
                    :style="{color: '#fdfdf3'}"
                    ><span
                      class="material-icons-round"
                      shadow-lg
                      :style="{fontSize: '35px'}"
                      >play_circle</span
                    ></router-link
                  >
                  <div class="col-12 p-0 text-wrap" id="moreInfo">
                    <p class="col-12 p-0 mb-1" :style="{color: '#fdfdf3'}">
                      sdshdjsdhsdjsdsjds hksdhsdjsd skdhsdajdlasdash
                      dlashjdashdal djadhasdlasjdha ldhjadhaj
                    </p>
                    <div
                      class="col-12 mb-2 p-0 d-flex flex-row justify-content-end"
                    >
                      <span
                        class="material-icons-round"
                        :style="{paddingRight: '8px',color: '#fdfdf3'}"
                        >check</span
                      >
                      <span
                        class="material-icons-round"
                        :style="{paddingRight: '8px', color: '#fdfdf3'}"
                        >people_alt</span
                      >
                      <span
                        class="material-icons-round"
                        :style="{paddingRight: '8px', color: '#fdfdf3'}"
                        >school</span
                      >
                    </div>
                  </div>
                </div>
              </div>
             <div class="m-3 myCard" :style="{position: 'relative'}">
                <b-img src="../assets/Imagem 2.png"></b-img>
                <div
                  class="col-12 d-flex flex-row flex-wrap justify-content-between align-items-center activityTitle"
                >
                  <p
                    :style="{ fontFamily: 'EAmbit SemiBold', color: '#FDFDF3' }"
                    class="d-flex flex-row align-items-center my-2"
                  >
                    <span
                      class="material-icons-round"
                      :style="{paddingRight: '8px'}"
                      >extension</span
                    >
                    Queres Brincar ?
                  </p>
                  <router-link
                    to="#"
                    class="d-flex flex-row justify-content-center align-items-center"
                    :style="{color: '#fdfdf3'}"
                    ><span
                      class="material-icons-round"
                      shadow-lg
                      :style="{fontSize: '35px'}"
                      >play_circle</span
                    ></router-link
                  >
                  <div class="col-12 p-0 text-wrap" id="moreInfo">
                    <p class="col-12 p-0 mb-1" :style="{color: '#fdfdf3'}">
                      sdshdjsdhsdjsdsjds hksdhsdjsd skdhsdajdlasdash
                      dlashjdashdal djadhasdlasjdha ldhjadhaj
                    </p>
                    <div
                      class="col-12 mb-2 p-0 d-flex flex-row justify-content-end"
                    >
                      <span
                        class="material-icons-round"
                        :style="{paddingRight: '8px',color: '#fdfdf3'}"
                        >check</span
                      >
                      <span
                        class="material-icons-round"
                        :style="{paddingRight: '8px', color: '#fdfdf3'}"
                        >people_alt</span
                      >
                      <span
                        class="material-icons-round"
                        :style="{paddingRight: '8px', color: '#fdfdf3'}"
                        >school</span
                      >
                    </div>
                  </div>
                </div>
              </div>
             <div class="m-3 myCard" :style="{position: 'relative'}">
                <b-img src="../assets/Imagem 2.png"></b-img>
                <div
                  class="col-12 d-flex flex-row flex-wrap justify-content-between align-items-center activityTitle"
                >
                  <p
                    :style="{ fontFamily: 'EAmbit SemiBold', color: '#FDFDF3' }"
                    class="d-flex flex-row align-items-center my-2"
                  >
                    <span
                      class="material-icons-round"
                      :style="{paddingRight: '8px'}"
                      >extension</span
                    >
                    Queres Brincar ?
                  </p>
                  <router-link
                    to="#"
                    class="d-flex flex-row justify-content-center align-items-center"
                    :style="{color: '#fdfdf3'}"
                    ><span
                      class="material-icons-round"
                      shadow-lg
                      :style="{fontSize: '35px'}"
                      >play_circle</span
                    ></router-link
                  >
                  <div class="col-12 p-0 text-wrap" id="moreInfo">
                    <p class="col-12 p-0 mb-1" :style="{color: '#fdfdf3'}">
                      sdshdjsdhsdjsdsjds hksdhsdjsd skdhsdajdlasdash
                      dlashjdashdal djadhasdlasjdha ldhjadhaj
                    </p>
                    <div
                      class="col-12 mb-2 p-0 d-flex flex-row justify-content-end"
                    >
                      <span
                        class="material-icons-round"
                        :style="{paddingRight: '8px',color: '#fdfdf3'}"
                        >check</span
                      >
                      <span
                        class="material-icons-round"
                        :style="{paddingRight: '8px', color: '#fdfdf3'}"
                        >people_alt</span
                      >
                      <span
                        class="material-icons-round"
                        :style="{paddingRight: '8px', color: '#fdfdf3'}"
                        >school</span
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="m-3 myCard" :style="{position: 'relative'}">
                <b-img src="../assets/Imagem 2.png"></b-img>
                <div
                  class="col-12 d-flex flex-row flex-wrap justify-content-between align-items-center activityTitle"
                >
                  <p
                    :style="{ fontFamily: 'EAmbit SemiBold', color: '#FDFDF3' }"
                    class="d-flex flex-row align-items-center my-2"
                  >
                    <span
                      class="material-icons-round"
                      :style="{paddingRight:'8px'}"
                      >extension</span
                    >
                    Queres Brincar ?
                  </p>
                  <router-link
                    to="#"
                    class="d-flex flex-row justify-content-center align-items-center"
                    :style="{color: '#fdfdf3'}"
                    ><span
                      class="material-icons-round"
                      shadow-lg
                      :style="{fontSize: '35px'}"
                      >play_circle</span
                    ></router-link
                  >
                  <div class="col-12 p-0 text-wrap" id="moreInfo">
                    <p class="col-12 p-0 m-0" :style="{color: '#fdfdf3'}">
                      sdshdjsdhsdjsdsjds hksdhsdjsd skdhsdajdlasdash
                      dlashjdashdal djadhasdlasjdha ldhjadhaj
                    </p>
                    <div class="col-12 p-0 d-flex flex-row justify-content-end">
                      <button
                        class="btn p-1 rounded-circle d-flex justify-content-center align-items-center mb-1"
                        :style="{background: '#bfbfbf', color: '#fdfdf3'}"
                      >
                        <span class="material-icons-round">mode_edit</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="text-center mb-1">
                <b-link
                  :style="{ color: '#e87461', textDecoration: 'underline' }"
                  >Ver Mais</b-link
                >
              </div>
            </div>
          </b-col>
          <b-col cols="4">
            <h2 :style="{ fontFamily: 'EAmbit SemiBold', color: '#2B4141' }">
              Top Atividades
            </h2>
            <div class="rounded px-2" style="border: 2px solid #e87461">
              <div class="d-flex flex-row my-3">
                <div
                  class="col-6 p-0 d-flex flex-row justify-content-center align-items-center"
                >
                  <b-img src="../assets/Imagem 7.png"></b-img>
                  <b-badge
                    pill
                    :style="{
                      backgroundColor: '#e87641',
                      position: 'absolute',
                      left: '0px',
                      top: '0px',
                    }"
                    ># 1</b-badge
                  >
                </div>
                <div class="col-6 p-0">
                  <div class="col-12 p-0 pl-2">
                    <p :style="{ color: '#2B4141' }">
                      <span :style="{ color: '#e87461', fontWeight: 'bolder' }"
                        >Tt: </span
                      >Queres brincar comigo?
                    </p>
                  </div>
                  <div class="col-12 p-0 text-center pl-2">
                    <p :style="{ color: '#e87461', fontWeight: 'bolder' }">
                      <span :style="{ color: '#2B4141' }">10000 </span>Visitas
                    </p>
                  </div>
                </div>
              </div>

              <div class="text-center mb-1">
                <b-link
                  :style="{ color: '#e87461', textDecoration: 'underline' }"
                  >Ver Mais</b-link
                >
              </div>
            </div>
          </b-col>
        </b-row>
        <b-sidebar
          id="sidebar-right"
          right
          shadow
          backdrop
          body-class="sideFilter"
          header-class="sideFilter"
        >
          <div class="px-3 py-2 mb-4">
            <h4
              :style="{ color: '#2B4141', fontFamily: 'EAmbit SemiBold' }"
              class="mt-3 mb-3 text-center"
            >
              Filtrar
            </h4>

            <b-form
              class="mt-4 p-4 rounded"
              :style="{ border: '2px solid #e87461' }"
            >
              <label for="">Dificuldade: </label>
              <b-form-select v-model="formFilter.level" size="sm" class="mb-3">
                <b-form-select-option :value="null" disabled
                  >Selecione uma opção</b-form-select-option
                >
                <b-form-select-option
                  :value="level"
                  v-for="(level, index) in levels"
                  :key="index"
                  >{{ level }}</b-form-select-option
                >
              </b-form-select>

              <label for="" class="mt-3">Categoria: </label>
              <b-form-select
                v-model="formFilter.category"
                size="sm"
                class="mb-3"
              >
                <b-form-select-option :value="null" disabled
                  >Selecione uma opção</b-form-select-option
                >
                <b-form-select-option
                  :value="category"
                  v-for="(category, index) in categories"
                  :key="index"
                  >{{ category }}</b-form-select-option
                >
              </b-form-select>

              <label for="" class="mt-3">Sugerido por: </label>
              <b-form-select
                v-model="formFilter.sugestFrom"
                size="sm"
                class="mb-3"
                disabled
              >
                <b-form-select-option :value="null" disabled
                  >Selecione uma opção</b-form-select-option
                >
                <b-form-select-option
                  :value="sugest"
                  v-for="(sugest, index) in suggestions"
                  :key="index"
                  >{{ sugest }}</b-form-select-option
                >
              </b-form-select>

              <label for="" class="mt-3">Número de perguntas: </label>
              <b-form-select
                v-model="formFilter.nQuestions"
                size="sm"
                class="mb-3"
                disabled
              ></b-form-select>

              <div class="mt-4 d-flex flex-row justify-content-center">
                <b-button
                  :style="{
                    width: '40%',
                  }"
                  id="white"
                  class="col-12"
                  @click="resetForm()"
                  >Repor</b-button
                >
              </div>
            </b-form>
          </div>
        </b-sidebar>
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
  name: "HomeView",
  components: {
    SideBar,
    AppSearch,
    AppFooter,
  },
  data() {
    return {
      formFilter: {
        level: "",
        category: "",
        sugestFrom: "",
        nQuestions: "",
      },
      levels: ["Fácil", "Médio", "Dificil"],
      categories: [
        "Quiz",
        "Reconhecimento",
        "Atividades Personalizadas (Tutor)",
        "Atividades Personalizadas (Professor)",
      ],
      suggestions: ["Tutor", "Professor", "Ambos"],
    };
  },
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

main > div {
  margin-top: 7rem;
}

.cardItem:hover .activityTitle {
  opacity: 0;
}

.cardItem:hover .cardContent {
  opacity: 0.8;
}

.activityTitle {
  background-color: #e87361cf;
  position: absolute;
  bottom: 0px;
  left: 0px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  min-height: 15%;
}

.cardContent {
  background: #e87461;
  border-radius: 5px;
  opacity: 0;
  height: 25vh;
  width: 100%;
  position: absolute;
  top: 0;
}

.cardContent * {
  color: white;
}

.sideFilter {
  background-color: #fbfbf3;
}

#orange {
  background: #e87461;
  border: 1px solid #e87461;
}
#orange:hover {
  background: #fdfdf3;
  color: #e87461;
  border: 1px solid #e87461;
}

#white {
  background-color: #fdfdf3;
  border: 1px solid #e87461;
  color: #e87461;
}

#white:hover {
  background-color: #e87461;
  color: #fdfdf3;
}

.activityTitle {
  background-color: #e87361cf;
  position: absolute;
  bottom: 0px;
  left: 0px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  min-height: 15%;
  transition: min-height 1s;
}
.myCard:hover .activityTitle {
  min-height: 75%;
}

#moreInfo {
  visibility: hidden;
  height: 0vh;
  transition: visibility 1s ease-out;
  transition: height 1s ease-out;
}

.myCard:hover #moreInfo {
  visibility: visible;
  height: auto;
}
</style>
