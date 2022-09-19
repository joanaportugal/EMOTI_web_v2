<template>
  <header
    class="d-flex align-items-center"
    :style="{borderBottom: '1px solid #707070', backgroundColor: '#fdfdf3'}"
  >
    <b-input-group class="col-10">
      <template #prepend>
        <div
          class="d-flex flex-row justify-content-center align-items-center mx-3"
        >
          <span class="material-icons-round" :style="{fontSize: '32px'}"
            >search</span
          >
        </div>
      </template>
      <b-form-input
        id="search"
        placeholder="Pesquisa alguma coisa..."
        :style="{
          backgroundColor: '#fdfdf3',
          border: 'none',
          color: '#2b4141',
          height: '10vh',
          fontSize: '25px'
        }
        "
        @click="openSearch = true"
        @keyup.esc="openSearch = false"
        v-model="searchForm"
      ></b-form-input>
      <b-input-group-append>
        <b-input-group-text
          v-if="searchForm != ''"
          @click="searchForm = ''"
          :style="{ backgroundColor: '#fdfdf3', border: 'none' }"
        >
          <b-link class="p-0" :style="{ fontSize: '25px', color: '#2B4141' }"
            ><b-icon-x></b-icon-x
          ></b-link>
        </b-input-group-text>
      </b-input-group-append>
    </b-input-group>
    <div class="col-2 d-flex flex-row justify-content-end pr-5">
      <b-button
        class="
          d-flex
          flex-row
          justify
          content-center
          align-items-center
          shadow-sm
          rounded-circle
          p-2
        "
        :style="{backgroundColor: '#e87461', border: 'none'}"
        @click="openNotificationBar()"
        v-if="openNotification == false"
      >
        <span class="material-icons-round" :style="{fontSize: '30px'}"
          >notifications</span
        >
      </b-button>
      <b-button
        class="
          d-flex
          flex-row
          justify
          content-center
          align-items-center
          shadow-sm
          rounded-circle
          p-2
        "
        :style="{backgroundColor: '#e87461', border: 'none'}"
        @click="openNotification = false"
        v-if="openNotification == true"
      >
        <span class="material-icons-round" :style="{fontSize: '30px'}">close</span>
      </b-button>
    </div>
    <!--Notificações-->
    <div
      class="shadow-sm p-4 d-flex flex-column"
      :style="{
        width: '30vw',
        height: '600px',
        backgroundColor: 'white',
        position: 'absolute',
        top: '65px',
        right: '48px',
        borderRadius: '5px',
      }"
      v-if="openNotification == true"
    >
      <h3 :style="{ color: '#2B4141', fontFamily: 'EAmbit SemiBold' }">
        Notificações
      </h3>
      <div
        :style="{ border: '2px solid #e87461', borderRadius: '5px',height:'580px',overflowY:'scroll'}"
        class="px-3"
        v-if="getUser.notifications.length!=0"
      >
        <b-card
          class="my-3"
          size="sm"
          header-class="headerNotification"
          body-class="bodyNotification"
          :style="{ border: 'none' }"
          v-for="(notification,index) in notifications" :key="index"
        >
          <template #header>
            <div
              class="
                col-12
                p-0
                m-0
                d-flex
                flex-row
                justify-content-center
                align-items-center
              "
            >
            <div class="col-9 mt-2 mb-2 ml-2 p-0">
              <h6 :style="{ fontFamily: 'EAmbit SemiBold' }" class="mb-0 p-0 d-flex flex-row align-items-center">
               <span class="material-icons-round" :style="{paddingRight:'5px',fontSize:'20px'}">sticky_note_2</span> {{notification.title}}
              </h6>
            </div>
            <div class="col-2 mt-2 mb-2 mr-2 p-0 d-flex flex-row align-items-center justify-content-end">
              <b-link class="p-0" :style="{ color: '#fdfdf3', fontSize: '15px',textDecoration:'none' }" @click="removeNotification(notification._id)"
                ><b-icon-x-lg></b-icon-x-lg
              ></b-link>
            </div>
            </div>
          </template>
          <b-card-text>{{notification.text}}</b-card-text>
        </b-card>
      </div>

      <div
        :style="{ border: '2px solid #e87461', borderRadius: '5px',height:'580px',overflowY:'scroll'}"
        class="px-3 d-flex flex-column"
        v-else
      >
      <div class="col-12 d-flex flex-row align-items-center justify-content-center">
       <h5 class="mb-0">Não existem novas notificações.</h5>
      </div>
      </div>
    </div>

    <!--Pesquisa-->
    <div
      class="shadow-sm p-4 d-flex flex-column"
      :style="{
        width: '40vw',
        minHeight: 'auto',
        backgroundColor: 'white',
        position: 'absolute',
        top: '75px',
        left: '75.5px',
        borderRadius: '5px',
        height:'500px',
      }"
      v-if="openSearch == true && searchForm != ''"
    >
      <h3 :style="{ color: '#2B4141', fontFamily: 'EAmbit SemiBold' }">
        Resultados ({{getActivitiesSearch.length+(getUser.typeUser=='Administrador'?getUsersSearch.length: getUser.typeUser=='Tutor'?getChildsSearch.length:getUser.typeUser=='Professor'?getStudentsSearch.length:0)}})
      </h3>

      <div
        :style="{ border: '2px solid #e87461', borderRadius: '5px', height:'406px',overflowY:'scroll' }"
        class="px-3"
       
      >
        <div class="my-2" v-if="getUser.typeUser!='Criança' && checkPage()==false">
          <h5 :style="{fontFamily: 'EAmbit SemiBold' }">Pessoas ({{getUser.typeUser=='Administrador'?getUsersSearch.length: getUser.typeUser=='Tutor'?getChildsSearch.length:getUser.typeUser=='Professor'?getStudentsSearch.length:0}})</h5>
          <div class="my-2 d-flex flex-row" v-for="(user,index) in getUser.typeUser=='Administrador'?getUsersSearch: getUser.typeUser=='Tutor'?getChildsSearch:getUser.typeUser=='Professor'?getStudentsSearch:[]" :key="index">
            <div class="col-9 p-0">
              <b-avatar variant="light" :text="user.name.split(' ')[0].charAt(0)" size="2.5rem"></b-avatar>
              <span class="m-0 mx-2" :style="{fontFamily: 'EAmbit SemiBold' }">
                {{user.name}}
              </span>
            </div>
            <div
              class="
                col-3
                p-0
                d-flex
                flex-row
                justify-content-end
                align-items-center
              "
            >
              <b-link :style="{ fontSize: '15px', color: '#e87461' }" @click="getUser.typeUser=='Administrador'?$router.push({name:'Gerir',params:{idUserAdmin:user._id} }):getUser.typeUser=='Professor'?$router.push({name:'Escola Virtual',params:{idUserTeacher:user._id} }):$router.push({name:'Perfil',params:{idUserTutor:user._id} })">
                <span class="material-icons-round" :style="{fontSize: '32px'}"
                  >arrow_outward</span
                >
              </b-link>
            </div>
          </div>
          <div v-if="(getUser.typeUser=='Administrador'?getUsersSearch: getUser.typeUser=='Tutor'?getChildsSearch:getUser.typeUser=='Professor'?getStudentsSearch:[]).length==0">
            <p>Não foi encontrado nenhum resultado referente a Pessoas.</p>
          </div>
        </div>
        <hr v-if="getUser.typeUser!='Criança' && checkPage()==false" />
        <div class="my-2">
          <h5 :style="{fontFamily: 'EAmbit SemiBold' }">Atividades ({{getActivitiesSearch.length}})</h5>
          <div class="my-2 d-flex flex-row" v-for="(activity,index) in getActivitiesSearch" :key='index'>
            <div class="col-9 p-0">
              <b-img
                :src="activity.coverIMG"
                :style="{ width: '92px',height:'55px',borderRadius:'5px' }"
              ></b-img>
              <span class="m-0 mx-2" :style="{fontFamily: 'EAmbit SemiBold' }">
                {{activity.title}}
              </span>
            </div>
            <div
              class="
                col-3
                p-0
                d-flex
                flex-row
                justify-content-end
                align-items-center
              "
            >
              <b-link :style="{ fontSize: '15px', color: '#e87461' }" @click="setReloadActivity(activity._id)">
                <span class="material-icons-round" :style="{fontSize: '32px'}"
                  >arrow_outward</span
                >
              </b-link>
            </div>
          </div>
        </div>
        <div v-if="getActivitiesSearch.length==0">
            <p>Não foi encontrado nenhum resultado referente a Atividades.</p>
          </div>
      </div>
    </div>
  </header>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  name: "AppSearch",
  data() {
    return {
      openNotification: false,
      openSearch: false,
      searchForm: "",
      showUsers:true,
      notifications:[]
    };
  },

  computed: {
    ...mapGetters(["getActivitiesSearch","getUser","getUsersSearch","getChildsSearch","getStudentsSearch"])
  },

  methods: {
    ...mapActions(["findActivities_Search","findAllUsers_Search","findRelations_Search","findAllStudents_Search","deleteNotification","findUser"]),

    openNotificationBar(){
      this.notifications=this.getUser.notifications.reverse()
      this.openNotification=true
    },

    setReloadActivity(id){
      if(this.$route.params.id==id){
        location.reload()
      }
      else{
        this.$router.push({name:'Atividade',params:{id:id}});
        location.reload()
      }
    },

    checkPage(){
      if(this.$route.name=='Gerir'){
        return true
      }
      else if(this.$route.name=='Perfil' && this.getUser.typeUser=='Tutor'){
        return true
      }
      else if(this.$route.name=='Escola Virtual' && this.getUser.typeUser=='Professor'){
        return true
      }
      else{
        return false
      }
    },

    removeNotification(id){
      this.deleteNotification(id).then(()=>{
        this.findUser().then(()=>{
          this.notifications=this.getUser.notifications.reverse()
        })
      })
    }

  },
  

  watch: {
    searchForm(){
      this.findActivities_Search(`?title=${this.searchForm}`).then(()=>{
        this.getActivitiesSearch
      });

      if(this.getUser.typeUser=='Administrador'){
        this.findAllUsers_Search(`?name=${this.searchForm}`);
      }
      else if (this.getUser.typeUser=='Tutor'){
        this.findRelations_Search(`?name=${this.searchForm}`);
      }
      else if(this.getUser.typeUser=='Professor'){
        this.findAllStudents_Search(`?name=${this.searchForm}`)
      }
    }
  },
};
</script>

<style scoped>
.headerNotification {
  background-color: #e87461;
  border: none;
  color: #fdfdf3;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  padding:0px;
 
}
.bodyNotification {
  background-color: #fdfdf3;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
}

#search:focus{
  outline:0px !important;
  -webkit-appearance:none;
  box-shadow: none !important;
}
</style>
