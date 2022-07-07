<template>
  <div class="d-flex">
      <aside>
        <SideBar />
      </aside>
      <main class="d-flex flex-column justify-content-between">
        <div class="d-flex align-items-center" style="width:82vw; border-bottom: 1px solid #707070 ;">
          <!--<span class="material-icons-round">search</span>
          <b-input class="py-4 border border-0 col-12"/>-->
          <b-input-group class="col-10">
            <template  #prepend >
              <div class="d-flex flex-row justify-content-center align-items-center mx-3">
              <span class="material-icons-round" style="font-size:32px;">search</span>
              </div>
            </template>
            <b-form-input placeholder="Pesquisa alguma coisa..." style="background-color:#FDFDF3;border:none;color:#2B4141;height:10vh;font-size:25px;"></b-form-input>
          </b-input-group>
          <div class="col-2 d-flex flex-row justify-content-end pr-5">
            <b-button class="d-flex flex-row justify content-center align-items-center shadow-sm rounded-circle p-2" style="background-color:#E87461;border:none;"><span class="material-icons-round" style="font-size:30px;">notifications</span></b-button>
          </div>
        </div>

        <AppFooter />
      </main>
  </div>
</template>

<script>
import SideBar from "@/components/SideBar.vue"
import AppFooter from "@/components/AppFooter.vue"

export default {
  name: 'HomeView',
  components: {
    SideBar, AppFooter
  }
}
</script>

<style>
aside {
    width: 18vw;
}

</style>
