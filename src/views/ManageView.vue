<template>
  <div class="d-flex">
    <aside>
      <SideBar activeTab="Gerir" />
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
            @click="optSelected = 'Atividades'"
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
            @click="optSelected = 'Badges'"
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
              <tr :style="{ 'border-bottom': '2px solid #707070' }">
                <td class="p-4">username</td>
                <td>nome</td>
                <td>tipo</td>
                <td>
                  <b-button
                    style="border: none"
                    variant="secondary"
                    class="ml-2 mr-1"
                    v-b-modal.modalManage
                    @click="giveInfo('user')"
                    ><b-icon icon="info-circle-fill"></b-icon
                  ></b-button>
                  <b-button
                    style="border: none"
                    variant="primary"
                    class="ml-2 mr-1"
                    ><b-icon icon="lock-fill"></b-icon
                  ></b-button>
                  <b-button
                    style="border: none"
                    variant="primary"
                    class="ml-2 mr-1"
                    ><b-icon icon="unlock-fill"></b-icon
                  ></b-button>
                  <b-button
                    style="border: none"
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
                <b-form-select-option value="Dificil"
                  >Dificil</b-form-select-option
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
                @click="whatModalDo = 'addActivity'"
                >Adicionar</b-button
              >
            </div>
          </div>

          <div class="mt-4" style="min-height: 50vh">
            <table class="col-12 text-center">
              <tr :style="{ 'background-color': '#e87461', color: '#fbfbf3' }">
                <th class="p-1">Título</th>
                <th>Grau de Dificuldade</th>
                <th>Imagem (Capa do Quiz)</th>
                <th>Categoria</th>
                <th>Ações</th>
              </tr>
              <tr :style="{ 'border-bottom': '2px solid #707070' }">
                <td class="p-4">nome</td>
                <td>fácil</td>
                <td>imagem</td>
                <td>quiz</td>
                <td>
                  <b-button
                    style="border: none"
                    variant="secondary"
                    class="ml-2 mr-1"
                    v-b-modal.modalManage
                    @click="updateActivity('activity')"
                    ><b-icon icon="pencil-fill"></b-icon
                  ></b-button>
                  <b-button
                    style="border: none"
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
                @click="whatModalDo = 'seeEmotions'"
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

          <div class="mt-4" style="min-height: 50vh">
            <table class="col-12 text-center">
              <tr :style="{ 'background-color': '#e87461', color: '#fbfbf3' }">
                <th class="p-1">Descrição</th>
                <th>Emoção</th>
                <th>Pontos Necessários</th>
                <th>Ações</th>
              </tr>
              <tr :style="{ 'border-bottom': '2px solid #707070' }">
                <td class="p-4">nome</td>
                <td>feliz</td>
                <td>20</td>
                <td>
                  <b-button
                    style="border: none"
                    variant="danger"
                    class="ml-2 mr-1"
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
        style="font-family: EAmbit Regular; color: #2b4141"
        class="text-center"
      >
        <h3 class="mt-2 mb-4" :style="{ fontFamily: 'EAmbit SemiBold' }">
          Adicionar Administrador
        </h3>
        <b-form
          :style="{ border: '2px solid #e87461', borderRadius: '5px' }"
          class="px-3 pt-4"
        >
          <b-input-group class="mb-4">
            <b-form-input
              placeholder="Username"
              style="background-color: white"
              v-model="newUser.username"
              required
            ></b-form-input>
          </b-input-group>

          <b-input-group class="mb-4">
            <b-form-input
              type="password"
              placeholder="Password"
              style="background-color: white"
              v-model="newUser.password"
              required
            ></b-form-input>
          </b-input-group>

          <b-input-group class="mb-4">
            <b-form-input
              type="password"
              placeholder="Confirmar Password"
              style="background-color: white"
              v-model="conf_password"
              required
            ></b-form-input>
          </b-input-group>

          <b-input-group class="mb-4">
            <b-form-input
              placeholder="Nome"
              style="background-color: white"
              v-model="newUser.name"
              required
            ></b-form-input>
          </b-input-group>

          <b-input-group class="mb-4">
            <b-form-input
              type="email"
              placeholder="Email"
              style="background-color: white"
              v-model="newUser.email"
              required
            ></b-form-input>
          </b-input-group>

          <b-input-group class="mb-3">
            <b-form-select
              style="background-color: white"
              v-model="newUser.typeUser"
              required
            >
              <b-form-select-option value="Administrador"
                >Administrador</b-form-select-option
              >
            </b-form-select>
          </b-input-group>
          <div class="d-flex flex-row justify-content-end">
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
        style="font-family: EAmbit Regular; color: #2b4141"
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
              style="background-color: white"
              required
            ></b-form-input>
          </b-input-group>

          <b-input-group class="mb-4">
            <b-form-input
              type="password"
              placeholder="Password"
              style="background-color: white"
              required
            ></b-form-input>
          </b-input-group>

          <b-input-group class="mb-4">
            <b-form-input
              type="password"
              placeholder="Confirmar Password"
              style="background-color: white"
              required
            ></b-form-input>
          </b-input-group>

          <b-input-group class="mb-4">
            <b-form-input
              placeholder="Nome"
              style="background-color: white"
              required
            ></b-form-input>
          </b-input-group>

          <b-input-group class="mb-4">
            <b-form-input
              type="email"
              placeholder="Email"
              style="background-color: white"
              required
            ></b-form-input>
          </b-input-group>

          <b-input-group class="mb-3">
            <b-form-select required style="background-color: white">
              <b-form-select-option :value="null" disabled
                >Quem sou eu ?</b-form-select-option
              >
              <b-form-select-option
                v-for="(option, index) in options"
                :key="index"
                :value="option"
                >{{ option }}</b-form-select-option
              >
            </b-form-select>
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
        >
          <b-form-group
            label="Título:"
            label-for="activityTitle"
            label-cols-sm="2"
            label-align-sm="left"
          >
            <b-form-input
              id="activityTitle"
              value="Atividade"
              disabled
            ></b-form-input>
          </b-form-group>

          <b-form-group
            label="Dificuldade:"
            label-for="activityDifficulty"
            label-cols-sm="2"
            label-align-sm="left"
          >
            <b-form-input
              id="activityDifficulty"
              value="Atividade"
              disabled
            ></b-form-input>
          </b-form-group>

          <b-form-group
            label="Perguntas:"
            label-for="activityQuestions"
            label-cols-sm="2"
            label-align-sm="left"
          >
            <div class="d-flex flex-row flex-wrap">
              <b-form-input
                id="activityQuestions"
                class="col-5"
                value="Imagem(URL)"
                disabled
              ></b-form-input>
              <b-form-input
                id="activityQuestions"
                class="col-5 mx-2"
                value="Categoria"
                disabled
              ></b-form-input>
              <b-form-input
                id="activityQuestions"
                class="col-5 mt-2"
                value="Emoção"
                disabled
              ></b-form-input>
              <b-form-input
                id="activityQuestions"
                class="col-5 mt-2 mx-2"
                value="Pontos"
                disabled
              ></b-form-input>

              <b-link
                :style="{ color: '#2b4141' }"
                class="d-flex flex-row align-items-center mt-2"
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
            <b-form-input id="activityIMG" value="Capa" disabled></b-form-input>
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
              disabled
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
        >
          <b-form-group
            label="Título:"
            label-for="activityTitle"
            label-cols-sm="2"
            label-align-sm="left"
          >
            <b-form-input
              id="activityTitle"
              value="Atividade"
              disabled
            ></b-form-input>
          </b-form-group>

          <b-form-group
            label="Dificuldade:"
            label-for="activityDifficulty"
            label-cols-sm="2"
            label-align-sm="left"
          >
            <b-form-input
              id="activityDifficulty"
              value="Atividade"
              disabled
            ></b-form-input>
          </b-form-group>

          <b-form-group
            label="Perguntas:"
            label-for="activityQuestions"
            label-cols-sm="2"
            label-align-sm="left"
          >
            <div class="d-flex flex-row flex-wrap">
              <b-form-input
                id="activityQuestions"
                class="col-5"
                value="Imagem(URL)"
                disabled
              ></b-form-input>
              <b-form-input
                id="activityQuestions"
                class="col-5 mx-2"
                value="Categoria"
                disabled
              ></b-form-input>
              <b-form-input
                id="activityQuestions"
                class="col-5 mt-2"
                value="Emoção"
                disabled
              ></b-form-input>
              <b-form-input
                id="activityQuestions"
                class="col-5 mt-2 mx-2"
                value="Pontos"
                disabled
              ></b-form-input>

              <b-link
                :style="{ color: '#2b4141' }"
                class="d-flex flex-row align-items-center mt-2"
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
            <b-form-input id="activityIMG" value="Capa" disabled></b-form-input>
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
              disabled
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
          <b-form class="col-12 p-0">
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
          </b-form>

          <div class="col-12 p-0 d-flex flex-row justify-content-end">
            <b-button
              :style="{
                color: '#fdfdf3',
                'background-color': '#e87461',
                border: 'none',
              }"
              >Adicionar</b-button
            >
          </div>

          <hr />

          <div style="min-height: 40vh">
            <table class="col-12 text-center">
              <tr :style="{ 'background-color': '#e87461', color: '#fbfbf3' }">
                <th class="p-1">Nome</th>
                <th>Ação</th>
              </tr>
              <tr :style="{ 'border-bottom': '2px solid #707070' }">
                <td class="p-4">Nome</td>
                <td>
                  <b-button
                    style="border: none"
                    variant="danger"
                    class="ml-2 mr-1"
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
              v-model="newBadge.badgeName"
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
            label="Emoção:"
            label-for="input-sm"
            class="mt-4 mb-4"
          >
            <b-form-select
              id="input-sm"
              v-model="newBadge.badgeEmotion"
              required
            >
              <b-form-select-option value="">--Emoção--</b-form-select-option>
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
  </div>
</template>

<script>
import SideBar from "@/components/SideBar.vue";
import AppSearch from "@/components/AppSearch.vue";
import AppFooter from "@/components/AppFooter.vue";

export default {
  name: "HomeView",
  components: {
    SideBar,
    AppSearch,
    AppFooter,
  },
  data() {
    return {
      optSelected: "Utilizadores",
      typeUsers: ["Criança", "Tutor", "Administrador"],
      whatModalDo: "",
      selectedUser: "",
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
        email: "",
        typeUser: "Administrador",
      },
      newBadge: {
        badgeName: "",
        pointsNeeded: "",
        badgeIMG: "",
        badgeEmotion: "",
      },
      newActivity: {
        title: "",
        level: "",
        category: "",
        questions: [
          {
            img: "",
            correctAnswer: "",
            answers: [],
            points: 0,
          },
        ],
        caseIMG: "",
        description: "",
      },
      editActivity: {
        title: "",
        level: "",
        questions: [{ img: "", correctAnswer: "", answers: [], points: 0 }],
        caseIMG: "",
        description: "",
        category: "",
        author: "admin",
      },
      newEmotion: "",
    };
  },
  methods: {
    calculateModalSize(type) {
      return type === "addActivity" || type === "editActivity" ? "lg" : "";
    },
    giveInfo(user) {
      this.whatModalDo = "seeUser";
      this.selectedUser = user;
    },
    updateActivity(activity) {
      this.whatModalDo = "editActivity";
      this.selectedActivity = activity;
    },
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

table {
  border-collapse: collapse;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  overflow: hidden;
}
</style>
