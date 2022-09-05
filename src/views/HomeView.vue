<template>
  <div class="d-flex">
    <aside>
      <SideBar activeTab="Página Principal" v-if="this.getUser!=null" :user="this.getUser" />
    </aside>
    <main>
      <AppSearch />
      <b-container class="bv-example-row">
        <b-row>
          <b-col cols="8">
            <h2 :style="{ fontFamily: 'EAmbit SemiBold', color: '#2B4141' }">
              Novidades
            </h2>
            <div
              class="rounded d-flex flex-row flex-wrap justify-content-around align-items-around pb-3"
              :style="{border: '2px solid #e87461',height:'450px'}"
            >
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
            </div>
          </b-col>
          <b-col cols="4">
            <h2 :style="{ fontFamily: 'EAmbit SemiBold', color: '#2B4141' }">
              Estatísticas
            </h2>
            <div>
              <div class="rounded" :style="{border: '2px solid #e87461'}">
                <p>aa</p>
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
import { mapActions, mapGetters } from 'vuex';

export default {
  name: "HomeView",
  components: {
    SideBar,
    AppSearch,
    AppFooter,
  },
  computed: {
    ...mapGetters(['getUser'])
  },
  methods: {
    ...mapActions(['findUser'])
  },
  mounted () {
    this.findUser();
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
  width: 82vw;
  z-index: 1;
  position: fixed;
  top: 0;
  right: 0;
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
