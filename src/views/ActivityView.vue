<template>
 <div class="p-0">
    <div class="loading d-flex flex-column align-items-center justify-content-center" :style="{position:'fixed',zIndex:'2'}"  v-if="showLoading==true">
      <b-spinner style="width: 8rem; height: 8rem;color:white" label="Spinning"></b-spinner>
      <h3 class="mt-4" style="color:white">A carregar <span class="info">...</span></h3>
    </div>
  <div class="d-flex">
    <aside>
      <SideBar
        activeTab="Atividades"
        v-if="this.getUser != null"
        :user="this.getUser"
      />
    </aside>
    <main v-if="activity!=''">
      <AppSearch />
      <b-container class="bv-example-row mb-5">
        <!-- Reconhecimento-->
        <b-row class="mx-4 mx-4 d-flex flex-row flex-wrap justify-content-center" v-if="activity.category=='Reconhecimento'">
           <h2
            :style="{ fontFamily: 'EAmbit SemiBold' }"
            class="mt-4 p-0 col-12"
          >
            <span :style="{ color: '#e87461' }">Reconhecimento</span> | {{activity.title}}
          </h2>
           <div
            class="col-12 p-0 px-4 py-3 d-flex flex-row flex-wrap"
            :style="{ border: '2px solid #e87461', borderRadius: '5px' }"
          >
            <div
              class="col-10 mb-3 p-0 d-flex flex-row align-items-center"
            >
              <h5 class="m-0 p-0"><span :style="{fontWeight:'600',color:'#e87461'}">Pergunta |</span> {{activity.questions[positionArray].text}}</h5>
            </div>
            <div class="col-2 mb-3 p-0 d-flex flex-row align-items-center">
              <span :style="{ fontFamily: 'EAmbit SemiBold',fontSize:'23px' }" class="mx-3"><span :style="{color:'#e87461'}">{{nQuestion}}</span>/{{activity.questions.length}}</span>
              <b-button id="orange" class="d-flex flex-row align-items-center justify-content-center p-2 mr-2" :disabled="nQuestion==1" @click="previousQuestion"><span class="material-icons-round" :style="{fontSize:'27px'}">keyboard_arrow_left</span></b-button>
              <b-button id="orange" class="d-flex flex-row align-items-center justify-content-center p-2 ml-2" @click="nextQuestion" v-if="positionArray != activity.questions.length-1"><span class="material-icons-round" :style="{fontSize:'27px'}">keyboard_arrow_right</span></b-button>
              <b-button id="orange" class="d-flex flex-row align-items-center justify-content-center p-2 ml-2" @click="checkActivity" v-b-modal.modal-activity v-else><span class="material-icons-round" :style="{fontSize:'27px'}">done_all</span></b-button>
            </div>
            <div class="col-6 p-0">
              <b-img :src="activity.questions[positionArray].img" :style="{borderRadius:'5px'}" width="480px" height="321px"></b-img>
            </div>
            <div class="col-6 p-0 d-flex flex-row justify-content-end" v-if="showCamera==true">
              <video @play="checkEmotion" autoplay class="feed"></video>
            </div>
            <div class="loadingCam col-6 p-0 d-flex flex-row justify-content-center align-items-center" v-else>
              <h4>A carregar...</h4>
            </div>
            <div class="col-12 d-flex flex-row align-items-center justify-content-center mt-4 mb-2" >
              <b-button @click="addAnswer" :style="{backgroundColor:'#e87461',color:'#fdfdf3',border:'none',fontFamily:'EAmbit SemiBold'}" class="d-flex flex-row align-items-center" size="lg" :disabled="showCamera==false"><span class="material-icons-round" :style="{fontSize:'30px',paddingRight:'5px'}" >photo_camera</span> Captar Emoção</b-button>
            </div>
            <div class="col-12 d-flex flex-row align-items-center justify-content-center mt-4">
              <h5><span :style="{fontWeight:'bolder',color:'#e87461'}">Emoção Captada: </span>{{messageAPI}}</h5>
            </div>
          </div>
        </b-row>

        <!--Quiz-->
        <b-row class="mx-4 d-flex flex-row flex-wrap justify-content-center" v-if="activity.category!='Reconhecimento'">
          <h2
            :style="{ fontFamily: 'EAmbit SemiBold' }"
            class="mt-4 p-0 col-12"
          >
            <span :style="{ color: '#e87461' }">Quiz</span> | {{activity.title}}
          </h2>
          <div
            class="col-12 p-0 px-4 py-3 d-flex flex-row flex-wrap"
            :style="{ border: '2px solid #e87461', borderRadius: '5px' }"
          >
            <div
              class="col-10 mb-3 p-0 d-flex flex-row align-items-center"
            >
              <h5 class="m-0 p-0"><span :style="{fontWeight:'600',color:'#e87461'}">Pergunta |</span> {{activity.questions[positionArray].text}}</h5>
            </div>
            <div class="col-2 mb-3 p-0 d-flex flex-row align-items-center">
              <span :style="{ fontFamily: 'EAmbit SemiBold',fontSize:'23px' }" class="mx-3"><span :style="{color:'#e87461'}">{{nQuestion}}</span>/{{activity.questions.length}}</span>
              <b-button id="orange" class="d-flex flex-row align-items-center justify-content-center p-2 mr-2" :disabled="nQuestion==1" @click="previousQuestion"><span class="material-icons-round" :style="{fontSize:'27px'}">keyboard_arrow_left</span></b-button>
              <b-button id="orange" class="d-flex flex-row align-items-center justify-content-center p-2 ml-2" @click="nextQuestion" v-if="positionArray != activity.questions.length-1"><span class="material-icons-round" :style="{fontSize:'27px'}">keyboard_arrow_right</span></b-button>
              <b-button id="orange" class="d-flex flex-row align-items-center justify-content-center p-2 ml-2" @click="checkActivity" v-b-modal.modal-activity v-else><span class="material-icons-round" :style="{fontSize:'27px'}">done_all</span></b-button>
            </div>
            <div class="col-6 p-0 mt-4 mb-3">
              <b-img :src="activity.questions[positionArray].img" :style="{borderRadius:'5px'}" width="500px" height="330px"></b-img>
            </div>
            <div class="col-6 mt-4 mb-3 p-0" :style="{minHeight:'330px'}">
              <form action="" :style="{minHeight:'330px'}" class="col-12 d-flex flex-column align-items-end p-0 m-0 justify-content-between">
                <label :class="`${responses[positionArray]==question ? 'option' : 'noption'} p-3 rounded`" v-for="(question,index) in activity.questions[positionArray].options" :key="index">
                  <input v-model="responses[positionArray]" type="radio" :value="question">
                  <span :class="`${responses[positionArray]==question ? 'emotionOption' : 'nEmotionOption'}`"><span :style="{fontWeight:'bolder'}" :class="`${responses[positionArray]==question ? 'wordOption' : 'nWordOption'}`">{{letters[index]}}</span> {{question}}</span>
                </label>
              </form>
            </div>

          </div>
        </b-row>
      </b-container>
      <AppFooter />
      <b-modal
        id="modal-activity"
        centered
        hide-footer   
        header-border-variant="0"
        header-class="color"
        body-class="colorActivity"
        hide-header 
        no-close-on-esc 
        no-close-on-backdrop
      >
      <div class="p-0 d-flex flex-column align-items-center py-3" :style="{fontFamily:'EAmbit Regular'}">
        <h2 :style="{fontFamily:'EAmbit SemiBold',color:'#2B4141'}" class="mt-4 mb-4">Resultado</h2>
        <div class="rounded col-12 p-3 text-center" :style="{border:'2px solid #e87461'}">
          <div class="p-0 col-12 d-flex flex-row align-items-center">
            <b-link @click="whatShow='resume'" :style="{textDecoration:'none',opacity: whatShow === 'resume' ? 1 : 0.4,}"><h5 :style="{fontFamily:'EAmbit SemiBold',color:'#2B4141'}" class="d-flex flex-row align-items-center"><span class="material-icons-round" :style="{color:'#e87461',paddingRight:'5px'}">info</span> Resumo</h5></b-link>
            <b-link @click="whatShow='details'" :style="{textDecoration:'none',opacity: whatShow === 'details' ? 1 : 0.4,}"><h5 :style="{fontFamily:'EAmbit SemiBold',color:'#2B4141'}" class="d-flex flex-row align-items-center ml-3"><span class="material-icons-round" :style="{color:'#e87461',paddingRight:'5px'}">notes</span> Detalhes</h5></b-link>
          </div>
         
          <div class="p-0 col-12" v-if="whatShow=='resume'">
            <apexchart-chart type="radialBar" height="350" :options="chartOptions" :series="series"></apexchart-chart>
            <p :style="{fontSize:'20px'}" class="mt-3 mb-4">Conseguiste acertar em <span :style="{fontWeight:'bolder',color:'#e87461'}">{{rightAnswers}}</span> questões das <span :style="{fontWeight:'bolder',color:'#e87461'}">{{activity.questions.length}}</span> propostas.</p>
          </div>

          <div class="p-0 col-12 d-flex flex-column align-items-center mt-2" v-else>
           <table class="col-11 text-center mt-3 mb-2">
            <tr :style="{'background-color':'#e87461',color:'#fbfbf3'}">
              <th>Pergunta</th>
              <th>Emoção</th>
              <th>Pontos</th>
            </tr>
            <tr :style="{'border-bottom':index==quizResult.length-1 ?'5px solid #e87461' :'1px solid #707070',color:'#2B4141'}" v-for="(question,index) in quizResult" :key="index">
              <td class="p-2" :style="{fontFamily:'EAmbit SemiBold'}">{{question.question.slice(0,`${question.question.length>40? 37:question.question.length}`)+`${question.question.length>40?'...':''}`}}</td>
              <td :style="{color:'#e87461'}">{{question.emotion}}</td>
              <td>{{question.points}}</td>
            </tr>
           </table>
            <p :style="{fontSize:'20px'}" class="mt-4">Conseguiste acumular mais <span :style="{fontWeight:'bolder',color:'#e87461'}">{{points}} </span>pontos.</p>
          </div>
          <div class="p-0 d-flex flex-row align-items-center justify-content-center">
            <b-button @click="$router.go(-1)" id="orange" class="mt-3 mb-3 d-flex flex-row align-items-center" :style="{fontFamily:'EAmbit SemiBold'}"><span class="material-icons-round" :style="{paddingRight:'5px'}">navigate_before</span>Voltar ao Catálogo</b-button>
          </div>
        </div>
        
       </div>
      </b-modal>
    </main>
  </div>
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
      time:3000,
      showLoading:true,
      answer: '',
      result:"",
      messageAPI:'Não foi captada nenhuma emoção.',
      activity:"",
      //Quiz
      nQuestion:1,
      positionArray:0,
      responses:[],
      letters:['A.','B.','C.','D.'],
      quizResult:[],
      rightAnswers:0,
      points:0,
      //modal
      whatShow:'resume',
      //Reconhecimento
      showCamera:false,
      localstream:'',
      //Gráfico
      series: [],
      chartOptions: {
        chart: {
          height: 350,
          type: 'radialBar',
          animations: {
            enabled: true,
            easing: 'linear',
            speed: 1000,
            animateGradually: {
                enabled: true,
                delay: 150
            },
            dynamicAnimation: {
                enabled: true,
                speed: 350
            }
          }
          
        },
        plotOptions: {
          radialBar: {
            colors:['#e87461'],
            hollow: {
              size: '65%',
            },
            track: {
              background: '#DCDCD7',
            },
             dataLabels: {
              name: {
                fontFamily:'EAmbit SemiBold',
                fontSize:'35px',
                color:'#2B4141'
              },
              value:{
                show:false
              }
             }

          },
        },
        labels: [],
        colors:['#e87461'],
        stroke: {
              lineCap: 'round'
        }
      },
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
    ...mapActions(["findUser","findActivities","updateChildActivity","createNofication"]),

    nextQuestion() {
      this.positionArray++
      this.nQuestion++
      if(this.activity.category=='Reconhecimento'){
        if(!this.responses[this.positionArray]){
          this.messageAPI='Não foi captada nenhuma emoção.'
        }
        else{
          this.messageAPI=this.responses[this.positionArray]
        }
        
      }
    },

    previousQuestion(){
      this.positionArray--
      this.nQuestion--
      if(this.activity.category=='Reconhecimento'){
        if(!this.responses[this.positionArray]){
          this.messageAPI='Não foi captada nenhuma emoção.'
        }
        else{
          this.messageAPI=this.responses[this.positionArray]
        }
      }
    },

    addAnswer(){
      this.responses[this.positionArray]=this.result;
      this.messageAPI=this.result;
    },

    checkActivity(){
      //let wrongAnswers=0;
      let rightQuestions=[]
      let wrongQuestions=[]

      for (let i = 0; i < this.activity.questions.length; i++) {
        if(this.activity.questions[i].correctAnswer==this.responses[i]){
          this.quizResult.push({question:this.activity.questions[i].text,emotion:this.activity.questions[i].correctAnswer,points:this.activity.questions[i].points});
          this.rightAnswers++
          this.points+=+this.activity.questions[i].points
          rightQuestions.push(i)
        }
        else{
          this.quizResult.push({question:this.activity.questions[i].text,emotion:this.activity.questions[i].correctAnswer,points:0});
          wrongQuestions.push(i)
        }
      }

      if(this.getUser.typeUser=='Criança'){
        this.updateChildActivity([this.activity._id,{points:this.points,questionsRight:rightQuestions,questionsWrong:wrongQuestions}])
        this.createNofication({title:'Novo Resultado',text:`A criança ${this.getUser.name.toUpperCase()} realizou a atividade ${this.activity.title.toUpperCase()} e obteve o seguinte resultado:${this.rightAnswers.length==this.activity.questions.length? 'GANHOU':'PERDEU'}.`})
      }

      this.chartOptions.labels.push(`${this.rightAnswers}/${this.activity.questions.length}`)
      this.series.push(this.rightAnswers*100/this.activity.questions.length)
    },

    changeResultCamera(value){
      this.messageAPI=value
    },

    //API

    async init() {
      if('mediaDevices' in navigator && 'getUserMedia' in navigator.mediaDevices){
        navigator.mediaDevices.getUserMedia({video:true}).then(stream=>{
          const videoPlayer=document.querySelector("video");
          this.localstream=stream;
          videoPlayer.srcObject=stream;
          videoPlayer.play();
        })
        this.showCamera=true;
      }
      else{
        alert('Cannot get mediaDevices')
        this.$router.go(-1)
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
          if (result=='happy') {
            this.result='Feliz'
          }else if (result=='neutral') {
            this.result='Neutro'
          }else if (result=='sad') {
            this.result='Triste'
          }else if (result=='surprised') {
            this.result='Surpreendido'
          }else if (result=='angry') {
            this.result='Zangado'
          }else if (result=='fearful') {
            this.result='Assustado'
          }else if (result=='disgusted'){
            this.result='Enojado'
          }
          else{
            this.result=result
          }

        }
      },1000)

    },
    showOrNotLoading(payload){
      setTimeout(()=>{
        this.showLoading=false
      },payload);
    }

  },
  created() {
    
    this.findUser()
    this.findActivities(`?id=${this.$route.params.id}`).then(()=>{
      this.activity=this.getActivities
    }).then(()=>{
      if(this.getActivities.length==0){
        this.$router.go(-1)
      }
      else{
        if(this.activity.category=='Reconhecimento'){
          this.initIA().then(()=>{
          this.init();
          this.showOrNotLoading(15000);
        })
        }
        else{
          this.showOrNotLoading(1500);
        }

      }
        
    })
  },

  beforeDestroy(){
    if(this.activity.category=='Reconhecimento'){
      this.showCamera=false;
      this.localstream.getTracks()[0].stop();
    }
  
  },
  

  watch: {
    '$route.params.id'(newValue,oldValue) {
      if(newValue!=oldValue){
        location.reload()
      }
    }
  },
   
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

.loadingCam{
  border-radius: 5px;
  background-color:#e87361e7;
  color:white;
  animation-duration: 8s;
  animation-name: scaleit;
  animation-direction:alternate;
  animation-iteration-count:infinite;
  font-family: 'EAmbit SemiBold';
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

video {
  transform: rotateY(180deg);
  -webkit-transform: rotateY(180deg); /* Safari and Chrome */
  -moz-transform: rotateY(180deg); /* Firefox */
  border-radius: 5px;
  width:480px;
  height:321px;
  object-fit: cover;
  
}

.btn:focus {
  outline: 0px !important;
  -webkit-appearance: none;
  box-shadow: none !important;
}

table {
  border-collapse: collapse;
  border-radius: 5px;
  overflow: hidden;
}

.colorActivity{
  background-color:#fdfdf3;
  border-radius: 5px;
  border-color: transparent;
}
</style>
