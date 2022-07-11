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
              Novidades
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
              <div class="m-3" style="position: relative">
                <b-img src="../assets/Imagem 2.png"></b-img>
                <div
                  class="col-12 d-flex flex-row justify-content-between align-items-center"
                  style="
                    background-color: #e87361cf;
                    position: absolute;
                    bottom: 0px;
                    left: 0px;
                    border-bottom-left-radius: 5px;
                    border-bottom-right-radius: 5px;
                    min-height:15%
                  "
                >
                  <p :style="{ fontFamily: 'EAmbit SemiBold', color: '#FDFDF3'}" class="d-flex flex-row align-items-center my-2"><span class="material-icons-round" style="padding-right:8px">extension</span> Queres Brincar ?</p>
                  <router-link to="#" class="d-flex flex-row justify-content-center align-items-center" style="color:#fdfdf3"><span class="material-icons-round" shadow-lg style="font-size:35px;">play_circle</span></router-link>
    
                </div>
              </div>
              <div class="m-3" style="position: relative">
                <b-img src="../assets/Imagem 2.png"></b-img>
                <div
                  class="col-12 d-flex flex-row justify-content-between align-items-center"
                  style="
                    background-color: #e87361cf;
                    position: absolute;
                    bottom: 0px;
                    left: 0px;
                    border-bottom-left-radius: 5px;
                    border-bottom-right-radius: 5px;
                    min-height:15%
                  "
                >
                  <p :style="{ fontFamily: 'EAmbit SemiBold', color: '#FDFDF3'}" class="d-flex flex-row align-items-center my-2"><span class="material-icons-round" style="padding-right:8px">extension</span> Queres Brincar ?</p>
                  <router-link to="#" class="d-flex flex-row justify-content-center align-items-center" style="color:#fdfdf3"><span class="material-icons-round" shadow-lg style="font-size:35px;">play_circle</span></router-link>
    
                </div>
              </div>
               <div class="m-3" style="position: relative">
                <b-img src="../assets/Imagem 2.png"></b-img>
                <div
                  class="col-12 d-flex flex-row justify-content-between align-items-center"
                  style="
                    background-color: #e87361cf;
                    position: absolute;
                    bottom: 0px;
                    left: 0px;
                    border-bottom-left-radius: 5px;
                    border-bottom-right-radius: 5px;
                    min-height:15%
                  "
                >
                  <p :style="{ fontFamily: 'EAmbit SemiBold', color: '#FDFDF3'}" class="d-flex flex-row align-items-center my-2"><span class="material-icons-round" style="padding-right:8px">extension</span> Queres Brincar ?</p>
                  <router-link to="#" class="d-flex flex-row justify-content-center align-items-center" style="color:#fdfdf3"><span class="material-icons-round" shadow-lg style="font-size:35px;">play_circle</span></router-link>
    
                </div>
              </div>
               <div class="m-3" style="position: relative">
                <b-img src="../assets/Imagem 2.png"></b-img>
                <div
                  class="col-12 d-flex flex-row justify-content-between align-items-center"
                  style="
                    background-color: #e87361cf;
                    position: absolute;
                    bottom: 0px;
                    left: 0px;
                    border-bottom-left-radius: 5px;
                    border-bottom-right-radius: 5px;
                    min-height:15%
                  "
                >
                  <p :style="{ fontFamily: 'EAmbit SemiBold', color: '#FDFDF3'}" class="d-flex flex-row align-items-center my-2"><span class="material-icons-round" style="padding-right:8px">extension</span> Queres Brincar ?</p>
                  <router-link to="#" class="d-flex flex-row justify-content-center align-items-center" style="color:#fdfdf3"><span class="material-icons-round" shadow-lg style="font-size:35px;">play_circle</span></router-link>
    
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
};
</script>

<style>
aside {
  width: 18vw;
  background-color: #e87361cf;
}
</style>
