<template>
  <div class="d-flex">
    <aside>
      <SideBar />
    </aside>
    <main>
      <AppSearch />
      <b-container class="bv-example-row mt-5">
        <b-row> </b-row>
        <!--
            <b-container class="col-11 pt-4">
         <div class="col-12" :style="{color:'#e87461',fontFamily:'EAmbit SemiBold'}"><h2>Gerir Badges</h2></div>

         <div class="col-12 mt-4">
              <b-form inline >
                  <label class="mr-sm-2" for="filterTitle">Descrição: </label>
                  <b-form-input id="filterTitle" class="mb-2 mr-sm-5 mb-sm-0 col-3" :style="{'background-color':'#fdfdf3'}" v-model="formFilter.title"></b-form-input>

                  <label class="mr-sm-2" for="filterLevel">Emoção: </label>
                  <b-form-select id="filterLevel" class="mb-2 mr-sm-0 mb-sm-0 col-2"  :style="{'background-color':'#fdfdf3'}" v-model="formFilter.emotion">
                     <b-form-select-option value="">Qualquer</b-form-select-option>
                    <b-form-select-option v-for="(emotion,index) in getEmotions" :key="index" :value="emotion.name">{{emotion.name}}</b-form-select-option>
                  </b-form-select>
             </b-form>
         </div>

         <div class="col-12 d-flex flex-row justify-content-end mt-4">
             <b-button :style="{color:'#fdfdf3','background-color':'#e87461',border:'none'}" v-b-modal.modalManagerBadges @click="modalBadgeDo='addBadge'">Adicionar</b-button>
         </div>

        <div class="col-12 mt-2">
            <table class="col-12 text-center">
                  <tr :style="{'background-color':'#e87461',color:'#fbfbf3'}">
                      <th class="p-1">Descrição</th>
                      <th>Emoção</th>
                      <th>Pontos Necessários</th>
                      <th>Ações</th>
                  </tr>
                  <tr :style="{'border-bottom':'2px solid #707070'}" v-for="(badge,index) in getBagdes" :key="index">
                      <td class="p-4">{{badge.badgeName}}</td>
                      <td>{{badge.badgeEmotion}}</td>
                      <td>{{badge.pointsNeeded}}</td>
                      <td><b-button style="border:none" variant="danger" class=" ml-2 mr-1" @click="removebadge(badge.badgeName)"><b-icon icon="trash-fill"></b-icon></b-button></td>
                  </tr>
             </table>
         </div>
     </b-container>
        -->
      </b-container>
      <AppFooter />
    </main>
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
