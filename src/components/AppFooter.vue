<template>
  <footer>
  <div :style="{width:'100%','min-height':'10vh','background-color':'#FDFDED'}" class="d-flex flex-column align-items-center">
    <div class="col-12 mt-4 d-flex justify-content-center">
      <router-link :to="{name:'Twitter'}"><b-img src="../assets/Grupo 360.png" class="mx-2" fluid alt="Fluid image"></b-img></router-link>
      <router-link :to="{name:'Facebook'}"><b-img src="../assets/Grupo 361.png" class="mx-2" fluid alt="Fluid image"></b-img></router-link>
      <router-link :to="{name:'Instagram'}"><b-img src="../assets/Grupo 362.png" class="mx-2" classfluid alt="Fluid image"></b-img></router-link>
      <router-link :to="{name:'Youtube'}"><b-img src="../assets/Grupo 363.png" class="mx-2" fluid alt="Fluid image"></b-img></router-link>
      <router-link :to="{name:'Linkedin'}"><b-img src="../assets/Grupo 364.png" class="mx-2" fluid alt="Fluid image"></b-img></router-link>
    </div>
    <p class="mt-4" :style="{fontFamily:'EAmbit SemiBold',color:'#bfbfbf'}">&copy; Copyright EMOTI. All rights reserved</p>
  </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
}
</script>

<style>
</style>