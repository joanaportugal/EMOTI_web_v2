<template>
  <header
    class="d-flex align-items-center"
    style="border-bottom: 1px solid #707070; background-color: #fdfdf3"
  >
    <b-input-group class="col-10">
      <template #prepend>
        <div
          class="d-flex flex-row justify-content-center align-items-center mx-3"
        >
          <span class="material-icons-round" style="font-size: 32px"
            >search</span
          >
        </div>
      </template>
      <b-form-input
        id="search"
        placeholder="Pesquisa alguma coisa..."
        style="
          background-color: #fdfdf3;
          border: none;
          color: #2b4141;
          height: 10vh;
          font-size: 25px;
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
        style="background-color: #e87461; border: none"
        @click="openNotification = true"
        v-if="openNotification == false"
      >
        <span class="material-icons-round" style="font-size: 30px"
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
        style="background-color: #e87461; border: none"
        @click="openNotification = false"
        v-if="openNotification == true"
      >
        <span class="material-icons-round" style="font-size: 30px">close</span>
      </b-button>
    </div>
    <!--Notificações-->
    <div
      class="shadow-sm p-4 d-flex flex-column"
      :style="{
        width: '30vw',
        minHeight: 'auto',
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
        :style="{ border: '2px solid #e87461', borderRadius: '5px' }"
        class="px-3"
      >
        <b-card
          class="my-3"
          size="sm"
          header-class="headerNotification"
          body-class="bodyNotification"
          :style="{ border: 'none' }"
        >
          <template #header>
            <div
              class="
                col-12
                p-0
                d-flex
                flex-row
                justify-content-between
                aling-items-center
              "
            >
              <h6 :style="{ fontFamily: 'EAmbit SemiBold' }" class="mb-0">
                Nova Notificação
              </h6>
              <b-link :style="{ color: '#fdfdf3', fontSize: '15px' }"
                ><b-icon-x-lg></b-icon-x-lg
              ></b-link>
            </div>
          </template>
          <b-card-text>Header and footers using props.</b-card-text>
        </b-card>
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
      }"
      v-if="openSearch == true && searchForm != ''"
    >
      <h3 :style="{ color: '#2B4141', fontFamily: 'EAmbit SemiBold' }">
        Resultados (45)
      </h3>

      <div
        :style="{ border: '2px solid #e87461', borderRadius: '5px' }"
        class="px-3"
      >
        <div class="my-2">
          <h5 style="font-family: 'EAmbit SemiBold'">Pessoas (2)</h5>
          <div class="my-2 d-flex flex-row">
            <div class="col-9 p-0">
              <b-avatar variant="light" text="PS" size="2.5rem"></b-avatar>
              <span class="m-0 mx-2" style="font-family: 'EAmbit SemiBold'">
                Pedro Silva
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
              <b-link :style="{ fontSize: '15px', color: '#e87461' }">
                <span class="material-icons-round" style="font-size: 32px"
                  >arrow_outward</span
                >
              </b-link>
            </div>
          </div>
        </div>
        <hr />
        <div class="my-2">
          <h5 style="font-family: 'EAmbit SemiBold'">Atividades (43)</h5>
          <div class="my-2 d-flex flex-row">
            <div class="col-9 p-0">
              <b-img
                src="../assets/Imagem 7.png"
                :style="{ width: '6vw' }"
              ></b-img>
              <span class="m-0 mx-2" style="font-family: 'EAmbit SemiBold'">
                Queres brincar ?
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
              <b-link :style="{ fontSize: '15px', color: '#e87461' }">
                <span class="material-icons-round" style="font-size: 32px"
                  >arrow_outward</span
                >
              </b-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "AppSearch",
  data() {
    return {
      openNotification: false,
      openSearch: false,
      searchForm: "",
    };
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
