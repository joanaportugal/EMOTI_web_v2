<template>
  <div id="app">
    <SideBar/>
    <router-view/>
  </div>
</template>

<script>
import SideBar from './components/SideBar.vue'

export default {
  name: 'HomeView',
  components: {
    SideBar
  }
}
</script>


<style>
#app {
  background-color:#FDFDF3;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
