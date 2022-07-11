<template>
  <div class="d-flex">
    <aside>
      <SideBar />
    </aside>
    <main>
      <AppSearch />
      <b-container class="col-11 pt-4 px-4">
        <h2 style="font-family: 'EAmbit SemiBold'">Dados Pessoais</h2>

        <div class="py-4 d-flex col-12 profileCard">
          <div
            class="col-4 d-flex flex-row justify-content-center align-items-center"
          >
            <img
              src="../assets/Imagem 1.png"
              :style="{ width: '220px', height: '220px' }"
              class="rounded-circle"
            />
            <b-button
              style="
                position: absolute;
                z-index: 1;
                right: 50px;
                bottom: 40px;
                background-color: #e87461;
                border: none;
              "
              pill
              size="sm"
              v-b-modal.modal-profile
              @click="whatModalDo = 'changePicture'"
            >
              <span
                class="material-icons-round"
                style="display: flex; justify-content: center"
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
                  value="Joana Portugal"
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
                  value="user123"
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
                  value="user123@gmail.com"
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
                  value="Criança"
                  disabled
                ></b-form-input>
              </b-form-group>
            </b-form>
            <div class="d-flex flex-row justify-content-end">
              <b-button
                :style="{
                  color: '#fdfdf3',
                  'background-color': '#e87461',
                  border: 'none',
                }"
                v-b-modal.modal-profile
                @click="whatModalDo = 'changekey'"
                >Alterar Passsword</b-button
              >
            </div>
          </div>
        </div>
      </b-container>

      <b-container class="col-11 pt-4 px-4">
        <h2 style="font-family: 'EAmbit SemiBold'">Crianças</h2>
        <div class="d-flex col-12 p-0 profileCard" style="height: 410px">
          <div class="p-0 col-4" style="border-right: 2px solid #e87461">
            <div class="border-bottom pt-3 px-2">
              <div class="d-flex justify-content-between">
                <h3 style="font-family: 'EAmbit SemiBold'" class="m-0">
                  Lista
                </h3>
                <b-button
                  style="background-color: #2b4141; height: 28px"
                  class="border-0 rounded-circle"
                  size="sm"
                  v-b-modal.modal-profile
                  @click="whatModalDo = 'addChild'"
                  >+</b-button
                >
              </div>
              <b-form class="my-2">
                <b-form-input
                  id="childName"
                  placeholder="Pesquisa por nome..."
                ></b-form-input>
              </b-form>
            </div>
            <div class="p-2" style="height: 300px; overflow-y: scroll">
              <h5 style="font-family: 'EAmbit SemiBold'">Resultados (1)</h5>
              <article>
                <div
                  class="d-flex justify-content-between align-items-center pb-1 mt-2"
                  style="border-bottom: 1px solid #707070"
                >
                  <button
                    class="btn d-flex align-items-center col-10 p-0"
                    @click="childSelected = 'Joana Portugal'"
                  >
                    <b-avatar
                      variant="light"
                      text="JP"
                      size="2.5rem"
                    ></b-avatar>
                    <span
                      class="m-0 mx-2"
                      style="font-family: 'EAmbit SemiBold'"
                      :class="{
                        activeChild: childSelected === 'Joana Portugal',
                      }"
                    >
                      Joana Portugal
                    </span>
                  </button>
                  <button class="btn">
                    <span class="material-icons-round" style="color: #e87461"
                      >delete_forever</span
                    >
                  </button>
                </div>

                <div
                  class="d-flex justify-content-between align-items-center pb-1 mt-2"
                  style="border-bottom: 1px solid #707070"
                >
                  <button
                    class="btn d-flex align-items-center col-10 p-0"
                    @click="childSelected = 'Pedro Silva'"
                  >
                    <b-avatar
                      variant="light"
                      text="PS"
                      size="2.5rem"
                    ></b-avatar>
                    <span
                      class="m-0 mx-2"
                      style="font-family: 'EAmbit SemiBold'"
                      :class="{ activeChild: childSelected === 'Pedro Silva' }"
                    >
                      Pedro Silva
                    </span>
                  </button>
                  <button class="btn">
                    <span class="material-icons-round" style="color: #e87461"
                      >delete_forever</span
                    >
                  </button>
                </div>
              </article>
            </div>
          </div>
          <div class="col-8 py-3" style="overflow-y: scroll">
            <div class="d-flex justify-content-between">
              <h3 style="font-family: 'EAmbit SemiBold'" class="p-0 m-0">
                Detalhes
              </h3>
              <button class="btn" style="background: #e87461; color: white">
                Pedidos de Inscrição
              </button>
            </div>
            <div class="mb-4">
              <h5 class="d-flex align-items-center my-4">
                <span class="material-icons-round" style="color: #e87461"
                  >info</span
                >
                <span class="mx-2" style="font-family: 'EAmbit SemiBold'">
                  Informações Gerais
                </span>
              </h5>

              <div class="d-flex align-items-center">
                <div class="col-5">
                  <img
                    src="../assets/Imagem 1.png"
                    :style="{ width: '200px', height: '200px' }"
                    class="rounded-circle"
                  />
                </div>
                <b-form>
                  <b-form-group
                    label="Nome:"
                    label-for="profileName"
                    label-cols-sm="4"
                    label-align-sm="left"
                  >
                    <b-form-input
                      id="profileName"
                      value="Joana Portugal"
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
                      value="user123"
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
                      value="user123@gmail.com"
                      disabled
                    ></b-form-input>
                  </b-form-group>
                </b-form>
              </div>
            </div>
            <div class="mb-4">
              <h5 class="d-flex align-items-center my-4">
                <span class="material-icons-round" style="color: #e87461"
                  >school</span
                >
                <span class="mx-2" style="font-family: 'EAmbit SemiBold'">
                  Turmas
                </span>
              </h5>

              <table class="col-12">
                <tr style="background: #e87461; color: #fbfbf3">
                  <th class="px-4">Turma</th>
                  <th>Professor</th>
                  <th>Ações</th>
                </tr>
                <tbody>
                  <tr style="border-bottom: 2px solid #707070">
                    <td class="px-4 py-3">AA</td>
                    <td>Maria das Dores Soares</td>
                    <td>
                      <button
                        class="btn btn-danger d-flex justify-content- p-1"
                        style="background: #e95353"
                      >
                        <span
                          class="material-icons-round mx-1"
                          style="color: white; font-size: 18px"
                          >close</span
                        >
                        Anular
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div class="mb-4">
              <h5 class="d-flex align-items-center my-4">
                <span class="material-icons-round" style="color: #e87461"
                  >equalizer</span
                >
                <span class="mx-2" style="font-family: 'EAmbit SemiBold'">
                  Estatísticas
                </span>
              </h5>
            </div>
          </div>
        </div>
      </b-container>
      <b-container class="col-11 pt-4 px-4">
        <h2 style="font-family: 'EAmbit SemiBold'">Conquistas</h2>
        <div class="py-4 d-flex col-12 profileCard">
          <b-card
            class="p-0"
            style="width: 310px; background: #e36e63; border-radius: 10px"
          >
            <b-card-text style="border-radius: 10px">
              <div class="d-flex px-2 pt-1">
                <img src="https://cdn.shopify.com/s/files/1/1061/1924/products/Very_sad_emoji_icon_png_large.png?v=1571606089" 
                class="p-2"
                style="height: 76px;border: 5px solid #d85549; border-radius: 50%;">
                <div class="col-8">
                  <p
                    style="
                      font-family: 'EAmbit SemiBold';
                      color: white;
                      font-size: 28px;
                    "
                    class="m-0"
                  >
                    Tristeza
                  </p>
                  <b-progress max="20" style="height: 20px;">
                    <b-progress-bar
                      value="10"
                      :label="`10/20`"
                      variant="warning"
                      class="py-2"
                    ></b-progress-bar>
                  </b-progress>
                </div>
              </div>
            </b-card-text>
            <b-card-footer
              style="
                background: #d85549;
                border-bottom-left-radius: 10px;
                border-bottom-right-radius: 10px;
              "
            >
            </b-card-footer>
          </b-card>
        </div>
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
        <h4 :style="{ color: '#e87461' }">Alterar Password</h4>

        <b-form @submit.prevent="changePassword()">
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
            <b-button
              type="submit"
              class="text-end"
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

      <!--Associar Criança-->
      <div
        :style="{ fontFamily: 'EAmbit SemiBold' }"
        class="text-center"
        v-if="whatModalDo == 'addkid'"
      >
        <h4 :style="{ color: '#e87461' }">Associar Criança</h4>

        <b-form @submit.prevent="addChild()">
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
              v-model="formAdd.childName"
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
              v-model="formAdd.childPass"
              required
            ></b-form-input>
          </b-form-group>

          <div class="d-flex flex-row justify-content-end">
            <b-button
              type="submit"
              class="text-end"
              :style="{
                color: '#fdfdf3',
                'background-color': '#e87461',
                border: 'none',
              }"
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
        class="text-center d-flex flex-column align-items-center"
        v-if="whatModalDo == 'intoclass'"
      >
        <h4 :style="{ color: '#e87461' }">Pedidos para associar</h4>

        <table class="col-12 mt-3 ml-4 mr-4 mb-3 text-center">
          <tr :style="{ 'background-color': '#e87461', color: '#fbfbf3' }">
            <th class="p-1">Turma</th>
            <th>Professor</th>
            <th>Ações</th>
          </tr>
          <tr
            :style="{ 'border-bottom': '2px solid #707070' }"
            v-for="(request, index) in getRequests"
            :key="index"
          >
            <td class="p-4">{{ request.name }}</td>
            <td>{{ request.teacher }}</td>
            <td>
              <b-button
                size="sm"
                style="background-color: #4da1a9; border: none"
                class="ml-2 mr-1"
                @click="
                  acceptRequest(
                    getChildInfo.username,
                    request.teacher,
                    request.name
                  )
                "
              >
                <span class="material-icons-round">done</span>
              </b-button>
              <b-button
                variant="danger"
                size="sm"
                style="border: none"
                class="ml-1 mr-2"
                @click="
                  removeRequest(
                    getChildInfo.username,
                    request.teacher,
                    request.name
                  )
                "
              >
                <span class="material-icons-round">close</span>
              </b-button>
            </td>
          </tr>
        </table>
      </div>

      <!--Alterar imagem-->

      <div
        :style="{ fontFamily: 'EAmbit SemiBold' }"
        class="text-center"
        v-if="whatModalDo == 'changePicture'"
      >
        <h4 :style="{ color: '#e87461' }">Alterar Foto</h4>

        <b-form @submit="alterImg()">
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
            <b-button
              type="submit"
              class="text-end"
              :style="{
                color: '#fdfdf3',
                'background-color': '#e87461',
                border: 'none',
              }"
              >Alterar</b-button
            >
          </div>
        </b-form>
      </div>
    </b-modal>
  </div>
</template>

<script>
import SideBar from "@/components/SideBar.vue";
import AppFooter from "@/components/AppFooter.vue";
import AppSearch from "@/components/AppSearch.vue";

export default {
  name: "ProfileView",
  components: {
    SideBar,
    AppFooter,
    AppSearch,
  },
  data() {
    return {
      warning: "",
      whatModalDo: "",
      childSelected: "Joana Portugal",
      passForm: {
        oldPass: "",
        newPass: "",
        confPass: "",
      },
      formAdd: {
        childName: "",
        childPass: "",
      },
      newImg: "",
    };
  },
};
</script>

<style>
aside {
  width: 18vw;
}
main {
  margin-bottom: 8rem;
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
</style>
