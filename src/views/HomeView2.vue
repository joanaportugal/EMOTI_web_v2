<template>
  <div class="d-flex">
      <aside>
        <SideBar />
      </aside>
      <main class="d-flex flex-column justify-content-between">
        <div class="d-flex align-items-center border-bottom">
          <span class="material-icons-round">search</span>
          <b-input class="py-4 border border-0 col-12"/>
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
main {
      width: 80vw;
}
</style>
