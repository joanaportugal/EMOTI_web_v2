<template>
  <div class="p-0">
    <div class="loading d-flex flex-column align-items-center justify-content-center" :style="{position:'fixed',zIndex:'2'}"  v-if="showLoading==true">
      <b-spinner style="width: 8rem; height: 8rem;color:white" label="Spinning"></b-spinner>
      <h3 class="mt-4" style="color:white">A carregar <span class="info">...</span></h3>
    </div>
  <div class="d-flex">
    <aside>
      <SideBar activeTab="Página Principal" v-if="this.getUser!=null" :user="this.getUser" />
    </aside>
    <main v-if="getUser!=null" >
      <AppSearch />
      <b-container class="bv-example-row mb-3">
        <b-row>
          <b-col cols="8">
            <h2 :style="{ fontFamily: 'EAmbit SemiBold', color: '#2B4141' }">
              Novidades
            </h2>
            <div class="col-12 p-0 rounded p-3" :style="{border:'2px solid #e87461',minHeight:'510px'}">
              <div class="col-12 p-0 d-flex flex-row flex-wrap justify-content-between">
                <div class="d-flex flex-column justify-content-start align-items-center my-4 myCard" 
                :style="{borderRadius:'5px',position:'relative'}"
                v-for="(activity,index) in activities" :key="index"
                >
                  <b-img :src="activity.coverIMG" :style="{width:'326px',height:'189px',borderRadius:'5px'}"></b-img>
                    <div class="col-12 d-flex flex-row flex-wrap justify-content-between align-items-center activityTitle">
                        <div class="col-11 p-0 py-2" >
                          <span  :style="{ fontFamily: 'EAmbit SemiBold', color: '#FDFDF3' }" class="d-flex flex-row align-items-center">
                            <span class="material-icons-round" :style="{paddingRight:'8px'}" v-if="activity.category=='Quiz'">extension</span>
                            <span class="material-icons-round" :style="{paddingRight:'8px'}" v-else>video_camera_front</span>
                            {{activity.title}}
                          </span>
                         
                        </div>
                        <div class="col-1 p-0" id="iconPlay">
                           <router-link :to="'#'" class="d-flex flex-row justify-content-center align-items-center" :style="{color: '#fdfdf3'}"><span class="material-icons-round" shadow-lg :style="{fontSize: '35px'}">play_circle</span></router-link>
                        </div>
                        <div class="col-12 mb-2 p-0 text-wrap d-flex flex-row align-items-start" id="moreInfo">
                          <p class="m-0" :style="{color:'#fdfdf3'}">{{activity.description.substr(0,106)}}<span v-if="activity.description>=106">...</span></p>
                        </div>
                        <div class="col-6 p-0 mb-2"  id="moreInfo">
                         
                        </div>
                        <div class="col-6 p-0 d-flex flex-row justify-content-end mb-2" id="moreInfo" >
                          
                          <b-button
                            pill
                            class="d-flex justify-content-center align-items-center h-75"
                            :style="{background: '#fdfdf3', color: '#e87461',border:'none'}"
                            :to="{ name: 'Atividade', params:{id:activity._id} }"
                          >
                          
                            <span class="material-icons-round" :style="{paddingRight:'3px'}">play_arrow</span>
                            Reproduzir
                          </b-button>
                        </div>
                    </div>
                </div>
              </div>
              </div>
          </b-col>
          <b-col cols="4">
            <h2 :style="{ fontFamily: 'EAmbit SemiBold', color: '#2B4141' }" v-if="getUser.typeUser=='Criança' || getUser.typeUser=='Professor'">
              Estatísticas
            </h2>
            <h2 :style="{ fontFamily: 'EAmbit SemiBold', color: '#2B4141' }" v-if="getUser.typeUser=='Tutor'">
              Últimos Acessos
            </h2>
            <h2  :style="{ fontFamily: 'EAmbit SemiBold', color: '#2B4141' }" v-if="getUser.typeUser=='Administrador'">
              Pedidos Pendentes
            </h2>
            <div>
              <div class="rounded p-3" :style="{border: '2px solid #e87461',height:'510px',overflowY:getUser.typeUser=='Tutor' || getUser.typeUser=='Administrador'?'scroll':'visible'}">
                <div v-if="getUser.typeUser=='Criança'">
                  <div class="col-12 p-0 d-flex flex-row flex-wrap align-items-center justify-content-between mt-2 mb-5" :style="{fontFamily: 'EAmbit SemiBold'}">
                    <h6 :style="{color: '#2B4141',fontSize:'18px' }" class="p-0 m-0">Resultado das Atividades</h6>
                    <b-link :style="{color:'#e87461',textDecoration:'none'}" class="d-flex flex-row align-items-center" v-if="historyUser.length>4"  @click="changeData()"><span class="material-icons-round">autorenew</span> Alternar</b-link>
                  </div>
                  <apexchart-chart type="bar" ref="realtimeChart" id="chartKid" height="350" :options="chartOptions" :series="series" class="apex" :hidden="historyUser.length<2"></apexchart-chart>
                  <div class="col-12 d-flex flex-column align-items-center justify-content-center" v-if="historyUser.length<2"><h6>Não existem registos suficientes para comparar.</h6></div>
                </div>

                <div v-if="getUser.typeUser=='Professor'">
                  <div class="col-12 p-0 d-flex flex-row flex-wrap align-items-center justify-content-between mt-2 mb-5" :style="{fontFamily: 'EAmbit SemiBold'}">
                    <h6 :style="{color: '#2B4141',fontSize:'21px' }" class="p-0 m-0">Ranking das Turmas</h6>
                    <b-link :style="{color:'#e87461',textDecoration:'none'}" class="d-flex flex-row align-items-center" v-if="historyTeams.length>4"  @click="changeData()"><span class="material-icons-round">autorenew</span> Alternar</b-link>
                  </div>
                  
                  <apexchart-chart ref="reactiveChart" type="bar" height="350" :options="chartOptions" :series="series" :hidden="historyTeams.length<2" class="apex"></apexchart-chart>
                  <div class="col-12 d-flex flex-column align-items-center justify-content-center" v-if="historyTeams.length<2"><h6>Não existem registos suficientes para comparar.</h6></div>
                </div>

                <div v-if="getUser.typeUser=='Tutor'" class="p-0">
                  <h6 :style="{color: '#2B4141',fontSize:'21px',fontFamily: 'EAmbit SemiBold'}" class="p-0 m-0 mt-2 mb-3 d-flex flex-row align-items-center"><span class="material-icons-round" :style="{color:'#e87461',paddingRight:'7px'}">family_restroom</span> Crianças Associadas</h6>
                  <p v-if="getChilds.length==0">Não existem crianças associadas.</p>
                   <table class="col-12 text-start mt-4 mb-2" v-else>
                    <tr class="text-center" :style="{'background-color':'#e87461',color:'#fbfbf3'}">
                      <th >Criança</th>
                      <th>Último Acesso</th>
                    </tr>
                    <tr :style="{'border-bottom':index==getChilds.length-1 ?'5px solid #e87461' :'1px solid #707070',color:'#2B4141'}" v-for="(child,index) in getChilds" :key="index">
                      <td class="p-2" :style="{fontFamily:'EAmbit SemiBold'}"> <b-avatar variant="light" :text="child.initials" size="2.7rem" class="mr-2"></b-avatar> {{child.name}}</td>
                      <td class="text-center">{{child.last_access.split(" ")[0]}}<br>{{child.last_access.split(" ")[1]}}</td>
                    </tr>
                   </table>
                </div>  

                <div v-if="getUser.typeUser=='Administrador'" class="p-0">
                  <h6 :style="{color: '#2B4141',fontSize:'21px',fontFamily: 'EAmbit SemiBold'}" class="p-0 m-0 mt-2 mb-3 d-flex flex-row align-items-center"><span class="material-icons-round" :style="{color:'#e87461',paddingRight:'7px'}">sports_esports</span> Atividades Personalizadas</h6>
                  <p class="text-center" v-if="activitiesForApproved.length==0">Não existem pedidos de aprovação de atividades personalizadas pendentes.</p>
                   <table class="col-12 mt-4 mb-2" v-else>
                    <tr class="text-center" :style="{'background-color':'#e87461',color:'#fbfbf3'}">
                      <th>Atividade</th>
                      <th>Ações</th>
                    </tr>
                    <tr :style="{'border-bottom':index==activitiesForApproved.length-1 ?'5px solid #e87461' :'1px solid #707070',color:'#2B4141'}" v-for="(activity,index) in activitiesForApproved" :key="index">
                      <td class="p-2" :style="{fontFamily:'EAmbit SemiBold'}"> <b-avatar variant="light" :text="activity.title.charAt(0)" size="2.7rem" class="mr-2"></b-avatar>{{activity.title.slice(0,activity.title.length>14? 14 :activity.title.length)+`${activity.title.length>14?'...':''}`}}</td>
                      <td class="text-center"><b-link :to="{ name: 'Atividade', params:{id:activity._id} }" class="mr-1" :style="{textDecoration:'none',color:'#DCDCD7'}"><span class="material-icons-round">visibility</span></b-link> <b-link class="mr-1" :style="{textDecoration:'none',color:'#34B187'}"  @click="setAcceptActivity(activity._id)"><span class="material-icons-round">check</span></b-link> <b-link :style="{textDecoration:'none',color:'#F54C25'}" @click="setDeleteActivity(activity._id)"><span class="material-icons-round">close</span></b-link></td>
                    </tr>
                   </table>
                </div>  
                
              </div>
            </div>
          </b-col>
        </b-row>
      </b-container>
      <AppFooter />
    </main>
    <b-toast id="my-toast" append-toast no-close-button header-class="headerNotify" body-class="bodyNotify">
      <h6 class="d-flex flex-row align-items-center p-0 m-0"><span class="material-icons-round mr-2 p-0">check_circle</span> {{message}}</h6>
    </b-toast>
  </div>
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
  data() {
    return {
      activities: [],
      showLoading:true,
      activitiesForApproved:[],
      message:'',
      series: [{
        name: 'Ganhou',
        data: []
      }, 
      {
        name: 'Perdeu',
        data: []
      }],
      chartOptions: {
        chart: {
          type: 'bar',
          height: 350,
          background:'#FDFDF3',
          fontFamily:'EAmbit SemiBold'
        },
        colors: ['#E87461', '#DCDCD7'],
        plotOptions: {
          bar: {
              horizontal: false,
              columnWidth: '60%',
              endingShape: 'flat',
              borderRadius: 2,
              distributed: false,
            },
        },
         dataLabels: {
          enabled: false
        },
        stroke: {
          show: true,
          width: 2,
          colors: ['transparent']
        },
        xaxis: {
          categories: [],
          axisBorder: {
            show: true,
            borderType: 'dotted',
            color: '#BFBFBF',
            height: 1,
            width: '100%',
            offsetX: 0,
            offsetY: 0
          },
          axisTicks: {
            show: true,
            borderType: 'dotted',
            color: '#BFBFBF',
            height: 6,
            offsetX: 0,
            offsetY: 0
            }
        },
        yaxis:{
          show:false
        },
        fill: {
          opacity: 1
        },
        grid: {
          yaxis: {
              lines: {
                  show: false
              }
        }
      } 
},

    startGraphKid:0,
    endGraphKid:4,
    startGraphTeacher:0,
    endGraphTeacher:4,
    historyTeams:[],
    historyUser:[]

    }
  },
  computed: {
    ...mapGetters(['getUser','getActivities','getChilds','getHistoryUser',"getTeams"])
  },
  methods: {
    ...mapActions(['findUser','findActivities','findRelations','acceptActivity','deleteActivityExtra','findHistoryUser',"findTeams",]),

    setAcceptActivity(id){
      if(confirm('Confirma a alteração (Aprovar Atividade)?')){
       this.acceptActivity(id).then(()=>{
        this.findActivities("").then(()=>{
           this.activitiesForApproved=this.getActivities.filter(activity=>activity.approved==false);
        });
        this.message='A atividade foi aprovada com sucesso.'
        this.$bvToast.show('my-toast');
       })
      }
    },

    setDeleteActivity(id){
       if(confirm('Confirma a alteração (Remover Atividade)?')){
       this.deleteActivityExtra(id).then(()=>{
        this.findActivities("").then(()=>{
          this.activitiesForApproved=this.getActivities.filter(activity=>activity.approved==false);
        });
        this.message='A atividade foi reprovada com sucesso.'
        this.$bvToast.show('my-toast');
       }) 
      }
    },
    showOrNotLoading(){
      setTimeout(()=>{
        this.showLoading=false
      },1500);
    },

    changeData(){
      if(this.getUser.typeUser=='Criança'){
        if(Math.sign(this.startGraphKid-1)==-1){
          this.startGraphKid=this.getHistoryUser.history.length-4
          this.endGraphKid=this.getHistoryUser.history.length
        }
        else{
          this.startGraphKid--
          this.endGraphKid--
        }
        this.setGraphKid()
      }
      else{
        if(Math.sign(this.startGraphTeacher-1)==-1){
          this.startGraphTeacher=this.historyTeams.length-4
          this.endGraphTeacher=this.historyTeams.length
        }
        else{
          this.startGraphTeacher--
          this.endGraphTeacher--
        }

        this.setGraphTeacher()
      }
    },

    setGraphKid(){
      let array=[]
      let rightArray=[] 
      let wrongArray=[]

      for (const history of this.historyUser.slice(this.startGraphKid,this.endGraphKid)) {
       array.push(history.date)

        let right=0
        let wrong=0
        for (let activity of history.activities) {
          right+=+activity.questionsRight.length
          wrong+=+activity.questionsWrong.length
        }
        rightArray.push(right)
        wrongArray.push(wrong)
        
      }
      
      this.$refs.realtimeChart.updateSeries([
          {
            name: 'Ganhou',
            data: rightArray
          }, 
          {
            name: 'Perdeu',
            data: wrongArray
          }
        ],true)

      this.chartOptions={...this.chartOptions,...{
        xaxis:{
          categories:array
        }
      }}
          
    },

    setGraphTeacher(){
      let array=[]
      let otherArray=[]

      for (const team of this.historyTeams) {
        let points=0
        array.push(team.name)
        for (const student of team.students) {
          points+=+student.totalPoints
        }
        otherArray.push(points)
      }

      this.$refs.reactiveChart.updateSeries([{
      name:'Nº de Pontos',
      data:otherArray
      }])

      this.chartOptions={...this.chartOptions,...{
        xaxis:{
          categories:array
        },
        plotOptions:{
          bar:{
            distributed:true
          }
        }
      }}
    }
      
  },
  created () {
    this.showOrNotLoading();
    
    this.findUser().then(()=>{
      if(this.getUser.typeUser=='Tutor'){
        this.findRelations("")
      }
      else if(this.getUser.typeUser=='Criança'){
        
       
        this.findHistoryUser().then(()=>{
          this.historyUser=this.getHistoryUser.history
          if(this.historyUser.length>=2){
            if(this.historyUser.length<=4){
              this.endGraphKid=this.historyUser.length
            }
            else{
              this.startGraphKid=this.historyUser.length-4
              this.endGraphKid=this.historyUser.length
            }
            this.setGraphKid()
             
          }
          
        });
      }
      else if(this.getUser.typeUser=='Professor'){
        this.findTeams("").then(()=>{
            this.historyTeams=this.getTeams.filter(team=>team.students.length>=1)
            if(this.historyTeams.length>1){
               if(this.historyTeams.length<=4){
                  this.endGraphTeacher=this.historyTeams.length
               }
              else{
                this.startGraphTeacher=this.historyTeams.length-4
                this.endGraphTeacher=this.historyTeams.length
              }
             this.setGraphTeacher()
            }
        });
      }
    });
    this.findActivities("").then(()=>{
      this.activities=this.getActivities.reverse();
      this.activities=this.activities.filter(activity=>activity.category=='Quiz' || activity.category=='Reconhecimento').slice(0,4);
      this.activitiesForApproved=this.getActivities.filter(activity=>activity.approved==false);
    });
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
  height: 20%;
  transition: min-height 0.5s;
}
.myCard:hover .activityTitle {
  min-height: 87%;
}

#moreInfo{
  visibility: hidden;
  opacity: 0;
  overflow: hidden;
  transition: all 0.2s;
}


.myCard:hover #moreInfo{
  overflow: hidden;
  opacity: 1;
  visibility: visible;
}

.myCard:hover #iconPlay{
  visibility: hidden;
  opacity: 0;
}

.apex{
  position:relative;
  z-index: 0;
}

.bodyNotify{
  background-color:#34b187d1;
  border:none;
  border-radius: 5px;
  color:white;
  font-family: 'EAmbit SemiBold';
}
.toast{
  border:none;
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
</style>
