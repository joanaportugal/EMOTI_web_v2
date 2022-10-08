<template>
  <div class="p-0">
    <div
      class="loading d-flex flex-column align-items-center justify-content-center"
      :style="{ position: 'fixed', zIndex: '2' }"
      v-if="showLoading == true"
    >
      <b-spinner
        style="width: 8rem; height: 8rem; color: white"
        label="Spinning"
      ></b-spinner>
      <h3 class="mt-4" style="color: white">
        A carregar <span class="info">...</span>
      </h3>
    </div>
    <div class="d-flex">
      <aside>
        <SideBar
          activeTab="Perfil"
          v-if="this.getUser != null"
          :user="this.getUser"
        />
      </aside>
      <main v-if="this.getUser != null">
        <AppSearch />
        <b-container class="bv-example-row" :style="{ minHeight: '68vh' }">
          <b-row class="mx-4">
            <h2 :style="{ fontFamily: 'EAmbit SemiBold' }" class="p-0 col-12">
              Dados Pessoais
            </h2>

            <div class="py-4 d-flex flex-row flex-wrap col-9 profileCard">
              <div
                class="col-4 d-flex flex-row justify-content-center align-items-center"
              >
                <img
                  :src="getUser.imgProfile"
                  :style="{ width: '220px', height: '220px' }"
                  class="rounded-circle"
                  v-if="getUser.imgProfile != ''"
                />
                <b-avatar
                  :text="
                    getUser.name.split(' ')[0].charAt(0) +
                    getUser.name.split(' ')[1].charAt(0)
                  "
                  :style="{
                    width: '220px',
                    height: '220px',
                    fontSize: '90px',
                    fontFamily: 'EAmbit SemiBold',
                    backgroundColor: '#bfbfbf',
                  }"
                  class="text-center"
                  v-else
                >
                </b-avatar>
                <b-button
                  :style="{
                    position: 'absolute',
                    zIndex: '1',
                    right: '6%',
                    bottom: '40px',
                  }"
                  pill
                  size="sm"
                  v-b-modal.modal-profile
                  class="d-flex flex-row justify-content-center align-items-center p-2"
                  @click="whatModalDo = 'changePicture'"
                  id="orange"
                >
                  <span
                    class="material-icons-round"
                    :style="{ display: 'flex', justifyContent: 'center' }"
                    >add_photo_alternate</span
                  >
                </b-button>
              </div>

              <div class="col-8 px-3">
                <b-form>
                  <b-form-group
                    label="Nome:"
                    label-for="profileName"
                    label-cols-sm="4"
                    label-align-sm="left"
                  >
                    <b-form-input
                      id="profileName"
                      :value="getUser.name"
                      disabled
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group
                    label="Username:"
                    label-for="profileUsername"
                    label-cols-sm="4"
                    label-align-sm="left"
                  >
                    <b-form-input
                      id="profileUsername"
                      :value="getUser.username"
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
                      :value="getUser.email"
                      disabled
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group
                    label="Tipo de Utilizador:"
                    label-for="profileType"
                    label-cols-sm="4"
                    label-align-sm="left"
                  >
                    <b-form-input
                      id="profileType"
                      :value="getUser.typeUser"
                      disabled
                    ></b-form-input>
                  </b-form-group>
                </b-form>
              </div>
              <div class="col-12 d-flex flex-row justify-content-end">
                <b-button
                  id="orange"
                  v-b-modal.modal-profile
                  @click="whatModalDo = 'changekey'"
                  >Alterar Passsword</b-button
                >
              </div>
            </div>

            <div
              class="col-12 p-0 mt-5 mb-5"
              v-if="getUser.typeUser == 'Tutor'"
            >
              <h2 :style="{ fontFamily: 'EAmbit SemiBold' }" class="p-0 col-12">
                Crianças
              </h2>
              <div
                class="d-flex col-12 p-0 profileCard"
                :style="{ height: '510px' }"
              >
                <div
                  class="p-0 col-4"
                  :style="{ borderRight: '2px solid #e87461' }"
                >
                  <div class="border-bottom pt-3 px-2">
                    <div class="d-flex justify-content-between">
                      <h3
                        :style="{ fontFamily: 'EAmbit SemiBold' }"
                        class="m-0"
                      >
                        Lista
                      </h3>
                      <b-link
                        :style="{ color: '#2b4141' }"
                        v-b-modal.modal-profile
                        @click="whatModalDo = 'addChild'"
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
                        v-model="searchKid"
                      ></b-form-input>
                    </b-form>
                  </div>
                  <div
                    class="p-2"
                    :style="{ height: '397.5px', overflowY: 'scroll' }"
                  >
                    <h5 :style="{ fontFamily: 'EAmbit SemiBold' }">
                      Resultados ({{ getChilds.length }})
                    </h5>
                    <article>
                      <div
                        class="d-flex justify-content-between align-items-center pb-1 mt-2"
                        :style="{ borderBottom: '1px solid #707070' }"
                        v-for="(child, index) in getChilds"
                        :key="index"
                      >
                        <button
                          class="btn d-flex align-items-center col-10 p-0"
                          @click="selectChild(child)"
                        >
                          <b-avatar
                            variant="light"
                            :text="child.initials"
                            size="2.5rem"
                          ></b-avatar>
                          <span
                            class="m-0 mx-2"
                            :style="{ fontFamily: 'EAmbit SemiBold' }"
                            :class="{
                              activeChild: childSelected.name === child.name,
                            }"
                          >
                            {{ child.name }}
                          </span>
                        </button>
                        <button class="btn" @click="removeChild(child._id)">
                          <span
                            class="material-icons-round"
                            :style="{ color: '#e87461' }"
                            >delete_forever</span
                          >
                        </button>
                      </div>
                    </article>
                  </div>
                </div>
                <div class="col-8 py-3" :style="{ overflowY: 'scroll' }">
                  <div class="d-flex justify-content-between">
                    <h3
                      :style="{ fontFamily: 'EAmbit SemiBold' }"
                      class="p-0 m-0"
                    >
                      Detalhes
                    </h3>
                    <button
                      class="btn"
                      id="orange"
                      :disabled="childSelected == ''"
                      @click="getAllRequests()"
                      v-b-modal.modal-profile
                    >
                      Pedidos de Inscrição
                    </button>
                  </div>
                  <div class="p-0 m-0">
                    <div class="mb-4" v-if="childSelected != ''">
                      <h5 class="d-flex align-items-center my-4">
                        <span
                          class="material-icons-round"
                          :style="{ color: '#e87461' }"
                          >info</span
                        >
                        <span
                          class="mx-2"
                          :style="{ fontFamily: 'EAmbit SemiBold' }"
                        >
                          Informações Gerais
                        </span>
                      </h5>

                      <div class="d-flex align-items-center mb-5">
                        <div
                          class="col-4 d-flex flex-row justify-content-end align-items-center"
                        >
                          <img
                            :src="childSelected.imgProfile"
                            :style="{ width: '200px', height: '200px' }"
                            class="rounded-circle"
                            v-if="childSelected.imgProfile != ''"
                          />
                          <b-avatar
                            :text="
                              childSelected.name.split(' ')[0].charAt(0) +
                              childSelected.name.split(' ')[1].charAt(0)
                            "
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
                        <b-form class="col-8 p-0">
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
                            label="Username:"
                            label-for="profileUsername"
                            label-cols-sm="4"
                            label-align-sm="left"
                          >
                            <b-form-input
                              id="profileUsername"
                              :value="childSelected.username"
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
                        </b-form>
                      </div>
                    </div>
                    <div class="mb-5" v-if="childSelected != ''">
                      <h5 class="d-flex align-items-center my-4">
                        <span
                          class="material-icons-round"
                          :style="{ color: '#e87461' }"
                          >school</span
                        >
                        <span
                          class="mx-2"
                          :style="{ fontFamily: 'EAmbit SemiBold' }"
                        >
                          Turmas
                        </span>
                      </h5>

                      <table class="col-12">
                        <thead>
                          <tr
                            :style="{ background: '#e87461', color: '#fbfbf3' }"
                          >
                            <th class="px-4">Turma</th>
                            <th>Professor</th>
                            <th>Ações</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr
                            :style="{
                              'border-bottom':
                                index == getChildClasses.length - 1
                                  ? '5px solid #e87461'
                                  : '1px solid #707070',
                              color: '#2B4141',
                            }"
                            v-for="(team, index) in getChildClasses"
                            :key="index"
                          >
                            <td class="px-4 py-3">{{ team.name }}</td>
                            <td>{{ team.teacher }}</td>
                            <td>
                              <button
                                class="btn btn-danger d-flex flex-row align-items-center"
                                id="red"
                                size="sm"
                                @click="
                                  removeKidFromClass([
                                    team._id,
                                    childSelected._id,
                                    { teacherId: team.teacherId },
                                  ])
                                "
                              >
                                Anular
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div
                      class="mb-4"
                      :hidden="childSelected == '' || historyKid.length < 2"
                    >
                      <h5 class="d-flex align-items-center my-4">
                        <span
                          class="material-icons-round"
                          :style="{ color: '#e87461' }"
                          >equalizer</span
                        >
                        <span
                          class="mx-2"
                          :style="{ fontFamily: 'EAmbit SemiBold' }"
                        >
                          Estatísticas
                        </span>
                      </h5>
                      <b-tabs
                        content-class="mt-3"
                        active-nav-item-class="changeColorTab"
                        fill
                      >
                        <b-tab>
                          <template #title>
                            <h6
                              class="p-0 d-flex flex-row align-items-center justify-content-center"
                              :style="{
                                textDecoration: 'none',
                                fontFamily: 'EAmbit SemiBold',
                                color: '#2B4141',
                                fontSize: '17px',
                              }"
                            >
                              <span
                                class="material-icons-round"
                                :style="{
                                  paddingRight: '5px',
                                  color: '#e87461',
                                }"
                                >bar_chart</span
                              >
                              Resultado Geral
                            </h6>
                          </template>
                          <b-link
                            :style="{
                              color: '#e87461',
                              textDecoration: 'none',
                            }"
                            class="col-12 d-flex flex-row align-items-center justify-content-end mb-3"
                            v-if="historyKid.length > 4"
                            @click="changeData"
                            ><span class="material-icons-round">autorenew</span>
                            Alternar</b-link
                          >

                          <apexchart-chart
                            ref="chartReactive"
                            type="bar"
                            height="350"
                            :options="chartOptions"
                            :series="series"
                            class="apex"
                          ></apexchart-chart>
                        </b-tab>
                        <b-tab>
                          <template #title>
                            <h6
                              class="p-0 d-flex flex-row align-items-center justify-content-center"
                              :style="{
                                textDecoration: 'none',
                                fontFamily: 'EAmbit SemiBold',
                                color: '#2B4141',
                                fontSize: '17px',
                              }"
                            >
                              <span
                                class="material-icons-round"
                                :style="{
                                  paddingRight: '5px',
                                  color: '#e87461',
                                }"
                                >pie_chart</span
                              >Emoções Acertadas
                            </h6>
                          </template>
                          <apexchart-chart
                            type="donut"
                            height="400"
                            :options="chartOptionsPie"
                            :series="seriesPie"
                            class="apex"
                          ></apexchart-chart>
                        </b-tab>
                        <b-tab>
                          <template #title>
                            <h6
                              class="p-0 d-flex flex-row align-items-center justify-content-center"
                              :style="{
                                textDecoration: 'none',
                                fontFamily: 'EAmbit SemiBold',
                                color: '#2B4141',
                                fontSize: '17px',
                              }"
                            >
                              <span
                                class="material-icons-round"
                                :style="{
                                  paddingRight: '5px',
                                  color: '#e87461',
                                }"
                                >wifi_tethering</span
                              >Categoria de Imagens
                            </h6>
                          </template>
                          <apexchart-chart
                            type="radialBar"
                            height="400"
                            :options="chartOptionsRadial"
                            :series="seriesRadial"
                            class="apex"
                          ></apexchart-chart>
                        </b-tab>
                      </b-tabs>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="p-0 col-12 mb-3" v-if="getUser.typeUser == 'Criança'">
              <h2
                :style="{ fontFamily: 'EAmbit SemiBold' }"
                class="mt-5 col-12 p-0"
              >
                Conquistas
              </h2>
              <div class="py-4 d-flex col-12 profileCard">
                <b-card
                  class="p-0"
                  :style="{
                    width: '310px',
                    background: `${badge.mainColor}`,
                    borderRadius: '10px',
                    border: 'none',
                  }"
                  v-for="(badge, index) in getBadges"
                  :key="index"
                >
                  <div class="col-12 d-flex flex-row">
                    <div class="col-4 py-3 px-0">
                      <img
                        :src="badge.badgeIMG"
                        class="p-2"
                        :style="{
                          height: '76px',
                          border: `5px solid ${badge.footerColor}`,
                          borderRadius: '50%',
                        }"
                      />
                    </div>
                    <div class="col-8 py-3 px-0">
                      <p
                        :style="{
                          fontFamily: 'EAmbit SemiBold',
                          color: 'white',
                          fontSize: '28px',
                        }"
                        class="m-0"
                      >
                        {{ badge.name }}
                      </p>
                      <b-progress
                        :max="badge.pointsNeeded"
                        :style="{ height: '20px' }"
                      >
                        <b-progress-bar
                          :value="`${setValue(badge.emotion)}`"
                          :label="
                            `${setValue(badge.emotion)}/` + badge.pointsNeeded
                          "
                          :variant="
                            setValue(badge.emotion) == 0
                              ? 'secondary'
                              : 'warning'
                          "
                          class="py-2"
                        ></b-progress-bar>
                      </b-progress>
                    </div>
                  </div>
                  <b-card-footer
                    :style="{
                      background: `${badge.footerColor}`,
                      borderBottomLeftRadius: '10px',
                      borderBottomRightRadius: '10px',
                      border: 'none',
                    }"
                  >
                  </b-card-footer>
                </b-card>
              </div>
            </div>
          </b-row>
        </b-container>
        <AppFooter />
      </main>
      <b-modal
        id="modal-profile"
        centered
        hide-footer
        header-border-variant="0"
        header-class="color"
        body-class="color"
      >
        <!--Formulário para alterar password-->
        <div
          :style="{ fontFamily: 'EAmbit SemiBold' }"
          class="text-center"
          v-if="whatModalDo == 'changekey'"
        >
          <h4
            :style="{ fontFamily: 'EAmbit SemiBold', color: '#2B4141' }"
            class="mb-4"
          >
            Alterar Password
          </h4>

          <b-form
            @submit.prevent="changePassword()"
            class="px-2 pb-3"
            :style="{ border: '2px solid #e87461', borderRadius: '5px' }"
          >
            <b-form-group
              label-cols="4"
              label-cols-lg="4"
              label-size="sm"
              label-align-sm="left"
              label="Password Atual:"
              label-for="input-sm"
              class="mt-4 mb-4"
            >
              <b-form-input
                type="password"
                id="input-sm"
                v-model="passForm.oldPass"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group
              label-cols="4"
              label-cols-lg="4"
              label-size="sm"
              label-align-sm="left"
              label="Nova Password:"
              label-for="input-sm"
              class="mt-4 mb-4"
            >
              <b-form-input
                type="password"
                id="input-sm"
                v-model="passForm.newPass"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group
              label-cols="4"
              label-cols-lg="4"
              label-size="sm"
              label-align-sm="left"
              label="Conf. Nova Password:"
              label-for="input-sm"
              class="mt-4 mb-4"
            >
              <b-form-input
                type="password"
                id="input-sm"
                v-model="passForm.confPass"
                required
              ></b-form-input>
            </b-form-group>
            <div class="d-flex flex-row justify-content-end">
              <b-button type="submit" class="text-end" id="orange"
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

        <!--Associar Criança-->
        <div
          :style="{ fontFamily: 'EAmbit SemiBold' }"
          class="text-center"
          v-if="whatModalDo == 'addChild'"
        >
          <h4
            :style="{ fontFamily: 'EAmbit SemiBold', color: '#2B4141' }"
            class="mb-4"
          >
            Associar Criança
          </h4>

          <b-form
            @submit.prevent="addChild()"
            class="px-2 pb-3"
            :style="{ border: '2px solid #e87461', borderRadius: '5px' }"
          >
            <b-form-group
              label-cols="4"
              label-cols-lg="4"
              label-size="sm"
              label-align-sm="left"
              label="Username (Criança):"
              label-for="input-sm"
              class="mt-4 mb-4"
            >
              <b-form-input
                id="input-sm"
                v-model="formAdd.username"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group
              label-cols="4"
              label-cols-lg="4"
              label-size="sm"
              label-align-sm="left"
              label="Password (Criança):"
              label-for="input-sm"
              class="mt-4 mb-4"
            >
              <b-form-input
                type="password"
                id="input-sm"
                v-model="formAdd.password"
                required
              ></b-form-input>
            </b-form-group>

            <div class="d-flex flex-row justify-content-end">
              <b-button type="submit" class="text-end" id="orange"
                >Associar</b-button
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

        <!--Pedidos para associar-->
        <div
          :style="{ fontFamily: 'EAmbit SemiBold' }"
          class="text-center d-flex flex-column p-0"
          v-if="whatModalDo == 'intoclass'"
        >
          <h4
            :style="{ fontFamily: 'EAmbit SemiBold', color: '#2B4141' }"
            class="mb-4"
          >
            Pedidos para associar
          </h4>
          <div
            class="p-2 d-flex flex-row justify-content-center"
            :style="{ borderRadius: '5px', border: '2px solid #e87461' }"
          >
            <table
              class="col-12 mt-3 ml-4 mr-4 mb-3 text-center px-2 pb-3"
              v-if="getRequests.length != 0"
            >
              <tr :style="{ 'background-color': '#e87461', color: '#fbfbf3' }">
                <th class="p-1">Turma</th>
                <th>Professor</th>
                <th>Ações</th>
              </tr>
              <tr
                :style="{
                  'border-bottom':
                    index == getRequests.length - 1
                      ? '5px solid #e87461'
                      : '1px solid #707070',
                  color: '#2B4141',
                }"
                v-for="(request, index) in getRequests"
                :key="index"
              >
                <td class="p-4">{{ request.name }}</td>
                <td>{{ request.teacher }}</td>
                <td>
                  <b-link
                    class="mr-1"
                    :style="{ textDecoration: 'none', color: '#34B187' }"
                    @click="
                      agreeRequest({
                        teacherId: request.teacherId,
                        className: request.name,
                      })
                    "
                    ><span
                      class="material-icons-round"
                      :style="{ fontSize: '32px' }"
                      >check
                    </span>
                  </b-link>
                  <b-link
                    :style="{ textDecoration: 'none', color: '#F54C25' }"
                    @click="
                      removeRequest({
                        teacherId: request.teacherId,
                        className: request.name,
                      })
                    "
                    ><span
                      class="material-icons-round"
                      :style="{ fontSize: '32px' }"
                      >close</span
                    ></b-link
                  >
                </td>
              </tr>
            </table>
            <div class="col-12 m-2" v-else>
              <p
                class="d-flex flex-row align-items-center justify-content-center m-0"
              >
                Não existem pedidos pendentes.
              </p>
            </div>
          </div>
        </div>

        <!--Alterar imagem-->

        <div
          :style="{ fontFamily: 'EAmbit SemiBold' }"
          class="text-center"
          v-if="whatModalDo == 'changePicture'"
        >
          <h4
            :style="{ fontFamily: 'EAmbit SemiBold', color: '#2B4141' }"
            class="mb-4"
          >
            Alterar Foto
          </h4>

          <b-form
            @submit.prevent="alterImg()"
            class="px-2 pb-3"
            :style="{ border: '2px solid #e87461', borderRadius: '5px' }"
          >
            <b-form-group
              label-cols="4"
              label-cols-lg="4"
              label-size="sm"
              label-align-sm="left"
              label="Nova Imagem (URL):"
              label-for="input-sm"
              class="mt-4 mb-4"
            >
              <b-form-input
                id="input-sm"
                v-model="newImg"
                required
              ></b-form-input>
            </b-form-group>

            <div class="d-flex flex-row justify-content-end">
              <b-button type="submit" class="text-end" id="orange"
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
      <b-toast
        id="my-toast"
        append-toast
        no-close-button
        header-class="headerNotify"
        body-class="bodyNotify"
      >
        <h6 class="d-flex flex-row align-items-center p-0 m-0">
          <span class="material-icons-round mr-2 p-0">check_circle</span>
          {{ message }}
        </h6>
      </b-toast>
    </div>
  </div>
</template>

<script>
import SideBar from "@/components/SideBar.vue";
import AppSearch from "@/components/AppSearch.vue";
import AppFooter from "@/components/AppFooter.vue";

import { mapActions, mapGetters } from "vuex";

export default {
  name: "HomeView",
  components: {
    SideBar,
    AppSearch,
    AppFooter,
  },
  data() {
    return {
      showLoading: true,
      warning: "",
      whatModalDo: "",
      showChart: "Bar",
      childSelected: "",
      passForm: {
        newPass: "",
        confPass: "",
        oldPass: "",
      },
      formAdd: {
        username: "",
        password: "",
      },
      newImg: "",
      searchKid: "",
      message: "",
      pointsBadges: [],
      //BAr Chart
      series: [
        {
          name: "",
          data: [],
        },
        {
          name: "",
          data: [],
        },
      ],
      chartOptions: {
        chart: {
          type: "bar",
          height: 350,
          background: "#FDFDF3",
          fontFamily: "EAmbit SemiBold",
        },
        colors: ["#E87461", "#DCDCD7"],
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "25%",
            endingShape: "flat",
            borderRadius: 2,
          },
        },
        dataLabels: {
          enabled: false,
        },
        labels: {
          style: {
            fontFamily: "EAmbitSemiBold",
          },
        },
        stroke: {
          show: true,
          width: 2,
          colors: ["transparent"],
        },
        xaxis: {
          categories: [],
          axisBorder: {
            show: true,
            borderType: "dotted",
            color: "#BFBFBF",
            height: 1,
            width: "100%",
            offsetX: 0,
            offsetY: 0,
          },
          axisTicks: {
            show: true,
            borderType: "dotted",
            color: "#BFBFBF",
            height: 6,
            offsetX: 0,
            offsetY: 0,
          },
        },
        yaxis: {
          show: false,
        },
        fill: {
          opacity: 1,
        },
        grid: {
          yaxis: {
            lines: {
              show: false,
            },
          },
        },
      },
      historyKid: [],
      categoriesKid: [],
      emotionsKid: [],
      //Pie Chart

      seriesPie: [44, 55, 41, 17, 15],
      chartOptionsPie: {
        chart: {
          type: "donut",
          fontFamily: "EAmbit SemiBold",
          toolbar: {
            show: true,
          },
        },
        labels: ["Felicidade", "Tristeza", "Zangado", "Furioso", "Assustado"],
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
              },
              legend: {
                position: "bottom",
              },
            },
          },
        ],
        legend: {
          show: true,
          position: "bottom",
        },
        colors: [
          "#68C0A2",
          "#55ACD1",
          "#F0C6DA",
          "#F1D144",
          "#F0795E",
          "#8D8DBA",
        ],
      },

      //Radial
      seriesRadial: [44, 55, 41],
      chartOptionsRadial: {
        chart: {
          type: "radialBar",
          fontFamily: "EAmbit SemiBold",
          toolbar: {
            show: true,
          },
        },
        plotOptions: {
          radialBar: {
            track: {
              background: "#DCDCD7",
            },
          },
        },
        labels: ["Ilustração", "Realidade", "Realidade/Familiar"],
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
              },
              legend: {
                position: "bottom",
              },
            },
          },
        ],
        legend: {
          show: true,
          position: "bottom",
        },
        colors: [
          "#68C0A2",
          "#55ACD1",
          "#F0C6DA",
          "#F1D144",
          "#F0795E",
          "#8D8DBA",
        ],
      },
      startGraphKid: 0,
      endGraphKid: 0,
    };
  },

  computed: {
    ...mapGetters([
      "getUser",
      "getChilds",
      "getBadges",
      "getRequests",
      "getChildClasses",
      "getHistoryUser",
    ]),
  },

  methods: {
    ...mapActions([
      "findUser",
      "updateProfile",
      "findRelations",
      "createRelation",
      "removeRelation",
      "getAllBadges",
      "findRequests",
      "acceptRequest",
      "deleteRequest",
      "findChildClasses",
      "removeStudent",
      "createNofication",
      "findHistoryUser",
    ]),

    selectChild(child) {
      this.childSelected = child;
      this.findChildClasses(
        this.getChilds.find(
          (child) => child.username == this.childSelected.username
        )._id
      );
      this.historyKid = this.getHistoryUser.find(
        (user) => user._id == this.childSelected._id
      ).history;
      this.categoriesKid = this.getHistoryUser.find(
        (user) => user._id == this.childSelected._id
      ).categories;
      this.emotionsKid = this.getHistoryUser.find(
        (user) => user._id == this.childSelected._id
      ).emotions;
      if (this.historyKid.length >= 2) {
        if (this.historyKid.length <= 4) {
          this.endGraphKid = this.historyKid.length;
        } else {
          this.startGraphKid = this.historyKid.length - 4;
          this.endGraphKid = this.historyKid.length;
        }
        this.setGraphKid();
        this.setPieGraphKid();
        this.setRadialGraph();
      }
    },

    changePassword() {
      if (this.passForm.newPass != this.passForm.confPass) {
        this.warning = "As passwords não coincidem!";
        setTimeout(() => {
          this.warning = "";
        }, 5000);
      } else {
        this.updateProfile({
          oldPass: this.passForm.oldPass,
          newPass: this.passForm.newPass,
        })
          .then(() => {
            this.findUser();
            this.$bvModal.hide("modal-profile");
            this.message = "A password foi alterada com sucesso.";
            this.$bvToast.show("my-toast");
            this.passForm = { newPass: "", confPass: "", oldPass: "" };
          })
          .catch((err) => {
            this.warning = `${err}`;
            setTimeout(() => {
              this.warning = "";
            }, 5000);
          });
      }
    },

    alterImg() {
      this.updateProfile({ imgProfile: this.newImg })
        .then(() => {
          this.findUser();
          this.$bvModal.hide("modal-profile");
          this.message = "A imagem de perfil foi alterada com sucesso.";
          this.$bvToast.show("my-toast");
          this.newImg = "";
        })
        .catch((err) => {
          this.warning = `${err}`;
          setTimeout(() => {
            this.warning = "";
          }, 5000);
        });
    },

    addChild() {
      this.createRelation(this.formAdd)
        .then(() => {
          this.findRelations("").then(() => {
            if (this.getChilds.length != 0) {
              this.childSelected = this.getChilds.find(
                (child) => child.username == this.formAdd.username
              );
              this.findChildClasses(
                this.getChilds.find(
                  (child) => child.username == this.formAdd.username
                )._id
              );
              this.historyKid = this.getHistoryUser.find(
                (user) => user._id == this.childSelected._id
              ).history;
              this.categoriesKid = this.getHistoryUser.find(
                (user) => user._id == this.childSelected._id
              ).categories;
              this.emotionsKid = this.getHistoryUser.find(
                (user) => user._id == this.childSelected._id
              ).emotions;
              if (this.historyKid.length >= 2) {
                if (this.historyKid.length <= 4) {
                  this.endGraphKid = this.historyKid.length;
                } else {
                  this.startGraphKid = this.historyKid.length - 4;
                  this.endGraphKid = this.historyKid.length;
                }
                this.setGraphKid();
                this.setPieGraphKid();
                this.setRadialGraph();
              }
            }
            this.$bvModal.hide("modal-profile");
            this.message = "Criança associada com sucesso.";
            this.$bvToast.show("my-toast");
            this.formAdd = { username: "", password: "" };
          });
        })
        .catch((err) => {
          this.warning = `${err}`;
          setTimeout(() => {
            this.warning = "";
          }, 5000);
        });
    },

    removeChild(id) {
      if (confirm("Confirma a alteração?")) {
        this.removeRelation(id)
          .then(() => {
            this.message = "Criança desassociada com sucesso.";
            this.$bvToast.show("my-toast");
            this.findRelations("").then(() => {
              if (this.getChilds.length != 0) {
                this.childSelected = this.getChilds[0];
                this.findChildClasses(this.getChilds[0]._id);
                this.historyKid = this.getHistoryUser.find(
                  (user) => user._id == this.childSelected._id
                ).history;
                this.categoriesKid = this.getHistoryUser.find(
                  (user) => user._id == this.childSelected._id
                ).categories;
                this.emotionsKid = this.getHistoryUser.find(
                  (user) => user._id == this.childSelected._id
                ).emotions;
                if (this.historyKid.length >= 2) {
                  if (this.historyKid.length <= 4) {
                    this.endGraphKid = this.historyKid.length;
                  } else {
                    this.startGraphKid = this.historyKid.length - 4;
                    this.endGraphKid = this.historyKid.length;
                  }
                  this.setGraphKid();
                  this.setPieGraphKid();
                  this.setRadialGraph();
                }
              } else {
                this.childSelected = "";
              }
            });
          })
          .catch((err) => console.log(err));
      }
    },

    getAllRequests() {
      this.whatModalDo = "intoclass";
      this.findRequests(this.childSelected._id);
    },

    agreeRequest(data) {
      this.acceptRequest([this.childSelected._id, data]).then(() => {
        this.createNofication({
          list: [data.teacherId],
          title: "Resultado do Pedido de Aprovação",
          text: `O tutor ${this.getUser.name.toUpperCase()}, aceitou o pedido de integração da criança ${this.getChilds
            .find((kid) => kid._id == this.childSelected._id)
            .name.toUpperCase()} na Turma: ${data.className.toUpperCase()}.`,
        });
        this.findChildClasses(this.childSelected._id);
        this.findRequests(this.childSelected._id);
        this.message = "O pedido de integração foi aprovado com sucesso.";
        this.$bvToast.show("my-toast");
      });
    },

    removeRequest(data) {
      this.deleteRequest([this.childSelected._id, data]).then(() => {
        this.createNofication({
          list: [data.teacherId],
          title: "Resultado do Pedido de Aprovação",
          text: `O tutor ${this.getUser.name.toUpperCase()}, rejeitou o pedido de integração da criança ${this.getChilds
            .find((kid) => kid._id == this.childSelected._id)
            .name.toUpperCase()} na Turma: ${data.className.toUpperCase()}.`,
        });
        this.findRequests(this.childSelected._id);
        this.message = "O pedido de integração foi reprovado com sucesso.";
        this.$bvToast.show("my-toast");
      });
    },

    removeKidFromClass(data) {
      if (confirm("Confirma a alteração?")) {
        this.removeStudent(data).then(() => {
          this.createNofication({
            list: [data[2].teacherId],
            title: "Resultado do Pedido de Aprovação",
            text: `O tutor ${this.getUser.name.toUpperCase()}, retirou a criança ${this.getChilds
              .find((kid) => kid._id == data[1])
              .name.toUpperCase()} da Turma: ${this.getChildClasses
              .find((team) => team._id == data[0])
              .name.toUpperCase()}.`,
          });
          this.message = "A criança foi removida da turma com sucesso.";
          this.$bvToast.show("my-toast");
          this.findChildClasses(data[1]);
        });
      }
    },

    showOrNotLoading() {
      setTimeout(() => {
        this.showLoading = false;
      }, 1500);
    },

    setValue(payload) {
      let valueforBadge = 0;
      if (this.getHistoryUser.emotions) {
        for (const emotion of this.getHistoryUser.emotions) {
          for (const [key, value] of Object.entries(emotion)) {
            if (key == payload) {
              valueforBadge = value;
            }
          }
        }
      }
      return valueforBadge;
    },

    setGraphKid() {
      let array = [];
      let rightArray = [];
      let wrongArray = [];
      for (let history of this.historyKid.slice(
        this.startGraphKid,
        this.endGraphKid
      )) {
        array.push(history.date);
        let right = 0;
        let wrong = 0;

        right += +history.questionsRight;
        wrong += +history.questionsWrong;

        rightArray.push(right);
        wrongArray.push(wrong);
      }

      this.$refs.chartReactive.updateSeries(
        [
          {
            name: "Ganhou",
            data: rightArray,
          },
          {
            name: "Perdeu",
            data: wrongArray,
          },
        ],
        true
      );

      this.chartOptions = {
        ...this.chartOptions,
        ...{
          xaxis: {
            categories: array,
          },
        },
      };
    },

    setPieGraphKid() {
      let array = [];
      let otherArray = [];
      for (const emotion of this.emotionsKid) {
        array.push(+Object.values(emotion)[0]);
        otherArray.push(Object.keys(emotion)[0]);
      }

      this.seriesPie = array;

      this.chartOptionsPie = {
        ...this.chartOptionsPie,
        ...{
          labels: otherArray,
        },
      };
    },

    setRadialGraph() {
      let array = [];
      let otherArray = [];
      for (const category of this.categoriesKid) {
        array.push(+Object.values(category)[0]);
        otherArray.push(Object.keys(category)[0]);
      }

      this.seriesRadial = array;
      this.chartOptionsRadial = {
        ...this.chartOptionsRadial,
        ...{
          labels: otherArray,
        },
      };
    },

    changeData() {
      if (Math.sign(this.startGraphKid - 1) == -1) {
        this.startGraphKid = this.historyKid.length - 4;
        this.endGraphKid = this.historyKid.length;
      } else {
        this.startGraphKid--;
        this.endGraphKid--;
      }
      this.setGraphKid();
    },
  },

  created() {
    this.showOrNotLoading();
    this.findUser().then(() => {
      if (this.getUser.typeUser == "Tutor") {
        this.findRelations("").then(() => {
          if (this.getChilds.length != 0) {
            if (this.$route.params.idUserTutor) {
              this.childSelected = this.getChilds.find(
                (child) => child._id == this.$route.params.idUserTutor
              );
              this.findChildClasses(
                this.getChilds.find(
                  (child) => child._id == this.$route.params.idUserTutor
                )._id
              );
            } else {
              this.childSelected = this.getChilds[0];
              this.findChildClasses(this.getChilds[0]._id);
            }
            this.findHistoryUser().then(() => {
              this.historyKid = this.getHistoryUser.find(
                (user) => user._id == this.childSelected._id
              ).history;
              this.categoriesKid = this.getHistoryUser.find(
                (user) => user._id == this.childSelected._id
              ).categories;
              this.emotionsKid = this.getHistoryUser.find(
                (user) => user._id == this.childSelected._id
              ).emotions;
              if (this.historyKid.length >= 2) {
                if (this.historyKid.length <= 4) {
                  this.endGraphKid = this.historyKid.length;
                } else {
                  this.startGraphKid = this.historyKid.length - 4;
                  this.endGraphKid = this.historyKid.length;
                }
                this.setGraphKid();
                this.setPieGraphKid();
                this.setRadialGraph();
              }
            });
          }
        });
      } else if (this.getUser.typeUser == "Criança") {
        this.getAllBadges("");
        this.findHistoryUser();
      }
    });
  },

  watch: {
    searchKid(newValue) {
      this.findRelations(`?name=${newValue}`).then(() => {
        this.childSelected = "";
      });
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

.profileCard {
  border: 2px solid #e87461;
  border-radius: 5px;
}

.card-body {
  padding: 0;
}

form label {
  font-size: 28px;
}

.activeChild {
  color: #e87461;
}

table {
  border-collapse: collapse;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  overflow: hidden;
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

#red {
  border: 1px solid #e95353;
}
#red:hover {
  background-color: #fdfdf3;
  color: #e95353;
  border: 1px solid #e95353;
}

#green {
  background-color: #4da1a9;
  color: #fdfdf3;
  border: 1px solid #4da1a9;
}
#green:hover {
  background-color: #fdfdf3;
  color: #4da1a9;
}

.btn:focus {
  outline: 0px !important;
  -webkit-appearance: none;
  box-shadow: none !important;
}

.bodyNotify {
  background-color: #34b187d1;
  border: none;
  border-radius: 5px;
  color: white;
  font-family: "EAmbit SemiBold";
}
.toast {
  border: none;
}

.changeColorTab {
  background-color: #d9d9d558 !important;
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

.info {
  color: white;
  animation-duration: 6s;
  animation-name: textChange;
  animation-direction: alternate;
  animation-iteration-count: infinite;
}

@keyframes textChange {
  0% {
    color: white;
  }
  20% {
    color: transparent;
  }
  40% {
    color: white;
  }
  60% {
    color: transparent;
  }
  80% {
    color: white;
  }
  100% {
    color: transparent;
  }
}
</style>
