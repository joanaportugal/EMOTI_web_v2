<template>
  <div id="backgroundW" class="d-flex align-items-center">
    <b-container
      class="col-12 d-flex flex-row justify-content-between pl-5 pr-2"
    >
      <div
        class="
          col-12 col-md-4
          d-flex
          flex-column
          align-items-center
          justify-content-around
          pt-2
        "
      >
        <picture>
          <source type="image/webp" srcset="../assets/logo2.webp" />
          <source type="image/png" srcset="../assets/logo2.png" />
          <img src="../assets/logo2.png" width="400px" alt="" />
        </picture>

        <div class="mt-3 text-center">
          <h5 :style="{ fontSize: '25px', fontFamily: 'EAmbit SemiBold' }">
            Olá queres brincar e aprender ao mesmo tempo ?
          </h5>
          <p :style="{ fontSize: '20px' }">
            Não te preocupes! Estás no sítio certo,para além disso, os teus pais
            e professores podem juntarem-se a ti, nesta aventura!
          </p>
        </div>

        <div class="w-75 d-flex flex-row justify-content-around pt-2 test">
          <b-button
            @click="whatDo = 'login'"
            size="lg"
            :style="{ width: '40%', fontFamily: 'EAmbit SemiBold' }"
            v-b-modal.modal-center
            :id="styleButton=='a'?'whiteA':styleButton=='b'?'whiteA':'orangeA'" @mouseover="styleButton='a'" @mouseleave="styleButton=''"
            >Entrar</b-button
          >
          <b-button
            @click="whatDo = 'register'"
            size="lg"
            :style="{ width: '40%', fontFamily: 'EAmbit SemiBold' }"
            v-b-modal.modal-center
            :id="styleButton=='b'?'orangeA':styleButton=='a'?'orangeA':'whiteA'" @mouseover="styleButton='b'" @mouseleave="styleButton=''"
            >Registar</b-button
          >
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
          :style="{ fontFamily: 'EAmbit Regular', color: '#2b4141' }"
          class="text-center"
        >
          <h3 class="mt-2 mb-4" :style="{ fontFamily: 'EAmbit SemiBold' }">
            Autenticar
          </h3>

          <b-form
            action=""
            @submit.prevent="auth"
            :style="{ border: '2px solid #e87461', borderRadius: '5px' }"
            class="px-3 pt-4 pb-3"
          >
            <b-input-group class="mb-4">
              <b-form-input
                v-model="formLogin.username"
                placeholder="Username"
                :style="{ backgroundColor: 'white' }"
                required
              ></b-form-input>
            </b-input-group>

            <b-input-group class="mb-4">
              <b-form-input
                type="password"
                v-model="formLogin.password"
                placeholder="Password"
                :style="{ backgroundColor: 'white' }"
                required
              ></b-form-input>
            </b-input-group>

            <div class="d-flex flex-row justify-content-end">
              <b-button type="submit" class="mb-2 w-25" id="orange"
                >Entrar</b-button
              >
            </div>

            <div
              v-if="message != ''"
              :style="{
                'background-color':'#C82333',
                 color: '#fdfdf3',
                'border-radius': '4px',
              }"
            >
              <p>{{ message }}</p>
            </div>
          </b-form>
        </div>

        <div
          v-else
          :style="{ fontFamily: 'EAmbit Regular', color: '#2b4141' }"
          class="text-center"
        >
          <h3 class="mt-3 mb-4" :style="{ fontFamily: 'EAmbit SemiBold' }">
            Registar
          </h3>

          <b-form
            action=""
            @submit.prevent="createUser"
            :style="{ border: '2px solid #e87461', borderRadius: '5px' }"
            class="px-3 pt-4 pb-3"
          >
            <b-input-group class="mb-4">
              <b-form-input
                v-model="formRegister.username"
                placeholder="Username"
                :style="{ backgroundColor: 'white' }"
                required
              ></b-form-input>
            </b-input-group>

            <b-input-group class="mb-4">
              <b-form-input
                type="password"
                v-model="formRegister.password"
                placeholder="Password"
                :style="{ backgroundColor: 'white' }"
                required
              ></b-form-input>
            </b-input-group>

            <b-input-group class="mb-4">
              <b-form-input
                type="password"
                v-model="c_password"
                placeholder="Confirmar Password"
                :style="{ backgroundColor: 'white' }"
                required
              ></b-form-input>
            </b-input-group>

            <b-input-group class="mb-4">
              <b-form-input
                v-model="formRegister.name"
                placeholder="Nome"
                :style="{ backgroundColor: 'white' }"
                required
              ></b-form-input>
            </b-input-group>

            <b-input-group class="mb-4">
              <b-form-input
                type="email"
                v-model="formRegister.email"
                placeholder="Email"
                :style="{ backgroundColor: 'white' }"
                required
              ></b-form-input>
            </b-input-group>

            <b-input-group class="mb-5">
              <b-form-select
                v-model="formRegister.typeUser"
                required
                :style="{ backgroundColor: 'white' }"
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
              <b-button type="submit" class="mb-2 w-25" id="orange"
                >Registar</b-button
              >
            </div>

            <div
              v-if="message != ''"
              :style="{
                'background-color':'#C82333',
                color: '#fdfdf3',
                'border-radius': '4px',
              }"
            >
              <p>{{ message }}</p>
            </div>
          </b-form>
        </div>
      </b-modal>
    </b-container>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "LandingView",
  data() {
    return {
      message: "",
      whatDo: "",
      options: ["Criança", "Tutor", "Professor"],
      c_password: "",
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
      styleButton:""
    };
  },
  methods: {
    ...mapActions(["login","register"]),
    auth() {
      this.login(this.formLogin)
        .then(() => this.$router.push({ name: "Página Principal" }))
        .catch((err) => {
          this.message = `${err}`;
          setTimeout(() => {
            this.message = "";
          }, 5000);
        });
    },
    createUser(){
      if(this.formRegister.password!=this.c_password){
        this.message='As passwords não coincidem'
        setTimeout(()=>{this.message=""},5000)
      }
      else{
      this.register(this.formRegister)
      .then(()=>{
        this.login({username:this.formRegister.username,password:this.formRegister.password})
        .then(() => this.$router.push({ name: "Página Principal" }))
        .catch((err) => {
          this.message = `${err}`;
          setTimeout(() => {
            this.message = "";
          }, 5000);
        });
      })
      .catch((err) => {
          this.message = `${err}`;
          setTimeout(() => {
            this.message = "";
          }, 5000);
        });
      }
    }
  },
};
</script>

<style>
#backgroundW {
  width: 100vw;
  height: 100vh;
  background: url(../assets/wallpaper1.svg);
  background-size: 100vw auto;
}

.color {
  background-color: #fdfdf3;
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

#orangeA {
  background: #e87461;
  border: 1px solid #e87461;
}

#whiteA {
  background-color: #fdfdf3;
  border: 1px solid #e87461;
  color: #e87461;
}

</style>
