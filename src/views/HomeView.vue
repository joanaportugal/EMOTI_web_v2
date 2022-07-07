<template>
  <div class="d-flex">
      <aside>
        <SideBar />
      </aside>
      <main class="d-flex flex-column justify-content-between">
        <AppSearch />
        <p>aaaa</p>
        <AppFooter />
      </main>
  </div>
</template>

<script>
import SideBar from "@/components/SideBar.vue"
import AppFooter from "@/components/AppFooter.vue"
import AppSearch from "@/components/AppSearch.vue"

export default {
  name: 'HomeView',
  components: {
    SideBar, AppFooter, AppSearch
  }
}
</script>

<style>
aside {
    width: 18vw;
}

</style>
