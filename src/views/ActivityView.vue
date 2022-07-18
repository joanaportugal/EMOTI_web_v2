<template>
  <div class="d-flex">
    <aside>
      <SideBar />
    </aside>
    <main>
      <AppSearch />
      <b-container class="bv-example-row  mt-3 mb-5">
        <!-- Reconhecimento
        <b-row class="mx-4">
           <h2 style="font-family: 'EAmbit SemiBold'" class="mt-5 p-0 col-12">
            Queres brincar ?
          </h2>
          <div class="col-12 p-0 d-flex flex-row flex-wrap" :style="{border:'2px solid #e87461',borderRadius:'5px'}">
            <div class="col-2 d-flex flex-row justify-content-end p-0 mt-3 mb-2 px-3" >
              <b-button id="orange" class="d-flex flex-row align-items-center justify-content-center p-2"><span class="material-icons-round" :style="{fontSize:'35px'}">keyboard_arrow_left</span></b-button>
            </div>
            <div class="col-8 d-flex flex-row align-items-end justify-content-center mt-2 mb-2 px-3" >
              <p style="font-size:20px">Pergunta <span style="font-weight:bolder;color:#e87461">1</span> de <span style="font-weight:bolder">10</span>
              </p>
            </div>
            <div class="col-2 d-flex flex-row justify-content-start p-0  mt-3 mb-2 px-3" >
              <b-button id="orange" class="d-flex flex-row align-items-center justify-content-center p-2"><span class="material-icons-round" :style="{fontSize:'35px'}">keyboard_arrow_right</span></b-button>
            </div>
            <div class="col-6 d-flex flex-row justify-content-end my-4">
              <b-img src="../assets/Imagem 5.png"></b-img>
            </div>
            <div class="col-6 d-flex flex-row justify-content-start my-4">
              <b-img src="../assets/Imagem 5.png"></b-img>
            </div>
            <div class="col-12 d-flex flex-row align-items-center justify-content-center mt-2 mb-4">
              <b-button :style="{backgroundColor:'#e87461',color:'#fdfdf3',border:'none',fontFamily:'EAmbit SemiBold'}" class="d-flex flex-row align-items-center"><span class="material-icons-round" :style="{fontSize:'30px',paddingRight:'5px'}">photo_camera</span> Tirar Foto</b-button>
            </div>
          </div>
        </b-row>-->

        <!--Quiz-->
        <b-row class="mx-4 d-flex flex-row flex-wrap justify-content-center">
           <h2 style="font-family: 'EAmbit SemiBold'" class="mt-5 p-0 col-8">
            Queres brincar ?
          </h2>
          <div class="col-8 p-0 d-flex flex-row flex-wrap justify-content-center" :style="{border:'2px solid #e87461',borderRadius:'5px'}">
            <div class="col-7 d-flex flex-row justify-content-between p-0 align-items-end my-3">
               <b-button id="orange" class="d-flex flex-row align-items-center justify-content-center p-2"><span class="material-icons-round" :style="{fontSize:'35px'}">keyboard_arrow_left</span></b-button>
              <p style="font-size:20px">Pergunta <span style="font-weight:bolder;color:#e87461">1</span> de <span style="font-weight:bolder">10</span></p>
               <b-button id="orange" class="d-flex flex-row align-items-center justify-content-center p-2"><span class="material-icons-round" :style="{fontSize:'35px'}">keyboard_arrow_right</span></b-button>
            </div>
            <div class="col-8 d-flex flex-row align-items-center justify-content-center">
              <b-img src="../assets/Imagem 5.png"></b-img>
            </div>
            <div class="col-7 p-0">
              <b-form-group label="Seleciona a opção correta!" v-slot="{ ariaDescribedby }">
                <b-form-radio class="mb-2" v-model="selected" :aria-describedby="ariaDescribedby" name="some-radios" value="A" size="lg">Option A</b-form-radio>
                <b-form-radio class="mb-2" v-model="selected" :aria-describedby="ariaDescribedby" name="some-radios" value="B" size="lg">Option B</b-form-radio>
                <b-form-radio class="mb-2" v-model="selected" :aria-describedby="ariaDescribedby" name="some-radios" value="C" size="lg">Option C</b-form-radio>
                <b-form-radio class="mb-2" v-model="selected" :aria-describedby="ariaDescribedby" name="some-radios" value="D" size="lg">Option D</b-form-radio>
              </b-form-group>
            </div>
            
          </div>
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
  name: "BaseView",
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

#orange {
  background: #e87461;
  border: 1px solid #e87461;
  color:#fdfdf3;
}
#orange:hover {
  background: #fdfdf3;
  color: #e87461;
  border: 1px solid #e87461;
}
</style>
