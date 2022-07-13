<template>
  <div class="d-flex">
    <aside>
      <SideBar />
    </aside>
    <main>
      <AppSearch />
      <b-container class="bv-example-row mt-5">
        <b-row>
          <b-col cols="8">
            <h2 :style="{ fontFamily: 'EAmbit SemiBold', color: '#2B4141' }">
              Novidades
            </h2>
            <div
              class="rounded d-flex flex-row flex-wrap justify-content-around align-items-around pb-3"
              style="border: 2px solid #e87461"
            >
              <div class="m-3" style="position: relative">
                <b-img src="../assets/Imagem 2.png"></b-img>
                <div
                  class="col-12 d-flex flex-row justify-content-between align-items-center activityTitle"
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
                    class="d-flex flex-row justify-content-center align-items-center"
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
                <b-img src="../assets/Imagem 2.png"></b-img>
                <div
                  class="col-12 d-flex flex-row justify-content-between align-items-center activityTitle"
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
                    class="d-flex flex-row justify-content-center align-items-center"
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
                <b-img src="../assets/Imagem 2.png"></b-img>
                <div
                  class="col-12 d-flex flex-row justify-content-between align-items-center activityTitle"
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
                    class="d-flex flex-row justify-content-center align-items-center"
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
                <b-img src="../assets/Imagem 2.png"></b-img>
                <div
                  class="col-12 d-flex flex-row justify-content-between align-items-center activityTitle"
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
                    class="d-flex flex-row justify-content-center align-items-center"
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
              Estatísticas
            </h2>
            <div>
              <div class="rounded" style="border: 2px solid #e87461">
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

export default {
  name: "HomeView",
  components: {
    SideBar,
    AppSearch,
    AppFooter,
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

.activityTitle {
  background-color: #e87361cf;
  position: absolute;
  bottom: 0px;
  left: 0px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  min-height: 15%;
}
</style>
