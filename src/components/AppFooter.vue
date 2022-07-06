<template>
  <div class="hello">
  <div :style="{width:'100%','min-height':'35vh','background-color':'#FDFDED'}" class="d-flex flex-column align-items-center">
    <picture>
        <source
          type="image/webp"
          srcset="../assets/Logo_Emoti.webp"
        />
        <source type="image/png" srcset="../assets/Logo_Emoti.png" />
        <img
          src="../assets/Logo_Emoti.png"
          width="200"
          alt=""
          class="mt-4 mb-3"
        />
      </picture>
    <p :style="{fontFamily:'EAmbit SemiBold',color:'#bfbfbf'}">Every day, a new adventure!</p>
    <div class="d-flex flex-row justify-content-around col-2 mt-2">
      <b-link href="#" :style="{fontSize:'30px',color:'#bfbfbf'}"><b-icon icon="twitter"></b-icon></b-link>
      <b-link href="#" :style="{fontSize:'30px',color:'#bfbfbf'}"><b-icon icon="facebook"></b-icon></b-link>
      <b-link href="#" :style="{fontSize:'30px',color:'#bfbfbf'}"><b-icon icon="instagram"></b-icon></b-link>
      <b-link href="#" :style="{fontSize:'30px',color:'#bfbfbf'}"><b-icon icon="youtube"></b-icon></b-link>
      <b-link href="#" :style="{fontSize:'30px',color:'#bfbfbf'}"><b-icon icon="linkedin"></b-icon></b-link>
    </div>
    <p class="mt-4" :style="{fontFamily:'EAmbit SemiBold',color:'#bfbfbf'}">&copy; Copyright EMOTI. All rights reserved</p>
  </div>
  </div>
</template>

<script>
export default {
  name: 'AppFooter',
}
</script>