<template>
  <div id="backgroundW" class="d-flex align-items-center">
  <b-container class="col-12 d-flex flex-row justify-content-between pl-5 pr-2">
      <div class="col-12 col-md-4 d-flex flex-column align-items-center justify-content-around pt-2">
         <picture>
          <source type="image/webp" srcset="../assets/logo2.webp" />
          <source type="image/png" srcset="../assets/logo2.png" />
          <img src="../assets/logo2.png" width="400px" alt="" />
        </picture>
        
        <div class="mt-3 text-center">
          <h5 style="font-size: 25px;font-family: EAmbit SemiBold">
            Olá queres brincar e aprender ao mesmo tempo ?
          </h5>
          <p style="font-size: 20px">
            Não te preocupes! Estás no sítio certo,para além disso, os teus pais
            e professores podem juntarem-se a ti, nesta aventura!
          </p>
        </div>
        
        <div class="w-75 d-flex flex-row justify-content-around pt-2">
          <b-button @click="whatDo = 'login'" size="lg" style="width: 40%;background-color: #e87461;border: #e87461;font-family: EAmbit SemiBold;" v-b-modal.modal-center>Entrar</b-button>
          <b-button @click="whatDo = 'register'" size="lg" style="width: 40%;background-color: #fdfdf3;border: 1px solid #e87461;color: #e87461;font-family: EAmbit SemiBold;" v-b-modal.modal-center>Registar</b-button>
        </div>

      </div>

      <div class="col-7">
        <picture>
          <source type="image/webp" srcset="../assets/foto_capa.webp" />
          <source type="image/png" srcset="../assets/foto_capa.png" />
          <img src="../assets/foto_capa.png" width="720px" alt="" />
        </picture>
      </div>

       <b-modal
        id="modal-center"
        centered
        hide-footer
        header-border-variant="0"
        header-class="color"
        body-class="color"
      >
        <div
          v-if="whatDo == 'login'"
          style="font-family: EAmbit Regular; color: #2B4141"
          class="text-center"
        >
          <h3 class="mt-2 mb-4" :style="{ fontFamily: 'EAmbit SemiBold' }">
            Autenticar
          </h3>

          <b-form action="" @submit.prevent="login" :style="{border:'2px solid #e87461',borderRadius:'5px'}" class="px-3 pt-4 pb-3">
            <b-input-group class="mb-4">
              <b-form-input
                v-model="formLogin.username"
                placeholder="Username"
                style="background-color: white"
                required
              ></b-form-input>
            </b-input-group>

            <b-input-group class="mb-4">
              <b-form-input
                type="password"
                v-model="formLogin.password"
                placeholder="Password"
                style="background-color: white"
                required
              ></b-form-input>
            </b-input-group>

            <div class="d-flex flex-row justify-content-end">
              <b-button
                type="submit"
                style="background-color: #e87461; color: #fdfdf3; border: none"
                class="mb-2 w-25"
                >Entrar</b-button
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
          v-else
          style="font-family: EAmbit Regular; color: #2B4141"
          class="text-center"
        >
          <h3 class="mt-3 mb-4" :style="{ fontFamily: 'EAmbit SemiBold' }">
            Registar
          </h3>

          <b-form action="" @submit.prevent="register" :style="{border:'2px solid #e87461',borderRadius:'5px'}" class="px-3 pt-4 pb-3">
            <b-input-group class="mb-4">
              <b-form-input
                v-model="formRegister.username"
                placeholder="Username"
                style="background-color: white"
                required
              ></b-form-input>
            </b-input-group>

            <b-input-group class="mb-4">
              <b-form-input
                type="password"
                v-model="formRegister.password"
                placeholder="Password"
                style="background-color: white"
                required
              ></b-form-input>
            </b-input-group>

            <b-input-group class="mb-4">
              <b-form-input
                type="password"
                v-model="c_password"
                placeholder="Confirmar Password"
                style="background-color:white"
                required
              ></b-form-input>
            </b-input-group>

            <b-input-group class="mb-4">
              <b-form-input
                v-model="formRegister.name"
                placeholder="Nome"
                style="background-color: white"
                required
              ></b-form-input>
            </b-input-group>

            <b-input-group class="mb-4">
              <b-form-input
                type="email"
                v-model="formRegister.email"
                placeholder="Email"
                style="background-color: white "
                required
              ></b-form-input>
            </b-input-group>

            <b-input-group class="mb-5">
              <b-form-select
                v-model="formRegister.typeUser"
                required
                style="background-color: white"
              >
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
            <div class="d-flex flex-row justify-content-end">
              <b-button
                type="submit"
                style="background-color: #e87461; color: #fdfdf3; border: none"
                class="mb-2 w-25"
                >Registar</b-button
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
      
    </b-container>
  </div>
</template>

<script>

export default {
  name: 'LandingView',
  data() {
    return {
      warning: "",
      whatDo: "",
      options: ["Criança", "Tutor", "Professor"],
      c_password: "",
      form: {},
      formRegister: {
        username: "",
        password: "",
        name: "",
        email: "",
        typeUser: null,
      },
      formLogin: {
        username: "",
        password: "",
      },
    };
  },
}
</script>

<style>
#backgroundW {
  width: 100vw;
  height: 100vh;
  background: url(../assets/wallpaper1.svg);
  background-size: 1540px auto;
}

.color{
  background-color:#fdfdf3
}
</style>
