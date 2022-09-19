<template>
 <div class="p-0">
    <div class="loading d-flex flex-column align-items-center justify-content-center" :style="{position:'fixed',zIndex:'2'}"  v-if="showLoading==true">
      <b-spinner style="width: 8rem; height: 8rem;color:white" label="Spinning"></b-spinner>
      <h3 class="mt-4" style="color:white">A carregar <span class="info">...</span></h3>
    </div>
  <div class="d-flex">
    <aside>
      <SideBar activeTab="Gerir" v-if="this.getUser!=null" :user="this.getUser"/>
    </aside>
    <main>
      <AppSearch />
      <b-container class="bv-example-row col-11 mb-2">
        <div class="mb-2">
          <b-link
            @click="optSelected = 'Utilizadores'"
            :style="{
              color: '#2B4141',
              textDecoration: 'none',
              fontSize: '30px',
              'font-family': 'EAmbit SemiBold',
              opacity: optSelected === 'Utilizadores' ? 1 : 0.2,
            }"
            >Gerir Utilizadores
          </b-link>

          <b-link
            @click="selectActivities()"
            class="mx-4"
            :style="{
              color: '#2B4141',
              textDecoration: 'none',
              fontSize: '30px',
              'font-family': 'EAmbit SemiBold',
              opacity: optSelected === 'Atividades' ? 1 : 0.2,
            }"
          >
            Gerir Atividades
          </b-link>
          <b-link
            @click="selectedBadges()"
            :style="{
              color: '#2B4141',
              textDecoration: 'none',
              fontSize: '30px',
              'font-family': 'EAmbit SemiBold',
              opacity: optSelected === 'Badges' ? 1 : 0.2,
            }"
          >
            Gerir Badges
          </b-link>
        </div>

        <section
          v-if="optSelected === 'Utilizadores'"
          class="p-3"
          :style="{ border: '2px solid #e87461', borderRadius: '5px' }"
        >
          <div class="p-0 col-12 d-flex align-items-center">
            <b-form inline class="col-10 p-0">
              <label for="filterName">Nome: </label>
              <b-form-input
                id="filterName"
                class="mb-2 ml-2 col-3"
                v-model="formFilterUser.name"
              ></b-form-input>

              <label class="ml-4" for="filterType">Tipo: </label>
              <b-form-select
                id="filterType"
                class="mb-2 ml-2 col-2"
                v-model="formFilterUser.typeUser"
              >
                <b-form-select-option value="">Qualquer</b-form-select-option>
                <b-form-select-option
                  :value="type"
                  v-for="(type, index) in typeUsers"
                  :key="index"
                  >{{ type }}</b-form-select-option
                >
              </b-form-select>
            </b-form>

            <div class="col-2 p-0 d-flex justify-content-end">
              <b-button
                class="m-0"
                :style="{
                  color: '#fdfdf3',
                  'background-color': '#e87461',
                  border: 'none',
                }"
                v-b-modal.modalManage
                @click="whatModalDo = 'addUser'"
                >Adicionar</b-button
              >
            </div>
          </div>

          <div class="mt-4" style="min-height: 50vh">
            <table class="col-12 text-center">
              <tr :style="{ 'background-color': '#e87461', color: '#fbfbf3' }">
                <th class="p-1">Username</th>
                <th>Nome</th>
                <th>Tipo de Utilizador</th>
                <th>Ações</th>
              </tr>
              <tr :style="{'border-bottom':index==getUsers.length-1 ?'5px solid #e87461' :'1px solid #707070',color:'#2B4141'}" v-for="(user,index) in getUsers" :key='index'>
                <td class="p-4">{{user.username}}</td>
                <td>{{user.name}}</td>
                <td>{{user.typeUser}}</td>
                <td>
                  <b-button
                    :style="{border: 'none'}"
                    variant="secondary"
                    class="ml-2 mr-1"
                    v-b-modal.modalManage
                    @click="giveInfo(user)"
                    ><b-icon icon="info-circle-fill"></b-icon
                  ></b-button>
                  <b-button
                    :style="{border: 'none'}"
                    variant="primary"
                    class="ml-2 mr-1"
                    v-if="user.blocked==false && user.typeUser!='Administrador'"
                    @click="changeBlocked(user._id)"
                    ><b-icon icon="lock-fill"></b-icon
                  ></b-button>
                  <b-button
                    :style="{border: 'none'}"
                    variant="primary"
                    class="ml-2 mr-1"
                    @click="changeBlocked(user._id)"
                    v-if="user.blocked==true && user.typeUser!='Administrador'"
                    ><b-icon icon="unlock-fill"></b-icon
                  ></b-button>
                  <b-button
                   :style="{border: 'none'}"
                    variant="danger"
                    class="ml-2 mr-1"
                    v-if="user.username!=getUser.username"
                    @click="removeUser(user._id)"
                    ><b-icon icon="trash-fill"></b-icon
                  ></b-button>
                </td>
              </tr>
            </table>
          </div>
        </section>
        <section
          v-if="optSelected === 'Atividades'"
          class="p-3"
          :style="{ border: '2px solid #e87461', borderRadius: '5px' }"
        >
          <div class="p-0 col-12 d-flex align-items-center">
            <b-form inline class="col-8 p-0">
              <label class="mr-sm-2" for="filterTitle">Título: </label>
              <b-form-input
                id="filterTitle"
                class="mb-2 mr-sm-5 mb-sm-0 col-3"
                v-model="formFilterActivity.title"
              ></b-form-input>

              <label class="mr-sm-2" for="filterLevel">Tipo: </label>
              <b-form-select
                id="filterLevel"
                class="mb-2 mr-sm-5 mb-sm-0 col-2"
                v-model="formFilterActivity.category"
              >
                <b-form-select-option value="">Qualquer</b-form-select-option>
                <b-form-select-option value="Quiz">Quiz</b-form-select-option>
                <b-form-select-option value="Reconhecimento">Reconhecimento</b-form-select-option>
                <b-form-select-option value="Atividades Personalizadas (Professor)">Atividades Personalizadas (Professor)</b-form-select-option>
                <b-form-select-option value="Atividades Personalizadas (Tutor)">Atividades Personalizadas (Tutor)</b-form-select-option>
              </b-form-select>

              <label class="mr-sm-2" for="filterLevel">Dificuldade: </label>
              <b-form-select
                id="filterLevel"
                class="mb-2 mr-sm-0 mb-sm-0 col-2"
                v-model="formFilterActivity.level"
              >
                <b-form-select-option value="">Qualquer</b-form-select-option>
                <b-form-select-option value="Fácil">Fácil</b-form-select-option>
                <b-form-select-option value="Médio">Médio</b-form-select-option>
                <b-form-select-option value="Difícil"
                  >Difícil</b-form-select-option
                >
              </b-form-select>
            </b-form>

            <div class="col-4 p-0 d-flex justify-content-end">
              <b-button
                :style="{
                  color: '#fdfdf3',
                  'background-color': '#e87461',
                  border: 'none',
                }"
                v-b-modal.modalManage
                @click="openModalForActivity"
                >Adicionar</b-button
              >
            </div>
          </div>

          <div class="mt-4" style="min-height: 50vh">
            <table class="col-12 text-center">
              <tr :style="{ 'background-color': '#e87461', color: '#fbfbf3' }">
                <th class="p-1">Título</th>
                <th>Grau de Dificuldade</th>
                <th>Categoria</th>
                <th>Ações</th>
              </tr>
              <tr :style="{'border-bottom':index==getActivities.length-1 ?'5px solid #e87461' :'1px solid #707070',color:'#2B4141'}"  v-for="(activity,index) in getActivities" :key="index">
                <td class="p-4">{{activity.title}}</td>
                <td>{{activity.level}}</td>
                <td>{{activity.category}}</td>
                <td>
                  <b-button
                   :style="{border: 'none'}"
                    variant="secondary"
                    class="ml-2 mr-1"
                    v-b-modal.modalManage
                    @click="openEditActivity(activity)"
                    v-if="activity.category=='Quiz' || activity.category=='Reconhecimento'"
                    ><b-icon icon="pencil-fill"></b-icon
                  ></b-button>
                  <b-button
                    @click="removeActivity(activity._id)"
                    :style="{border: 'none'}"
                    variant="danger"
                    class="ml-2 mr-1"
                    ><b-icon icon="trash-fill"></b-icon
                  ></b-button>
                </td>
              </tr>
            </table>
          </div>
        </section>
        <section
          v-if="optSelected === 'Badges'"
          class="p-3"
          :style="{ border: '2px solid #e87461', borderRadius: '5px' }"
        >
          <div class="p-0 col-12 d-flex align-items-center">
            <b-form inline class="col-8 p-0">
              <label class="mr-sm-2" for="filterTitle">Descrição: </label>
              <b-form-input
                id="filterTitle"
                class="mb-2 mr-sm-5 mb-sm-0 col-3"
                v-model="formFilterBadge.title"
              ></b-form-input>

              <label class="mr-sm-2" for="filterLevel">Emoção: </label>
              <b-form-select
                id="filterLevel"
                class="mb-2 mr-sm-0 mb-sm-0 col-2"
                v-model="formFilterBadge.emotion"
              >
                <b-form-select-option value="">Qualquer</b-form-select-option>
                <b-form-select-option v-for="(emotion,index) in getEmotions" :key="index" :value="emotion.name">{{emotion.name}}</b-form-select-option>
              </b-form-select>
            </b-form>

            <div class="col-4 p-0 d-flex justify-content-end">
              <b-button
                :style="{
                  color: '#fdfdf3',
                  'background-color': '#BFBFBF',
                  border: 'none',
                }"
                class="mr-3"
                v-b-modal.modalManage
                @click="seeEmotions()"
                >Gerir Emoções</b-button
              >
              <b-button
                :style="{
                  color: '#fdfdf3',
                  'background-color': '#e87461',
                  border: 'none',
                }"
                v-b-modal.modalManage
                @click="whatModalDo = 'addBadge'"
                >Adicionar</b-button
              >
            </div>
          </div>

          <div class="mt-4" :style="{minHeight: '50vh'}">
            <table class="col-12 text-center">
              <tr :style="{ 'background-color': '#e87461', color: '#fbfbf3' }">
                <th class="p-1">Descrição</th>
                <th>Emoção</th>
                <th>Pontos Necessários</th>
                <th>Ações</th>
              </tr>
              <tr :style="{'border-bottom':index==getBadges.length-1 ?'5px solid #e87461' :'1px solid #707070',color:'#2B4141'}" v-for="(badge,index) in getBadges" :key="index">
                <td class="p-4">{{badge.name}}</td>
                <td>{{badge.emotion}}</td>
                <td>{{badge.pointsNeeded}}</td>
                <td>
                  <b-button
                   :style="{border: 'none'}"
                    variant="danger"
                    class="ml-2 mr-1"
                    @click="deleteBadge(badge._id)"
                    ><b-icon icon="trash-fill"></b-icon
                  ></b-button>
                </td>
              </tr>
            </table>
          </div>
        </section>
      </b-container>
      <AppFooter />
    </main>

    <b-modal
      id="modalManage"
      centered
      hide-footer
      header-border-variant="0"
      header-class="color"
      body-class="color"
      :size="calculateModalSize(whatModalDo)"
    >
      <div
        v-if="whatModalDo == 'addUser'"
        :style="{fontFamily: 'EAmbit Regular',color: '#2b4141'}"
        class="text-center"
      >
        <h3 class="mt-2 mb-4" :style="{ fontFamily: 'EAmbit SemiBold' }">
          Adicionar Administrador
        </h3>
        <b-form
          :style="{ border: '2px solid #e87461', borderRadius: '5px' }"
          class="px-3 pt-4"
          @submit.prevent="addNewAdmin"
        >
          <b-input-group class="mb-4">
            <b-form-input
              placeholder="Username"
              :style="{backgroundColor: 'white'}"
              v-model="newUser.username"
              required
            ></b-form-input>
          </b-input-group>

          <b-input-group class="mb-4">
            <b-form-input
              type="password"
              placeholder="Password"
             :style="{backgroundColor: 'white'}"
              v-model="newUser.password"
              required
            ></b-form-input>
          </b-input-group>

          <b-input-group class="mb-4">
            <b-form-input
              type="password"
              placeholder="Confirmar Password"
              :style="{backgroundColor: 'white'}"
              v-model="conf_password"
              required
            ></b-form-input>
          </b-input-group>

          <b-input-group class="mb-4">
            <b-form-input
              placeholder="Nome"
             :style="{backgroundColor: 'white'}"
              v-model="newUser.name"
              required
            ></b-form-input>
          </b-input-group>

          <b-input-group class="mb-4">
            <b-form-input
              type="email"
              placeholder="Email"
              :style="{backgroundColor: 'white'}"
              v-model="newUser.email"
              required
            ></b-form-input>
          </b-input-group>

          <div class="d-flex flex-row justify-content-end mb-3">
            <b-button type="submit" class="w-25" id="orange"
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
        v-if="whatModalDo == 'seeUser'"
        :style="{fontFamily: 'EAmbit Regular',color: '#2b4141'}"
        class="text-center"
      >
        <h3 class="mt-2 mb-4" :style="{ fontFamily: 'EAmbit SemiBold' }">
          Informações
        </h3>
        <b-form
          :style="{ border: '2px solid #e87461', borderRadius: '5px' }"
          class="px-3 pt-4"
        >
          <b-input-group class="mb-4">
            <b-form-input
              placeholder="Username"
              v-model="formDetail.username"
              :style="{backgroundColor: 'white'}"
              required
              disabled
            ></b-form-input>
          </b-input-group>

          <b-input-group class="mb-4">
            <b-form-input
              placeholder="Nome"
              v-model="formDetail.name"
               :style="{backgroundColor: 'white'}"
              required
              disabled
            ></b-form-input>
          </b-input-group>

          <b-input-group class="mb-4">
            <b-form-input
              type="email"
              v-model="formDetail.email"
              placeholder="Email"
               :style="{backgroundColor: 'white'}"
              required
              disabled
            ></b-form-input>
          </b-input-group>

            <b-input-group class="mb-4">
            <b-form-input
              type="text"
              v-model="formDetail.typeUser"
              placeholder="Quem sou eu?"
               :style="{backgroundColor: 'white'}"
              required
              disabled
            ></b-form-input>
          </b-input-group>

        </b-form>
      </div>

      <div
        v-if="whatModalDo == 'addActivity'"
        :style="{ fontFamily: 'EAmbit SemiBold' }"
        class="text-center"
      >
        <h4
          :style="{ fontFamily: 'EAmbit SemiBold', color: '#2B4141' }"
          class="mb-4"
        >
          Nova Atividade
        </h4>

        <b-form
          class="mb-3 px-3 pt-4 pb-2"
          :style="{ border: '2px solid #e87461', borderRadius: '5px' }"
          @submit.prevent="addActivity()"
        >
          <b-form-group
            label="Título:"
            label-for="activityTitle"
            label-cols-sm="2"
            label-align-sm="left"
          >
            <b-form-input
              id="activityTitle"
              placeholder="Atividade"
              v-model="newActivity.title"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group
            label="Categoria:"
            label-cols-sm="2"
            label-align-sm="left"
          >
            <b-form-select
              id="activityDifficulty"
              v-model="newActivity.category"
              required
            >
              <b-form-select-option value="">Qualquer</b-form-select-option>
              <b-form-select-option value="Quiz">Quiz</b-form-select-option>
              <b-form-select-option value="Reconhecimento">Reconhecimento</b-form-select-option>
            </b-form-select>
          </b-form-group>

          <b-form-group
            label="Dificuldade:"
            label-for="activityDifficulty"
            label-cols-sm="2"
            label-align-sm="left"
          >
            <b-form-select
              id="activityDifficulty"
              v-model="newActivity.level"
              required
            >
              <b-form-select-option value="">Qualquer</b-form-select-option>
              <b-form-select-option value="Fácil">Fácil</b-form-select-option>
              <b-form-select-option value="Médio">Médio</b-form-select-option>
              <b-form-select-option value="Difícil"
              >Difícil</b-form-select-option
              >
            </b-form-select>
          </b-form-group>

          <b-form-group
            label='Perguntas:'
            label-for="activityQuestions"
            label-cols-sm="2"
            label-align-sm="left" v-for="(question,index) in newActivity.questions" :key="index"
            required
          >
            <div class="d-flex flex-row flex-wrap">
                <b-form-input
                id="activityQuestions"
                class="col-10"
                placeholder="Pergunta"
                v-model="question.text"
                required
              ></b-form-input>
              <b-form-input
                id="activityQuestions"
                class="col-5 mt-2"
                placeholder="Imagem(URL)"
                v-model="question.img"
                required
              ></b-form-input>
              <b-form-select
                class="col-5 mt-2 mx-2"
                v-model="question.categoryImg"
                required
              >
                <b-form-select-option value="" disabled>Categoria (IMG)</b-form-select-option>
                <b-form-select-option value="Ilustração">Ilustração</b-form-select-option>
                <b-form-select-option value="Realidade">Realidade</b-form-select-option>
                <b-form-select-option value="Realidade/Familiar">Realidade/Familiar</b-form-select-option>
              </b-form-select>
              <b-form-select
                class="col-5 mt-2"
                v-model="question.correctAnswer"
                required
              >
                <b-form-select-option value="" disabled>Emoção</b-form-select-option>
                <b-form-select-option :value="emotion.name" v-for="(emotion,index) in getEmotions" :key="index" :disabled="newActivity.category=='Reconhecimento' && !emotionsRegonize.find(e=>e==emotion.name)">{{emotion.name}}</b-form-select-option>
              </b-form-select>
              <b-form-input
                id="activityQuestions"
                class="col-5 mt-2 mx-2"
                type="number"
                placeholder="Pontos"
                min="0"
                v-model="question.points"
                required
              ></b-form-input>
            

              <b-link
                v-if="newActivity.questions.length!=1"
                :style="{ color: '#2b4141',textDecoration:'none' }"
                class="d-flex flex-row align-items-center mt-2"
                @click="newActivity.questions.splice(index,1);"
                ><span
                  class="material-icons-round"
                  :style="{ fontSize: '30px',textDecoration:'none' }"
                  >cancel</span
                ></b-link
              >

              <b-link
                v-if="newActivity.questions.length-1==index"
                :style="{ color: '#2b4141' }"
                class="d-flex flex-row align-items-center mt-2"
                @click="newActivity.questions.push({img:'',correctAnswer:'',options: [],points: 0,categoryImg:'',text:''})"
                ><span
                  class="material-icons-round"
                  :style="{ fontSize: '30px' }"
                  >add_circle</span
                ></b-link
              >
            </div>
          </b-form-group>

          <b-form-group
            label="Capa (IMG):"
            label-for="activityIMG"
            label-cols-sm="2"
            label-align-sm="left"
          >
            <b-form-input 
              id="activityIMG" 
              type="url" 
              v-model="newActivity.coverIMG"
              >
            </b-form-input>
          </b-form-group>

          <b-form-group
            label="Descrição:"
            label-for="activityDescription"
            label-cols-sm="2"
            label-align-sm="left"
          >
            <b-form-textarea
              id="activityDescription"
              value="Descrição"
              v-model="newActivity.description"
            ></b-form-textarea>
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
        v-if="whatModalDo == 'editActivity'"
        :style="{ fontFamily: 'EAmbit SemiBold' }"
        class="text-center"
      >
        <h4
          :style="{ fontFamily: 'EAmbit SemiBold', color: '#2B4141' }"
          class="mb-4"
        >
          Editar Atividade
        </h4>

        <b-form
          class="mb-3 px-3 pt-4 pb-2"
          :style="{ border: '2px solid #e87461', borderRadius: '5px' }"
          @submit.prevent="changeActivity()"
        >
          <b-form-group
            label="Título:"
            label-cols-sm="2"
            label-align-sm="left"
          >
            <b-form-input
              placeholder="Título da Atividade"
              v-model="editActivity.title"
              disabled
            ></b-form-input>
          </b-form-group>

          <b-form-group
            label="Dificuldade:"
            label-cols-sm="2"
            label-align-sm="left"
          >
            <b-form-select
              v-model="editActivity.level"
            >
            <b-form-select-option value="" disabled>Selecione o Grau de Dificuldade</b-form-select-option>
            <b-form-select-option value="Fácil">Fácil</b-form-select-option>
            <b-form-select-option value="Médio">Médio</b-form-select-option>
            <b-form-select-option value="Difícil">Difícil</b-form-select-option>
            </b-form-select>
          </b-form-group>

          <b-form-group
            label='Perguntas:'
            label-for="activityQuestions"
            label-cols-sm="2"
            label-align-sm="left" v-for="(question,index) in editActivity.questions" :key="index"
            required
          >
            <div class="d-flex flex-row flex-wrap">
                <b-form-input
                id="activityQuestions"
                class="col-10"
                placeholder="Pergunta"
                v-model="question.text"
                required
              ></b-form-input>
              <b-form-input
                id="activityQuestions"
                class="col-5 mt-2"
                placeholder="Imagem(URL)"
                v-model="question.img"
                required
              ></b-form-input>
              <b-form-select
                class="col-5 mt-2 mx-2"
                v-model="question.categoryImg"
                required
              >
                <b-form-select-option value="" disabled>Categoria (IMG)</b-form-select-option>
                <b-form-select-option value="Ilustração">Ilustração</b-form-select-option>
                <b-form-select-option value="Realidade">Realidade</b-form-select-option>
                <b-form-select-option value="Realidade/Familiar">Realidade/Familiar</b-form-select-option>
              </b-form-select>
              <b-form-select
                class="col-5 mt-2"
                v-model="question.correctAnswer"
                required
              >
                <b-form-select-option value="" disabled>Emoção</b-form-select-option>
                <b-form-select-option :value="emotion.name" v-for="(emotion,index) in getEmotions" :key="index" :disabled="editActivity.category=='Reconhecimento' && !emotionsRegonize.find(e=>e==emotion.name)">{{emotion.name}}</b-form-select-option>
              </b-form-select>
              <b-form-input
                id="activityQuestions"
                class="col-5 mt-2 mx-2"
                type="number"
                placeholder="Pontos"
                min="0"
                v-model="question.points"
                required
              ></b-form-input>
            

              <b-link
                v-if="editActivity.questions.length!=1"
                :style="{ color: '#2b4141',textDecoration:'none' }"
                class="d-flex flex-row align-items-center mt-2"
                @click="editActivity.questions.splice(index,1);"
                ><span
                  class="material-icons-round"
                  :style="{ fontSize: '30px',textDecoration:'none' }"
                  >cancel</span
                ></b-link
              >

              <b-link
                v-if="editActivity.questions.length-1==index"
                :style="{ color: '#2b4141' }"
                class="d-flex flex-row align-items-center mt-2"
                @click="editActivity.questions.push({img:'',correctAnswer:'',options: [],points: 0,categoryImg:'',text:''})"
                ><span
                  class="material-icons-round"
                  :style="{ fontSize: '30px' }"
                  >add_circle</span
                ></b-link
              >
            </div>
          </b-form-group>

          <b-form-group
            label="Capa (IMG):"
            label-for="activityIMG"
            label-cols-sm="2"
            label-align-sm="left"
          >
            <b-form-input id="activityIMG" placeholder="Capa" v-model="editActivity.coverIMG"></b-form-input>
          </b-form-group>

          <b-form-group
            label="Descrição:"
            label-for="activityDescription"
            label-cols-sm="2"
            label-align-sm="left"
          >
            <b-form-textarea
              id="activityDescription"
              placeholder="Descrição"
              v-model="editActivity.description"
            ></b-form-textarea>
          </b-form-group>

          <div class="d-flex flex-row justify-content-end">
            <b-button type="submit" class="text-end" id="orange"
              >Aplicar Alterações</b-button
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
        v-if="whatModalDo == 'seeEmotions'"
        :style="{ fontFamily: 'EAmbit SemiBold' }"
        class="text-center"
      >
        <h4
          :style="{ fontFamily: 'EAmbit SemiBold', color: '#2B4141' }"
          class="mb-4"
        >
          Emoções
        </h4>
        <div
          class="px-3 py-3"
          :style="{ border: '2px solid #e87461', borderRadius: '5px' }"
        >
          <b-form class="col-12 p-0" @submit.prevent="addNewEmotion()">
            <b-form-group
              label-cols="2"
              label-cols-lg="2"
              label-size="sm"
              label-align-sm="left"
              label="Nome:"
              label-for="input-sm"
            >
              <b-form-input
                id="input-sm"
                v-model="newEmotion"
                required
              ></b-form-input>
            </b-form-group>
         

          <div class="col-12 p-0 d-flex flex-row justify-content-end">
            <b-button
              :style="{
                color: '#fdfdf3',
                'background-color': '#e87461',
                border: 'none',
              }"
              type="submit"
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

          <hr />

          <div :style="{minHeight: '40vh'}">
            <table class="col-12 text-center">
              <tr :style="{ 'background-color': '#e87461', color: '#fbfbf3' }">
                <th class="p-1">Nome</th>
                <th>Ação</th>
              </tr>
              <tr :style="{'border-bottom':index==getEmotions.length-1 ?'5px solid #e87461' :'1px solid #707070',color:'#2B4141'}" v-for="(emotion,index) in getEmotions" :key="index">
                <td class="p-4">{{emotion.name}}</td>
                <td>
                  <b-button
                    :style="{border: 'none'}"
                    variant="danger"
                    class="ml-2 mr-1"
                    @click="deleteEmotion(emotion._id)"
                    v-if="!emotionsRegonize.find(e=>e==emotion.name)"
                    ><b-icon icon="trash-fill"></b-icon
                  ></b-button>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>

      <div
        v-if="whatModalDo == 'addBadge'"
        :style="{ fontFamily: 'EAmbit SemiBold' }"
        class="text-center"
      >
        <h4
          :style="{ fontFamily: 'EAmbit SemiBold', color: '#2B4141' }"
          class="mb-4"
        >
          Novo Badge
        </h4>
        <b-form
          class="px-3 py-2"
          :style="{ border: '2px solid #e87461', borderRadius: '5px' }"
          @submit.prevent="addBadge()"
        >
          <b-form-group
            label-cols="3"
            label-cols-lg="3"
            label-size="sm"
            label-align-sm="left"
            label="Descrição:"
            label-for="input-sm"
            class="mt-4 mb-4"
          >
            <b-form-input
              id="input-sm"
              v-model="newBadge.name"
              required
            ></b-form-input>
          </b-form-group>
          <b-form-group
            label-cols="3"
            label-cols-lg="3"
            label-size="sm"
            label-align-sm="left"
            label="Pontos:"
            label-for="input-sm"
            class="mt-4 mb-4"
          >
            <b-form-input
              id="input-sm"
              type="number"
              min="0"
              v-model.number="newBadge.pointsNeeded"
              required
            ></b-form-input>
          </b-form-group>
          <b-form-group
            label-cols="3"
            label-cols-lg="3"
            label-size="sm"
            label-align-sm="left"
            label="Imagem (URL):"
            label-for="input-sm"
            class="mt-4 mb-4"
          >
            <b-form-input
              id="input-sm"
              type="url"
              v-model="newBadge.badgeIMG"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group
            label-cols="3"
            label-cols-lg="3"
            label-size="sm"
            label-align-sm="left"
            label="Cor de Fundo:"
            label-for="input-sm"
            class="mt-4 mb-4"
          >
            <b-form-input
              id="input-sm"
              type="color"
              v-model="newBadge.mainColor"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group
            label-cols="3"
            label-cols-lg="3"
            label-size="sm"
            label-align-sm="left"
            label="Cor do Limite:"
            label-for="input-sm"
            class="mt-4 mb-4"
          >
            <b-form-input
              id="input-sm"
              type="color"
              v-model="newBadge.footerColor"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group
            label-cols="3"
            label-cols-lg="3"
            label-size="sm"
            label-align-sm="left"
            label="Emoção:"
            label-for="input-sm"
            class="mt-4 mb-4"
          >
            <b-form-select
              id="input-sm"
              v-model="newBadge.emotion"
              required
            >
              <b-form-select-option value="">--Emoção--</b-form-select-option>
              <b-form-select-option v-for="(emotion,index) in getEmotions" :key="index" :value="emotion.name">{{emotion.name}}</b-form-select-option>
            </b-form-select>
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
  name: "HomeView",
  components: {
    SideBar,
    AppSearch,
    AppFooter,
  },
  data() {
    return {
      showLoading:true,
      optSelected: "Utilizadores",
      typeUsers: ["Criança", "Tutor", "Administrador"],
      whatModalDo: "",
      formDetail:{},
      warning:"",
      formFilterActivity: {
        title: "",
        category: "",
        level: "",
      },
      formFilterBadge: {
        title: "",
        emotion: "",
      },
      formFilterUser: {
        name: "",
        typeUser: "",
      },
      conf_password: "",
      newUser: {
        username: "",
        password: "",
        name: "",
        email: ""
      },
      newBadge: {
        name: "",
        badgeIMG: "",
        emotion: "",
        pointsNeeded: "",
        mainColor:"",
        footerColor:""

      },
      newActivity: {
        title: "",
        level: "",
        category: "",
        questions: [
          {
            img: "",
            correctAnswer: "",
            options: [],
            points: 0,
            categoryImg:"",
            text:""
          },
        ],
        coverIMG: "",
        description: "",
      },
      editActivity: {},
      newEmotion: "",
      emotionsRegonize:['Feliz','Triste','Zangado','Surpreendido','Assustado','Enojado'],
      message:""
    };
  },

  methods: {
    ...mapActions(['findUser','findAllUsers','addAdmin','unlockLock','deleteUser','getAllEmotions','addEmotion','removeEmotion','createBadge','getAllBadges','removeBadge','findActivities','createActivity','deleteActivity','updateActivity']),

    calculateModalSize(type) {
      return type === "addActivity" || type === "editActivity" ? "lg" : "";
    },
    giveInfo(user) {
      this.whatModalDo = "seeUser";
      this.formDetail = user;
    },

    openEditActivity(activity) {
      this.whatModalDo = "editActivity";
      this.editActivity = Object.assign({}, this.editActivity , activity);
      this.getAllEmotions();
    },

    changeActivity(){
      this.updateActivity([this.editActivity._id, {level:this.editActivity.level,questions:this.editActivity.questions,coverIMG:this.editActivity.coverIMG,description:this.editActivity.description}])
        .then(()=>{
          this.findActivities("")
          setTimeout(() => {
            this.editActivity ={};
          }, 1000);
          this.$bvModal.hide("modalManage");
          this.message='Aos dados da atividade selecionada foram alterados com sucesso.'
          this.$bvToast.show('my-toast');
        })
        .catch((err) => {
          this.warning = `${err}`;
          setTimeout(() => {
            this.warning = "";
          }, 5000);
        });
    },

    //users

    addNewAdmin(){
      if(this.newUser.password!=this.conf_password){
        this.warning='As passwords não coincidem'
        setTimeout(()=>{this.warning=""},5000)
      }
      else{
        this.addAdmin(this.newUser)
          .then(()=>{//location.reload();
            this.findAllUsers("")
            this.newUser={
              username: "",
              password: "",
              name: "",
              email: ""
            }
            this.conf_password=""
            this.$bvModal.hide("modalManage")
            this.message='Novo administrador registado com sucesso.'
            this.$bvToast.show('my-toast');
          })
          .catch((err) => {
            this.warning = `${err}`;
            setTimeout(() => {
              this.warning = "";
            }, 5000)
          });
      }
    },

    changeBlocked(id){
      this.unlockLock(id)
      .then(()=>{this.findAllUsers("")
        this.message='O utilizador selecionado foi bloqueado/desbloqueado com sucesso.'
        this.$bvToast.show('my-toast');
      })
      .catch((err)=>{
        console.log(err);
      })
    },

    removeUser(id){
      if(confirm('Deseja remover o utilizador?')){
        this.deleteUser(id)
          .then(()=>{this.findAllUsers("")
            this.message='O utilizador selecionado foi removido com sucesso.'
            this.$bvToast.show('my-toast');
          })
          .catch((err)=>{
            console.log(err);
          })
      }
    },

    //Emotions
    seeEmotions(){
      this.whatModalDo = 'seeEmotions'
      this.getAllEmotions();
      this.getAllBadges("");
      
    },

    addNewEmotion(){
      this.addEmotion({name:this.newEmotion})
        .then(()=>{
          this.getAllEmotions()
          this.newEmotion='';
          this.message='A nova emoção foi adicionada com sucesso.'
          this.$bvToast.show('my-toast');
        })
        .catch((err)=>{
          this.warning = `${err}`;
          setTimeout(() => {
            this.warning = "";
          }, 5000)
        });
    },

    deleteEmotion(id){
      if(confirm('Deseja eliminar a emoção?')){
        this.removeEmotion(id)
          .then(()=>{
            this.message='A emoção selecionada foi removida com sucesso.'
            this.$bvToast.show('my-toast');
            this.getAllEmotions()
          })
      }
    },

    //Badges

    selectedBadges(){
      this.optSelected = 'Badges';
      this.getAllEmotions();
      this.getAllBadges("");
      
    },

    addBadge(){
      this.createBadge(this.newBadge)
      .then(()=>{
        this.getAllBadges("");
        this.$bvModal.hide("modalManage");
        this.message='O novo badge foi adicionado com sucesso.'
        this.$bvToast.show('my-toast');
        this.newBadge= {
          name: "",
          badgeIMG: "",
          emotion: "",
          pointsNeeded: "",
          mainColor:"",
          footerColor:""
        }
      })
      .catch((err)=>{
        this.warning = `${err}`;
        setTimeout(() => {
          this.warning = "";
        }, 5000);
      })
    },

    deleteBadge(id){
      if(confirm('Deseja remover o badge ?')){
        this.removeBadge(id)
        .then(()=>{this.getAllBadges("")
          this.message='o badge selecionado foi removido com sucesso.'
          this.$bvToast.show('my-toast');
        });
      }
      
    },

    //Activities

    selectActivities(){
      this.optSelected = 'Atividades'
      this.findActivities("");
    },

    openModalForActivity(){
      this.whatModalDo = 'addActivity'
      this.getAllEmotions();
    },

    addActivity(){
      this.createActivity(this.newActivity)
        .then(()=>{
          this.findActivities("")
            .then(()=>{
              this.newActivity={title: "",level: "",category: "",questions: [{img: "",correctAnswer: "",options: [],points: 0,categoryImg:""},],coverIMG: "",description: "",}
              this.$bvModal.hide("modalManage")
              this.message='A nova atividade foi registada com sucesso.'
              this.$bvToast.show('my-toast');
          })
        })
         .catch((err)=>{
            this.warning = `${err}`;
            setTimeout(() => {
              this.warning = "";
            }, 5000);
      })
    },

    removeActivity(id){
      if(confirm('Confirma a alteração ?')){
          this.deleteActivity(id)
            .then(()=>{
              this.findActivities("");
              this.message='A atividade selecionada foi removida com sucesso.'
              this.$bvToast.show('my-toast');
            })
      }
    
    },

    showOrNotLoading(){
      setTimeout(()=>{
        this.showLoading=false
      },1500);
    }
    
  },

  computed: {
   ...mapGetters(['getUser','getUsers','getEmotions','getBadges','getActivities'])
  },

  mounted () {
    this.showOrNotLoading();
    this.findUser();
    this.findAllUsers("").then(()=>{
      if(this.$route.params.idUserAdmin){
      this.formFilterUser.name=this.getUsers.find(user=>user._id==this.$route.params.idUserAdmin).name
    }
    });
    
  },

  watch: {
    'formFilterUser.typeUser'(newValue) {
      if(this.formFilterUser.name==''){
        this.findAllUsers(`?typeUser=${newValue}`)
      }
      else{
        this.findAllUsers(`?typeUser=${newValue}&name=${this.formFilterUser.name}`)
      }
    },

    'formFilterUser.name'(newValue) {
      if(this.formFilterUser.typeUser==''){
        this.findAllUsers(`?name=${newValue}`)
      }
      else{
        this.findAllUsers(`?typeUser=${this.formFilterUser.typeUser}&name=${newValue}`)
      }
    },

    'formFilterBadge.emotion'(newValue) {
      if(this.formFilterBadge.title==''){
          this.getAllBadges(`?emotion=${newValue}`)
      }
      else{
          this.getAllBadges(`?emotion=${newValue}&title=${this.formFilterBadge.title}`)
      }
    },
    'formFilterBadge.title'(newValue) {
      if(this.formFilterBadge.emotion==''){
          this.getAllBadges(`?title=${newValue}`)
      }
      else{
          this.getAllBadges(`?emotion=${this.formFilterBadge.emotion}&title=${newValue}`)
      }
    },

    'formFilterActivity.title'() {
         if(this.formFilterActivity.level!='' && this.formFilterActivity.category!=''){
            this.findActivities(`?title=${this.formFilterActivity.title}&level=${this.formFilterActivity.level}&category=${this.formFilterActivity.category}`);
         }
         else if(this.formFilterActivity.level!=''){
            this.findActivities(`?title=${this.formFilterActivity.title}&level=${this.formFilterActivity.level}`);
         }
         else if(this.formFilterActivity.category!=''){
            this.findActivities(`?title=${this.formFilterActivity.title}&category=${this.formFilterActivity.category}`);
         }
         else{
             this.findActivities(`?title=${this.formFilterActivity.title}`);
         }
         
      },
       'formFilterActivity.level'() {
         if(this.formFilterActivity.title!='' && this.formFilterActivity.category!=''){
            this.findActivities(`?title=${this.formFilterActivity.title}&level=${this.formFilterActivity.level}&category=${this.formFilterActivity.category}`);
         }
         else if(this.formFilterActivity.title!=''){
            this.findActivities(`?title=${this.formFilterActivity.title}&level=${this.formFilterActivity.level}`);
         }
         else if(this.formFilterActivity.category!=''){
            this.findActivities(`?level=${this.formFilterActivity.level}&category=${this.formFilterActivity.category}`);
         }
         else{
            this.findActivities(`?level=${this.formFilterActivity.level}`);
         }
         
      },
       'formFilterActivity.category'() {
         if(this.formFilterActivity.level!='' && this.formFilterActivity.title!=''){
            this.findActivities(`?title=${this.formFilterActivity.title}&level=${this.formFilterActivity.level}&category=${this.formFilterActivity.category}`);
         }
         else if(this.formFilterActivity.level!=''){
            this.findActivities(`?category=${this.formFilterActivity.category}&level=${this.formFilterActivity.level}`);
         }
         else if(this.formFilterActivity.title!=''){
            this.findActivities(`?title=${this.formFilterActivity.title}&category=${this.formFilterActivity.level}`);
         }
         else{
            this.findActivities(`?category=${this.formFilterActivity.category}`);
         }
         
      },

      'newActivity.category'(newValue){
        if(newValue=='Reconhecimento'){
          for (let question of this.newActivity.questions) {
            if(question.correctAnswer!='' && !this.emotionsRegonize.find(emotion=>emotion==question.correctAnswer)){
              question.correctAnswer=''
            }
          }
        }
      },

      
  }
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

table {
  border-collapse: collapse;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  overflow: hidden;
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
