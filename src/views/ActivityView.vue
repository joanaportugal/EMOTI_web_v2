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
              <!--<b-button id="orange" class="d-flex flex-row align-items-center justify-content-center p-2 ml-2"><span class="material-icons-round" :style="{fontSize:'27px'}">keyboard_arrow_right</span></b-button>-->
              <b-button id="orange" class="d-flex flex-row align-items-center justify-content-center p-2 ml-2"><span class="material-icons-round" :style="{fontSize:'27px'}"  v-b-modal.modal-activity>done_all</span></b-button>
            </div>
            <div class="col-6 p-0">
              <b-img src="../assets/Imagem 5.png" :style="{borderRadius:'5px'}" width="475px" height="356px"></b-img>
            </div>
            <div class="col-6 p-0 d-flex flex-row justify-content-end" v-if="showCamera==true">
              <video @play="checkEmotion" autoplay class="feed"></video>
            </div>
            <div class="loading col-6 p-0 d-flex flex-row justify-content-center align-items-center" v-else>
              <h4>A carregar...</h4>
            </div>
            <div class="col-12 d-flex flex-row align-items-center justify-content-center mt-4 mb-2" >
              <b-button @click="messageAPI=result" :style="{backgroundColor:'#e87461',color:'#fdfdf3',border:'none',fontFamily:'EAmbit SemiBold'}" class="d-flex flex-row align-items-center" size="lg" :disabled="showCamera==false"><span class="material-icons-round" :style="{fontSize:'30px',paddingRight:'5px'}" >photo_camera</span> Captar Emoção</b-button>
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
               <b-button id="orange" class="d-flex flex-row align-items-center justify-content-center p-2 ml-2"><span class="material-icons-round" :style="{fontSize:'27px'}"  v-b-modal.modal-activity>done_all</span></b-button>
            </div>
            <div class="col-6 p-0 mt-4 mb-3">
              <b-img src="../assets/Imagem 5.png" :style="{borderRadius:'5px'}" width="500px" height="330px"></b-img>
            </div>
            <div class="col-6 mt-4 mb-3 p-0" :style="{minHeight:'330px'}">
              <form action="" :style="{minHeight:'330px'}" class="col-12 d-flex flex-column align-items-end p-0 justify-content-between">
                <label :class="`${answer=='Feliz' ? 'option' : 'noption'} p-3 rounded`">
                  <input v-model="answer" type="radio" value="Feliz">
                  <span :class="`${answer=='Feliz' ? 'emotionOption' : 'nEmotionOption'}`"><span :style="{fontWeight:'bolder'}" :class="`${answer=='Feliz' ? 'wordOption' : 'nWordOption'}`">A.</span> Feliz</span>
                </label>
                <label :class="`${answer=='Triste' ? 'option' : 'noption'} p-3 rounded`">
                  <input v-model="answer" type="radio" name=""  value="Triste">
                  <span :class="`${answer=='Triste' ? 'emotionOption' : 'nEmotionOption'}`"><span :style="{fontWeight:'bolder'}" :class="`${answer=='Triste' ? 'wordOption' : 'nWordOption'}`">B.</span> Triste</span>
                </label>
                <label :class="`${answer=='Envergonhado' ? 'option' : 'noption'} p-3 rounded`">
                  <input v-model="answer" type="radio" name="" id="" value="Envergonhado">
                  <span :class="`${answer=='Envergonhado' ? 'emotionOption' : 'nEmotionOption'}`"><span :style="{fontWeight:'bolder'}" :class="`${answer=='Envergonhado' ? 'emotionOption' : 'nWordOption'}`">C.</span> Envergonhado</span>
                </label>
                <label :class="`${answer=='Zangado' ? 'option' : 'noption'} p-3 rounded`">
                  <input v-model="answer" type="radio" value="Zangado">
                  <span :class="`${answer=='Zangado' ? 'emotionOption' : 'nEmotionOption'}`"><span :style="{fontWeight:'bolder'}" :class="`${answer=='Zangado' ? 'wordOption' : 'nWordOption'}`">D.</span> Zangado</span>
                </label>
              </form>
            </div>

          </div>
        </b-row>-->
      </b-container>
      <AppFooter />
      <b-modal
        id="modal-activity"
        centered
        hide-footer
        size="lg"   
        header-border-variant="0"
        header-class="color"
        body-class="colorActivity"
        hide-header 
        no-close-on-esc 
        no-close-on-backdrop
        scrollable
      >
      <div class="p-0 d-flex flex-column align-items-center py-3" :style="{fontFamily:'EAmbit Regular'}">
        <h2 :style="{fontFamily:'EAmbit SemiBold',color:'#e87461'}" class="mt-4 mb-4">Parabéns, concluíste a atividade !!</h2>
        <div class="col-10 p-3 d-flex flex-column align-items-center justify-content-start mb-4" :style="{border:'2px solid #e87461',borderRadius:'5px'}">
          <h2 :style="{fontFamily:'EAmbit SemiBold'}" class="my-2"><span :style="{color:'#e87461'}">0</span>/7</h2>
          <p :style="{fontSize:'21px'}" class="mt-3 mb-4">Conseguiste acertar em <span :style="{fontWeight:'bolder',color:'#e87461'}">5</span> questões das <span :style="{fontWeight:'bolder',color:'#e87461'}">7</span> propostas.</p>
          <table  class="col-10 text-center mt-3 mb-4">
            <tr :style="{'background-color':'#e87461',color:'#fbfbf3'}">
              <th>Pergunta</th>
              <th>Emoção</th>
              <th>Pontos</th>
            </tr>
            <tr :style="{'border-bottom':'2px solid #707070'}">
              <td class="p-3" :style="{fontWeight:'bolder'}">Que emoção está representada?</td>
              <td :style="{fontWeight:'bolder',color:'#e87461'}">Felicidade</td>
              <td>10</td>
            </tr>
            <tr :style="{'border-bottom':'2px solid #707070'}">
              <td class="p-3" :style="{fontWeight:'bolder'}">Que emoção está representada?</td>
              <td :style="{fontWeight:'bolder',color:'#e87461'}">Felicidade</td>
              <td>10</td>
            </tr>
            <tr :style="{'border-bottom':'2px solid #707070'}">
              <td class="p-3" :style="{fontWeight:'bolder'}">Que emoção está representada?</td>
              <td :style="{fontFamily:'EAmbit SemiBold',color:'#e87461'}">Felicidade</td>
              <td>10</td>
            </tr>
            <tr :style="{'border-bottom':'2px solid #707070'}">
              <td class="p-3" :style="{fontWeight:'bolder'}">Que emoção está representada?</td>
              <td :style="{fontFamily:'EAmbit SemiBold',color:'#e87461'}">Felicidade</td>
              <td>10</td>
            </tr>
          </table>
            <b-button :to="{name:'activities'}" id="orange" class="mt-3 mb-4" :style="{fontFamily:'EAmbit SemiBold'}">Voltar ao Catálogo</b-button>
        </div>
       </div>
      </b-modal>
    </main>
  </div>
</template>

<script>
import SideBar from "@/components/SideBar.vue";
import AppSearch from "@/components/AppSearch.vue";
import AppFooter from "@/components/AppFooter.vue";
import * as faceapi from "face-api.js";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "BaseView",
  data() {
    return {
      answer: '',
      result:"",
      messageAPI:'Não foi captada nenhuma emoção.',
      activitiy:"",
      //Reconhecimento
      showCamera:false
    }
  },
  components: {
    SideBar,
    AppSearch,
    AppFooter
  },

  computed: {
    ...mapGetters(["getUser","getActivities"]),
  },
  methods: {
    ...mapActions(["findUser","findActivities"]),

    changeResultCamera(value){
      this.messageAPI=value
    },

    //API

    async init() {
      if('mediaDevices' in navigator && 'getUserMedia' in navigator.mediaDevices){
        navigator.mediaDevices.getUserMedia({video:true}).then(stream=>{
          const videoPlayer=document.querySelector("video");
          videoPlayer.srcObject=stream;
          videoPlayer.play();
        })
        this.showCamera=true
      }
      else{
        alert('Cannot get mediaDevices')
      }
    
    },
    async initIA(){
     await faceapi.nets.tinyFaceDetector.loadFromUri('/models')
     await faceapi.nets.faceLandmark68Net.loadFromUri('/models')
     await faceapi.nets.faceRecognitionNet.loadFromUri('/models')
     await faceapi.nets.faceExpressionNet.loadFromUri('/models')
    },

    async checkEmotion(){
      const video=document.querySelector("video")
      setInterval(async()=>{
        const detections=await faceapi.detectAllFaces(video,new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceExpressions()
        if (detections.length==0){
          this.result='A câmera não te detetou';
        }
        else{
          let result=Object.keys(detections[0].expressions).reduce(function(a, b){ return detections[0].expressions[a] > detections[0].expressions[b] ? a : b })
           this.result=result;
        }
      },1000)

    }

  },
  created() {
    this.findUser();
    this.findActivities(`?id=${this.$route.params.id}`).then(()=>{
      this.activitiy=this.getActivities[0]
    })
  },
   beforeMount () {
    this.initIA().then(()=>{
      this.init();
    })
  }
}
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

.emotionOption{
  color:white;
}

.nEmotionOption{
  color:black;
}

.noption:hover .nEmotionOption{
  color:white
}

.wordOption{
  color:white;
}

.nWordOption{
  color:#e87461
}

.noption:hover .nWordOption{
  color:white;
}

.loading{
  border-radius: 5px;
  background-color:#e87361e7;
  color:white;
  animation-duration: 8s;
  animation-name: scaleit;
  animation-direction:alternate;
  animation-iteration-count:infinite;
}

@keyframes scaleit {
0% {
background-color: #e87361e7;
}
50% {
background-color: #34B187;
}
100% {
background-color: #F5BAD6;
}
}

video {
  transform: rotateY(180deg);
  -webkit-transform: rotateY(180deg); /* Safari and Chrome */
  -moz-transform: rotateY(180deg); /* Firefox */
  border-radius: 5px;
  width:475px;
}

.btn:focus {
  outline: 0px !important;
  -webkit-appearance: none;
  box-shadow: none !important;
}

table {
  border-collapse: collapse;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  overflow: hidden;
}

.colorActivity{
  background-color:#fdfdf3;
  border-radius: 5px;
  border-color: transparent;
}
</style>
