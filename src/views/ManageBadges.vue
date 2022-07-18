<template>
  <div class="d-flex">
    <aside>
      <SideBar />
    </aside>
    <main>
      <AppSearch />
      <b-container class="bv-example-row mt-5 col-12">
        <h2 :style="{ color: '#2B4141', fontFamily: 'EAmbit SemiBold' }">
          Gerir Badges
        </h2>

        <div class="p-0 col-12 d-flex align-items-center">
          <b-form inline class="col-10 p-0">
            <label class="mr-sm-2" for="filterTitle">Descrição: </label>
            <b-form-input
              id="filterTitle"
              class="mb-2 mr-sm-5 mb-sm-0 col-3"
              :style="{ 'background-color': '#fdfdf3' }"
              v-model="formFilter.title"
            ></b-form-input>

            <label class="mr-sm-2" for="filterLevel">Emoção: </label>
            <b-form-select
              id="filterLevel"
              class="mb-2 mr-sm-0 mb-sm-0 col-2"
              :style="{ 'background-color': '#fdfdf3' }"
              v-model="formFilter.emotion"
            >
              <b-form-select-option value="">Qualquer</b-form-select-option>
            </b-form-select>
          </b-form>

          <div class="col-2 p-0 d-flex justify-content-end">
            <b-button
              :style="{
                color: '#fdfdf3',
                'background-color': '#e87461',
                border: 'none',
              }"
              v-b-modal.modalManageBadges
              @click="whatModalDo = 'addBadge'"
              >Adicionar</b-button
            >
          </div>
        </div>

        <div class="mt-4" style="min-height: 51vh">
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
      </b-container>
      <AppFooter />
    </main>
    <b-modal id="modalManageBadges" centered hide-footer>
      <div v-if="whatModalDo == 'addBadge'">
        <h4 :style="{ color: '#e87461' }">Adicionar Badge</h4>
        <b-form>
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
      whatModalDo: "",
      formFilter: {
        title: "",
        emotion: "",
      },
      newBadge: {
        badgeName: "",
        pointsNeeded: "",
        badgeIMG: "",
        badgeEmotion: "",
      },
    };
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
</style>
