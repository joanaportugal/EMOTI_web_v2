<template>
  <div class="d-flex">
    <aside>
      <SideBar />
    </aside>
    <main class="d-flex flex-column">
      <AppSearch />
      <b-container class="bv-example-row mt-5">
        <b-row>
          <b-col cols="8">
            <h2 :style="{ fontFamily: 'EAmbit SemiBold', color: '#2B4141' }">
              Catálogo
            </h2>
            <div
              class="
                rounded
                d-flex
                flex-row flex-wrap
                justify-content-around
                align-items-around
              "
              style="border: 2px solid #e87461"
            >
              <div class="col-12 mt-2 d-flex flex-row justify-content-end">
                <b-button
                  class="d-flex flex-row align-items-center"
                  :style="{
                    fontFamily: 'EAmbit SemiBold',
                    color: '#FDFDF3',
                    backgroundColor: '#e87461',
                    border: 'none',
                  }"
                  v-b-toggle.sidebar-right
                  ><span class="material-icons-round" style="padding-right: 5px"
                    >filter_list</span
                  >
                  Filtrar</b-button
                >
              </div>
              <div class="m-3" style="position: relative">
                <b-img src="../assets/Imagem 2.png" fluid></b-img>
                <div
                  class="
                    col-12
                    d-flex
                    flex-row
                    justify-content-between
                    align-items-center
                  "
                  style="
                    background-color: #e87361cf;
                    position: absolute;
                    bottom: 0px;
                    left: 0px;
                    border-bottom-left-radius: 5px;
                    border-bottom-right-radius: 5px;
                    min-height: 15%;
                  "
                >
                  <p
                    :style="{ fontFamily: 'EAmbit SemiBold', color: '#FDFDF3' }"
                    class="d-flex flex-row align-items-center my-2"
                  >
                    <span
                      class="material-icons-round"
                      style="padding-right: 8px"
                      >extension</span
                    >
                    Queres Brincar ?
                  </p>
                  <router-link
                    to="#"
                    class="
                      d-flex
                      flex-row
                      justify-content-center
                      align-items-center
                    "
                    style="color: #fdfdf3"
                    ><span
                      class="material-icons-round"
                      shadow-lg
                      style="font-size: 35px"
                      >play_circle</span
                    ></router-link
                  >
                </div>
              </div>
              <div class="m-3" style="position: relative">
                <b-img src="../assets/Imagem 2.png" fluid></b-img>
                <div
                  class="
                    col-12
                    d-flex
                    flex-row
                    justify-content-between
                    align-items-center
                  "
                  style="
                    background-color: #e87361cf;
                    position: absolute;
                    bottom: 0px;
                    left: 0px;
                    border-bottom-left-radius: 5px;
                    border-bottom-right-radius: 5px;
                    min-height: 15%;
                  "
                >
                  <p
                    :style="{ fontFamily: 'EAmbit SemiBold', color: '#FDFDF3' }"
                    class="d-flex flex-row align-items-center my-2"
                  >
                    <span
                      class="material-icons-round"
                      style="padding-right: 8px"
                      >extension</span
                    >
                    Queres Brincar ?
                  </p>
                  <router-link
                    to="#"
                    class="
                      d-flex
                      flex-row
                      justify-content-center
                      align-items-center
                    "
                    style="color: #fdfdf3"
                    ><span
                      class="material-icons-round"
                      shadow-lg
                      style="font-size: 35px"
                      >play_circle</span
                    ></router-link
                  >
                </div>
              </div>
              <div class="m-3" style="position: relative">
                <b-img src="../assets/Imagem 2.png" fluid></b-img>
                <div
                  class="
                    col-12
                    d-flex
                    flex-row
                    justify-content-between
                    align-items-center
                  "
                  style="
                    background-color: #e87361cf;
                    position: absolute;
                    bottom: 0px;
                    left: 0px;
                    border-bottom-left-radius: 5px;
                    border-bottom-right-radius: 5px;
                    min-height: 15%;
                  "
                >
                  <p
                    :style="{ fontFamily: 'EAmbit SemiBold', color: '#FDFDF3' }"
                    class="d-flex flex-row align-items-center my-2"
                  >
                    <span
                      class="material-icons-round"
                      style="padding-right: 8px"
                      >extension</span
                    >
                    Queres Brincar ?
                  </p>
                  <router-link
                    to="#"
                    class="
                      d-flex
                      flex-row
                      justify-content-center
                      align-items-center
                    "
                    style="color: #fdfdf3"
                    ><span
                      class="material-icons-round"
                      shadow-lg
                      style="font-size: 35px"
                      >play_circle</span
                    ></router-link
                  >
                </div>
              </div>
              <div class="m-3" style="position: relative">
                <b-img src="../assets/Imagem 2.png" fluid></b-img>
                <div
                  class="
                    col-12
                    d-flex
                    flex-row
                    justify-content-between
                    align-items-center
                  "
                  style="
                    background-color: #e87361cf;
                    position: absolute;
                    bottom: 0px;
                    left: 0px;
                    border-bottom-left-radius: 5px;
                    border-bottom-right-radius: 5px;
                    min-height: 15%;
                  "
                >
                  <p
                    :style="{ fontFamily: 'EAmbit SemiBold', color: '#FDFDF3' }"
                    class="d-flex flex-row align-items-center my-2"
                  >
                    <span
                      class="material-icons-round"
                      style="padding-right: 8px"
                      >extension</span
                    >
                    Queres Brincar ?
                  </p>
                  <router-link
                    to="#"
                    class="
                      d-flex
                      flex-row
                      justify-content-center
                      align-items-center
                    "
                    style="color: #fdfdf3"
                    ><span
                      class="material-icons-round"
                      shadow-lg
                      style="font-size: 35px"
                      >play_circle</span
                    ></router-link
                  >
                </div>
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
                  class="
                    col-6
                    p-0
                    d-flex
                    flex-row
                    justify-content-center
                    align-items-center
                  "
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
                  v-for="(sugest, index) in sugestions"
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
                    'background-color': '#fbfbf3',
                    color: '#e87461',
                    border: '1px solid #e87461',
                    width: '40%',
                  }"
                  class="col-12"
                  @click="resetForm()"
                  >Repor</b-button
                >
              </div>
            </b-form>
          </div>
        </b-sidebar>
      </b-container>
    </main>
    <AppFooter />
  </div>
</template>

<script>
import SideBar from "@/components/SideBar.vue";
import AppFooter from "@/components/AppFooter.vue";
import AppSearch from "@/components/AppSearch.vue";

export default {
  name: "HomeView",
  components: {
    SideBar,
    AppFooter,
    AppSearch,
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
      sugestions: ["Tutor", "Professor", "Ambos"],
    };
  },
};
</script>

<style>
aside {
  width: 18vw;
  background-color: #e87361cf;
}
.sideFilter {
  background-color: #fdfdf3;
}
</style>
