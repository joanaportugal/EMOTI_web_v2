<template>
  <div class="p-0">
    <div class="loading d-flex flex-column align-items-center justify-content-center" :style="{position:'fixed',zIndex:'2'}"  v-if="showLoading==true">
      <b-spinner style="width: 8rem; height: 8rem;color:white" label="Spinning"></b-spinner>
      <h3 class="mt-4" style="color:white">A carregar <span class="info">...</span></h3>
    </div>
  
  <div class="d-flex">
    <aside>
      <SideBar activeTab="Atividades" v-if="this.getUser != null" :user="this.getUser"/>
    </aside>
    <main v-if="this.getUser != null">
      <AppSearch />
      <b-container class="bv-example-row mb-4">
        <b-row>
          <b-col cols="8">
            <h2 :style="{ fontFamily: 'EAmbit SemiBold', color: '#2B4141' }">
              Catálogo
            </h2>
            <div class="col-12 p-0 rounded p-3" :style="{border: '2px solid #e87461',minHeight:'462px'}">
              <div class="col-12 p-0 d-flex flex-row justify-content-end align-items-center">
                <b-button class="d-flex flex-row align-items-center" :style="{fontFamily: 'EAmbit SemiBold',}" id="orange" v-b-toggle.sidebar-right>
                  <span class="material-icons-round" :style="{paddingRight:'5px'}">filter_list</span>Filtrar</b-button>
              </div>
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
                            <span class="material-icons-round" :style="{paddingRight:'8px'}" v-else-if="activity.category=='Atividades Personalizadas (Professor)'">backpack</span>
                            <span class="material-icons-round" :style="{paddingRight:'8px'}" v-else-if="activity.category=='Atividades Personalizadas (Tutor)'">diversity_3</span>
                            <span class="material-icons-round" :style="{paddingRight:'8px'}" v-else>video_camera_front</span>
                            {{activity.title.substr(0,25)}}<span v-if="activity.title>=23">...</span>
                          </span>
                         
                        </div>
                        <div class="col-1 p-0" id="iconPlay">
                           <router-link :to="'#'" class="d-flex flex-row justify-content-center align-items-center" :style="{color: '#fdfdf3'}"><span class="material-icons-round" shadow-lg :style="{fontSize: '35px'}">play_circle</span></router-link>
                        </div>
                        <div class="col-12 mb-2 p-0 text-wrap d-flex flex-row align-items-start" id="moreInfo">
                          <p class="m-0" :style="{color:'#fdfdf3'}">{{activity.description.substr(0,106)}}<span v-if="activity.description>=106">...</span></p>
                        </div>
                        <div class="col-6 p-0 mb-2"  id="moreInfo">
                          <div class="p-0 d-flex flex-row align-items-center" v-if="getUser.typeUser=='Criança'">
                             <span
                              class="material-icons-round"
                              :style="{paddingRight: '8px',color: '#fdfdf3'}"
                              v-if="checkHistory(activity.title)==true"
                              >check</span
                            >
                            <span
                              class="material-icons-round"
                              :style="{paddingRight: '8px', color: '#fdfdf3'}"
                              v-if="activity.suggestedByTutor==true"
                              >people_alt</span
                            >
                            <span
                              class="material-icons-round"
                              :style="{paddingRight: '8px', color: '#fdfdf3'}"
                              v-if="activity.suggestedByProfessor==true"
                              >school</span
                            >
                          </div>
                          <div class="p-0 d-flex flex-row justify-content-start" v-if="getUser.typeUser=='Professor' || getUser.typeUser=='Tutor'">
                            <b-button
                            pill
                            class="d-flex justify-content-center align-items-center h-75"
                            :style="{background: '#CCCCCC', color: 'white',border:'none'}"
                            v-b-modal.modal-activities
                            @click="applySuggestions[0]=activity._id"
                          >
                          
                            <span class="material-icons-round" :style="{paddingRight:'3px'}">tips_and_updates</span>
                            Sugerir
                          </b-button>
                          </div>
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
              <div class="col-12 text-center p-0 mb-2">
                  <b-link :style="{ color: '#e87461', textDecoration: 'underline' }" @click="seeMoreActivities()" v-if="getActivities.length>number">Ver Mais</b-link>
              </div>
            </div> 
          </b-col>

          <!--Top Atividades-->

          <b-col cols="4">
            <h2 :style="{ fontFamily: 'EAmbit SemiBold', color: '#2B4141' }">
              Top Atividades
            </h2>
            <div class="rounded px-2" style="border: 2px solid #e87461">
              <div class="d-flex flex-row my-3" v-for="(topActivity,index) in getTopActivities.slice(0,numberTop)" :key="index">
                <div
                  class="col-6 p-0 d-flex flex-row justify-content-center align-items-center"
                >
                  <b-img :src="topActivity.coverIMG" :style="{width:'145px',height:'86px',borderRadius:'5px'}"></b-img>
                  <b-badge
                    pill
                    :style="{
                      backgroundColor: '#e87641',
                      position: 'absolute',
                      left: '0px',
                      top: '0px',
                    }"
                    ># {{index+1}}</b-badge
                  >
                </div>
                <div class="col-6 p-0">
                  <div class="col-12 p-0 pl-2">
                    <p :style="{ color: '#2B4141' }">
                      <span :style="{ color: '#e87461', fontWeight: 'bolder' }"
                        >Tt: </span
                      >{{topActivity.title.slice(0,topActivity.title.length>45? 45 :topActivity.title.length)+`${topActivity.title.length>45?'...':''}`}}
                    </p>
                  </div>
                  <div class="col-12 p-0 text-center pl-2">
                    <p :style="{ color: '#e87461', fontWeight: 'bolder' }">
                      <span :style="{ color: '#2B4141' }">{{topActivity.timesDone}} </span>Visitas
                    </p>
                  </div>
                </div>
              </div>

              <div class="text-center mb-1">
                <b-link
                  :style="{ color: '#e87461', textDecoration: 'underline' }"
                  v-if="getTopActivities.length>this.numberTop"
                  @click="seeMoreTopActivities()"
                  >Ver Mais</b-link
                >
                <b-link
                  :style="{ color: '#e87461', textDecoration: 'underline' }"
                  v-if="numberTop>5"
                  @click="numberTop=5"
                  >Ver Menos</b-link
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
                  v-for="(sugest, index) in suggestions"
                  :key="index"
                  >{{ sugest }}</b-form-select-option
                >
              </b-form-select>

              <label for="" class="mt-3">Número de perguntas: </label>
              <b-form-input
                v-model="formFilter.nQuestions"
                size="sm"
                class="mb-3"
                type="number"
                min="0"
              ></b-form-input>

              <div class="mt-4 d-flex flex-row justify-content-center">
                <b-button
                  :style="{
                    width: '40%',
                  }"
                  id="white"
                  class="col-12"
                  @click="resetForm()"
                  >Repor</b-button
                >
              </div>
            </b-form>
          </div>
        </b-sidebar>
      </b-container>
      <AppFooter />

      <b-modal
      id="modal-activities"
      centered
      hide-footer
      header-border-variant="0"
      header-class="color"
      body-class="color"
    >
      <div
        :style="{ fontFamily: 'EAmbit SemiBold' }"
        class="text-center">

         <h4
          :style="{ fontFamily: 'EAmbit SemiBold', color: '#2B4141' }"
          class="mb-4"
        >
          Sugerir Atividade
        </h4>

        <b-form
          class="px-2 py-3"
          :style="{ border: '2px solid #e87461', borderRadius: '5px' }"
          @submit.prevent="setSuggestionActivity"
        >
        <b-form-group label-cols="3" label-size="sm" :label="`Atribuição ${index+1}:`" label-for="input-sm" v-for="(suggest,index) in applySuggestions[1]" :key="index">
          <div class="d-flex flex-row flex-wrap" >

             <b-form-select class="col-8 mx-2" v-if="getUser.typeUser=='Professor'" v-model="applySuggestions[1][index]" required>
                <b-form-select-option v-for="(team,index) in getTeams" :value="team._id" :key="index" :disabled="applySuggestions[1].find(apply=>apply==team.name)!=undefined">{{team.name}}</b-form-select-option>
              </b-form-select>
              <b-form-select class="col-8 mx-2" v-if="getUser.typeUser=='Tutor'" v-model="applySuggestions[1][index]" required>
                <b-form-select-option v-for="(kid,index) in getChilds" :value="kid._id" :key="index"  :disabled="applySuggestions[1].find(apply=>apply==kid.username)!=undefined">{{kid.name}}</b-form-select-option>
              </b-form-select>

            <b-link
                v-if="applySuggestions[1].length!=1"
                :style="{ color: '#2b4141',textDecoration:'none' }"
                class="d-flex flex-row align-items-center mt-2 ml-1"
                @click="applySuggestions[1].splice(index,1);"
                ><span
                  class="material-icons-round"
                  :style="{ fontSize: '30px',textDecoration:'none' }"
                  >cancel</span
                ></b-link
              >
            <b-link
             v-if="applySuggestions[1].length-1==index"
              :style="{ color: '#2b4141' }"
              class="d-flex flex-row align-items-center mt-2 ml-1"
               @click="applySuggestions[1].push('')"
              ><span
                class="material-icons-round"
                :style="{ fontSize: '30px' }"
                >add_circle</span
              ></b-link>
          </div>
        </b-form-group>
        <div class="d-flex flex-row justify-content-end mt-4">
            <b-button type="submit" class="text-end" id="orange"
              >Atribuir</b-button
            >
        </div>
        <div
            v-if="warning != ''"
            :style="{
              'background-color': '#C82333',
              color: '#fdfdf3',
              'border-radius': '4px',
            }"
          >
            <p>{{ warning }}</p>
        </div>
       
      </b-form>
      </div>
    </b-modal>

    <b-toast id="my-toast" append-toast no-close-button header-class="headerNotify" body-class="bodyNotify">
      <h6 class="d-flex flex-row align-items-center p-0 m-0"><span class="material-icons-round mr-2 p-0">check_circle</span> {{message}}</h6>
    </b-toast>
    </main>
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
      formFilter: {
        level: "",
        category: "",
        sugestFrom: "",
        nQuestions: "",
      },
      levels: ["Fácil", "Médio", "Difícil"],
      categories: [
        "Quiz",
        "Reconhecimento",
        "Atividades Personalizadas (Tutor)",
        "Atividades Personalizadas (Professor)",
      ],
      suggestions: ["Tutor", "Professor", "Ambos"],
      applySuggestions:["",[""]],
      warning:'',
      number:4,
      numberTop:5,
      message:'',
      activities:[],
      showLoading:true,
    };
  },

  methods: {
    ...mapActions(["findUser","findActivities","findAllStudents","findTeams","findRelations","suggestActivity","findTopActivities","createNofication","findHistoryUser"]),

    resetForm(){
      this.formFilter={
        level: "",
        category: "",
        sugestFrom: "",
        nQuestions: "",
      }
    },

    seeMoreActivities(){
      if((this.getActivities-this.number)-4!=0){
        this.number+=this.getActivities.slice(this.number).length
        this.activities=this.getActivities.slice(0,this.number)
      }
      else{
        this.number+=4
        this.activities=this.getActivities.slice(0,this.number)
      }
    },

    seeMoreTopActivities(){
       if((this.getTopActivities-this.numberTop)-5!=0){
        this.numberTop+=this.getTopActivities.slice(this.numberTop).length
      }
      else{
        this.numberTop+=5
      }
    },

    checkHistory(title){
      let boolean=false

      for (const history of this.getHistoryUser.history) {
        for (let activity of history.activities) {
          if(activity.title==title){
            return true
          }
        }
      }

      return boolean
    },

    setSuggestionActivity(){
      let studentsList=[]
      if(this.getUser.typeUser=='Professor'){
        for (let team of this.getTeams.filter(team=>team._id==this.applySuggestions[1])) {
          for (let student of team.students) {
            studentsList.push(student._id)
          }
        }
      }
      this.suggestActivity([this.applySuggestions[0],{list:this.applySuggestions[1]}]).then(()=>{
        this.createNofication({list:this.getUser.typeUser=='Professor'?studentsList:this.applySuggestions[1],title:'Nova Sugestão',text:`${this.getUser.typeUser=='Tutor'?`O seu Tutor, ${this.getUser.name.toUpperCase()},`:`O seu Professor, ${this.getUser.name.toUpperCase()},`} sugeriu a atividade: ${this.getActivities.find(activity=>activity._id==this.applySuggestions[0]).title.toUpperCase()}.`})
        setTimeout(() => {this.applySuggestions=["",[""]]}, 1000);
        this.$bvModal.hide("modal-activities");
        this.message='Atividade sugerida com sucesso.'
        this.$bvToast.show('my-toast');
      })
      .catch((err) => {
          this.warning = `${err}`;
          setTimeout(() => {
            this.warning = "";
          }, 5000);
      });
    },

    showOrNotLoading(){
      setTimeout(()=>{
        this.showLoading=false
      },1500);
    }
  },

  computed: {
    ...mapGetters(["getLoggedUser","getUser","getActivities","getTeams","getStudents","getChilds","getTopActivities","getHistoryUser"])
  },

  created() {
    this.showOrNotLoading();
    this.findUser().then(()=>{
      this.findActivities("").then(()=>{
        if(this.getActivities.length<4){
          this.number=this.getActivities.length
           this.activities=this.getActivities.slice(0,this.number)
        }
        else{
          this.activities=this.getActivities.slice(0,this.number)
        }
      });
      if(this.getUser.typeUser=='Professor'){
        this.findTeams("");
      }
      else if(this.getUser.typeUser=='Tutor'){
        this.findRelations("");
      }
      else if(this.getUser.typeUser=='Criança'){
        this.findHistoryUser()
      }
      this.findTopActivities()
      
    });
  },

 watch: {
  'formFilter.level'() {
         if(this.formFilter.category!='' && this.formFilter.nQuestions!=''){
            this.findActivities(`?level=${this.formFilter.level}&category=${this.formFilter.category}&questionsNumber=${this.formFilter.nQuestions}`).then(()=>{
              if(this.getActivities.length<4){
                this.number=this.getActivities.length
                this.activities=this.getActivities.slice(0,this.number)
              }
              else{
                this.number=4
                this.activities=this.getActivities.slice(0,this.number)
              }
            })
         }
         else if(this.formFilter.category!=''){
           this.findActivities(`?level=${this.formFilter.level}&category=${this.formFilter.category}`).then(()=>{
              if(this.getActivities.length<4){
                this.number=this.getActivities.length
                this.activities=this.getActivities.slice(0,this.number)
              }
              else{
                this.number=4
                this.activities=this.getActivities.slice(0,this.number)
              }
            })
         }
         else if(this.formFilter.nQuestions!=''){
           this.findActivities(`?level=${this.formFilter.level}&questionsNumber=${this.formFilter.nQuestions}`).then(()=>{
              if(this.getActivities.length<4){
                this.number=this.getActivities.length
                this.activities=this.getActivities.slice(0,this.number)
              }
              else{
                this.number=4
                this.activities=this.getActivities.slice(0,this.number)
              }
            })
         }
         else{
            this.findActivities(`?level=${this.formFilter.level}`).then(()=>{
              if(this.getActivities.length<4){
                this.number=this.getActivities.length
                this.activities=this.getActivities.slice(0,this.number)
              }
              else{
                this.number=4
                this.activities=this.getActivities.slice(0,this.number)
              }
            });
         }
         
    },
  'formFilter.category'() {
      if(this.formFilter.level!='' && this.formFilter.nQuestions!=''){
        this.findActivities(`?level=${this.formFilter.level}&category=${this.formFilter.category}&questionsNumber=${this.formFilter.nQuestions}`).then(()=>{
          if(this.getActivities.length<4){
            this.number=this.getActivities.length
            this.activities=this.getActivities.slice(0,this.number)
          }
          else{
            this.number=4
            this.activities=this.getActivities.slice(0,this.number)
          }
        });
      }
      else if(this.formFilter.nQuestions!=''){
         this.findActivities(`?category=${this.formFilter.category}&questionsNumber=${this.formFilter.nQuestions}`).then(()=>{
              if(this.getActivities.length<4){
                this.number=this.getActivities.length
                this.activities=this.getActivities.slice(0,this.number)
              }
              else{
                this.number=4
                this.activities=this.getActivities.slice(0,this.number)
              }
            });
      }
      else if(this.formFilter.level!=''){
        this.findActivities(`?category=${this.formFilter.category}&level=${this.formFilter.level}`).then(()=>{
              if(this.getActivities.length<4){
                this.number=this.getActivities.length
                this.activities=this.getActivities.slice(0,this.number)
              }
              else{
                this.number=4
                this.activities=this.getActivities.slice(0,this.number)
              }
            });
      }
      else{
        this.findActivities(`?category=${this.formFilter.category}`).then(()=>{
          if(this.getActivities.length<4){
            this.number=this.getActivities.length
            this.activities=this.getActivities.slice(0,this.number)
          }
          else{
            this.number=4
            this.activities=this.getActivities.slice(0,this.number)
          }
        });
      }
    
    },
  'formFilter.nQuestions'() {
    if(this.formFilter.level!='' && this.formFilter.category!=''){
      this.findActivities(`?level=${this.formFilter.level}&category=${this.formFilter.category}&questionsNumber=${this.formFilter.nQuestions}`).then(()=>{
             if(this.getActivities.length<4){
                this.number=this.getActivities.length
                this.activities=this.getActivities.slice(0,this.number)
              }
              else{
                this.number=4
                this.activities=this.getActivities.slice(0,this.number)
              }
            })
    }
    else if(this.formFilter.level!=''){
      this.findActivities(`?level=${this.formFilter.level}&questionsNumber=${this.formFilter.nQuestions}`).then(()=>{
              if(this.getActivities.length<4){
                this.number=this.getActivities.length
                this.activities=this.getActivities.slice(0,this.number)
              }
              else{
                this.number=4
                this.activities=this.getActivities.slice(0,this.number)
              }
            });
    }
    else if(this.formFilter.category!=''){
      this.findActivities(`?category=${this.formFilter.category}&questionsNumber=${this.formFilter.nQuestions}`).then(()=>{
             if(this.getActivities.length<4){
                this.number=this.getActivities.length
                this.activities=this.getActivities.slice(0,this.number)
              }
              else{
                this.number=4
                this.activities=this.getActivities.slice(0,this.number)
              }
            });
    }
    else{
      this.findActivities(`?questionsNumber=${this.formFilter.nQuestions}`).then(()=>{
              if(this.getActivities.length<4){
                this.number=this.getActivities.length
                this.activities=this.getActivities.slice(0,this.number)
              }
              else{
                this.number=4
                this.activities=this.getActivities.slice(0,this.number)
              }
            });
    }
  
  }
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
  width: 81.3vw;
  z-index: 1;
  position: fixed;
  top: 0;
  right: 0;
}

main > div {
  margin-top: 7rem;
}

.cardItem:hover .activityTitle {
  opacity: 0;
}

.cardItem:hover .cardContent {
  opacity: 0.8;
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

.cardContent {
  background: #e87461;
  border-radius: 5px;
  opacity: 0;
  height: 25vh;
  width: 100%;
  position: absolute;
  top: 0;
}

.cardContent * {
  color: white;
}

.sideFilter {
  background-color: #fbfbf3;
}

#orange {
  background: #e87461;
  border: 1px solid #e87461;
}
#orange:hover {
  background: #fdfdf3;
  color: #e87461;
  border: 1px solid #e87461;
}

#white {
  background-color: #fdfdf3;
  border: 1px solid #e87461;
  color: #e87461;
}

#white:hover {
  background-color: #e87461;
  color: #fdfdf3;
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
  background-color: white;
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
