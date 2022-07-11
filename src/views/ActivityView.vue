<template>
  <div class="d-flex">
    <aside>
      <SideBar />
    </aside>
    <main class="d-flex flex-column">
      <AppSearch />
      <b-container class="bv-example-row mt-5">
        <b-row class="d-flex flex-row justify-content-center">
          <b-col cols="12"><!--b-col cols="7"-->
            <h2 :style="{ fontFamily: 'EAmbit SemiBold', color: '#2B4141' }">
              Queres Brincar ?
            </h2>
            <!--
            <div class="col-12 row pt-3 pb-3 justify-content-center" :style="{border:'2px solid #e87461',borderRadius:'5px'}">
                <div class="col-2 d-flex flex-row justify-content-end"><b-button :style="{backgroundColor:'#e87461',border:'none'}" class="d-flex flex-row justify-content-center align-items-center p-0 p-1"><span class="material-icons-round" :style="{fontSize:'30px'}">keyboard_arrow_left</span></b-button></div>
                <div class="col-6 d-flex flex-row justify-content-center align-items-center">Pergunta 1 de 1</div>
                <div class="col-2"><b-button :style="{backgroundColor:'#e87461',border:'none'}" class="d-flex flex-row justify-content-center align-items-center p-0 p-1"><span class="material-icons-round" :style="{fontSize:'30px'}">keyboard_arrow_right</span></b-button></div> 
                <div class="col-9 d-flex flex-row justify-content-center mt-3">
                    <b-img src="../assets/Imagem 5.png" fluid></b-img>
                </div>
                <div class="col-8 mt-2 p-0">Seleciona a opção certa !</div>
                <div class="col-8 mb-4">
                    <b-form-group v-slot="{ ariaDescribedby }">
                        <b-form-radio-group  :aria-describedby="ariaDescribedby" stacked>
                        <b-form-radio class="mb-3" size="lg" :aria-describedby="ariaDescribedby" name="some-radios">aa</b-form-radio>
                        <b-form-radio class="mb-3" size="lg" :aria-describedby="ariaDescribedby" name="some-radios">aa</b-form-radio>
                        <b-form-radio class="mb-3" size="lg" :aria-describedby="ariaDescribedby" name="some-radios">aa</b-form-radio>
                        <b-form-radio class="mb-3" size="lg" :aria-describedby="ariaDescribedby" name="some-radios">aa</b-form-radio>
                        </b-form-radio-group>
                    </b-form-group>
                </div>
            </div>
            -->
            <div class="col-12 row pt-3 pb-3 justify-content-center" :style="{border:'2px solid #e87461',borderRadius:'5px'}">
                <div class="col-3 d-flex flex-row justify-content-center"><b-button :style="{backgroundColor:'#e87461',border:'none'}" class="d-flex flex-row justify-content-center align-items-center p-0 p-1"><span class="material-icons-round" :style="{fontSize:'30px'}">keyboard_arrow_left</span></b-button></div>
                <div class="col-6 d-flex flex-row justify-content-center align-items-center">Pergunta 1 de 1</div>
                <div class="col-3 d-flex flex-row justify-content-center"><b-button :style="{backgroundColor:'#e87461',border:'none'}" class="d-flex flex-row justify-content-center align-items-center p-0 p-1"><span class="material-icons-round" :style="{fontSize:'30px'}">keyboard_arrow_right</span></b-button></div>
                <div class="col-10 p-0 d-flex flex-row justify-content-around mt-3 mb-2">
                    <b-img src="../assets/Imagem 5.png" fluid></b-img>
                    <b-img src="../assets/Imagem 5.png"   fluid></b-img>
                </div>
                <div class="col-12 d-flex flex-row justify-content-center align-items-center mt-4 mb-2">
                    <b-button class="d-flex flex-row align-items-center" :style="{backgroundColor:'#e87461',border:'none'}"><span class="material-icons-round" style="padding-right:5px;">photo_camera</span> Tirar Foto</b-button>
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

<style scoped>
aside {
  width: 18vw;
  background-color: #e87361cf;
}
</style>