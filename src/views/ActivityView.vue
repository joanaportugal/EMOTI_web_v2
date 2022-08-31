<template>
  <div class="d-flex">
    <aside>
      <SideBar
        activeTab="Atividades"
        v-if="this.getUser != null"
        :user="this.getUser"
      />
    </aside>
    <main>
      <AppSearch />
      <b-container class="bv-example-row mb-5">
        <!-- Reconhecimento-->
        <b-row class="mx-4 mx-4 d-flex flex-row flex-wrap justify-content-center">
           <h2
            :style="{ fontFamily: 'EAmbit SemiBold' }"
            class="mt-4 p-0 col-12"
          >
            <span :style="{ color: '#e87461' }">Reconhecimento</span> | Queres brincar ?
          </h2>
           <div
            class="col-12 p-0 px-4 py-3 d-flex flex-row flex-wrap"
            :style="{ border: '2px solid #e87461', borderRadius: '5px' }"
          >
            <div
              class="col-10 mb-3 p-0 d-flex flex-row align-items-center"
            >
              <h5 class="m-0 p-0"><span :style="{fontWeight:'600',color:'#e87461'}">Pergunta |</span> Como está a mãe do Harry?</h5>
            </div>
            <div class="col-2 mb-3 p-0 d-flex flex-row align-items-center">
              <span :style="{ fontFamily: 'EAmbit SemiBold',fontSize:'23px' }" class="mx-3"><span :style="{color:'#e87461'}">1</span>/4</span>
              <b-button id="orange" class="d-flex flex-row align-items-center justify-content-center p-2 mr-2"><span class="material-icons-round" :style="{fontSize:'27px'}">keyboard_arrow_left</span></b-button>
              <b-button id="orange" class="d-flex flex-row align-items-center justify-content-center p-2 ml-2"><span class="material-icons-round" :style="{fontSize:'27px'}">keyboard_arrow_right</span></b-button>
            </div>
            <div class="col-6 p-0">
              <b-img src="../assets/Imagem 5.png" :style="{borderRadius:'5px'}" width="475px" height="356px"></b-img>
            </div>
            <div class="col-6 p-0 d-flex flex-row justify-content-end" >
              <Camera :see="'Camera'"/>
            </div>
            <div class="col-12">
              <Camera :see="'Button'" @changeMessage="changeResultCamera"/>
            </div>
            <div class="col-12 d-flex flex-row align-items-center justify-content-center mt-4">
              <h5><span :style="{fontWeight:'bolder',color:'#e87461'}">Emoção Captada: </span>{{messageAPI}}</h5>
            </div>
          </div>
        </b-row>

        <!--Quiz--><!--
        <b-row class="mx-4 d-flex flex-row flex-wrap justify-content-center">
          <h2
            :style="{ fontFamily: 'EAmbit SemiBold' }"
            class="mt-4 p-0 col-12"
          >
            <span :style="{ color: '#e87461' }">Quiz</span> | Queres brincar ?
          </h2>
          <div
            class="col-12 p-0 px-4 py-3 d-flex flex-row flex-wrap"
            :style="{ border: '2px solid #e87461', borderRadius: '5px' }"
          >
            <div
              class="col-10 mb-3 p-0 d-flex flex-row align-items-center"
            >
              <h5 class="m-0 p-0"><span :style="{fontWeight:'600',color:'#e87461'}">Pergunta |</span> Como está a mãe do Harry?</h5>
            </div>
            <div class="col-2 mb-3 p-0 d-flex flex-row align-items-center">
              <span :style="{ fontFamily: 'EAmbit SemiBold',fontSize:'23px' }" class="mx-3"><span :style="{color:'#e87461'}">1</span>/4</span>
              <b-button id="orange" class="d-flex flex-row align-items-center justify-content-center p-2 mr-2"><span class="material-icons-round" :style="{fontSize:'27px'}">keyboard_arrow_left</span></b-button>
              <b-button id="orange" class="d-flex flex-row align-items-center justify-content-center p-2 ml-2"><span class="material-icons-round" :style="{fontSize:'27px'}">keyboard_arrow_right</span></b-button>
            </div>
            <div class="col-6 p-0 mt-4 mb-3">
              <b-img src="../assets/Imagem 5.png" :style="{borderRadius:'5px'}" width="500px" height="330px"></b-img>
            </div>
            <div class="col-6 mt-4 mb-3 p-0" :style="{minHeight:'330px'}">
              <form action="" :style="{minHeight:'330px'}" class="col-12 d-flex flex-column align-items-end p-0 justify-content-between">
                <label :class="`${answer=='Feliz' ? 'option' : 'noption'} p-3 rounded`">
                  <input v-model="answer" type="radio" value="Feliz">
                  <span><span :style="{fontWeight:'bolder'}">A.</span> Feliz</span>
                </label>
                <label :class="`${answer=='Triste' ? 'option' : 'noption'} p-3 rounded`">
                  <input v-model="answer" type="radio" name=""  value="Triste">
                  <span><span :style="{fontWeight:'bolder'}">B.</span> Triste</span>
                </label>
                <label :class="`${answer=='Envergonhado' ? 'option' : 'noption'} p-3 rounded`">
                  <input v-model="answer" type="radio" name="" id="" value="Envergonhado">
                  <span><span :style="{fontWeight:'bolder'}">C.</span> Envergonhado</span>
                </label>
                <label :class="`${answer=='Zangado' ? 'option' : 'noption'} p-3 rounded`">
                  <input v-model="answer" type="radio" value="Zangado">
                  <span><span :style="{fontWeight:'bolder'}">D.</span> Zangado</span>
                </label>
              </form>
            </div>

          </div>
        </b-row>-->
      </b-container>
      <AppFooter />
    </main>
  </div>
</template>

<script>
import SideBar from "@/components/SideBar.vue";
import AppSearch from "@/components/AppSearch.vue";
import AppFooter from "@/components/AppFooter.vue";
import Camera from "@/components/Camera.vue"
import { mapGetters, mapActions } from "vuex";

export default {
  name: "BaseView",
  data() {
    return {
      answer: '',
      messageAPI:'Não foi captada nenhuma emoção.'
    }
  },
  components: {
    SideBar,
    AppSearch,
    AppFooter,
    Camera
  },

  computed: {
    ...mapGetters(["getUser"]),
  },
  methods: {
    ...mapActions(["findUser"]),

    changeResultCamera(value){
      this.messageAPI=value
    }
  },
  mounted() {
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
  width: 81.3vw;
  z-index: 1;
  position: fixed;
  top: 0;
  right: 0;
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

.option {
  background-color: #e87461;
  width: 450px;
  border:2px solid #e87461;
  box-shadow: #00000017 2px 3px;
  text-align: start;
  color:white;
  font-size: 18px;
}
.option input {
	display: none;
}
.noption input{
  display: none;
}

.noption:hover {
	background-color: #e87461;
  box-shadow: #00000017 2px 3px;
  color:white;
}

.noption{
  background-color: #fdfdf3;
  width: 450px;
  border:2px solid #e87461;
  text-align: start;
  color:#e87461;
  font-size: 18px;
}
</style>
