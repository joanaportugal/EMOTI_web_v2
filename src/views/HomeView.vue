<template>
  <div class="d-flex flex-column justify-content-between" id="page">
  <header>
    <div class="d-flex align-items-center border-bottom">
    <b-button v-b-toggle.sidebar style="background-color: #e87461;" class="d-flex py-3 col-2 border-0"><span class="material-icons-round">menu</span><span>Menu</span></b-button>
    <div class="d-flex align-items-center col-10">
      <span class="material-icons-round">search</span>
    <b-input class="py-4 border border-0"/>
    </div>
    </div>
    <b-sidebar id="sidebar" title="" shadow>
      <SideBar />
    </b-sidebar>
  </header>

    <AppFooter />
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
#page {
  height: 100vh;
}
</style>
