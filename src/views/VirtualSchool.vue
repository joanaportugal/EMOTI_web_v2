<template>
 <div class="p-0">
    <div class="loading d-flex flex-column align-items-center justify-content-center" :style="{position:'fixed',zIndex:'2'}"  v-if="showLoading==true">
      <b-spinner style="width: 8rem; height: 8rem;color:white" label="Spinning"></b-spinner>
      <h3 class="mt-4" style="color:white">A carregar <span class="info">...</span></h3>
    </div>
  <div class="d-flex">
    <aside>
      <SideBar activeTab="Escola Virtual" v-if="this.getUser!=null" :user="this.getUser"/>
    </aside>
    <main v-if="this.getUser!=null">
      <AppSearch />
      <b-container class="bv-example-row">
        <b-row class="mx-4">
          <b-link
            @click="selectTeams()"
            :style="{
              color: '#2B4141',
              textDecoration: 'none',
              fontSize: '30px',
              'font-family': 'EAmbit SemiBold',
              opacity: optSelected === 'Turmas' ? 1 : 0.2,
            }"
            >Turmas
          </b-link>

          <b-link
            @click="selectStudents(null)"
            class="mx-4"
            :style="{
              color: '#2B4141',
              textDecoration: 'none',
              fontSize: '30px',
              'font-family': 'EAmbit SemiBold',
              opacity: optSelected === 'Alunos' ? 1 : 0.2,
            }"
          >
            Alunos
          </b-link>

          <div
            v-if="optSelected === 'Turmas'"
            class="d-flex col-12 p-0 mt-2 mb-3 schoolCard"
            :style="{height: '500px'}"
          >
            <div class="p-0 col-4" :style="{borderRight:'2px solid #e87461'}">
              <div class="border-bottom pt-3 px-2">
                <div class="d-flex justify-content-between">
                  <h3 :style="{fontFamily: 'EAmbit SemiBold'}" class="m-0">
                    Lista
                  </h3>
                  <b-link
                    :style="{ color: '#2b4141' }"
                    v-b-modal.modal-virtual-school
                    @click="whatModalDo = 'addClass'"
                    ><span
                      class="material-icons-round"
                      :style="{ fontSize: '30px' }"
                      >add_circle</span
                    ></b-link
                  >
                </div>
                <b-form class="my-2">
                  <b-form-input
                    id="teamName"
                    placeholder="Pesquisa por nome..."
                    v-model="searchTeam"
                  ></b-form-input>
                </b-form>
              </div>
              <div class="p-2" :style="{height: '388px', overflowY: 'scroll'}">
                <h5 :style="{fontFamily: 'EAmbit SemiBold'}">Resultados ({{getTeams.length}})</h5>
                <article>
                  <div
                    class="d-flex justify-content-between align-items-center pb-1 mt-2"
                    :style="{borderBottom: '1px solid #707070'}"
                    v-for="(team,index) in getTeams" :key="index"
                  >
                    <button
                      class="btn d-flex align-items-center col-10 p-0"
                      @click="classSelected = team"
                    >
                      <b-avatar
                        variant="light"
                        :text="team.name.charAt(0)"
                        size="2.5rem"
                      ></b-avatar>
                      <span
                        class="m-0 mx-2"
                        :style="{fontFamily: 'EAmbit SemiBold'}"
                        :class="{
                          activeItem: classSelected.name === team.name,
                        }"
                      >
                        {{team.name}}
                      </span>
                    </button>
                    <button class="btn"  @click="deleteClass(team._id)">
                      <span class="material-icons-round" :style="{color: '#e87461'}"
                        >delete_forever</span
                      >
                    </button>
                  </div>
                </article>
              </div>
            </div>
            <div class="col-8 py-3" :style="{overflowY: 'scroll'}">
              <div class="d-flex justify-content-between">
                <h3 :style="{fontFamily: 'EAmbit SemiBold'}" class="p-0 m-0">
                  Detalhes
                </h3>
                <button
                  class="btn"
                  v-b-modal.modal-virtual-school
                  @click="whatModalDo = 'editClass'"
                  id="grey"
                >
                  Alterar Nome
                </button>
              </div>
              <h5 class="d-flex align-items-center my-4">
                <span class="material-icons-round" :style="{color: '#e87461'}"
                  >assignment</span
                >
                <span class="mx-2" :style="{fontFamily: 'EAmbit SemiBold'}">
                  Alunos Inscritos
                </span>
              </h5>

              <table class="col-12 mb-5">
                <tr :style="{background: '#e87461', color: '#fbfbf3'}">
                  <th class="px-4">Nome do Aluno</th>
                  <th>Nome do Tutor</th>
                  <th>Ações</th>
                </tr>
                <tbody>
                  <tr :style="{'border-bottom':index==classSelected.students.length-1 ?'5px solid #e87461' :'1px solid #707070',color:'#2B4141'}" v-for="(student,index) in classSelected.students" :key="index">
                    <td class="px-4 py-3">{{student.name}}</td>
                    <td>{{student.tutor}}</td>
                    <td class="d-flex py-2">
                      <button
                        class="btn d-flex flex-row align-items-center justify-content-center p-1"
                        size="sm"
                        id="grey"
                        @click="seeMore(student.name)"
                      >
                        <span
                          class="material-icons-round"
                          :style="{fontSize: '26px'}"
                          >person</span
                        >
                      </button>
                      <button
                        class="btn btn-danger d-flex flex-row align-items-center p-1 mx-2"
                        size="sm"
                        id="red"
                        @click="deleteStudent([classSelected._id,student._id],'team')"
                      >
                        <span
                          class="material-icons-round"
                          :style="{fontSize: '26px'}"
                          >delete_forever</span
                        >
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>

              <h5 class="d-flex align-items-center my-4">
                <span class="material-icons-round" :style="{color: '#e87461'}"
                  >pending_actions</span
                >
                <span class="mx-2" :style="{fontFamily: 'EAmbit SemiBold'}">
                  Pedidos Pendentes
                </span>
              </h5>

              <table class="col-12">
                <tr :style="{background: '#e87461', color: '#fbfbf3'}">
                  <th class="px-4">Nome do Aluno</th>
                  <th>Nome do Tutor</th>
                  <th>Ações</th>
                </tr>
                <tbody>
                  <tr :style="{'border-bottom':index==classSelected.requests.length-1 ?'5px solid #e87461' :'1px solid #707070',color:'#2B4141'}"  v-for="(request,index) in classSelected.requests" :key="index">
                    <td class="px-4 py-3">{{request.name}}</td>
                    <td>{{request.tutor}}</td>
                    <td>
                      <button
                        class="btn btn-danger d-flex flex-row align-items-center p-1 mx-2"
                        size="sm"
                        id="red"
                        @click="removeRequest([request._id,{className:classSelected.name}])"
                      >
                        <span
                          class="material-icons-round"
                          :style="{fontSize: '26px'}"
                          >delete_forever</span
                        >
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div
            v-if="optSelected === 'Alunos'"
            class="d-flex col-12 p-0 mt-2 mb-3 schoolCard"
            :style="{height: '500px'}"
          >
            <div class="p-0 col-4" :style="{borderRight: '2px solid #e87461'}">
              <div class="border-bottom pt-3 px-2">
                <div class="d-flex justify-content-between">
                  <h3 :style="{fontFamily: 'EAmbit SemiBold'}" class="m-0">
                    Lista
                  </h3>
                  <b-link
                    :style="{ color: '#2b4141' }"
                    v-b-modal.modal-virtual-school
                    @click="whatModalDo = 'addStudent'"
                    ><span
                      class="material-icons-round"
                      :style="{ fontSize: '30px' }"
                      >add_circle</span
                    ></b-link
                  >
                </div>
                <b-form class="my-2">
                  <b-form-input
                    id="childName"
                    placeholder="Pesquisa por nome..."
                    v-model="searchStudent"
                  ></b-form-input>
                </b-form>
              </div>
              <div class="p-2" :style="{height: '388px', overflowY: 'scroll'}">
                <h5 :style="{fontFamily: 'EAmbit SemiBold'}">Resultados ({{getStudents.length}})</h5>
                <article>
                  <div
                    class="d-flex justify-content-between align-items-center pb-1 mt-2"
                    :style="{borderBottom: '1px solid #707070'}"
                    v-for="(student,index) in getStudents" :key="index"
                  >
                    <button
                      class="btn d-flex align-items-center col-10 p-0"
                      @click="selectStudents({id:student._id})"
                    >
                      <b-avatar
                        variant="light"
                        :text="student.name.charAt(0)"
                        size="2.5rem"
                      ></b-avatar>
                      <span
                        class="m-0 mx-2"
                        :style="{fontFamily: 'EAmbit SemiBold'}"
                        :class="{
                          activeItem: childSelected.name === student.name,
                        }"
                      >
                        {{student.name}}
                      </span>
                    </button>
                    <button class="btn" @click="deleteStudent(['',student._id],'student')">
                      <span class="material-icons-round" :style="{color: '#e87461'}"
                        >delete_forever</span
                      >
                    </button>
                  </div>
                </article>
              </div>
            </div>
            <div class="col-8 py-3" :style="{overflowY: 'scroll'}" >
              <div class="d-flex justify-content-between">
                <h3 :style="{fontFamily: 'EAmbit SemiBold'}" class="p-0 m-0">
                  Detalhes
                </h3>
                <button
                  class="btn"
                  :style="{fontFamily: 'EAmbit SemiBold'}" 
                  id="grey"
                  v-b-modal.modal-virtual-school
                  @click="whatModalDo = 'editStudent'"
                  :disabled="childSelected==''"
                >
                  Alterar Turma
                </button>
              </div>
              <div class="p-0" v-if="childSelected!=''">
              <h5 class="d-flex align-items-center my-4">
                <span class="material-icons-round" :style="{color: '#e87461'}"
                  >info</span
                >
                <span class="mx-2" :style="{fontFamily: 'EAmbit SemiBold'}" >
                  Informações Gerais
                </span>
              </h5>

              <div class="d-flex align-items-center">
                <div class="col-4">
                 <img
                    :src="childSelected.imgProfile"
                    :style="{ width: '200px', height: '200px' }"
                    class="rounded-circle"
                    v-if="childSelected.imgProfile != ''"
                  />
                  <b-avatar
                    :text="childSelected.name.split(' ')[0].charAt(0)+childSelected.name.split(' ')[1].charAt(0)"
                    :style="{
                      width: '200px',
                      height: '200px',
                      fontSize: '90px',
                      fontFamily: 'EAmbit SemiBold',
                      backgroundColor: '#bfbfbf',
                    }"
                    class="text-center"
                    v-else
                  >
                  </b-avatar>
                </div>
                <b-form class="col-8">
                  <b-form-group
                    label="Nome:"
                    label-for="profileName"
                    label-cols-sm="4"
                    label-align-sm="left"
                  >
                    <b-form-input
                      id="profileName"
                      :value="childSelected.name"
                      disabled
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group
                    label="Email:"
                    label-for="profileEmail"
                    label-cols-sm="4"
                    label-align-sm="left"
                  >
                    <b-form-input
                      id="profileEmail"
                      :value="childSelected.email"
                      disabled
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group
                    label="Nome do Tutor:"
                    label-for="profileTutor"
                    label-cols-sm="4"
                    label-align-sm="left"
                  >
                    <b-form-input
                      id="profileTutor"
                      :value="childSelected.tutor"
                      disabled
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group
                    label="Turma:"
                    label-for="profileClass"
                    label-cols-sm="4"
                    label-align-sm="left"
                  >
                    <b-form-input
                      id="profileClass"
                      :value="childSelected.class"
                      disabled
                    ></b-form-input>
                  </b-form-group>
                </b-form>
              </div>
              </div>

              <div class="p-0" :hidden="childSelected=='' || historyKid.length<2">
              <h5 class="d-flex align-items-center my-4">
                <span class="material-icons-round" :style="{color: '#e87461'}"
                  >equalizer</span
                >
                <span class="mx-2" :style="{fontFamily: 'EAmbit SemiBold'}" >
                  Estatísticas
                </span>
              </h5>

              <b-tabs content-class="mt-3" active-nav-item-class="changeColorTab" fill>
                <b-tab>
                  <template #title>
                    <h6 class="p-0 d-flex flex-row align-items-center justify-content-center" :style="{textDecoration:'none', fontFamily:'EAmbit SemiBold',color:'#2B4141',fontSize:'17px'}"><span class="material-icons-round" :style="{paddingRight:'5px',color:'#e87461'}">bar_chart</span> Resultado Geral</h6>
                  </template>
                    <b-link :style="{color:'#e87461',textDecoration:'none'}" class="col-12 d-flex flex-row align-items-center justify-content-end mb-3" v-if="historyKid.length>4"  @click="changeData"><span class="material-icons-round">autorenew</span> Alternar</b-link>
                
                  <apexchart-chart ref="chartReactive" type="bar" height="350" :options="chartOptions" :series="series" class="apex"></apexchart-chart>
                </b-tab>
                <b-tab>
                  <template #title>
                    <h6 class="p-0 d-flex flex-row align-items-center justify-content-center" :style="{textDecoration:'none', fontFamily:'EAmbit SemiBold',color:'#2B4141',fontSize:'17px'}"><span class="material-icons-round" :style="{paddingRight:'5px',color:'#e87461'}">pie_chart</span>Emoções Acertadas</h6>
                  </template>
                  <apexchart-chart  type="donut" height="400" :options="chartOptionsPie" :series="seriesPie" class="apex"></apexchart-chart>
                </b-tab>
                  <b-tab>
                  <template #title>
                    <h6 class="p-0 d-flex flex-row align-items-center justify-content-center" :style="{textDecoration:'none', fontFamily:'EAmbit SemiBold',color:'#2B4141',fontSize:'17px'}"><span class="material-icons-round" :style="{paddingRight:'5px',color:'#e87461'}">wifi_tethering</span>Categoria de Imagens</h6>
                  </template>
                  <apexchart-chart type="radialBar" height="400" :options="chartOptionsRadial" :series="seriesRadial" class="apex"></apexchart-chart>
                </b-tab>
              </b-tabs>
              </div>

            </div>
          </div>
        </b-row>
      </b-container>
      <AppFooter />
    </main>
    <b-modal
      id="modal-virtual-school"
      centered
      hide-footer
      header-border-variant="0"
      header-class="color"
      body-class="color"
    >
      <div
        v-if="whatModalDo == 'addClass'"
        :style="{ fontFamily: 'EAmbit SemiBold' }"
        class="text-center"
      >
        <h4
          :style="{ fontFamily: 'EAmbit SemiBold', color: '#2B4141' }"
          class="mb-4"
        >
          Nova Turma
        </h4>

        <b-form
          class="px-2 pb-3"
          :style="{ border: '2px solid #e87461', borderRadius: '5px' }"
          @submit.prevent="addClass()"
        >
          <b-form-group
            label-cols="2"
            label-cols-lg="2"
            label-size="sm"
            label-align-sm="left"
            label="Nome:"
            label-for="input-sm"
            class="mt-4 mb-4"
          >
            <b-form-input
              id="input-sm"
              v-model="teamName"
              required
            ></b-form-input>
          </b-form-group>

          <div class="d-flex flex-row justify-content-end">
            <b-button type="submit" class="text-end" id="orange"
              >Adicionar</b-button
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

      <div
        v-if="whatModalDo == 'addStudent'"
        :style="{ fontFamily: 'EAmbit SemiBold' }"
        class="text-center"
      >
        <h4
          :style="{ fontFamily: 'EAmbit SemiBold', color: '#2B4141' }"
          class="mb-4"
        >
          Novo Aluno
        </h4>

        <b-form
          @submit.prevent="addStudent()"
          class="px-2 pb-3"
          :style="{ border: '2px solid #e87461', borderRadius: '5px' }"
        >
          <b-form-group
            label-cols="3"
            label-cols-lg="3"
            label-size="sm"
            label-align-sm="left"
            label="Username:"
            label-for="input-sm"
            class="mt-4 mb-4"
          >
            <b-form-input
              id="input-sm"
              v-model="formNewStudent.username"
              required
              @change="getStudentInfo()"
            ></b-form-input>
          </b-form-group>

          <b-form-group
            label-cols="3"
            label-cols-lg="3"
            label-size="sm"
            label-align-sm="left"
            label="Nome:"
            label-for="input-sm"
            class="mt-4 mb-4"
          >
            <b-form-input
              id="input-sm"
              required
              disabled
              v-model="formNewStudent.name"
            ></b-form-input>
          </b-form-group>

          <b-form-group
            label-cols="3"
            label-cols-lg="3"
            label-size="sm"
            label-align-sm="left"
            label="Tutor:"
            label-for="input-sm"
            class="mt-4 mb-4"
          >
            <b-form-input
              id="input-sm"
              disabled
              v-model="formNewStudent.tutor"
            ></b-form-input>
          </b-form-group>

          <b-form-group
            label-cols="3"
            label-cols-lg="3"
            label-size="sm"
            label-align-sm="left"
            label="Turma:"
            label-for="input-sm"
            class="mt-4 mb-4"
          >
            <b-form-select id="input-sm" required v-model="formNewStudent.className">
              <b-form-select-option
                v-for="(team, index) in getTeams"
                :key="index"
                :value="team.name"
              >
                {{ team.name }}
              </b-form-select-option>
            </b-form-select>
          </b-form-group>
          <div class="d-flex flex-row justify-content-end">
            <b-button type="submit" id="orange">Adicionar</b-button>
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

      <div
        v-if="whatModalDo == 'editStudent'"
        :style="{ fontFamily: 'EAmbit SemiBold' }"
        class="text-center"
      >
        <h4
          :style="{ fontFamily: 'EAmbit SemiBold', color: '#2B4141' }"
          class="mb-4"
        >
          Alterar Turma
        </h4>
        <b-form
          class="px-2 pb-3"
          :style="{ border: '2px solid #e87461', borderRadius: '5px' }"
          @submit.prevent="updateKidClass()"
        >
          <b-form-group
            label-cols="3"
            label-cols-lg="3"
            label-size="sm"
            label-align-sm="left"
            label="Turma:"
            label-for="input-sm"
            class="mt-4 mb-4"
          >
            <b-form-select id="input-sm" required v-model="updateKidTeam">
              <b-form-select-option
                v-for="(team, index) in getTeams"
                :key="index"
                :value="team.name"
                :disabled="team.name==childSelected.class"
              >
                {{ team.name }}
              </b-form-select-option>
            </b-form-select>
          </b-form-group>
          <div class="d-flex flex-row justify-content-end">
            <b-button
              type="submit"
              :style="{
                color: '#fdfdf3',
                'background-color': '#e87461',
                border: 'none',
              }"
              >Alterar</b-button
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

      <div
        v-if="whatModalDo == 'editClass'"
        :style="{ fontFamily: 'EAmbit SemiBold' }"
        class="text-center"
      >
        <h4
          :style="{ fontFamily: 'EAmbit SemiBold', color: '#2B4141' }"
          class="mb-4"
        >
          Alterar Nome
        </h4>

        <b-form
          class="px-2 pb-3"
          :style="{ border: '2px solid #e87461', borderRadius: '5px' }"
          @submit.prevent="changeNameClass()"
        >
          <b-form-group
            label-cols="2"
            label-cols-lg="2"
            label-size="sm"
            label-align-sm="left"
            label="Nome:"
            label-for="input-sm"
            class="mt-4 mb-4"
          >
            <b-form-input
              id="input-sm"
              v-model="updatedName"
              required
            ></b-form-input>
          </b-form-group>

          <div class="d-flex flex-row justify-content-end">
            <b-button
              id="orange"
              type="submit"
              class="text-end"
              >Alterar</b-button
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
  </div>
 </div>
</template>

<script>
import SideBar from "@/components/SideBar.vue";
import AppSearch from "@/components/AppSearch.vue";
import AppFooter from "@/components/AppFooter.vue";

import { mapActions, mapGetters } from 'vuex';

export default {
  name: "BaseView",
  components: {
    SideBar,
    AppSearch,
    AppFooter,
  },

  data() {
    return {
      showLoading:true,
      whatModalDo: "",
      warning: "",
      showChart:"Bar",
      optSelected: "Turmas",
      classSelected: "",
      childSelected: "",
      teamName:"",
      updatedName:"",
      formNewStudent:{
        username:"",
        name:"",
        tutor:"",
        className:""
      },
      updateKidTeam:"",
      searchTeam:"",
      searchStudent:"",
      message:"",
      historyKid:[],
      categoryKid:[],
      emotionsKid:[],
       //BAr Chart
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
          fontFamily: 'EAmbit SemiBold'
        },
        colors: ['#E87461', '#DCDCD7'],
        plotOptions: {
          bar: {
              horizontal: false,
              columnWidth: '25%',
              endingShape: 'flat',
              borderRadius: 2
            },
        },
         dataLabels: {
          enabled: false
        },
        labels:{
          style:{
            fontFamily:'EAmbitSemiBold'
          }
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
          opacity: 1,
        },
        grid: {
          yaxis: {
              lines: {
                  show: false
              }
        },
      },
      startGraphKid:0,
      endGraphKid:4, 
    },

    //Pie Chart

    seriesPie: [],
    chartOptionsPie: {
      chart: {
        type: 'donut',
        fontFamily:'EAmbit SemiBold',
        toolbar:{
          show:true
        }
      },
      labels: [],
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }],
      legend: {
        show:true,
        position:'bottom'
      },
      colors:['#68C0A2','#55ACD1','#F0C6DA','#F1D144','#F0795E','#8D8DBA']
    },

    //Radial
     seriesRadial: [],
    chartOptionsRadial: {
      chart: {
        type: 'radialBar',
        fontFamily:'EAmbit SemiBold',
        toolbar:{
          show:true
        }
      },
      plotOptions: {
          radialBar: {
             track: {
              background: '#DCDCD7',
            }
          }
      },
      labels: [],
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }],
      legend: {
        show:true,
        position:'bottom'
      },
      colors:['#68C0A2','#55ACD1','#F0C6DA','#F1D144','#F0795E','#8D8DBA']
    },
    };
  },

  computed: {
    ...mapGetters(['getUser','getTeams','getStudents','getKid','getHistoryUser'])
  },

  methods: {
    ...mapActions(['findUser','findTeams','createTeam','removeTeam','updateNameTeam','findAllStudents','findChild','createRequest','deleteRequest','updateChildClass','removeStudent','createNofication','findHistoryUser']),

    //Teams

    addClass(){
      this.createTeam({className:this.teamName})
        .then(()=>{
          this.$bvModal.hide("modal-virtual-school")
          this.findTeams("").then(()=>{
             this.classSelected=this.getTeams.find(team=>team.name==this.teamName)
             setTimeout(() => {
              this.teamName=''
             }, 1000);

          });
          this.message='Turma adicionada com sucesso.'
          this.$bvToast.show('my-toast');
        })
        .catch((err)=>{
          this.warning=`${err}`
          setTimeout(()=>{this.warning=""},5000)
        })
    },

    deleteClass(id){
      if(confirm('Deseja remover a turma ?')){
        this.removeTeam(id)
          .then(()=>{
            this.message='Turma removida com sucesso.'
            this.$bvToast.show('my-toast');
            this.findTeams("").then(()=>{
              if(this.getTeams.length!=0){
                 this.classSelected=this.getTeams[0]
              }
            });
          })
      }
      
    },

    changeNameClass(){
      this.updateNameTeam([this.classSelected._id,{newName:this.updatedName}])
        .then(()=>{
          this.$bvModal.hide("modal-virtual-school")
          this.message='Nome da Turma alterado com sucesso.'
          this.$bvToast.show('my-toast');
          this.findTeams("").then(()=>{
            this.classSelected=this.getTeams.find(team=>team.name==this.updatedName)
             setTimeout(() => {
              this.updatedName=''
            }, 1000);
          });
        })
        .catch((err)=>{
          this.warning=`${err}`
          setTimeout(()=>{this.warning=""},5000)
        })
    },

    selectTeams(){
      this.optSelected="Turmas";
      this.findTeams("")
        .then(()=>{
          if(this.getTeams.length!=0){
            this.classSelected=this.getTeams[0]
          }
        });
    },

    //Students

    selectStudents(name){
      this.optSelected="Alunos"
      this.findAllStudents("")
        .then(()=>{
          if(this.getStudents.length!=0){
            if(name==null){
              this.childSelected=this.getStudents[0];
              this.setHistory()
            }
            else if(typeof name==="object"){
               this.childSelected=this.getStudents.find((student)=>student._id==name.id);
               this.setHistory()
            }
            else{
              this.childSelected=this.getStudents.find((student)=>student.name==name);
              this.setHistory()

            }

          }
          
        });
    },

    setHistory(){
      this.findHistoryUser().then(()=>{
        this.historyKid=this.getHistoryUser.find(register=>register._id==this.childSelected._id).history
        this.categoryKid=this.getHistoryUser.find(register=>register._id==this.childSelected._id).categories
        this.emotionsKid=this.getHistoryUser.find(register=>register._id==this.childSelected._id).emotions
         if(this.historyKid.length>=2){
        if(this.historyKid.length<=4){
          this.endGraphKid=this.historyKid.length
        }
        else{
          this.startGraphKid=this.historyKid.length-4
          this.endGraphKid=this.historyKid.length
        }
        this.setGraphKid()
        this.setPieGraphKid()
        this.setRadialGraph()
      }
      })
    },

    

    
    seeMore(name){
      this.selectStudents(name)
      
    },

    getStudentInfo(){
      this.formNewStudent.name=''
      this.formNewStudent.tutor=''

      this.findChild(this.formNewStudent.username)
        .then(()=>{
          this.formNewStudent.name=this.getKid.name
          this.formNewStudent.tutor=this.getKid.tutor
        })
        .catch((err)=>{
          this.warning=`${err}`
          setTimeout(()=>{this.warning=""},5000)
        })
    },

    addStudent(){
      this.createRequest({username:this.formNewStudent.username,className:this.formNewStudent.className})
        .then(()=>{
          this.createNofication({list:[this.getKid.tutorId],title:'Novo Pedido de Integração',text:`O(A) Professor(a), ${this.getUser.name.toUpperCase()} pediu a integração da criança,${this.getKid.name} na seguinte Turma: ${this.formNewStudent.className}.`})
          this.formNewStudent={
            username:"",
            name:"",
            tutor:"",
            className:""
          }
          this.$bvModal.hide("modal-virtual-school")
          this.message='Pedido de integração efetuado com sucesso.'
          this.$bvToast.show('my-toast');
        })
        .catch((err)=>{
          this.warning=`${err}`
          setTimeout(()=>{this.warning=""},5000)
        })
    },

    removeRequest(data){
      if(confirm('Deseja cancelar o pedido ?')){
        this.deleteRequest(data)
          .then(()=>{
            this.message='Pedido de integração removido com sucesso.'
            this.$bvToast.show('my-toast');
            this.findTeams("").then(()=>{
              this.classSelected=this.getTeams.find(team=>team.name==data[1].className)
            })
          })
      }
    },

    updateKidClass(){
      let idClass=this.getTeams.find((team)=>team.name==this.childSelected.class)._id
      this.updateChildClass([idClass,this.childSelected._id,{newClass:this.updateKidTeam}])
        .then(()=>{
          this.findAllStudents("").then(()=>{
            this.childSelected=this.getStudents.find(student=>student._id==this.childSelected._id)
          })
          this.$bvModal.hide("modal-virtual-school")
          this.message='O processo de alteração de turma foi efetuado com sucesso.'
          this.$bvToast.show('my-toast');
          setTimeout(() => {
              this.updateKidTeam=''
          }, 1000);


        })
        .catch((err)=>{
          this.warning=`${err}`
          setTimeout(()=>{this.warning=""},5000)
        });
       
    },

    deleteStudent(data,where){
      if(confirm('Deseja remover a criança ?')){
        if(data[0]==''){
          data[0]=this.getTeams.find((team)=>team.name==this.childSelected.class)._id
        }
        this.removeStudent(data)
          .then(()=>{
            this.message='Criança removida com sucesso.'
            this.$bvToast.show('my-toast');
            if(where=='team'){
              this.findTeams("").then(()=>{
                this.classSelected=this.getTeams.find(team=>team._id==data[0])
              })
            }
            else{
              this.findAllStudents("").then(()=>{
                if(this.getStudents.length!=0){
                  this.selectStudents({id:this.getStudents[0]._id})
                }
                else{
                  this.childSelected=""
                }
              })
              
            }
          })
      }
      
    },

    showOrNotLoading(){
      setTimeout(()=>{
        this.showLoading=false
      },1500);
    },

    changeData(){
        if(Math.sign(this.startGraphKid-1)==-1){
          this.startGraphKid=this.historyKid.length-4
          this.endGraphKid=this.historyKid.length
        }
        else{
          this.startGraphKid--
          this.endGraphKid--
        }
        this.setGraphKid()
    },

    setGraphKid(){
      let array=[]
      let rightArray=[]
      let wrongArray=[]
      for (let history of this.historyKid.slice(this.startGraphKid,this.endGraphKid)) {
        array.push(history.date)
        let right=0
        let wrong=0
        
        right+=+history.questionsRight
        wrong+=+history.questionsWrong
        
        rightArray.push(right)
        wrongArray.push(wrong)
        
      }
      

      this.$refs.chartReactive.updateSeries([
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

    setPieGraphKid(){
      let array=[]
      let otherArray=[]
      for (const emotion of this.emotionsKid) {
        array.push(+(Object.values(emotion)[0]))
        otherArray.push(Object.keys(emotion)[0])

      }

      this.seriesPie=array

      this.chartOptionsPie={...this.chartOptionsPie,...{
        labels:otherArray
      }}
      

    },

    setRadialGraph(){
     let array=[]
     let otherArray=[]
     for (const category of this.categoryKid) {
        array.push(+(Object.values(category)[0]))
        otherArray.push(Object.keys(category)[0])
     }

     this.seriesRadial=array
     this.chartOptionsRadial={...this.chartOptionsRadial,...{
        labels:otherArray
     }}
    }


  },

  mounted () {
    this.showOrNotLoading();
     this.findUser()
     .then(()=>{
      this.findTeams("")
        .then(()=>{
          if(this.getTeams.length!=0){
            if(this.$route.params.idUserTeacher){
              this.selectStudents({id:this.$route.params.idUserTeacher})
            }
            else{
              this.classSelected=this.getTeams[0]
            }
            
          }
        });
     });
  },

  watch: {
    searchTeam(newValue) {
       this.findTeams(`?name=${newValue}`).then(()=>{
        this.classSelected=""
      })
    },

    searchStudent(newValue){
      this.findAllStudents(`?name=${newValue}`).then(()=>{
        this.childSelected=""
      });
    }
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

.btn {
  text-align: left;
}

.schoolCard {
  border: 2px solid #e87461;
  border-radius: 5px;
}

.activeItem {
  color: #e87461;
}

table {
  border-collapse: collapse;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  overflow: hidden;
}

.color {
  background-color: #fdfdf3;
}

#grey {
  background-color: #bfbfbf;
  color: #fdfdf3;
  border: 1px solid #bfbfbf;
}
#grey:hover {
  background-color: #fdfdf3;
  color: #bfbfbf;
}

#red {
  border: 1px solid #e95353;
}
#red:hover {
  background-color: #fdfdf3;
  color: #e95353;
  border: 1px solid #e95353;
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

.btn:focus{
  outline:0px !important;
  -webkit-appearance:none;
  box-shadow: none !important;
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

.changeColorTab{
  background-color:#d9d9d558 !important;
  border-bottom: none;
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
